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
    ? 'Послуги - TeleBots | Розробка ботів, сайтів та автоматизація бізнесу'
    : lang === 'en'
    ? 'Services - TeleBots | Bot Development, Websites & Business Automation'
    : lang === 'pl'
    ? 'Usługi - TeleBots | Rozwój botów, stron internetowych i automatyzacja biznesu'
    : 'Услуги - TeleBots | Разработка ботов, сайтов и автоматизация бизнеса';

  const description = lang === 'uk'
    ? 'Розробка чат-ботів, веб-сайтів, парсерів та AI інтеграцій. Швидкий старт за 24 години, готове рішення за 2 тижні. Замовити розробку для вашого бізнесу.'
    : lang === 'en'
    ? 'Chatbot development, websites, parsers and AI integrations. Quick start in 24 hours, ready solution in 2 weeks. Order development for your business today!'
    : lang === 'pl'
    ? 'Rozwój chatbotów, stron internetowych, parserów i integracji AI. Szybki start w 24 godziny, gotowe rozwiązanie w 2 tygodnie. Zamów rozwój dziś!'
    : 'Разработка чат-ботов, сайтов, парсеров и AI интеграций. Быстрый старт за 24 часа, готовое решение за 2 недели. Заказать разработку сегодня!';

  const keywords = lang === 'uk'
    ? 'послуги, розробка чат-ботів, розробка сайтів, розробка парсерів, AI інтеграції, автоматизація бізнесу, веб-розробка, телеграм бот розробка'
    : lang === 'en'
    ? 'services, chatbot development, website development, parser development, AI integrations, business automation, web development, telegram bot development'
    : lang === 'pl'
    ? 'usługi, rozwój chatbotów, rozwój stron internetowych, rozwój parserów, integracje AI, automatyzacja biznesu, rozwój stron internetowych, rozwój botów Telegram'
    : 'услуги, разработка чат-ботов, разработка сайтов, разработка парсеров, AI интеграции, автоматизация бизнеса, веб-разработка, разработка телеграм ботов';

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

