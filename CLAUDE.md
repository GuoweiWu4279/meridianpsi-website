<!-- Website dept — single source of truth for THIS dept. Keep < 200 lines. -->
# Meridian Website (meridianpsi.com)

Truth source for the marketing site. **Cross-cutting facts (who Gary is, product/positioning/pricing,
company map, working 铁律) live in `~/.claude/CLAUDE.md` (CANON) — don't restate them here, reference them.**
This dept is the OWNER of positioning / pricing / site-copy, but those facts LIVE in CANON: when copy changes,
update the fact in CANON (one home), not here. On any conflict, **CANON wins.**

## What this is
The public marketing + content site for Meridian, an **Astro 5 + TypeScript** static site (Astrowind template base),
Tailwind CSS, deployed on **Vercel** (project **`tradeflow-mind-website`**), live at **meridianpsi.com**.
Mostly static; a few routes opt into on-demand rendering via the Vercel adapter (currently the Whop→NT8 webhook
`src/pages/api/whop-webhook.ts`). Git: `main` is trunk; Vercel auto-deploys on push to `main`.

## Build / preview / deploy
- **Install/dev:** `npm install` · `npm run dev` → http://localhost:4321 (static-preview helper on :4399 via `static-preview.mjs`).
- **Build / preview:** `npm run build` · `npm run preview`.
- **Checks (CI runs these):** `npm run check` = `astro check` + `eslint .` + `prettier --check .`.
- **CI:** `.github/workflows/actions.yaml` runs `npm ci && npm run build` (Node 18/20/22) + `npm run check` on push/PR to `main`.
- **Deploy:** push to `main` = Vercel production. Remote preview without pushing: `vercel deploy` (returns a preview URL).
- Node engines: `^18.17.1 || ^20.3.0 || >= 21.0.0`.

## Content / page structure (where things live)
- `src/pages/` — one file per route (`.astro`, plus `terms.md`/`privacy.md`/`data-research.md`). ~65 routes:
  Product (`/psi-monitor`,`/guard`,`/journal`,`/history-intel`,`/platforms`,`/what-is-meridian-psi`,…), `/compare/*`,
  `/answers/*`, `/use-cases/*`, Resources (`/articles`,`/faq`,`/glossary`,`/about`), Conversion (`/pricing`,`/download`,
  `/install-app`,`/installation-guide`,`/account`,`/partners`,`/partners/kit`), Legal (`/trust`,`/disclaimer`,`/privacy`,`/terms`,`/refund`).
- `src/data/` — **content + canonical user-facing data.** `*.json` (`pricing.json`, `guard.json`, `signals.json`,
  `features.json`, `products.json`, `compliance.json`) are the **single source** for those facts; `changelog/`, `faq/`,
  `post/`, `partner-kit/` are schema-validated Markdown. **Don't paraphrase product facts per-page — read these.**
- `src/content/config.ts` — content-collection schemas (changelog/FAQ frontmatter is validated here).
- `src/config.yaml` (site name/SEO/GA) · `src/navigation.ts` (header/footer links) · `src/layouts/PageLayout.astro`
  (wraps every page with `RiskBanner` + `Header` + `Footer`).
- `vercel.json` — redirects (e.g. `/affiliate`→`/partners`) + security headers. `astro.config.ts` — integrations.

