import type { SeoLandingCopy, SeoLandingSlug } from './types';

type AllLandings = Record<SeoLandingSlug, SeoLandingCopy>;

export const EN_SEO_LANDINGS: AllLandings = {
  'telegram-bots': {
    metaTitle: 'Custom Telegram Bot Development | from $150 | TeleBots',
    metaDescription:
      'Order a Telegram bot for business: leads, payments, CRM, AI. Start in 24h, from $150. 200+ projects. Free consultation — TeleBots.',
    keywords:
      'telegram bot development, order telegram bot, create telegram bot, telegram bot for business, bot with payments, crm telegram integration, telegram bot price, TeleBots',
    h1: 'Custom Telegram bot development for business',
    intro:
      'We build Telegram bots that collect leads, accept payments, answer customers, and connect to CRM. No code for its own sake — only flows that save time and drive sales.',
    lead:
      'Telegram is already open on most of your customers’ phones. A bot takes routine work off managers: qualifies the request, shares pricing, accepts payment, and sends a hot lead to CRM. We design the dialogue around your sales process — from a simple lead bot to a marketplace in the messenger.',
    benefitsTitle: 'What a Telegram bot delivers',
    benefits: [
      'Lead capture and qualification 24/7 without a manager on the line',
      'Payments via LiqPay, Fondy, Stripe, or crypto right in the chat',
      'Sync with CRM, Google Sheets, Notion, and internal APIs',
      'AI answers to common questions with escalation to a human',
      'Broadcasts, funnels, and reminders without third-party tools',
      'Admin panel or admin bot for your team',
    ],
    audienceTitle: 'Who this format is for',
    audience: [
      'You have repeating questions and want them off managers’ plates',
      'You need leads from Telegram / Instagram / ads in one channel',
      'You want to accept payments without a separate checkout site',
      'You have a CRM and need automatic deal sync',
      'You’re launching a product and need a fast MVP in days, not months',
      'You work with subscriptions, bookings, or internal team tools',
    ],
    deliverablesTitle: 'What you get',
    deliverables: [
      {
        title: 'Dialogue scenario',
        text: 'Step map, branches, copy, and criteria for a “successful” lead — so the bot drives toward a goal, not just replies.',
      },
      {
        title: 'Production-ready bot',
        text: 'Deploy, webhooks, database, logs. Stable under real load — not a demo on a laptop.',
      },
      {
        title: 'Integrations for your process',
        text: 'Payments, CRM, spreadsheets, channels, admin — only what your team actually needs.',
      },
      {
        title: 'Handover and launch support',
        text: 'How to change texts, pricing, broadcasts. Tweaks after the first weeks of live traffic.',
      },
    ],
    useCasesTitle: 'Typical scenarios we launch',
    useCases: [
      {
        title: 'Lead bot & booking',
        text: 'The customer picks a service, leaves a contact, gets confirmation. The manager sees a ready brief in CRM.',
      },
      {
        title: 'Sales in chat',
        text: 'Catalog, cart, payment, receipt, and order status — without leaving Telegram.',
      },
      {
        title: 'Support & knowledge base',
        text: 'FAQ, statuses, escalation to a human with dialogue context. Fewer repeating tickets.',
      },
      {
        title: 'Subscriptions & access',
        text: 'Payment, renewals, auto-access to a channel/group, cutting off expired subscriptions.',
      },
    ],
    showcaseTitle: 'Cases from our portfolio',
    showcaseIntro:
      'Below are real bots we built end to end: a marketplace, paid subscriptions, and business automation.',
    showcaseCaptions: [
      'TradeGround — marketplace in Telegram',
      'Subscription bot and community access',
      'Lead and process automation in a bot',
    ],
    stats: [
      { value: '200+', label: 'projects' },
      { value: 'from $150', label: 'bot starting price' },
      { value: '24h', label: 'response time' },
      { value: '3–10 days', label: 'typical MVP' },
    ],
    sections: [
      {
        title: 'What a Telegram bot is good for',
        paragraphs: [
          'A bot covers repeating flows: booking a service, catalog and cart, customer support, employee onboarding, surveys, and internal company tools.',
          'If you already have a website or Instagram — the bot becomes the channel where customers leave a contact and reach payment faster, with fewer steps.',
          'We don’t draw buttons for the sake of buttons. First we lock the business goal (lead, sale, support, subscription), then build a minimal scenario you can validate on real chats.',
        ],
      },
      {
        title: 'How we develop bots',
        paragraphs: [
          'We start with the scenario and goal. Then — dialogue prototype, integrations, test launch, and handover with documentation.',
          'Stack for the job: Node.js / Python, Telegram Bot API, webhooks, databases, payments, and CRM. A typical MVP takes a few days to 2–3 weeks.',
          'After launch we look at real conversations: where users get stuck, which questions repeat, what to move into AI or a separate menu branch.',
        ],
      },
      {
        title: 'Why clients choose TeleBots',
        paragraphs: [
          'One team owns the scenario, code, integrations, and launch — no bouncing between an agency, a freelancer, and tech support.',
          'We’ve shipped both simple lead bots and complex products: mini-APIs, payments, subscriptions, admin panels. We can also work as a contractor for agencies with a steady stream of requests.',
        ],
      },
    ],
    processTitle: 'How we work',
    processSteps: [
      { title: 'Brief & scenario', text: 'We align on the goal, dialogue steps, integrations, and success criteria.' },
      { title: 'Build & testing', text: 'We build the bot, connect payments/CRM, and validate on real cases.' },
      { title: 'Launch & support', text: 'Deploy, team guide, and tweaks after the first weeks of use.' },
    ],
    faqTitle: 'FAQ about Telegram bot development',
    faq: [
      {
        question: 'How much does a Telegram bot cost?',
        answer:
          'A simple lead bot starts from $150. A bot with payments, CRM, and richer logic usually starts from $300–800+. We give an exact estimate after the brief.',
      },
      {
        question: 'How long does development take?',
        answer:
          'An MVP is often ready in 3–10 days. Complex integrations and a custom admin take 2–4 weeks. We start the discussion within 24 hours.',
      },
      {
        question: 'Can you connect payments and CRM?',
        answer:
          'Yes. We connect payment systems and CRM/spreadsheets to your sales process. Custom integrations are available too.',
      },
      {
        question: 'Do we need a separate server?',
        answer:
          'We’ll recommend the best hosting option for your load. For most business bots, a stable VPS or managed environment is enough.',
      },
      {
        question: 'Can we add AI later?',
        answer:
          'Yes. We often start with a clear menu and buttons, then add AI in a second phase — once there’s a base of questions and clear answer rules.',
      },
    ],
    midCtaTitle: 'Want to see how a bot would cover your flow?',
    midCtaText: 'Send 3–5 steps your managers do manually today — we’ll propose a bot outline.',
    ctaTitle: 'Need a Telegram bot for your process?',
    ctaText: 'Briefly describe the task — we’ll propose a scenario, timeline, and ballpark price.',
    relatedServiceLabel: 'All chatbots and integrations',
    pricingLabel: 'Pricing and packages',
    portfolioLabel: 'Portfolio cases',
    contactLabel: 'Message us',
    breadcrumbLabel: 'Telegram bots',
  },
  'landing-pages': {
    metaTitle: 'Landing Page Development | from $300 | TeleBots',
    metaDescription:
      'Order a turnkey landing page: conversion structure, responsive design, SEO foundation, fast launch. Typically 1–2 weeks. Free consultation — TeleBots.',
    keywords:
      'landing page development, turnkey landing, order landing page, landing page, sales landing, one-page website, landing page price, TeleBots',
    h1: 'Turnkey landing page development — a page that sells',
    intro:
      'We build landing pages for offer launches, ads, and lead capture: clear structure, fast load, responsive layout, and forms/CTAs that drive contact or payment.',
    lead:
      'A landing page isn’t a pretty picture — it’s a funnel tool. We assemble blocks around customer objections, prioritize the mobile version (where most ad traffic lands), and connect analytics so you can see what works.',
    benefitsTitle: 'What’s included in a landing page',
    benefits: [
      'Block structure tailored to the offer and customer objections',
      'Mobile-first layout (main ad traffic is mobile)',
      'Speed and technical SEO foundation (title, description, headings)',
      'Lead form, Telegram/CRM, or bot integration',
      'Basic analytics (GA4 / Meta Pixel as needed)',
      'Post-launch revisions within the agreed scope',
    ],
    audienceTitle: 'When a landing page is the right format',
    audience: [
      'You’re launching a new offer or promo for ads',
      'You need to test a product without a large multi-page site',
      'You have Meta / Google traffic and conversion to a lead matters',
      'You want a fast start in 1–2 weeks',
      'You need a page for one product, service, or event',
      'You plan to scale later into a corporate site or store',
    ],
    deliverablesTitle: 'What we deliver',
    deliverables: [
      {
        title: 'Structure and copy',
        text: 'Agreed block outline, USP, offers, and CTA logic before final build.',
      },
      {
        title: 'Finished page',
        text: 'Responsive, fast, correct meta tags, forms, and domain setup.',
      },
      {
        title: 'Lead integrations',
        text: 'Form → Telegram / CRM / Sheets. Bot connection if needed.',
      },
      {
        title: 'Foundation for growth',
        text: 'Clean code and structure you can expand into a multi-page site.',
      },
    ],
    useCasesTitle: 'What we build landings for',
    useCases: [
      {
        title: 'Ad offer',
        text: 'One service / product, clear CTA, tracking for the ads account.',
      },
      {
        title: 'Expert launch',
        text: 'Personal brand, consulting, courses — a page built for trust and leads.',
      },
      {
        title: 'Local business',
        text: 'Booking, call, directions, social proof — fast and clear on mobile.',
      },
      {
        title: 'B2B lead gen',
        text: 'Cases, stack, brief form — the manager gets a qualified request.',
      },
    ],
    showcaseTitle: 'Examples from the portfolio',
    showcaseIntro: 'Pages and sites built for conversion and a modern visual style.',
    showcaseCaptions: [
      'Landing / offer for launch',
      'Brand site with a strong visual focus',
      'Personal / expert format',
    ],
    stats: [
      { value: 'from $300', label: 'turnkey landing' },
      { value: '7–14 days', label: 'typical timeline' },
      { value: 'Next.js', label: 'modern stack' },
      { value: 'SEO foundation', label: 'from day one' },
    ],
    sections: [
      {
        title: 'When you need a dedicated landing page',
        paragraphs: [
          'A landing works better than a “big website” when you have one offer, an ad campaign, or need a fast product test without extra pages.',
          'We build the page so users understand the value in 5–10 seconds and take the next step — lead, call, or payment.',
          'If the offer works after the test — we expand into a multi-page site or e-commerce, keeping the design system and analytics.',
        ],
      },
      {
        title: 'Technology and SEO',
        paragraphs: [
          'Built on a modern stack (often Next.js): speed, clean HTML, correct meta tags. That helps both ads and organic search.',
          'We set a logical heading hierarchy, image alts, correct viewport, and basic Open Graph tags for sharing.',
        ],
      },
    ],
    processTitle: 'How we launch a landing page',
    processSteps: [
      { title: 'Offer & structure', text: 'We align on USP, blocks, copy, and references.' },
      { title: 'Design & build', text: 'Mockups or direct development with responsive layout.' },
      { title: 'Launch', text: 'Domain, forms, analytics, speed and mobile checks.' },
    ],
    faqTitle: 'Landing page FAQ',
    faq: [
      {
        question: 'How much does a landing page cost?',
        answer:
          'A typical turnkey landing starts from $300. Complex animations, integrations, or multilingual setups affect the estimate.',
      },
      {
        question: 'How fast can we launch?',
        answer: 'Often 7–14 days from an agreed brief. Rush launches are discussed separately.',
      },
      {
        question: 'Is a landing suitable for Google/Meta ads?',
        answer: 'Yes. We deliver a fast mobile version, clear CTAs, and technical requirements for ad platforms.',
      },
      {
        question: 'Can we do multiple languages?',
        answer: 'Yes — uk/en/pl/ru or others. Multilingual setup is built into URL structure and meta tags.',
      },
    ],
    midCtaTitle: 'Have an offer but no page for ads?',
    midCtaText: 'Send your niche and goal (lead / call / payment) — we’ll propose a block structure.',
    ctaTitle: 'Need a landing for ads or a launch?',
    ctaText: 'Tell us the niche and page goal — we’ll propose structure and timeline.',
    relatedServiceLabel: 'All websites and web solutions',
    pricingLabel: 'Website pricing',
    portfolioLabel: 'Work examples',
    contactLabel: 'Leave a request',
    breadcrumbLabel: 'Landing pages',
  },
  'online-stores': {
    metaTitle: 'Online Store Development | Next.js | TeleBots',
    metaDescription:
      'Turnkey online store: catalog, cart, payments, shipping, admin. Next.js, SEO, and speed. Free consultation — TeleBots.',
    keywords:
      'online store development, turnkey ecommerce, create online store, ecommerce Next.js, store with payments, online store price, TeleBots',
    h1: 'Turnkey online store development',
    intro:
      'We build e-commerce that’s convenient for buyers and for you: catalog, filters, cart, payments, order statuses, and integrations with shipping or CRM.',
    lead:
      'A custom store makes sense when a template builder limits pricing logic, product options, B2B terms, or brand UX. We design catalog and checkout so mobile feels as smooth as desktop — and so category SEO works from day one.',
    benefitsTitle: 'What you get in the store',
    benefits: [
      'Catalog with product variants, search, and filters',
      'Cart, checkout, and online payments',
      'Responsive design and speed — critical for mobile conversion',
      'SEO structure for categories and product pages',
      'Admin workflows: orders, statuses, basic reports',
      'Integrations with shipping, CRM, and analytics as needed',
    ],
    audienceTitle: 'Who a custom store is for',
    audience: [
      'Fashion / beauty / food brands that care about visual UX',
      'You need complex product variants, bundles, or B2B pricing',
      'You want control over SEO and speed — not a template theme',
      'You plan integrations with ERP / CRM / shipping',
      'You’re migrating from a legacy platform while keeping SEO',
      'You need a store + bot / broadcasts in one ecosystem',
    ],
    deliverablesTitle: 'Project scope',
    deliverables: [
      {
        title: 'Catalog and product pages',
        text: 'Categories, filters, variants, gallery, related products.',
      },
      {
        title: 'Checkout and payments',
        text: 'Cart, checkout, payment gateways, emails/notifications.',
      },
      {
        title: 'Operations',
        text: 'Order statuses, basic admin, export if needed.',
      },
      {
        title: 'SEO and analytics',
        text: 'Clean URLs, meta, speed, pixels / GA4 for the funnel.',
      },
    ],
    useCasesTitle: 'Store formats',
    useCases: [
      {
        title: 'Fashion / lifestyle',
        text: 'Strong visuals, sizes, lookbooks, fast mobile UX.',
      },
      {
        title: 'Niche e-commerce',
        text: 'Focused assortment, clear filters, emphasis on trust and shipping.',
      },
      {
        title: 'Store + Telegram',
        text: 'Catalog on the site, statuses and support in the bot.',
      },
      {
        title: 'Migration',
        text: 'Moving products and URLs from an old platform with minimal SEO loss.',
      },
    ],
    showcaseTitle: 'Stores from the portfolio',
    showcaseIntro: 'E-commerce and catalogs we built for brand and sales.',
    showcaseCaptions: [
      '13VPLUS — fashion e-commerce',
      'Cats Fresh — store + ecosystem',
      'Nieznany Piekarz — e-commerce platform',
    ],
    stats: [
      { value: 'Next.js', label: 'speed and SEO' },
      { value: 'payments', label: 'cards / crypto' },
      { value: 'mobile', label: 'first UX' },
      { value: 'turnkey', label: 'from idea to launch' },
    ],
    sections: [
      {
        title: 'When a custom store makes sense',
        paragraphs: [
          'Custom is worth it when a SaaS template blocks pricing logic, options, or the UX you need.',
          'A small assortment can start lighter and scale into a full store.',
          'At kickoff we lock entities: products, variants, shipping, payments, roles — so we don’t rewrite checkout mid-project.',
        ],
      },
      {
        title: 'Stack and support',
        paragraphs: [
          'We often use Next.js: fast pages, solid SEO, flexible integrations.',
          'After launch we help with tweaks, new sections, and checkout funnel optimization.',
        ],
      },
    ],
    processTitle: 'Store launch stages',
    processSteps: [
      { title: 'Catalog & logic', text: 'Products, variants, prices, shipping, payments, roles.' },
      { title: 'UX & development', text: 'Catalog pages, product cards, cart, checkout, admin.' },
      { title: 'Launch & training', text: 'Test orders, domain, team documentation.' },
    ],
    faqTitle: 'Online store FAQ',
    faq: [
      {
        question: 'How much does an online store cost?',
        answer:
          'It depends on entities and integrations. Starting price is typically higher than a landing; we give a range after a short requirements review.',
      },
      {
        question: 'Can you import products from Excel / another store?',
        answer: 'Yes, catalog import is planned at kickoff — it saves weeks of manual work.',
      },
      {
        question: 'Will the store be SEO-friendly?',
        answer:
          'We build clean URLs, meta tags, heading structure, and speed. Category content can be handled together.',
      },
      {
        question: 'Which payments do you connect?',
        answer: 'Card gateways (e.g. WayForPay), Stripe, crypto, and others — by geo and business model.',
      },
    ],
    midCtaTitle: 'Planning a store launch or migration?',
    midCtaText: 'Describe your assortment and needed integrations — we’ll suggest format and stages.',
    ctaTitle: 'Ready to discuss e-commerce?',
    ctaText: 'A short brief — and you’ll get a ballpark architecture with stages.',
    relatedServiceLabel: 'Website development',
    pricingLabel: 'Ballpark pricing',
    portfolioLabel: 'E-commerce cases',
    contactLabel: 'Discuss the project',
    breadcrumbLabel: 'Online stores',
  },
  'ai-chatbots': {
    metaTitle: 'AI Chatbot for Business | Telegram & Website | TeleBots',
    metaDescription:
      'GPT-based AI chatbot: answers from your knowledge base, lead qualification, 24/7 support in Telegram or on your site. Consultation — TeleBots.',
    keywords:
      'ai chatbot, chatgpt bot for business, ai telegram bot, neural network for support, artificial intelligence bot, ai consultant, TeleBots',
    h1: 'AI chatbots for support, sales, and onboarding',
    intro:
      'We connect AI to Telegram or a website widget: the bot replies in the customer’s language, draws on your documents, and hands complex chats to a manager.',
    lead:
      'AI works well where the same questions come in many wordings. We constrain knowledge sources, add “don’t invent” rules, and hybridize with buttons — so conversion stays controlled and answers stay within your policy.',
    benefitsTitle: 'What an AI bot can do',
    benefits: [
      'Answers based on your pricing, FAQ, and company policies',
      'Lead qualification and contact capture in a smooth flow',
      'Multi-language support without a separate team',
      'Escalation to a human with full dialogue context',
      'Works in Telegram, on the website, or both channels',
      'Dialogue logging and prompt improvements after launch',
    ],
    audienceTitle: 'Who an AI bot is for',
    audience: [
      'Lots of repeating questions in support or sales',
      'You have a knowledge base / FAQ / pricing the bot can learn from',
      'You need 24/7 replies without growing headcount',
      'Customers write freely, not only tap buttons',
      'You want a hybrid: menu for actions + AI for explanations',
      'Sensitive niche — you need careful answers and handoff',
    ],
    deliverablesTitle: 'What’s included in the rollout',
    deliverables: [
      {
        title: 'Knowledge base',
        text: 'Collecting and structuring materials, tone of voice, off-limits topics.',
      },
      {
        title: 'Scenario and guardrails',
        text: 'Answer rules, escalation, lead capture, no hallucinations.',
      },
      {
        title: 'Channel and integrations',
        text: 'Telegram / website, CRM, team notifications.',
      },
      {
        title: 'Post-launch tuning',
        text: 'Reviewing the first weeks of dialogues and prompt fixes.',
      },
    ],
    useCasesTitle: 'Where AI has the biggest impact',
    useCases: [
      {
        title: 'Product support',
        text: 'Statuses, terms, instructions — without a messenger queue.',
      },
      {
        title: 'Pre-sales',
        text: 'Explaining the offer, qualification, booking a call.',
      },
      {
        title: 'Customer onboarding',
        text: 'First steps after purchase, fewer “how do I start?” tickets.',
      },
      {
        title: 'Internal knowledge',
        text: 'AI assistant for the team on policies and FAQ.',
      },
    ],
    showcaseTitle: 'Bots and interfaces from practice',
    showcaseIntro: 'Examples of chat solutions and products where dialogue and automation are central.',
    showcaseCaptions: [
      'Chat scenarios for business',
      'Bot for learning / webinars',
      'Service bot for customers',
    ],
    stats: [
      { value: 'GPT', label: 'modern models' },
      { value: '24/7', label: 'replies' },
      { value: 'hybrid', label: 'buttons + AI' },
      { value: 'handoff', label: 'to a human' },
    ],
    sections: [
      {
        title: 'When AI beats a button-only bot',
        paragraphs: [
          'A classic scenario is ideal for rigid steps (booking, payment). AI shines when questions are many and wordings vary.',
          'We often build a hybrid: buttons for key actions + AI for free-form questions.',
          'Before production we run a set of test dialogues and define what the bot should answer vs. hand off to a manager.',
        ],
      },
      {
        title: 'Safety and answer quality',
        paragraphs: [
          'We limit knowledge sources, add rules, and test on typical dialogues.',
          'For sensitive topics we set careful replies and mandatory handoff to a specialist.',
        ],
      },
    ],
    processTitle: 'How we connect AI',
    processSteps: [
      { title: 'Knowledge base', text: 'We gather FAQ, documents, tone of voice, and taboos.' },
      { title: 'Scenario & integration', text: 'Channel (Telegram/site), CRM, lead handoff.' },
      { title: 'Tests & tuning', text: 'Quality checks, prompt fixes, monitoring the first weeks.' },
    ],
    faqTitle: 'AI chatbot FAQ',
    faq: [
      {
        question: 'Can you train the bot on our documents?',
        answer: 'Yes. We use your materials as the answer source and update the base when the offer changes.',
      },
      {
        question: 'Will AI replace managers?',
        answer: 'Usually no — it takes off repeating questions and delivers warmer leads. Live sales stay with the team.',
      },
      {
        question: 'How much does an AI bot cost?',
        answer: 'Depends on channel, knowledge-base size, and integrations. After the brief we quote development + estimated API costs.',
      },
      {
        question: 'Where will the bot run?',
        answer: 'In Telegram, on the website (widget), or both channels with one shared logic.',
      },
    ],
    midCtaTitle: 'Have sample customer questions?',
    midCtaText: 'Send 10–20 real messages — we’ll say whether AI can cover them well.',
    ctaTitle: 'Want AI support without messy answers?',
    ctaText: 'Send sample customer questions — we’ll assess whether AI fits your case.',
    relatedServiceLabel: 'TeleBots chatbots',
    pricingLabel: 'Bot pricing',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Request a consultation',
    breadcrumbLabel: 'AI chatbots',
  },
  'data-parsers': {
    metaTitle: 'Parser Development & Data Collection | Excel, API, CRM | TeleBots',
    metaDescription:
      'Turnkey parsers: prices, products, listings, competitor monitoring. Export to Excel, Google Sheets, DB, or API. Consultation — TeleBots.',
    keywords:
      'parser development, website scraping, data collection, price parser, marketplace parser, excel export, competitor monitoring, TeleBots',
    h1: 'Parsers and automated data collection for business',
    intro:
      'We automate data collection from websites, marketplaces, and open sources: instead of hours of copying — updated tables, reports, or an API for your process.',
    lead:
      'A parser saves hours of manual work for analysts and procurement. We first assess source stability and risks, then build a pipeline with schedule, export, and alerts — so data arrives on its own while you focus on decisions.',
    benefitsTitle: 'What we automate',
    benefits: [
      'Competitor price and stock monitoring',
      'Collecting product catalogs and attributes',
      'Parsing listings and open databases',
      'Run scheduler (daily / hourly)',
      'Export to Excel, Google Sheets, DB, webhook/API',
      'Telegram alerts on changes or errors',
    ],
    audienceTitle: 'Who needs a parser',
    audience: [
      'E-commerce with regular price monitoring',
      'Agencies and analysts with repeating collection jobs',
      'Procurement / category management teams',
      'Teams consolidating data into Sheets or CRM',
      'You need an API/webhook instead of manual exports',
      'Multiple sources and you want one report format',
    ],
    deliverablesTitle: 'What you get',
    deliverables: [
      {
        title: 'Working collection',
        text: 'Script/service for your fields and update frequency.',
      },
      {
        title: 'Export',
        text: 'Sheets, Excel, DB, or your API — whatever fits the team.',
      },
      {
        title: 'Schedule and logs',
        text: 'Cron runs, error history, clear statuses.',
      },
      {
        title: 'Alerts',
        text: 'Telegram notifications on failures or important changes.',
      },
    ],
    useCasesTitle: 'Parsing scenarios',
    useCases: [
      {
        title: 'Price monitoring',
        text: 'Daily competitor comparison for dynamic pricing.',
      },
      {
        title: 'Catalogs',
        text: 'Collecting products and attributes for an internal database.',
      },
      {
        title: 'Listings',
        text: 'Pulling from marketplaces by region / price / category filters.',
      },
      {
        title: 'Client reports',
        text: 'Regular exports for agencies without manual copy-paste.',
      },
    ],
    showcaseTitle: 'Related products and interfaces',
    showcaseIntro: 'Examples of complex digital products and systems where data and automation matter.',
    showcaseCaptions: [
      'Product with catalog and data',
      'Technology / B2B interface',
      'Team workspace with data',
    ],
    stats: [
      { value: 'cron', label: 'run schedule' },
      { value: 'Sheets', label: 'easy export' },
      { value: 'alerts', label: 'in Telegram' },
      { value: 'API', label: 'on request' },
    ],
    sections: [
      {
        title: 'Who parsers are for',
        paragraphs: [
          'For e-commerce, agencies, analysts, and procurement teams with a regular need for data.',
          'Before starting we assess the source, markup stability, and legal constraints.',
          'If an official API exists — we often recommend it as a more reliable alternative to scraping.',
        ],
      },
      {
        title: 'Reliability and support',
        paragraphs: [
          'Sites change layout — we plan monitoring and fast fixes.',
          'For critical pipelines we add logs and alerts. We can work white-label for agencies.',
        ],
      },
    ],
    processTitle: 'How we build a parser',
    processSteps: [
      { title: 'Source & fields', text: 'What we collect, how often, where results go.' },
      { title: 'Development', text: 'Script/service, schedule, export, error handling.' },
      { title: 'Handover', text: 'Documentation, test runs, support if needed.' },
    ],
    faqTitle: 'Parser FAQ',
    faq: [
      {
        question: 'How much does a parser cost?',
        answer:
          'A simple one-off scrape costs less than ongoing monitoring across several sources. Estimate after we see sample pages and fields.',
      },
      {
        question: 'Is it legal to scrape websites?',
        answer:
          'It depends on the source and terms of use. We flag risks and alternatives (official APIs).',
      },
      {
        question: 'Where can data be delivered?',
        answer: 'Excel, Google Sheets, a database, CRM, or your API/webhook.',
      },
      {
        question: 'What if the site changes layout?',
        answer: 'We plan support: monitoring and quick selector fixes.',
      },
    ],
    midCtaTitle: 'Have a source and a manual routine?',
    midCtaText: 'Send a sample page and field list — we’ll say if automation is realistic.',
    ctaTitle: 'Ready to estimate a parser for your task?',
    ctaText: 'A short source description — and you’ll get a verdict and ballpark quote.',
    relatedServiceLabel: 'All services',
    pricingLabel: 'Pricing',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Get in touch',
    breadcrumbLabel: 'Parsers',
  },
};
