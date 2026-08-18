import CasePage from '@/components/CasePage';
import StructuredData from '@/components/StructuredData';
import { translations, type Language } from '@/components/translations';
import { cases } from '@/components/cases';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';

export default function CasePageClient({ lang, caseId }: { lang: Language; caseId: string }) {
  const t = translations[lang];
  const currentCaseData = ((cases[lang] || cases.uk) as Record<string, { title?: string }>)[caseId];
  const currentCaseTitle = currentCaseData?.title || caseId;

  return (
    <>
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="article" lang={lang} caseId={caseId} />
      <StructuredData
        type="breadcrumb"
        lang={lang}
        breadcrumbs={[
          { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
          { name: t.nav.portfolio, url: `/${lang}/portfolio` },
          { name: currentCaseTitle, url: `/${lang}/portfolio/${caseId}` },
        ]}
      />
      <main id="main-content">
        <CasePage caseId={caseId} />
      </main>
    </>
  );
}
