import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { siteUrl as baseUrl, SITE_LANGUAGES } from '@/lib/site';
import {
  SEO_LANDING_IMAGE,
  SEO_LANDING_SLUGS,
  getSeoLanding,
  isSeoLandingSlug,
} from '@/lib/seoLandings';

export function generateStaticParams() {
  return SITE_LANGUAGES.flatMap((lang) =>
    SEO_LANDING_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  const lang = (SITE_LANGUAGES.includes(langParam as (typeof SITE_LANGUAGES)[number])
    ? langParam
    : 'uk') as Language;

  if (!isSeoLandingSlug(slug)) {
    return { title: 'TeleBots' };
  }

  const page = getSeoLanding(lang, slug);
  if (!page) return { title: 'TeleBots' };

  return generateSEOMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    image: `${baseUrl}${SEO_LANDING_IMAGE[slug]}`,
    url: `${baseUrl}/${lang}/solutions/${slug}`,
    lang,
  });
}

export default function SolutionsSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
