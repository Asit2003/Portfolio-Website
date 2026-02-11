# AI Engineer Portfolio (Next.js)

Modern AI Engineer portfolio for Asit Ghosh with a Gemini-powered chatbot constrained to portfolio topics.

## Setup

```bash
cd ai-engineer-portfolio
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

- `GEMINI_API_KEY`: Google Gemini API key.
- `NEXT_PUBLIC_SITE_URL`: Public site URL.

## Features

- Next.js App Router pages: Home, About, Projects, Skills, Experience, Contact.
- Tailwind-based AI-themed dark UI.
- Floating chatbot widget wired to `/api/chatbot` with guardrails.
- SEO helpers: metadata, sitemap, robots.
- Portfolio content centralized in `src/data/portfolio-data.json`.

## Guardrails

Input is filtered for blocked topics and off-topic questions are redirected to portfolio-only responses.

## Content Updates

Edit `src/data/portfolio-data.json` to update all sections quickly.

## Testing

```bash
npm run test
```

## Deployment

Deploy to Vercel and add environment variables in project settings.
