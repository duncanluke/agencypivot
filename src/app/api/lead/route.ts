import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ error: "Missing email" }, { status: 400 });
        }

        // 1. Notify the Agency via Slack
        const slackToken = process.env.SLACK_BOT_TOKEN;
        if (slackToken) {
            await fetch("https://slack.com/api/chat.postMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${slackToken}`,
                },
                body: JSON.stringify({
                    channel: "#agent",
                    text: `🚨 *New AI Match Request:* ${email}`,
                }),
            }).catch(e => console.error("Slack warning: ", e)); 
        }

        // 2. Send the Blueprint via MailerSend HTTP API
        const mailerSendApiKey = process.env.MAILERSEND_API_KEY;
        if (mailerSendApiKey) {
            const senderEmail = process.env.MAILERSEND_FROM_EMAIL || "team@collective.social";
            
            const payload = {
                from: { email: senderEmail, name: "Social Collective" },
                to: [ { email: email, name: "Visionary Founder" } ],
                subject: "Your AI Match Assessment from Social Collective",
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
                        <h2 style="color: #4f46e5;">Welcome to Social Collective.</h2>
                        <p>Hi there,</p>
                        <p>Thank you for reaching out. The next step is a brief, zero-pressure discovery call where we can unpack your operational bottlenecks and understand how your business works.</p>
                        <p>After the call, we will generate a customized <strong>AI Match Assessment</strong> for you to keep. This report clearly identifies where AI agents and Live Dashboards can modernize your stack.</p>
                        <p>To get started, please grab a time directly on our calendar here:</p>
                        <p style="margin: 30px 0;">
                            <a href="https://calendly.com/" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Book Your Discovery Call</a>
                        </p>
                        <p>Looking forward to speaking with you,<br/><strong>The Social Collective Team</strong></p>
                    </div>
                `,
                text: "Thank you for reaching out. Please book a brief discovery call with us so we can begin unpacking your processes and generating your free AI Match Assessment: https://calendly.com/"
            };

            const mailerRes = await fetch("https://api.mailersend.com/v1/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    Authorization: `Bearer ${mailerSendApiKey}`,
                },
                body: JSON.stringify(payload)
            });

            if (!mailerRes.ok) {
                console.error("MailerSend API network error", await mailerRes.text());
            }
        } else {
            console.warn("MAILERSEND_API_KEY is not defined, skipping email send.");
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Lead capture error:", error);
        return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
    }
}
