import { NextRequest } from "next/server";
import { isBlockedInput, isPortfolioTopic } from "@/lib/chatbot-guardrails";
import { streamChatResponse } from "@/lib/gemini";

export async function POST(req: NextRequest): Promise<Response> {
  const { message } = await req.json();

  if (!message || typeof message !== "string") {
    return new Response("Invalid request", { status: 400 });
  }

  if (isBlockedInput(message)) {
    return new Response("This request violates safety filters.", { status: 400 });
  }

  if (!isPortfolioTopic(message)) {
    return new Response(
      "I can only help with questions about Asit Ghosh's portfolio, skills, projects, and experience.",
      { status: 200 }
    );
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of streamChatResponse(message)) {
        controller.enqueue(encoder.encode(`data: ${chunk}\n\n`));
      }
      controller.close();
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive"
    }
  });
}
