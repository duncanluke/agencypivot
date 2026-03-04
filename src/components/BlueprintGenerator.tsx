"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, ArrowRight, Loader2, FileText } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function BlueprintGenerator() {
    const [problem, setProblem] = useState("");
    const [loading, setLoading] = useState(false);
    const [blueprint, setBlueprint] = useState<string | null>(null);

    const generateBlueprint = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!problem.trim()) return;

        setLoading(true);
        setBlueprint(null);

        try {
            const res = await fetch("/api/blueprint", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ problem })
            });

            const data = await res.json();
            if (data.blueprint) {
                setBlueprint(data.blueprint);
            } else {
                setBlueprint("Error generating blueprint. Please try again.");
            }
        } catch (error) {
            setBlueprint("System error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 border border-indigo-500/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px]" />

            {!loading && !blueprint && (
                <>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Deploy an AI Architect.</h2>
                    <p className="text-slate-300 text-lg mb-8 relative z-10 max-w-2xl mx-auto">
                        Describe an operational bottleneck or manual process below. Our internal AI will instantly draft a custom automation blueprint for your business.
                    </p>

                    <form onSubmit={generateBlueprint} className="flex flex-col gap-4 relative z-10 max-w-2xl mx-auto w-full">
                        <textarea
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            placeholder="e.g., We spend 20 hours a week manually copying lead data from emails into our CRM and then assigning them to sales reps..."
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all placeholder:text-slate-500 resize-none h-32"
                            required
                        />
                        <div className="flex items-start gap-3 text-left">
                            <input
                                type="checkbox"
                                id="blueprint-consent"
                                required
                                className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-500 focus:ring-indigo-500"
                            />
                            <label htmlFor="blueprint-consent" className="text-sm text-slate-400 leading-relaxed">
                                I agree to the <Link href="/terms" className="text-indigo-400 hover:underline" target="_blank">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-400 hover:underline" target="_blank">Privacy Policy</Link>. I consent to having my data processed to generate this architecture.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
                        >
                            <Bot className="w-5 h-5" /> Generate Solution Blueprint
                        </button>
                    </form>
                </>
            )}

            {loading && (
                <div className="relative z-10 flex flex-col items-center justify-center py-12">
                    <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mb-6" />
                    <p className="text-cyan-300 font-mono text-lg animate-pulse mb-2">Analyzing problem constraints...</p>
                    <p className="text-indigo-300 font-mono text-sm animate-pulse delay-150">Designing optimal AI architecture...</p>
                </div>
            )}

            {blueprint && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-left bg-slate-950/80 border border-slate-700 rounded-xl p-6 md:p-8 max-w-3xl mx-auto w-full"
                >
                    <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-3">
                            <FileText className="w-6 h-6 text-indigo-400" />
                            <h3 className="text-xl font-bold text-white">Proposed Architecture</h3>
                        </div>
                        <div className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                            GENERATED
                        </div>
                    </div>

                    <div className="prose prose-invert prose-indigo max-w-none mb-8 text-slate-300 text-sm md:text-base selection:bg-indigo-500/30">
                        <ReactMarkdown>{blueprint}</ReactMarkdown>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-slate-800">
                        <button
                            onClick={() => { setBlueprint(null); setProblem(""); }}
                            className="px-6 py-4 rounded-xl border border-slate-700 text-slate-300 font-bold hover:bg-slate-800 transition-colors"
                        >
                            Start Over
                        </button>
                        <Link
                            href="/contact"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] flex-1"
                        >
                            Let us build this for you <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
