import type { Language } from '@/components/translations';

/** Uk-first audit map: one primary intent per URL (see docs/SEO_CONTENT_PLAN.md). */
export type SeoRegistryPageId =
  | 'home'
  | 'about'
  | 'contact'
  | 'services'
  | 'portfolio'
  | 'pricing'
  | 'offer';

export type SeoPageAuditUk = {
  path: string;
  primaryKeyword: string;
  h1Source: string;
};

export const SEO_UK_PAGE_AUDIT: Record<SeoRegistryPageId, SeoPageAuditUk> = {
  home: {
    path: '/uk',
    primaryKeyword: 'замовити розробку сайтів і telegram-ботів',
    h1Source: 'components/HeroSectionContent.tsx (translations.hero)',
  },
  about: {
    path: '/uk/about',
    primaryKeyword: 'про нас розробка ботів і сайтів',
    h1Source: 'AboutPageClient / translations.about',
  },
  contact: {
    path: '/uk/contact',
    primaryKeyword: 'контакти замовити розробку',
    h1Source: 'ContactPageClient / translations.contact',
  },
  services: {
    path: '/uk/services',
    primaryKeyword: 'послуги telegram-боти та сайти',
    h1Source: 'ServicesHubHero / translations.services',
  },
  portfolio: {
    path: '/uk/portfolio',
    primaryKeyword: 'портфоліо кейси telegram-ботів і сайтів',
    h1Source: 'components/Portfolio.tsx → translations.portfolio.title (≈ meta title)',
  },
  pricing: {
    path: '/uk/pricing',
    primaryKeyword: 'розробка чат-ботів ціна',
    h1Source: 'lib/pricingPageCopy.ts → h1',
  },
  offer: {
    path: '/uk/offer',
    primaryKeyword: 'сайт за $200 прототип',
    h1Source: 'lib/offerPageCopy.ts → heroTitle',
  },
};

type LocalizedTriple = Record<Language, string>;

type HubSeoBlock = {
  titles: LocalizedTriple;
  descriptions: LocalizedTriple;
  keywords: LocalizedTriple;
};

