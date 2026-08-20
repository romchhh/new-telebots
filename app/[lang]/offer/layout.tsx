import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { offerPageCopy } from '@/lib/offerPageCopy';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const p = offerPageCopy[lang];

  return {
    ...generateSEOMetadata({
      title: p.metaTitle,
      description: p.metaDescription,
      keywords: p.metaKeywords,
      image: `${baseUrl}/offer/astronaut11.png`,
      url: `${baseUrl}/${lang}/offer`,
      lang,
    }),
    robots: { index: true, follow: true },
  };
}

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
