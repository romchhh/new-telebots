/**
 * Edge-safe portfolio tier registry (no heavy case content imports).
 * Used by middleware for 308 redirects of light case URLs.
 */

/** Активні кейси з картками на хабі — окремі URL /portfolio/[slug]. */
export const LIVE_CASE_IDS = [
  'tradeground-bot',
  '13vplus',
  'dr-tolstikova-bot',
  'nieznany-piekarz',
  'applum-bot',
  'flixmarket',
  'chars-kyiv',
  'smart-bodycourse-bot',
  'cosmy',
  'normalnoauto',
  'newlineschool',
  'butenko-fit',
  'wesauto',
  'carbit',
  'movna-test',
  'wayofprocessing',
  '13pm',
  'kls',
  'emvi-digital',
  'litun-edu',
  'zavadska',
  'dente',
  'toptrendshop',
  'royal-academy',
  'kreona',
  'journey-zavadska',
  'vevyne-dating-bot',
] as const;

/**
 * SEO-резерв: старі проіндексовані URL без контенту (308 → хаб).
 * Тримаємо окремо від LIVE_CASE_IDS, щоб middleware не тягнув дані кейсів.
 */
export const RESERVED_CASE_IDS = [
  'nutritionist-bot',
  'cats-fresh',
  'webinar-bot',
  'alexandraaleksiuk',
  'offer-dpuchkov',
  'vsk-technology',
  'v12-auto',
  'tripvibe',
  'tron-energy-bot',
  'style-chat-vakhula',
  'landscaper-academy',
] as const;

export const FLAGSHIP_CASE_IDS = [...LIVE_CASE_IDS, ...RESERVED_CASE_IDS] as const;

export type FlagshipCaseId = (typeof FLAGSHIP_CASE_IDS)[number];

/** Light SEO-слаги без окремих сторінок (308 → /portfolio?case=). */
export const LIGHT_CASE_IDS = [
  'easyplay',
  'kvartyrant',
  'snagging-services-uae',
  'space-traffic',
  'ukr-bus',
  'electromotors',
  'carsrent',
] as const;

const FLAGSHIP_SET = new Set<string>(FLAGSHIP_CASE_IDS);
const LIGHT_SET = new Set<string>(LIGHT_CASE_IDS);
const RESERVED_SET = new Set<string>(RESERVED_CASE_IDS);

export type PortfolioCaseTier = 'flagship' | 'light';

export function isFlagshipCase(caseId: string): boolean {
  return FLAGSHIP_SET.has(caseId);
}

export function isLightCase(caseId: string): boolean {
  return LIGHT_SET.has(caseId);
}

/** Слаг зарезервовано під SEO, але сторінки з контентом ще немає. */
export function isReservedCaseSlug(caseId: string): boolean {
  return RESERVED_SET.has(caseId);
}

/** Усі зарезервовані SEO-слаги (flagship + light). */
export function isKnownCaseSlug(caseId: string): boolean {
  return FLAGSHIP_SET.has(caseId) || LIGHT_SET.has(caseId);
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
