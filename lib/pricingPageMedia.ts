import type { PricingSectionId } from '@/lib/pricingPageCopy';

export const PRICING_HERO_IMAGE = '/services/services-hero_new.jpg';

/** Категорії в інтро-галереї (унікальні на сторінці) */
export const PRICING_GALLERY_IMAGES = [
  '/services/services-websites.jpg',
  '/services/services-chatbots.jpg',
  '/services/services-design.jpg',
] as const;

/**
 * Фото в блоках тарифів — окремі від галереї, щоб не дублювати
 * одні й ті самі кадри на /pricing.
 */
export const PRICING_SECTION_IMAGES: Record<
  PricingSectionId,
  { primary: string; secondary: string }
> = {
  websites: {
    primary: '/other/workspace-laptop-rocks.jpg',
    secondary: '/other/about-hero-macbook.jpg',
  },
  chatbots: {
    primary: '/other/workspace-laptop-phone.jpg',
    secondary: '/other/archive-iphone.jpg',
  },
  design: {
    primary: '/other/workspace-code-desk.jpg',
    secondary: '/other/portfolio-hero.jpg',
  },
};
