/**
 * Юридична та контактна інформація виконавця (продавця послуг).
 * Використовується для відповідності вимогам до інтернет-магазину / прийому платежів.
 *
 * Для PL-локалі показуємо контакт у Варшаві та польський номер.
 */

type SiteLang = 'uk' | 'en' | 'pl' | 'ru';

export const legal = {
  /** Повне фірмове найменування (одержувач) */
  companyName: 'ФОП Федонюк Роман Ігорович',
  /** Код ЄДРПОУ */
  edrpou: '3831208275',
  /** Юридична адреса */
  legalAddress: 'м. Київ, Україна',
  /** Фактична адреса (збігається з юридичною) */
  actualAddress: 'м. Київ, Україна',
  /** Телефон */
  phone: '+380960908006',
  /** Телефон для посилань (tel:) */
  phoneRaw: '380960908006',
  /** WhatsApp — завжди польський номер (усі локалі) */
  whatsapp: '+48 792 776 815',
  whatsappRaw: '48792776815',
  /** Електронна пошта */
  email: 'roman.fedoniuk@gmail.com',
  /** IBAN для банківських переказів */
  iban: 'UA933220010000026005370092533',
} as const;

/** Посилання WhatsApp (польський номер) для кнопок / соцмереж. */
export const WHATSAPP_HREF = `https://api.whatsapp.com/send/?phone=${legal.whatsappRaw}&text&type=phone_number&app_absent=0`;
export const WHATSAPP_WA_ME = `https://wa.me/${legal.whatsappRaw}`;

const PL_CONTACT = {
  legalAddress: 'Warszawa, Polska',
  phone: '+48 792 776 815',
  phoneRaw: '48792776815',
  addressLocality: 'Warszawa',
  addressRegion: 'Mazowieckie',
  postalCode: '00-001',
  addressCountry: 'PL',
  geo: { latitude: '52.2297', longitude: '21.0122' },
} as const;

const UA_CONTACT = {
  legalAddress: legal.legalAddress,
  phone: legal.phone,
  phoneRaw: legal.phoneRaw,
  addressLocality: 'Київ',
  addressRegion: 'Київ',
  postalCode: '01000',
  addressCountry: 'UA',
  geo: { latitude: '50.4501', longitude: '30.5234' },
} as const;

export type LegalContact = {
  legalAddress: string;
  phone: string;
  phoneRaw: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  geo: { latitude: string; longitude: string };
};

/** Контакти для відображення / schema за мовою інтерфейсу. */
export function getLegalContact(lang: SiteLang = 'uk'): LegalContact {
  if (lang === 'pl') return PL_CONTACT;
  return UA_CONTACT;
}
