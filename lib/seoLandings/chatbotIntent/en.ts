import { buildChatbotIntentLanding, type ChatbotIntentLocale, type ChatbotIntentSlug } from './build';
import type { SeoLandingCopy } from '../types';

/** Navigation labels are UI, not page content — safe to share. */
const LABELS = {
  relatedServiceLabel: 'All chatbots & integrations',
  pricingLabel: 'Pricing & packages',
  portfolioLabel: 'Portfolio cases',
  contactLabel: 'Contact us',
} as const;

type IntentBody = Omit<ChatbotIntentLocale, keyof typeof LABELS>;

/** "buy chatbots" — intent to purchase a finished, turnkey product. */
const BUY_BODY: IntentBody = {
  benefitsTitle: 'What you actually buy',
  benefits: [
    'A bot built around your process, not a builder template with a monthly fee',
    'Source code and every access credential stay with you — no vendor lock-in',
    'Payments taken inside the chat: LiqPay, Fondy, Stripe or crypto',
    'Wiring into your CRM, Google Sheets and internal APIs',
    'Admin panel to edit copy, plans and broadcasts without a developer',
    'Warranty fixes after launch plus a short guide for your managers',
  ],
  audienceTitle: 'When buying a ready solution makes sense',
  audience: [
    'You already tried builders and hit their limits and monthly fees',
    'You need a working bot by a specific launch or campaign date',
    'There is no in-house developer to maintain the solution',
    'Leads from Instagram, ads and the website must land in one place',
    'You want to accept payments without a separate checkout site',
    'You need a clear scope and a fixed sum before work starts',
  ],
  deliverablesTitle: 'What the purchase includes',
  deliverables: [
    { title: 'Flow and copy', text: 'Dialog map, branches, button wording and what counts as a successful lead.' },
    { title: 'Bot in production', text: 'Deployed bot with database, logs and health monitoring.' },
    { title: 'Code and access', text: 'Repository, tokens and documentation handed over after acceptance.' },
    { title: 'Team onboarding', text: 'We show how to edit content and read stats, and stay available for the first weeks.' },
  ],
  useCasesTitle: 'What clients buy most often',
  useCases: [
    { title: 'Lead bot', text: 'Service menu, contact form, instant notification to the manager.' },
    { title: 'Telegram storefront', text: 'Catalog, cart, payment and order status without leaving the chat.' },
    { title: 'Paid community', text: 'Access payment, auto-renewal, granting and revoking channel access.' },
    { title: 'Support bot', text: 'Answers to recurring questions and handoff of complex cases to a person.' },
  ],
  showcaseTitle: 'Bots already handed over to clients',
  showcaseIntro: 'Turnkey deliveries: a marketplace, in-chat sales with payments and subscription access.',
  showcaseCaptions: [
    'TradeGround — Telegram marketplace',
    'Subscription and access bot',
    'Sales with payments inside the chat',
  ],
  stats: [
    { value: '200+', label: 'delivered projects' },
    { value: 'from $100', label: 'turnkey bot' },
    { value: '3–10 days', label: 'to handover' },
    { value: '100%', label: 'code owned by client' },
  ],
  sections: [
    {
      title: 'Ready-made bot or a builder: how to choose',
      paragraphs: [
        'Builders work well for a simple menu and for testing an idea. The moment you need payments, your own customer database or non-standard logic, you start paying per integration and working around platform limits.',
        'Custom development costs more upfront, but the code and the data belong to you. The bot scales with the business instead of hitting a plan ceiling or a message quota.',
      ],
    },
  ],
  processTitle: 'How the purchase works',
  processSteps: [
    { title: 'Brief and quote', text: 'We discuss the task and fix the scope and the sum before work begins.' },
    { title: 'Build and demo', text: 'You see a working bot at interim stages and adjust it before release.' },
    { title: 'Handover and warranty', text: 'Access, code and documentation are yours; warranty fixes follow launch.' },
  ],
  midCtaText: 'Tell us which process to cover — we will match a ready format and name the price.',
  ctaText: 'Leave a contact: you get the scope of work and the price within 24 hours.',
};

