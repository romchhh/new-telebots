import Image from 'next/image';

type FullBleedHeroImageProps = {
  src: string;
  alt: string;
};

/** LCP-герой: прямий .webp без _next/image — файл 19KB, оптимізатор лише додає RTT. */
export default function FullBleedHeroImage({ src, alt }: FullBleedHeroImageProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        unoptimized
        sizes="100vw"
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
