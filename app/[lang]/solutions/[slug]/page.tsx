import { notFound } from 'next/navigation';
import SolutionPageClient from './SolutionPageClient';
import SitePageShell from '@/components/SitePageShell';
import { translations } from '@/components/translations';
import { asSiteLang } from '@/lib/site';
import { getSeoLanding, isSeoLandingSlug } from '@/lib/seoLandings';

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: langParam, slug } = await params;
  if (!isSeoLandingSlug(slug)) notFound();
  const lang = asSiteLang(langParam);
  const page = getSeoLanding(lang, slug);
  const t = translations[lang];
  return (
    <SitePageShell initialLang={lang} t={t} solidHeader modalServiceName={page?.h1}>
      <SolutionPageClient lang={lang} slug={slug} />
    </SitePageShell>
  );
}
