import { Metadata } from 'next';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk'
    ? 'Послуги: розробка Telegram-ботів і сайтів під ключ — TeleBots'
    : lang === 'en'
    ? 'What we do? | Telegram Bots, Websites Turnkey — TeleBots'
    : lang === 'pl'
    ? 'Co robimy? | Boty Telegram, strony pod klucz — TeleBots'
    : 'Что мы делаем? | Разработка телеграм ботов, сайтов под ключ — TeleBots';

  const description = lang === 'uk'
    ? 'Telegram-боти з оплатою та CRM, сайти й e-commerce на Next.js, парсери, UI/UX і бренд. Безкоштовна консультація, прозорі терміни, 200+ проєктів. TeleBots.'
    : lang === 'en'
    ? 'Order Telegram bot, chatbot for business, website development turnkey, data parser, logo design. Pricing, quick start in 24 hours. 200+ projects.'
    : lang === 'pl'
    ? 'Zamów bota Telegram, chatbot dla biznesu, strona pod klucz, parser danych, projekt logo. Ceny, szybki start w 24 godziny. 200+ projektów.'
    : 'Заказать телеграм бота, чат-бот для бизнеса, разработка сайта под ключ, парсер данных, дизайн логотипа. Цены, быстрый старт за 24 часа. 200+ проектов.';

  const keywords = lang === 'uk'
    ? 'послуги TeleBots, розробка Telegram-ботів, замовити телеграм бота, чат-бот для бізнесу, розробка сайту під ключ, інтернет-магазин під ключ, розробка парсера, дизайн логотипу, UI/UX, автоматизація бізнесу'
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

