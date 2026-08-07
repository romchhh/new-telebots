type Lang = 'uk' | 'en' | 'pl' | 'ru';

export type PortfolioCardCategory = 'chatbots' | 'websites';

export type PortfolioCardCopy = {
  title: string;
  subtitle: string;
  tags: string[];
  highlights: string;
};

export type PortfolioCard = {
  id: string;
  image: string;
  category: PortfolioCardCategory;
  liveUrl?: string;
  copy: Record<Lang, PortfolioCardCopy>;
};

const t = (
  title: string,
  subtitleUk: string,
  subtitleEn: string,
  tagsUk: string[],
  tagsEn: string[],
  highlightsUk: string,
  highlightsEn: string,
  subtitlePl?: string,
  subtitleRu?: string,
  tagsPl?: string[],
  tagsRu?: string[],
  highlightsPl?: string,
  highlightsRu?: string
): Record<Lang, PortfolioCardCopy> => ({
  uk: { title, subtitle: subtitleUk, tags: tagsUk, highlights: highlightsUk },
  en: { title, subtitle: subtitleEn, tags: tagsEn, highlights: highlightsEn },
  pl: {
    title,
    subtitle: subtitlePl || subtitleEn,
    tags: tagsPl || tagsEn,
    highlights: highlightsPl || highlightsEn,
  },
  ru: {
    title,
    subtitle: subtitleRu || subtitleEn,
    tags: tagsRu || tagsEn,
    highlights: highlightsRu || highlightsEn,
  },
});

