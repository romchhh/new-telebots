import { Metadata } from 'next';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getServiceKeyForTranslations, SERVICE_IDS, type ServiceId } from './metadata';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

type ServiceSeoMeta = {
  title: string;
  description: string;
  keywords: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

/** Мета для сторінок послуг: без акценту на країні; OG може бути коротшим за `<title>`. */
function getServiceSEO(serviceId: ServiceId, lang: Language): ServiceSeoMeta {
  const u = (t: string, e: string, p: string, r: string) => (lang === 'uk' ? t : lang === 'en' ? e : lang === 'pl' ? p : r);

  switch (serviceId) {
    case 'chatbots':
      return {
        title: u(
          'Розробка Telegram-ботів і чат-ботів під ключ | TeleBots',
          'Telegram & chatbot development end-to-end | TeleBots',
          'Boty Telegram i chatboty pod klucz | TeleBots',
          'Разработка Telegram-ботов и чат-ботов под ключ | TeleBots'
        ),
        description: u(
          'Замовте розробку Telegram-бота для бізнесу: продажі, запис клієнтів, розсилки та AI-відповіді. Старт за 24 год, 200+ проєктів. Безкоштовна консультація.',
          'Order a Telegram bot for business: sales, bookings, broadcasts, and AI replies. Kickoff in 24h, 200+ projects. Free consultation.',
          'Bot Telegram dla biznesu: sprzedaż, rezerwacje, mailingi i odpowiedzi AI. Start w 24h, 200+ projektów. Darmowa konsultacja.',
          'Разработка Telegram-бота для бизнеса: продажи, запись клиентов, рассылки и AI-ответы. Старт за 24 ч, 200+ проектов. Бесплатная консультация.'
        ),
        openGraphTitle: u(
          'Розробка Telegram-ботів під ключ | TeleBots',
          'Telegram bot development end-to-end | TeleBots',
          'Boty Telegram pod klucz | TeleBots',
          'Разработка Telegram-ботов под ключ | TeleBots'
        ),
        openGraphDescription: u(
          'Автоматизуйте продажі та підтримку через Telegram-бота: оплата, CRM, AI — від 24 годин.',
          'Automate sales and support with a Telegram bot: payments, CRM, AI — from 24 hours.',
          'Automatyzacja sprzedaży i supportu botem Telegram: płatności, CRM, AI — od 24 godzin.',
          'Автоматизация продаж и поддержки через Telegram-бота: оплата, CRM, AI — от 24 часов.'
        ),
        keywords: u(
          'замовити телеграм бота, розробка Telegram-бота, чат-бот для бізнесу, бот з оплатою, CRM для бота, AI чат-бот, розробка бота під ключ, TeleBots',
          'order telegram bot, Telegram bot development, business chatbot, bot payments, CRM bot integration, AI chatbot, turnkey bot, TeleBots',
          'zamów bota Telegram, rozwój bota Telegram, chatbot biznesowy, płatności w bocie, CRM, chatbot AI, TeleBots',
          'заказать телеграм бота, разработка Telegram-бота, чат-бот для бизнеса, оплата в боте, CRM, AI чат-бот, TeleBots'
        ),
      };
    case 'websites':
      return {
        title: u(
          'Розробка сайтів під ключ — лендінги, візитки, інтернет-магазини | TeleBots',
          'Website development end-to-end — landings, business sites, e-commerce | TeleBots',
          'Strony pod klucz — landingi, wizytówki, e-commerce | TeleBots',
          'Разработка сайтов под ключ — лендинги, визитки, интернет-магазины | TeleBots'
        ),
        description: u(
          'Розробка сайту під ключ: лендінги, корпоративні сайти та e-commerce на Next.js. SEO, швидкість, адаптив. Типово 2 тижні. Безкоштовна консультація.',
          'Websites end-to-end: landings, corporate sites, and Next.js e-commerce. SEO, speed, responsive delivery. Free consultation.',
          'Strony pod klucz: landingi, serwisy firmowe i e-commerce na Next.js. SEO, szybkość, RWD. Darmowa konsultacja.',
          'Сайты под ключ: лендинги, корпоративные сайты и e-commerce на Next.js. SEO, скорость, адаптив. Бесплатная консультация.'
        ),
        openGraphTitle: u(
          'Розробка сайтів під ключ | TeleBots',
          'Website development end-to-end | TeleBots',
          'Strony pod klucz | TeleBots',
          'Разработка сайтов под ключ | TeleBots'
        ),
        openGraphDescription: u(
          'Від лендінгу до інтернет-магазину: SEO-база, сучасний стек, швидкий запуск.',
          'From landing pages to online stores: SEO-ready stack and fast delivery.',
          'Od landingów po sklepy: SEO, nowoczesny stack, szybki start.',
          'От лендинга до интернет-магазина: SEO, современный стек, быстрый запуск.'
        ),
        keywords: u(
          'розробка сайту під ключ, лендінг замовити, інтернет-магазин Next.js, корпоративний сайт, SEO сайту, веб-розробка, TeleBots',
          'website development turnkey, landing page, Next.js e-commerce, corporate website, SEO web development, TeleBots',
          'strona pod klucz, landing, sklep Next.js, strona firmowa, SEO, TeleBots',
          'разработка сайта под ключ, лендинг, интернет-магазин Next.js, корпоративный сайт, SEO, TeleBots'
        ),
      };
    case 'design':
      return {
        title: u(
          'Дизайн логотипу, айдентика та UI/UX для сайтів і застосунків | TeleBots',
          'Logo, brand identity & UI/UX for web and apps | TeleBots',
          'Logo, identyfikacja i UI/UX dla stron i aplikacji | TeleBots',
          'Дизайн логотипа, айдентика и UI/UX для сайтов и приложений | TeleBots'
        ),
        description: u(
          'Логотип, фірмовий стиль і UI/UX у Figma: брендбук, макети під розробку та друк. Безкоштовна консультація.',
          'Logo, brand system, and UI/UX in Figma: brand books and dev-ready mockups. Free consultation.',
          'Logo, system wizualny i UI/UX w Figmie: brand book i makety pod dev. Darmowa konsultacja.',
          'Логотип, фирменный стиль и UI/UX в Figma: брендбук и макеты под разработку. Бесплатная консультация.'
        ),
        openGraphTitle: u(
          'Дизайн та айдентика для бізнесу | TeleBots',
          'Design & brand identity for business | TeleBots',
          'Design i identyfikacja dla biznesu | TeleBots',
          'Дизайн и айдентика для бизнеса | TeleBots'
        ),
        openGraphDescription: u(
          'Логотип, брендбук, UI/UX для сайту чи застосунку — від ідеї до макетів у Figma.',
          'Logo, brand book, UI/UX for sites or apps — from idea to Figma handoff.',
          'Logo, brand book, UI/UX — od pomysłu do makiet w Figmie.',
          'Логотип, брендбук, UI/UX — от идеи до макетов в Figma.'
        ),
        keywords: u(
          'дизайн логотипу, фірмовий стиль, UI UX дизайн, брендбук, макети Figma, айдентика, TeleBots',
          'logo design, brand identity, UI UX design, brand book, Figma mockups, TeleBots',
          'projekt logo, identyfikacja wizualna, UI UX, brand book, Figma, TeleBots',
          'дизайн логотипа, фирменный стиль, UI UX, брендбук, Figma, TeleBots'
        ),
      };
    default:
      return { title: '', description: '', keywords: '' };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; serviceId: string }>;
}): Promise<Metadata> {
  const { lang: langParam, serviceId } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const id = SERVICE_IDS.includes(serviceId as ServiceId) ? (serviceId as ServiceId) : null;
  if (!id) return { title: 'TeleBots' };

  const seo = getServiceSEO(id, lang);
  if (!seo.title) return { title: 'TeleBots' };

  return {
    ...generateSEOMetadata({
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      url: `${baseUrl}/${lang}/services/${serviceId}`,
      lang,
      openGraphTitle: seo.openGraphTitle,
      openGraphDescription: seo.openGraphDescription,
    }),
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
