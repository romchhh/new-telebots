export const SERVICE_IDS = ['websites', 'chatbots', 'design'] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export const SERVICE_KEY_MAP: Record<ServiceId, 'websitesPage' | 'chatbotsPage' | 'designPage'> = {
  websites: 'websitesPage',
  chatbots: 'chatbotsPage',
  design: 'designPage',
};

export const SERVICE_IMAGES: Record<ServiceId, string> = {
  websites: '/services/services-websites.jpg',
  chatbots: '/services/services-chatbots.jpg',
  design: '/services/services-design.jpg',
};

export function getServiceKey(serviceId: string): ServiceId | null {
  if (SERVICE_IDS.includes(serviceId as ServiceId)) return serviceId as ServiceId;
  return null;
}

export function getServiceKeyForTranslations(serviceId: string): 'websitesPage' | 'chatbotsPage' | 'designPage' | null {
  const id = getServiceKey(serviceId);
  return id ? SERVICE_KEY_MAP[id] : null;
}

export function hasPricing(_serviceId: ServiceId): boolean {
  return true;
}

export function getPricingKey(serviceId: ServiceId): 'pricingChatbots' | 'pricingWebsites' | 'pricingDesign' {
  const map: Record<ServiceId, 'pricingChatbots' | 'pricingWebsites' | 'pricingDesign'> = {
    chatbots: 'pricingChatbots',
    websites: 'pricingWebsites',
    design: 'pricingDesign',
  };
  return map[serviceId];
}
