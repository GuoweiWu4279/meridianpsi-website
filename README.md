# Meridian — Marketing Website

Official website for [Meridian](https://www.meridianpsi.com), a NinjaTrader 8 add-on that monitors trader behavior in real time and computes a Psychological Stability Index (PSI).

## Stack

- Astro 5 + TypeScript
- Tailwind CSS
- Vercel (auto-deploys from `main`)

## Dev

```
npm install
npm run dev      # localhost:4321
npm run build    # production build
```

## Structure

```
src/
├── pages/          ← one .astro file per route
├── data/           ← Markdown content (changelog, FAQ, blog posts) + JSON (pricing, products, features)
├── components/     ← Astro/TSX components
├── layouts/        ← PageLayout.astro (includes Header, Footer, RiskBanner on every page)
└── config.yaml     ← site name, SEO defaults, GA ID
```

## AI Rules

- `AGENTS.md` — primary AI behavioral rules (read this before editing anything)
- `.cursor/rules/` — Cursor-specific rules (brand positioning, compliance, component patterns, deploy guards)

## Key Docs

- `AFFILIATE_PROGRAM.md` — canonical partner program terms (30% recurring, 10% permanent discount, free Guard)
- `CREATOR_OUTREACH_EMAIL.md` — cold outreach email templates
- `social/` — YouTube framework, DM templates, automation pipeline, voice samples, partner program progress
