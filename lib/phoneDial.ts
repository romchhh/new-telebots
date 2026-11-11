import type { Language } from '@/components/translations';

export const DIAL_CODES = ['+380', '+48', '+1', '+44', '+49'] as const;
export type DialCode = (typeof DIAL_CODES)[number];

export function defaultDialCode(lang: Language): DialCode {
  return lang === 'pl' ? '+48' : '+380';
}

/** Preferred code first for the current locale. */
export function dialCodesForLang(lang: Language): readonly DialCode[] {
  const preferred = defaultDialCode(lang);
  return [preferred, ...DIAL_CODES.filter((code) => code !== preferred)];
}
