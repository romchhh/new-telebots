export const SEO_LANDING_SLUGS = [
  'telegram-bots',
  'landing-pages',
  'online-stores',
  'ai-chatbots',
  'data-parsers',
  'chatbots-buy',
  'chatbot-development-price',
  'telegram-bot-order-price',
] as const;

export type SeoLandingSlug = (typeof SEO_LANDING_SLUGS)[number];

export type SeoLandingRelatedService = 'chatbots' | 'websites' | 'design' | null;

export type SeoLandingCopy = {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  intro: string;
  lead: string;
  benefitsTitle: string;
  benefits: string[];
  audienceTitle: string;
  audience: string[];
  deliverablesTitle: string;
  deliverables: Array<{ title: string; text: string }>;
  useCasesTitle: string;
  useCases: Array<{ title: string; text: string }>;
  showcaseTitle: string;
  showcaseIntro: string;
  showcaseCaptions: [string, string, string];
  stats: Array<{ value: string; label: string }>;
  sections: Array<{ title: string; paragraphs: string[] }>;
  processTitle: string;
  processSteps: Array<{ title: string; text: string }>;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  midCtaTitle: string;
  midCtaText: string;
  ctaTitle: string;
  ctaText: string;
  relatedServiceLabel: string;
  pricingLabel: string;
  portfolioLabel: string;
  contactLabel: string;
  breadcrumbLabel: string;
};

export type SeoLandingMedia = {
  hero: string;
  secondary: string;
  gallery: [string, string, string];
  /** Активні картки портфоліо для showcase */
  caseIds: string[];
};

export const SEO_LANDING_RELATED_SERVICE: Record<SeoLandingSlug, SeoLandingRelatedService> = {
  'telegram-bots': 'chatbots',
  'landing-pages': 'websites',
  'online-stores': 'websites',
  'ai-chatbots': 'chatbots',
  'data-parsers': null,
  'chatbots-buy': 'chatbots',
  'chatbot-development-price': 'chatbots',
  'telegram-bot-order-price': 'chatbots',
};

export const SEO_LANDING_IMAGE: Record<SeoLandingSlug, string> = {
  'telegram-bots': '/services/services-chatbots.jpg',
  'landing-pages': '/services/services-websites.jpg',
  'online-stores': '/services/services-websites.jpg',
  'ai-chatbots': '/services/services-chatbots.jpg',
  'data-parsers': '/services/services-parsers.jpg',
  'chatbots-buy': '/services/services-chatbots.jpg',
  'chatbot-development-price': '/services/services-chatbots.jpg',
  'telegram-bot-order-price': '/services/services-chatbots.jpg',
};

export const SEO_LANDING_MEDIA: Record<SeoLandingSlug, SeoLandingMedia> = {
  'telegram-bots': {
    hero: '/services/services-chatbots.jpg',
    secondary: '/other/workspace-laptop-phone.jpg',
    gallery: [
      '/other/workspace-laptop-phone.jpg',
      '/other/about-hero-macbook.jpg',
      '/other/archive-iphone.jpg',
    ],
    caseIds: [
      'tradeground-bot',
      'dr-tolstikova-bot',
      'applum-bot',
      'flixmarket',
      'cosmy',
      'vevyne-dating-bot',
    ],
  },
  'landing-pages': {
    hero: '/services/services-websites.jpg',
    secondary: '/other/workspace-laptop-rocks.jpg',
    gallery: [
      '/other/workspace-laptop-rocks.jpg',
      '/other/about-hero.png',
      '/services/services-hero_new.jpg',
    ],
    caseIds: [
      'butenko-fit',
      'zavadska',
      'royal-academy',
      'emvi-digital',
      'litun-edu',
      'kls',
    ],
  },
  'online-stores': {
    hero: '/services/services-websites.jpg',
    secondary: '/other/workspace-code-desk.jpg',
    gallery: [
      '/other/workspace-code-desk.jpg',
      '/other/about-hero-macbook.jpg',
      '/other/about-hero.png',
    ],
    caseIds: ['13vplus', 'chars-kyiv', '13pm', 'toptrendshop', 'nieznany-piekarz', 'kreona'],
  },
  'ai-chatbots': {
    hero: '/services/services-chatbots.jpg',
    secondary: '/other/workspace-code-desk.jpg',
    gallery: [
      '/other/workspace-code-desk.jpg',
      '/other/archive-iphone.jpg',
      '/other/about-hero-macbook.jpg',
    ],
    caseIds: [
      'smart-bodycourse-bot',
      'cosmy',
      'flixmarket',
      'applum-bot',
      'journey-zavadska',
      'vevyne-dating-bot',
    ],
  },
  'data-parsers': {
    hero: '/services/services-parsers.jpg',
    secondary: '/other/workspace-laptop-rocks.jpg',
    gallery: [
      '/other/workspace-laptop-rocks.jpg',
      '/services/services-hero_new.jpg',
      '/other/about-hero-macbook.jpg',
    ],
    caseIds: ['carbit', 'normalnoauto', 'tradeground-bot', 'flixmarket', 'wayofprocessing', 'applum-bot'],
  },
  'chatbots-buy': {
    hero: '/services/services-chatbots.jpg',
    secondary: '/other/workspace-laptop-phone.jpg',
    gallery: [
      '/other/workspace-laptop-phone.jpg',
      '/other/about-hero-macbook.jpg',
      '/other/archive-iphone.jpg',
    ],
    caseIds: [
      'tradeground-bot',
      'dr-tolstikova-bot',
      'applum-bot',
      'flixmarket',
      'cosmy',
      'vevyne-dating-bot',
    ],
  },
  'chatbot-development-price': {
    hero: '/services/services-chatbots.jpg',
    secondary: '/other/workspace-laptop-rocks.jpg',
    gallery: [
      '/other/workspace-laptop-rocks.jpg',
      '/other/about-hero-macbook.jpg',
      '/other/archive-iphone.jpg',
    ],
    caseIds: [
      'tradeground-bot',
      'dr-tolstikova-bot',
      'applum-bot',
      'flixmarket',
      'cosmy',
      'smart-bodycourse-bot',
    ],
  },
  'telegram-bot-order-price': {
    hero: '/services/services-chatbots.jpg',
    secondary: '/other/workspace-code-desk.jpg',
    gallery: [
      '/other/workspace-code-desk.jpg',
      '/other/archive-iphone.jpg',
      '/other/about-hero-macbook.jpg',
    ],
    caseIds: [
      'tradeground-bot',
      'applum-bot',
      'flixmarket',
      'cosmy',
      'vevyne-dating-bot',
      'journey-zavadska',
    ],
  },
};
