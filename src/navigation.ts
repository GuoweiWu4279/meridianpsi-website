import { getPermalink } from './utils/permalinks';

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
          text: 'Meridian Guard',
          href: getPermalink('/guard'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Releases',
          href: getPermalink('/releases'),
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Support',
      links: [
        {
          text: 'FAQ',
          href: getPermalink('/faq'),
        },
        {
          text: 'Contact',
          href: getPermalink('/support'),
        },
      ],
    },
    {
      text: 'Articles',
      href: getPermalink('/articles'),
    },
    {
      text: 'Account',
      href: getPermalink('/account'),
    },
  ],
  actions: [{ text: 'Start free trial', href: '/pricing', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Meridian',
      links: [
        { text: 'Features', href: getPermalink('/features') },
        { text: 'Meridian Guard', href: getPermalink('/guard') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Releases', href: getPermalink('/releases') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Support', href: getPermalink('/support') },
        { text: 'Account', href: getPermalink('/account') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'System requirements', href: getPermalink('/releases#requirements') },
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
  socialLinks: [
    { ariaLabel: 'X / Twitter', icon: 'tabler:brand-x', href: 'https://x.com/Meridian_PSI' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@Meridianpsi1' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@meridianpsi' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/meridianpsi/' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Meridian. All rights reserved. &nbsp;·&nbsp;
    <span class="text-xs text-muted">Trading involves substantial risk of loss. Past performance is not indicative of future results.</span>
  `,
  ntDisclaimers: `
    <p><strong>Risk Disclosure:</strong> Futures and forex trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing ones' financial security or lifestyle. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results.</p>
    <p><strong>Hypothetical Performance Disclosure:</strong> Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown; in fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk of actual trading. For example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all which can adversely affect trading results.</p>
    <p><strong>Live Trade Room Disclosure:</strong> This presentation is for educational purposes only and the opinions expressed are those of the presenter only. All trades presented should be considered hypothetical and should not be expected to be replicated in a live trading account.</p>
    <p><strong>Testimonial Disclosure:</strong> Testimonials appearing on this website may not be representative of other clients or customers and is not a guarantee of future performance or success.</p>
  `,
};
