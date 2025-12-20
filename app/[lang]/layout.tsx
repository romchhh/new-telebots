import type { Metadata } from "next";
import { translations, Language } from "@/components/translations";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://telebotsnowayrm.com';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk' 
    ? 'TeleBots - Розробка телеграм ботів, сайтів та цифрових рішень'
    : lang === 'en'
    ? 'TeleBots - Telegram Bots, Websites & Digital Solutions Development'
    : lang === 'pl'
    ? 'TeleBots - Rozwój botów Telegram, stron internetowych i rozwiązań cyfrowych'
    : 'TeleBots - Разработка телеграм ботов, сайтов и цифровых решений';

  const description = lang === 'uk'
    ? 'Професійна розробка телеграм ботів, чат-ботів, сайтів, інтернет-магазинів, парсерів та ботів з AI. 200+ реалізованих проєктів. Автоматизація бізнесу під ключ.'
    : lang === 'en'
    ? 'Professional development of Telegram bots, chatbots, websites, e-commerce stores, parsers and AI bots. 200+ completed projects. Turnkey business automation.'
    : lang === 'pl'
    ? 'Profesjonalny rozwój botów Telegram, chatbotów, stron internetowych, sklepów internetowych, parserów i botów AI. 200+ ukończonych projektów. Automatyzacja biznesu pod klucz.'
    : 'Профессиональная разработка телеграм ботов, чат-ботов, сайтов, интернет-магазинов, парсеров и ботов с AI. 200+ реализованных проектов. Автоматизация бизнеса под ключ.';

  const keywords = lang === 'uk'
    ? 'телеграм бот, розробка ботів, чат-бот, розробка сайтів, інтернет-магазин, парсер, AI бот, автоматизація бізнесу, Telegram бот розробка, веб-розробка'
    : lang === 'en'
    ? 'telegram bot, bot development, chatbot, website development, e-commerce, parser, AI bot, business automation, Telegram bot development, web development'
    : lang === 'pl'
    ? 'bot telegram, rozwój botów, chatbot, rozwój stron internetowych, e-commerce, parser, bot AI, automatyzacja biznesu, rozwój botów Telegram, rozwój stron internetowych'
    : 'телеграм бот, разработка ботов, чат-бот, разработка сайтов, интернет-магазин, парсер, AI бот, автоматизация бизнеса, разработка Telegram ботов, веб-разработка';

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
      canonical: `/${lang}`,
      languages: {
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
          url: `${baseUrl}/og-image.jpg`,
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
      images: [`${baseUrl}/og-image.jpg`],
      creator: '@telebotsnowayrm',
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
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
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

