import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const slackToken = process.env.SLACK_BOT_TOKEN;
        if (!slackToken) {
            console.error("SLACK_BOT_TOKEN is not defined in environment.");
            return NextResponse.json({ error: "Server Configuration Error: Slack Token Missing" }, { status: 500 });
        }

        const slackRes = await fetch("https://slack.com/api/chat.postMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${slackToken}`,
            },
            body: JSON.stringify({
                channel: "#agent",
                text: `🚀 *New Lead from ai.collective.social!* 🚀\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`,
            }),
        });

        if (!slackRes.ok) {
            console.error("Slack API network error", await slackRes.text());
            return NextResponse.json({ error: "Failed to communicate with Slack API" }, { status: 500 });
        }

        const data = await slackRes.json();
        if (!data.ok) {
            console.error("Slack API returned error:", data.error);
            return NextResponse.json({ error: `Slack Error: ${data.error}` }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
