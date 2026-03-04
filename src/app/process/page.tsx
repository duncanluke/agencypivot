import { ShieldCheck, Clock, Box } from "lucide-react";

export default function ProcessPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 pb-40">
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-white text-center">How We Work</h1>
            <p className="text-xl text-slate-400 mb-20 text-center leading-relaxed">
                Agencies talk. We ship. Our protocol is designed to get a working AI prototype into your hands in under 14 days.
            </p>

            <div className="space-y-16">
                <ProcessStep
                    number="01"
                    icon={<ShieldCheck className="w-8 h-8 text-indigo-400" />}
                    title="The 80/20 Audit"
                    description="We sit down with your team and map out your workflows. We don&apos;t try to solve everything—we hunt for the 20% of manual tasks that consume 80% of your operational time."
                />
                <ProcessStep
                    number="02"
                    icon={<Box className="w-8 h-8 text-cyan-400" />}
                    title="Rapid Prototyping"
                    description="Within days, we hard-code the initial architecture and spin up a functioning LLM agent or automation pipeline. You get hands-on access to test it immediately."
                />
                <ProcessStep
                    number="03"
                    icon={<Clock className="w-8 h-8 text-emerald-400" />}
                    title="Deployment & Training"
                    description="Once verified, we deploy the system into your AWS/GCP, Slack workspace, or custom dashboard. We provide comprehensive documentation so you own the technology."
                />
            </div>
        </div>
    );
}

interface ProcessStepProps {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ProcessStep({ number, icon, title, description }: ProcessStepProps) {
    return (
        <div className="relative flex gap-8 group">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-xl font-black text-slate-500 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors z-10 relative">
                    {number}
                </div>
                <div className="w-1 bg-gradient-to-b from-slate-800 to-transparent flex-1 absolute top-16 bottom-[-4rem] left-8 -translate-x-1/2" />
            </div>
            <div className="pt-2 pb-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800">{icon}</div>
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
