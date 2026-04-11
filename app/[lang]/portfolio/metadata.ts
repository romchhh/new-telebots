import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;

  const title = lang === 'uk'
    ? 'Кейси розробки сайтів та телеграм ботів — TeleBots'
    : lang === 'en'
    ? 'Website & Telegram Bot Development Cases — TeleBots'
    : lang === 'pl'
    ? 'Przypadki: strony www i boty Telegram — TeleBots'
    : 'Кейсы разработки сайтов и телеграм ботов — TeleBots';

  const description = lang === 'uk'
    ? 'Кейси розробки сайтів, інтернет-магазинів, лендингів; телеграм боти й чат-боти. Приклади: e-commerce, маркетплейс, бот з оплатою. 200+ проєктів.'
    : lang === 'en'
    ? 'Cases: websites, online stores, landing pages; Telegram bots and chatbots. E-commerce, marketplace, payment bots. 200+ projects.'
    : lang === 'pl'
    ? 'Realizacje: strony, sklepy, landingi; boty Telegram i chatboty. E-commerce, marketplace. 200+ projektów.'
    : 'Кейсы разработки сайтов, интернет-магазинов, лендингов; телеграм боты и чат-боты. 200+ проектов.';

  const keywords = lang === 'uk'
    ? 'кейси розробки сайтів, приклади сайтів, інтернет-магазин під ключ, лендинг кейс, кейси телеграм ботів, чат-бот, веб-розробка, успішні кейси, TeleBots'
    : lang === 'en'
    ? 'website development portfolio, landing page examples, e-commerce cases, online store projects, telegram bot cases, chatbot, web development cases, TeleBots'
    : lang === 'pl'
    ? 'portfolio stron www, przykłady sklepów online, realizacje landingów, boty Telegram, chatbot, case study strony, TeleBots'
    : 'кейсы разработки сайтов, примеры лендингов, интернет-магазин кейс, портфолио веб-разработки, телеграм бот, чат-бот, успешные кейсы';

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

