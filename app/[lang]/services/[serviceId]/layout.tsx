import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { buildServiceDetailMetadata, isServiceId } from './serviceSeo';
import { SITE_LANGUAGES } from '@/lib/site';
import { SERVICE_IDS } from './metadata';

export function generateStaticParams() {
  return SITE_LANGUAGES.flatMap((lang) =>
    SERVICE_IDS.map((serviceId) => ({ lang, serviceId }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; serviceId: string }>;
}): Promise<Metadata> {
  const { lang: langParam, serviceId } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;

  if (!isServiceId(serviceId)) {
    return { title: { absolute: 'TeleBots' } };
  }

  return buildServiceDetailMetadata(lang, serviceId);
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
