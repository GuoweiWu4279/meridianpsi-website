# Customer Welcome Email (Post-Purchase)

**When to send:** Immediately after a successful Meridian Guard or Meridian Core purchase (Whop membership becomes valid).

**Sent from:** `contactmeridianpsi@gmail.com` (or your transactional sender once automated).

**Subject:** `Welcome to Meridian — your next steps`

**Source of truth for product behavior:** `MERIDIAN.md`. Test Mode / Profile tab wording matches embedded UI copy in the Meridian NT8 add-on (`while test mode is active (toggle in the Profile tab), baseline recording is paused`).

---

## Email body

```
Subject: Welcome to Meridian — your next steps

Hi [First name],

Welcome to Meridian, and thank you for joining.

Below is everything you need, in order. If anything is unclear or you get stuck, reply to this email or write to contactmeridianpsi@gmail.com and include the email address you used at checkout on Whop. We typically respond within 24 hours on business days.

---

1) Get your license key (most important)

1. Sign in to whop.com using the same email you used at checkout.
2. Open your Meridian membership / product.
3. Find the Software section (exact placement can vary slightly depending on Whop's layout) and copy your license key in full — no extra spaces before or after.

If you cannot find the Software section, don't worry — Whop's interface changes from time to time, and we've seen that before. Email us with your checkout email and we'll help you locate it.

---

2) Download and install

1. Download the latest package: https://www.meridianpsi.com/download
2. Do not unzip the file — NinjaTrader imports it as a .zip.
3. In NinjaTrader 8: Tools → Import → NinjaScript Add-On → select the .zip.
4. Restart NinjaTrader if it asks you to.

---

3) Open Meridian and activate

1. Control Center → New → Add-on → Meridian Dashboard
2. Open the License tab → paste your key → Activate.

Meridian is an add-on, not a chart indicator — you will not find it under the chart Indicators list. That is expected.

---

4) After activation — configure Settings first

Open Settings and set your size, session window, signal weights, and response preset to match how you actually trade. Meridian uses this as the foundation it learns from.

Guard rules (Guard tier only) are configured in the Guard tab — not in Settings.

---

5) Practice without affecting your daily baseline

If you want to explore the product without continuing to write to your personal baseline:

- Open the Meridian Dashboard → go to the Profile tab → turn on Test Mode.
  While Test Mode is on, PSI still runs in real time, but baseline recording is paused (same behavior described inside the product).

Market Replay is also handled in a separate context from your live baseline, so it's a good way to get comfortable with the flow.

SIM is fine for getting used to the HUD and workflow; for "don't touch baseline learning," Test Mode + Market Replay are the options the product is built around for that purpose.

---

6) What to expect in your first sessions

Your first several sessions are a learning phase — signals are intentionally gentler until Meridian has enough history to reflect your real patterns. That is normal.

---

Full step-by-step guide: https://www.meridianpsi.com/installation-guide

Thanks again for choosing Meridian.

Meridian Team
contactmeridianpsi@gmail.com
```

---

## Automation — how to send this without doing it by hand

Whop’s built-in “post-purchase email” UX has been unreliable or unavailable in your workflow; treat **automation you control** as the source of truth.

### Option A — Extend your existing Whop webhook (recommended)

You already have `Web/api/whop-webhook.ts` on Vercel. It receives Whop events and mirrors licenses to NinjaTrader.

1. In Whop **Developer → Webhooks**, confirm events include at least: **`membership.went_valid`** (and optionally `membership.renewal_successful` if you only want first purchase — usually welcome only on first `went_valid`).
2. In that handler, after signature verification, when `action === 'membership.went_valid'` (and optionally filter by `plan.id` so Core vs Guard both get the right variant later), call a transactional email API:
   - **Resend**, **SendGrid**, **Postmark**, or **Amazon SES** — pick one, add API key to Vercel env.
3. Send **HTML + plain-text** multipart; personalize `[First name]` from `event.data.user` if Whop provides name fields (otherwise use `"there"` or split from email local-part as last resort).
4. Log failures and return **500** on email send failure so Whop retries (same pattern you use for NT API errors).

**Env vars to add (example names):** `RESEND_API_KEY`, `CUSTOMER_WELCOME_FROM=contactmeridianpsi@gmail.com` (or a verified domain sender).

**Compliance:** use a domain you control with SPF/DKIM (e.g. `notifications@meridianpsi.com`) once you outgrow “from Gmail” — better deliverability than spoofing gmail.com from a third-party API.

### Option B — Whop → Zapier / Make → Gmail or transactional provider

If you prefer no code changes: connect Whop’s “new membership” or equivalent trigger to an action that sends email. Downside: extra vendor, another secret to rotate, and mapping `firstName` depends on what Whop exposes to the integration.

### Option C — Keep manual until A is shipped

Copy from this file and send from `contactmeridianpsi@gmail.com` for each new member until Option A is live.

---

## Verified links

- Download: https://www.meridianpsi.com/download  
- Installation guide: https://www.meridianpsi.com/installation-guide  
- Support: contactmeridianpsi@gmail.com  
