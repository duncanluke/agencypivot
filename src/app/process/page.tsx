"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Server, Database, Plug, Mail, Settings, LineChart, Target, Laptop, ShieldCheck, Clock } from "lucide-react";

export default function Process() {
  return (
    <main className="min-h-screen bg-[#05080f] text-slate-200 overflow-x-hidden pt-24">
      {/* Header */}
      <section className="relative pt-16 pb-12 px-6 max-w-4xl mx-auto text-center">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-bold uppercase tracking-wider mb-8">
          <Settings className="w-4 h-4" /> Technical Blueprint
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
          How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Autonomous Engines</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          A fully transparent technical roadmap. We combine enterprise-grade infrastructure with rigorous "Human-in-the-Loop" testing to guarantee results without the risk.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="relative pb-24 px-6 max-w-5xl mx-auto">
        
        <div className="space-y-24">
          
          {/* Phase 1 */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-black text-2xl shadow-[0_0_30px_rgba(79,70,229,0.2)]">
                01
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">Discovery & Architecture</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 relative before:absolute before:inset-0 before:ml-8 md:before:ml-0 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500/50 before:to-transparent">
              <TimelineCard 
                title="Scope & Workflow Audit"
                icon={<Target className="w-6 h-6 text-indigo-400" />}
                description="We start by mapping your actual workflow (the messy reality). We strictly limit the initial deployment to tasks AI can reliably achieve to ensure high success rates and avoid hallucination traps."
                align="right"
              />
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
              <TimelineCard 
                title="Hardware & Infrastructure"
                icon={<Server className="w-6 h-6 text-indigo-400" />}
                description="Depending on your security and compliance needs, we establish the foundation—whether that's a local machine on-premise, a securely hosted cloud (AWS/Google Cloud), or lightweight edge services like Vercel."
                align="left"
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                02
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">Build & Integration</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 relative before:absolute before:inset-0 before:ml-8 md:before:ml-0 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/50 before:to-transparent">
              <TimelineCard 
                title="Database & Long-Term Memory"
                icon={<Database className="w-6 h-6 text-cyan-400" />}
                description="If your workflow requires context, we build a secure database (like Supabase or custom cloud tools) to give your agents long-term memory and state management."
                align="right"
              />
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
              <TimelineCard 
                title="Business Suite Integration"
                icon={<Plug className="w-6 h-6 text-cyan-400" />}
                description="We integrate the agent directly into your existing communication tools. We fully support Microsoft environments and highly optimize for Google Workspace."
                align="left"
              />
              <TimelineCard 
                title="Agent Setup & Skilling"
                icon={<Mail className="w-6 h-6 text-cyan-400" />}
                description="We set up a dedicated email address for your new digital employee and start equipping them with the specific API connections, cron jobs, and skills needed to meet the goal."
                align="right"
              />
            </div>
          </div>

          {/* Phase 3 */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                03
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">Testing & Deployment</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 relative before:absolute before:inset-0 before:ml-8 md:before:ml-0 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/50 before:to-transparent">
              <div className="hidden md:block"></div>
              <TimelineCard 
                title="Sandbox Optimization"
                icon={<Laptop className="w-6 h-6 text-emerald-400" />}
                description="The agent is placed in a sandbox environment where we rigorously test edge cases, optimize logic, and refine workflows before touching live data."
                align="left"
              />
              <TimelineCard 
                title="Human-in-the-Loop Review"
                icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />}
                description="Before full autonomy, we review the workflows with your team. The agent operates with your oversight until you trust its decision-making."
                align="right"
              />
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
              <TimelineCard 
                title="Live Handoff & Results"
                icon={<LineChart className="w-6 h-6 text-emerald-400" />}
                description="You sit back and watch the results via live automated dashboards. The digital employee works 24/7, reporting on progress and alerting you only when human intervention is necessary."
                align="left"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 border-t border-slate-800/50 bg-[#03050a] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-black text-white mb-6">Ready to start the process?</h2>
        <a href="/pricing" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)]">
          View Pricing Tiers
        </a>
      </section>
    </main>
  );
}

function TimelineCard({ 
  title, description, icon, align 
}: { 
  title: string, description: string, icon: React.ReactNode, align: 'left' | 'right' 
}) {
  const isRight = align === 'right';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative pl-16 md:pl-0 flex ${isRight ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}
    >
      {/* Connector Dot */}
      <div className={`absolute top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-500 z-10 
        left-[24px] md:left-auto ${isRight ? 'md:right-[-8px]' : 'md:left-[-8px]'}
      `} />

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm hover:border-slate-700 transition-colors w-full md:max-w-md">
        <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
