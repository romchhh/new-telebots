import { Metadata } from 'next';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getServiceKeyForTranslations, SERVICE_IDS, type ServiceId } from './metadata';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

/** Семантичне ядро для title, description, keywords по послузі та мові (розділи 2–5 SEMANTIC-CORE.md) */
function getServiceSEO(serviceId: ServiceId, lang: Language): { title: string; description: string; keywords: string } {
  const u = (t: string, e: string, p: string, r: string) => (lang === 'uk' ? t : lang === 'en' ? e : lang === 'pl' ? p : r);
  const servicesLabel = u('Послуги', 'Services', 'Usługi', 'Услуги');
  const utp = u('Швидкий старт за 24 години. 200+ проєктів.', 'Quick start in 24 hours. 200+ projects.', 'Szybki start w 24 godziny. 200+ projektów.', 'Быстрый старт за 24 часа. 200+ проектов.');

  switch (serviceId) {
    case 'chatbots':
      return {
        title: u('Розробка телеграм ботів та чат-ботів', 'Telegram Bot & Chatbot Development', 'Rozwój botów Telegram i chatbotów', 'Разработка телеграм ботов и чат-ботов') + ` | ${servicesLabel} — TeleBots`,
        description: u(
          'Замовити телеграм бота, чат-бот для бізнесу. Розробка бота з оплатою, інтеграція з CRM. ' + utp,
          'Order Telegram bot, chatbot for business. Bot with payment, CRM integration. ' + utp,
          'Zamów bota Telegram, chatbot dla biznesu. Bot z płatnościami, integracja CRM. ' + utp,
          'Заказать телеграм бота, чат-бот для бизнеса. Бот с оплатой, интеграция с CRM. ' + utp
        ),
        keywords: u(
          'замовлення телеграм бота, розробка телеграм бота ціна, створити бота для Telegram, чат-бот для бізнесу, телеграм бот з оплатою, розробка бота під ключ, інтеграція бота з CRM, AI чат-бот',
          'order telegram bot, telegram bot development price, create Telegram bot, chatbot for business, telegram bot with payment, turnkey bot development, bot CRM integration, AI chatbot',
          'zamówienie bota Telegram, cena rozwoju bota, stworzyć bota Telegram, chatbot dla biznesu, bot z płatnościami, rozwój pod klucz, integracja CRM',
          'заказать телеграм бота, разработка телеграм бота цена, создать бота Telegram, чат-бот для бизнеса, телеграм бот с оплатой, разработка под ключ, интеграция с CRM, AI чат-бот'
        ),
      };
    case 'websites':
      return {
        title: u('Розробка сайту під ключ, веб-сайти', 'Website Development Turnkey', 'Strona pod klucz, rozwój stron', 'Разработка сайта под ключ, веб-сайты') + ` | ${servicesLabel} — TeleBots`,
        description: u(
          'Розробка сайту під ключ, створити інтернет-магазин, лендінг, корпоративний сайт. Веб-розробка для бізнесу. ' + utp,
          'Website development turnkey, create online store, landing, corporate site. Web development for business. ' + utp,
          'Strona pod klucz, sklep internetowy, landing, strona firmowa. Rozwój dla biznesu. ' + utp,
          'Разработка сайта под ключ, создать интернет-магазин, лендинг, корпоративный сайт. Веб-разработка для бизнеса. ' + utp
        ),
        keywords: u(
          'розробка сайту під ключ, створити інтернет-магазин, лендінг на замовлення, веб-розробка, сайт для бізнесу, інтернет-магазин з оплатою, розробка корпоративного сайту',
          'website development turnkey, create online store, landing page, web development, site for business, e-commerce with payment, corporate website',
          'strona pod klucz, sklep internetowy, landing, rozwój stron, strona dla biznesu, e-commerce',
          'разработка сайта под ключ, создать интернет-магазин, лендинг на заказ, веб-разработка, сайт для бизнеса, интернет-магазин с оплатой, корпоративный сайт'
        ),
      };
    case 'parsers':
      return {
        title: u('Розробка парсера на замовлення', 'Parser Development on Request', 'Rozwój parsera na zamówienie', 'Разработка парсера на заказ') + ` | ${servicesLabel} — TeleBots`,
        description: u(
          'Розробка парсера на замовлення. Парсер даних з сайтів, автоматизація збору даних, парсер для маркетплейсу. ' + utp,
          'Parser development on request. Data parser from sites, data collection automation, marketplace parser. ' + utp,
          'Rozwój parsera na zamówienie. Parser danych ze stron, automatyzacja zbierania, parser dla marketplace. ' + utp,
          'Разработка парсера на заказ. Парсер данных с сайтов, автоматизация сбора данных, парсер для маркетплейса. ' + utp
        ),
        keywords: u(
          'розробка парсера на замовлення, парсер даних з сайтів, збір даних з інтернету, автоматизація збору даних, парсер для маркетплейсу',
          'parser development on request, data parser from websites, web data collection, data collection automation, marketplace parser',
          'rozwój parsera na zamówienie, parser danych ze stron, zbieranie danych, automatyzacja zbierania, parser dla marketplace',
          'разработка парсера на заказ, парсер данных с сайтов, сбор данных из интернета, автоматизация сбора данных, парсер для маркетплейса'
        ),
      };
    case 'design':
      return {
        title: u('Дизайн логотипу, UI/UX, фірмовий стиль', 'Logo & UI/UX Design, Brand Identity', 'Design logo, UI/UX, identyfikacja', 'Дизайн логотипа, UI/UX, фирменный стиль') + ` | ${servicesLabel} — TeleBots`,
        description: u(
          'Дизайн логотипу, фірмовий стиль бренду, UI/UX дизайн, айдентика, прототип сайту в Figma. ' + utp,
          'Logo design, brand identity, UI/UX design, identity, website prototype in Figma. ' + utp,
          'Projekt logo, identyfikacja wizualna, UI/UX, prototyp w Figma. ' + utp,
          'Дизайн логотипа, фирменный стиль бренда, UI/UX дизайн, айдентика, прототип сайта в Figma. ' + utp
        ),
        keywords: u(
          'дизайн логотипу, фірмовий стиль бренду, UI/UX дизайн, дизайн сайту та додатків, айдентика компанії, прототип сайту Figma',
          'logo design, brand identity, UI/UX design, website and app design, company identity, Figma website prototype',
          'projekt logo, identyfikacja wizualna, UI/UX, design stron i aplikacji, Figma prototyp',
          'дизайн логотипа, фирменный стиль бренда, UI/UX дизайн, дизайн сайта и приложений, айдентика компании, прототип Figma'
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
    }),
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
