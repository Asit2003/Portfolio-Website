import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildSystemPrompt } from "@/lib/chatbot-guardrails";
import { portfolioData } from "@/lib/portfolio-data";

export async function* streamChatResponse(message: string): AsyncGenerator<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    yield "Gemini API key is not configured. Please set GEMINI_API_KEY in .env.local.";
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContentStream([
    { text: buildSystemPrompt(JSON.stringify(portfolioData)) },
    { text: message }
  ]);

  for await (const chunk of result.stream) {
    const text = chunk.text();
    if (text) {
      yield text;
    }
  }
}
