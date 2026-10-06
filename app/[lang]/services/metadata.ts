import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { buildServicesHubMetadata } from './servicesHubSeo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  return buildServicesHubMetadata(lang);
}
