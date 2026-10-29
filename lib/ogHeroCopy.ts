import { translations, type Language } from '@/components/translations';
import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';
import { SERVICE_KEY_MAP } from '@/app/[lang]/services/[serviceId]/metadata';
import { getCaseStudyCopy } from '@/lib/caseStudies';
import { offerPageCopy } from '@/lib/offerPageCopy';
import { partnershipPageCopy } from '@/lib/partnershipPageCopy';
import { pricingPageCopy } from '@/lib/pricingPageCopy';
import { getSeoLanding, type SeoLandingSlug } from '@/lib/seoLandings';

export type OgHeroCopy = {
  title: string;
  description: string;
};

function joinLead(...parts: Array<string | undefined | null>): string {
  return parts.map((p) => (p || '').replace(/\s+/g, ' ').trim()).filter(Boolean).join(' ');
}

/** Головна — той самий h1 + lead, що в hero. */
export function getHomeOgHero(lang: Language): OgHeroCopy {
  const h = translations[lang].hero;
  return {
    title: h.title,
    description: joinLead(h.tagline, h.intro),
  };
}

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

  return {
    title: hero.title,
    description:
      joinLead(hero.tagline, hero.intro) || page?.teaserOffer || page?.subtitle || '',
  };
}

/** Текст OG з hero хаба «Що ми робимо?». */
export function getServicesHubOgHero(lang: Language): OgHeroCopy {
  const s = translations[lang].services;
  return {
    title: s.passion,
    description: joinLead(s.passionTitle, s.passionDesc),
  };
}

/** Текст OG з hero сторінки портфоліо. */
export function getPortfolioHubOgHero(lang: Language): OgHeroCopy {
  const p = translations[lang].portfolio;
  return {
    title: p.title,
    description:
      p.heroIntroDescription || joinLead(p.heroIntroLine1, p.heroIntroLine2),
  };
}

/** Кейс — heroTitle / heroLead зі case study, інакше title/subtitle. */
export function getCaseOgHero(
  lang: Language,
  caseId: string,
  fallback: { title: string; subtitle?: string; description?: string }
): OgHeroCopy {
  const study = getCaseStudyCopy(caseId, lang);
  return {
    title: study?.heroTitle || fallback.title,
    description: joinLead(study?.heroLead, fallback.subtitle, fallback.description),
  };
}

/** About — цитата в hero + підзаголовок. */
export function getAboutOgHero(lang: Language): OgHeroCopy {
  const a = translations[lang].about;
  return {
    title: a.quote,
    description: joinLead(a.headline?.sub, a.headline?.body),
  };
}

/** Contact — title + subtitle з hero. */
export function getContactOgHero(lang: Language): OgHeroCopy {
  const c = translations[lang].contact;
  return {
    title: c.title,
    description: c.subtitle,
  };
}

/** Pricing — h1 + subtitle. */
export function getPricingOgHero(lang: Language): OgHeroCopy {
  const p = pricingPageCopy[lang];
  return {
    title: p.h1,
    description: p.subtitle,
  };
}

/** Offer — heroTitle + heroLead. */
export function getOfferOgHero(lang: Language): OgHeroCopy {
  const p = offerPageCopy[lang];
  return {
    title: p.heroTitle,
    description: p.heroLead,
  };
}

/** Partnership — heroTitle + heroLead. */
export function getPartnershipOgHero(lang: Language): OgHeroCopy {
  const p = partnershipPageCopy[lang];
  return {
    title: p.heroTitle,
    description: p.heroLead,
  };
}

/** Solutions — h1 + intro/lead. */
export function getSolutionOgHero(lang: Language, slug: SeoLandingSlug): OgHeroCopy | null {
  const page = getSeoLanding(lang, slug);
  if (!page) return null;
  return {
    title: page.h1,
    description: joinLead(page.intro, page.lead),
  };
}
