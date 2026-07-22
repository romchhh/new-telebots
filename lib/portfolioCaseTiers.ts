/**
 * Edge-safe portfolio tier registry (no heavy case content imports).
 * Used by middleware for 308 redirects of light case URLs.
 */

export const FLAGSHIP_CASE_IDS = [
  'tradeground-bot',
  '13vplus',
  'dr-tolstikova-bot',
  'nieznany-piekarz',
  'nutritionist-bot',
  'cats-fresh',
  'applum-bot',
  'webinar-bot',
  'flixmarket',
  'alexandraaleksiuk',
  'offer-dpuchkov',
  'vsk-technology',
  'v12-auto',
  'tripvibe',
  'tron-energy-bot',
  'chars-kyiv',
  'style-chat-vakhula',
  'landscaper-academy',
  'smart-bodycourse-bot',
] as const;

export type FlagshipCaseId = (typeof FLAGSHIP_CASE_IDS)[number];

export const LIGHT_CASE_IDS = [
  'easyplay',
  'cosmy',
  'normalnoauto',
  'kvartyrant',
  'newlineschool',
  'butenko-fit',
  'snagging-services-uae',
  'space-traffic',
  'ukr-bus',
  'electromotors',
  'carsrent',
] as const;

const FLAGSHIP_SET = new Set<string>(FLAGSHIP_CASE_IDS);
const LIGHT_SET = new Set<string>(LIGHT_CASE_IDS);

export type PortfolioCaseTier = 'flagship' | 'light';

export function isFlagshipCase(caseId: string): boolean {
  return FLAGSHIP_SET.has(caseId);
}

export function isLightCase(caseId: string): boolean {
  return LIGHT_SET.has(caseId);
}

export function getCaseTier(caseId: string): PortfolioCaseTier {
  return isFlagshipCase(caseId) ? 'flagship' : 'light';
}

/** Path for links: flagship → detail page; light → hub with query for modal. */
export function getCaseHref(lang: string, caseId: string): string {
  if (isFlagshipCase(caseId)) {
    return `/${lang}/portfolio/${caseId}`;
  }
  return `/${lang}/portfolio?case=${encodeURIComponent(caseId)}`;
}
