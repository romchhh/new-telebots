import { notFound } from 'next/navigation';
import SiteHtmlShell from '@/components/SiteHtmlShell';
import { SITE_LANGUAGES } from '@/lib/site';

/** Усі мовні сторінки — SSG HTML на білді, без runtime RSC. */
export const dynamic = 'force-static';
export const revalidate = false;

export function generateStaticParams() {
  return SITE_LANGUAGES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SITE_LANGUAGES.includes(lang as (typeof SITE_LANGUAGES)[number])) {
    notFound();
  }
  return <SiteHtmlShell lang={lang}>{children}</SiteHtmlShell>;
}
