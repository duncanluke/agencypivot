"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Mail } from "lucide-react";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      // Fallback in case of error, still show submitted to prevent spam
      setSubmitted(true); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-indigo-500/20 bg-slate-900/50 backdrop-blur-md p-8 md:p-12 shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
            Free Architecture Blueprint
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Ready to stop experimenting and start <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">scaling</span>?
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Enter your email below to receive a free, comprehensive breakdown of how Agentic AI can solve your specific bottleneck and deliver hard ROI in 2026.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Data Assessment</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Implementation Roadmap</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Tech Stack Recommendation</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-5/12 shrink-0">
          {!submitted ? (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit} 
              className="flex flex-col gap-4 bg-[#05080f]/80 p-6 rounded-2xl border border-slate-800"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="founder@startup.com"
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-all disabled:opacity-70 group"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Get My Blueprint <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-xs text-center text-slate-500 mt-2">
                We'll only send value. No spam.
              </p>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center text-center bg-[#05080f]/80 p-8 rounded-2xl border border-emerald-500/30"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
              <p className="text-slate-400 text-sm">
                We've sent a follow-up to <span className="text-slate-300 font-medium">{email}</span>. Our team will review your details shortly.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
