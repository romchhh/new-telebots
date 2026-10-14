import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { getContactOgHero } from '@/lib/ogHeroCopy';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getHubPageSeo } from '@/lib/seoPagesRegistry';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const { title, description, keywords } = getHubPageSeo('contact', lang);
  const heroOg = getContactOgHero(lang);

  return {
    ...generateSEOMetadata({
      title,
      description,
      keywords,
      url: `${baseUrl}/${lang}/contact`,
      lang,
      openGraphTitle: heroOg.title,
      openGraphDescription: heroOg.description,
      ogBackground: '/other/og-hero.jpg',
    }),
  };
}

