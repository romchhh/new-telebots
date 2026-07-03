import {
  DEFAULT_SITE_LANGUAGE,
  SITE_LANGUAGES,
  type SiteLanguage,
} from '@/lib/site';

/** Cookie з мовою, яку користувач обрав вручну (пріоритет над Accept-Language) */
export const LOCALE_COOKIE_NAME = 'telebots_lang';

/** 1 рік */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isSiteLanguage(value: string | null | undefined): value is SiteLanguage {
  return Boolean(value && SITE_LANGUAGES.includes(value as SiteLanguage));
}

/** Визначає мову з заголовка Accept-Language браузера */
export function matchBrowserLanguage(acceptLanguage: string | null | undefined): SiteLanguage {
  if (!acceptLanguage) return DEFAULT_SITE_LANGUAGE;

  const preferences = acceptLanguage
    .split(',')
    .map((part) => {
      const [rawTag, qPart] = part.trim().split(';q=');
      const tag = rawTag.trim().toLowerCase();
      const q = qPart ? Number.parseFloat(qPart) : 1;
      return { tag, q: Number.isFinite(q) ? q : 0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferences) {
    const primary = tag.split('-')[0];

    if (tag === 'uk' || tag.startsWith('uk-') || primary === 'uk') return 'uk';
    if (primary === 'en') return 'en';
    if (primary === 'pl') return 'pl';
    if (primary === 'ru') return 'ru';
  }

  return DEFAULT_SITE_LANGUAGE;
}

/** Cookie (ручний вибір) → Accept-Language → uk */
export function resolvePreferredLanguage(
  cookieValue: string | null | undefined,
  acceptLanguage: string | null | undefined
): SiteLanguage {
  if (isSiteLanguage(cookieValue)) return cookieValue;
  return matchBrowserLanguage(acceptLanguage);
}

/** Зберегти ручний вибір мови (клієнт) */
export function setPreferredLanguageCookie(lang: SiteLanguage): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${LOCALE_COOKIE_NAME}=${lang};path=/;max-age=${LOCALE_COOKIE_MAX_AGE};SameSite=Lax`;
}
