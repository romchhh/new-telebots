import type { Metadata } from "next";
import { translations, Language } from "@/components/translations";
import { siteUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk'
    ? 'Замовити розробку Telegram-ботів і сайтів | від $150 | TeleBots'
    : lang === 'en'
    ? 'Order Telegram Bots & Websites | from $150 | TeleBots'
    : lang === 'pl'
    ? 'Zamów boty Telegram i strony | od $150 | TeleBots'
    : 'Заказать Telegram-ботов и сайты | от $150 | TeleBots';

  const description = lang === 'uk'
    ? 'Розробка Telegram-ботів з AI та оплатою від $150, сайти від $300. Чат-бот для бізнесу під ключ, CRM, e-commerce. 200+ проєктів, безкоштовна консультація, старт від 24 год.'
    : lang === 'en'
    ? 'Telegram bots with AI and payments from $150, websites from $300. Business chatbots, CRM, e-commerce. 200+ projects, free consultation, kickoff in 24 hours.'
    : lang === 'pl'
    ? 'Boty Telegram z AI i płatnościami od $150, strony od $300. Chatboty biznesowe, CRM, e-commerce. 200+ projektów, darmowa konsultacja, start w 24 godziny.'
    : 'Telegram-боты с AI и оплатой от $150, сайты от $300. Чат-бот для бизнеса под ключ, CRM, e-commerce. 200+ проектов, бесплатная консультация, старт за 24 часа.';

  const keywords = lang === 'uk'
    ? 'розробка сайтів, створення сайту під ключ, веб-розробка, лендинг замовити, інтернет-магазин під ключ, телеграм бот розробка, розробка чат-ботів, чат-бот для бізнесу, чат бот ціна, замовити телеграм бота, автоматизація бізнесу, AI чат-бот, TeleBots, 200+ проєктів'
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
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        'x-default': `${siteUrl}/uk`,
        'uk': `${siteUrl}/uk`,
        'en': `${siteUrl}/en`,
        'pl': `${siteUrl}/pl`,
        'ru': `${siteUrl}/ru`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'uk' ? 'uk_UA' : lang === 'en' ? 'en_US' : lang === 'pl' ? 'pl_PL' : 'ru_RU',
      url: `${siteUrl}/${lang}`,
      title,
      description,
      siteName: 'TeleBots',
      images: [
        {
          url: `${siteUrl}/portfolio/portfolio-default.jpg`,
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
      images: [`${siteUrl}/portfolio/portfolio-default.jpg`],
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