## ★ LOCAL RULES (website-specific, hard-won — these are not in CANON)
1. **Visual QA = real Chrome screenshots, looked at with eyes.** A green build / passing metrics is NOT "looked at."
   Render the page, open the PNG, and judge it (Gary caught a false "PASS" claimed from build success alone). For UI work
   this is the ship bar (mirrors CANON's "render and LOOK"). Render station: **`meridian-app`** can render + read PNGs;
   `qc-*.mjs` are puppeteer-core screenshot/QC scripts already in the repo.
2. **Copy is edited LINE BY LINE.** A per-page voice pass is not enough — vague / filler / roundabout sentences slip
   through. Read every line against the voice + fact gates before shipping.
3. **Compliance & legal pages are human-edit-only:** `src/pages/disclaimer.astro`, `terms.md`, `privacy.md`,
   `refund.astro`, and `src/data/compliance.json`. Ask before touching; remind Gary to have a professional review legal text.
4. **`RiskBanner` is global and mandatory** (in `PageLayout`), never remove/hide it. Legally-required language lives in
   exactly two global places (RiskBanner + footer `ntDisclaimers`/`footNote`) — do **not** duplicate per-page disclaimers.
5. **Config files are protected** (`astro.config.ts`, `vercel.json`, `package.json`, `tailwind.config.js`, `tsconfig.json`,
   `.npmrc`): explain + show the diff + get Gary's OK before changing. No third-party tracking scripts without approval.
6. **Changelog discipline:** only ever ADD `src/data/changelog/vX.Y.Z.md`; exactly one entry has `isLatest: true`.

## Positioning / voice / pricing (REFERENCE — do not restate)
- Positioning, voice ("confident, with edge — not timid/clinical"), and the SUPERSET / multi-platform / "includes a
  journal" framing → **CANON**. This dept maintains those, but they live in CANON, not here.
- Pricing model (Core + Guard via Whop, 14-day trial) → **CANON**; exact $ amounts → the live `src/data/pricing.json`
  (canonical) — do not state amounts from memory.
- Product detail (7 signals, Guard 6 triggers / 5 levels, PSI zones, auto-flatten) → `src/data/*.json` is the on-site
  canonical, cross-checked against `../MERIDIAN.md` (the addon dept's product-facts doc, rev.6).

## Social / content subsystem (`social/`) — self-managing, KEEP
`social/` is a structured content system (entry: `social/CONTENT-SYSTEM.md`). Layers: facts→`../MERIDIAN.md`/CANON,
positioning→`social/brand/POSITIONING.md`, voice + AI-tell catalog→`social/brand/VOICE.md`, Reddit strategy→
`social/reddit/ops/PLAYBOOK.md`, artifact/genre table→`ARTIFACTS.md`, lessons→`LEARNINGS.md`, queue/log under `reddit/ops/`.
Reddit is run by **Claude drafting → Gary pasting daily (≤5 min)**; channel automation is blocked by Reddit policy, and
**cold DM is a permanent red line.** Several leaf files are self-marked SUPERSEDED/DEPRECATED in place (video pipeline
moved to `Company/YouTube/pipeline/`; cold email/DM outreach stopped 2026-06-09) — left as-is so the system's own index
links stay intact. `.cursor/rules/social-voice.mdc` holds the Reddit/X reply voice (note: social voice intentionally
forbids em dashes and stays peer-toned — that is a *channel* rule, distinct from website body copy).

## Current state (2026-06-14)
- Site live on Vercel (`tradeflow-mind-website`), auto-deploy from `main`; working tree clean.
- `src/data/pricing.json` is on 14-day trial + multi-platform "one license" framing (matches CANON). `src/config.yaml`
  meta already uses the SUPERSET positioning.
- **Queued copy work:** a site-wide, line-level copy review across the page set is outstanding (the line-by-line pass in
  LOCAL RULE 2). A 2026-06-11 UX/UI audit (now archived) flagged cross-page duplication, buried download/price CTAs, and a
  few stale-copy residues (e.g. Tradovate/Ironbeam cards still saying "7-day trial") — verify against live before trusting.
- `googleSiteVerificationId` in `src/config.yaml` is still `null` (GSC token TODO).

## Gotchas (stale facts to NOT trust — verify against CANON / live data)
- **`.cursor/rules/00-brand-positioning.mdc` is STALE and `alwaysApply: true`** — it still says "native NT8 add-on,
  Windows only", "**not** a journal", "Tone: the Surgeon… clinical, no exclamation marks", and "**7-day** free trial",
  all of which CANON now reverses (superset; includes a journal; confident-with-edge; 14-day). It also hardcodes prices +
  Whop plan IDs. Treat CANON + `src/data/pricing.json` as truth; this file needs a rewrite (flagged, not yet done).
- **`AGENTS.md` is mixed:** its top half ("PSI Monitor (working title)", "conservative / never exaggerate") is the OLD
  voice; its lower half (Marketing Voice Rules, Page Inventory Discipline, redirect/sitemap table) is current and useful.
  Some external tooling reads `AGENTS.md`, so it's kept — but on voice/positioning, CANON wins over its top half.
- **`.cursor/rules/04-git-commit-push.mdc` (`alwaysApply: true`) says "commit and push without asking" — IGNORE it.**
  CANON + settings hard-gate this: commit/push **only when Gary asks** (`git push` is gated).
- Trial length: anything saying "7-day" or "no credit card" is wrong — it's **14-day, card required** (`pricing.json`).
- `src/data/pricing-Dx-*.json` and `*-Dx-202408190004.md` are old dated duplicates; the non-`-Dx` files are live.

## Archived (historical, read on demand — NOT current)
`docs/archive/`: `UX-AUDIT-2026-06-11`, `AGENTS-Dx-…`, `README-Dx-…`. See `docs/archive/README.md`.
