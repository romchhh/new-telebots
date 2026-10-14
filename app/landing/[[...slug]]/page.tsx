import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AdsSiteLanding from '@/components/ads/AdsSiteLanding';
import { ADS_SITE_NICHES, getAdsSiteLanding } from '@/lib/adsSiteLanding';
import { buildOgImageUrl, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from '@/lib/ogImage';

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
  const ogImage = buildOgImageUrl({
    title: copy.h1,
    description: copy.lead,
    lang: 'uk',
  });
  return {
    title: { absolute: `${copy.h1} | TeleBots` },
    description: copy.lead,
    robots: { index: false, follow: false },
    openGraph: {
      title: `${copy.h1} | TeleBots`,
      description: copy.lead,
      images: [{ url: ogImage, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: copy.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${copy.h1} | TeleBots`,
      description: copy.lead,
      images: [ogImage],
    },
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
