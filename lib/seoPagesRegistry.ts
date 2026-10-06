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
    h1Source: 'Services hub — translations; деталі: lib/servicePageSeoMeta.ts',
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
      uk: 'Робимо Telegram-боти від $100, лендінги від $150 і магазини від $400. Напишіть, що треба зібрати — на консультації скажемо строк і що входить у роботу.',
      en: 'We build Telegram bots from $100, landings from $150, and stores from $400. Tell us the job — on a call we say what is included and how long it takes.',
      pl: 'Robimy boty Telegram od $100, landingi od $150 i sklepy od $400. Napisz, co trzeba złożyć — na rozmowie podamy termin i zakres.',
      ru: 'Делаем Telegram-ботов от $100, лендинги от $150 и магазины от $400. Напишите задачу — на консультации скажем срок и что входит в работу.',
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
      uk: 'TeleBots — студія, яка збирає сайти й Telegram-боти. За плечима 200+ запусків: від запису клієнтів до магазину з оплатою. Можна почати з короткого дзвінка.',
      en: 'TeleBots builds websites and Telegram bots. 200+ launches, from booking flows to stores with checkout. Start with a short call if you want a straight answer.',
      pl: 'TeleBots składa strony i boty Telegram. Za nami 200+ wdrożeń: od zapisu klientów po sklep z płatnością. Można zacząć od krótkiej rozmowy.',
      ru: 'TeleBots собирает сайты и Telegram-ботов. За плечами 200+ запусков: от записи клиентов до магазина с оплатой. Можно начать с короткого звонка.',
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
      uk: 'Напишіть у Telegram або WhatsApp, що хочете запустити: бот, сайт чи дизайн. Відповідаємо з Києва, на дзвінку можна безкоштовно прикинути обсяг.',
      en: 'Message us on Telegram or WhatsApp with what you want to launch: a bot, a site, or design. We reply from Kyiv and can sketch the scope on a free call.',
      pl: 'Napisz na Telegram lub WhatsApp, co chcesz uruchomić: bota, stronę albo design. Odpowiadamy i na rozmowie można bezpłatnie oszacować zakres.',
      ru: 'Напишите в Telegram или WhatsApp, что хотите запустить: бота, сайт или дизайн. Отвечаем из Киева, на звонке можно бесплатно прикинуть объём.',
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
      uk: 'Послуги: боти, сайти та дизайн',
      en: 'Services: bots, websites, and design',
      pl: 'Usługi: boty, strony i design',
      ru: 'Услуги: боты, сайты и дизайн',
    },
    descriptions: {
      uk: 'Три напрями: Telegram-бот від $100, сайт від $150, логотип і макети в Figma. Оберіть сторінку або напишіть, що саме треба зібрати.',
      en: 'Three lines of work: a Telegram bot from $100, a site from $150, a logo and layouts in Figma. Open a page or tell us what you need built.',
      pl: 'Trzy kierunki: bot Telegram od $100, strona od $150, logo i makiety w Figma. Wybierz stronę albo napisz, co trzeba złożyć.',
      ru: 'Три направления: Telegram-бот от $100, сайт от $150, логотип и макеты в Figma. Откройте страницу или напишите, что нужно собрать.',
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
      uk: 'Кейси, які вже в проді: магазини, лендінги й боти з оплатою. Можна відкрити живий сайт або розібрати, як зібраний сценарій.',
      en: 'Work that is already live: stores, landings, and bots that take payment. Open the site or see how the flow was built.',
      pl: 'Realizacje, które już działają: sklepy, landingi i boty z płatnością. Można otworzyć stronę albo zobaczyć, jak złożono scenariusz.',
      ru: 'Кейсы, которые уже в проде: магазины, лендинги и боты с оплатой. Можно открыть живой сайт или разобрать, как собран сценарий.',
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
