import type { SeoLandingCopy } from '../types';

export type WebsiteIntentSlug =
  | 'website-development-price'
  | 'landing-page-price'
  | 'online-store-price';

export type WebsiteIntentLocale = {
  benefitsTitle: string;
  benefits: string[];
  audienceTitle: string;
  audience: string[];
  deliverablesTitle: string;
  deliverables: SeoLandingCopy['deliverables'];
  useCasesTitle: string;
  useCases: SeoLandingCopy['useCases'];
  showcaseTitle: string;
  showcaseIntro: string;
  showcaseCaptions: SeoLandingCopy['showcaseCaptions'];
  stats: SeoLandingCopy['stats'];
  sections: SeoLandingCopy['sections'];
  processTitle: string;
  processSteps: SeoLandingCopy['processSteps'];
  relatedServiceLabel: string;
  pricingLabel: string;
  portfolioLabel: string;
  contactLabel: string;
  midCtaText: string;
  ctaText: string;
};

type IntentSeo = Pick<
  SeoLandingCopy,
  | 'metaTitle'
  | 'metaDescription'
  | 'keywords'
  | 'h1'
  | 'intro'
  | 'lead'
  | 'breadcrumbLabel'
  | 'faqTitle'
  | 'midCtaTitle'
  | 'ctaTitle'
> & {
  faq: SeoLandingCopy['faq'];
};

export function buildWebsiteIntentLanding(locale: WebsiteIntentLocale, seo: IntentSeo): SeoLandingCopy {
  return {
    ...locale,
    ...seo,
  };
}
