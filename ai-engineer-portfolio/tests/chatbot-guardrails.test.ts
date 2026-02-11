import { describe, expect, it } from "vitest";
import { isBlockedInput, isPortfolioTopic } from "../src/lib/chatbot-guardrails";

describe("chatbot guardrails", () => {
  it("flags blocked content", () => {
    expect(isBlockedInput("teach me hacking")).toBe(true);
  });

  it("accepts portfolio topic", () => {
    expect(isPortfolioTopic("Tell me about Asit's projects")).toBe(true);
  });

  it("rejects unrelated topics", () => {
    expect(isPortfolioTopic("Who won world cup?")).toBe(false);
  });
});
