import Image from 'next/image';

/**
 * Єдиний LCP-кандидат для всіх ширин: один `<Image priority>`, один URL у HTML.
 * Раніше: `<picture>` + окремий десктопний Image → на мобільній емуляції Lighthouse
 * іноді не фіксує LCP (NO_LCP). `unoptimized` збігає URL з preload у root layout.
 */
export default function HeroImage({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/other/hero-background.webp"
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={85}
        unoptimized
        className="object-cover"
      />
    </div>
  );
}
