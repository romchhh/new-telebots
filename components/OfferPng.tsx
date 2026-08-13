'use client';

import Image from 'next/image';

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
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`block h-auto max-w-full ${className}`}
    />
  );
}
