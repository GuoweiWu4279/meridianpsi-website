---
title: Install Meridian
section: get-started
order: 1
---

**Requirements:** NinjaTrader 8 on Windows. NT7 is not supported. Mac is not supported.

---

**Step 1 — Download**

Go to [meridianpsi.com/download](https://www.meridianpsi.com/download) and download the latest `.zip` installer.

**Step 2 — Install the add-on**

1. Open NinjaTrader 8
2. In the top menu: **Tools → Import → NinjaScript Add-On**
3. Select the downloaded `.zip` file
4. NinjaTrader will import and compile the add-on. A confirmation dialog appears when complete

**Step 3 — Activate your license**

On first launch, Meridian will prompt you to enter your license key. Your key was included in the welcome email. Enter it and click Activate. License validation requires an internet connection (one outbound call to Whop).

**Step 4 — Open the Meridian Hub**

After activation: **Tools → Meridian → Open Hub**. This is the main dashboard — session stats, history, profile settings, and Guard configuration are all here.

**Step 5 — Add the floating HUD to a chart**

Right-click any chart → **Add Indicator → Meridian HUD**. The HUD will appear as an overlay. Resize and reposition it by dragging.

---

**Common issues:**

- *"Compilation failed"* — Make sure you're on NT8 64-bit and your .NET framework is current. Restart NT8 and try reimporting
- *"License key not accepted"* — Double-check the key for typos (no spaces). If still failing, contact us at [garycaffrey@meridian-partnership.com](mailto:garycaffrey@meridian-partnership.com)
- *HUD not visible* — The indicator may be behind your chart's price data. Right-click the chart → **Indicators** → find Meridian HUD and move it to the front
