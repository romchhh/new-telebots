import Image from 'next/image';
import type { ReactNode } from 'react';
import type { ServicePageMedia } from '@/lib/servicePageMedia';
import { SITE_INNER_WIDE, SITE_PX } from '@/lib/siteLayout';
import { RADIUS_SHELL, SERVICE_SECTION_Y, TYPE_DISPLAY_H2 } from '@/lib/siteUi';

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

type ServicePagePhotosStripProps = {
  media: ServicePageMedia;
  title: string;
  lead: string;
  alts: [string, string, string];
};

/** Три кадри після outcomes — атмосфера процесу, не картки послуг. */
export function ServicePagePhotoStrip({ media, title, lead, alts }: ServicePagePhotosStripProps) {
  return (
    <section className={`border-t border-neutral-100 bg-neutral-50/60 ${SERVICE_SECTION_Y} ${SITE_PX}`}>
      <div className={SITE_INNER_WIDE}>
        <div className="mb-6 max-w-3xl md:mb-8">
          <h2 className={`text-neutral-900 ${TYPE_DISPLAY_H2}`} style={display}>
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:text-lg" style={sans}>
            {lead}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3.5 md:gap-4">
          {media.strip.map((src, index) => (
            <div
              key={src}
              className={`relative aspect-[4/3] overflow-hidden ${RADIUS_SHELL} bg-neutral-100 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.3)] ${
                index === 1 ? 'sm:translate-y-2 md:translate-y-3' : ''
              }`}
            >
              <Image
                src={src}
                alt={alts[index] ?? title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ServicePageFeaturePhotoProps = {
  src: string;
  alt: string;
  children: ReactNode;
};

/** Фото + текст у блоці опису послуги. */
export function ServicePageFeaturePhoto({ src, alt, children }: ServicePageFeaturePhotoProps) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
      <div
        className={`relative order-2 aspect-[5/4] overflow-hidden ${RADIUS_SHELL} bg-neutral-100 shadow-[0_20px_48px_-28px_rgba(0,0,0,0.35)] ring-1 ring-neutral-200/70 lg:sticky lg:top-28 lg:order-1`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
          quality={85}
        />
      </div>
      <div className="order-1 min-w-0 lg:order-2">{children}</div>
    </div>
  );
}

type ServicePageWidePhotoProps = {
  src: string;
  alt: string;
};

/** Широкий кадр перед тарифами. */
export function ServicePageWidePhoto({ src, alt }: ServicePageWidePhotoProps) {
  return (
    <section className={`border-t border-neutral-100 bg-white ${SITE_PX} py-8 sm:py-10 md:py-12`}>
      <div className={SITE_INNER_WIDE}>
        <div
          className={`relative aspect-[21/9] min-h-[11rem] overflow-hidden ${RADIUS_SHELL} bg-neutral-100 shadow-[0_20px_48px_-28px_rgba(0,0,0,0.35)] sm:min-h-[13rem] md:aspect-[2.4/1]`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
