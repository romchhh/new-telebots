import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { getPricingOgHero } from '@/lib/ogHeroCopy';
import { PRICING_HERO_IMAGE } from '@/lib/pricingPageMedia';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { pricingPageCopy } from '@/lib/pricingPageCopy';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const p = pricingPageCopy[lang];
  const heroOg = getPricingOgHero(lang);

  return {
    ...generateSEOMetadata({
      title: p.metaTitle,
      description: p.metaDescription,
      keywords: p.metaKeywords,
      url: `${baseUrl}/${lang}/pricing`,
      lang,
      openGraphTitle: heroOg.title,
      openGraphDescription: heroOg.description,
      ogBackground: PRICING_HERO_IMAGE,
    }),
    robots: { index: true, follow: true },
  };
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
