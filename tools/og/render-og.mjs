// Regenerate the OG social card from og-card.html.
//   node tools/og/render-og.mjs
// Renders at 2x then downscales to 1200x630 (crisp) -> public/og-image-v2.png.
// To bust social caches on a future change, bump the filename (v3...) here AND
// in src/config.yaml (openGraph.images[0].url).
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';
import path from 'path';
import { existsSync } from 'fs';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const here = path.dirname(fileURLToPath(import.meta.url));
const tpl = 'file:///' + path.join(here, 'og-card.html').replace(/\\/g, '/');
const out = path.join(here, '..', '..', 'public', 'og-image-v2.png');

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: true,
  args: ['--no-first-run', '--force-device-scale-factor=2', '--hide-scrollbars'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto(tpl, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise((r) => setTimeout(r, 500));
const buf = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

// Downscale 2400x1260 -> 1200x630. Prefer sharp; fall back to writing the 2x PNG.
try {
  const sharp = (await import('sharp')).default;
  await sharp(buf).resize(1200, 630).png({ quality: 90 }).toFile(out);
  console.log('wrote (sharp 1200x630):', out);
} catch (e) {
  const { writeFileSync } = await import('fs');
  writeFileSync(out, buf);
  console.log('sharp unavailable (' + e.message + '); wrote 2x PNG instead:', out);
}
if (!existsSync(out)) throw new Error('output not written');
