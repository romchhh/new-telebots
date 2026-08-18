import LegalDocumentPage from '@/components/LegalDocumentPage';
import SitePageShell from '@/components/SitePageShell';
import { translations } from '@/components/translations';
import { asSiteLang } from '@/lib/site';

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = asSiteLang(langParam);
  return (
    <SitePageShell initialLang={lang} t={translations[lang]} solidHeader>
      <LegalDocumentPage doc="privacy" lang={lang} />
    </SitePageShell>
  );
}
