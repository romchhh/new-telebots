export const SEO_LANDING_SLUGS = [
  'telegram-bots',
  'landing-pages',
  'online-stores',
  'ai-chatbots',
  'data-parsers',
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
};

export const SEO_LANDING_IMAGE: Record<SeoLandingSlug, string> = {
  'telegram-bots': '/services/services-chatbots.jpg',
  'landing-pages': '/services/services-websites.jpg',
  'online-stores': '/services/services-websites.jpg',
  'ai-chatbots': '/services/services-chatbots.jpg',
  'data-parsers': '/services/services-parsers.jpg',
};

export const SEO_LANDING_MEDIA: Record<SeoLandingSlug, SeoLandingMedia> = {
  'telegram-bots': {
    hero: '/services/services-chatbots.jpg',
    secondary: '/other/about-hero-macbook.jpg',
    gallery: [
      '/services/services-chatbots.jpg',
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
    secondary: '/other/about-hero.png',
    gallery: [
      '/services/services-websites.jpg',
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
    secondary: '/other/about-hero.png',
    gallery: [
      '/services/services-websites.jpg',
      '/other/about-hero-macbook.jpg',
      '/other/about-hero.png',
    ],
    caseIds: ['13vplus', 'chars-kyiv', '13pm', 'toptrendshop', 'nieznany-piekarz', 'kreona'],
  },
  'ai-chatbots': {
    hero: '/services/services-chatbots.jpg',
    secondary: '/other/archive-iphone.jpg',
    gallery: [
      '/services/services-chatbots.jpg',
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
    secondary: '/services/services-hero_new.jpg',
    gallery: [
      '/services/services-parsers.jpg',
      '/services/services-hero_new.jpg',
      '/other/about-hero-macbook.jpg',
    ],
    caseIds: ['carbit', 'normalnoauto', 'tradeground-bot', 'flixmarket', 'wayofprocessing', 'applum-bot'],
  },
};
