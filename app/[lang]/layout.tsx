import { notFound } from 'next/navigation';
import { SITE_LANGUAGES } from '@/lib/site';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SITE_LANGUAGES.includes(lang as (typeof SITE_LANGUAGES)[number])) {
    notFound();
  }
  return <>{children}</>;
}
