import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { problem } = await req.json();

        if (!problem) {
            return NextResponse.json({ error: "Problem description is required" }, { status: 400 });
        }

        if (!process.env.GEMINI_API_KEY) {
            // Fallback for demo purposes if the API key is not set in the environment
            await new Promise(resolve => setTimeout(resolve, 2000));
            return NextResponse.json({
                blueprint: `**[DEMO MODE - NO GEMINI API KEY CONFIGURED]**\n\nBased on your problem: *" ${problem} "*\n\n### Phase 1: Data Ingestion Pipeline\n- Implement webhook listeners to catch incoming data.\n- Route through an LLM to extract structured JSON.\n\n### Phase 2: Processing & Logic\n- Validate extracted data against business rules.\n- Trigger necessary side-effects (e.g., email notifications).\n\n### Phase 3: CRM Integration\n- Push structured data cleanly into your CRM using a custom API integration.\n\n**Estimated Efficiency Gain:** 80%\n**Implementation Time:** 14 Days.`
            });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `You are a brilliant Senior Solution Architect working for 'ai.collective.social' agency. 
We specialize in 2-week sprints to solve 80/20 operational bottlenecks using modern automation, AI agents, specialized dashboards, and custom web apps.

A potential client has submitted the following operational bottleneck:
"${problem}"

Draft an extremely actionable, high-level technical blueprint (3-4 bullet points) explaining exactly how our agency would solve this using modern AI patterns (e.g., LLMs, webhooks, Vector DBs, Next.js, automated bots).
Keep it punchy, technical but easily understandable to a founder/business owner, and extremely confident. 
Bold the key technologies used.
Do not include any greeting or conclusion text. Output the pure markdown architecture plan.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ blueprint: text });
    } catch (error) {
        console.error("Blueprint generation error:", error);
        return NextResponse.json({ error: "Failed to generate blueprint" }, { status: 500 });
    }
}
