'use client';

import Image from 'next/image';
import { useScrollAnimation } from './useScrollAnimation';
import { Language } from './translations';
import OrderCtaPill from '@/components/OrderCtaPill';
import { SITE_PX } from '@/lib/siteLayout';
import { CARD_MEDIA } from '@/lib/siteUi';

const SERVICE_SLUG: Record<'websitesPage' | 'chatbotsPage' | 'designPage', string> = {
  websitesPage: 'websites',
  chatbotsPage: 'chatbots',
  designPage: 'design',
};

interface ServiceItemProps {
  serviceKey: 'websitesPage' | 'chatbotsPage' | 'designPage';
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

  return (
    <section className="bg-white">
      <div
        className={`grid lg:grid-cols-2 lg:items-start ${imagePosition === 'left' ? 'lg:grid-flow-dense' : ''}`}
      >
        <div
          className={`pt-12 pb-12 lg:pb-24 lg:pt-0 flex flex-col justify-start ${SITE_PX} ${imagePosition === 'left' ? 'lg:col-start-2' : ''} ${animationClass} ${isContentVisible ? 'animate' : ''}`}
          ref={contentRef}
        >
          <h2
            className="mb-6 text-[clamp(1.65rem,3.5vw,2.75rem)] font-black uppercase leading-[1.05] tracking-tight text-neutral-900 md:mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {service.title}
          </h2>
          <div className="mb-10 space-y-4 text-lg font-normal leading-relaxed text-gray-600 md:space-y-5 md:text-xl">
            <p>{service.subtitle}</p>
            <p>{service.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
            <OrderCtaPill
              size="md"
              variant="brand"
              label={service.button}
              onClick={onOrderClick ? () => onOrderClick(service.title) : undefined}
              className="w-full sm:flex-1 sm:min-w-0"
            />
            <OrderCtaPill
              size="md"
              variant="solid"
              elevated
              href={`/${lang}/services/${slug}`}
              label={t.services.serviceLearnMore}
              className="w-full sm:flex-1 sm:min-w-0"
            />
          </div>
        </div>

        <div
          className={`${SITE_PX} pb-12 lg:pb-16 lg:pt-8 ${imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1 lg:pr-8 xl:pr-12' : 'lg:pl-8 xl:pl-12'} ${imagePosition === 'left' ? 'scroll-animate-left' : 'scroll-animate-right'} ${isImageVisible ? 'animate' : ''}`}
          ref={imageRef}
        >
          <div className={`relative aspect-[4/3] ${CARD_MEDIA} lg:aspect-auto lg:h-[min(560px,72vh)]`}>
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

