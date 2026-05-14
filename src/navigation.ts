import { getPermalink } from './utils/permalinks';

// Header navigation data: edit here to change top nav and footer.
//
// Design principle:
//   Header  = buyer attention (5–7 buyer-grade words, minimal cognitive load)
//   Footer  = crawler attention (full sitemap; every GEO page linked here)
//
// Crawlers and LLMs do not weight a header link higher than a footer link —
// they follow links. Keeping the header buyer-first while exposing every
// keyword-rich page in the footer gives us clean UX *and* full GEO coverage.

export const headerData = {
  links: [
    { text: 'Guard', href: getPermalink('/guard') },
    {
      text: 'Features',
      links: [
        { text: 'Guard', href: getPermalink('/guard') },
        { text: 'PSI Monitor', href: getPermalink('/psi-monitor') },
        { text: 'Adaptive Learning & Settings', href: getPermalink('/adaptive-learning-settings') },
      ],
    },
    { text: 'Compare', href: getPermalink('/compare') },
    { text: 'Pricing', href: getPermalink('/pricing') },
    {
      text: 'Resources',
      links: [
        { text: 'Articles', href: getPermalink('/articles') },
        { text: 'Q&A Library', href: getPermalink('/answers') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Glossary', href: getPermalink('/glossary') },
        { text: 'Use Cases', href: getPermalink('/use-cases') },
        { text: 'About', href: getPermalink('/about') },
      ],
    },
    {
      text: 'Download',
      href: getPermalink('/download'),
      links: [
        { text: 'Download', href: getPermalink('/download') },
        { text: 'Installation Guide', href: getPermalink('/installation-guide') },
        { text: 'Release Notes', href: getPermalink('/download') },
      ],
    },
    { text: 'Account', href: getPermalink('/account') },
  ],
  actions: [{ text: 'Start free trial', href: getPermalink('/pricing'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Meridian Guard', href: getPermalink('/guard') },
        { text: 'PSI Monitor', href: getPermalink('/psi-monitor') },
        { text: 'Adaptive Learning & Settings', href: getPermalink('/adaptive-learning-settings') },
        { text: 'How Meridian Works', href: getPermalink('/what-is-meridian-psi') },
        { text: 'All Features', href: getPermalink('/features') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Download', href: getPermalink('/download') },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'Anti-Tilt Risk Management', href: getPermalink('/anti-tilt') },
        { text: 'Revenge Trading Lockout', href: getPermalink('/use-cases/ninjatrader-revenge-trading-lockout') },
        { text: 'Overtrading Prevention', href: getPermalink('/use-cases/ninjatrader-overtrading-prevention') },
        { text: 'Stop-Loss Manipulation Detection', href: getPermalink('/use-cases/stop-loss-manipulation-detection') },
        { text: 'Prop Firm Behavioral Risk Control', href: getPermalink('/use-cases/prop-firm-behavioral-risk-control') },
        { text: 'All Use Cases', href: getPermalink('/use-cases') },
      ],
    },
    {
      title: 'Compare',
      links: [
        { text: 'vs Native NinjaTrader Risk', href: getPermalink('/compare/meridian-vs-native-ninjatrader-risk') },
        { text: 'vs Hard-Limit Tools', href: getPermalink('/compare/meridian-vs-hard-limit-tools') },
        { text: 'vs Trading Journals', href: getPermalink('/compare/meridian-vs-trading-journals') },
        { text: 'vs Daily Loss Limits', href: getPermalink('/compare/meridian-guard-vs-daily-loss-limits') },
        { text: 'Best NT8 Risk Tools (2026)', href: getPermalink('/best-ninjatrader-risk-management-tools') },
        { text: 'All Comparisons', href: getPermalink('/compare') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Articles', href: getPermalink('/articles') },
        { text: 'Q&A Library', href: getPermalink('/answers') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Glossary', href: getPermalink('/glossary') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Partner Program', href: getPermalink('/partners') },
      ],
    },
    {
      title: 'Support & Legal',
      links: [
        { text: 'Contact', href: getPermalink('/support') },
        { text: 'Account', href: getPermalink('/account') },
        { text: 'Installation Guide', href: getPermalink('/installation-guide') },
        { text: 'Trust & Security', href: getPermalink('/trust') },
        { text: 'Risk Disclaimer', href: getPermalink('/disclaimer') },
        { text: 'Privacy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
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
    <p><strong>Trademark Notice:</strong> NinjaTrader&reg; is a registered trademark of NinjaTrader LLC. Meridian is an Official NinjaTrader Ecosystem Vendor &mdash; approved by NinjaTrader&rsquo;s Compliance and Executive teams &mdash; and is operated as an independent third-party add-on developer for NinjaTrader 8.</p>
  `,
};
