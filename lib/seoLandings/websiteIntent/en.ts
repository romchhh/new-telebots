import { buildWebsiteIntentLanding, type WebsiteIntentLocale, type WebsiteIntentSlug } from './build';
import type { SeoLandingCopy } from '../types';

const LABELS = {
  relatedServiceLabel: 'All websites & web solutions',
  pricingLabel: 'Website pricing',
  portfolioLabel: 'Website case studies',
  contactLabel: 'Contact us',
} as const;

type IntentBody = Omit<WebsiteIntentLocale, keyof typeof LABELS>;

const SITE_PRICE_BODY: IntentBody = {
  benefitsTitle: 'What drives website development price',
  benefits: [
    'Number of unique page templates and design complexity',
    'CMS/admin: who updates content without a developer',
    'Integrations: CRM, forms, analytics, messengers, payments',
    'SEO foundation: meta, sitemap, speed, Core Web Vitals',
    'Languages and localization (uk/en/pl/ru)',
    'Post-launch support: edits, updates, new sections',
  ],
  audienceTitle: 'Who needs a website development price estimate',
  audience: [
    'Planning a website or redesign budget and need realistic ranges',
    'Comparing agency quotes and want to understand price differences',
    'Need a site for Google/Meta ads — speed and conversion matter',
    'You have a bot or Instagram but need an SEO channel in search',
    'Want to scale a landing page into a corporate site or store',
    'Need to justify costs to management or investors',
  ],
  deliverablesTitle: 'What you get with the estimate',
  deliverables: [
    { title: 'Breakdown by phase', text: 'Structure, design, front-end, CMS, integrations, and testing — line by line.' },
    { title: 'Multiple scope options', text: 'Landing page, corporate site, or store — with different totals and timelines.' },
    { title: 'Exclusions list', text: 'Domain, hosting, paid APIs, and content — no surprises on the invoice.' },
    { title: 'Quote validity period', text: 'We lock the price for an agreed period while you decide.' },
  ],
  useCasesTitle: 'Typical budgets by site type',
  useCases: [
    { title: 'Landing page — $150–300', text: 'Single offer, lead form, analytics, responsive layout, basic SEO.' },
    { title: 'Corporate website — $500–800', text: 'Up to 10 pages, CMS, advanced SEO, forms, and integrations.' },
    { title: 'Online store — from $400', text: 'Catalog, cart, payments, admin panel, filters, and order statuses.' },
    { title: 'Complex e-commerce — custom quote', text: 'ERP, B2B, multilingual, promo codes, and warehouse sync.' },
  ],
  showcaseTitle: 'Sites at different budgets in our portfolio',
  showcaseIntro: 'From landing pages to Next.js e-commerce — real projects with SEO and integrations.',
  showcaseCaptions: ['Conversion landing page', 'Corporate site with CMS', 'E-commerce with payments'],
  stats: [
    { value: 'from $150', label: 'landing page' },
    { value: 'from $400', label: 'online store' },
    { value: '24 hrs', label: 'for a quote' },
    { value: '200+', label: 'projects' },
  ],
  sections: [
    {
      title: 'Why similar sites cost differently',
      paragraphs: [
        'Two "$200 landing pages" can differ threefold: one is a template without SEO and analytics, the other has custom design, Core Web Vitals speed, and CRM integration.',
        'We show a phase-by-phase breakdown so you see exactly what you pay for. If budget is tight — we launch an MVP and expand after the first leads.',
      ],
    },
  ],
  processTitle: 'How we calculate website development price',
  processSteps: [
    { title: '20–30 min brief', text: 'Goals, structure, integrations, languages, and deadline.' },
    { title: 'Phase-by-phase quote', text: 'We send a budget range with scope options.' },
    { title: 'Fixed in contract', text: 'Agreed total is locked — extra charges only for new tasks.' },
  ],
  midCtaText: 'Describe your project — we will return with a phase-by-phase budget breakdown.',
  ctaText: 'We will send a quote with multiple scope options within 24 hours.',
};

