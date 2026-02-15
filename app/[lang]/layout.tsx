import type { Metadata } from "next";
import { translations, Language } from "@/components/translations";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk'
    ? 'Розробка телеграм ботів — TeleBots'
    : lang === 'en'
    ? 'Telegram Bot Development — TeleBots'
    : lang === 'pl'
    ? 'Rozwój botów Telegram — TeleBots'
    : 'Разработка телеграм ботов — TeleBots';

  const description = lang === 'uk'
    ? 'Телеграм бот розробка, чат-боти, сайти, інтернет-магазини. Автоматизація бізнесу під ключ. Швидкий старт за 24 години, готове рішення за 2 тижні. 200+ проєктів.'
    : lang === 'en'
    ? 'Telegram bot development, chatbots, websites, e-commerce. Turnkey business automation. Quick start in 24 hours, ready solution in 2 weeks. 200+ projects.'
    : lang === 'pl'
    ? 'Rozwój botów Telegram, chatboty, strony, sklepy online. Automatyzacja biznesu pod klucz. Szybki start w 24 godziny, gotowe rozwiązanie w 2 tygodnie. 200+ projektów.'
    : 'Разработка телеграм ботов, чат-боты, сайты, интернет-магазины. Автоматизация бизнеса под ключ. Быстрый старт за 24 часа, готовое решение за 2 недели. 200+ проектов.';

  const keywords = lang === 'uk'
    ? 'телеграм бот розробка, розробка чат-ботів, розробка ботів для бізнесу, розробка сайтів, інтернет-магазин під ключ, автоматизація бізнесу, цифрові рішення для бізнесу, TeleBots, замовлення телеграм бота, веб-розробка, AI чат-бот, швидкий старт 24 години, готове рішення 2 тижні, 200+ проєктів'
    : lang === 'en'
    ? 'telegram bot development, chatbot development, bot development for business, website development, e-commerce turnkey, business automation, digital solutions, TeleBots, order telegram bot, web development, AI chatbot, quick start 24 hours, ready solution 2 weeks, 200+ projects'
    : lang === 'pl'
    ? 'rozwój botów Telegram, rozwój chatbotów, boty dla biznesu, rozwój stron, sklep internetowy pod klucz, automatyzacja biznesu, rozwiązania cyfrowe, TeleBots, zamówienie bota Telegram, rozwój stron internetowych, chatbot AI, szybki start 24 godziny, gotowe rozwiązanie 2 tygodnie, 200+ projektów'
    : 'разработка телеграм ботов, разработка чат-ботов, боты для бизнеса, разработка сайтов, интернет-магазин под ключ, автоматизация бизнеса, цифровые решения, TeleBots, заказать телеграм бота, веб-разработка, AI чат-бот, быстрый старт 24 часа, готовое решение 2 недели, 200+ проектов';

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'TeleBots' }],
    creator: 'TeleBots',
    publisher: 'TeleBots',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'x-default': `${baseUrl}/uk`,
        'uk': `${baseUrl}/uk`,
        'en': `${baseUrl}/en`,
        'pl': `${baseUrl}/pl`,
        'ru': `${baseUrl}/ru`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'uk' ? 'uk_UA' : lang === 'en' ? 'en_US' : lang === 'pl' ? 'pl_PL' : 'ru_RU',
      url: `${baseUrl}/${lang}`,
      title,
      description,
      siteName: 'TeleBots',
      images: [
        {
          url: `${baseUrl}/portfolio/portfolio-default.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/portfolio/portfolio-default.jpg`],
      creator: '@telebotsnowayrm',
      site: '@telebotsnowayrm',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/other/favicon.png', sizes: 'any', type: 'image/png' },
      ],
      apple: [
        { url: '/other/favicon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: [
        { url: '/other/favicon.png', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  await params; // Отримуємо params, хоча не використовуємо в цьому layout
  return <>{children}</>;
}