/** "chatbot development price" — intent to understand the budget before starting. */
const PRICE_BODY: IntentBody = {
  benefitsTitle: 'What the price is made of',
  benefits: [
    'The number of dialog branches and screens that have to be designed',
    'Integrations: payment gateway, CRM, inventory, external APIs — each adds hours',
    'Data work: your own database, user accounts, order history',
    'An AI module and knowledge base if you need free-form answers instead of buttons',
    'Language versions of both the bot interface and the admin panel',
    'The support format after launch: one-off fixes or a monthly retainer',
  ],
  audienceTitle: 'Who needs this breakdown',
  audience: [
    'You are planning a quarterly budget and need realistic ranges',
    'You are comparing vendor proposals and want to understand the price gap',
    'You received a quote that looks inflated or suspiciously low',
    'You have to justify the spend to management or an investor',
    'You are choosing between an MVP now and the full version later',
    'You want the cost of ownership, not just the development fee',
  ],
  deliverablesTitle: 'What comes with the estimate',
  deliverables: [
    { title: 'Stage-by-stage breakdown', text: 'Hours for flow design, development, integrations and testing.' },
    { title: 'Several scope options', text: 'A minimal MVP, a working version and an extended one, each with its own sum.' },
    { title: 'What is not included', text: 'Hosting, paid APIs and content — so the invoice holds no surprises.' },
    { title: 'Quote validity period', text: 'We hold the price for an agreed window while you make the decision.' },
  ],
  useCasesTitle: 'Indicative budgets by bot type',
  useCases: [
    { title: 'Lead bot — from $100', text: 'Menu, request form, manager notification and basic statistics.' },
    { title: 'Bot with payments — from $200', text: 'Catalog, cart, payment gateway and order confirmation.' },
    { title: 'Bot with CRM — from $300', text: 'Deal sync, customer segments and automated broadcasts.' },
    { title: 'AI and complex logic — by spec', text: 'Knowledge base, roles, user accounts and external APIs.' },
  ],
  showcaseTitle: 'Projects across budget ranges',
  showcaseIntro: 'From a simple lead bot to systems with payments and an admin panel — examples from different price brackets.',
  showcaseCaptions: [
    'TradeGround — complex logic and roles',
    'Bot with payments and subscriptions',
    'Mid-budget lead automation',
  ],
  stats: [
    { value: 'from $100', label: 'lead bot' },
    { value: 'from $200', label: 'bot with payments' },
    { value: '24h', label: 'to receive a quote' },
    { value: '0', label: 'hidden add-ons' },
  ],
  sections: [
    {
      title: 'Why similar bots are priced so differently',
      paragraphs: [
        'Two quotes for “a bot with payments” can differ threefold. The gap usually is not the hourly rate but the scope: whether payment testing, error handling, logging, an admin panel and documentation were budgeted at all.',
        'We show the calculation per stage so you can see exactly what you pay for. If the budget is tight, we drop what is optional now and revisit it after the first sales.',
      ],
    },
  ],
  processTitle: 'How we calculate the cost',
  processSteps: [
    { title: 'A 20–30 minute brief', text: 'We clarify the goal, the flow, integrations and expected message volume.' },
    { title: 'Quote by stages', text: 'You receive an hours breakdown and a budget range with scope options.' },
    { title: 'Fixed in the contract', text: 'The agreed sum and timeline are locked; extra charges only for new tasks.' },
  ],
  midCtaText: 'Describe the task — we come back with the budget broken down by stage.',
  ctaText: 'We will send a quote with several scope options within 24 hours.',
};