/** Активні картки хабу /portfolio — порядок відображення. */
export const PORTFOLIO_CARDS: PortfolioCard[] = [
  {
    id: 'tradeground-bot',
    image: '/portfolio/portfolio-tradeground-bot.jpg',
    category: 'chatbots',
    liveUrl: 'https://t.me/TradeGroundBot',
    copy: t(
      'TRADEGROUND',
      'Маркетплейс у Telegram: бот + міні-додаток',
      'Telegram marketplace: bot + mini app',
      ['Telegram', 'Mini App', 'Marketplace'],
      ['Telegram', 'Mini App', 'Marketplace'],
      'Каталог • Оплата • Профілі продавців • Адмінка',
      'Catalog • Payments • Seller profiles • Admin panel',
      'Marketplace w Telegram: bot + miniapp',
      'Маркетплейс в Telegram: бот + мини-приложение',
      ['Telegram', 'Mini App', 'Marketplace'],
      ['Telegram', 'Mini App', 'Marketplace'],
      'Katalog • Płatności • Profile • Panel admina',
      'Каталог • Оплата • Профили • Админка'
    ),
  },
  {
    id: '13vplus',
    image: '/portfolio/portfolio-13vplus.jpg',
    category: 'websites',
    liveUrl: 'https://13vplus.com/',
    copy: t(
      '13VPLUS',
      'Інтернет-магазин бренду жіночого одягу',
      'E-commerce for a women’s fashion brand',
      ['E-commerce', 'Fashion', 'Next.js'],
      ['E-commerce', 'Fashion', 'Next.js'],
      'WayForPay • Crypto • SEO • Meta Pixel',
      'WayForPay • Crypto • SEO • Meta Pixel',
      'Sklep internetowy marki odzieżowej',
      'Интернет-магазин бренда женской одежды'
    ),
  },
  {
    id: 'dr-tolstikova-bot',
    image: '/portfolio/portfolio-dr-tolstikova-bot.jpg',
    category: 'chatbots',
    liveUrl: 'https://t.me/FoodByDrTolstikovaBot',
    copy: t(
      'DR. TOLSTIKOVA',
      'Автоматизація підписок і доступу до ком’юніті',
      'Subscription and community access automation',
      ['Telegram', 'Subscriptions', 'WayForPay'],
      ['Telegram', 'Subscriptions', 'WayForPay'],
      'Підписки • Рекурентні платежі • Адмінка • Excel-звіти',
      'Subscriptions • Recurring payments • Admin • Excel reports',
      'Automatyzacja subskrypcji i dostępu do społeczności',
      'Автоматизация подписок и доступа к комьюнити'
    ),
  },
  {
    id: 'nieznany-piekarz',
    image: '/portfolio/portfolio-nieznany-piekarz.jpg',
    category: 'websites',
    liveUrl: 'https://nieznanypiekarz.com/pl',
    copy: t(
      'NIEZNANY PIEKARZ',
      'Платформа запису на кондитерські майстер-класи',
      'Booking platform for pastry masterclasses',
      ['Website', 'Booking', 'Przelewy24'],
      ['Website', 'Booking', 'Przelewy24'],
      'Оплата онлайн • Карта локацій • PL/EN • Telegram-алерти',
      'Online pay • Locations map • PL/EN • Telegram alerts',
      'Platforma zapisów na warsztaty cukiernicze',
      'Платформа записи на кондитерские мастер-классы'
    ),
  },
  {
    id: 'applum-bot',
    image: '/portfolio/portfolio-applum-bot.jpg',
    category: 'chatbots',
    liveUrl: 'https://t.me/ApplumBot',
    copy: t(
      'APPLUMBOT',
      'Автоматизація Apple-сервісу',
      'Apple service business automation',
      ['Telegram', 'Automation', 'CRM'],
      ['Telegram', 'Automation', 'CRM'],
      'Trade-In • Ремонт • Реферали • +40% конверсії',
      'Trade-In • Repairs • Referrals • +40% conversion',
      'Automatyzacja serwisu Apple',
      'Автоматизация Apple-сервиса'
    ),
  },
  {
    id: 'flixmarket',
    image: '/portfolio/portfolio-flixmarket.jpg',
    category: 'chatbots',
    liveUrl: 'https://t.me/FlixMarketBot',
    copy: t(
      'FLIX MARKET',
      'Бот для оформлення підписок на сервіси',
      'Bot for subscription checkout',
      ['Telegram', 'Subscriptions', 'Monobank'],
      ['Telegram', 'Subscriptions', 'Monobank'],
      'Каталог сервісів • Monobank • Адмінка замовлень',
      'Service catalog • Monobank • Orders admin',
      'Bot do subskrypcji usług',
      'Бот оформления подписок'
    ),
  },
  {
    id: 'chars-kyiv',
    image: '/portfolio/portfolio-chars-kyiv.jpg',
    category: 'websites',
    liveUrl: 'https://charsua.com/',
    copy: t(
      'CHARS',
      'E-commerce платформа з фільтрами та Новою Поштою',
      'E-commerce with filters and Nova Poshta',
      ['E-commerce', 'Next.js', 'Nova Poshta'],
      ['E-commerce', 'Next.js', 'Nova Poshta'],
      'Каталог • Оплата онлайн • Адмінка • Telegram-алерти',
      'Catalog • Online pay • Admin • Telegram alerts',
      'Platforma e-commerce z filtrami i Nova Poshta',
      'E-commerce платформа с фильтрами и Новой Почтой'
    ),
  },
  {
    id: 'smart-bodycourse-bot',
    image: '/portfolio/portfolio-smart-bodycourse-bot.jpg',
    category: 'chatbots',
    liveUrl: 'https://t.me/Smart_BodyCourse_Bot',
    copy: t(
      'SMART BODY',
      'EdTech-бот: продаж і видача курсу в Telegram',
      'EdTech bot: course sales and delivery in Telegram',
      ['Telegram', 'EdTech', 'Monopay'],
      ['Telegram', 'EdTech', 'Monopay'],
      'Онбординг • Monopay • Миттєва видача контенту',
      'Onboarding • Monopay • Instant content delivery',
      'Bot EdTech: sprzedaż i wydanie kursu',
      'EdTech-бот: продажа и выдача курса'
    ),
  },
  {
    id: 'cosmy',
    image: '/portfolio/portfolio-cosmy.jpg',
    category: 'chatbots',
    liveUrl: 'https://t.me/Cosmy_bot',
    copy: t(
      'COSMY',
      'Бот інтернет-магазину: замовлення, підтримка, відгуки',
      'E-commerce bot: orders, support, reviews',
      ['Telegram', 'E-commerce', 'Google Sheets'],
      ['Telegram', 'E-commerce', 'Google Sheets'],
      '400+ клієнтів • +40% зацікавленості • Історія замовлень',
      '400+ clients • +40% engagement • Order history',
      'Bot sklepu: zamówienia, support, opinie',
      'Бот интернет-магазина: заказы, поддержка, отзывы'
    ),
  },
  {
    id: 'normalnoauto',
    image: '/portfolio/portfolio-normalnoauto.jpg',
    category: 'chatbots',
    liveUrl: 'https://t.me/NormalnoAutoBot',
    copy: t(
      'NORMALNO AUTO',
      'Підбір авто на аукціонах США за 30 секунд',
      'US auction car search in 30 seconds',
      ['Telegram', 'Auto', 'Auctions'],
      ['Telegram', 'Auto', 'Auctions'],
      'Copart • IAAI • Автоліди • 2 кліки до заявки',
      'Copart • IAAI • Auto leads • 2 taps to request',
      'Dobór aut z aukcji USA w 30 sekund',
      'Подбор авто на аукционах США за 30 секунд'
    ),
  },
  {
    id: 'newlineschool',
    image: '/portfolio/portfolio-newlineschool.jpg',
    category: 'websites',
    liveUrl: 'https://newstudyline.com.ua/',
    copy: t(
      'NEW STUDY LINE',
      'Сайт школи англійської під лідогенерацію',
      'English school site built for lead gen',
      ['Education', 'SEO', 'Website'],
      ['Education', 'SEO', 'Website'],
      'Пробні уроки • Тест рівня • SEO-блог',
      'Trial lessons • Level test • SEO blog',
      'Strona szkoły angielskiego pod lead gen',
      'Сайт школы английского под лидогенерацию'
    ),
  },
  {
    id: 'butenko-fit',
    image: '/portfolio/portfolio-butenko-fit.jpg',
    category: 'websites',
    liveUrl: 'https://www.butenkofit.com/',
    copy: t(
      'BUTENKOFIT',
      'Сайт сертифікованої тренерки з пілатесу',
      'Website for a certified pilates coach',
      ['Fitness', 'Personal brand', 'Website'],
      ['Fitness', 'Personal brand', 'Website'],
      'Окремі сторінки програм • Повітря • Продаж 24/7',
      'Program pages • Breathing space • Sales 24/7',
      'Strona trenerki pilates',
      'Сайт тренера по пилатесу'
    ),
  },
  {
    id: 'wesauto',
    image: '/portfolio/portfolio-wesauto.jpg',
    category: 'websites',
    liveUrl: 'https://westautousa.com.ua/',
    copy: t(
      'WEST AUTO',
      'Пригін авто зі США — 70% після прибуття в Україну',
      'US car import — 70% paid after arrival in Ukraine',
      ['Auto', 'Import', 'Website'],
      ['Auto', 'Import', 'Website'],
      'Кейси • Відеовідгуки • Форми заявок',
      'Cases • Video reviews • Lead forms',
      'Sprowadzanie aut z USA — 70% po przyjeździe',
      'Пригон авто из США — 70% после прибытия'
    ),
  },
  {
    id: 'carbit',
    image: '/portfolio/portfolio-carbit.jpg',
    category: 'websites',
    liveUrl: 'https://carbit.info/',
    copy: t(
      'CARBIT',
      'SaaS-моніторинг автооголошень AUTO.RIA, OLX, Telegram',
      'SaaS monitoring for AUTO.RIA, OLX, Telegram listings',
      ['SaaS', 'Auto', 'Website'],
      ['SaaS', 'Auto', 'Website'],
      'Фільтри • Сповіщення • Тарифи',
      'Filters • Alerts • Pricing',
      'SaaS monitoringu ogłoszeń AUTO.RIA, OLX, Telegram',
      'SaaS-мониторинг автообъявлений AUTO.RIA, OLX, Telegram'
    ),
  },
  {
    id: 'movna-test',
    image: '/portfolio/portfolio-movna-test.jpg',
    category: 'websites',
    liveUrl: 'https://levelup.movna.online/placement_test',
    copy: t(
      'LEVEL UP TEST',
      'Інтерактивний placement-тест рівня англійської',
      'Interactive English placement test',
      ['Education', 'Landing', 'UX'],
      ['Education', 'Landing', 'UX'],
      'Покроковий тест • Авторівень • Адаптив',
      'Step-by-step test • Auto level • Responsive',
      'Interaktywny test poziomu angielskiego',
      'Интерактивный placement-тест английского'
    ),
  },
  {
    id: 'wayofprocessing',
    image: '/portfolio/portfolio-wayofprocessing.jpg',
    category: 'websites',
    liveUrl: 'https://wayofprocessing.com/',
    copy: t(
      'WAY OF PROCESSING',
      'Сайт міжнародного платіжного процесингу (Stripe)',
      'International payment processing site (Stripe)',
      ['Fintech', 'B2B', 'Website'],
      ['Fintech', 'B2B', 'Website'],
      'Підключення • Переваги • Кейси • Консультація',
      'Onboarding • Benefits • Cases • Consult',
      'Strona międzynarodowego processingu płatności',
      'Сайт международного платёжного процессинга'
    ),
  },
  {
    id: '13pm',
    image: '/portfolio/portfolio-13pm.jpg',
    category: 'websites',
    liveUrl: 'https://13pm.com.ua/',
    copy: t(
      '13PM TACTIC',
      'E-commerce бренду тактичного одягу',
      'E-commerce for a tactical apparel brand',
      ['E-commerce', 'Fashion', 'Tactical'],
      ['E-commerce', 'Fashion', 'Tactical'],
      'Каталог • Лінійки • Акції • Checkout',
      'Catalog • Lines • Promos • Checkout',
      'E-commerce marki odzieży taktycznej',
      'E-commerce бренда тактической одежды'
    ),
  },
  {
    id: 'kls',
    image: '/portfolio/portfolio-kls.jpg',
    category: 'websites',
    copy: t(
      'KLS',
      'Логістика: доставка з Китаю в Україну та світом',
      'Logistics: China to Ukraine and worldwide',
      ['Logistics', 'B2B', 'Website'],
      ['Logistics', 'B2B', 'Website'],
      'Контакт • Розрахунок вартості • Мобільний hero',
      'Contact • Cost estimate • Mobile hero',
      'Logistyka: Chiny → Ukraina i świat',
      'Логистика: Китай → Украина и мир'
    ),
  },
  {
    id: 'emvi-digital',
    image: '/portfolio/portfolio-emvi-digital.jpg',
    category: 'websites',
    liveUrl: 'https://emvi-digital.vercel.app/',
    copy: t(
      'EMVI DIGITAL',
      'Сайт digital-агенції: контент, брендинг, e-commerce',
      'Digital agency site: content, branding, e-commerce',
      ['Agency', 'Website', 'Brand'],
      ['Agency', 'Website', 'Brand'],
      'Послуги • Кейси • Пакети • Заявки',
      'Services • Cases • Packages • Leads',
      'Strona agencji: content, branding, e-commerce',
      'Сайт digital-агентства: контент, брендинг, e-com'
    ),
  },
  {
    id: 'litun-edu',
    image: '/portfolio/portfolio-litun-edu.jpg',
    category: 'websites',
    liveUrl: 'https://www.consultlitun.com/',
    copy: t(
      'TURBO EDUCATION',
      'Особистий бренд Іллі Літуна та освітня екосистема',
      'Illia Litun personal brand & education ecosystem',
      ['Education', 'Personal brand'],
      ['Education', 'Personal brand'],
      'Експертність • Social proof • Запис на консультацію',
      'Expertise • Social proof • Book a consult',
      'Marka osobista Illi Lituna i ekosystem edukacyjny',
      'Личный бренд Ильи Литуна и образовательная экосистема'
    ),
  },
  {
    id: 'zavadska',
    image: '/portfolio/portfolio-zavadska.jpg',
    category: 'websites',
    liveUrl: 'https://www.anastasiiazavadska.com/',
    copy: t(
      'ZAVADSKA',
      'Сайт психологині Анастасії Завадської',
      'Psychologist Anastasiia Zavadska website',
      ['Psychology', 'Personal brand'],
      ['Psychology', 'Personal brand'],
      'Довіра • Онлайн-запис • Експертність',
      'Trust • Online booking • Expertise',
      'Strona psycholożki Anastasii Zavadskiej',
      'Сайт психологини Анастасии Завадской'
    ),
  },
  {
    id: 'dente',
    image: '/portfolio/portfolio-dente.jpg',
    category: 'websites',
    copy: t(
      'DENTE',
      'Сайт стоматологічної клініки Denté',
      'Denté dental clinic website',
      ['Clinic', 'Healthcare', 'Website'],
      ['Clinic', 'Healthcare', 'Website'],
      'Довіра • Запис • Преміальний дизайн',
      'Trust • Booking • Premium design',
      'Strona kliniki stomatologicznej Denté',
      'Сайт стоматологической клиники Denté'
    ),
  },
  {
    id: 'toptrendshop',
    image: '/portfolio/portfolio-toptrendshop.jpg',
    category: 'websites',
    copy: t(
      'TOPTRENDSHOP',
      'E-commerce під товарку та масштабування оферів',
      'E-commerce for offers and scale',
      ['E-commerce', 'Admin', 'Website'],
      ['E-commerce', 'Admin', 'Website'],
      'Швидкі офери • Адмінка • Пошук • Обрані',
      'Fast offers • Admin • Search • Favorites',
      'E-commerce pod oferty i skalę',
      'E-commerce под товарку и масштаб'
    ),
  },
  {
    id: 'royal-academy',
    image: '/portfolio/portfolio-royal-academy.jpg',
    category: 'websites',
    liveUrl: 'https://www.royalacademyschool.in.ua/',
    copy: t(
      'ROYAL ACADEMY',
      'Сайт школи Royal Academy School',
      'Royal Academy School website',
      ['Education', 'Website'],
      ['Education', 'Website'],
      'Сильний перший екран • CTA • Реєстрація',
      'Strong first screen • CTAs • Enrollment',
      'Strona Royal Academy School',
      'Сайт школы Royal Academy'
    ),
  },
  {
    id: 'kreona',
    image: '/portfolio/portfolio-kreona.jpg',
    category: 'websites',
    liveUrl: 'https://kreona.net/uk',
    copy: t(
      'KREONA',
      'Підбір і доставка авто з США, Канади, Європи та Кореї',
      'Car sourcing & delivery from US, Canada, Europe, Korea',
      ['Auto', 'Import', 'Website'],
      ['Auto', 'Import', 'Website'],
      'Каталог • Заявки • Міжнародна логістика',
      'Catalog • Leads • International logistics',
      'Dobór i dostawa aut z USA, Kanady, Europy i Korei',
      'Подбор и доставка авто из США, Канады, Европы и Кореи'
    ),
  },
  {
    id: 'journey-zavadska',
    image: '/portfolio/portfolio-journey-zavadska.jpg',
    category: 'chatbots',
    liveUrl: 'https://journey.anastasiiazavadska.com/',
    copy: t(
      'JOURNEY COURSE',
      'Сайт курсу + оплата WayForPay + Telegram-бот доступу',
      'Course site + WayForPay + Telegram access bot',
      ['Course', 'WayForPay', 'Telegram'],
      ['Course', 'WayForPay', 'Telegram'],
      'Оплата → доступ → 7 днів навчання в боті',
      'Pay → access → 7 days of lessons in the bot',
      'Kurs + płatność + bot dostępu',
      'Сайт курса + оплата + бот доступа'
    ),
  },
  {
    id: 'vevyne-dating-bot',
    image: '/portfolio/portfolio-vevyne-dating-bot.jpg',
    category: 'chatbots',
    liveUrl: 'https://t.me/VevyneDatingBot',
    copy: t(
      'VEVENE',
      'Telegram-бот для знайомств: KYC, інтереси, DateRadar',
      'Telegram dating bot: KYC, interests, DateRadar',
      ['Telegram', 'Dating', 'KYC'],
      ['Telegram', 'Dating', 'KYC'],
      'Перевірка профілів • Геолокація • Щоденні рекомендації',
      'Profile checks • Geolocation • Daily recommendations',
      'Bot randkowy: KYC, zainteresowania, DateRadar',
      'Telegram-бот знакомств: KYC, интересы, DateRadar'
    ),
  },
];

export function getPortfolioCards(lang: Lang): Array<
  PortfolioCard & { title: string; subtitle: string; tags: string[]; highlights: string }
> {
  return PORTFOLIO_CARDS.map((card) => {
    const c = card.copy[lang] || card.copy.uk;
    return {
      ...card,
      title: c.title,
      subtitle: c.subtitle,
      tags: c.tags,
      highlights: c.highlights,
    };
  });
}
