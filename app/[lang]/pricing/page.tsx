import PricingPageClient from './PricingPageClient';
import SitePageShell from '@/components/SitePageShell';
import { translations } from '@/components/translations';
import { pricingPageCopy } from '@/lib/pricingPageCopy';
import { asSiteLang } from '@/lib/site';

export default async function PricingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = asSiteLang(langParam);
  const t = translations[lang];
  return (
    <SitePageShell initialLang={lang} t={t} solidHeader modalServiceName={pricingPageCopy[lang].metaTitle}>
      <PricingPageClient lang={lang} />
    </SitePageShell>
  );
}
