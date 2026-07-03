import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import HeroImage from '@/components/HeroImage';
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

  const title =
    lang === 'uk'
      ? 'Замовити розробку Telegram-ботів і сайтів | від $150 | TeleBots'
      : lang === 'en'
        ? 'Order Telegram Bots & Websites | from $150 | TeleBots'
        : lang === 'pl'
          ? 'Zamów boty Telegram i strony | od $150 | TeleBots'
          : 'Заказать Telegram-ботов и сайты | от $150 | TeleBots';

  const description =
    lang === 'uk'
      ? 'Розробка Telegram-ботів з AI та оплатою від $150, сайти від $300. Чат-бот для бізнесу під ключ, CRM, e-commerce. 200+ проєктів, безкоштовна консультація, старт від 24 год.'
      : lang === 'en'
        ? 'Telegram bots with AI and payments from $150, websites from $300. Business chatbots, CRM, e-commerce. 200+ projects, free consultation, kickoff in 24 hours.'
        : lang === 'pl'
          ? 'Boty Telegram z AI i płatnościami od $150, strony od $300. Chatboty biznesowe, CRM, e-commerce. 200+ projektów, darmowa konsultacja, start w 24 godziny.'
          : 'Telegram-боты с AI и оплатой от $150, сайты от $300. Чат-бот для бизнеса под ключ, CRM, e-commerce. 200+ проектов, бесплатная консультация, старт за 24 часа.';

  const keywords =
    lang === 'uk'
      ? 'розробка сайтів, створення сайту під ключ, веб-розробка, лендинг замовити, інтернет-магазин під ключ, телеграм бот розробка, розробка чат-ботів, чат-бот для бізнесу, чат бот ціна, замовити телеграм бота, автоматизація бізнесу, AI чат-бот, TeleBots, 200+ проєктів'
      : lang === 'en'
        ? 'website development, landing page design, e-commerce development, corporate website, SEO web development, telegram bot development, chatbot for business, business automation, TeleBots, web development Ukraine, AI chatbot, 200+ projects'
        : lang === 'pl'
          ? 'rozwój stron internetowych, strona firmowa, sklep online, landing page, SEO strony, rozwój botów Telegram, chatboty, automatyzacja biznesu, TeleBots, tworzenie stron www, chatbot AI, 200+ projektów'
          : 'разработка сайтов, создание сайта под ключ, веб-разработка, лендинг заказать, интернет-магазин под ключ, SEO продвижение сайта, разработка телеграм ботов, чат-боты для бизнеса, автоматизация бизнеса, TeleBots, AI чат-бот, 200+ проектов';

  return generateSEOMetadata({
    title,
    description,
    keywords,
    url: `${baseUrl}/${lang}`,
    lang,
  });
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  return (
    <HomePageClient
      initialLang={lang}
      heroBackground={<HeroImage alt={t.hero.backgroundImageAlt} />}
    />
  );
}
