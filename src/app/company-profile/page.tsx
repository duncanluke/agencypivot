import React from "react";
import {
  Award,
  Briefcase,
  FileText,
  Target,
  Activity,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Lock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Company Profile | The Social Collective",
  description:
    "Learn about our history, mission, and the industry leaders who trust our technology.",
};

export default function CompanyProfile() {
  return (
    <main className="min-h-screen bg-[#03050a] text-white selection:bg-indigo-500/30 font-sans print:bg-white">
      <div className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto space-y-32 print:space-y-12 print:pt-8 print:pb-8">
        {/* Header / Founder Section */}
        <div className="flex justify-end print:hidden mb-4">
          <a
            href="/TSC-Company-Profile.pdf"
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> View Company Profile PDF
          </a>
        </div>
        <section className="flex flex-col lg:flex-row print:flex-row gap-12 items-center bg-gradient-to-br from-slate-900 to-[#03050a] border border-slate-800 rounded-3xl p-8 lg:p-16 shadow-2xl relative overflow-hidden print:border-none print:shadow-none print:p-0 print:bg-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none print:hidden"></div>

          <div className="w-full lg:w-1/3 print:w-1/3 flex flex-col items-center justify-center gap-6 z-10">
            <div className="w-full aspect-[3/4] rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 flex items-end p-6">
                <span className="font-bold text-white text-xl">
                  Duncan Luke
                </span>
              </div>
              <img
                src="/images/profile/founder.png"
                alt="Duncan Luke"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 print:w-2/3 space-y-6 z-10">
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white">
              Social Collective
            </h1>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-indigo-400">
                Duncan Luke, Founder / CEO
              </h2>
            </div>

            <div className="grid gap-4 py-6 border-y border-slate-800/50">
              <div className="flex items-center gap-4">
                <Award className="w-6 h-6 text-indigo-500 shrink-0" />
                <span className="text-slate-300">
                  <strong className="text-white">Davos Award Recipient:</strong>{" "}
                  World Economic Forum, Global Shaper
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="w-6 h-6 text-indigo-500 shrink-0" />
                <span className="text-slate-300">
                  <strong className="text-white">Mission:</strong> Impact
                  Reporting (ESG, Social Return, Sustainability)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Activity className="w-6 h-6 text-indigo-500 shrink-0" />
                <span className="text-slate-300">
                  <strong className="text-white">The difference:</strong> Data
                  Mapping, Analysis and Management
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              The Social Collective was recognised as the winner of the{" "}
              <strong className="text-white">
                Coca-Cola Shaping a Better Future Challenge 2014
              </strong>
              , which was awarded at Davos through the{" "}
              <strong className="text-white">World Economic Forum</strong>. The
              company was chosen for its innovative use of technology to enhance
              the employability of individuals while also tracking social
              impact. Since then, the team has expanded to meet the demands of
              impact reporting for implementation partners and communities. The
              company has now become a crucial technology for{" "}
              <strong className="text-white">validating impact data</strong>.
            </p>

            <div className="w-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl print:max-h-48 print:border-none print:shadow-none flex justify-center">
              <img
                src="/images/profile/davos.png"
                alt="Davos Award Ceremony"
                className="w-full h-auto object-cover print:object-contain print:h-48"
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-12 print:break-before-page">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Our Journey
            </h2>
            <p className="text-slate-400 text-lg">
              Over a decade of impact technology innovation.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative py-12">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-800 -translate-y-1/2 rounded-full"></div>

            <div className="grid grid-cols-2 md:grid-cols-6 print:grid-cols-6 gap-8 relative z-10">
              {/* 2013 */}
              <div className="flex flex-col items-center text-center gap-4 relative group">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-indigo-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)] group-hover:scale-110 transition-transform">
                  '13
                </div>
                <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px]">
                  <h3 className="text-indigo-400 font-bold mb-2">Founded</h3>
                  <p className="text-sm text-slate-400">
                    Commissioned by Government to build National Youth Service
                    Database
                  </p>
                </div>
              </div>

              {/* 2015 */}
              <div className="flex flex-col items-center text-center gap-4 relative group md:-mt-12">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-cyan-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
                  '15
                </div>
                <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px]">
                  <h3 className="text-cyan-400 font-bold mb-2">
                    The Social Collective
                  </h3>
                  <p className="text-sm text-slate-400">
                    Understand ESG Data: An underserved market which still needs
                    assistance with reporting to funders
                  </p>
                </div>
              </div>

              {/* 2019 */}
              <div className="flex flex-col items-center text-center gap-4 relative group">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform">
                  '19
                </div>
                <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px]">
                  <h3 className="text-blue-400 font-bold mb-2">
                    Impact Dashboards Tool
                  </h3>
                  <p className="text-sm text-slate-400">
                    Susurate: Collecting and managing data for Social Impact
                    Projects was not enough. How do we tell Impact stories?
                  </p>
                </div>
              </div>

              {/* 2020 */}
              <div className="flex flex-col items-center text-center gap-4 relative group md:-mt-12">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-orange-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform">
                  '20
                </div>
                <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px]">
                  <h3 className="text-orange-400 font-bold mb-2">
                    Sustainability & ESG
                  </h3>
                  <p className="text-sm text-slate-400">
                    Due Diligence Compliance and Internal Performance reports on
                    Social Impact projects.
                  </p>
                </div>
              </div>

              {/* 2024 */}
              <div className="flex flex-col items-center text-center gap-4 relative group">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-green-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)] group-hover:scale-110 transition-transform">
                  '24
                </div>
                <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px]">
                  <h3 className="text-green-400 font-bold mb-2">AI Impact</h3>
                  <p className="text-sm text-slate-400">
                    AI powered indicators, data insights and Agents
                  </p>
                </div>
              </div>

              {/* 2026 */}
              <div className="flex flex-col items-center text-center gap-4 relative group md:-mt-12">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-fuchsia-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(217,70,239,0.4)] group-hover:scale-110 transition-transform">
                  '26
                </div>
                <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px]">
                  <h3 className="text-fuchsia-400 font-bold mb-2">
                    AI Transition
                  </h3>
                  <p className="text-sm text-slate-400">
                    Transition to AI to solve business objectives. (see case
                    studies).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise & Approach Section */}
        <section className="space-y-12 print:break-before-page">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Our Expertise & Approach
            </h2>
            <p className="text-slate-400 text-lg">
              Outcome-driven engineering tailored to enterprise workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8">
            {/* Capabilities */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl shadow-xl print:break-inside-avoid">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-indigo-400" /> Core Capabilities
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Finance & Insurance</strong>
                    Automated document processing and real-time compliance dashboards.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Healthcare & FMCG</strong>
                    Supply chain autonomy and live operational scheduling.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Corporate Training</strong>
                    Smart feedback loops and live certification tracking.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Social Impact (Corporate Social Investment)</strong>
                    Data mapping, ESG compliance, and social return reporting.
                  </div>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl shadow-xl print:break-inside-avoid">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6 text-indigo-400" /> Our Process
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-indigo-400 shrink-0">1</div>
                  <div>
                    <strong className="text-white block">Discovery & Recommendations</strong>
                    Scope recommendations and secure infrastructure mapping.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-cyan-400 shrink-0">2</div>
                  <div>
                    <strong className="text-white block">Build & Integration</strong>
                    Long-term memory databases and Business Suite deployment.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-emerald-400 shrink-0">3</div>
                  <div>
                    <strong className="text-white block">Testing & Deployment</strong>
                    Human-in-the-loop review before full live autonomy.
                  </div>
                </li>
              </ul>
              <div className="mt-6 print:hidden">
                 <a href="/process" className="text-indigo-400 hover:text-indigo-300 font-bold text-sm inline-flex items-center gap-1 transition-colors">
                   View full process <ArrowRight className="w-4 h-4" />
                 </a>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Impact / Case Studies Section */}
        <section className="space-y-12 print:break-before-page">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Proven Impact
            </h2>
            <p className="text-slate-400 text-lg">
              Highlighting recent transformations across highly-regulated industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-slate-900 to-[#03050a] border border-slate-800 p-8 rounded-2xl shadow-xl print:break-inside-avoid">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
                 Medical Education
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Voice-Activated Expertise Engine</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-4">
                 <strong className="text-slate-200">Challenge:</strong> Navigating 1,000+ page compliance manuals during critical, real-time clinical scenarios is slow and prone to error.
               </p>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 <strong className="text-slate-200">Outcome:</strong> An intelligent voice assistant that validates clinical decisions against complete documentation in seconds, highlighting critical guidelines instantly.
               </p>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-br from-slate-900 to-[#03050a] border border-slate-800 p-8 rounded-2xl shadow-xl print:break-inside-avoid">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                 Corporate Training
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Large-Scale Attendance AI</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-4">
                 <strong className="text-slate-200">Challenge:</strong> Tracking daily attendance and mapping it to multi-layered curriculums results in administrative bloat and low compliance.
               </p>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 <strong className="text-slate-200">Outcome:</strong> A voice-driven, lightning-fast application that handles thousands of daily check-ins, automatically mapping interactions to a centralized reporting engine.
               </p>
            </div>
          </div>

          <div className="flex justify-center print:hidden pt-4">
             <a href="/case-studies" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg inline-flex items-center gap-2">
               View All Enterprise Case Studies <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="space-y-12 pb-12 print:break-before-page">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Client Testimonials
            </h2>
            <p className="text-slate-400 text-lg">
              Hear from the enterprises scaling their impact with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-8">
            {/* Allan Gray */}
            <div className="bg-gradient-to-b from-slate-900 to-[#03050a] border border-slate-800 p-8 rounded-2xl flex flex-col justify-between print:break-inside-avoid">
              <div className="mb-8 text-slate-300 leading-relaxed italic">
                "The Social Collective sufficiently meets (and in instances
                surpasses) the expectations of clients, is applicable to a range
                of themes, project complexity and KPI measurements and continues
                to be innovated in ways which benefit clients and make reporting
                easier, quicker and more insightful."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                  <span className="text-black font-bold text-xs">AG</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Allan Gray</h4>
                </div>
              </div>
            </div>

            {/* KFC */}
            <div className="bg-gradient-to-b from-slate-900 to-[#03050a] border border-slate-800 p-8 rounded-2xl flex flex-col justify-between print:break-inside-avoid">
              <div className="mb-8 text-slate-300 leading-relaxed italic">
                "Before TSC, KFC struggled with managing numerous beneficiaries
                and receiving and aggregating granular data. They also had
                business continuity issues whereby data was being saved in
                mailboxes and would be lost when members in the M&E team left."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                  <img
                    src="/logos/kfc.png"
                    alt="KFC"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">KFC</h4>
                </div>
              </div>
            </div>

            {/* Assupol */}
            <div className="bg-gradient-to-b from-slate-900 to-[#03050a] border border-slate-800 p-8 rounded-2xl flex flex-col justify-between print:break-inside-avoid">
              <div className="mb-8 text-slate-300 leading-relaxed italic">
                "The Assupol Trust did not have an M&E function before TSC and
                they were using paper-based systems to record data which was
                prone to error and time intensive. Like the others, they were
                also price sensitive in their search for M&E tools."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                  <img
                    src="/logos/assupol.png"
                    alt="Assupol"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Assupol Trust</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer & Contact */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-center space-y-6">
          <div className="hidden print:block text-xs text-slate-400">
            <strong>The Social Collective Pty Ltd.</strong>
            <br />
            Reg No. 2015 / 160496 / 07 | ATT: The Social Collective | 35 Carstens
            Street, Tamboerskloof, Cape Town, South Africa
            <br />
            B-BBEE: Level 2
          </div>
          <div className="text-slate-400 text-lg font-medium">
            Get in touch:{" "}
            <a
              href="mailto:team@collective.social"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              team@collective.social
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
