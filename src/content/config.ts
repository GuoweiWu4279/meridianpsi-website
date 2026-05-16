import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

// Changelog collection — schema-validated release notes
const changelogCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/changelog' }),
  schema: z.object({
    title: z.string(),
    version: z.string(),
    publishDate: z.coerce.date(),
    type: z.enum(['major', 'minor', 'patch', 'hotfix']),
    downloadUrl: z.string().optional(),
    isLatest: z.boolean().default(false),
  }),
});

// FAQ collection — schema-validated Q&A entries
const faqCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/faq' }),
  schema: z.object({
    question: z.string(),
    category: z.enum(['psychology', 'installation', 'trading', 'billing', 'technical', 'general']),
    order: z.number().default(99),
  }),
});

// Partner kit collection — used by /partners/kit page (soft-private, noindex)
const partnerKitCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/partner-kit' }),
  schema: z.object({
    title: z.string(),
    section: z.string(),
    lastUpdated: z.string().optional(),
    order: z.number().default(99),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
    copyables: z
      .array(z.object({ label: z.string(), content: z.string() }))
      .optional(),
    quickActions: z
      .array(
        z.object({
          title: z.string(),
          desc: z.string(),
          anchor: z.string(),
          icon: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  post: postCollection,
  changelog: changelogCollection,
  faq: faqCollection,
  partnerKit: partnerKitCollection,
};
