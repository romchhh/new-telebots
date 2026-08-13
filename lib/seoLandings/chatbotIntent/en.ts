import { buildChatbotIntentLanding, type ChatbotIntentLocale, type ChatbotIntentSlug } from './build';
import type { SeoLandingCopy } from '../types';

const EN_LOCALE: ChatbotIntentLocale = {
  benefitsTitle: 'What a Telegram bot gives you',
  benefits: [
    'Leads and qualification 24/7 without a manager on the line',
    'LiqPay, Fondy, Stripe or crypto payments in chat',
    'Sync with CRM, Google Sheets, Notion and internal APIs',
    'AI answers with handoff to a human',
    'Broadcasts, funnels and reminders without extra SaaS',
    'Admin panel or admin bot for your team',
  ],
  audienceTitle: 'Who it is for',
  audience: [
    'You want a ready solution, not a DIY bot builder',
    'Repetitive questions overload your team',
    'Leads from Telegram / Instagram / ads in one channel',
    'Payments without a separate checkout site',
    'CRM sync for deals and contacts',
    'Product launch needs MVP in days, not months',
  ],
  deliverablesTitle: 'What you get',
  deliverables: [
    { title: 'Dialog flow', text: 'Steps, branches, copy and success criteria — bot drives to the goal.' },
    { title: 'Production bot', text: 'Deploy, webhooks, database, logs — stable under real load.' },
    { title: 'Integrations', text: 'Payments, CRM, sheets, channels, admin — only what you need.' },
    { title: 'Handover & support', text: 'How to change copy, plans, broadcasts; fixes after first weeks live.' },
  ],
  useCasesTitle: 'Typical scenarios',
  useCases: [
    { title: 'Lead & booking bot', text: 'Service pick, contact, confirmation; CRM-ready brief.' },
    { title: 'Sales in chat', text: 'Catalog, cart, payment, receipt — without leaving Telegram.' },
    { title: 'Support & FAQ', text: 'Answers plus escalation to a manager with context.' },
    { title: 'Subscriptions', text: 'Payment, renewal, auto-access to channel/group.' },
  ],
  showcaseTitle: 'Portfolio cases',
  showcaseIntro: 'Real turnkey bots: marketplace, paid subscriptions, business automation.',
  showcaseCaptions: ['TradeGround — Telegram marketplace', 'Subscription & access bot', 'Lead automation bot'],
  stats: [
    { value: '200+', label: 'projects' },
    { value: 'from $100', label: 'bot start' },
    { value: '24h', label: 'response time' },
    { value: '3–10 days', label: 'typical MVP' },
  ],
  sections: [
    {
      title: 'Why order chatbots from TeleBots',
      paragraphs: [
        'One team covers flow, code, integrations and launch — no agency/freelancer ping-pong.',
        'From simple leads to payments, CRM and AI. Price fixed after brief — no hidden fees.',
      ],
    },
  ],
  processTitle: 'How we work',
  processSteps: [
    { title: 'Brief & flow', text: 'Goal, dialog steps, integrations, success metrics.' },
    { title: 'Build & test', text: 'Bot, payments/CRM, real-case QA.' },
    { title: 'Launch & support', text: 'Deploy, team guide, post-launch tweaks.' },
  ],
  relatedServiceLabel: 'All chatbots & integrations',
  pricingLabel: 'Pricing & packages',
  portfolioLabel: 'Portfolio cases',
  contactLabel: 'Contact us',
  midCtaText: 'Describe the task — we suggest flow, timeline and estimate.',
  ctaText: 'Leave contact — we reply within 24h with an estimate.',
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
  'chatbots-buy': buildChatbotIntentLanding(EN_LOCALE, {
    metaTitle: 'Buy chatbots | Turnkey Telegram bot from $100',
    metaDescription:
      'Buy business chatbots: turnkey Telegram from $100. Leads, payments, CRM, AI. 200+ projects. Free consultation — TeleBots.',
    keywords: 'buy chatbot, order telegram bot, business chatbot, telegram bot price, TeleBots',
    h1: 'Buy chatbots — turnkey Telegram from $100',
    intro: 'Not a builder template — a working Telegram bot for leads, payments, CRM and 24/7 support.',
    lead: 'If you search “buy chatbots”, you need a ready tool that collects leads without an in-house dev team. We design, build, deploy and hand over with docs.',
    breadcrumbLabel: 'Buy chatbots',
    faqTitle: 'FAQ: buying a business chatbot',
    faq: [
      {
        question: 'How much to buy a chatbot?',
        answer: 'Simple lead bot from $100. Payments, CRM, complex logic from $200–300 or custom. Fixed price after brief.',
      },
      ...FAQ_TAIL_EN,
    ],
    midCtaTitle: 'Want a bot for your scenario?',
    ctaTitle: 'Buy a chatbot — get an estimate',
  }),
  'chatbot-development-price': buildChatbotIntentLanding(EN_LOCALE, {
    metaTitle: 'Chatbot development price | from $100 — TeleBots',
    metaDescription:
      'Chatbot development pricing from $100. LITE/PRO/CUSTOM packages. Telegram with payments, CRM, AI. 200+ projects. Free consultation.',
    keywords: 'chatbot development price, telegram bot cost, chatbot pricing, TeleBots',
    h1: 'Chatbot development — pricing from $100',
    intro: 'Clear chatbot development price ranges: from simple lead bots to payments, CRM and AI.',
    lead: 'Search “chatbot development price” means you need budget before start. Ranges and FAQ below; exact quote after brief.',
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
      ...FAQ_TAIL_EN.slice(0, 2),
    ],
    midCtaTitle: 'Need exact price for your spec?',
    ctaTitle: 'Get chatbot development quote',
  }),
  'telegram-bot-order-price': buildChatbotIntentLanding(EN_LOCALE, {
    metaTitle: 'Custom Telegram bot — cost from $100',
    metaDescription:
      'Custom Telegram bot order: cost from $100, MVP in 3–10 days. Payments, CRM, AI. 200+ projects. Free consultation — TeleBots.',
    keywords: 'telegram bot order cost, custom telegram bot price, order telegram bot, TeleBots',
    h1: 'Custom Telegram bot — cost from $100',
    intro: 'Custom Telegram bot for your business — flow that drives to lead or payment, not a generic template.',
    lead: 'If you search custom Telegram bot cost — budget ranges below and what affects the final price. Free estimate after brief.',
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
      ...FAQ_TAIL_EN,
    ],
    midCtaTitle: 'Need a custom bot for your process?',
    ctaTitle: 'Order Telegram bot — get cost estimate',
  }),
};
