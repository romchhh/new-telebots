import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import HeroImage from '@/components/HeroImage';
import HeroSectionOverlay from '@/components/HeroSectionOverlay';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getHubPageSeo } from '@/lib/seoPagesRegistry';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const { title, description, keywords } = getHubPageSeo('home', lang);

  return generateSEOMetadata({
    title,
    description,
    keywords,
    url: `${baseUrl}/${lang}`,
    lang,
  });
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];
  const mainPageFAQs = t.about.faq?.items?.slice(0, 4) || [];

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/other/hero-background.webp"
        fetchPriority="high"
      />
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="localBusiness" lang={lang} />
      <StructuredData type="website" lang={lang} />
      <StructuredData
        type="breadcrumb"
        lang={lang}
        breadcrumbs={[{ name: BREADCRUMB_HOME[lang], url: `/${lang}` }]}
      />
      {mainPageFAQs.length > 0 ? (
        <StructuredData type="faq" lang={lang} faqs={mainPageFAQs} />
      ) : null}
      <HomePageClient
        initialLang={lang}
        t={t}
        hero={
          <section className="relative h-[100svh] max-h-[100svh] overflow-hidden bg-black">
            <HeroImage alt={t.hero.backgroundImageAlt} />
            <HeroSectionOverlay hero={t.hero} orderLabel={t.modal.title} />
          </section>
        }
      />
    </>
  );
}
