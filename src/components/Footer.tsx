import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-slate-800/50 bg-[#03050a] text-center w-full mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} ai.collective.social. All rights reserved.
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                    <Link href="/privacy" className="hover:text-indigo-400 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-indigo-400 transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
