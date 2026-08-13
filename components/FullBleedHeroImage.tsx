import Image from 'next/image';

type FullBleedHeroImageProps = {
  src: string;
  alt: string;
  /**
   * Висота кадра. На головній має бути < 100svh: Chrome обнуляє LCP,
   * якщо площа зображення ≥ площі вьюпорта (NO_LCP у PageSpeed).
   */
  imageHeight?: string;
};

export default function FullBleedHeroImage({
  src,
  alt,
  imageHeight = 'calc(100% - 4px)',
}: FullBleedHeroImageProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={75}
        className="object-cover object-top"
        style={{
          top: 0,
          right: 0,
          bottom: 'auto',
          left: 0,
          width: '100%',
          height: imageHeight,
        }}
      />
    </div>
  );
}
