import type { Language } from '@/components/translations';
import { SEO_LANDING_SLUGS, type SeoLandingCopy, type SeoLandingSlug } from './types';
import { CHATBOT_INTENT_BY_LANG } from './chatbotIntent';
import { EN_SEO_LANDINGS } from './contentEn';
import { PL_SEO_LANDINGS } from './contentPl';
import { RU_SEO_LANDINGS } from './contentRu';
import { UK_SEO_LANDINGS } from './contentUk';

const BY_LANG: Record<Language, Record<SeoLandingSlug, SeoLandingCopy>> = {
  uk: { ...UK_SEO_LANDINGS, ...CHATBOT_INTENT_BY_LANG.uk },
  en: { ...EN_SEO_LANDINGS, ...CHATBOT_INTENT_BY_LANG.en },
  pl: { ...PL_SEO_LANDINGS, ...CHATBOT_INTENT_BY_LANG.pl },
  ru: { ...RU_SEO_LANDINGS, ...CHATBOT_INTENT_BY_LANG.ru },
};

export const seoLandingsByLang = BY_LANG;

export function getSeoLanding(lang: Language, slug: string): SeoLandingCopy | null {
  if (!isSeoLandingSlug(slug)) return null;
  return BY_LANG[lang][slug];
}

export function isSeoLandingSlug(slug: string): slug is SeoLandingSlug {
  return (SEO_LANDING_SLUGS as readonly string[]).includes(slug);
}
