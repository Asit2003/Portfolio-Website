"use client";

import { useState } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export function ChatbotWidget(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Hi! Ask me about Asit Ghosh's projects, experience, and skills." }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    const text = await response.text();
    setMessages((prev) => [...prev, { role: "assistant", text }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="glass mb-3 h-96 w-80 p-3">
          <div className="mb-2 text-sm font-semibold text-accent">AI Portfolio Assistant</div>
          <div className="mb-2 h-64 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <p key={idx} className={msg.role === "user" ? "text-right text-cyan-200" : "text-slate-200"}>{msg.text}</p>
            ))}
            {loading && <p className="text-slate-400">Thinking...</p>}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full rounded bg-slate-800 px-2 py-1 text-sm"
              placeholder="Ask about projects..."
            />
            <button onClick={sendMessage} className="rounded bg-accent px-3 py-1 text-slate-900">Send</button>
          </div>
        </div>
      )}
      <button className="rounded-full bg-accent px-4 py-3 font-semibold text-slate-900" onClick={() => setOpen((v) => !v)}>
        {open ? "Close" : "Chat"}
      </button>
    </div>
  );
}
