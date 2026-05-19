"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Bot, ArrowRight, Zap, Code2, Mail, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSelectTier = (tier: string) => {
    setSelectedTier(tier);
    // Scroll to the lead capture form smoothly
    document.getElementById("pricing-lead-capture")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedTier) return;

    setLoading(true);
    try {
      const res = await fetch("/api/pricing-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tier: selectedTier }),
      });
      
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#05080f] text-slate-200 overflow-x-hidden pt-24">
      {/* Header */}
      <section className="relative pt-16 pb-12 px-6 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Pricing</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
          Whether you're exploring the potential of AI or ready for enterprise-scale autonomous systems, we have a plan designed for your operational needs.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="relative pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Tier 1 */}
          <PricingCard
            title="Discovery & Strategy"
            price="R5,000"
            subtitle="One-time fee"
            description="Perfect for businesses that know they need AI but aren't sure where to start."
            features={[
              "Discovery Call",
              "Deep-dive problem-solving session",
              "Custom AI Match Assessment",
              "Actionable implementation roadmap"
            ]}
            icon={<Bot className="w-8 h-8 text-slate-400" />}
            onSelect={() => handleSelectTier("Discovery & Strategy")}
            selected={selectedTier === "Discovery & Strategy"}
          />

          {/* Tier 2 */}
          <PricingCard
            title="Digital Employee"
            price="R50,000"
            subtitle="+ Cloud Fees"
            description="Deploy your first autonomous agent to handle a core workflow from start to finish."
            features={[
              "AI Environment Setup",
              "1 Custom AI Agent",
              "1 Core Workflow/Skill Mastered",
              "Live Reporting Dashboard",
              "Ongoing Maintenance & Updates"
            ]}
            icon={<Zap className="w-8 h-8 text-indigo-400" />}
            featured={true}
            onSelect={() => handleSelectTier("Digital Employee")}
            selected={selectedTier === "Digital Employee"}
          />

          {/* Tier 3 */}
          <PricingCard
            title="Two Sprints"
            price="R160,000"
            subtitle="per month"
            description="Aggressive, high-velocity sprints for large-scale enterprise automation."
            features={[
              "2-Week Custom Sprints",
              "From Design to Build to Delivery",
              "Multiple Agents & Workflows",
              "Complex Internal Integrations",
              "Dedicated Engineering Team"
            ]}
            icon={<Code2 className="w-8 h-8 text-cyan-400" />}
            onSelect={() => handleSelectTier("Two Sprints")}
            selected={selectedTier === "Two Sprints"}
          />

        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="pricing-lead-capture" className="py-24 px-6 border-t border-slate-800/50 bg-[#03050a] flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto">
          {!submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-md border border-indigo-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 text-center mb-8">
                <h3 className="text-3xl font-black text-white mb-4">Request More Information</h3>
                <p className="text-slate-400">
                  {selectedTier 
                    ? `You've selected the ${selectedTier} plan. Enter your work email and we'll reach out to schedule our first call.` 
                    : "Select a tier above, or enter your email to start the conversation."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                <div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@company.com"
                      className="w-full bg-[#05080f] border border-slate-700 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading || !selectedTier}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {selectedTier ? `Request ${selectedTier}` : "Select a tier above"} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="flex flex-col items-center justify-center text-center bg-slate-900/50 backdrop-blur-md p-12 rounded-3xl border border-emerald-500/30 max-w-2xl mx-auto"
             >
               <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-10 h-10 text-emerald-400" />
               </div>
               <h4 className="text-2xl font-bold text-white mb-4">Request Sent to Our Team</h4>
               <p className="text-slate-400 text-lg">
                 We've received your interest in the <span className="text-white font-medium">{selectedTier}</span> plan. Our team will be in touch with you at <span className="text-white">{email}</span> very soon.
               </p>
             </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

function PricingCard({ 
  title, price, subtitle, description, features, icon, featured = false, onSelect, selected 
}: { 
  title: string, price: string, subtitle: string, description: string, features: string[], icon: React.ReactNode, featured?: boolean, onSelect: () => void, selected: boolean 
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-3xl border transition-all backdrop-blur-sm flex flex-col h-full cursor-pointer
        ${featured ? 'bg-indigo-900/20 border-indigo-500/50 shadow-[0_0_30px_rgba(79,70,229,0.15)]' : 'bg-slate-900/40 border-slate-800 hover:border-slate-600'}
        ${selected ? 'ring-2 ring-indigo-400' : ''}
      `}
      onClick={onSelect}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-6 flex justify-between items-start">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center border shrink-0 ${featured ? 'bg-indigo-500/20 border-indigo-500/30' : 'bg-slate-950 border-slate-800'}`}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-black text-white">{price}</span>
        {subtitle && <span className="block text-slate-400 text-sm mt-1">{subtitle}</span>}
      </div>
      
      <p className="text-slate-400 leading-relaxed mb-8 border-b border-slate-800/50 pb-8">{description}</p>
      
      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${featured ? 'text-indigo-400' : 'text-slate-500'}`} />
            <span className="text-slate-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <button 
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all mt-auto
          ${selected 
            ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
            : featured 
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white' 
              : 'bg-slate-800 hover:bg-slate-700 text-white'
          }
        `}
      >
        {selected ? "Selected" : "Request More Information"} <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
