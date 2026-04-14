import { getPermalink } from './utils/permalinks';

const checkoutUrl = 'https://meridianpsi.lemonsqueezy.com/checkout/buy/b7b8b514-fefa-4a34-8cad-d2e68f564d25';

export const headerData = {
  links: [
    {
      text: 'Meridian',
      href: getPermalink('/'),
      links: [
        {
          text: 'Features',
          href: getPermalink('/features'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Download',
          href: getPermalink('/download'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Changelog',
          href: getPermalink('/changelog'),
        },
        {
          text: 'FAQ',
          href: getPermalink('/faq'),
        },
      ],
    },
    {
      text: 'Support',
      href: getPermalink('/support'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Legal',
      links: [
        {
          text: 'Risk Disclaimer',
          href: getPermalink('/disclaimer'),
        },
        {
          text: 'Terms of Service',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy Policy',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Refund Policy',
          href: getPermalink('/refund'),
        },
      ],
    },
  ],
  actions: [{ text: 'Start free trial', href: checkoutUrl, variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Meridian',
      links: [
        { text: 'Features', href: getPermalink('/features') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Download', href: getPermalink('/download') },
        { text: 'Changelog', href: getPermalink('/changelog') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Support', href: getPermalink('/support') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'System requirements', href: getPermalink('/download#requirements') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Risk Disclaimer', href: getPermalink('/disclaimer') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Refund Policy', href: getPermalink('/refund') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Risk Disclaimer', href: getPermalink('/disclaimer') },
  ],
  socialLinks: [],
  footNote: `
    &copy; ${new Date().getFullYear()} Meridian. All rights reserved. &nbsp;·&nbsp;
    <span class="text-xs text-muted">Trading involves substantial risk of loss. Past performance is not indicative of future results.</span>
  `,
};
