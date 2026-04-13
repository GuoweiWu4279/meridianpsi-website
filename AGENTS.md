# Website AI Development Rules

## Product Context

This is the official website for a **NinjaTrader trading psychology stability index monitor** — a financial software plugin.

- Product name: **PSI Monitor** (working title; in-product labels may differ)
- Platform: NinjaTrader 8
- Category: Trading psychology / behavioral tools
- Target users: Retail futures/forex traders using NinjaTrader

This is a **financial software product**. All content must be rigorous, conservative, and legally compliant. Never exaggerate capabilities.

---

## Core Principles (Always Follow)

1. **Content changes only touch `src/content/` and `src/data/`** — do not touch component logic for content edits
2. **All marketing copy must be conservative** — never use words like "guarantee", "certain", "will always", "proven to profit"
3. **Compliance pages are human-only edit zones** — `src/pages/disclaimer.astro`, `src/pages/terms.md`, `src/pages/privacy.md`, `src/pages/refund.astro` must NOT be auto-modified by AI
4. **The RiskBanner component must always be present** on every page — never remove it
5. **Every changelog entry must use the required frontmatter schema** defined in `src/content/config.ts`
6. **Styling uses Tailwind CSS only** — no inline styles, no custom CSS outside `src/assets/styles/tailwind.css`

---

## Tech Stack

- **Framework**: Astro 5 + TypeScript
- **Styling**: Tailwind CSS (config in `tailwind.config.js`)
- **Content**: Astro Content Collections (Markdown/MDX in `src/data/`)
- **Data**: JSON files in `src/data/` for products, pricing, features
- **Deployment**: Vercel (config in `vercel.json`)
- **Template base**: Astrowind (https://github.com/onwidget/astrowind)

---

## Directory Guide

```
src/
├── config.yaml          ← Site name, SEO defaults, theme — edit here for global settings
├── navigation.ts        ← Header nav + footer links — edit here for nav changes
├── data/
│   ├── post/            ← Blog posts (Markdown)
│   ├── changelog/       ← Release notes (Markdown, schema-validated)
│   └── faq/             ← FAQ entries (Markdown, schema-validated)
├── pages/
│   ├── index.astro      ← Homepage — edit content via data files where possible
│   ├── pricing.astro    ← Pricing page
│   ├── download.astro   ← Download page (auto-reads latest changelog)
│   ├── changelog.astro  ← Changelog list page
│   ├── faq.astro        ← FAQ page
│   ├── disclaimer.astro ← Risk disclaimer [HUMAN EDIT ONLY]
│   ├── refund.astro     ← Refund policy [HUMAN EDIT ONLY]
│   ├── terms.md         ← Terms of service [HUMAN EDIT ONLY]
│   └── privacy.md       ← Privacy policy [HUMAN EDIT ONLY]
└── components/
    └── compliance/
        └── RiskBanner.astro  ← Global risk disclosure bar [DO NOT REMOVE]
```

---

## Changelog Workflow

When the user says "add a changelog for version X.Y.Z", create a new file at `src/data/changelog/vX.Y.Z.md` following this exact frontmatter schema:

```markdown
---
title: "vX.Y.Z - Brief description"
version: "X.Y.Z"
publishDate: 2026-01-01
type: patch   # must be: major | minor | patch | hotfix
downloadUrl: "/downloads/meridian-vX.Y.Z.zip"
isLatest: false   # set true only for the newest release, set previous latest to false
---

### Changes
- Description of change

### Fixed
- Description of fix

### Known Issues
- None
```

Only ONE changelog entry should have `isLatest: true` at any time.

---

## Compliance Writing Rules

When writing ANY marketing copy, follow these rules:

| Forbidden phrases | Allowed alternatives |
|---|---|
| "guarantees profits" | "designed to support discipline" |
| "eliminates emotions" | "helps monitor emotional state" |
| "proven trading results" | "used by active NinjaTrader traders" |
| "will make you profitable" | "may help improve trading consistency" |
| "100% accurate signals" | "real-time psychological index" |

Any copy that claims financial outcomes must be followed by: *(Results may vary. Trading involves substantial risk.)*

---

## When to Ask Before Acting

- Any edit to legal/compliance pages
- Any change to `vercel.json`, `astro.config.ts`, `package.json`
- Any addition of third-party scripts or tracking pixels
- Changing the pricing model or pricing numbers
