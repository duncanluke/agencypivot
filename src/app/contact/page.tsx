"use client";

import { Mail, Terminal } from "lucide-react";
import BlueprintGenerator from "@/components/BlueprintGenerator";
import Link from "next/link";

export default function ContactPage() {
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
            <div className="w-full max-w-2xl bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-md mb-24">
                <form
                    className="space-y-6 flex flex-col"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Message sent! We'll be in touch shortly.");
                    }}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-wide text-slate-300">Name</label>
                            <input
                                type="text"
                                placeholder="Jane Doe"
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-wide text-slate-300">Email</label>
                            <input
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
                            placeholder="How can we help you scale?"
                            rows={4}
                            required
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                        />
                    </div>
                    <div className="flex items-start gap-3 text-left mb-2">
                        <input
                            type="checkbox"
                            id="contact-consent"
                            required
                            className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-500 focus:ring-indigo-500 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="contact-consent" className="text-sm text-slate-400 leading-relaxed">
                            I verify that I have read and agree to the <Link href="/terms" className="text-indigo-400 hover:underline" target="_blank">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-400 hover:underline" target="_blank">Privacy Policy</Link>, and consent to being contacted.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] mt-4 flex items-center justify-center gap-2"
                    >
                        <Mail className="w-5 h-5" /> Send Message
                    </button>
                </form>
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