/** "custom telegram bot cost" — intent to build something non-standard. */
const ORDER_BODY: IntentBody = {
  benefitsTitle: 'How a custom bot differs from a template',
  benefits: [
    'The flow is written around your funnel instead of bending the process to fit a template',
    'Any logic: calculations, conditions, roles, time or region restrictions',
    'Integration with what already runs in the company, from accounting to your own API',
    'Message structure and wording in your own tone of voice',
    'Load and security designed for your real volume of conversations',
    'Staged growth: an MVP first, then modules by priority',
  ],
  audienceTitle: 'When a custom solution is the right call',
  audience: [
    'Your sales process has non-standard steps that ready-made tools do not cover',
    'You need integration with an internal accounting system or your own API',
    'The bot must serve several roles: customer, manager, administrator',
    'Calculations happen inside the bot: pricing, delivery, discounts, stock levels',
    'You plan to grow the product and add modules over the year',
    'Access control, logging and keeping data on your side all matter',
  ],
  deliverablesTitle: 'What the order includes',
  deliverables: [
    { title: 'Written specification', text: 'Scenarios, roles, data and integrations documented and agreed before development.' },
    { title: 'Sprint-based delivery', text: 'We show results weekly and you re-prioritise as the work goes on.' },
    { title: 'Load testing', text: 'We check behaviour at peak volume and when external services fail.' },
    { title: 'Post-release support', text: 'Monitoring, dependency updates and new modules as separate tasks.' },
  ],
  useCasesTitle: 'Examples of custom bots',
  useCases: [
    { title: 'Telegram marketplace', text: 'Sellers, listings, deals, commission and dispute handling inside the bot.' },
    { title: 'On-site service business', text: 'Request, specialist matching, price calculation and job status.' },
    { title: 'Internal company bot', text: 'Employee requests, approvals, reports and notifications to managers.' },
    { title: 'Bot with a user account', text: 'Order history, balance, documents and one-tap repeat purchase.' },
  ],
  showcaseTitle: 'Custom bots built from scratch',
  showcaseIntro: 'Non-standard scenarios with roles, calculations and integrations for a specific business.',
  showcaseCaptions: [
    'TradeGround — roles, deals and commission',
    'Bot with calculations and a user account',
    'Integration with internal systems',
  ],
  stats: [
    { value: 'from $100', label: 'custom bot' },
    { value: '3–10 days', label: 'MVP' },
    { value: '2–4 weeks', label: 'complex integrations' },
    { value: '24h', label: 'response time' },
  ],
  sections: [
    {
      title: 'How long custom development takes',
      paragraphs: [
        'A working MVP with a core scenario and one integration usually ships in 3–10 days. Solutions with payments, user accounts and accounting-system sync take 2–4 weeks.',
        'Timelines depend on more than code: getting access to third-party services is usually the slowest part. That is why we list the required APIs during the very first call.',
      ],
    },
  ],
  processTitle: 'How to order a bot',
  processSteps: [
    { title: 'Call and specification', text: 'We walk through the process and record scenarios, roles and integrations in writing.' },
    { title: 'Flow prototype', text: 'You see the dialog structure before any code is written — changes here are free.' },
    { title: 'Release and growth', text: 'We launch, watch real conversations and refine based on the data.' },
  ],
  midCtaText: 'Walk us through your process — we will propose a bot structure, timeline and cost.',
  ctaText: 'Describe the task: you get a development plan and a cost within 24 hours.',
};

const FAQ_TAIL_EN = [
  {
    question: 'How long does development take?',
    answer: 'MVP often in 3–10 days. Complex integrations — 2–4 weeks. We respond within 24 hours.',
  },
  {
    question: 'Payments and CRM?',
    answer: 'Yes — payment gateways and CRM/sheets wired to your sales process.',
  },
  {
    question: 'Own server?',
    answer: 'We recommend hosting for your load; most business bots run fine on a stable VPS.',
  },
];

