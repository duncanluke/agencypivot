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
            We help you move processes onto <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI Agents</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            We modernise your business by moving slow processes onto Live Dashboards with supporting AI automation. Offering a highly personal service in Johannesburg and Cape Town.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#audit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] flex items-center justify-center">
              Request Your Free AI Match
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
            <p className="text-slate-400 text-lg mb-6">We dive deep into your operations to uncover opportunities for modernization and automation in South Africa's core service industries.</p>
            <p className="text-indigo-300 text-lg font-medium border border-indigo-500/30 bg-indigo-500/10 p-6 rounded-2xl shadow-xl text-left">
              You know what you want to build, but you might not have an internal tech team, the time, or the risk appetite to experiment with AI on your own. You just need a partner you can trust to execute the product and support you through the transition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard
              icon={<ShieldCheck className="w-10 h-10 text-emerald-400" />}
              title="Finance & Insurance"
              subtitle="Governance & Assessment"
              description="Navigating intense regulatory pressure requires absolute precision. We build automated systems that gather messy data, assess risks, and instantly generate live compliance dashboards without human error."
              points={["Automated Document Processing", "Real-time Compliance Dashboards", "Risk Assessment Agents"]}
            />
            <SolutionCard
              icon={<Code2 className="w-10 h-10 text-cyan-400" />}
              title="Healthcare & FMCG"
              subtitle="Operations & Supply Chain"
              description="Stop letting slow supply chains and scheduling bleed your margins. We design scalable tech foundations that automate inventory tracking and patient workflows instantly."
              points={["Supply Chain Autonomy", "Live Operational Dashboards", "Automated Scheduling"]}
            />
            <SolutionCard
              icon={<Bot className="w-10 h-10 text-indigo-400" />}
              title="Corporate Training"
              subtitle="Education & HR"
              description="Move beyond static PDFs. We deploy smart automated systems that adapt to individual employee progress, track credentials live, and modernize your entire learning methodology."
              points={["Smart Feedback Loops", "Live Certification Dashboards", "Employee Progress Tracking"]}
            />
          </div>
        </div>
      </section>

      {/* Team / Heritage Section */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-[#080d1a] to-[#05080f]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#05080f]/80 border border-slate-800 rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            {/* Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />

            <div className="w-full md:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Built on 15 Years of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Enterprise Engineering.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We've been writing full-stack code for over 15 years, developing robust applications and operational systems into large, international listed companies. 
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                We specialize in tracking complicated offline elements and turning that messy information into automated dashboards which are actually useful. Now, we're bringing those exact enterprise-grade benefits to more businesses—using AI to expand your team's capacity for low-hanging tasks and fix high-priority issues with innovation.
              </p>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-md hover:border-indigo-500/50 transition-colors">
                <Code2 className="w-8 h-8 text-indigo-400 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">15+ Years</h4>
                <p className="text-slate-400 text-sm">Of deep full-stack software development experience.</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-md hover:border-emerald-500/50 transition-colors">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">Enterprise Scale</h4>
                <p className="text-slate-400 text-sm">Deployed systems for massive international listed companies.</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-md hover:border-cyan-500/50 transition-colors">
                <LineChart className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">Live Dashboards</h4>
                <p className="text-slate-400 text-sm">Turning completely offline data into automated visual reporting.</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-md hover:border-indigo-500/50 transition-colors">
                <Cpu className="w-8 h-8 text-indigo-400 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">AI Leverage</h4>
                <p className="text-slate-400 text-sm">Supporting existing teams and freeing up capacity for innovation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust / Process */}
      <section id="process" className="py-24 px-6 justify-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Our Process.</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              We focus on building a relationship first. We start with a conversation, identify absolute clarity on the opportunity, and then deliver your free, detailed AI Match Assessment to keep.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="w-full md:w-1/2">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                <ProcessStepItem
                  number="01"
                  title="Show Interest"
                  description="Drop your email below. No friction, no spam. We just establish a genuine connection."
                />
                <ProcessStepItem
                  number="02"
                  title="Quick Discovery Call"
                  description="We jump on a brief, personal call. You explain your current operational bottlenecks, and we ask the right questions."
                />
                <ProcessStepItem
                  number="03"
                  title="AI Match Assessment"
                  description="We analyze the conversation and generate a detailed report identifying where AI agents and Dashboards can modernize your stack."
                />
                <ProcessStepItem
                  number="04"
                  title="You Keep the Report"
                  description="If there's an opportunity, we can build it. If not, you walk away with a highly valuable analysis of your business, absolutely free."
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
