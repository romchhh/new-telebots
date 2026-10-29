import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { getPartnershipOgHero } from '@/lib/ogHeroCopy';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { partnershipPageCopy } from '@/lib/partnershipPageCopy';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const p = partnershipPageCopy[lang];
  const heroOg = getPartnershipOgHero(lang);

  return {
    ...generateSEOMetadata({
      title: p.metaTitle,
      description: p.metaDescription,
      keywords: p.metaKeywords,
      url: `${baseUrl}/${lang}/partnership`,
      lang,
      openGraphTitle: heroOg.title,
      openGraphDescription: heroOg.description,
    }),
    robots: { index: true, follow: true },
  };
}

export default function PartnershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
