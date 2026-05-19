/**
 * Серверний «чистий» <img>: без wrapper next/image для стабільного LCP у Lighthouse mobile.
 * Preload у `app/layout.tsx` має співпадати з цим `src`.
 */
export default function HeroImage({ alt }: { alt: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element -- LCP hero: статичний URL = preload */}
      <img
        src="/other/hero-background.webp"
        alt={alt}
        width={1344}
        height={768}
        fetchPriority="high"
        decoding="sync"
        loading="eager"
        className="absolute inset-0 block h-full w-full object-cover"
      />
    </div>
  );
}
