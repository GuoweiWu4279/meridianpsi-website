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
