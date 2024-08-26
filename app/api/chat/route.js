import { embeddingModel, chatModel } from "@/gemini";
import { Pinecone } from "@pinecone-database/pinecone";
import { NextResponse } from "next/server";

let conversationHistory = []

export async function POST(req) {

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 200,
        responseMimeType: "text/plain",
    };
    
    const userInput = await req.text()

    const pc = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY
    })

    const index = pc.index('rag').namespace('ns1')

    async function run() {

        conversationHistory.push({
            role: 'user',
            parts: [{text : userInput}]
        });

        const embedding = (await embeddingModel.embedContent(userInput)).embedding
        console.log(userInput)

        const results = await index.query({ 
            topK: 3,
            includeMetadata: true,
            vector: embedding['values']
        })

        let resultString = 'Returned Results'

        results.matches.forEach((match) => {
            resultString+=`\n
            Professor: ${match.id}
            Subject: ${match.metadata.subject}
            Stars: ${match.metadata.stars}
            Review: ${match.metadata.review}
            \n`
        })

        console.log(resultString)

        const chatSession = chatModel.startChat({
            history: conversationHistory,
            generationConfig
        }); 

        //const result = await chatSession.sendMessage(userInput);
        //const refinedResponse = result.response.text() + resultString;
        
        conversationHistory.push({
            role: 'model',
            parts: [{text: resultString }]
        });

        return resultString;
    }

    const message = await run();

    return new NextResponse(message)

}