import type { Language } from '@/components/translations';
import { siteUrl } from '@/lib/site';

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Короткий бейдж на прев’ю (під бренд) — усі мови сайту */
export const OG_BADGE_BY_LANG: Record<Language, string> = {
  uk: 'Сайти · Telegram-боти · E-commerce',
  en: 'Websites · Telegram bots · E-commerce',
  pl: 'Strony · Boty Telegram · E-commerce',
  ru: 'Сайты · Telegram-боты · E-commerce',
};

export const OG_DEFAULT_TITLE_BY_LANG: Record<Language, string> = {
  uk: 'Розробка сайтів і Telegram-ботів під ключ',
  en: 'Website & Telegram bot development end to end',
  pl: 'Tworzenie stron i botów Telegram pod klucz',
  ru: 'Разработка сайтов и Telegram-ботов под ключ',
};

export const OG_DEFAULT_DESCRIPTION_BY_LANG: Record<Language, string> = {
  uk: '200+ проєктів · консультація · старт від 24 год',
  en: '200+ projects · free consult · start in 24h',
  pl: '200+ projektów · konsultacja · start w 24h',
  ru: '200+ проектов · консультация · старт от 24 ч',
};

function cleanTitle(title: string): string {
  return (title || '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s*(?:\||-|—|–)\s*TeleBots\s*$/i, '')
    .replace(/(?:^|\s)TeleBots$/i, '')
    .trim();
}

function cleanDescription(description: string, maxLength = 120): string {
  const text = (description || '').replace(/\s+/g, ' ').trim();
  if (!text || text.length <= maxLength) return text;
  const window = text.slice(0, maxLength).trim();
  const lastSpace = window.lastIndexOf(' ');
  return (lastSpace > maxLength * 0.7 ? window.slice(0, lastSpace) : window)
    .replace(/[,:;–—\-]\s*$/g, '')
    .trim();
}

export type BuildOgImageUrlOptions = {
  title?: string;
  description?: string;
  lang?: Language;
};

/** Абсолютний URL динамічного OG-прев’ю з текстом поверх hero. */
export function buildOgImageUrl(options: BuildOgImageUrlOptions = {}): string {
  const lang = options.lang ?? 'uk';
  const title = cleanTitle(options.title || '') || OG_DEFAULT_TITLE_BY_LANG[lang];
  const description =
    cleanDescription(options.description || '') || OG_DEFAULT_DESCRIPTION_BY_LANG[lang];

  const params = new URLSearchParams({
    title: title.slice(0, 140),
    description: description.slice(0, 160),
    lang,
  });

  return `${siteUrl}/api/og?${params.toString()}`;
}
