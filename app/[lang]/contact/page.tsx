import ContactPageClient from './ContactPageClient';
import SitePageShell from '@/components/SitePageShell';
import { translations } from '@/components/translations';
import { asSiteLang } from '@/lib/site';

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = asSiteLang(langParam);
  const t = translations[lang];
  return (
    <SitePageShell initialLang={lang} t={t} solidHeader>
      <ContactPageClient lang={lang} />
    </SitePageShell>
  );
}
