"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Zap, ArrowRight, Mail, Factory, Heart, Stethoscope, Map, Settings } from "lucide-react";
import Hero3D from "@/components/Hero3D";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05080f] text-slate-200 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center h-[90vh] justify-center">
        {/* Dynamic 3D Element */}
        <Hero3D />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10 bg-[#05080f]/50 p-8 rounded-3xl backdrop-blur-sm border border-indigo-500/10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" /> Stop doing manual work. Automate your growth.
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI Agents</span> <br className="hidden md:block" /> that run your business.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            We don&apos;t just build smart tech—we obsess over the end-user and the customer problem. From custom workflow automation to full-scale web apps, we build tools that <span className="text-indigo-400">impact people&apos;s lives in the real world</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] flex items-center justify-center">
              Book an AI Audit
            </Link>
            <Link href="/services" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
              View Demos
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#080d1a] relative border-y border-indigo-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Our Core Offerings</h2>
            <p className="text-slate-400">Specialized software engineering for the AI era.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Bot className="w-10 h-10 text-indigo-400" />}
              title="Autonomous AI Agents"
              description="Custom Slack bots, email outreach engines, and 24/7 customer support agents trained on your specific company data."
            />
            <ServiceCard
              icon={<Cpu className="w-10 h-10 text-cyan-400" />}
              title="Workflow Automation"
              description="Connecting your existing tools (CRMs, databases) to eliminate manual data entry and human error using intelligent routing."
            />
            <ServiceCard
              icon={<Zap className="w-10 h-10 text-purple-400" />}
              title="Modern Web Apps"
              description="Lightning-fast SaaS products and dashboards built with Next.js, React, and robust backend architectures."
            />
            <ServiceCard
              icon={<Factory className="w-10 h-10 text-emerald-400" />}
              title="Robotics & Hardware"
              description="Hardware automation and custom 3D printed components to optimize physical production pipelines and factory lines."
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Industries We Transform.</h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            We apply engineering precision and artificial intelligence to specific sectors where automation creates the highest impact and operational clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          <ServiceCard
            icon={<Heart className="w-10 h-10 text-rose-400" />}
            title="Social Impact & CSR"
            description="Corporate social responsibility, sustainability reporting, and radical transparency—from Section 18A certificates to donation tracking."
          />
          <ServiceCard
            icon={<Stethoscope className="w-10 h-10 text-blue-400" />}
            title="Medical & EdTech"
            description="Connecting doctors to patients, and university students to specialized curriculums through robust, scalable platform architectures."
          />
          <ServiceCard
            icon={<Map className="w-10 h-10 text-emerald-400" />}
            title="Mapping & Geospatial"
            description="Visualizing real-world problems and data through interactive mapping technologies for clarity and strategic decision making."
          />
          <ServiceCard
            icon={<Settings className="w-10 h-10 text-slate-400" />}
            title="Custom Operations"
            description="Solving bespoke, complex process problems that require extreme optimization, clarity, and the introduction of new efficiencies."
          />
        </div>
      </section>

      {/* Trust / Process */}
      <section id="process" className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">We solve business problems with AI.</h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            You bring the problem. Our team applies the latest AI automation, strategic workflows, and custom dashboards to solve it. We focus on bringing unprecedented operational efficiencies to your system.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-8">Our 2-Week Sprint Methodology</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              <ProcessStepItem
                number="01"
                title="Define the Scope"
                description="We start by clearly mapping out the operational bottleneck or strategic objective you want to conquer."
              />
              <ProcessStepItem
                number="02"
                title="Deep Dive Sprint"
                description="Over two weeks, we interrogate your business objectives. We interview key people, learn your processes deeply, and design the optimal architecture."
              />
              <ProcessStepItem
                number="03"
                title="Build the AI"
                description="Our team implements the required AI—whether it's an intelligent dashboard, a complex automation pipeline, or an autonomous agent."
              />
              <ProcessStepItem
                number="04"
                title="Ship & Maintain"
                description="We deliver the working solution, ship it to production, and help you maintain and iterate on it going forward."
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ProcessAnimation />
          </div>
        </div>

        {/* Happy Clients Placeholder */}
        <div className="w-full border-t border-slate-800 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white">Happy Clients</h3>
            <p className="text-slate-400">We do this on repeat. Here are just two examples of businesses we&apos;ve transformed.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400">ML</div>
                <div>
                  <div className="text-white font-bold">Marcus L.</div>
                  <div className="text-slate-500 text-sm">Fintech Operations Director</div>
                </div>
              </div>
              <p className="text-slate-300 italic">&quot;The team completely revolutionized how we handle our data routing. Their 2-week sprint was intense but exactly what we needed to finally automate our core bottlenecks.&quot;</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400">SR</div>
                <div>
                  <div className="text-white font-bold">Sarah R.</div>
                  <div className="text-slate-500 text-sm">MedTech Founder</div>
                </div>
              </div>
              <p className="text-slate-300 italic">&quot;The custom Next.js dashboard and AI integration they shipped not only saved us hundreds of hours a month but gave us real-time visibility into our system.&quot;</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 border-t border-slate-800/50 bg-[#03050a] text-center w-full">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-black text-white mb-6">Ready to scale?</h2>
          <p className="text-slate-400 text-lg mb-10">Stop paying humans to do robotic work. Let&apos;s chat about building your first AI system.</p>
          <Link href="/contact" className="bg-white text-black px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 w-fit">
            <Mail className="w-5 h-5" /> Let&apos;s talk
          </Link>
        </div>
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
        Continuous Solution Engine
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors backdrop-blur-sm"
    >
      <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
