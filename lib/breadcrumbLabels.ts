import type { Language } from '@/components/translations';

/**
 * Підписи меню («БРЕНД», «ЩО МИ РОБИМО?») не годяться для крихт: у BreadcrumbList
 * Google очікує назву розділу, а не текст кнопки в навігації.
 */
export const BREADCRUMB_HOME: Record<Language, string> = {
  uk: 'Головна',
  en: 'Home',
  pl: 'Strona główna',
  ru: 'Главная',
};

export const BREADCRUMB_SERVICES: Record<Language, string> = {
  uk: 'Послуги',
  en: 'Services',
  pl: 'Usługi',
  ru: 'Услуги',
};
