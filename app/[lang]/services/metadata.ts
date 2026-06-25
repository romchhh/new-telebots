import { Metadata } from 'next';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk'
    ? 'Послуги: Telegram-боти, чат-боти та сайти під ключ | TeleBots'
    : lang === 'en'
    ? 'Services: Telegram Bots, Chatbots & Websites | TeleBots'
    : lang === 'pl'
    ? 'Usługi: boty Telegram, chatboty i strony | TeleBots'
    : 'Услуги: Telegram-боты, чат-боты и сайты под ключ | TeleBots';

  const description = lang === 'uk'
    ? 'Замовити розробку Telegram-бота від $150, сайту від $300, UI/UX від $150. Чат-боти з оплатою, CRM, e-commerce на Next.js. Безкоштовна консультація, прозорі ціни, 200+ проєктів.'
    : lang === 'en'
    ? 'Telegram bots from $150, websites from $300, UI/UX from $150. Chatbots with payments, CRM, Next.js e-commerce. Free consultation, transparent pricing, 200+ projects.'
    : lang === 'pl'
    ? 'Boty Telegram od $150, strony od $300, UI/UX od $150. Chatboty z płatnościami, CRM, e-commerce Next.js. Darmowa konsultacja, przejrzyste ceny, 200+ projektów.'
    : 'Telegram-боты от $150, сайты от $300, UI/UX от $150. Чат-боты с оплатой, CRM, e-commerce на Next.js. Бесплатная консультация, прозрачные цены, 200+ проектов.';

  const keywords = lang === 'uk'
    ? 'послуги TeleBots, розробка Telegram-ботів, замовити телеграм бота, чат-бот для бізнесу, чат бот ціна, розробка чат ботів ціна, розробка сайту під ключ, інтернет-магазин під ключ, UI/UX, автоматизація бізнесу'
    : lang === 'en'
    ? 'services, order telegram bot, telegram bot development price, create Telegram bot, chatbot for business, website development turnkey, create online store, parser development, logo design, UI/UX design, business automation'
    : lang === 'pl'
    ? 'usługi, zamówienie bota Telegram, cena rozwoju bota, stworzyć bota Telegram, chatbot dla biznesu, strona pod klucz, sklep internetowy, rozwój parsera, projekt logo, UI/UX, automatyzacja biznesu'
    : 'услуги, заказать телеграм бота, разработка телеграм бота цена, создать бота Telegram, чат-бот для бизнеса, разработка сайта под ключ, создать интернет-магазин, разработка парсера, дизайн логотипа, UI/UX, автоматизация бизнеса';

  return {
    ...generateSEOMetadata({
      title,
      description,
      keywords,
      url: `${baseUrl}/${lang}/services`,
      lang,
    }),
  };
}

