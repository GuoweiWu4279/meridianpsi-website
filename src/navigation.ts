import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      links: [
        {
          text: 'Features',
          href: getPermalink('/#features'),
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
        {
          text: 'Support',
          href: getPermalink('/support'),
        },
      ],
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
  actions: [{ text: 'Start free trial', href: getPermalink('/checkout'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Checkout', href: getPermalink('/checkout') },
        { text: 'Download', href: getPermalink('/download') },
        { text: 'Changelog', href: getPermalink('/changelog') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Contact support', href: 'mailto:contactmeridianpsi@gmail.com' },
        { text: 'System requirements', href: getPermalink('/download#requirements') },
        { text: 'Installation', href: getPermalink('/download#install') },
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
  socialLinks: [{ ariaLabel: 'Website', icon: 'tabler:world', href: 'https://meridianpsi.com' }],
  footNote: `
    &copy; ${new Date().getFullYear()} Meridian. All rights reserved. &nbsp;·&nbsp;
    <span class="text-xs text-muted">Trading involves substantial risk of loss. Past performance is not indicative of future results.</span>
  `,
};
