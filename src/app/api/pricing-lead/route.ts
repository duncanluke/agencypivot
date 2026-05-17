import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, tier } = body;

        if (!email || !tier) {
            return NextResponse.json({ error: "Missing email or tier" }, { status: 400 });
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
                    text: `💰 *New Pricing Lead!* \nEmail: ${email} \nSelected Tier: *${tier}*`,
                }),
            }).catch(e => console.error("Slack warning: ", e)); 
        }

        // 2. Send email to the team
        const mailerSendApiKey = process.env.MAILERSEND_API_KEY;
        if (mailerSendApiKey) {
            const teamEmail = "team@collective.social";
            
            const payload = {
                from: { email: "team@collective.social", name: "Social Collective Website" },
                to: [ { email: teamEmail, name: "Social Collective Team" } ],
                subject: `New Lead for Pricing Tier: ${tier}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
                        <h2 style="color: #4f46e5;">New Pricing Request</h2>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Selected Tier:</strong> ${tier}</p>
                        <p>Please reach out to this lead ASAP to schedule the next steps!</p>
                    </div>
                `,
                text: `New Pricing Request\n\nEmail: ${email}\nSelected Tier: ${tier}`
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
        console.error("Pricing lead capture error:", error);
        return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
    }
}
