import Image from 'next/image';

type FullBleedHeroImageProps = {
  src: string;
  alt: string;
};

/** LCP-герой: прямий .webp. Висота контейнера < 100% — Chrome не вважає кадр фоном (NO_LCP). */
export default function FullBleedHeroImage({ src, alt }: FullBleedHeroImageProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <div className="absolute inset-x-0 top-0 h-[calc(100%-4px)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
