import { Metadata } from 'next';
import { generateMetadata as generateCaseMetadata } from './metadata';
import { getFlagshipCaseIds } from '@/lib/portfolioCases';
import { SITE_LANGUAGES } from '@/lib/site';

export function generateStaticParams() {
  return SITE_LANGUAGES.flatMap((lang) =>
    getFlagshipCaseIds(lang).map((caseId) => ({ lang, caseId }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; caseId: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return generateCaseMetadata(resolvedParams);
}

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
