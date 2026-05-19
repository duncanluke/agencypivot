import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, CheckCircle2, User, Bot, Cloud, GraduationCap, Landmark, HeartHandshake, Shield } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#03050a] selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 max-w-6xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight relative z-10">
          Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Enterprise Innovation</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium relative z-10">
          See how we build intelligent, automated engines that solve complex operational problems for high-stakes industries.
        </p>
      </section>

      {/* Logo Band */}
      <section className="border-y border-slate-800/50 bg-[#05080f]/50 py-10 relative z-10 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-center text-sm font-bold tracking-widest text-slate-500 uppercase">Trusted by industry leaders</p>
        </div>
        
        <div className="relative w-full flex">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#05080f] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#05080f] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24 px-8 md:px-12 min-w-max">
                {/* Group 1 */}
                <div className="flex items-center justify-center">
                  <img src="/logos/wits.png" alt="Wits University Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/logos/absa.png" alt="Absa Bank Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/logos/sab.png" alt="SAB Foundation Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/logos/kfc.png" alt="KFC Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/logos/assupol.png" alt="Assupol Life Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Group 2 (Repeated for extra width) */}
                <div className="flex items-center justify-center">
                  <img src="/logos/wits.png" alt="Wits University Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/logos/absa.png" alt="Absa Bank Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/logos/sab.png" alt="SAB Foundation Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/logos/kfc.png" alt="KFC Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/logos/assupol.png" alt="Assupol Life Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Case 1: Medical AI */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-slate-800/60 bg-[#080b13]/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold uppercase tracking-wider mb-6">
                  Medical Education & Compliance
                </div>
                <h2 className="text-4xl font-black text-white leading-tight">Enterprise Knowledge AI: From 1,000-Page Manuals to Voice-Activated Expertise</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> The Challenge</h3>
                  <p className="text-slate-400 leading-relaxed">High-stakes industries rely on massive, complex procedural documents that are difficult to navigate quickly during critical, real-time scenarios.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Our Solution</h3>
                  <p className="text-slate-400 leading-relaxed">We ingest documents spanning over 1,000 pages and transform them into an intelligent, voice-activated assistant. Users simply speak their current case situation and proposed recommendation.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> The Intelligence</h3>
                  <p className="text-slate-400 leading-relaxed">The AI instantly analyzes the input against the entire documentation stack, returning a text-based validation of correctness alongside a highlighted list of critical guidelines that require special attention.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                  <span className="block text-indigo-400 font-bold mb-1">Why it matters:</span>
                  <p className="text-white font-medium">It turns static, overwhelming compliance data into a dynamic, real-time sounding board for professionals when accuracy is non-negotiable.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center relative min-h-[400px] sm:min-h-[500px] justify-center rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              {/* Background abstract AI engine */}
              <div className="absolute inset-0 opacity-40">
                 <Image src="/case-studies/medical.png" alt="Backend Processing" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080b13] via-transparent to-transparent" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#080b13] via-transparent to-transparent" />
              </div>
              
              {/* Foreground overlapping UI screens */}
              <div className="relative z-10 w-full flex justify-center items-center h-full px-4 pt-10 pb-4">
                 <div className="relative w-1/3 -mr-6 mt-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-700 transform hover:scale-105 hover:z-30 transition-all duration-300">
                    <Image src="/case-studies/medical-1.png" alt="Voice Input" width={400} height={800} className="w-full h-auto object-cover" />
                 </div>
                 <div className="relative w-1/3 z-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-500 transform scale-110 hover:scale-125 transition-all duration-300">
                    <Image src="/case-studies/medical-2.png" alt="AI Transcribing and Evaluating" width={400} height={800} className="w-full h-auto object-cover" />
                 </div>
                 <div className="relative w-1/3 -ml-6 mt-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-700 transform hover:scale-105 hover:z-30 transition-all duration-300">
                    <Image src="/case-studies/medical-3.png" alt="Instant Clinical Feedback" width={400} height={800} className="w-full h-auto object-cover" />
                 </div>
              </div>
            </div>
          </div>

          {/* Case 2: Voice Attendance */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-slate-800/60 bg-[#080b13]/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="w-full lg:w-1/2 flex flex-col items-center relative min-h-[400px] sm:min-h-[500px] justify-center rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              {/* Background abstract AI engine */}
              <div className="absolute inset-0 opacity-40">
                 <Image src="/case-studies/attendance.png" alt="Backend Processing" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080b13] via-transparent to-transparent" />
                 <div className="absolute inset-0 bg-gradient-to-l from-[#080b13] via-transparent to-transparent" />
              </div>
              
              {/* Foreground overlapping UI screens for multiple users & dashboard */}
              <div className="relative z-10 w-full flex justify-center items-center h-full px-4 py-8">
                 {/* Desktop Dashboard (Background/Center) */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[85%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-700 opacity-90 transform hover:scale-105 hover:opacity-100 transition-all duration-500">
                    <Image src="/case-studies/attendance-ui-3.png" alt="Admin Dashboard" width={800} height={500} className="w-full h-auto object-cover" />
                 </div>
                 
                 {/* Mobile Screen 1 (Left, floating) */}
                 <div className="absolute left-4 md:left-8 top-[10%] md:top-[15%] w-[40%] md:w-1/3 max-w-[180px] md:max-w-[220px] z-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-600 transform -rotate-6 hover:scale-110 hover:rotate-0 hover:z-30 transition-all duration-500">
                    <Image src="/case-studies/attendance-ui-1.png" alt="Check In Workflow" width={400} height={800} className="w-full h-auto object-cover" />
                 </div>

                 {/* Mobile Screen 2 (Right, floating) */}
                 <div className="absolute right-4 md:right-8 bottom-[10%] md:bottom-[15%] w-[40%] md:w-1/3 max-w-[180px] md:max-w-[220px] z-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.3)] border border-emerald-500/40 transform rotate-6 hover:scale-110 hover:rotate-0 hover:z-30 transition-all duration-500">
                    <Image src="/case-studies/attendance-ui-2.png" alt="Student Profile" width={400} height={800} className="w-full h-auto object-cover" />
                 </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold uppercase tracking-wider mb-6">
                  Higher Education & Corporate Training
                </div>
                <h2 className="text-4xl font-black text-white leading-tight">Frictionless Operations: Voice-Driven, Large-Scale Attendance & Curriculum Mapping</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> The Challenge</h3>
                  <p className="text-slate-400 leading-relaxed">Tracking daily attendance and mapping it to intricate, multi-layered curriculums usually results in heavy administrative bloat and low user compliance.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Our Solution</h3>
                  <p className="text-slate-400 leading-relaxed">A lightning-fast, Single Page Application (SPA) built to handle thousands of concurrent daily users interacting purely through voice.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> The Interface</h3>
                  <p className="text-slate-400 leading-relaxed">Users check in using a dead-simple voice assistant. In just a few seconds, the AI captures the interaction, maps it directly to the corresponding curriculum node, and automatically feeds the data into the centralized reporting engine.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case 3: ESG Data Engines */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-slate-800/60 bg-[#080b13]/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6">
                  ESG, SDG, and GRI Global Impact Tracking
                </div>
                <h2 className="text-4xl font-black text-white leading-tight">Advanced Data Engines: Next-Gen Non-Financial Indicator Reporting</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> The Challenge</h3>
                  <p className="text-slate-400 leading-relaxed">Tracking non-financial indicators across complex corporate-fundee ecosystems is notoriously difficult, fractured, and far from trivial.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Our Solution</h3>
                  <p className="text-slate-400 leading-relaxed">We engineered a unique Model Context Protocol (MCP) data standard interface that clearly defines the relationship between funders and fundees.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 space-y-4">
                  <span className="block text-cyan-400 font-bold mb-1">How the Engine Works:</span>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li><strong className="text-white">Secure Ledger:</strong> Funding amounts are logged onto a privatized public ledger.</li>
                    <li><strong className="text-white">Guided Reporting:</strong> Fundees report on complex standards assisted by an AI that helps articulate data outcomes.</li>
                    <li><strong className="text-white">Autonomous Data Agent:</strong> We trained a specialized AI agent embedded with the strict data rules of the system.</li>
                  </ul>
                  <p className="text-white font-medium mt-4 pt-4 border-t border-slate-700/50">
                    <span className="text-cyan-400 font-bold">The Killer Feature:</span> Users don't need to be data scientists. They can chat with the agent to query the dataset, upload files, or receive real-time guidance on industry best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center relative min-h-[400px] sm:min-h-[500px] justify-center rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-[#03050a]">
              {/* Background abstract ESG engine */}
              <div className="absolute inset-0 opacity-30">
                 <Image src="/case-studies/esg.png" alt="Backend Processing" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080b13] via-transparent to-transparent" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#080b13] via-transparent to-transparent" />
              </div>
              
              {/* Foreground overlapping UI screens (Browser Windows) */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                 {/* Map View (Top/Back) */}
                 <div className="absolute top-[5%] md:top-[10%] left-[5%] w-[80%] md:w-[75%] rounded-lg overflow-hidden shadow-2xl border border-slate-700 transform hover:scale-105 hover:z-30 transition-all duration-300">
                    <Image src="/case-studies/esg-ui-1.png" alt="ESG Map Visualization" width={800} height={500} className="w-full h-auto" />
                 </div>
                 
                 {/* Chart View (Middle) */}
                 <div className="absolute top-[35%] right-[5%] w-[75%] md:w-[70%] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] border border-cyan-500/30 transform hover:scale-105 hover:z-30 transition-all duration-300 z-10">
                    <Image src="/case-studies/esg-ui-3.png" alt="Market Tracker" width={800} height={500} className="w-full h-auto" />
                 </div>

                 {/* Agent View (Bottom/Front) */}
                 <div className="absolute bottom-[5%] md:bottom-[10%] left-[10%] w-[85%] md:w-[80%] rounded-lg overflow-hidden shadow-2xl border border-slate-600 transform hover:scale-105 hover:z-30 transition-all duration-300 z-20">
                    <Image src="/case-studies/esg-ui-2.png" alt="AI Agent Interface" width={800} height={500} className="w-full h-auto" />
                 </div>
              </div>
            </div>
          </div>

          {/* Case 4: Rapid Venture Building */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-slate-800/60 bg-[#080b13]/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="w-full lg:w-1/2 flex flex-col items-center relative min-h-[500px] sm:min-h-[600px] justify-center rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-[#03050a]">
              {/* Background abstract engine */}
              <div className="absolute inset-0 opacity-30">
                 <Image src="/case-studies/venture.png" alt="Backend Processing" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080b13] via-transparent to-transparent" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#080b13] via-transparent to-transparent" />
              </div>
              
              {/* Mobile Phone Mockup Foreground */}
              <div className="relative z-10 py-10 flex justify-center items-center w-full h-full">
                 <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-[#0a0a0a] rounded-[3rem] p-3 shadow-[0_0_50px_rgba(79,70,229,0.3)] border-4 border-slate-800 ring-2 ring-slate-900/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0a0a0a] rounded-b-3xl z-20"></div>
                    {/* Screen */}
                    <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-white">
                       <Image src="/case-studies/venture-ui.png" alt="Doc2Door App UI" fill className="object-cover object-top" />
                    </div>
                 </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold uppercase tracking-wider mb-6">
                  Enterprise Software & Automated Workflows
                </div>
                <h2 className="text-4xl font-black text-white leading-tight">Rapid Venture Building: Production-Ready Startups in 14 Days</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> The Challenge</h3>
                  <p className="text-slate-400 leading-relaxed">A client approached us needing complex enterprise business software built from scratch, facing the typical industry timelines of 6 to 12 months.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Our Solution</h3>
                  <p className="text-slate-400 leading-relaxed">We stripped the concept down to its absolute, high-value core and built a fully functional, automated business application in just two weeks.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                  <span className="block text-indigo-400 font-bold mb-1">Features Included:</span>
                  <p className="text-white font-medium">Native payment gateways, fully automated workflows, intelligent reminders, and robust, multi-level tiered user access profiles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case 5: Bank-Grade Infrastructure */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-slate-800/60 bg-[#080b13]/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6">
                  Absa Bank (Cape Town Region)
                </div>
                <h2 className="text-4xl font-black text-white leading-tight">Bank-Grade FinTech Infrastructure: Secure Cloud & AI Integration</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400" /> The Challenge</h3>
                  <p className="text-slate-400 leading-relaxed">Integrating bleeding-edge AI and cloud technologies into the highly regulated, hyper-secure world of tier-one banking.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Our Solution</h3>
                  <p className="text-slate-400 leading-relaxed">Building on our track record as one of the pioneering service providers to successfully implement AWS cloud hosting infrastructure for Absa Bank, we are now architecting the future of secure banking intelligence.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400" /> The Architecture</h3>
                  <p className="text-slate-400 leading-relaxed">We are defining and deploying advanced APIs that connect securely to AI services. This framework maintains strict, bank-grade security protocols while seamlessly empowering the bank to leverage either localized, on-premise models or external enterprise AIs.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center relative min-h-[400px] sm:min-h-[500px] justify-center rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-gradient-to-br from-[#0a0f1c] to-[#03050a] p-8">
               {/* Diagram Container */}
               <div className="w-full h-full flex flex-col items-center justify-between relative min-h-[350px]">
                  {/* Connecting Lines */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-cyan-500/50" />
                  <div className="absolute top-[20%] left-[25%] w-[50%] h-[2px] bg-gradient-to-r from-orange-500/50 to-blue-400/50" />

                  {/* Cloud Providers (Top Row) */}
                  <div className="flex w-full justify-around items-center z-10 mt-4">
                     {/* AWS */}
                     <div className="flex flex-col items-center gap-2 bg-slate-900/90 border border-slate-700 p-4 md:p-6 rounded-2xl shadow-[0_0_30px_rgba(249,115,22,0.1)] backdrop-blur-md">
                        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#FF9900]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg>
                        <span className="font-bold text-white text-sm md:text-lg">AWS</span>
                     </div>
                     
                     {/* Google Cloud */}
                     <div className="flex flex-col items-center gap-2 bg-slate-900/90 border border-slate-700 p-4 md:p-6 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-md">
                        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z"/></svg>
                        <span className="font-bold text-white text-sm md:text-lg">Google Cloud</span>
                     </div>
                  </div>

                  {/* AI Interface (Middle) */}
                  <div className="flex flex-col items-center gap-3 bg-indigo-900/30 border border-indigo-500/50 p-6 md:p-8 rounded-[2rem] shadow-[0_0_50px_rgba(99,102,241,0.2)] backdrop-blur-lg z-10 transform scale-105 my-8">
                     <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-500 rounded-full flex items-center justify-center animate-pulse">
                        <Bot className="w-7 h-7 md:w-8 md:h-8 text-white" />
                     </div>
                     <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 text-lg md:text-xl text-center leading-tight">Secure AI Interface<br/><span className="text-xs md:text-sm text-indigo-400 font-medium">Bank-Grade Protocol</span></span>
                  </div>

                  {/* Users (Bottom) */}
                  <div className="flex w-full justify-center items-center z-10 mb-4">
                     <div className="flex flex-col items-center gap-3 bg-slate-900/90 border border-slate-700 px-8 py-4 md:px-12 md:py-6 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md">
                        <div className="flex gap-2 md:gap-4">
                           <User className="w-6 h-6 md:w-8 md:h-8 text-slate-300" />
                           <User className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />
                           <User className="w-6 h-6 md:w-8 md:h-8 text-slate-500" />
                        </div>
                        <span className="font-bold text-white text-sm md:text-lg">End Users</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-800/50 bg-[#05080f] text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to solve your most complex operational problems?</h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">Stop letting legacy systems slow down your enterprise. Let's build a custom AI engine tailored to your exact workflows.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/process" className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors">
            See Our 30-Day Rollout Process
          </a>
          <a href="/pricing" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)]">
            View Pricing Tiers
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
