import Image from 'next/image';

type FullBleedHeroImageProps = {
  src: string;
  alt: string;
};

/**
 * Фото в потоці документа, висота < 100svh.
 * Повноекранний fill Chrome викидає з LCP (NO_LCP у PageSpeed).
 */
export default function FullBleedHeroImage({ src, alt }: FullBleedHeroImageProps) {
  return (
    <div className="relative z-0 w-full bg-black" style={{ height: '90svh' }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-top"
      />
    </div>
  );
}
