import Image from 'next/image';

/** Серверний компонент: `<img>` потрапляє в HTML для LCP (не лише після гідрації). */
export default function HeroImage({ alt }: { alt: string }) {
  return (
    <>
      {/* Mobile - використовуємо native img з WebP для гарантованого LCP */}
      <div className="absolute inset-0 z-0 md:hidden">
        <picture>
          <source
            srcSet="/other/hero-background.webp"
            type="image/webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/other/hero-background.jpeg"
            type="image/jpeg"
            media="(max-width: 768px)"
          />
          <img
            src="/other/hero-background.jpeg"
            alt={alt}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={768}
            height={1024}
            className="w-full h-full object-cover"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </picture>
      </div>
      
      {/* Desktop - використовуємо Next Image для оптимізації */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/other/hero-background.jpeg"
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
    </>
  );
}
