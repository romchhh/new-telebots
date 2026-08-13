import Image from 'next/image';

type FullBleedHeroImageProps = {
  src: string;
  alt: string;
};

/** LCP-герой: next/image + priority. Висота < 100% — Chrome не вважає кадр фоном (NO_LCP). */
export default function FullBleedHeroImage({ src, alt }: FullBleedHeroImageProps) {
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
          height: 'calc(100% - 4px)',
        }}
      />
    </div>
  );
}
