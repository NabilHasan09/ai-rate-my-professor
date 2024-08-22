import { model } from "@/gemini";
import { NextResponse } from "next/server";

let conversationHistory = []

export async function POST(req) {
    
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };
    
    const userinput = await req.text()

    async function run() {
        conversationHistory.push({
            role: 'user',
            parts: [{text : userinput}]
    });

    const chatSession = model.startChat({
        history: conversationHistory,
        generationConfig
    });

    const result = await chatSession.sendMessage(userinput);

    const aiResponse = await result.response.text();
    console.log(aiResponse)

    conversationHistory.push({
        role: 'model',
        parts: [{text: aiResponse }]
    });

    return aiResponse;

    }
    const message = await run();

    return new NextResponse(message)

}