export const SERVICE_IDS = ['websites', 'chatbots', 'parsers', 'design'] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export const SERVICE_KEY_MAP: Record<ServiceId, 'websitesPage' | 'chatbotsPage' | 'parsersPage' | 'designPage'> = {
  websites: 'websitesPage',
  chatbots: 'chatbotsPage',
  parsers: 'parsersPage',
  design: 'designPage',
};

export const SERVICE_IMAGES: Record<ServiceId, string> = {
  websites: '/services/services-websites.jpg',
  chatbots: '/services/services-chatbots.jpg',
  parsers: '/services/services-parsers.jpg',
  design: '/services/services-design.jpg',
};

export function getServiceKey(serviceId: string): ServiceId | null {
  if (SERVICE_IDS.includes(serviceId as ServiceId)) return serviceId as ServiceId;
  return null;
}

export function getServiceKeyForTranslations(serviceId: string): 'websitesPage' | 'chatbotsPage' | 'parsersPage' | 'designPage' | null {
  const id = getServiceKey(serviceId);
  return id ? SERVICE_KEY_MAP[id] : null;
}

export function hasPricing(_serviceId: ServiceId): boolean {
  return true;
}

export function getPricingKey(serviceId: ServiceId): 'pricingChatbots' | 'pricingWebsites' | 'pricingParsers' | 'pricingDesign' {
  const map: Record<ServiceId, 'pricingChatbots' | 'pricingWebsites' | 'pricingParsers' | 'pricingDesign'> = {
    chatbots: 'pricingChatbots',
    websites: 'pricingWebsites',
    parsers: 'pricingParsers',
    design: 'pricingDesign',
  };
  return map[serviceId];
}
