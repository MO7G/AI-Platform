import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Configuration from 'openai'
import OpenAIApi from 'openai'
import { ChatCompletionMessageParam } from "openai/resources/chat/completions"

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);
const instructionMessage : ChatCompletionMessageParam= {
    role: "system",
    content:`you are a code generator. You must anser only in markdwon code
    snippets. Use code commetns for explanations as well. `
}
export async function POST(
    req: Request
) {
    console.log("yah i am him the one piece exits!!!")
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAi API key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[instructionMessage,...messages]
        });
        return NextResponse.json(response.choices[0].message);


    } catch (error: any) {
        console.log("Code Error ", error);
        return new NextResponse("Internal Error ", { status: 500 })
    }
}