export const EN_CHATBOT_INTENT: Record<ChatbotIntentSlug, SeoLandingCopy> = {
  'chatbots-buy': buildChatbotIntentLanding(
    { ...LABELS, ...BUY_BODY },
    {
      metaTitle: 'Buy chatbots | Turnkey Telegram bot from $100',
      metaDescription:
        'Buy business chatbots: turnkey Telegram from $100. Leads, payments, CRM, AI. 200+ projects. Free consultation — TeleBots.',
      keywords: 'buy chatbot, order telegram bot, business chatbot, telegram bot price, TeleBots',
      h1: 'Buy chatbots — turnkey Telegram from $100',
      intro: 'Not a builder template — a working Telegram bot for leads, payments, CRM and 24/7 support.',
      lead: 'If you search “buy chatbots”, you need a ready tool that collects leads without an in-house dev team. We design, build, deploy and hand it over with documentation and the source code.',
      breadcrumbLabel: 'Buy chatbots',
      faqTitle: 'FAQ: buying a business chatbot',
      faq: [
        {
          question: 'How much to buy a chatbot?',
          answer: 'Simple lead bot from $100. Payments, CRM, complex logic from $200–300 or custom. Fixed price after brief.',
        },
        {
          question: 'Do we own the code after the purchase?',
          answer:
            'Yes. After acceptance we hand over the repository, tokens and documentation, so you do not depend on us for future support.',
        },
        ...FAQ_TAIL_EN,
      ],
      midCtaTitle: 'Want a bot for your scenario?',
      ctaTitle: 'Buy a chatbot — get an estimate',
    }
  ),
  'chatbot-development-price': buildChatbotIntentLanding(
    { ...LABELS, ...PRICE_BODY },
    {
      metaTitle: 'Chatbot development price | from $100 — TeleBots',
      metaDescription:
        'Chatbot development pricing from $100. LITE/PRO/CUSTOM packages. Telegram with payments, CRM, AI. 200+ projects. Free consultation.',
      keywords: 'chatbot development price, telegram bot cost, chatbot pricing, TeleBots',
      h1: 'Chatbot development — pricing from $100',
      intro: 'Clear chatbot development price ranges: from simple lead bots to payments, CRM and AI.',
      lead: 'Searching “chatbot development price” means you need a budget before you start. Below: what actually forms the sum, indicative ranges per bot type and how the quote is calculated.',
      breadcrumbLabel: 'Chatbot development price',
      faqTitle: 'FAQ: chatbot development pricing',
      faq: [
        {
          question: 'How much does chatbot development cost?',
          answer: 'LITE (leads, menu) from $100. PRO (payments, CRM) from $200–300. CUSTOM by spec. See pricing page.',
        },
        {
          question: 'What is included in the price?',
          answer: 'Flow, code, deploy, core integrations, documentation. Support and new modules quoted separately.',
        },
        {
          question: 'Can the price change during the project?',
          answer:
            'The agreed scope is fixed in the contract. The sum changes only when you add new tasks beyond the original specification.',
        },
        ...FAQ_TAIL_EN.slice(0, 2),
      ],
      midCtaTitle: 'Need exact price for your spec?',
      ctaTitle: 'Get chatbot development quote',
    }
  ),
  'telegram-bot-order-price': buildChatbotIntentLanding(
    { ...LABELS, ...ORDER_BODY },
    {
      metaTitle: 'Custom Telegram bot — cost from $100',
      metaDescription:
        'Custom Telegram bot order: cost from $100, MVP in 3–10 days. Payments, CRM, AI. 200+ projects. Free consultation — TeleBots.',
      keywords: 'telegram bot order cost, custom telegram bot price, order telegram bot, TeleBots',
      h1: 'Custom Telegram bot — cost from $100',
      intro: 'Custom Telegram bot for your business — flow that drives to lead or payment, not a generic template.',
      lead: 'If you are searching for custom Telegram bot cost, here is how bespoke development differs from ready-made tools, how long it takes and what moves the final sum.',
      breadcrumbLabel: 'Custom Telegram bot',
      faqTitle: 'FAQ: custom Telegram bot',
      faq: [
        {
          question: 'How much does a custom Telegram bot cost?',
          answer: 'From $100 for a simple lead bot. Payments, CRM, admin from $200–300. Exact cost after flow approval.',
        },
        {
          question: 'What affects the cost?',
          answer: 'Dialog branches, integrations (payments, CRM, API), languages, AI module, timeline and post-launch support.',
        },
        {
          question: 'Can we start with an MVP and extend later?',
          answer:
            'Yes, that is the most common route. We ship a base version in 3–10 days, then add modules by priority using data from real conversations.',
        },
        ...FAQ_TAIL_EN,
      ],
      midCtaTitle: 'Need a custom bot for your process?',
      ctaTitle: 'Order Telegram bot — get cost estimate',
    }
  ),
};
