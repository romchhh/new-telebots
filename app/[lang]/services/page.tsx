import ServicesHubPageClient from './ServicesHubPageClient';
import SitePageShell from '@/components/SitePageShell';
import { translations } from '@/components/translations';
import { asSiteLang } from '@/lib/site';

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = asSiteLang(langParam);
  const t = translations[lang];
  return (
    <SitePageShell initialLang={lang} t={t}>
      <ServicesHubPageClient lang={lang} />
    </SitePageShell>
  );
}
