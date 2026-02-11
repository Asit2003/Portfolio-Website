import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget";

export const metadata: Metadata = {
  title: "Asit Ghosh | AI Engineer Portfolio",
  description: "Professional AI Engineer portfolio featuring projects, skills, experience, and an AI assistant chatbot.",
  openGraph: {
    title: "Asit Ghosh | AI Engineer Portfolio",
    description: "Agentic AI, LLM systems, and production AI engineering work.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <ChatbotWidget />
      </body>
    </html>
  );
}
