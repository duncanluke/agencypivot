"use client";

import { Mail, Terminal, CheckCircle2 } from "lucide-react";
import BlueprintGenerator from "@/components/BlueprintGenerator";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 pb-40 flex flex-col items-center w-full">
            <div className="text-center max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-6">
                    <Terminal className="w-4 h-4" /> System Online & Ready
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">Let&apos;s Build It.</h1>
                <p className="text-xl text-slate-400 leading-relaxed mb-12">
                    Skip the endless consultation calls. Fill out the form below to get in touch, or use our AI architect directly to draft a solution plan.
                </p>
            </div>

            {/* Standard Contact Form */}
            <div className="w-full max-w-2xl bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-md mb-24 min-h-[480px] flex flex-col justify-center relative overflow-hidden">
                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 flex items-center justify-center rounded-full mb-6 relative">
                            <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-full animate-ping"></div>
                            <CheckCircle2 className="w-10 h-10 relative z-10" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Message Received.</h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-md">
                            Your inquiry has been securely routed to our internal Slack channel <code className="text-emerald-400 font-mono">#agent</code>. Our engineering team will review it shortly.
                        </p>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all hover:scale-105"
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form
                        className="space-y-6 flex flex-col"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-wide text-slate-300">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Jane Doe"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-wide text-slate-300">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="jane@company.com"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-wide text-slate-300">Message</label>
                            <textarea
                                name="message"
                                placeholder="How can we help you scale?"
                                rows={4}
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                            />
                        </div>
                        <div className="flex items-start gap-3 text-left mb-2">
                            <input
                                type="checkbox"
                                name="consent"
                                id="contact-consent"
                                required
                                className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-500 focus:ring-indigo-500"
                            />
                            <label htmlFor="contact-consent" className="text-sm text-slate-400 leading-relaxed">
                                I verify that I have read and agree to the <Link href="/terms" className="text-indigo-400 hover:underline" target="_blank">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-400 hover:underline" target="_blank">Privacy Policy</Link>, and consent to being contacted.
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full ${isSubmitting ? 'bg-indigo-800 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)]'} text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.2)] mt-4 flex items-center justify-center gap-2`}
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Routing Message...</span>
                            ) : (
                                <>
                                    <Mail className="w-5 h-5" /> Send Message
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>

            {/* AI Architect Section */}
            <div className="w-full max-w-4xl text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
                <p className="text-slate-400">Use our generative AI architect to draft a blueprint for your specific bottleneck.</p>
            </div>

            <div className="w-full max-w-4xl">
                <BlueprintGenerator />
            </div>
        </div>
    );
}
