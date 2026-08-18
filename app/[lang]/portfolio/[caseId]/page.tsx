import { notFound, redirect } from 'next/navigation';
import CasePageClient from './CasePageClient';
import SitePageShell from '@/components/SitePageShell';
import { cases } from '@/components/cases';
import { translations } from '@/components/translations';
import { getCaseHref, isFlagshipCase, isLightCase } from '@/lib/portfolioCases';
import { asSiteLang } from '@/lib/site';

export default async function CaseRoutePage({
  params,
}: {
  params: Promise<{ lang: string; caseId: string }>;
}) {
  const { lang: langParam, caseId } = await params;
  const lang = asSiteLang(langParam);
  const currentCaseData = ((cases[lang] || cases.uk) as Record<string, { title?: string }>)[caseId];

  if (!currentCaseData) {
    if (isFlagshipCase(caseId) || isLightCase(caseId)) {
      redirect(`/${lang}/portfolio`);
    }
    notFound();
  }

  if (isLightCase(caseId) || !isFlagshipCase(caseId)) {
    redirect(getCaseHref(lang, caseId));
  }

  const t = translations[lang];
  return (
    <SitePageShell initialLang={lang} t={t} modalServiceName={t.modal.title}>
      <CasePageClient lang={lang} caseId={caseId} />
    </SitePageShell>
  );
}
