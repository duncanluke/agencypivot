import { Bot, Cpu, Zap, Factory } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-white">Our Services</h1>
            <p className="text-xl text-slate-400 mb-16 max-w-3xl leading-relaxed">
                We specialize in transitioning legacy businesses into the AI era. From autonomous customer service agents to complex workflow automation.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
                <ServiceDetail
                    icon={<Bot className="w-12 h-12 text-indigo-400" />}
                    title="Autonomous AI Agents"
                    description="We build bespoke AI agents trained exclusively on your company&apos;s data. These agents integrate directly into Slack, Discord, or your custom dashboard."
                    features={["24/7 Customer Support", "Data Entry Automation", "Context-Aware Memory"]}
                />
                <ServiceDetail
                    icon={<Cpu className="w-12 h-12 text-cyan-400" />}
                    title="Workflow Automation"
                    description="A business shouldn't rely on humans moving data between excel sheets. We pipe your APIs together and use LLMs to intelligently route instructions and data."
                    features={["CRM Syncing", "Email Sequence Generation", "Error Catching"]}
                />
                <ServiceDetail
                    icon={<Zap className="w-12 h-12 text-purple-400" />}
                    title="Modern Web Applications"
                    description="Need a rapid SaaS prototype or an internal tool? We build lightning-fast web apps using Next.js and Tailwind CSS, deployed securely to the edge."
                    features={["React & Next.js", "Serverless Architecture", "Premium Aesthetic Design"]}
                />
                <ServiceDetail
                    icon={<Factory className="w-12 h-12 text-emerald-400" />}
                    title="Robotics & 3D Printing"
                    description="We design and deploy basic robotics and hardware automation systems for production lines, along with custom 3D printed components to solve physical bottlenecks."
                    features={["Hardware Automation", "Custom 3D Printed Parts", "Factory Line Optimization"]}
                />
            </div>
        </div>
    );
}

interface ServiceDetailProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
}

function ServiceDetail({ icon, title, description, features }: ServiceDetailProps) {
    return (
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/40 transition-colors">
            <div className="bg-slate-950/80 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 shadow-inner">
                {icon}
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">{description}</p>

            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Key Capabilities</h3>
            <ul className="space-y-3">
                {features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}
