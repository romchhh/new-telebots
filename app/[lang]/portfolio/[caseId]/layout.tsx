import { Metadata } from 'next';
import { generateMetadata as generateCaseMetadata } from './metadata';

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
