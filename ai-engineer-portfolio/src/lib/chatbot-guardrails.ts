const blockedTopics = ["politics", "adult", "violence", "hacking", "malware", "drugs"];
const allowedKeywords = [
  "asit",
  "portfolio",
  "experience",
  "project",
  "skills",
  "education",
  "certification",
  "contact",
  "resume",
  "karbon",
  "flowtax"
];

export function isBlockedInput(input: string): boolean {
  const lowered = input.toLowerCase();
  return blockedTopics.some((topic) => lowered.includes(topic));
}

export function isPortfolioTopic(input: string): boolean {
  const lowered = input.toLowerCase();
  return allowedKeywords.some((keyword) => lowered.includes(keyword));
}

export function buildSystemPrompt(portfolioContext: string): string {
  return `You are an AI assistant for Asit Ghosh's portfolio website.
Your ONLY purpose is to answer questions about Asit's professional background.

STRICT RULES:
1) Only answer about experience, projects, skills, education, certifications, contact.
2) If question is off-topic, politely redirect.
3) Keep responses concise and professional.
4) Never invent unknown details.

PORTFOLIO DATA:
${portfolioContext}`;
}
