import type { Metadata } from "next";
import { translations, Language } from "@/components/translations";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk'
    ? 'Розробка Telegram-ботів і сайтів під ключ — TeleBots'
    : lang === 'en'
    ? 'Website & Telegram Bot Development — TeleBots'
    : lang === 'pl'
    ? 'Rozwój stron i botów Telegram — TeleBots'
    : 'Разработка сайтов и телеграм ботов — TeleBots';

  const description = lang === 'uk'
    ? 'Замовити розробку Telegram-бота чи сайту: лендинги, e-commerce, SEO, інтеграції з CRM і оплатою. 200+ проєктів, безкоштовна консультація, старт від 24 год. TeleBots.'
    : lang === 'en'
    ? 'Website development: landing pages, corporate sites, e-commerce, SEO. Telegram bots, chatbots, integrations. 200+ projects. Quick start in 24 hours.'
    : lang === 'pl'
    ? 'Tworzenie stron: landingi, strony firmowe, sklepy online, SEO. Boty Telegram, chatboty, integracje. 200+ projektów. Szybki start w 24 godziny.'
    : 'Разработка сайтов: лендинги, корпоративные сайты, интернет-магазины, SEO. Чат-боты и телеграм боты, интеграции. 200+ проектов. Быстрый старт за 24 часа.';

  const keywords = lang === 'uk'
    ? 'розробка сайтів, створення сайту під ключ, веб-розробка, лендинг замовити, інтернет-магазин під ключ, розробка сайту SEO, телеграм бот розробка, розробка чат-ботів, автоматизація бізнесу, TeleBots, замовлення телеграм бота, AI чат-бот, 200+ проєктів'
    : lang === 'en'
    ? 'website development, landing page design, e-commerce development, corporate website, SEO web development, telegram bot development, chatbot for business, business automation, TeleBots, web development Ukraine, AI chatbot, 200+ projects'
    : lang === 'pl'
    ? 'rozwój stron internetowych, strona firmowa, sklep online, landing page, SEO strony, rozwój botów Telegram, chatboty, automatyzacja biznesu, TeleBots, tworzenie stron www, chatbot AI, 200+ projektów'
    : 'разработка сайтов, создание сайта под ключ, веб-разработка, лендинг заказать, интернет-магазин под ключ, SEO продвижение сайта, разработка телеграм ботов, чат-боты для бизнеса, автоматизация бизнеса, TeleBots, AI чат-бот, 200+ проектов';

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

