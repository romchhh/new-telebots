import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';
import { SERVICE_IMAGES } from '@/app/[lang]/services/[serviceId]/metadata';

export type ServicePageMedia = {
  /** Велике фото поруч із текстом «що входить» */
  feature: string;
  /** Стрічка з 3 кадрів після outcomes */
  strip: [string, string, string];
  /** Широкий кадр перед тарифами */
  wide: string;
};

export const SERVICE_PAGE_MEDIA: Record<ServiceId, ServicePageMedia> = {
  websites: {
    feature: '/other/workspace-laptop-rocks.jpg',
    strip: [
      '/services/services-websites.jpg',
      '/other/about-hero-macbook.jpg',
      '/services/services-mobile-showcase.png',
    ],
    wide: '/other/workspace-code-desk.jpg',
  },
  chatbots: {
    feature: '/other/workspace-laptop-phone.jpg',
    strip: [
      '/services/services-chatbots.jpg',
      '/other/archive-iphone.jpg',
      '/services/services-mobile-showcase.png',
    ],
    wide: '/other/workspace-laptop-phone.jpg',
  },
  design: {
    feature: '/other/workspace-code-desk.jpg',
    strip: [
      '/services/services-design.jpg',
      '/other/about-hero-macbook.jpg',
      '/other/portfolio-hero.jpg',
    ],
    wide: '/other/about-hero.png',
  },
  apps: {
    feature: '/other/workspace-laptop-phone.jpg',
    strip: [
      '/services/services-apps.jpg',
      '/other/archive-iphone.jpg',
      '/services/services-mobile-showcase.png',
    ],
    wide: '/other/workspace-laptop-phone.jpg',
  },
};

export function getServicePageMedia(serviceId: ServiceId): ServicePageMedia {
  return SERVICE_PAGE_MEDIA[serviceId] ?? {
    feature: SERVICE_IMAGES[serviceId],
    strip: [SERVICE_IMAGES[serviceId], SERVICE_IMAGES[serviceId], SERVICE_IMAGES[serviceId]],
    wide: SERVICE_IMAGES[serviceId],
  };
}
