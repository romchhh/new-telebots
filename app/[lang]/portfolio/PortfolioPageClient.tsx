import Portfolio from '@/components/Portfolio';
import StructuredData from '@/components/StructuredData';
import { translations, type Language } from '@/components/translations';
import { getCaseHref, getCasesData, getFlagshipCaseIds } from '@/lib/portfolioCases';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';

export default function PortfolioPageClient({ lang }: { lang: Language }) {
  const t = translations[lang];
  const casesData = getCasesData(lang);
  const portfolioItems = getFlagshipCaseIds(lang).map((caseId) => {
    const caseData = casesData[caseId];
    return {
      name: caseData?.title || 'Project',
      url: getCaseHref(lang, caseId),
      description: caseData?.subtitle || '',
    };
  });

  return (
    <>
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="localBusiness" lang={lang} />
      <StructuredData
        type="breadcrumb"
        lang={lang}
        breadcrumbs={[
          { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
          { name: t.nav.portfolio, url: `/${lang}/portfolio` },
        ]}
      />
      {portfolioItems.length > 0 ? (
        <StructuredData type="itemList" lang={lang} items={portfolioItems} />
      ) : null}
      <main id="main-content">
        <Portfolio />
      </main>
    </>
  );
}
