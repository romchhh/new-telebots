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
    ? 'Покращуємо бізнеси, що стають №1. Професійна розробка телеграм ботів, чат-ботів з AI, сайтів та інтернет-магазинів. Швидкий старт за 24 години, готове рішення за 2 тижні. 200+ проєктів.'
    : lang === 'en'
    ? 'Improving businesses that become #1. Professional development of Telegram bots, AI chatbots, websites and e-commerce stores. Quick start in 24 hours, ready solution in 2 weeks. 200+ projects.'
    : lang === 'pl'
    ? 'Ulepszamy biznesy, które stają się nr 1. Profesjonalny rozwój botów Telegram, chatbotów AI, stron internetowych. Szybki start w 24 godziny, gotowe rozwiązanie w 2 tygodnie. 200+ projektów.'
    : 'Улучшаем бизнесы, которые становятся №1. Профессиональная разработка телеграм ботов, AI чат-ботов, сайтов. Быстрый старт за 24 часа, готовое решение за 2 недели. 200+ проектов.';

  const keywords = lang === 'uk'
    ? 'телеграм бот, розробка ботів, чат-бот, AI бот, розробка сайтів, інтернет-магазин, парсер, автоматизація бізнесу, Telegram бот розробка, веб-розробка, швидкий старт 24 години, готове рішення 2 тижні, автоматизація бізнесу під ключ, цифрові рішення, боти для бізнесу, чат-боти з AI'
    : lang === 'en'
    ? 'telegram bot, bot development, chatbot, AI bot, website development, e-commerce, parser, business automation, Telegram bot development, web development, quick start 24 hours, ready solution 2 weeks, turnkey business automation, digital solutions, business bots, AI chatbots'
    : lang === 'pl'
    ? 'bot telegram, rozwój botów, chatbot, bot AI, rozwój stron internetowych, e-commerce, parser, automatyzacja biznesu, rozwój botów Telegram, rozwój stron internetowych, szybki start 24 godziny, gotowe rozwiązanie 2 tygodnie, automatyzacja biznesu pod klucz, rozwiązania cyfrowe, boty biznesowe, chatboty AI'
    : 'телеграм бот, разработка ботов, чат-бот, AI бот, разработка сайтов, интернет-магазин, парсер, автоматизация бизнеса, разработка Telegram ботов, веб-разработка, быстрый старт 24 часа, готовое решение 2 недели, автоматизация бизнеса под ключ, цифровые решения, боты для бизнеса, чат-боты с AI';

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
        { url: '/whitelogo.png', sizes: 'any', type: 'image/png' },
      ],
      apple: [
        { url: '/whitelogo.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: [
        { url: '/whitelogo.png', type: 'image/png' },
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

