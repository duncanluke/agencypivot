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
                to: [ { email: email, name: email } ],
                bcc: [ { email: "team@collective.social", name: "Social Collective Team" } ],
                subject: "Your Requested Company Profile from Social Collective",
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
                        <h2 style="color: #4f46e5;">Welcome to Social Collective.</h2>
                        <p>Hi there,</p>
                        <p>Thank you for requesting our company profile.</p>
                        <p>You can access and download the full document using the link below to learn more about our impact validation technology, past case studies, and AI solutions.</p>
                        <p style="margin: 32px 0;">
                            <a href="https://ai.collective.social/TSC-Company-Profile.pdf" target="_blank" style="background-color: #4f46e5; color: white; padding: 16px 32px; font-size: 16px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; box-shadow: 0 4px 6px rgba(79, 70, 229, 0.2);">📄 Download Company Profile</a>
                        </p>
                        <p>If you have any further questions or would like to discuss a project, please feel free to reply directly to this email.</p>
                        <p style="margin-top: 32px;">Looking forward to speaking with you,<br/><strong>The Social Collective Team</strong></p>
                    </div>
                `,
                text: "Thank you for requesting our company profile. Download it here: https://ai.collective.social/TSC-Company-Profile.pdf. If you have any further questions, please reply directly to this email.",
                settings: {
                    track_clicks: false
                }
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
