'use client';

import Image from 'next/image';
import { useScrollAnimation } from './useScrollAnimation';
import { Language } from './translations';
import OrderCtaPill from '@/components/OrderCtaPill';
import { SITE_PX } from '@/lib/siteLayout';
import { CARD_MEDIA } from '@/lib/siteUi';

const SERVICE_SLUG: Record<'websitesPage' | 'chatbotsPage' | 'designPage' | 'appsPage', string> = {
  websitesPage: 'websites',
  chatbotsPage: 'chatbots',
  designPage: 'design',
  appsPage: 'apps',
};

interface ServiceItemProps {
  serviceKey: 'websitesPage' | 'chatbotsPage' | 'designPage' | 'appsPage';
  image: string;
  imagePosition: 'left' | 'right';
  lang: Language;
  t: typeof import('./translations').translations.uk;
  onOrderClick?: (serviceName: string) => void;
}

export default function ServiceItem({ serviceKey, image, imagePosition, lang, t, onOrderClick }: ServiceItemProps) {
  const service = t.services[serviceKey];
  const slug = SERVICE_SLUG[serviceKey];
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [imageRef, isImageVisible] = useScrollAnimation();
  const animationClass = imagePosition === 'left' ? 'scroll-animate-right' : 'scroll-animate-left';

  const textCol = imagePosition === 'left' ? 'lg:col-start-2' : '';
  const imageCol = imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : '';

  return (
    <section className="bg-white">
      <div
        className={`grid items-start gap-8 py-10 lg:grid-cols-2 lg:gap-10 lg:py-12 xl:gap-14 ${SITE_PX} ${
          imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
        }`}
      >
        <div
          className={`flex min-w-0 flex-col ${textCol} ${animationClass} ${isContentVisible ? 'animate' : ''}`}
          ref={contentRef}
        >
          <h2
            className="mb-5 text-[clamp(1.65rem,3.5vw,2.75rem)] font-black uppercase leading-[1.05] tracking-tight text-neutral-900 md:mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {service.title}
          </h2>
          <div className="mb-8 space-y-3 text-lg font-normal leading-relaxed text-gray-600 md:space-y-4 md:text-xl">
            <p>{service.subtitle}</p>
            <p>{service.description}</p>
          </div>

          <div className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
            <OrderCtaPill
              size="md"
              variant="brand"
              label={service.button}
              onClick={onOrderClick ? () => onOrderClick(service.title) : undefined}
              className="w-full sm:min-w-0 sm:flex-1"
            />
            <OrderCtaPill
              size="md"
              variant="solid"
              elevated
              href={`/${lang}/services/${slug}`}
              label={t.services.serviceLearnMore}
              className="w-full sm:min-w-0 sm:flex-1"
            />
          </div>
        </div>

        <div
          className={`min-w-0 ${imageCol} ${imagePosition === 'left' ? 'scroll-animate-left' : 'scroll-animate-right'} ${isImageVisible ? 'animate' : ''}`}
          ref={imageRef}
        >
          <div className={`relative aspect-[4/3] w-full ${CARD_MEDIA} ring-1 ring-neutral-200/70`}>
            <Image
              src={image}
              alt={`${service.title} - ${service.subtitle} | TeleBots`}
              fill
              className="object-cover"
              loading="lazy"
              quality={85}
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

