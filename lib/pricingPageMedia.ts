import type { PricingSectionId } from '@/lib/pricingPageCopy';

export const PRICING_HERO_IMAGE = '/services/services-hero_new.jpg';

export const PRICING_GALLERY_IMAGES = [
  '/services/services-websites.jpg',
  '/services/services-chatbots.jpg',
  '/services/services-design.jpg',
] as const;

export const PRICING_SECTION_IMAGES: Record<
  PricingSectionId,
  { primary: string; secondary: string }
> = {
  websites: {
    primary: '/services/services-websites.jpg',
    secondary: '/other/about-hero-macbook.jpg',
  },
  chatbots: {
    primary: '/services/services-chatbots.jpg',
    secondary: '/other/about-hero.png',
  },
  design: {
    primary: '/services/services-design.jpg',
    secondary: '/other/portfolio-hero.jpg',
  },
};
