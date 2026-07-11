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
  benefitsTitle: string;
  benefits: string[];
  sections: Array<{ title: string; paragraphs: string[] }>;
  processTitle: string;
  processSteps: Array<{ title: string; text: string }>;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaText: string;
  relatedServiceLabel: string;
  pricingLabel: string;
  portfolioLabel: string;
  contactLabel: string;
  breadcrumbLabel: string;
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
