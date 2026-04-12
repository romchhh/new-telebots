import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { pricingPageCopy } from '@/lib/pricingPageCopy';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const p = pricingPageCopy[lang];

  return {
    ...generateSEOMetadata({
      title: p.metaTitle,
      description: p.metaDescription,
      keywords: p.metaKeywords,
      url: `${baseUrl}/${lang}/pricing`,
      lang,
    }),
    robots: { index: true, follow: true },
  };
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
