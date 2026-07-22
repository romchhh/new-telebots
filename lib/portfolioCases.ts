import { cases } from '@/components/cases';
import type { Language } from '@/components/translations';
import {
  FLAGSHIP_CASE_IDS,
  LIGHT_CASE_IDS,
  getCaseHref,
  getCaseTier,
  isFlagshipCase,
  isLightCase,
  type FlagshipCaseId,
  type PortfolioCaseTier,
} from '@/lib/portfolioCaseTiers';

export {
  FLAGSHIP_CASE_IDS,
  LIGHT_CASE_IDS,
  getCaseHref,
  getCaseTier,
  isFlagshipCase,
  isLightCase,
};
export type { FlagshipCaseId, PortfolioCaseTier };

export type PortfolioCaseData = {
  title: string;
  subtitle?: string;
  description?: string;
  mainImage?: string;
  category?: string;
  portfolioCategory?: 'chatbots' | 'websites' | string;
  duration?: string;
  client?: string;
  liveUrl?: string;
  features?: string[];
  results?: Array<{ value: string; label: string }>;
  gallery?: string[];
};

export function getCasesData(lang: Language): Record<string, PortfolioCaseData> {
  return (cases[lang] || cases.uk) as Record<string, PortfolioCaseData>;
}

export function getCaseData(lang: Language, caseId: string): PortfolioCaseData | undefined {
  return getCasesData(lang)[caseId];
}

/** Flagships first, then light — for carousels / curated strips. */
export function getOrderedCaseIds(lang: Language): string[] {
  const ids = Object.keys(getCasesData(lang));
  const flagship = ids.filter(isFlagshipCase);
  const light = ids.filter((id) => !isFlagshipCase(id));
  return [...flagship, ...light];
}

export function getFlagshipCaseIds(lang: Language): string[] {
  return Object.keys(getCasesData(lang)).filter(isFlagshipCase);
}

export function getCaseCategory(
  caseId: string,
  caseData?: PortfolioCaseData
): 'chatbots' | 'websites' {
  if (caseData?.portfolioCategory === 'chatbots' || caseData?.portfolioCategory === 'websites') {
    return caseData.portfolioCategory;
  }
  const title = `${caseData?.title || ''} ${caseData?.category || ''}`.toLowerCase();
  if (title.includes('bot') || title.includes('telegram') || title.includes('чат')) {
    return 'chatbots';
  }
  return 'websites';
}
