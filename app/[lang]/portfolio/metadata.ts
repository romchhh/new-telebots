import { Metadata } from 'next';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://telebotsnowayrm.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk'
    ? 'Портфоліо - TeleBots | Успішні проєкти та кейси розробки'
    : lang === 'en'
    ? 'Portfolio - TeleBots | Successful Projects & Development Cases'
    : lang === 'pl'
    ? 'Portfolio - TeleBots | Udane projekty i przypadki rozwoju'
    : 'Портфолио - TeleBots | Успешные проекты и кейсы разработки';

  const description = lang === 'uk'
    ? 'Перегляньте успішні проєкти: телеграм боти, чат-боти, сайти, інтернет-магазини. 200+ реалізованих проєктів. Дізнайтеся, як ми допомагаємо бізнесам.'
    : lang === 'en'
    ? 'View successful projects: Telegram bots, chatbots, websites, online stores. 200+ completed projects. Learn how we help businesses.'
    : lang === 'pl'
    ? 'Zobacz udane projekty: boty Telegram, chatboty, strony internetowe. 200+ projektów. Dowiedz się, jak pomagamy.'
    : 'Посмотрите успешные проекты: телеграм боты, чат-боты, сайты. 200+ проектов. Узнайте, как мы помогаем.';

  const keywords = lang === 'uk'
    ? 'портфоліо, кейси, проєкти, телеграм бот, чат-бот, сайт, інтернет-магазин, успішні роботи, приклади розробки'
    : lang === 'en'
    ? 'portfolio, cases, projects, telegram bot, chatbot, website, online store, successful works, development examples'
    : lang === 'pl'
    ? 'portfolio, przypadki, projekty, bot telegram, chatbot, strona internetowa, sklep internetowy, udane prace, przykłady rozwoju'
    : 'портфолио, кейсы, проекты, телеграм бот, чат-бот, сайт, интернет-магазин, успешные работы, примеры разработки';

  return {
    ...generateSEOMetadata({
      title,
      description,
      keywords,
      url: `${baseUrl}/${lang}/portfolio`,
      lang,
    }),
  };
}

