import Image from 'next/image';
import type { ReactNode } from 'react';
import type { ServicePageMedia } from '@/lib/servicePageMedia';
import { SITE_INNER_WIDE, SITE_PX } from '@/lib/siteLayout';
import { RADIUS_SHELL, SERVICE_SECTION_Y } from '@/lib/siteUi';

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
    <section className={`border-t border-neutral-100 bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
      <div className={SITE_INNER_WIDE}>
        <div className="mb-8 max-w-3xl md:mb-10">
          <h2
            className="text-[clamp(1.65rem,3.5vw,2.5rem)] font-black uppercase leading-[1.05] tracking-tight text-neutral-900"
            style={display}
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg" style={sans}>
            {lead}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
          {media.strip.map((src, index) => (
            <div
              key={src}
              className={`relative aspect-[4/3] overflow-hidden ${RADIUS_SHELL} bg-neutral-100 ${
                index === 1 ? 'sm:translate-y-3 md:translate-y-4' : ''
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
    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
      <div className={`relative order-2 aspect-[5/4] overflow-hidden ${RADIUS_SHELL} bg-neutral-100 lg:order-1`}>
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
    <section className={`border-t border-neutral-100 bg-white ${SITE_PX} py-10 sm:py-12 md:py-14`}>
      <div className={SITE_INNER_WIDE}>
        <div className={`relative aspect-[21/9] min-h-[12rem] overflow-hidden ${RADIUS_SHELL} bg-neutral-100 sm:min-h-[14rem] md:aspect-[2.4/1]`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
