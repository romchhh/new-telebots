import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AdsSiteLanding from '@/components/ads/AdsSiteLanding';
import { ADS_SITE_NICHES, getAdsSiteLanding } from '@/lib/adsSiteLanding';

export function generateStaticParams() {
  return [{ slug: [] as string[] }, ...ADS_SITE_NICHES.map((niche) => ({ slug: [niche] }))];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const copy = getAdsSiteLanding(slug?.[0]);
  if (!copy) return { title: 'TeleBots' };
  return {
    title: { absolute: `${copy.h1} | TeleBots` },
    description: copy.lead,
    robots: { index: false, follow: false },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const copy = getAdsSiteLanding(slug?.[0]);
  if (!copy) notFound();

  return <AdsSiteLanding copy={copy} />;
}
