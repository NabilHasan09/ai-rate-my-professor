import { embeddingModel, chatModel } from "@/gemini";
import { Pinecone } from "@pinecone-database/pinecone";
import { NextResponse } from "next/server";

let conversationHistory = []

export async function POST(req) {

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 512,
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

        const results = await index.query({ 
            topK: 10,
            includeMetadata: true,
            includeValues: true,
            vector: embedding['values'],
        })

        console.log(results)

        let resultString = 'Returned Results'

        results.matches.forEach((match) => {
            resultString+=`\n
            Professor: ${match.id}\n
            Subject: ${match.metadata.subject}\n
            Stars: ${match.metadata.stars}\n
            Review: ${match.metadata.review}\n`
        })

        const chatSession = chatModel.startChat({
            history: conversationHistory,
            generationConfig
        }); 

        const result = await chatSession.sendMessage(resultString);
        
        conversationHistory.push({
            role: 'model',
            parts: [{text: result.response.text() }]
        });

        return result.response.text();
    }

    const message = await run();

    return new NextResponse(message)

}