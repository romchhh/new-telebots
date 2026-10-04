import { Metadata } from 'next';
import { Language } from '@/components/translations';
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
  const { title, description, keywords } = getHubPageSeo('services', lang);

  return {
    ...generateSEOMetadata({
      title,
      description,
      keywords,
      image: '/services/services-hero_new.jpg',
      url: `${baseUrl}/${lang}/services`,
      lang,
    }),
  };
}

