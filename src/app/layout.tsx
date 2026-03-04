import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ai.collective.social | AI Agents & Automation",
  description: "Specialized software engineering for the AI era. We build custom Slack bots, workflow automation, and fast web apps for businesses in South Africa, Cape Town, and Johannesburg.",
  keywords: "AI Development Agency, Custom AI Agents, Workflow Automation, Software Engineering, Cape Town, Johannesburg, South Africa, Slack Bots, Next.js",
  openGraph: {
    title: "ai.collective.social | AI Agents & Automation",
    description: "We build AI Agents that run your business. Based in South Africa, serving Cape Town & Johannesburg.",
    siteName: "ai.collective.social",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05080f] text-slate-200 min-h-screen pt-20`}
      >
        <Navigation />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
