import Image from 'next/image';

type FullBleedHeroImageProps = {
  src: string;
  alt: string;
};

/**
 * Chrome викидає з LCP зображення, чия площа ≥ площі вьюпорта
 * (`rect_size >= viewport_size` → size 0). На мобільному 100dvh + fill
 * дає рівно це, і PageSpeed падає в NO_LCP. 4px знизу виводять кадр
 * за поріг (з запасом під DPR у Lighthouse); фон обгортки ховає смужку.
 */
export default function FullBleedHeroImage({ src, alt }: FullBleedHeroImageProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        decoding="sync"
        sizes="100vw"
        quality={75}
        className="object-cover"
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
