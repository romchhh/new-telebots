import Image from 'next/image';

/** Серверний компонент: `<img>` потрапляє в HTML для LCP (не лише після гідрації). */
export default function HeroImage({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0">
      <Image
        src="/other/hero-background.jpeg"
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={75}
        className="object-cover"
      />
    </div>
  );
}
