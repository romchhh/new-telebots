import type { Language } from '@/components/translations';
import type { SeoLandingRelatedService } from './types';

export type IncludedBlock = {
  title: string;
  lead: string;
  items: Array<{ title: string; text: string }>;
};

export const WEBSITE_INCLUDED: Record<Language, IncludedBlock> = {
  uk: {
    title: 'Що входить у вартість',
    lead:
      'Завжди можемо підлаштувати обсяг під ваш бюджет і терміни — обговоримо на брифі, без сюрпризів у рахунку.',
    items: [
      {
        title: 'Сайт під ключ',
        text:
          'Проєктуємо структуру, робимо адаптивний дизайн, збираємо сторінки й підключаємо форми, оплату, CRM — усе, що в ТЗ. Не шаблон з конструктора, а робочий сайт.',
      },
      {
        title: 'Адмін-панель',
        text:
          'Керуєте каталогом, замовленнями й клієнтами самі: змінюєте ціни, тексти, товари без програміста.',
      },
      {
        title: 'Аналіз перед стартом',
        text:
          'Дивимось на нішу, конкурентів і вашу ЦА — щоб сторінки відповідали на реальні запити, а не «просто були».',
      },
      {
        title: 'Тексти й візуал',
        text:
          'Допоможемо з формулюваннями, підкажемо, які фото й відео варто поставити на сайт і в картки товарів.',
      },
      {
        title: 'SEO і швидкість',
        text:
          'Meta-теги, sitemap, нормальна швидкість на телефоні — база, без якої сайт у пошуку не поїде.',
      },
    ],
  },
  en: {
    title: 'What the price includes',
    lead:
      'We can scale the scope to your budget and timeline — we’ll agree on that in the brief, with no hidden extras.',
    items: [
      {
        title: 'Turnkey website',
        text:
          'Structure, responsive design, pages, forms, payments, CRM — everything in the spec. Not a template builder job — a site that works.',
      },
      {
        title: 'Admin panel',
        text:
          'You manage catalog, orders and clients yourself: prices, copy and products without calling a developer.',
      },
      {
        title: 'Pre-launch review',
        text:
          'We look at your niche, competitors and audience so pages answer real questions, not just “exist”.',
      },
      {
        title: 'Copy and visuals',
        text:
          'We help with wording and suggest which photos and videos fit the site and product cards.',
      },
      {
        title: 'SEO and speed',
        text:
          'Meta tags, sitemap, solid mobile load times — the baseline you need before chasing rankings.',
      },
    ],
  },
  pl: {
    title: 'Co wchodzi w cenę',
    lead:
      'Zakres dopasujemy do budżetu i terminów — ustalimy to na briefie, bez ukrytych dopłat.',
    items: [
      {
        title: 'Strona pod klucz',
        text:
          'Struktura, responsywny design, strony, formularze, płatności, CRM — wszystko z specyfikacji. Nie szablon z kreatora, tylko działająca strona.',
      },
      {
        title: 'Panel administracyjny',
        text:
          'Samodzielnie zarządzasz katalogiem, zamówieniami i klientami: ceny, teksty, produkty bez programisty.',
      },
      {
        title: 'Analiza przed startem',
        text:
          'Patrzymy na niszę, konkurencję i grupę docelową — strony mają odpowiadać na realne pytania.',
      },
      {
        title: 'Teksty i wizualia',
        text:
          'Pomagamy z copy i podpowiadamy, jakie zdjęcia i wideo warto dać na stronę i do kart produktów.',
      },
      {
        title: 'SEO i szybkość',
        text:
          'Meta tagi, sitemap, sensowna szybkość na telefonie — baza pod widoczność w Google.',
      },
    ],
  },
  ru: {
    title: 'Что входит в стоимость',
    lead:
      'Объём можем подстроить под ваш бюджет и сроки — обсудим на брифе, без сюрпризов в счёте.',
    items: [
      {
        title: 'Сайт под ключ',
        text:
          'Проектируем структуру, делаем адаптивный дизайн, собираем страницы и подключаем формы, оплату, CRM — всё по ТЗ. Не шаблон конструктора, а рабочий сайт.',
      },
      {
        title: 'Админ-панель',
        text:
          'Сами управляете каталогом, заказами и клиентами: меняете цены, тексты, товары без программиста.',
      },
      {
        title: 'Анализ перед стартом',
        text:
          'Смотрим нишу, конкурентов и вашу ЦА — чтобы страницы отвечали на реальные запросы, а не «просто были».',
      },
      {
        title: 'Тексты и визуал',
        text:
          'Поможем с формулировками, подскажем, какие фото и видео поставить на сайт и в карточки товаров.',
      },
      {
        title: 'SEO и скорость',
        text:
          'Meta-теги, sitemap, нормальная скорость на телефоне — база, без которой сайт в поиске не поедет.',
      },
    ],
  },
};

