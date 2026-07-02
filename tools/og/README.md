# OG social card

The link-preview image (Open Graph / Twitter card) shown when meridianpsi.com is
shared. Wired in `src/config.yaml` → `openGraph.images[0].url` → `/og-image-v2.png`.

## To change it

1. Edit `og-card.html` (copy, colors, layout). The right-side visual is the real
   product render `public/m/monitor.png` — swap that path for a different real
   render if needed (do **not** hand-draw a fake HUD).
2. Run `node tools/og/render-og.mjs` → regenerates `public/og-image-v2.png`
   (renders at 2×, downscales to the 1200×630 OG spec).
3. Look at the result, then commit.

## Busting social caches

Platforms (X, LinkedIn, Facebook, Discord, Slack…) cache the OG image by URL.
If you change the image but keep the same filename, they keep showing the old one.
To force every platform to refetch, **bump the filename** (`og-image-v3.png`) in
both `render-og.mjs` (the `out` path) and `src/config.yaml`, then commit.
Or use the per-platform debuggers (Facebook Sharing Debugger, LinkedIn Post Inspector).
