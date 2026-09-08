import { UK_WEBSITE_INTENT } from './uk';
import { EN_WEBSITE_INTENT } from './en';
import { PL_WEBSITE_INTENT } from './pl';
import { RU_WEBSITE_INTENT } from './ru';
import type { Language } from '@/components/translations';
import type { SeoLandingCopy } from '../types';
import type { WebsiteIntentSlug } from './build';

export const WEBSITE_INTENT_SLUGS = [
  'website-development-price',
  'landing-page-price',
  'online-store-price',
] as const satisfies readonly WebsiteIntentSlug[];

export const WEBSITE_INTENT_BY_LANG: Record<Language, Record<WebsiteIntentSlug, SeoLandingCopy>> = {
  uk: UK_WEBSITE_INTENT,
  en: EN_WEBSITE_INTENT,
  pl: PL_WEBSITE_INTENT,
  ru: RU_WEBSITE_INTENT,
};
