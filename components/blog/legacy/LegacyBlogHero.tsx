'use client';

import Image from 'next/image';
import { getLegacyHeroImage } from '@/lib/blog/legacy-meta';

/**
 * Hero legacy-статей. Бокс фіксований (h-72), тож зсуву макета немає й без
 * next/image — виграш тут у srcset і avif/webp замість одного файлу на 1200px.
 */
export default function LegacyBlogHero({ legacyId, alt }: { legacyId: number; alt: string }) {
  return (
    <div className="relative mb-6 h-72 w-full overflow-hidden rounded-lg shadow-md">
      <Image
        src={getLegacyHeroImage(legacyId)}
        alt={alt}
        fill
        priority
        sizes="(max-width: 896px) 100vw, 896px"
        className="object-cover"
      />
    </div>
  );
}
