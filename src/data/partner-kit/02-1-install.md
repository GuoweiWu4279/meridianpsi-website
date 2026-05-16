---
title: Install Meridian
section: get-started
lastUpdated: "2026-05-14"
order: 1
---

**Requirements:** NinjaTrader 8 on Windows (64-bit). NT7 is not supported. Mac and Linux are not supported.

---

**Step 1 — Get your license key from Whop**

Sign in to Whop with the email you used at checkout, open your Meridian membership, and find the **Software** section in the left-side panel. Copy your license key. (Whop's exact layout varies by browser and account version — if you can't find Software, contact us.)

**Step 2 — Download Meridian**

Go to [meridianpsi.com/download](https://www.meridianpsi.com/download) and download the latest `.zip`. **Do not extract it** — NinjaScript packages import as `.zip`.

**Step 3 — Import into NinjaTrader 8**

In NT8: **Tools → Import → NinjaScript Add-On** → select the downloaded `.zip` file. NinjaTrader will compile the add-on. Restart NT8 if prompted.

**Step 4 — Open the Meridian Dashboard**

Two ways, either works any time:

- **Control Center → New → Add-on → Meridian Dashboard**, or
- Click the **hamburger icon (☰) in the top-right of the HUD** (after the HUD is up)

Meridian runs as an NT8 add-on. It is **not a chart indicator** and does **not** appear in the chart Indicators list — do not look for it there.

**Step 5 — Activate your license**

In the Dashboard, open the **License tab**, paste your license key, and click **Activate**. License validation requires an internet connection (one outbound call to Whop). After this, no further outbound calls are made.

**Step 6 — Configure your profile**

Open **Settings** and set your trading profile: trading size, session time window, signal weights, and the response preset (Sensitive / Balanced / Relaxed). Guard rules are configured separately, in the **Guard tab** — not in Settings.

**Step 7 — Optional: test in SIM**

SIM is not required, but it's a good way to confirm everything works before going live. Connect to SIM, place a small test trade, and confirm the Dashboard updates.

---

**Common issues:**

- *"Compilation failed"* — Make sure you're on NT8 64-bit and your .NET framework is current. Restart NT8 and try reimporting.
- *"License key not accepted"* — Double-check the key (no extra spaces, full string). Confirm you're using the same Whop account that purchased the subscription. If still failing, contact us at [contactmeridianpsi@gmail.com](mailto:contactmeridianpsi@gmail.com).
- *"I can't find Meridian in Indicators"* — That's expected. Meridian is not a chart indicator. Open it from **Control Center → New → Add-on → Meridian Dashboard**.
- *HUD not visible* — Open the Dashboard from Control Center → New → Add-on → Meridian Dashboard; the HUD comes up with it. Re-position by dragging.
