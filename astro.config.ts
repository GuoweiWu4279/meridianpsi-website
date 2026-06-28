import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import vercel from '@astrojs/vercel';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

// ── IndexNow auto-ping (PRODUCTION deploys only) ────────────────────────────
// After every production build, tell Bing/Yandex (IndexNow) to re-crawl the
// site so search engines — and the AI answer engines that read their index —
// pick up updated copy in hours, not weeks. The key file lives at /<key>.txt
// (public/). NEVER throws: a ping failure must not fail the deploy. Skips
// preview + local builds (only fires when VERCEL_ENV === 'production').
const INDEXNOW_KEY = 'b2a9d05eb97fd5a96328a790012c5155';
const SITE_HOST = 'www.meridianpsi.com';

function indexNowPing(): AstroIntegration {
  return {
    name: 'indexnow-ping',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        if (process.env.VERCEL_ENV !== 'production') {
          logger.info(`indexnow: skip (not production; VERCEL_ENV=${process.env.VERCEL_ENV ?? 'undefined'})`);
          return;
        }
        try {
          const { readFileSync } = await import('node:fs');
          let xml = '';
          try {
            // Prefer the freshly-built sitemap (includes any new pages).
            xml = readFileSync(fileURLToPath(new URL('sitemap-0.xml', dir)), 'utf8');
          } catch {
            // Fallback: the live sitemap (URL list is stable across deploys).
            const r = await fetch(`https://${SITE_HOST}/sitemap-0.xml`);
            xml = r.ok ? await r.text() : '';
          }
          const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
            .map((m) => m[1].trim())
            .filter((u) => u.startsWith('http') && !u.endsWith('.xml'));
          if (!urls.length) {
            logger.warn('indexnow: no sitemap URLs found — skipped');
            return;
          }
          const res = await fetch('https://api.indexnow.org/IndexNow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
              host: SITE_HOST,
              key: INDEXNOW_KEY,
              keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
              urlList: urls,
            }),
          });
          logger.info(`indexnow: submitted ${urls.length} URLs -> HTTP ${res.status}`);
        } catch (e) {
          logger.warn('indexnow: non-fatal error — ' + ((e as Error)?.message ?? String(e)));
        }
      },
    },
  };
}

export default defineConfig({
  // Astro 5 merged the old 'hybrid' mode into 'static': pages are
  // pre-rendered by default and individual routes can opt-in to
  // on-demand rendering with `export const prerender = false`. The
  // Vercel adapter is required so those opted-in routes (currently the
  // Whop -> NT8 webhook) are actually emitted as Vercel Functions and
  // not silently dropped by the framework preset.
  adapter: vercel({
    maxDuration: 30,
  }),

  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      // Keep the sitemap canonical-only: no 301 redirect stubs, no utility/
      // internal pages, and nothing robots.txt already disallows. Redirect
      // URLs in a sitemap surface as "Page with redirect" warnings in GSC,
      // and advertising a robots-blocked URL (/partners/kit) is contradictory.
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        const excluded = [
          '/releases', // 301 → /download
          '/changelog', // 301 → /download
          '/affiliate', // 301 → /partners
          '/checkout', // utility page (Whop embed)
          '/account', // utility page
          '/partners/kit', // robots.txt-disallowed partner resource
          '/mockup/dark', // internal design mockup (noindex)
          '/mockup/light', // internal design mockup (noindex)
        ];
        return !excluded.includes(path);
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),

    // Production-only IndexNow ping. Must come after sitemap() so its
    // astro:build:done hook runs after the sitemap file is written.
    indexNowPing(),
  ],

  image: {
    domains: [],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
