import { Metadata } from 'next';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getServiceKeyForTranslations, SERVICE_IDS, type ServiceId } from './metadata';
import { siteUrl as baseUrl, SITE_LANGUAGES } from '@/lib/site';

export function generateStaticParams() {
  return SITE_LANGUAGES.flatMap((lang) =>
    SERVICE_IDS.map((serviceId) => ({ lang, serviceId }))
  );
}

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
          'Чат-боти купити | Розробка Telegram-ботів від $100',
          'Buy chatbots | Telegram bot development from $100',
          'Kup chatboty | Boty Telegram od $100',
          'Чат-боты купить | Разработка Telegram-ботов от $100'
        ),
        description: u(
          'Чат-боти купити під ключ: розробка чат-ботів ціна від $100. Telegram з оплатою, CRM, AI. 200+ проєктів. Безкоштовна консультація — TeleBots agency Ukraine.',
          'Buy business chatbots turnkey from $100. Telegram with payments, CRM, AI. 200+ projects. Free consultation — TeleBots agency Ukraine.',
          'Kup chatboty biznesowe pod klucz od $100. Telegram z płatnościami, CRM, AI. 200+ projektów — TeleBots.',
          'Чат-боты купить под ключ от $100. Telegram с оплатой, CRM, AI. 200+ проектов — TeleBots agency Ukraine.'
        ),
        openGraphTitle: u(
          'Розробка Telegram-ботів під ключ',
          'Telegram bot development end-to-end',
          'Boty Telegram pod klucz',
          'Разработка Telegram-ботов под ключ'
        ),
        openGraphDescription: u(
          'Автоматизуйте продажі та підтримку через Telegram-бота: оплата, CRM, AI — від 24 годин.',
          'Automate sales and support with a Telegram bot: payments, CRM, AI — from 24 hours.',
          'Automatyzacja sprzedaży i supportu botem Telegram: płatności, CRM, AI — od 24 godzin.',
          'Автоматизация продаж и поддержки через Telegram-бота: оплата, CRM, AI — от 24 часов.'
        ),
        keywords: u(
          'чат боти купити, замовити телеграм бота, розробка Telegram-бота, чат-бот для бізнесу, чат бот ціна, розробка чат ботів ціна, telegram бот на замовлення, бот з оплатою, CRM для бота, AI чат-бот, TeleBots agency Ukraine',
          'order telegram bot, Telegram bot development, business chatbot, bot payments, CRM bot integration, AI chatbot, turnkey bot, TeleBots',
          'zamów bota Telegram, rozwój bota Telegram, chatbot biznesowy, płatności w bocie, CRM, chatbot AI, TeleBots',
          'заказать телеграм бота, разработка Telegram-бота, чат-бот для бизнеса, оплата в боте, CRM, AI чат-бот, TeleBots'
        ),
      };
    case 'websites':
      return {
        title: u(
          'Розробка сайтів під ключ — лендінги від $150, магазини від $400',
          'Website development — landings from $150, stores from $400',
          'Strony pod klucz — landingi od $150, sklepy od $400',
          'Разработка сайтов под ключ — лендинги от $150, магазины от $400'
        ),
        description: u(
          'Розробка сайту під ключ: лендінги від $150, корпоративні сайти та e-commerce від $400 на Next.js. SEO, швидкість, адаптив. Безкоштовна консультація.',
          'Websites end-to-end: landings from $150, corporate sites and Next.js e-commerce from $400. SEO, speed, responsive. Free consultation.',
          'Strony pod klucz: landingi od $150, serwisy firmowe i e-commerce Next.js od $400. SEO, szybkość, RWD. Darmowa konsultacja.',
          'Сайты под ключ: лендинги от $150, корпоративные сайты и e-commerce от $400 на Next.js. SEO, скорость, адаптив. Бесплатная консультация.'
        ),
        openGraphTitle: u(
          'Розробка сайтів під ключ',
          'Website development end-to-end',
          'Strony pod klucz',
          'Разработка сайтов под ключ'
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
          'Дизайн логотипу, айдентика та UI/UX для сайтів і застосунків',
          'Logo, brand identity & UI/UX for web and apps',
          'Logo, identyfikacja i UI/UX dla stron i aplikacji',
          'Дизайн логотипа, айдентика и UI/UX для сайтов и приложений'
        ),
        description: u(
          'Логотип, фірмовий стиль і UI/UX у Figma: брендбук, макети під розробку та друк. Безкоштовна консультація.',
          'Logo, brand system, and UI/UX in Figma: brand books and dev-ready mockups. Free consultation.',
          'Logo, system wizualny i UI/UX w Figmie: brand book i makety pod dev. Darmowa konsultacja.',
          'Логотип, фирменный стиль и UI/UX в Figma: брендбук и макеты под разработку. Бесплатная консультация.'
        ),
        openGraphTitle: u(
          'Дизайн та айдентика для бізнесу',
          'Design & brand identity for business',
          'Design i identyfikacja dla biznesu',
          'Дизайн и айдентика для бизнеса'
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
  if (!id) return { title: { absolute: 'TeleBots' } };

  const seo = getServiceSEO(id, lang);
  if (!seo.title) return { title: { absolute: 'TeleBots' } };

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