const LANDING_PRICE_BODY: IntentBody = {
  benefitsTitle: 'What is included in landing page cost',
  benefits: [
    'Conversion structure: hero, offer, benefits, CTA, FAQ',
    'Responsive layout for mobile and tablet',
    'Lead form integrated with CRM or Telegram',
    'Basic SEO: title, description, Open Graph, sitemap',
    'Load speed and Core Web Vitals',
    'Google Analytics / Meta Pixel when needed',
  ],
  audienceTitle: 'When a landing page is the right format',
  audience: [
    'Launching Google or Meta ads and need one focused page',
    'Testing a new product or offer without a full website',
    'Need a fast start in 1–2 weeks',
    'You have a Telegram bot but need an SEO channel in search',
    'Plan to expand into a corporate site later',
    'Want a fixed price before work begins',
  ],
  deliverablesTitle: 'What you receive',
  deliverables: [
    { title: 'Layout and structure', text: 'Wireframe or Figma mockup before coding — revisions before development starts.' },
    { title: 'Live landing page', text: 'Deploy, SSL, form, analytics — ready for ads.' },
    { title: 'SEO foundation', text: 'Meta tags, sitemap, robots.txt, mobile speed.' },
    { title: 'Handover guide', text: 'How to edit copy via CMS or admin panel.' },
  ],
  useCasesTitle: 'Landing pages we build',
  useCases: [
    { title: 'Product launch', text: 'Single offer, form, analytics — demand validation.' },
    { title: 'Ad campaign', text: 'UTM, conversions, A/B tests for headlines and CTAs.' },
    { title: 'Services & B2B', text: 'Case studies, process, brief form for your manager.' },
    { title: 'Event or course', text: 'Program, speakers, payment or registration.' },
  ],
  showcaseTitle: 'Landing pages in our portfolio',
  showcaseIntro: 'Conversion-focused pages: from fitness studios to education platforms.',
  showcaseCaptions: ['Services landing page', 'Education project', 'B2B page'],
  stats: [
    { value: 'from $150', label: 'turnkey landing page' },
    { value: '1–2 wks', label: 'typical timeline' },
    { value: '24 hrs', label: 'for an estimate' },
    { value: 'SEO', label: 'from day one' },
  ],
  sections: [
    {
      title: 'Landing page vs multi-page website',
      paragraphs: [
        'A landing page works when you have one offer and one goal — a lead or purchase. If you need About, blog, and case studies — plan for a corporate structure from the start.',
        'After a successful offer test we expand the landing into a full site, keeping the design system and analytics intact.',
      ],
    },
  ],
  processTitle: 'How we launch a landing page',
  processSteps: [
    { title: 'Structure and offer', text: 'We align blocks, copy, and CTAs before coding.' },
    { title: 'Build and integrations', text: 'Next.js, form, analytics, mobile testing.' },
    { title: 'Launch and tweaks', text: 'Deploy, verify ad pixels, refine after first leads.' },
  ],
  midCtaText: 'Tell us about your offer — we will quote landing page cost and timeline.',
  ctaText: 'Get a landing page quote within 24 hours.',
};

const STORE_PRICE_BODY: IntentBody = {
  benefitsTitle: 'What drives online store price',
  benefits: [
    'Catalog size: SKUs, variants, filters, search',
    'Payments: LiqPay, WayForPay, MonoPay, Stripe, crypto',
    'Shipping: Nova Poshta, courier, pickup, international',
    'Admin: products, orders, discounts, promo codes',
    'SEO for categories and product pages',
    'Sync with warehouse, ERP, or marketplaces',
  ],
  audienceTitle: 'Who needs an e-commerce price estimate',
  audience: [
    'Moving from Instagram/Telegram to your own sales channel',
    'Template builders limit pricing logic and product options',
    'Need warehouse or ERP integration',
    'Planning SEO traffic to product categories',
    'B2B: custom pricing and dealer portal',
    'Want to combine a website and Telegram bot for leads',
  ],
  deliverablesTitle: 'What a turnkey store includes',
  deliverables: [
    { title: 'Catalog and cart', text: 'Filters, variants, images, SEO-friendly URLs.' },
    { title: 'Checkout and payments', text: 'Cart, shipping, payment, order confirmation.' },
    { title: 'Admin panel', text: 'Products, orders, statuses, basic analytics.' },
    { title: 'Integrations', text: 'CRM, email, messengers — per agreed scope.' },
  ],
  useCasesTitle: 'Typical e-commerce budgets',
  useCases: [
    { title: 'Starter store — from $400', text: 'Catalog up to ~100 SKUs, payments, admin, basic SEO.' },
    { title: 'Mid-size store — $800–1500', text: 'Filters, promo codes, multiple shipping methods.' },
    { title: 'Complex e-commerce — custom quote', text: 'ERP, B2B, multilingual, warehouse sync.' },
    { title: 'Website + bot', text: 'SEO catalog in Google + fast leads in Telegram.' },
  ],
  showcaseTitle: 'Online stores in our portfolio',
  showcaseIntro: 'Next.js e-commerce: fashion, beauty, education, and B2B.',
  showcaseCaptions: ['Fashion e-commerce', 'Sales platform', 'Store with payments'],
  stats: [
    { value: 'from $400', label: 'turnkey store' },
    { value: '6–12 wks', label: 'typical timeline' },
    { value: 'Next.js', label: 'speed and SEO' },
    { value: '200+', label: 'projects' },
  ],
  sections: [
    {
      title: 'Custom store vs builder platform',
      paragraphs: [
        'Builders work for a quick start with a small catalog. When you need custom options, B2B pricing, or warehouse sync — custom Next.js pays off with control and SEO.',
        'We often combine a site for Google organic traffic and a Telegram bot for fast ad leads — one team runs both channels.',
      ],
    },
  ],
  processTitle: 'How we calculate online store price',
  processSteps: [
    { title: 'Catalog audit', text: 'SKUs, options, payments, shipping, integrations.' },
    { title: 'Quote and prototype', text: 'Catalog structure and checkout before development.' },
    { title: 'Phased launch', text: 'MVP → payments → integrations → scale.' },
  ],
  midCtaText: 'Describe your catalog and sales flow — we will quote a budget range.',
  ctaText: 'We will send an online store quote within 24 hours.',
};

