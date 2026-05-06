"use client";

import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed w-full z-50 top-0 border-b border-indigo-900/30 bg-[#05080f]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
                    <Bot className="w-8 h-8 text-indigo-500" />
                    <span className="text-white">ai.collective.<span className="text-indigo-500">social</span></span>
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                    <Link href="/#services" className={`hover:text-indigo-400 transition-colors ${pathname === '/services' ? 'text-indigo-400' : ''}`}>Solutions</Link>
                    <Link href="/#process" className={`hover:text-indigo-400 transition-colors ${pathname === '/process' ? 'text-indigo-400' : ''}`}>Process</Link>
                </div>
                <Link href="/#audit" className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </nav>
    );
}
