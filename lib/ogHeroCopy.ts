import { translations, type Language } from '@/components/translations';
import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';
import { SERVICE_KEY_MAP } from '@/app/[lang]/services/[serviceId]/metadata';

export type OgHeroCopy = {
  title: string;
  description: string;
};

/** Текст OG з hero окремої послуги (websites / chatbots / design). */
export function getServiceDetailOgHero(lang: Language, serviceId: ServiceId): OgHeroCopy | null {
  const pageKey = SERVICE_KEY_MAP[serviceId];
  const page = translations[lang].services[pageKey] as
    | {
        serviceHero?: { title?: string; tagline?: string; intro?: string };
        subtitle?: string;
        teaserOffer?: string;
      }
    | undefined;

  const hero = page?.serviceHero;
  if (!hero?.title) return null;

  const description =
    [hero.tagline, hero.intro].filter(Boolean).join(' ') ||
    page?.teaserOffer ||
    page?.subtitle ||
    '';

  return {
    title: hero.title,
    description,
  };
}

/** Текст OG з hero хаба «Що ми робимо?». */
export function getServicesHubOgHero(lang: Language): OgHeroCopy {
  const s = translations[lang].services;
  return {
    title: s.passion,
    description: [s.passionTitle, s.passionDesc].filter(Boolean).join(' '),
  };
}

/** Текст OG з hero сторінки портфоліо. */
export function getPortfolioHubOgHero(lang: Language): OgHeroCopy {
  const p = translations[lang].portfolio;
  return {
    title: p.title,
    description: p.heroIntroDescription || [p.heroIntroLine1, p.heroIntroLine2].filter(Boolean).join(' '),
  };
}