export const BOT_INCLUDED: Record<Language, IncludedBlock> = {
  uk: {
    title: 'Що входить у вартість',
    lead:
      'Завжди можемо підлаштувати обсяг під ваш бюджет і терміни — обговоримо на брифі, без сюрпризів у рахунку.',
    items: [
      {
        title: 'Бот під ключ',
        text:
          'Весь функціонал для користувача: сценарій, тексти, тестування, інтеграції з CRM, оплатою, таблицями — як у ТЗ.',
      },
      {
        title: 'Адмін-панель',
        text:
          'Налаштування, статистика, розсилки, промо — після запуску керуєте самі, без постійного звернення до розробника.',
      },
      {
        title: 'Аналіз перед стартом',
        text:
          'Ніша, конкуренти, ЦА — щоб бот відповідав на реальні питання клієнтів, а не «просто був бот».',
      },
      {
        title: 'Передача і навчання',
        text:
          'Показуємо, як змінювати тексти й тарифи. Код і доступи ваші — не залежите від нас у щоденній роботі.',
      },
    ],
  },
  en: {
    title: 'What the price includes',
    lead:
      'We can scale the scope to your budget and timeline — we’ll agree on that in the brief, with no hidden extras.',
    items: [
      {
        title: 'Turnkey bot',
        text:
          'Full user flow: dialogue, copy, testing, CRM, payments, sheets — everything in the spec.',
      },
      {
        title: 'Admin panel',
        text:
          'Settings, stats, broadcasts and promos — after launch you run it yourself, without pinging a developer.',
      },
      {
        title: 'Pre-launch review',
        text:
          'Niche, competitors, audience — so the bot answers what clients actually ask, not generic filler.',
      },
      {
        title: 'Handover and training',
        text:
          'We show you how to change copy and plans. Code and access stay yours.',
      },
    ],
  },
  pl: {
    title: 'Co wchodzi w cenę',
    lead:
      'Zakres dopasujemy do budżetu i terminów — ustalimy to na briefie, bez ukrytych dopłat.',
    items: [
      {
        title: 'Bot pod klucz',
        text:
          'Pełny flow użytkownika: scenariusz, teksty, testy, CRM, płatności, arkusze — zgodnie ze specyfikacją.',
      },
      {
        title: 'Panel administracyjny',
        text:
          'Ustawienia, statystyki, mailingi, promocje — po starcie prowadzisz sam, bez ciągłego kontaktu z dev.',
      },
      {
        title: 'Analiza przed startem',
        text:
          'Nisza, konkurencja, grupa docelowa — bot odpowiada na realne pytania klientów.',
      },
      {
        title: 'Przekazanie i szkolenie',
        text:
          'Pokazujemy, jak zmieniać teksty i plany. Kod i dostępy zostają u Ciebie.',
      },
    ],
  },
  ru: {
    title: 'Что входит в стоимость',
    lead:
      'Объём можем подстроить под ваш бюджет и сроки — обсудим на брифе, без сюрпризов в счёте.',
    items: [
      {
        title: 'Бот под ключ',
        text:
          'Весь функционал для пользователя: сценарий, тексты, тестирование, интеграции с CRM, оплатой, таблицами — по ТЗ.',
      },
      {
        title: 'Админ-панель',
        text:
          'Настройки, статистика, рассылки, промо — после запуска управляете сами, без постоянных обращений к разработчику.',
      },
      {
        title: 'Анализ перед стартом',
        text:
          'Ниша, конкуренты, ЦА — чтобы бот отвечал на реальные вопросы клиентов, а не «просто был бот».',
      },
      {
        title: 'Передача и обучение',
        text:
          'Показываем, как менять тексты и тарифы. Код и доступы ваши — не зависите от нас в ежедневной работе.',
      },
    ],
  },
};

export function getIncludedForService(
  lang: Language,
  service: SeoLandingRelatedService
): IncludedBlock | null {
  if (service === 'websites') return WEBSITE_INCLUDED[lang];
  if (service === 'chatbots') return BOT_INCLUDED[lang];
  return null;
}
