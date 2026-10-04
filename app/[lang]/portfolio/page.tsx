import PortfolioPageClient from './PortfolioPageClient';
import SitePageShell from '@/components/SitePageShell';
import { translations } from '@/components/translations';
import { asSiteLang } from '@/lib/site';
import { buildPortfolioHubMetadata } from '@/lib/portfolioPageMetadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<import('next').Metadata> {
  const { lang: langParam } = await params;
  const lang = asSiteLang(langParam);
  // Canonical hub meta (SSG). ?case= → noindex via middleware X-Robots-Tag.
  return buildPortfolioHubMetadata(lang);
}

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = asSiteLang(langParam);
  const t = translations[lang];
  return (
    <SitePageShell initialLang={lang} t={t}>
      <PortfolioPageClient lang={lang} />
    </SitePageShell>
  );
}
