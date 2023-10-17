import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Configuration from 'openai'
import OpenAIApi from 'openai'
const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
    req: Request
) {
    console.log("yah i am him the one piece exits!!!")
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount = "1", resolution = "512x512" } = body;
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAi API key not configured", { status: 500 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        if (!amount) {
            return new NextResponse("Amount is required", { status: 400 });
        }

        if (!resolution) {
            return new NextResponse("Resolution is required", { status: 400 });
        }


        const response = await openai.images.generate({
            prompt,
            n: parseInt(amount),
            size: resolution
        });
       




          
        return NextResponse.json(response.data);


    } catch (error: any) {
        console.log("Image generation Error ", error);
        return new NextResponse("Internal Error ", { status: 500 })
    }
}