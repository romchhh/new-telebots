import type { Language } from '@/components/translations';
import { getPortfolioCards } from '@/lib/portfolioCards';
import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';

export type ServicePageCaseCard = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  highlights: string;
  category: 'websites' | 'chatbots';
};

const FEATURED_CASE_IDS: Record<ServiceId, string[]> = {
  design: [
    'emaro-autocare',
    'royal-glow',
    'cosmy',
    'zavadska',
    'dente',
    'chars-kyiv',
    'filo-estate',
    'emvi-digital',
    'royal-academy',
  ],
  websites: [
    'emaro-autocare',
    'flix-market',
    'filo-estate',
    'royal-glow',
    'zavadska',
    'nieznany-piekarz',
    'emvi-digital',
    'toptrendshop',
    'wesauto',
  ],
  chatbots: [
    'tradeground-bot',
    'applum-bot',
    'smart-bodycourse-bot',
    'dr-tolstikova-bot',
    'vevyne-dating-bot',
    'normalnoauto',
    'journey-zavadska',
    'flixmarket',
  ],
};

function toCaseCard(card: ReturnType<typeof getPortfolioCards>[number]): ServicePageCaseCard {
  return {
    id: card.id,
    image: card.image,
    title: card.title,
    subtitle: card.subtitle,
    tags: card.tags,
    highlights: card.highlights,
    category: card.category,
  };
}

export function getServicePageCases(lang: Language, serviceId: ServiceId): ServicePageCaseCard[] {
  const all = getPortfolioCards(lang);
  const featuredIds = FEATURED_CASE_IDS[serviceId];
  const byId = new Map(all.map((c) => [c.id, c]));

  const picked: ServicePageCaseCard[] = [];
  const used = new Set<string>();

  for (const id of featuredIds) {
    const card = byId.get(id);
    if (card) {
      picked.push(toCaseCard(card));
      used.add(id);
    }
  }

  const category = serviceId === 'chatbots' ? 'chatbots' : 'websites';
  for (const card of all) {
    if (used.has(card.id)) continue;
    if (serviceId === 'design') {
      if (card.category !== 'websites') continue;
    } else if (card.category !== category) {
      continue;
    }
    picked.push(toCaseCard(card));
    used.add(card.id);
  }

  return picked;
}