const FAQ_TAIL = [
  {
    question: 'How long does website development take?',
    answer: 'Landing page — 1–2 weeks, corporate site — 3–6 weeks, online store — 6–12 weeks depending on integrations.',
  },
  {
    question: 'Is SEO included in the price?',
    answer: 'Yes — basic SEO (meta, sitemap, speed, heading structure) is built in from day one. Content marketing is quoted separately.',
  },
  {
    question: 'Can we combine a website and Telegram bot?',
    answer: 'Yes. A popular setup: website for Google SEO + bot for leads from Instagram and ads. One TeleBots team handles both channels.',
  },
];

export const EN_WEBSITE_INTENT: Record<WebsiteIntentSlug, SeoLandingCopy> = {
  'website-development-price': buildWebsiteIntentLanding(
    { ...LABELS, ...SITE_PRICE_BODY },
    {
      metaTitle: 'Website Development Price | From $150 — TeleBots',
      metaDescription:
        'Website development price from $150: landing page, corporate site from $500, online store from $400. Next.js, SEO, admin. 200+ projects. Free consultation.',
      keywords:
        'website development price, how much does a website cost, website cost, landing page price, custom website development, TeleBots',
      h1: 'Website development price — packages from $150',
      intro: 'Transparent website development price ranges: from landing pages to Next.js e-commerce.',
      lead:
        'Searching for "website development price" means you need a real budget before starting. Below — what shapes the total, typical ranges by site type, and how we prepare a quote.',
      breadcrumbLabel: 'Website development price',
      faqTitle: 'FAQ: website development price',
      faq: [
        {
          question: 'How much does website development cost?',
          answer: 'Landing page — $150–300, corporate site — $500–800, online store — from $400. We fix the exact price after the brief.',
        },
        {
          question: 'What is included in the price?',
          answer: 'Design/structure, front-end, CMS, basic SEO, forms, deploy, and handover guide. Hosting and domain are separate.',
        },
        ...FAQ_TAIL,
      ],
      midCtaTitle: 'Need an exact price for your scope?',
      ctaTitle: 'Get website development price',
    }
  ),
  'landing-page-price': buildWebsiteIntentLanding(
    { ...LABELS, ...LANDING_PRICE_BODY },
    {
      metaTitle: 'Landing Page Cost in 2026 | From $150',
      metaDescription:
        'Landing page cost from $150: conversion layout, responsive design, basic SEO, lead form. Launch in 1–2 weeks. Free consultation — TeleBots.',
      keywords:
        'landing page cost, landing page price, how much does a landing page cost, landing page development, order landing page, TeleBots',
      h1: 'Landing page cost — prices from $150',
      intro: 'Typical landing page cost for a turnkey page: what is included and what affects the budget.',
      lead:
        'A landing page is the fastest way to test an offer or launch ads. Below — standard packages, timelines, and what you get for the quoted amount.',
      breadcrumbLabel: 'Landing page cost',
      faqTitle: 'FAQ: landing page cost',
      faq: [
        {
          question: 'How much does a turnkey landing page cost?',
          answer: 'A typical landing page is $150–300. Complex animations, integrations, or multiple languages affect the quote.',
        },
        {
          question: 'Is a landing page suitable for Google/Meta ads?',
          answer: 'Yes. We build in speed, UTM tracking, conversions, and mobile layout from day one.',
        },
        ...FAQ_TAIL.slice(0, 2),
      ],
      midCtaTitle: 'Need a landing page for ads?',
      ctaTitle: 'Get landing page cost',
    }
  ),
  'online-store-price': buildWebsiteIntentLanding(
    { ...LABELS, ...STORE_PRICE_BODY },
    {
      metaTitle: 'Online Store Price | From $400',
      metaDescription:
        'Online store price from $400: catalog, cart, payments, admin panel, SEO. Next.js e-commerce. 200+ projects. Free consultation — TeleBots.',
      keywords:
        'online store price, how much does an online store cost, e-commerce development price, online shop cost, TeleBots',
      h1: 'Online store price — from $400',
      intro: 'Typical online store price for a turnkey shop: catalog, payments, shipping, admin panel.',
      lead:
        'E-commerce cost depends on catalog size, payments, shipping, and integrations. Below — typical ranges and what the base package includes.',
      breadcrumbLabel: 'Online store price',
      faqTitle: 'FAQ: online store price',
      faq: [
        {
          question: 'How much does an online store cost?',
          answer: 'Starter — from $400. Mid-size with filters and promo codes — $800–1500. Complex integrations — custom quote.',
        },
        {
          question: 'Which payment providers do you support?',
          answer: 'LiqPay, WayForPay, MonoPay, Stripe, and crypto — based on your market needs.',
        },
        ...FAQ_TAIL,
      ],
      midCtaTitle: 'Need a store for your catalog?',
      ctaTitle: 'Get online store price',
    }
  ),
};
