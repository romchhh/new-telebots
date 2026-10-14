import type { Language } from '@/components/translations';
import { siteUrl } from '@/lib/site';

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Hero головної (webp → jpg для Satori). */
export const OG_HOME_BACKGROUND = '/other/og-hero.jpg';

/** Fallback = текст hero головної (якщо сторінка не передала свої). */
export const OG_DEFAULT_TITLE_BY_LANG: Record<Language, string> = {
  uk: 'Розробка сайтів і Telegram-ботів під ключ',
  en: 'Website & Telegram bot development end to end',
  pl: 'Tworzenie stron i botów Telegram pod klucz',
  ru: 'Разработка сайтов и Telegram-ботов под ключ',
};

export const OG_DEFAULT_DESCRIPTION_BY_LANG: Record<Language, string> = {
  uk: 'Зручні сайти та боти, які ведуть клієнта до заявки й покупки. Повний цикл: месенджери, веб, e-commerce, дані, бренд і UI/UX. Одна команда — без зайвих підрядників.',
  en: 'Websites and bots that turn visitors into leads and sales. Full cycle: messengers, web, e-commerce, data, brand & UI/UX. One team — no extra middlemen.',
  pl: 'Strony i boty, które prowadzą klienta od wizyty do zakupu. Pełny cykl: komunikatory, web, e-commerce, dane, branding i UI/UX. Jeden zespół — bez pośredników.',
  ru: 'Удобные сайты и боты, которые ведут клиента к заявке и к покупке. Полный цикл: мессенджеры, веб, e-commerce, данные, бренд и UI/UX. Одна команда — без лишних подрядчиков.',
};

/** Дозволені корені шляхів у /public для фону OG. */
const ALLOWED_BG_PREFIXES = [
  '/other/',
  '/services/',
  '/portfolio/',
  '/offer/',
  '/blog/',
] as const;

/** WebP / інші формати, які Satori не їсть — підміняємо на jpg-еквівалент. */
const BG_ALIASES: Record<string, string> = {
  '/other/hero-background.webp': OG_HOME_BACKGROUND,
  '/other/hero-background.jpg': OG_HOME_BACKGROUND,
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

/** Нормалізує шлях до файлу в public для OG-фону. */
export function resolveOgBackgroundPath(input?: string | null): string {
  if (!input) return OG_HOME_BACKGROUND;

  let path = input.trim();
  if (path.startsWith(siteUrl)) {
    path = path.slice(siteUrl.length);
  }
  if (!path.startsWith('/')) path = `/${path}`;
  path = path.split('?')[0].split('#')[0];

  if (path.includes('..') || path.includes('\\')) return OG_HOME_BACKGROUND;

  const aliased = BG_ALIASES[path] || path;
  if (!ALLOWED_BG_PREFIXES.some((prefix) => aliased.startsWith(prefix))) {
    return OG_HOME_BACKGROUND;
  }

  const ext = aliased.split('.').pop()?.toLowerCase();
  if (!ext || !['jpg', 'jpeg', 'png', 'webp'].includes(ext)) {
    return OG_HOME_BACKGROUND;
  }

  return aliased;
}

export type BuildOgImageUrlOptions = {
  title?: string;
  description?: string;
  lang?: Language;
  /** Шлях до hero-фото сторінки (наприклад `/services/services-websites.jpg`). */
  background?: string;
};

/** Абсолютний URL динамічного OG-прев’ю з текстом поверх hero сторінки. */
export function buildOgImageUrl(options: BuildOgImageUrlOptions = {}): string {
  const lang = options.lang ?? 'uk';
  const title = cleanTitle(options.title || '') || OG_DEFAULT_TITLE_BY_LANG[lang];
  const description =
    cleanDescription(options.description || '') || OG_DEFAULT_DESCRIPTION_BY_LANG[lang];
  const background = resolveOgBackgroundPath(options.background);

  const params = new URLSearchParams({
    title: title.slice(0, 140),
    description: description.slice(0, 160),
    lang,
    bg: background,
  });

  return `${siteUrl}/api/og?${params.toString()}`;
}
