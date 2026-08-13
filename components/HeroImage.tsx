import FullBleedHeroImage from '@/components/FullBleedHeroImage';

export default function HeroImage({ alt }: { alt: string }) {
  return <FullBleedHeroImage src="/other/hero-background.webp" alt={alt} imageHeight="92svh" />;
}
