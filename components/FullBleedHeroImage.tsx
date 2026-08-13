import Image from 'next/image';

type FullBleedHeroImageProps = {
  src: string;
  alt: string;
};

/**
 * LCP-герой як на сторінках послуг: next/image + fill + priority.
 * Без форсування 100dvh на самому <img> — інакше Chrome вважає кадр фоном
 * і PageSpeed на мобільному падає в NO_LCP.
 */
export default function FullBleedHeroImage({ src, alt }: FullBleedHeroImageProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={src}
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
