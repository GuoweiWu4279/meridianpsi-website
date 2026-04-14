# Deploy to Vercel — PSI Monitor

## One-Time Setup (Do This Once)

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `meridian-website`)
2. Push this project:
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/meridian-website.git
   git add .
   git commit -m "Initial site setup"
   git push -u origin main
   ```

### Step 2: Connect Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (free account)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Astro — no config needed
5. Click **"Deploy"**

Your site is live in ~30 seconds at a `*.vercel.app` URL.

### Step 3: Custom Domain (Optional)

1. In Vercel project → **Settings → Domains**
2. Add your domain (e.g., `meridianpsi.com`)
3. Follow the DNS instructions (add CNAME or A records)

---

## Ongoing Workflow

After setup, every time you push to `main`:

```
git add .
git commit -m "describe your change"
git push
```

→ Vercel automatically builds and deploys within 30 seconds.

---

## Environment Variables

If you later add Google Analytics, set in **Vercel Dashboard → Settings → Environment Variables**:

```
GOOGLE_ANALYTICS_ID = G-XXXXXXXXXX
```

Then update `src/config.yaml`:
```yaml
analytics:
  vendors:
    googleAnalytics:
      id: "G-XXXXXXXXXX"
```

---

## Adding a New Changelog Entry

When you release a new version, just tell Cursor AI:

> "Add changelog entry for v1.1.0 — fixed session tracking bug on dual-monitor setups"

The AI will create `src/data/changelog/v1.1.0.md` with the correct schema.
Then push, and Vercel auto-deploys.

### Changelog “Download” button (avoid 404)

Each changelog entry can set `downloadUrl` in its frontmatter. That URL is used as-is on the site.

- **Before you have a public zip:** use `/download` so the button goes to the download page (trial, install, requirements) instead of a missing file.
- **When you ship a build:** add the file under `public/downloads/` (e.g. `public/downloads/meridian-v1.0.0.zip`) and set `downloadUrl` to `/downloads/meridian-v1.0.0.zip`. Anything in `public/` is served from the domain root after deploy.

---

## URL Structure

| URL | Page |
|---|---|
| `/` | Homepage |
| `/download` | Download + trial |
| `/pricing` | Pricing plans |
| `/changelog` | Version history |
| `/faq` | FAQ |
| `/support` | Contact/support |
| `/disclaimer` | Risk disclaimer (legal) |
| `/terms` | Terms of service (legal) |
| `/privacy` | Privacy policy (legal) |
| `/refund` | Refund policy (legal) |
