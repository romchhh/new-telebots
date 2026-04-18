import type { Language } from '@/components/translations';
import { EN_SERVICE_LONGFORM } from './servicePagesSeo/bundlesEn';
import { PL_SERVICE_LONGFORM } from './servicePagesSeo/bundlesPl';
import { RU_SERVICE_LONGFORM } from './servicePagesSeo/bundlesRu';
import { UK_SERVICE_LONGFORM } from './servicePagesSeo/bundlesUk';
import type { ServiceLongFormBundle, ServiceSeoSlug } from './servicePagesSeo/types';

export type { ServiceLongFormBundle, ServiceRichBlock, ServiceSeoSlug } from './servicePagesSeo/types';

const BY_LANG: Record<Language, Record<ServiceSeoSlug, ServiceLongFormBundle>> = {
  uk: UK_SERVICE_LONGFORM,
  en: EN_SERVICE_LONGFORM,
  pl: PL_SERVICE_LONGFORM,
  ru: RU_SERVICE_LONGFORM,
};

export function getServiceSeoLongForm(lang: Language, serviceId: string): ServiceLongFormBundle | null {
  if (serviceId !== 'chatbots' && serviceId !== 'websites' && serviceId !== 'design') return null;
  return BY_LANG[lang][serviceId as ServiceSeoSlug];
}
