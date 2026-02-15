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
    ? 'Кейси розробки телеграм ботів та сайтів — TeleBots'
    : lang === 'en'
    ? 'Telegram Bot & Website Development Cases — TeleBots'
    : lang === 'pl'
    ? 'Przypadki rozwoju botów Telegram i stron — TeleBots'
    : 'Кейсы разработки телеграм ботов и сайтов — TeleBots';

  const description = lang === 'uk'
    ? 'Кейси розробки телеграм ботів, чат-ботів, сайтів та інтернет-магазинів. Приклади проєктів: бот з оплатою, маркетплейс, e-commerce. 200+ реалізованих проєктів.'
    : lang === 'en'
    ? 'Cases: Telegram bots, chatbots, websites, online stores. Examples: bot with payment, marketplace, e-commerce. 200+ completed projects.'
    : lang === 'pl'
    ? 'Przypadki: boty Telegram, chatboty, strony, sklepy online. Przykłady: bot z płatnościami, marketplace. 200+ projektów.'
    : 'Кейсы разработки телеграм ботов, чат-ботов, сайтов и интернет-магазинов. Примеры проектов. 200+ реализованных проектов.';

  const keywords = lang === 'uk'
    ? 'кейси розробки телеграм ботів, приклади інтернет-магазинів, портфоліо, проєкти, телеграм бот, чат-бот, сайт, інтернет-магазин, телеграм бот для інтернет-магазину, успішні кейси'
    : lang === 'en'
    ? 'telegram bot development cases, online store examples, portfolio, projects, telegram bot, chatbot, website, e-commerce, successful cases'
    : lang === 'pl'
    ? 'przypadki rozwoju botów Telegram, przykłady sklepów online, portfolio, projekty, bot Telegram, chatbot, strona, sklep internetowy, udane przypadki'
    : 'кейсы разработки телеграм ботов, примеры интернет-магазинов, портфолио, проекты, телеграм бот, чат-бот, сайт, успешные кейсы';

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

