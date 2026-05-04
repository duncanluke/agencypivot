"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Zap, ArrowRight, LineChart, Code2, ShieldCheck, CheckCircle2 } from "lucide-react";
import Hero3D from "@/components/Hero3D";
import LeadCapture from "@/components/LeadCapture";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05080f] text-slate-200 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[90vh] justify-center">
        {/* Dynamic 3D Element */}
        <Hero3D />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10 bg-[#05080f]/50 p-8 rounded-3xl backdrop-blur-sm border border-indigo-500/10 mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" /> Stop experimenting. Start scaling.
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI Workflows</span> <br className="hidden md:block" /> that deliver ROI.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            We are the specialized software technology team for the AI era. From smart automated workflows for enterprise to ESG compliance reporting and scalable MVP development for visionary founders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#audit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] flex items-center justify-center">
              Request Your AI Blueprint
            </a>
            <a href="#services" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
              Explore Solutions
            </a>
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="py-24 px-6 bg-[#080d1a] relative border-y border-indigo-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Outcome-Driven Engineering</h2>
            <p className="text-slate-400 text-lg">We don't sell "AI buzzwords". We engineer robust solutions that target the most painful bottlenecks in three specific vertical markets.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard
              icon={<ShieldCheck className="w-10 h-10 text-emerald-400" />}
              title="Social Impact & ESG"
              subtitle="For Sustainability & CSR Directors"
              description="New reporting mandates (CSRD) are burying your team in PDFs. We build automated systems that parse unstructured supply chain data and auto-generate compliance gap analysis in real-time."
              points={["Automated ESG Data Systems", "Real-time Compliance Dashboards", "Supply Chain Analytics"]}
            />
            <SolutionCard
              icon={<Code2 className="w-10 h-10 text-cyan-400" />}
              title="Startup MVPs & GenAI"
              subtitle="For Visionary Tech Founders"
              description="Stop burning runway on basic wrappers. Act as your Fractional CTO to design scalable software foundations, rapid MVP prototyping, and defensible tech systems."
              points={["Lean AI Prototyping", "Scalable Tech Foundations", "Fractional CTO Advisory"]}
            />
            <SolutionCard
              icon={<Bot className="w-10 h-10 text-indigo-400" />}
              title="Corporate Agentic AI"
              subtitle="For Enterprise Innovation"
              description="Move beyond chatbots. We deploy smart automated systems woven straight into your core ERPs and CRMs to execute multi-step workflows autonomously and drive massive operational efficiency."
              points={["Smart Workflow Automation", "Direct Software Integration", "Business Workflow Autonomy"]}
            />
          </div>
        </div>
      </section>

      {/* Trust / Process */}
      <section id="process" className="py-24 px-6 justify-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">The 2-Week Sprint Methodology.</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              We move incredibly fast without breaking things. Our focused sprints guarantee that your project goes from concept to a tangible, ROI-producing asset in absolute minimum time.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="w-full md:w-1/2">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                <ProcessStepItem
                  number="01"
                  title="System Deep-Dive"
                  description="We map out the exact business bottleneck, audit your data readiness, and create a clear technical plan."
                />
                <ProcessStepItem
                  number="02"
                  title="Rapid Development"
                  description="A dedicated engineering pod builds the necessary workflows and interfaces using robust modern technology."
                />
                <ProcessStepItem
                  number="03"
                  title="Agent Training & Integration"
                  description="We don't build in a silo. We integrate the logic directly into your existing ops (Salesforce, Slack, Sheets)."
                />
                <ProcessStepItem
                  number="04"
                  title="Deploy & Track ROI"
                  description="We push to production, run QA, and give you explicit dashboards to track the time/money saved."
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ProcessAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="audit" className="py-24 px-6 border-t border-slate-800/50 bg-[#03050a] flex items-center justify-center">
        <LeadCapture />
      </section>
    </main>
  );
}

function ProcessStepItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      {/* Connector */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#05080f] bg-slate-800 text-slate-400 group-hover:text-indigo-400 group-hover:bg-slate-900 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-sm font-bold z-10">
        {number}
      </div>
      {/* Content */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-colors">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ProcessAnimation() {
  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl overflow-hidden h-96 flex flex-col items-center justify-center">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px]" />

      {/* Central Node */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(99,102,241,0)", "0px 0px 40px rgba(99,102,241,0.5)", "0px 0px 0px rgba(99,102,241,0)"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 bg-[#05080f] border border-indigo-500/50 w-24 h-24 rounded-2xl flex items-center justify-center"
      >
        <Bot className="w-10 h-10 text-indigo-400" />
      </motion.div>

      {/* Inputs / Outputs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Incoming Problem */}
        <motion.div
          animate={{ x: [-150, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          className="absolute flex items-center gap-2 -ml-40"
        >
          <div className="text-slate-400 text-xs font-mono bg-slate-800 px-2 py-1 rounded">Problem</div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
        </motion.div>

        {/* Outgoing Solution */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [0, 150], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeIn", delay: 1.5 }}
          className="absolute flex items-center gap-2 ml-40"
        >
          <ArrowRight className="w-4 h-4 text-cyan-500" />
          <div className="text-cyan-400 text-xs font-mono bg-cyan-900/30 border border-cyan-500/30 px-2 py-1 rounded">Efficiency</div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 text-center text-slate-500 text-xs font-mono tracking-widest uppercase">
        Autonomous Orchestration Engine
      </div>
    </div>
  );
}

function SolutionCard({ icon, title, subtitle, description, points }: { icon: React.ReactNode, title: string, subtitle: string, description: string, points: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors backdrop-blur-sm flex flex-col h-full"
    >
      <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-800 shrink-0">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      <div className="text-indigo-400 font-medium text-sm mb-4">{subtitle}</div>
      <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{description}</p>
      
      <div className="space-y-3 mt-auto">
        {points.map((point, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-slate-300 text-sm">{point}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
