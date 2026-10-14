import type { Metadata } from 'next';
import type { Language } from '@/components/translations';
import { getPortfolioHubOgHero } from '@/lib/ogHeroCopy';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getHubPageSeo } from '@/lib/seoPagesRegistry';
import { siteUrl as baseUrl } from '@/lib/site';

export function getPortfolioHubSeoFields(lang: Language) {
  return getHubPageSeo('portfolio', lang);
}

/** Portfolio hub metadata; `caseQuery` = light-case modal URL → noindex, canonical without query. */
export function buildPortfolioHubMetadata(lang: Language, caseQuery?: string | null): Metadata {
  const { title, description, keywords } = getPortfolioHubSeoFields(lang);
  const canonicalUrl = `${baseUrl}/${lang}/portfolio`;
  const heroOg = getPortfolioHubOgHero(lang);

  const base = generateSEOMetadata({
    title,
    description,
    keywords,
    url: canonicalUrl,
    lang,
    openGraphTitle: heroOg.title,
    openGraphDescription: heroOg.description,
    ogBackground: '/other/portfolio-hero.jpg',
  });

  if (caseQuery?.trim()) {
    return {
      ...base,
      robots: { index: false, follow: true },
      alternates: {
        ...base.alternates,
        canonical: canonicalUrl,
      },
    };
  }

  return base;
}
