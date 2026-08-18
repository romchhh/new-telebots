import Image from 'next/image';

type FullBleedHeroImageProps = {
  src: string;
  alt: string;
};

/**
 * Мобільний PageSpeed: кадр < в’юпорта, інакше Chrome дає NO_LCP.
 * Десктоп — на всю висоту екрана.
 */
export default function FullBleedHeroImage({ src, alt }: FullBleedHeroImageProps) {
  return (
    <div className="relative z-0 h-[90svh] w-full bg-black md:h-[100svh]">
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
