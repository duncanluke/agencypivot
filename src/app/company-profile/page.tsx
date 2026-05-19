import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Briefcase, FileText, Target, Activity, ShieldCheck, CheckCircle2, FileSpreadsheet, Lock } from 'lucide-react';

export const metadata = {
  title: 'Company Profile | The Social Collective',
  description: 'Learn about our history, mission, and the industry leaders who trust our technology.',
};

export default function CompanyProfile() {
  return (
    <main className="min-h-screen bg-[#03050a] text-white selection:bg-indigo-500/30 font-sans print:bg-white print:text-black">
      {/* Hide navbar on print */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <div className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto space-y-32 print:pt-8 print:space-y-12 print:px-0">
        
        {/* Header / Founder Section */}
        <div className="flex justify-end print:hidden mb-4">
            <a href="/TSC-Company-Profile.pdf" download className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
                <FileText className="w-4 h-4" /> Download as PDF
            </a>
        </div>
        <section className="flex flex-col lg:flex-row gap-12 items-center bg-gradient-to-br from-slate-900 to-[#03050a] border border-slate-800 rounded-3xl p-8 lg:p-16 shadow-2xl relative overflow-hidden print:bg-none print:border-none print:shadow-none print:p-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none print:hidden"></div>
          
          <div className="flex-1 space-y-6 z-10">
            <h1 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 print:text-black">The Founder / CEO</h1>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white print:text-black">Duncan Luke</h2>
              <p className="text-lg text-indigo-400 print:text-slate-600">Founder, Social Collective</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-y-4 gap-x-4 py-6 border-y border-slate-800 print:border-slate-300">
              <div className="text-slate-400 flex items-center gap-2"><Award className="w-5 h-5 text-indigo-400" /> Davos Award Recipient:</div>
              <div className="font-medium">World Economic Forum, Global Shaper</div>
              
              <div className="text-slate-400 flex items-center gap-2"><Target className="w-5 h-5 text-indigo-400" /> Mission:</div>
              <div className="font-medium">Impact Reporting (ESG, Social Return, Sustainability)</div>
              
              <div className="text-slate-400 flex items-center gap-2"><Activity className="w-5 h-5 text-indigo-400" /> The difference:</div>
              <div className="font-medium">Data Mapping, Analysis and Management</div>
            </div>

            <p className="text-slate-400 leading-relaxed text-lg print:text-slate-700">
              The Social Collective was recognised as the winner of the Coca-Cola Shaping a Better Future Challenge 2014 at the <strong className="text-white print:text-black">World Economic Forum in Davos</strong>. The company was chosen for its innovative use of technology to enhance the employability of individuals while also tracking social impact. Since then, the team has expanded to meet the demands of impact reporting for implementation partners and communities. The company has now become a crucial technology for <strong className="text-white print:text-black">validating impact data</strong>.
            </p>
          </div>
          
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-6 z-10 print:hidden">
             {/* Placeholder for Founder Image - Add real image in public/images/founder.png */}
             <div className="w-full aspect-square rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-6">
                   <span className="font-bold text-white text-xl">Duncan Luke</span>
                </div>
                <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                   <span className="text-slate-600 text-sm">Image Placement</span>
                </div>
             </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-12">
           <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white print:text-black">Our Journey</h2>
              <p className="text-slate-400 text-lg print:text-slate-600">Over a decade of impact technology innovation.</p>
           </div>
           
           {/* Horizontal Timeline */}
           <div className="relative py-12">
              <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-800 -translate-y-1/2 rounded-full print:bg-slate-300"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
                 {/* 2013 */}
                 <div className="flex flex-col items-center text-center gap-4 relative group">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-indigo-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)] group-hover:scale-110 transition-transform print:bg-white print:text-black print:border-slate-400 print:shadow-none">
                       '13
                    </div>
                    <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px] print:border-none print:bg-transparent print:p-0">
                       <h3 className="text-indigo-400 font-bold mb-2">Founded</h3>
                       <p className="text-sm text-slate-400 print:text-slate-600">Commissioned by Government to build National Youth Service Database</p>
                    </div>
                 </div>

                 {/* 2015 */}
                 <div className="flex flex-col items-center text-center gap-4 relative group md:-mt-12">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-cyan-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform print:bg-white print:text-black print:border-slate-400 print:shadow-none">
                       '15
                    </div>
                    <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px] print:border-none print:bg-transparent print:p-0">
                       <h3 className="text-cyan-400 font-bold mb-2">The Social Collective</h3>
                       <p className="text-sm text-slate-400 print:text-slate-600">Understand ESG Data: An underserved market which still needs assistance with reporting to funders</p>
                    </div>
                 </div>

                 {/* 2019 */}
                 <div className="flex flex-col items-center text-center gap-4 relative group">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform print:bg-white print:text-black print:border-slate-400 print:shadow-none">
                       '19
                    </div>
                    <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px] print:border-none print:bg-transparent print:p-0">
                       <h3 className="text-blue-400 font-bold mb-2">Impact Dashboards Tool</h3>
                       <p className="text-sm text-slate-400 print:text-slate-600">Susurate: Collecting and managing data for Social Impact Projects was not enough. How do we tell Impact stories?</p>
                    </div>
                 </div>

                 {/* 2020 */}
                 <div className="flex flex-col items-center text-center gap-4 relative group md:-mt-12">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-orange-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform print:bg-white print:text-black print:border-slate-400 print:shadow-none">
                       '20
                    </div>
                    <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px] print:border-none print:bg-transparent print:p-0">
                       <h3 className="text-orange-400 font-bold mb-2">Sustainability & ESG</h3>
                       <p className="text-sm text-slate-400 print:text-slate-600">Due Diligence Compliance and Internal Performance reports on Social Impact projects.</p>
                    </div>
                 </div>

                 {/* 2024 */}
                 <div className="flex flex-col items-center text-center gap-4 relative group">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-green-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)] group-hover:scale-110 transition-transform print:bg-white print:text-black print:border-slate-400 print:shadow-none">
                       '24
                    </div>
                    <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px] print:border-none print:bg-transparent print:p-0">
                       <h3 className="text-green-400 font-bold mb-2">AI Impact</h3>
                       <p className="text-sm text-slate-400 print:text-slate-600">AI powered indicators, data insights and Agents</p>
                    </div>
                 </div>

                 {/* 2026 */}
                 <div className="flex flex-col items-center text-center gap-4 relative group md:-mt-12">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-fuchsia-500 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(217,70,239,0.4)] group-hover:scale-110 transition-transform print:bg-white print:text-black print:border-slate-400 print:shadow-none">
                       '26
                    </div>
                    <div className="bg-slate-900/80 p-4 border border-slate-800 rounded-xl min-h-[120px] print:border-none print:bg-transparent print:p-0">
                       <h3 className="text-fuchsia-400 font-bold mb-2">AI Transition</h3>
                       <p className="text-sm text-slate-400 print:text-slate-600">Transition to AI to solve business objectives. (see case studies).</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Features Grid */}
        <section className="space-y-12">
           <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white print:text-black">Core Capabilities</h2>
              <p className="text-slate-400 text-lg print:text-slate-600">The infrastructure driving measurable social return.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Stakeholder Management */}
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 print:border-slate-200 print:bg-transparent">
                 <div className="bg-orange-500/10 p-4 rounded-xl h-fit border border-orange-500/20 print:border-none print:bg-transparent">
                    <Briefcase className="w-10 h-10 text-orange-500 print:text-black" />
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white print:text-black">Stakeholder Management</h3>
                    <p className="text-indigo-400 text-sm font-medium print:text-slate-500">Compliance Documentation</p>
                    <p className="text-slate-400 text-sm leading-relaxed print:text-slate-700">Keeping track of application, implementation and reporting in relation to funding while ensuring the correct supporting documentation is updated, is part of what our solution covers for you. All via an easy to use and supported Online portal.</p>
                 </div>
              </div>

              {/* Impact Dashboard */}
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 print:border-slate-200 print:bg-transparent">
                 <div className="bg-blue-500/10 p-4 rounded-xl h-fit border border-blue-500/20 print:border-none print:bg-transparent">
                    <FileSpreadsheet className="w-10 h-10 text-blue-500 print:text-black" />
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white print:text-black">Impact Dashboard</h3>
                    <p className="text-indigo-400 text-sm font-medium print:text-slate-500">Spend, Stats, and Impact</p>
                    <p className="text-slate-400 text-sm leading-relaxed print:text-slate-700">From day to day admin to oversight. Alignment to Sustainability, Corporate Citizenship and Community is critical for business in the 2020's. We help keep Exco's informed on the spend for BEE, SED, ED, CSI and Sustainability.</p>
                 </div>
              </div>

              {/* Data Analysis and Benchmarking */}
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 print:border-slate-200 print:bg-transparent">
                 <div className="bg-cyan-500/10 p-4 rounded-xl h-fit border border-cyan-500/20 print:border-none print:bg-transparent">
                    <Lock className="w-10 h-10 text-cyan-500 print:text-black" />
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white print:text-black">Data Analysis & Benchmarking</h3>
                    <p className="text-indigo-400 text-sm font-medium print:text-slate-500">Data Collection and Management</p>
                    <p className="text-slate-400 text-sm leading-relaxed print:text-slate-700">We provide a secure online portal, with data verification controls in place. Keep your data safe with our solutions. Your data can now be clearly comparable to tell your impact story.</p>
                 </div>
              </div>

              {/* Monitoring and Evaluation */}
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 print:border-slate-200 print:bg-transparent">
                 <div className="bg-green-500/10 p-4 rounded-xl h-fit border border-green-500/20 print:border-none print:bg-transparent">
                    <ShieldCheck className="w-10 h-10 text-green-500 print:text-black" />
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white print:text-black">Monitoring and Evaluation</h3>
                    <p className="text-indigo-400 text-sm font-medium print:text-slate-500">Projects Analysis and Recommendations</p>
                    <p className="text-slate-400 text-sm leading-relaxed print:text-slate-700">Sustainability data, CSI projects and Programmes, our Data collection process helps you make better decisions on your programs and budgets.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Client Testimonials */}
        <section className="space-y-12 pb-12 print:page-break-before">
           <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white print:text-black">Client Testimonials</h2>
              <p className="text-slate-400 text-lg print:text-slate-600">Hear from the enterprises scaling their impact with us.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Allan Gray */}
              <div className="bg-gradient-to-b from-slate-900 to-[#03050a] border border-slate-800 p-8 rounded-2xl flex flex-col justify-between print:border-slate-200 print:bg-transparent print:bg-none">
                 <div className="mb-8 text-slate-300 leading-relaxed italic print:text-slate-700">
                    "The Social Collective sufficiently meets (and in instances surpasses) the expectations of clients, is applicable to a range of themes, project complexity and KPI measurements and continues to be innovated in ways which benefit clients and make reporting easier, quicker and more insightful."
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                       <span className="text-black font-bold text-xs">AG</span>
                    </div>
                    <div>
                       <h4 className="font-bold text-white print:text-black">Allan Gray</h4>
                    </div>
                 </div>
              </div>

              {/* KFC */}
              <div className="bg-gradient-to-b from-slate-900 to-[#03050a] border border-slate-800 p-8 rounded-2xl flex flex-col justify-between print:border-slate-200 print:bg-transparent print:bg-none">
                 <div className="mb-8 text-slate-300 leading-relaxed italic print:text-slate-700">
                    "Before TSC, KFC struggled with managing numerous beneficiaries and receiving and aggregating granular data. They also had business continuity issues whereby data was being saved in mailboxes and would be lost when members in the M&E team left."
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                       <img src="/logos/kfc.png" alt="KFC" className="w-full h-full object-contain" />
                    </div>
                    <div>
                       <h4 className="font-bold text-white print:text-black">KFC</h4>
                    </div>
                 </div>
              </div>

              {/* Assupol */}
              <div className="bg-gradient-to-b from-slate-900 to-[#03050a] border border-slate-800 p-8 rounded-2xl flex flex-col justify-between print:border-slate-200 print:bg-transparent print:bg-none">
                 <div className="mb-8 text-slate-300 leading-relaxed italic print:text-slate-700">
                    "The Assupol Trust did not have an M&E function before TSC and they were using paper-based systems to record data which was prone to error and time intensive. Like the others, they were also price sensitive in their search for M&E tools."
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                       <img src="/logos/assupol.png" alt="Assupol" className="w-full h-full object-contain" />
                    </div>
                    <div>
                       <h4 className="font-bold text-white print:text-black">Assupol Trust</h4>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        
        {/* Footer info for print only */}
        <div className="hidden print:block text-center text-xs text-slate-500 pt-12 border-t border-slate-300 mt-12">
            <strong>The Social Collective Pty Ltd.</strong><br />
            Reg No. 2015 / 160496 / 07 | ATT: The Social Collective | 35 Carstens Street, Tamboerskloof, Cape Town, South Africa<br />
            B-BBEE: Level 2
        </div>

      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}
