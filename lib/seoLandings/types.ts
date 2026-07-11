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
  caseIds: [string, string, string];
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
      '/portfolio/portfolio-tradeground-bot.png',
      '/portfolio/portfolio-dr-tolstikova-bot.jpg',
      '/portfolio/portfolio-applum-bot.jpg',
    ],
    caseIds: ['tradeground-bot', 'dr-tolstikova-bot', 'applum-bot'],
  },
  'landing-pages': {
    hero: '/services/services-websites.jpg',
    secondary: '/other/about-hero.png',
    gallery: [
      '/portfolio/portfolio-offer-dpuchkov.jpg',
      '/portfolio/portfolio-chars-kyiv.png',
      '/portfolio/portfolio-alexandraaleksiuk.jpg',
    ],
    caseIds: ['offer-dpuchkov', 'chars-kyiv', 'alexandraaleksiuk'],
  },
  'online-stores': {
    hero: '/services/services-websites.jpg',
    secondary: '/portfolio/portfolio-default.jpg',
    gallery: [
      '/portfolio/portfolio-13vplus.jpg',
      '/portfolio/portfolio-cats-fresh.jpg',
      '/portfolio/portfolio-nieznany-piekarz.png',
    ],
    caseIds: ['13vplus', 'cats-fresh', 'nieznany-piekarz'],
  },
  'ai-chatbots': {
    hero: '/services/services-chatbots.jpg',
    secondary: '/other/archive-iphone.jpg',
    gallery: [
      '/portfolio/portfolio-style-chat-vakhula.jpg',
      '/portfolio/portfolio-webinar-bot.png',
      '/portfolio/portfolio-nutritionist-bot.jpg',
    ],
    caseIds: ['style-chat-vakhula', 'webinar-bot', 'nutritionist-bot'],
  },
  'data-parsers': {
    hero: '/services/services-parsers.jpg',
    secondary: '/services/services-hero_new.jpg',
    gallery: [
      '/portfolio/portfolio-flixmarket.jpg',
      '/portfolio/portfolio-vsk-technology.png',
      '/other/about-hero-macbook.jpg',
    ],
    caseIds: ['flixmarket', 'vsk-technology', 'tradeground-bot'],
  },
};
