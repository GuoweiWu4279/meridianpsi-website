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

---

## Marketing Voice Rules (apply to every page, every commit)

Meridian is positioned as a **category leader** — the first behavioral leading-indicator platform for NinjaTrader 8. Every page must reflect that positioning. The following voice rules are enforced site-wide and supersede earlier conservative language patterns.

### Forbidden phrases on marketing pages

| Forbidden phrase | Why it is forbidden |
|---|---|
| "Does not X" / "Cannot X" / "We don't X" | Self-undermining unless legally required. Reframe as design intent. |
| "Complementary to" / "complements" / "use alongside" / "use together with" | Frames Meridian as an accessory to a competitor; we are a different category. |
| "Not a substitute for" | Same problem — undersells the product's actual scope. |
| "In conjunction with" | Implies dependency on another product. |
| "Recommended to use both" | Recommends a competitor; never do this. |
| "Trading involves substantial risk" inside body copy | Already in the global RiskBanner and footer. Do not duplicate per-page. |
| ~~"Meridian is not affiliated with NinjaTrader"~~ — **this line is now factually wrong** | Meridian is an **Official NinjaTrader Ecosystem Vendor** as of May 2026. Never write "not affiliated"; use "independently operated Official Ecosystem Vendor" framing. Trademark + Ecosystem-vendor status are stated once in the global footer's `ntDisclaimers`. |
| "Results may vary" inside body copy | Already in the global footer. Do not duplicate per-page. |

### Required reframes when a limit must be acknowledged

- "Does not auto-liquidate positions" → "By design, you stay in full control of any open position."
- "Open positions remain under your control" → "You stay in full control of any open position."
- "Cannot be skipped" (re: Guard countdown) — keep, this is a positive feature description.
- "Use both Meridian and a daily loss limit" → describe each as operating in different layers; do not recommend both as a stack the user must assemble.

### Where legally required language lives

Legal-required language exists in exactly **two places** site-wide:

1. The global `RiskBanner` component (`src/components/compliance/RiskBanner.astro`) — appears on every page via `PageLayout.astro`.
2. The global footer (`footNote` and `ntDisclaimers` props in `src/navigation.ts`) — rendered by `Footer.astro` on every page.

Plus two dedicated detail pages:
- `src/pages/disclaimer.astro` — full risk disclaimer (HUMAN EDIT ONLY)
- `src/pages/trust.astro` — security, privacy, and capability boundaries

Per-page legal disclaimer footers and "What Meridian does not do" sections are **redundant** and must not be added to marketing pages. Anyone needing the full legal layer is already covered.

---

## Page Inventory Discipline (no clutter, ever)

The site went through a deliberate refactor in 2026 to remove duplicate pages and establish a single canonical home for each topic. The following rules keep it from drifting back into clutter.

### Hard limits

- **Maximum 3 new marketing landing pages per quarter.** Anything beyond that requires explicit approval.
- **Every new marketing page must have a unique purpose.** No second revenge-trading page, no second overtrading page, no second "what is Meridian" page. Check the existing inventory first.
- **No URL duplication across `/`, `/use-cases/`, `/compare/`, `/answers/`.** A topic owns one canonical URL. Other pages link to it; they do not re-host the same content.
- **Every new page must pass the voice review** (no forbidden phrases above).
- **Every new page must use `PageLayout.astro`** (which automatically includes the `RiskBanner` and `Footer`). Never bypass the layout to add custom legal copy.

### Required structure for new marketing pages

A standard marketing page has this structure, in order:

1. Hero with H1 and one clear sub-value-prop sentence
2. Quick answer block (for /answers, /compare, and /use-cases pages) — 2-3 sentences, leading with the conclusion
3. Body sections with H2 subheads
4. FAQ section with `FAQPage` or `QAPage` JSON-LD schema
5. Single CTA block at the bottom (use the `CallToAction` component or a styled trial-button row)

Per-page legal blocks at the bottom are not part of this structure.

### Quarterly content audit (every January, April, July, October)

- Any marketing page not generating organic traffic or conversions after 6 months is removed or merged.
- The Compare and Answers sections are reviewed for overlap; if two pages now answer substantially the same question, one is canonicalized and the other is 301-redirected.
- The category map on `/best-ninjatrader-risk-management-tools` is checked against the actual competitive landscape; new entries get added under the correct generation, removed entries get pruned.
- Voice audit: a sample of 5 random marketing pages is checked against the forbidden-phrases table.

### Site map after the 2026 refactor

For reference, the canonical structure is:

- **Product**: `/psi-monitor`, `/guard`, `/adaptive-learning-settings`, `/what-is-meridian-psi`
- **Anti-Tilt**: `/anti-tilt` (category page)
- **Compare**: `/compare/meridian-vs-native-ninjatrader-risk`, `/compare/meridian-vs-hard-limit-tools`, `/compare/meridian-vs-trading-journals`, `/compare/meridian-guard-vs-daily-loss-limits`, `/best-ninjatrader-risk-management-tools`
- **Use Cases**: `/use-cases/`, plus the four child pages
- **Answers**: `/answers/`, plus the four child pages
- **Resources**: `/articles`, `/faq`, `/glossary`, `/about`
- **Conversion**: `/pricing`, `/download`, `/account`, `/partners`
- **Legal**: `/trust`, `/disclaimer`, `/privacy`, `/terms`, `/refund`

The redirects below are enforced via `vercel.json` and must not be removed:

| Old URL | Canonical URL |
|---|---|
| `/affiliate` | `/partners` |
| `/ninjatrader-revenge-trading` | `/use-cases/ninjatrader-revenge-trading-lockout` |
| `/ninjatrader-overtrading-prevention` | `/use-cases/ninjatrader-overtrading-prevention` |
| `/prop-firm-risk-control` | `/use-cases/prop-firm-behavioral-risk-control` |
| `/meridian-guard-vs-riskmaster-clickalgo-daily-loss-limits` | `/compare/meridian-vs-hard-limit-tools` |