const HUB_SEO: Record<'home' | 'about' | 'contact' | 'services' | 'portfolio', HubSeoBlock> = {
  home: {
    titles: {
      uk: 'Замовити розробку сайтів і Telegram-ботів | від $100',
      en: 'Order Websites & Telegram Bots | from $100',
      pl: 'Zamów strony i boty Telegram | od $100',
      ru: 'Заказать сайты и Telegram-ботов | от $100',
    },
    descriptions: {
      uk: 'Розробка Telegram-ботів від $100, лендінгів від $150, інтернет-магазинів від $400. Чат-бот для бізнесу, CRM, e-commerce. 200+ проєктів, безкоштовна консультація, старт за 24 год.',
      en: 'Telegram bots from $100, landings from $150, online stores from $400. Business chatbots, CRM, e-commerce. 200+ projects, free consultation, start in 24h.',
      pl: 'Boty Telegram od $100, landingi od $150, sklepy od $400. Chatboty biznesowe, CRM, e-commerce. 200+ projektów, darmowa konsultacja, start w 24h.',
      ru: 'Telegram-боты от $100, лендинги от $150, интернет-магазины от $400. Чат-бот для бизнеса, CRM, e-commerce. 200+ проектов, бесплатная консультация, старт за 24 часа.',
    },
    keywords: {
      uk: 'розробка сайтів, створення сайту під ключ, веб-розробка, лендинг замовити, інтернет-магазин під ключ, телеграм бот розробка, розробка чат-ботів, чат-бот для бізнесу, чат бот ціна, замовити телеграм бота, автоматизація бізнесу, AI чат-бот, TeleBots, TeleBots.site, TeleBots Україна, 200+ проєктів',
      en: 'website development, landing page design, e-commerce development, corporate website, SEO web development, telegram bot development, chatbot for business, business automation, TeleBots, TeleBots.site, TeleBots Ukraine, web development Ukraine, AI chatbot, 200+ projects',
      pl: 'rozwój stron internetowych, strona firmowa, sklep online, landing page, SEO strony, rozwój botów Telegram, chatboty, automatyzacja biznesu, TeleBots, TeleBots.site, TeleBots Ukraina, tworzenie stron www, chatbot AI, 200+ projektów',
      ru: 'разработка сайтов, создание сайта под ключ, веб-разработка, лендинг заказать, интернет-магазин под ключ, SEO продвижение сайта, разработка телеграм ботов, чат-боты для бизнеса, автоматизация бизнеса, TeleBots, TeleBots.site, TeleBots Украина, AI чат-бот, 200+ проектов',
    },
  },
  about: {
    titles: {
      uk: 'Про нас | Розробка ботів і сайтів для бізнесу',
      en: 'About us | Bot and website development for business',
      pl: 'O nas | Boty i strony dla biznesu',
      ru: 'О нас | Разработка ботов и сайтов для бизнеса',
    },
    descriptions: {
      uk: 'Досвід та автоматизація бізнесу. Команда TeleBots: розробка телеграм ботів, чат-ботів, сайтів. 200+ проєктів. Безкоштовна консультація.',
      en: 'Experience and business automation. TeleBots team: Telegram bots, chatbots, websites development. 200+ projects. Free consultation.',
      pl: 'Doświadczenie i automatyzacja biznesu. Zespół TeleBots: boty Telegram, chatboty, strony. 200+ projektów. Bezpłatna konsultacja.',
      ru: 'Опыт и автоматизация бизнеса. Команда TeleBots: разработка телеграм ботов, чат-ботов, сайтов. 200+ проектов. Бесплатная консультация.',
    },
    keywords: {
      uk: 'про нас, TeleBots, розробка ботів для бізнесу, команда розробників, автоматизація бізнесу, досвід, консультація, телеграм бот розробка, веб-розробка, цифрові рішення',
      en: 'about us, TeleBots, bot development for business, development team, business automation, experience, consultation, telegram bot development, web development, digital solutions',
      pl: 'o nas, TeleBots, boty dla biznesu, zespół deweloperów, automatyzacja biznesu, doświadczenie, konsultacja, rozwój botów Telegram, rozwój stron, rozwiązania cyfrowe',
      ru: 'о нас, TeleBots, разработка ботов для бизнеса, команда разработчиков, автоматизация бизнеса, опыт, консультация, разработка телеграм ботов, веб-разработка, цифровые решения',
    },
  },
  contact: {
    titles: {
      uk: 'Контакти | Замовити розробку та консультацію',
      en: 'Contact | Order development & consultation',
      pl: 'Kontakt | Zamów rozwój i konsultację',
      ru: 'Контакты | Заказать разработку и консультацию',
    },
    descriptions: {
      uk: 'Замовити розробку телеграм бота або сайту. Безкоштовна консультація, швидкий відгук. Telegram, WhatsApp, Email. Київ, Україна.',
      en: 'Order Telegram bot or website development. Free consultation, quick response. Telegram, WhatsApp, Email.',
      pl: 'Zamów rozwój bota Telegram lub strony. Bezpłatna konsultacja, szybka odpowiedź. Telegram, WhatsApp.',
      ru: 'Заказать разработку телеграм бота или сайта. Бесплатная консультация, быстрый ответ. Telegram, WhatsApp, Email.',
    },
    keywords: {
      uk: 'контакти, замовити розробку, консультація, залишити заявку, телеграм, whatsapp, TeleBots, Київ, Україна',
      en: 'contact, order development, consultation, leave request, telegram, whatsapp, TeleBots',
      pl: 'kontakt, zamów rozwój, konsultacja, zostaw wniosek, telegram, whatsapp, TeleBots',
      ru: 'контакты, заказать разработку, консультация, оставить заявку, телеграм, whatsapp, TeleBots',
    },
  },
  services: {
    titles: {
      uk: 'Послуги: Telegram-боти, чат-боти та сайти під ключ',
      en: 'Services: Telegram Bots, Chatbots & Websites',
      pl: 'Usługi: boty Telegram, chatboty i strony',
      ru: 'Услуги: Telegram-боты, чат-боты и сайты под ключ',
    },
    descriptions: {
      uk: 'Замовити розробку Telegram-бота від $100, лендінгу від $150, інтернет-магазину від $400, UI/UX від $150. Чат-боти з оплатою, CRM, e-commerce на Next.js. Безкоштовна консультація, 200+ проєктів.',
      en: 'Telegram bots from $100, landings from $150, online stores from $400, UI/UX from $150. Chatbots with payments, CRM, Next.js e-commerce. Free consultation, 200+ projects.',
      pl: 'Boty Telegram od $100, landingi od $150, sklepy od $400, UI/UX od $150. Chatboty z płatnościami, CRM, e-commerce Next.js. Darmowa konsultacja, 200+ projektów.',
      ru: 'Telegram-боты от $100, лендинги от $150, интернет-магазины от $400, UI/UX от $150. Чат-боты с оплатой, CRM, e-commerce на Next.js. Бесплатная консультация, 200+ проектов.',
    },
    keywords: {
      uk: 'послуги TeleBots, розробка Telegram-ботів, замовити телеграм бота, чат-бот для бізнесу, чат бот ціна, розробка чат ботів ціна, розробка сайту під ключ, інтернет-магазин під ключ, UI/UX, автоматизація бізнесу',
      en: 'services, order telegram bot, telegram bot development price, create Telegram bot, chatbot for business, website development turnkey, create online store, parser development, logo design, UI/UX design, business automation',
      pl: 'usługi, zamówienie bota Telegram, cena rozwoju bota, stworzyć bota Telegram, chatbot dla biznesu, strona pod klucz, sklep internetowy, rozwój parsera, projekt logo, UI/UX, automatyzacja biznesu',
      ru: 'услуги, заказать телеграм бота, разработка телеграм бота цена, создать бота Telegram, чат-бот для бизнеса, разработка сайта под ключ, создать интернет-магазин, разработка парсера, дизайн логотипа, UI/UX, автоматизация бизнеса',
    },
  },
  portfolio: {
    titles: {
      uk: 'Портфоліо: кейси Telegram-ботів і сайтів',
      en: 'Website & Telegram Bot Development Cases',
      pl: 'Przypadki: strony www i boty Telegram',
      ru: 'Кейсы разработки сайтов и телеграм ботов',
    },
    descriptions: {
      uk: 'Реальні проєкти: Telegram-боти, сайти та інтернет-магазини з оплатою та інтеграціями. E-commerce, автоматизація. 200+ кейсів TeleBots.',
      en: 'Cases: websites, online stores, landing pages; Telegram bots and chatbots. E-commerce, payment bots. 200+ projects.',
      pl: 'Realizacje: strony, sklepy, landingi; boty Telegram i chatboty. E-commerce. 200+ projektów.',
      ru: 'Кейсы: сайты, интернет-магазины, лендинги; Telegram-боты и чат-боты. 200+ проектов.',
    },
    keywords: {
      uk: 'портфоліо веб студії, кейси розробки сайтів, приклади Telegram-ботів, інтернет-магазин під ключ, лендинг кейс, чат-бот для бізнесу, веб-розробка Україна, TeleBots',
      en: 'website development portfolio, landing page examples, e-commerce cases, telegram bot cases, chatbot, web development cases, TeleBots',
      pl: 'portfolio stron www, przykłady sklepów online, boty Telegram, chatbot, case study strony, TeleBots',
      ru: 'кейсы разработки сайтов, портфолио веб-разработки, телеграм бот, чат-бот, TeleBots',
    },
  },
};

export function getHubPageSeo(page: keyof typeof HUB_SEO, lang: Language) {
  const block = HUB_SEO[page];
  return {
    title: block.titles[lang],
    description: block.descriptions[lang],
    keywords: block.keywords[lang],
  };
}
