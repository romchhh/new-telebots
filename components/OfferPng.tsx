'use client';

type OfferPngProps = {
  src: string;
  alt?: string;
  /** Натуральні розміри файлу — для aspect ratio та SEO */
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/** PNG для offer: розмір через Tailwind-класи (w-[...]), не фіксований px */
export default function OfferPng({
  src,
  alt = '',
  width,
  height,
  className = '',
  priority = false,
}: OfferPngProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={`block h-auto max-w-full ${className}`}
    />
  );
}
