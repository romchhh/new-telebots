import type { Language } from '@/components/translations';

export type CaseStudyStat = { value: string; label: string };

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  lead: string;
  items: string[];
};

export type CaseStudyCopy = {
  breadcrumbLabel: string;
  heroTitle: string;
  heroLead: string;
  visitSite: string;
  challenge: CaseStudySection;
  solution: CaseStudySection;
  outcome: {
    eyebrow: string;
    title: string;
    text: string;
  };
  relatedTitle: string;
  relatedCta: string;
  stats: CaseStudyStat[];
};

export type CaseStudyDefinition = {
  id: string;
  liveUrl?: string;
  mainImage: string;
  portfolioCategory: 'chatbots' | 'websites';
  copy: Record<Language, CaseStudyCopy>;
};

const RELATED: Record<Language, Pick<CaseStudyCopy, 'relatedTitle' | 'relatedCta'>> = {
  uk: { relatedTitle: 'Інші кейси', relatedCta: 'Усі кейси' },
  en: { relatedTitle: 'Other cases', relatedCta: 'All cases' },
  pl: { relatedTitle: 'Inne case’y', relatedCta: 'Wszystkie case’y' },
  ru: { relatedTitle: 'Другие кейсы', relatedCta: 'Все кейсы' },
};

export type CaseStudyLangBody = Omit<CaseStudyCopy, 'relatedTitle' | 'relatedCta'>;

export function withRelated(copy: Record<Language, CaseStudyLangBody>): Record<Language, CaseStudyCopy> {
  return {
    uk: { ...copy.uk, ...RELATED.uk },
    en: { ...copy.en, ...RELATED.en },
    pl: { ...copy.pl, ...RELATED.pl },
    ru: { ...copy.ru, ...RELATED.ru },
  };
}

const tradeground: CaseStudyDefinition = {
  id: 'tradeground-bot',
  liveUrl: 'https://t.me/TradeGroundBot',
  mainImage: '/portfolio/portfolio-tradeground-bot.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'TradeGround',
      heroTitle: 'TradeGround — маркетплейс у Telegram: бот + міні-додаток',
      heroLead:
        'TradeGroundBot — повноцінний маркетплейс у Telegram: бот і міні-додаток, де можна продавати й купувати товари, не виходячи з месенджера. Ми зібрали каталог, профілі продавців, оплату через Monobank і адмінку в одній системі — як інструмент залучення та утримання користувачів.',
      visitSite: 'Відкрити бота',
      stats: [
        { value: '2', label: 'бот + міні-додаток' },
        { value: '1', label: 'оплата через Monobank' },
        { value: '↑', label: 'мультимовність і аналітика' },
        { value: '1', label: 'адмінка для модерації' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Продавати й купувати в Telegram зручно, але без цілісної системи оголошення, оплата, модерація й профілі розсипаються між чатами й ручною роботою. Потрібен був продукт, який тримає весь сценарій маркетплейсу всередині месенджера.',
        items: [
          'Користувачі хочуть купувати й продавати, не залишаючи Telegram',
          'Потрібні каталог, фільтри, обране та профілі продавців в одному місці',
          'Оплата має бути простою — через Monobank',
          'Оголошення потребують модерації, розсилок і реферальної логіки',
          'Платні пакети для просування мають працювати без ручної рутини',
          'Система має масштабуватись і підтримувати мультимовність з аналітикою',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали маркетплейс із двох шарів: бот веде операції та комунікацію, міні-додаток — вітрину й навігацію по каталогу. Кожен блок закриває свою задачу в спільному сценарії.',
        items: [
          'Бот: оголошення, модерація, розсилки, реферали та платні пакети просування',
          'Міні-додаток: каталог, фільтри, обране, рекомендації та профілі продавців',
          'Оплата через Monobank у зрозумілому сценарії покупки',
          'Зручна адмін-панель для керування контентом і модерацією',
          'Мультимовність і аналітика для росту аудиторії',
          'Єдина логіка, щоб продавець і покупець залишались у Telegram від перегляду до угоди',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Простий, зрозумілий і масштабований маркетплейс у Telegram: каталог і профілі в міні-додатку, оголошення й монетизація в боті, оплата через Monobank і адмінка для команди. Користувач продає й купує, не виходячи з месенджера — з аналітикою та просуванням оголошень.',
      },
    },
    en: {
      breadcrumbLabel: 'TradeGround',
      heroTitle: 'TradeGround — Telegram marketplace: bot + mini app',
      heroLead:
        'TradeGroundBot is a full marketplace inside Telegram: a bot and a mini app where people sell and buy without leaving the messenger. Listings, seller profiles, Monobank payments and an admin panel live in one system — built for acquisition and retention.',
      visitSite: 'Open bot',
      stats: [
        { value: '2', label: 'bot + mini app' },
        { value: '1', label: 'Monobank payments' },
        { value: '↑', label: 'multilingual + analytics' },
        { value: '1', label: 'moderation admin' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'Buying and selling in Telegram is convenient, but without a unified system listings, payments, moderation and profiles scatter across chats and manual work. The product had to keep the full marketplace journey inside the messenger.',
        items: [
          'Users want to buy and sell without leaving Telegram',
          'Catalog, filters, favorites and seller profiles needed to live in one place',
          'Payments had to stay simple — via Monobank',
          'Listings need moderation, broadcasts and referral logic',
          'Paid promotion packages should run without manual routine',
          'The system had to scale with multilingual support and analytics',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built the marketplace in two layers: the bot handles operations and communication; the mini app handles the storefront and catalog navigation. Each block owns one job in a shared flow.',
        items: [
          'Bot: listings, moderation, broadcasts, referrals and paid promotion packages',
          'Mini app: catalog, filters, favorites, recommendations and seller profiles',
          'Monobank payments in a clear purchase path',
          'Admin panel for content and moderation',
          'Multilingual setup and analytics for growth',
          'One journey so buyers and sellers stay in Telegram from browse to deal',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'A simple, clear and scalable Telegram marketplace: catalog and profiles in the mini app, listings and monetization in the bot, Monobank payments and an admin for the team. Users sell and buy without leaving the messenger — with analytics and listing promotion.',
      },
    },
    pl: {
      breadcrumbLabel: 'TradeGround',
      heroTitle: 'TradeGround — marketplace w Telegram: bot + miniapp',
      heroLead:
        'TradeGroundBot to pełny marketplace w Telegram: bot i miniaplikacja, gdzie można sprzedawać i kupować bez wychodzenia z komunikatora. Ogłoszenia, profile, płatności Monobank i panel admina w jednym systemie.',
      visitSite: 'Otwórz bota',
      stats: [
        { value: '2', label: 'bot + miniapp' },
        { value: '1', label: 'płatności Monobank' },
        { value: '↑', label: 'wiele języków + analityka' },
        { value: '1', label: 'panel moderacji' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Kupowanie i sprzedawanie w Telegram jest wygodne, ale bez spójnego systemu ogłoszenia, płatności i profile rozjeżdżają się między czatami. Potrzebny był produkt, który trzyma całą ścieżkę marketplace w komunikatorze.',
        items: [
          'Użytkownicy chcą kupować i sprzedawać bez wychodzenia z Telegram',
          'Katalog, filtry, ulubione i profile sprzedawców w jednym miejscu',
          'Proste płatności przez Monobank',
          'Moderacja, mailingi i logika partnerska',
          'Płatne pakiety promocji bez ręcznej rutyny',
          'Skalowanie, wielojęzyczność i analityka',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead:
          'Marketplace w dwóch warstwach: bot prowadzi operacje i komunikację, miniapp — witrynę i katalog. Każdy blok ma jedno zadanie we wspólnej ścieżce.',
        items: [
          'Bot: ogłoszenia, moderacja, mailingi, partnerzy i płatne pakiety',
          'Miniapp: katalog, filtry, ulubione, rekomendacje i profile',
          'Płatności Monobank w jasnej ścieżce zakupu',
          'Panel admina do treści i moderacji',
          'Wielojęzyczność i analityka',
          'Jedna ścieżka od przeglądania do transakcji w Telegram',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Prosty i skalowalny marketplace w Telegram: katalog w miniapp, ogłoszenia i monetyzacja w bocie, Monobank i panel dla zespołu. Użytkownik kupuje i sprzedaje bez wychodzenia z komunikatora.',
      },
    },
    ru: {
      breadcrumbLabel: 'TradeGround',
      heroTitle: 'TradeGround — маркетплейс в Telegram: бот + мини-приложение',
      heroLead:
        'TradeGroundBot — полноценный маркетплейс в Telegram: бот и мини-приложение, где можно продавать и покупать, не выходя из мессенджера. Объявления, профили, оплата через Monobank и админка — в одной системе.',
      visitSite: 'Открыть бота',
      stats: [
        { value: '2', label: 'бот + мини-приложение' },
        { value: '1', label: 'оплата через Monobank' },
        { value: '↑', label: 'мультиязычность и аналитика' },
        { value: '1', label: 'админка модерации' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Покупать и продавать в Telegram удобно, но без единой системы объявления, оплата и профили рассыпаются между чатами. Нужен был продукт, который держит весь сценарий маркетплейса внутри мессенджера.',
        items: [
          'Пользователи хотят покупать и продавать, не покидая Telegram',
          'Каталог, фильтры, избранное и профили продавцов в одном месте',
          'Простая оплата через Monobank',
          'Модерация, рассылки и реферальная логика',
          'Платные пакеты продвижения без ручной рутины',
          'Масштабирование, мультиязычность и аналитика',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead:
          'Маркетплейс из двух слоёв: бот ведёт операции и коммуникацию, мини-приложение — витрину и каталог. Каждый блок закрывает свою задачу в общем сценарии.',
        items: [
          'Бот: объявления, модерация, рассылки, рефералы и платные пакеты',
          'Мини-приложение: каталог, фильтры, избранное, рекомендации и профили',
          'Оплата через Monobank в понятном сценарии покупки',
          'Админ-панель для контента и модерации',
          'Мультиязычность и аналитика',
          'Единый путь от просмотра до сделки внутри Telegram',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Простой и масштабируемый маркетплейс в Telegram: каталог в мини-приложении, объявления и монетизация в боте, Monobank и админка для команды. Пользователь продаёт и покупает, не выходя из мессенджера.',
      },
    },
  }),
};

const thirteenVplus: CaseStudyDefinition = {
  id: '13vplus',
  liveUrl: 'https://13vplus.com/',
  mainImage: '/portfolio/portfolio-13vplus.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: '13VPLUS',
      heroTitle: '13VPLUS — інтернет-магазин бренду жіночого одягу',
      heroLead:
        '13VPLUS — магазин про стиль та індивідуальність. Ми створили платформу, яка виглядає так само вишукано, як колекції бренду, і при цьому працює швидко, стабільно й без компромісів: продуманий UX, акуратна стилістика та надійний прийом платежів.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '2', label: 'платіжні системи: картки + crypto' },
        { value: '1', label: 'Meta Pixel для реклами' },
        { value: '↑', label: 'SEO-база та structured data' },
        { value: '1', label: 'швидкий e-commerce UX' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Бренду жіночого одягу потрібна була не просто вітрина, а інструмент продажів: рівень візуалу мав відповідати колекціям, а checkout і аналітика — витримувати ріст без постійних технічних компромісів.',
        items: [
          'Сайт мав передавати стиль і індивідуальність бренду',
          'UX і деталі інтерфейсу не могли «дешевити» преміальне відчуття',
          'Потрібен був надійний прийом платежів картками та криптовалютою',
          'Реклама й аналітика вимагали Meta Pixel і чистої data-структури',
          'SEO-база мала бути закладена з першого релізу',
          'Платформа мала бути готовою до масштабування без переписування',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали e-commerce під бренд: візуал і мікроінтерфейси під колекції, стабільний checkout і технічну основу для просування. Кожен блок працює на довіру й покупку.',
        items: [
          'Побудували магазин із акцентом на швидкість, стабільність і вишуканий UX',
          'Опрацювали стилістику, ефекти та деталі інтерфейсу під образ бренду',
          'Підключили WayForPay для банківських карток',
          'Додали Plisio для криптоплатежів',
          'Інтегрували Meta Pixel для рекламних воронок',
          'Заклали structured data та SEO-базу для органічного просування',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Повноцінний інструмент для бізнесу: від прийому оплат до роботи з лояльністю та просуванням. Магазин виглядає на рівні колекцій бренду, приймає картки й crypto, вимірює рекламу через Meta Pixel і має технічну основу для росту в пошуку.',
      },
    },
    en: {
      breadcrumbLabel: '13VPLUS',
      heroTitle: '13VPLUS — e-commerce for a women’s fashion brand',
      heroLead:
        '13VPLUS is a store about style and individuality. We built a platform that looks as refined as the brand’s collections — and still runs fast and stable, with careful UX, clean styling, and reliable payments.',
      visitSite: 'Visit site',
      stats: [
        { value: '2', label: 'payment rails: cards + crypto' },
        { value: '1', label: 'Meta Pixel for ads' },
        { value: '↑', label: 'SEO base + structured data' },
        { value: '1', label: 'fast e-commerce UX' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'A women’s fashion brand needed more than a brochure site: visuals had to match the collections, while checkout and analytics had to support growth without constant technical compromise.',
        items: [
          'The site had to express the brand’s style and individuality',
          'UX details could not undercut a premium feel',
          'Reliable card and crypto payments were required',
          'Ads and analytics needed Meta Pixel and clean data structure',
          'SEO foundations had to ship with the first release',
          'The platform had to be ready to scale without a rewrite',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built brand-led e-commerce: visuals and micro-interactions for the collections, a stable checkout, and a technical base for growth. Every block serves trust and purchase.',
        items: [
          'Built a store focused on speed, stability and refined UX',
          'Tuned styling, effects and interface details to the brand',
          'Connected WayForPay for bank cards',
          'Added Plisio for crypto payments',
          'Integrated Meta Pixel for ad funnels',
          'Laid structured data and an SEO base for organic growth',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'A full business tool: from payments to loyalty and promotion. The store matches the brand’s level, accepts cards and crypto, measures ads via Meta Pixel, and has a technical foundation for search growth.',
      },
    },
    pl: {
      breadcrumbLabel: '13VPLUS',
      heroTitle: '13VPLUS — sklep internetowy marki odzieży damskiej',
      heroLead:
        '13VPLUS to sklep o stylu i indywidualności. Zbudowaliśmy platformę tak dopracowaną wizualnie jak kolekcje marki — szybką, stabilną, z przemyślanym UX i niezawodnymi płatnościami.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '2', label: 'płatności: karty + crypto' },
        { value: '1', label: 'Meta Pixel do reklam' },
        { value: '↑', label: 'baza SEO + structured data' },
        { value: '1', label: 'szybki UX e-commerce' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Marce odzieży damskiej potrzebny był narzędzie sprzedaży, nie wizytówka: wizual musi dorównać kolekcjom, a checkout i analityka — wytrzymać wzrost bez ciągłych kompromisów.',
        items: [
          'Strona miała oddawać styl i indywidualność marki',
          'Detale UX nie mogły obniżać premium wrażenia',
          'Potrzebne niezawodne płatności kartą i crypto',
          'Reklamy wymagały Meta Pixel i czystej struktury danych',
          'Baza SEO musiała powstać już przy pierwszym releasie',
          'Platforma miała być gotowa na skalę bez przepisywania',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead:
          'E-commerce pod markę: wizual i mikrointerfejsy pod kolekcje, stabilny checkout oraz baza pod promocję. Każdy blok buduje zaufanie i zakup.',
        items: [
          'Sklep z naciskiem na szybkość, stabilność i dopracowany UX',
          'Stylistyka, efekty i detale pod wizerunek marki',
          'WayForPay dla kart bankowych',
          'Plisio dla płatności crypto',
          'Meta Pixel pod lejki reklamowe',
          'Structured data i baza SEO pod ruch organiczny',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Pełne narzędzie biznesowe: od płatności po lojalność i promocję. Sklep na poziomie kolekcji, karty i crypto, Meta Pixel oraz fundament techniczny pod SEO.',
      },
    },
    ru: {
      breadcrumbLabel: '13VPLUS',
      heroTitle: '13VPLUS — интернет-магазин бренда женской одежды',
      heroLead:
        '13VPLUS — магазин о стиле и индивидуальности. Мы создали платформу, которая выглядит так же изысканно, как коллекции бренда, и при этом работает быстро и стабильно: продуманный UX, аккуратная стилистика и надёжный приём платежей.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '2', label: 'платежи: карты + crypto' },
        { value: '1', label: 'Meta Pixel для рекламы' },
        { value: '↑', label: 'SEO-база и structured data' },
        { value: '1', label: 'быстрый e-commerce UX' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Бренду женской одежды нужна была не визитка, а инструмент продаж: визуал на уровне коллекций, а checkout и аналитика — готовые к росту без постоянных компромиссов.',
        items: [
          'Сайт должен передавать стиль и индивидуальность бренда',
          'Детали UX не должны удешевлять премиальное ощущение',
          'Нужен надёжный приём карт и криптоплатежей',
          'Реклама требовала Meta Pixel и чистой data-структуры',
          'SEO-база должна быть заложена с первого релиза',
          'Платформа должна масштабироваться без переписывания',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead:
          'Собрали e-commerce под бренд: визуал и микроинтерфейсы под коллекции, стабильный checkout и техническую основу для продвижения.',
        items: [
          'Магазин со скоростью, стабильностью и изысканным UX',
          'Стилистика, эффекты и детали интерфейса под образ бренда',
          'WayForPay для банковских карт',
          'Plisio для криптоплатежей',
          'Meta Pixel для рекламных воронок',
          'Structured data и SEO-база для органики',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Полноценный инструмент для бизнеса: от приёма оплат до работы с лояльностью и продвижением. Магазин на уровне коллекций, карты и crypto, Meta Pixel и техническая основа для роста в поиске.',
      },
    },
  }),
};

const drTolstikova: CaseStudyDefinition = {
  id: 'dr-tolstikova-bot',
  liveUrl: 'https://t.me/FoodByDrTolstikovaBot',
  mainImage: '/portfolio/portfolio-dr-tolstikova-bot.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Dr. Толстікова',
      heroTitle: 'Dr. Толстікова — автоматизація продажів і підписок у Telegram',
      heroLead:
        'Telegram-бот для Dr. Толстікової: продажі, підписки, платежі та аналітика працюють самі — без менеджерів і ручної рутини, 24/7. Бот продає й продовжує підписки, приймає WayForPay і тримає доступ до закритого ком’юніті.',
      visitSite: 'Відкрити бота',
      stats: [
        { value: '95%', label: 'процесів автоматизовано' },
        { value: '24/7', label: 'продажі без менеджерів' },
        { value: '1', label: 'WayForPay: разові + рекурентні' },
        { value: '↑', label: 'конверсія після запуску' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Продажі підписок, доступ до ком’юніті й перевірка оплат тягнули на ручну роботу. Бізнесу потрібен був контур, який сам продає, продовжує доступ і відсікає прострочені підписки.',
        items: [
          'Продажі та продовження підписок не мали залежати від менеджерів',
          'Потрібні разові та рекурентні платежі через WayForPay',
          'Після оплати користувача треба автоматично додавати в закрите ком’юніті',
          'Доступ має регулярно перевірятись і зніматись при простроченні',
          'Команді потрібні аналітика, Excel-звіти та розсилки',
          'Повторні платежі мають іти без ручних нагадувань',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Побудували Telegram-бота як операційний шар бізнесу: продаж, оплата, доступ і контроль підписки в одному сценарії.',
        items: [
          'Автоматичний продаж і продовження підписок',
          'Інтеграція WayForPay для разових і рекурентних платежів',
          'Автододавання в закрите ком’юніті після успішної оплати',
          'Регулярна перевірка доступу й відключення прострочених підписок',
          'Адмін-панель з аналітикою, Excel-звітами та розсилками',
          'Єдиний цикл без ручної перевірки чеків і нагадувань',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Близько 95% процесів бізнесу автоматизовано: конверсія зросла, повторні платежі йдуть без нагадувань, а доступ до ком’юніті керується ботом цілодобово.',
      },
    },
    en: {
      breadcrumbLabel: 'Dr. Tolstikova',
      heroTitle: 'Dr. Tolstikova — sales and subscription automation in Telegram',
      heroLead:
        'A Telegram bot for Dr. Tolstikova where sales, subscriptions, payments and analytics run on their own — no managers, no manual routine, 24/7. The bot sells and renews access, takes WayForPay payments and keeps the closed community gated.',
      visitSite: 'Open bot',
      stats: [
        { value: '95%', label: 'of processes automated' },
        { value: '24/7', label: 'sales without managers' },
        { value: '1', label: 'WayForPay: one-off + recurring' },
        { value: '↑', label: 'conversion after launch' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'Subscription sales, community access and payment checks depended on manual work. The business needed a loop that sells, renews access and cuts expired subscriptions on its own.',
        items: [
          'Sales and renewals could not depend on managers',
          'One-off and recurring WayForPay payments were required',
          'After payment, users had to join the closed community automatically',
          'Access had to be checked and revoked when subscriptions expire',
          'The team needed analytics, Excel reports and broadcasts',
          'Repeat payments had to run without manual reminders',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built a Telegram bot as the business operations layer: sell, pay, grant access and control subscriptions in one flow.',
        items: [
          'Automatic subscription sales and renewals',
          'WayForPay for one-off and recurring payments',
          'Auto-add to the closed community after successful payment',
          'Regular access checks and revocation of expired subscriptions',
          'Admin panel with analytics, Excel reports and broadcasts',
          'One loop without manual receipt checks or reminders',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'About 95% of business processes are automated: conversion improved, renewals run without reminders, and community access is managed by the bot around the clock.',
      },
    },
    pl: {
      breadcrumbLabel: 'Dr. Tolstikova',
      heroTitle: 'Dr. Tolstikova — automatyzacja sprzedaży w Telegramie',
      heroLead:
        'Bot Telegram dla Dr. Tolstikovej: sprzedaż, subskrypcje, płatności i analityka działają same — bez managerów i ręcznej rutyny, 24/7.',
      visitSite: 'Otwórz bota',
      stats: [
        { value: '95%', label: 'procesów zautomatyzowanych' },
        { value: '24/7', label: 'sprzedaż bez managerów' },
        { value: '1', label: 'WayForPay: jednorazowe + cykliczne' },
        { value: '↑', label: 'konwersja po starcie' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Sprzedaż subskrypcji, dostęp do społeczności i weryfikacja płatności wymagały ręcznej pracy. Potrzebny był kontur, który sam sprzedaje, odnawia dostęp i odcina wygasłe subskrypcje.',
        items: [
          'Sprzedaż i odnowienia nie mogły zależeć od managerów',
          'Płatności jednorazowe i cykliczne przez WayForPay',
          'Po płatności — automatyczne dodanie do zamkniętej społeczności',
          'Regularna kontrola dostępu i odcięcie po wygaśnięciu',
          'Analityka, raporty Excel i mailingi dla zespołu',
          'Powtórne płatności bez ręcznych przypomnień',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead:
          'Bot Telegram jako warstwa operacyjna: sprzedaż, płatność, dostęp i kontrola subskrypcji w jednej ścieżce.',
        items: [
          'Automatyczna sprzedaż i odnawianie subskrypcji',
          'WayForPay: płatności jednorazowe i cykliczne',
          'Auto-dodanie do społeczności po udanej płatności',
          'Kontrola dostępu i odcięcie wygasłych subskrypcji',
          'Panel admina z analityką, Excel i mailingami',
          'Pełny cykl bez ręcznego sprawdzania płatności',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Ok. 95% procesów zautomatyzowanych: wyższa konwersja, odnowienia bez przypomnień, dostęp do społeczności zarządzany przez bota 24/7.',
      },
    },
    ru: {
      breadcrumbLabel: 'Dr. Толстикова',
      heroTitle: 'Dr. Толстикова — автоматизация продаж и подписок в Telegram',
      heroLead:
        'Telegram-бот для Dr. Толстиковой: продажи, подписки, платежи и аналитика работают сами — без менеджеров и ручной рутины, 24/7.',
      visitSite: 'Открыть бота',
      stats: [
        { value: '95%', label: 'процессов автоматизировано' },
        { value: '24/7', label: 'продажи без менеджеров' },
        { value: '1', label: 'WayForPay: разовые + рекуррентные' },
        { value: '↑', label: 'конверсия после запуска' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Продажи подписок, доступ в комьюнити и проверка оплат держались на ручной работе. Нужен был контур, который сам продаёт, продлевает доступ и отключает просроченные подписки.',
        items: [
          'Продажи и продления не должны зависеть от менеджеров',
          'Разовые и рекуррентные платежи через WayForPay',
          'После оплаты — автодобавление в закрытое комьюнити',
          'Регулярная проверка доступа и отключение при просрочке',
          'Аналитика, Excel-отчёты и рассылки для команды',
          'Повторные платежи без ручных напоминаний',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead:
          'Telegram-бот как операционный слой: продажа, оплата, доступ и контроль подписки в одном сценарии.',
        items: [
          'Автопродажа и продление подписок',
          'WayForPay для разовых и рекуррентных платежей',
          'Автодобавление в комьюнити после оплаты',
          'Проверка доступа и отключение просроченных подписок',
          'Админка с аналитикой, Excel и рассылками',
          'Полный цикл без ручной проверки чеков',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Около 95% процессов автоматизировано: конверсия выросла, повторные платежи идут без напоминаний, доступ в комьюнити управляется ботом круглосуточно.',
      },
    },
  }),
};

const nieznanyPiekarz: CaseStudyDefinition = {
  id: 'nieznany-piekarz',
  liveUrl: 'https://nieznanypiekarz.com/pl',
  mainImage: '/portfolio/portfolio-nieznany-piekarz.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Nieznany Piekarz',
      heroTitle: 'Nieznany Piekarz — запис на майстер-класи онлайн',
      heroLead:
        'Платформа, де купити майстер-клас з кондитерства в Польщі можна за кілька кліків — без дзвінків і очікування. Сайт приймає оплату, показує локації та одразу повідомляє команду про нові записи.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '2', label: 'мови: PL / EN' },
        { value: '1', label: 'оплата Przelewy24' },
        { value: '↑', label: 'автоматизація бронювань' },
        { value: '1', label: 'карта локацій майстер-класів' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Запис на майстер-класи через дзвінки й ручну координацію гальмував ріст. Потрібна була платформа, яка продає місця онлайн і знімає рутину з команди.',
        items: [
          'Клієнти мали бронювати майстер-клас без дзвінків',
          'Оплата онлайн мала закриватись за секунди',
          'Локації майстер-класів потрібно було показати на карті',
          'Команда мала миттєво дізнаватись про нові записи',
          'Потрібні звіти й трекінг бронювань без таблиць «вручну»',
          'Сайт мав бути готовим до нових міст і міжнародної аудиторії',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали сучасну платформу бронювання: Next.js на фронті, платежі та інтеграції на бекенді, UX під швидкий запис.',
        items: [
          'Frontend: Next.js 15, React 19, TypeScript, Tailwind, Framer Motion',
          'Оплата онлайн через Przelewy24',
          'Заявки в Google Sheets і миттєві Telegram-сповіщення',
          'Інтерактивна карта з локаціями майстер-класів',
          'Мультимовність PL / EN і адаптивний дизайн',
          'Автоматичні звіти та трекінг бронювань',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Мінімум ручної роботи й максимум автоматизації: простий процес бронювання для клієнтів і платформа, готова масштабуватись на нові міста та міжнародну аудиторію.',
      },
    },
    en: {
      breadcrumbLabel: 'Nieznany Piekarz',
      heroTitle: 'Nieznany Piekarz — online booking for pastry masterclasses',
      heroLead:
        'A platform where buying a pastry masterclass in Poland takes a few clicks — no calls, no waiting. The site takes payment, shows locations and notifies the team about new bookings instantly.',
      visitSite: 'Visit site',
      stats: [
        { value: '2', label: 'languages: PL / EN' },
        { value: '1', label: 'Przelewy24 payments' },
        { value: '↑', label: 'booking automation' },
        { value: '1', label: 'map of masterclass locations' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'Booking masterclasses by phone and manual coordination slowed growth. The brand needed a platform that sells seats online and removes routine from the team.',
        items: [
          'Clients had to book without phone calls',
          'Online payment had to close in seconds',
          'Masterclass locations needed a map',
          'The team needed instant alerts on new bookings',
          'Reports and booking tracking without manual spreadsheets',
          'The site had to be ready for new cities and international audiences',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built a modern booking platform: Next.js on the front, payments and integrations on the back, UX tuned for fast enrollment.',
        items: [
          'Frontend: Next.js 15, React 19, TypeScript, Tailwind, Framer Motion',
          'Online payments via Przelewy24',
          'Google Sheets intake and instant Telegram alerts',
          'Interactive map of masterclass locations',
          'PL / EN multilingual setup and responsive design',
          'Automatic reports and booking tracking',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'Minimum manual work and maximum automation: a simple booking path for clients and a platform ready to scale to new cities and international audiences.',
      },
    },
    pl: {
      breadcrumbLabel: 'Nieznany Piekarz',
      heroTitle: 'Nieznany Piekarz — zapis na warsztaty cukiernicze online',
      heroLead:
        'Platforma, na której warsztat cukierniczy w Polsce kupisz w kilka kliknięć — bez telefonów i czekania. Płatność online, mapa lokalizacji i natychmiastowe powiadomienia dla zespołu.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '2', label: 'języki: PL / EN' },
        { value: '1', label: 'płatności Przelewy24' },
        { value: '↑', label: 'automatyzacja rezerwacji' },
        { value: '1', label: 'mapa lokalizacji warsztatów' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Zapisy przez telefon i ręczną koordynację hamowały wzrost. Potrzebna była platforma, która sprzedaje miejsca online i zdejmuje rutynę z zespołu.',
        items: [
          'Klienci mieli rezerwować bez telefonów',
          'Płatność online w kilka sekund',
          'Lokalizacje warsztatów na mapie',
          'Natychmiastowe alerty o nowych zapisach',
          'Raporty i tracking bez ręcznych arkuszy',
          'Gotowość na nowe miasta i międzynarodową publiczność',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead:
          'Nowoczesna platforma rezerwacji: Next.js z przodu, płatności i integracje z tyłu, UX pod szybki zapis.',
        items: [
          'Frontend: Next.js 15, React 19, TypeScript, Tailwind, Framer Motion',
          'Płatności online przez Przelewy24',
          'Google Sheets i natychmiastowe powiadomienia Telegram',
          'Interaktywna mapa lokalizacji warsztatów',
          'Wielojęzyczność PL / EN i responsywny design',
          'Automatyczne raporty i tracking rezerwacji',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Minimum ręcznej pracy, maksimum automatyzacji: prosty proces rezerwacji dla klientów i platforma gotowa na skalę.',
      },
    },
    ru: {
      breadcrumbLabel: 'Nieznany Piekarz',
      heroTitle: 'Nieznany Piekarz — онлайн-запись на мастер-классы',
      heroLead:
        'Платформа, где мастер-класс по кондитерству в Польше покупается за несколько кликов — без звонков и ожидания. Оплата онлайн, карта локаций и мгновенные уведомления команде.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '2', label: 'языки: PL / EN' },
        { value: '1', label: 'оплата Przelewy24' },
        { value: '↑', label: 'автоматизация бронирований' },
        { value: '1', label: 'карта локаций мастер-классов' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Запись через звонки и ручную координацию тормозила рост. Нужна была платформа, которая продаёт места онлайн и снимает рутину с команды.',
        items: [
          'Клиенты должны бронировать без звонков',
          'Онлайн-оплата за секунды',
          'Локации мастер-классов на карте',
          'Мгновенные алерты о новых записях',
          'Отчёты и трекинг без ручных таблиц',
          'Готовность к новым городам и международной аудитории',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead:
          'Современная платформа бронирования: Next.js на фронте, платежи и интеграции на бэке, UX под быстрый запись.',
        items: [
          'Frontend: Next.js 15, React 19, TypeScript, Tailwind, Framer Motion',
          'Оплата онлайн через Przelewy24',
          'Google Sheets и мгновенные Telegram-уведомления',
          'Интерактивная карта локаций',
          'Мультиязычность PL / EN и адаптивный дизайн',
          'Автоотчёты и трекинг бронирований',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Минимум ручной работы и максимум автоматизации: простой путь записи для клиентов и платформа, готовая к масштабированию.',
      },
    },
  }),
};

const applum: CaseStudyDefinition = {
  id: 'applum-bot',
  liveUrl: 'https://t.me/ApplumBot',
  mainImage: '/portfolio/portfolio-applum-bot.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Applum',
      heroTitle: 'Applum — автоматизація Apple-сервісу в Telegram',
      heroLead:
        'Власнику Apple-сервісу потрібно було автоматизувати весь бізнес. Ми створили Telegram-бота, який закриває продажі з Trade-In, заявки на ремонт і реферальну програму — замість рутини кількох співробітників.',
      visitSite: 'Відкрити бота',
      stats: [
        { value: '+40%', label: 'конверсії за 30 днів' },
        { value: '−50%', label: 'рутини команди' },
        { value: '24/7', label: 'продажі без паузи' },
        { value: '0', label: 'помилок від ручного фактора' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Продажі техніки, сервіс і залучення клієнтів тримались на людях. Бізнесу потрібен був бот, який веде клієнта до покупки й знімає операційну рутину.',
        items: [
          'Потрібно було автоматизувати продажі iPhone, iPad, MacBook з Trade-In',
          'Сервіс мав приймати заявки на ремонт із діагностикою',
          'Реферальна програма мала працювати без ручного обліку',
          'Усі заявки мали потрапляти в Google Sheets як CRM',
          'Потрібні масові розсилки акцій і новинок',
          'Команда мала контролювати процеси з адмін-панелі',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали Telegram-бота як єдину точку входу для продажів, сервісу та бонусів — зі smart-діалогами й автоматизаціями.',
        items: [
          'Продажі: замовлення техніки з Trade-In',
          'Сервіс: прийом заявок на ремонт із діагностикою',
          'Бонуси: реферальна програма для залучення клієнтів',
          'Google Sheets — усі заявки автоматично в CRM',
          'Smart-діалоги, що ведуть клієнта до покупки',
          'Масові розсилки та адмін-панель для контролю процесів',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'За 30 днів: +40% конверсії, −50% рутини, продажі 24/7 і нуль помилок від людського фактора. Бот замінив рутину трьох співробітників і лишив команді важливі задачі.',
      },
    },
    en: {
      breadcrumbLabel: 'Applum',
      heroTitle: 'Applum — Apple service automation in Telegram',
      heroLead:
        'An Apple service owner needed to automate the whole business. We built a Telegram bot that covers Trade-In sales, repair intake and a referral program — replacing the routine of several staff members.',
      visitSite: 'Open bot',
      stats: [
        { value: '+40%', label: 'conversion in 30 days' },
        { value: '−50%', label: 'team routine' },
        { value: '24/7', label: 'sales without pause' },
        { value: '0', label: 'manual-factor errors' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'Device sales, service and acquisition depended on people. The business needed a bot that guides clients to purchase and removes operational routine.',
        items: [
          'Automate iPhone, iPad and MacBook sales with Trade-In',
          'Service had to accept repair requests with diagnostics',
          'A referral program had to run without manual tracking',
          'All leads had to land in Google Sheets as CRM',
          'Broadcasts for promos and new arrivals were required',
          'The team needed an admin panel to control processes',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built a Telegram bot as a single entry point for sales, service and bonuses — with smart dialogs and automations.',
        items: [
          'Sales: device orders with Trade-In',
          'Service: repair intake with diagnostics',
          'Bonuses: referral program for acquisition',
          'Google Sheets CRM for every request',
          'Smart dialogs that guide clients to purchase',
          'Broadcasts and an admin panel for process control',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'In 30 days: +40% conversion, −50% routine, 24/7 sales and zero manual-factor errors. The bot replaced the routine of three staff members and left the team with high-value work.',
      },
    },
    pl: {
      breadcrumbLabel: 'Applum',
      heroTitle: 'Applum — automatyzacja serwisu Apple w Telegram',
      heroLead:
        'Właściciel serwisu Apple potrzebował zautomatyzować cały biznes. Bot Telegram zamyka sprzedaż z Trade-In, zgłoszenia napraw i program partnerski — zamiast rutyny kilku pracowników.',
      visitSite: 'Otwórz bota',
      stats: [
        { value: '+40%', label: 'konwersji w 30 dni' },
        { value: '−50%', label: 'rutyny zespołu' },
        { value: '24/7', label: 'sprzedaż bez przerwy' },
        { value: '0', label: 'błędów czynnika ludzkiego' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Sprzedaż sprzętu, serwis i pozyskiwanie klientów opierały się na ludziach. Potrzebny był bot, który prowadzi do zakupu i zdejmuje rutynę operacyjną.',
        items: [
          'Automatyzacja sprzedaży iPhone, iPad, MacBook z Trade-In',
          'Serwis: zgłoszenia napraw z diagnostyką',
          'Program partnerski bez ręcznej ewidencji',
          'Wszystkie zgłoszenia do Google Sheets jako CRM',
          'Masowe mailingi akcji i nowości',
          'Panel admina do kontroli procesów',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead:
          'Bot Telegram jako jeden punkt wejścia: sprzedaż, serwis i bonusy — ze smart-dialogami i automatyzacjami.',
        items: [
          'Sprzedaż: zamówienia sprzętu z Trade-In',
          'Serwis: przyjęcie napraw z diagnostyką',
          'Bonusy: program partnerski',
          'Google Sheets CRM dla wszystkich zgłoszeń',
          'Smart-dialogi prowadzące do zakupu',
          'Mailingi i panel admina',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'W 30 dni: +40% konwersji, −50% rutyny, sprzedaż 24/7 i zero błędów czynnika ludzkiego. Bot zastąpił rutynę trzech osób.',
      },
    },
    ru: {
      breadcrumbLabel: 'Applum',
      heroTitle: 'Applum — автоматизация Apple-сервиса в Telegram',
      heroLead:
        'Владельцу Apple-сервиса нужно было автоматизировать весь бизнес. Telegram-бот закрывает продажи с Trade-In, заявки на ремонт и реферальную программу — вместо рутины нескольких сотрудников.',
      visitSite: 'Открыть бота',
      stats: [
        { value: '+40%', label: 'конверсии за 30 дней' },
        { value: '−50%', label: 'рутины команды' },
        { value: '24/7', label: 'продажи без паузы' },
        { value: '0', label: 'ошибок от человеческого фактора' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Продажи техники, сервис и привлечение клиентов держались на людях. Нужен был бот, который ведёт к покупке и снимает операционную рутину.',
        items: [
          'Автоматизация продаж iPhone, iPad, MacBook с Trade-In',
          'Сервис: заявки на ремонт с диагностикой',
          'Реферальная программа без ручного учёта',
          'Все заявки в Google Sheets как CRM',
          'Массовые рассылки акций и новинок',
          'Админ-панель для контроля процессов',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead:
          'Telegram-бот как единая точка входа: продажи, сервис и бонусы — со smart-диалогами и автоматизациями.',
        items: [
          'Продажи: заказы техники с Trade-In',
          'Сервис: приём ремонтов с диагностикой',
          'Бонусы: реферальная программа',
          'Google Sheets CRM для всех заявок',
          'Smart-диалоги до покупки',
          'Рассылки и админ-панель',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'За 30 дней: +40% конверсии, −50% рутины, продажи 24/7 и ноль ошибок от человеческого фактора. Бот заменил рутину трёх сотрудников.',
      },
    },
  }),
};

const flixmarket: CaseStudyDefinition = {
  id: 'flixmarket',
  liveUrl: 'https://t.me/FlixMarketBot',
  mainImage: '/portfolio/portfolio-flixmarket.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Flix Market',
      heroTitle: 'Flix Market — бот для оформлення підписок на сервіси',
      heroLead:
        'Онлайн-магазин у Telegram, де можна купити підписки на кіно, музику, VPN та інші сервіси швидко, просто й вигідно. Кілька натискань у боті — і замовлення оформлене з оплатою через Monobank.',
      visitSite: 'Відкрити бота',
      stats: [
        { value: '1', label: 'оплата через Monobank' },
        { value: '↑', label: 'каталог підписок у боті' },
        { value: '1', label: 'адмінка товарів і замовлень' },
        { value: '24/7', label: 'оформлення без менеджера' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Продаж підписок на цифрові сервіси потребував швидкого сценарію всередині Telegram: каталог, оплата й підтримка без зайвих кроків і ручної видачі.',
        items: [
          'Клієнт мав оформити підписку кількома натисканнями в боті',
          'Потрібен каталог популярних сервісів із вигідними тарифами',
          'Оплата мала йти через Monobank',
          'Команді потрібна адмін-панель для товарів і замовлень',
          'Підключення й підтримка мали бути оперативними на всіх етапах',
          'Процес не мав залежати від ручної видачі доступу менеджером',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали бота-магазин підписок: від вибору сервісу до оплати й керування замовленнями в адмінці.',
        items: [
          'Каталог підписок: кіно, музика, VPN та інші сервіси',
          'Повний сценарій оформлення прямо в Telegram',
          'Оплата через Monobank',
          'Адмін-панель для управління товарами та замовленнями',
          'Оперативне підключення після оплати',
          'Підтримка клієнта на всіх етапах сценарію',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Зручний канал продажів підписок у Telegram: швидке оформлення, Monobank, адмінка для команди й сервіс, який працює без зайвої ручної рутини.',
      },
    },
    en: {
      breadcrumbLabel: 'Flix Market',
      heroTitle: 'Flix Market — bot for digital subscription checkout',
      heroLead:
        'A Telegram store where people buy movie, music, VPN and other subscriptions quickly and at better rates. A few taps in the bot — and checkout completes with Monobank payment.',
      visitSite: 'Open bot',
      stats: [
        { value: '1', label: 'Monobank payments' },
        { value: '↑', label: 'subscription catalog in-bot' },
        { value: '1', label: 'admin for products & orders' },
        { value: '24/7', label: 'checkout without a manager' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'Selling digital subscriptions needed a fast path inside Telegram: catalog, payment and support without extra steps or manual fulfillment.',
        items: [
          'Clients had to subscribe in a few taps inside the bot',
          'A catalog of popular services with better rates was required',
          'Payments had to run through Monobank',
          'The team needed an admin for products and orders',
          'Activation and support had to stay fast at every step',
          'Fulfillment could not depend on a manager issuing access by hand',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built a subscription store bot: from picking a service to payment and order management in the admin panel.',
        items: [
          'Subscription catalog: movies, music, VPN and more',
          'Full checkout flow inside Telegram',
          'Monobank payments',
          'Admin panel for products and orders',
          'Fast activation after payment',
          'Support across the whole journey',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'A clean subscription sales channel in Telegram: fast checkout, Monobank, an admin for the team, and a service that runs without unnecessary manual routine.',
      },
    },
    pl: {
      breadcrumbLabel: 'Flix Market',
      heroTitle: 'Flix Market — bot do subskrypcji usług cyfrowych',
      heroLead:
        'Sklep w Telegram, gdzie kupisz subskrypcje filmów, muzyki, VPN i innych usług szybko i korzystniej. Kilka kliknięć w bocie — płatność Monobank i gotowe.',
      visitSite: 'Otwórz bota',
      stats: [
        { value: '1', label: 'płatności Monobank' },
        { value: '↑', label: 'katalog subskrypcji w bocie' },
        { value: '1', label: 'panel produktów i zamówień' },
        { value: '24/7', label: 'zamówienie bez managera' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Sprzedaż subskrypcji wymagała szybkiej ścieżki w Telegram: katalog, płatność i wsparcie bez zbędnych kroków i ręcznej realizacji.',
        items: [
          'Klient miał kupić subskrypcję w kilka kliknięć',
          'Katalog popularnych usług z korzystnymi stawkami',
          'Płatności przez Monobank',
          'Panel admina do produktów i zamówień',
          'Szybkie podłączenie i wsparcie na każdym etapie',
          'Realizacja bez ręcznego wydawania dostępu',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead:
          'Bot-sklep subskrypcji: od wyboru usługi po płatność i zarządzanie zamówieniami w panelu.',
        items: [
          'Katalog: film, muzyka, VPN i inne',
          'Pełna ścieżka zamówienia w Telegram',
          'Płatności Monobank',
          'Panel admina produktów i zamówień',
          'Szybkie podłączenie po płatności',
          'Wsparcie na całej ścieżce',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Wygodny kanał sprzedaży subskrypcji w Telegram: szybkie zamówienie, Monobank, panel dla zespołu i mniej ręcznej rutyny.',
      },
    },
    ru: {
      breadcrumbLabel: 'Flix Market',
      heroTitle: 'Flix Market — бот для оформления подписок на сервисы',
      heroLead:
        'Онлайн-магазин в Telegram, где можно купить подписки на кино, музыку, VPN и другие сервисы быстро и выгоднее. Несколько нажатий в боте — и заказ оформлен с оплатой через Monobank.',
      visitSite: 'Открыть бота',
      stats: [
        { value: '1', label: 'оплата через Monobank' },
        { value: '↑', label: 'каталог подписок в боте' },
        { value: '1', label: 'админка товаров и заказов' },
        { value: '24/7', label: 'оформление без менеджера' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Продажа цифровых подписок требовала быстрого сценария внутри Telegram: каталог, оплата и поддержка без лишних шагов и ручной выдачи.',
        items: [
          'Клиент должен оформить подписку несколькими нажатиями',
          'Каталог популярных сервисов с выгодными тарифами',
          'Оплата через Monobank',
          'Админ-панель для товаров и заказов',
          'Оперативное подключение и поддержка на всех этапах',
          'Процесс без ручной выдачи доступа менеджером',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead:
          'Собрали бота-магазин подписок: от выбора сервиса до оплаты и управления заказами в админке.',
        items: [
          'Каталог подписок: кино, музыка, VPN и другое',
          'Полный сценарий оформления в Telegram',
          'Оплата через Monobank',
          'Админ-панель товаров и заказов',
          'Оперативное подключение после оплаты',
          'Поддержка на всех этапах сценария',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Удобный канал продаж подписок в Telegram: быстрое оформление, Monobank, админка для команды и сервис без лишней ручной рутины.',
      },
    },
  }),
};

const charsKyiv: CaseStudyDefinition = {
  id: 'chars-kyiv',
  liveUrl: 'https://charsua.com/',
  mainImage: '/portfolio/portfolio-chars-kyiv.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Chars',
      heroTitle: 'Chars — e-commerce платформа для онлайн-продажів',
      heroLead:
        'E-commerce платформа, де легко керувати товарами, приймати оплати й відстежувати замовлення без зайвих клопотів. Каталог із фільтрами, онлайн-оплата, Нова Пошта й Telegram-сповіщення про покупки.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '↑', label: 'фільтри: колір, розмір, ціна' },
        { value: '1', label: 'оплата онлайн' },
        { value: '1', label: 'доставка Новою Поштою' },
        { value: '1', label: 'Telegram-сповіщення про замовлення' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Бренду потрібен був простий онлайн-канал продажів без важкої системи: каталог, checkout, доставка й контроль замовлень у одному місці.',
        items: [
          'Каталог мав фільтруватись за кольором, розміром і ціною',
          'Сторінка товару — з фото та характеристиками',
          'Потрібні онлайн-оплата й доставка через Нову Пошту',
          'Адмін-панель для товарів і замовлень без складних процесів',
          'Команда мала миттєво дізнаватись про нові покупки',
          'Рішення мало лишатись простим для брендів без enterprise-стеку',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали e-commerce під щоденну роботу магазину: від каталогу до сповіщень про оплату.',
        items: [
          'Каталог із фільтрами за кольором, розміром і ціною',
          'Зручна сторінка товару з фото та характеристиками',
          'Оплата онлайн і доставка через Нову Пошту',
          'Адмін-панель для керування товарами та замовленнями',
          'Telegram-сповіщення про нові покупки',
          'Чистий інтерфейс для клієнтів і проста робота з аналітикою',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Менше ручної роботи, автоматизовані процеси й зручний інтерфейс для клієнтів. Просте рішення для брендів, які хочуть продавати онлайн без складних систем.',
      },
    },
    en: {
      breadcrumbLabel: 'Chars',
      heroTitle: 'Chars — e-commerce platform for online sales',
      heroLead:
        'An e-commerce platform to manage products, take payments and track orders without extra friction. Filtered catalog, online checkout, Nova Poshta delivery and Telegram alerts on purchases.',
      visitSite: 'Visit site',
      stats: [
        { value: '↑', label: 'filters: color, size, price' },
        { value: '1', label: 'online payments' },
        { value: '1', label: 'Nova Poshta delivery' },
        { value: '1', label: 'Telegram order alerts' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The brand needed a simple online sales channel without a heavy system: catalog, checkout, delivery and order control in one place.',
        items: [
          'Catalog filtering by color, size and price',
          'Product pages with photos and specs',
          'Online payments and Nova Poshta delivery',
          'Admin for products and orders without complex process',
          'Instant alerts on new purchases for the team',
          'A solution simple enough for brands without an enterprise stack',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built e-commerce for daily store operations: from catalog to payment alerts.',
        items: [
          'Catalog with color, size and price filters',
          'Clear product pages with photos and specs',
          'Online payments and Nova Poshta delivery',
          'Admin panel for products and orders',
          'Telegram notifications for new purchases',
          'Clean client UX and simple analytics workflows',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'Less manual work, automated processes and a clear interface for customers. A simple setup for brands that want to sell online without complex systems.',
      },
    },
    pl: {
      breadcrumbLabel: 'Chars',
      heroTitle: 'Chars — platforma e-commerce do sprzedaży online',
      heroLead:
        'Platforma e-commerce do zarządzania produktami, płatnościami i zamówieniami bez zbędnych komplikacji. Filtry, checkout, Nova Poshta i powiadomienia Telegram.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '↑', label: 'filtry: kolor, rozmiar, cena' },
        { value: '1', label: 'płatności online' },
        { value: '1', label: 'dostawa Nova Poshta' },
        { value: '1', label: 'alerty Telegram o zamówieniach' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Marce potrzebny był prosty kanał sprzedaży online bez ciężkiego systemu: katalog, checkout, dostawa i kontrola zamówień w jednym miejscu.',
        items: [
          'Filtry katalogu: kolor, rozmiar, cena',
          'Karty produktów ze zdjęciami i parametrami',
          'Płatności online i dostawa Nova Poshta',
          'Panel admina bez skomplikowanych procesów',
          'Natychmiastowe alerty o nowych zakupach',
          'Rozwiązanie proste dla marek bez enterprise-stacku',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead:
          'E-commerce pod codzienną pracę sklepu: od katalogu po alerty o płatności.',
        items: [
          'Katalog z filtrami koloru, rozmiaru i ceny',
          'Wygodna karta produktu',
          'Płatności online i Nova Poshta',
          'Panel produktów i zamówień',
          'Powiadomienia Telegram o zakupach',
          'Czysty UX i prosta praca z analityką',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Mniej ręcznej pracy, zautomatyzowane procesy i wygodny interfejs dla klientów. Proste rozwiązanie dla marek bez ciężkich systemów.',
      },
    },
    ru: {
      breadcrumbLabel: 'Chars',
      heroTitle: 'Chars — e-commerce платформа для онлайн-продаж',
      heroLead:
        'E-commerce платформа для управления товарами, оплаты и заказов без лишней сложности. Фильтры, онлайн-оплата, Новая Почта и Telegram-уведомления о покупках.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '↑', label: 'фильтры: цвет, размер, цена' },
        { value: '1', label: 'онлайн-оплата' },
        { value: '1', label: 'доставка Новой Почтой' },
        { value: '1', label: 'Telegram-уведомления о заказах' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Бренду нужен был простой онлайн-канал продаж без тяжёлой системы: каталог, checkout, доставка и контроль заказов в одном месте.',
        items: [
          'Фильтры каталога по цвету, размеру и цене',
          'Карточка товара с фото и характеристиками',
          'Онлайн-оплата и доставка Новой Почтой',
          'Админка товаров и заказов без сложных процессов',
          'Мгновенные алерты о новых покупках',
          'Решение, простое для брендов без enterprise-стека',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead:
          'Собрали e-commerce под ежедневную работу магазина: от каталога до уведомлений об оплате.',
        items: [
          'Каталог с фильтрами по цвету, размеру и цене',
          'Удобная страница товара',
          'Онлайн-оплата и Новая Почта',
          'Админ-панель товаров и заказов',
          'Telegram-уведомления о покупках',
          'Чистый UX и простая работа с аналитикой',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Меньше ручной работы, автоматизированные процессы и удобный интерфейс для клиентов. Простое решение для брендов без сложных систем.',
      },
    },
  }),
};

const smartBody: CaseStudyDefinition = {
  id: 'smart-bodycourse-bot',
  liveUrl: 'https://t.me/Smart_BodyCourse_Bot',
  mainImage: '/portfolio/portfolio-smart-bodycourse-bot.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Smart Body',
      heroTitle: 'Smart Body — EdTech-система продажу курсу в Telegram',
      heroLead:
        'Інструмент для автоматизації продажу та доставки контенту авторського курсу зі схуднення. Зручний онбординг, оплата через Monopay і миттєва видача файлів після підтвердження транзакції — автономний магазин 24/7.',
      visitSite: 'Відкрити бота',
      stats: [
        { value: '1', label: 'інтеграція Monopay' },
        { value: '↑', label: 'миттєва видача контенту' },
        { value: '24/7', label: 'автономні продажі' },
        { value: '0', label: 'ручних перевірок чеків' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Продаж курсу в Instagram тримався на ручному виставленні рахунків і перевірці чеків. Потрібно було поєднати онбординг, оплату та retention в одному Telegram-сценарії.',
        items: [
          'Потрібен був зручний онбординг у боті',
          'Оплата мала генеруватись унікальним посиланням прямо в чаті',
          'Після підтвердження транзакції контент мав видаватись миттєво',
          'Система утримання користувача мала працювати без менеджерів',
          'Ручна перевірка чеків в Instagram мала зникнути',
          'Магазин мав працювати автономно 24/7',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали EdTech-контур у Telegram: прогрів, продаж, оплата й доставка контенту в одному боті.',
        items: [
          'Онбординг і сценарій продажу авторського курсу',
          'Monopay: унікальні посилання на оплату прямо в чаті',
          'Миттєва видача файлів після підтвердження транзакції',
          'Логіка retention для утримання користувача після покупки',
          'Автономний цикл без ручного виставлення рахунків',
          'Мінімізація людського фактора й витрат на менеджерів',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Замовник отримав повністю автономний магазин: бот сам прогріває, продає, приймає оплати й видає товар. Без ручних чеків в Instagram і з роботою 24/7.',
      },
    },
    en: {
      breadcrumbLabel: 'Smart Body',
      heroTitle: 'Smart Body — EdTech course sales system in Telegram',
      heroLead:
        'A tool that automates selling and delivering an author’s weight-loss course. Smooth onboarding, Monopay checkout and instant file delivery after payment confirmation — an autonomous store running 24/7.',
      visitSite: 'Open bot',
      stats: [
        { value: '1', label: 'Monopay integration' },
        { value: '↑', label: 'instant content delivery' },
        { value: '24/7', label: 'autonomous sales' },
        { value: '0', label: 'manual receipt checks' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'Course sales on Instagram depended on manual invoicing and receipt checks. Onboarding, payment and retention had to live in one Telegram flow.',
        items: [
          'Smooth in-bot onboarding was required',
          'Payment links had to generate uniquely inside the chat',
          'Content had to unlock instantly after payment confirmation',
          'Retention had to work without managers',
          'Manual Instagram receipt checks had to disappear',
          'The store had to run autonomously 24/7',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built an EdTech loop in Telegram: warm-up, sell, pay and deliver content inside one bot.',
        items: [
          'Onboarding and sales flow for the author’s course',
          'Monopay: unique payment links inside the chat',
          'Instant file delivery after transaction confirmation',
          'Retention logic after purchase',
          'Autonomous cycle without manual invoicing',
          'Less human factor and lower manager costs',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'The client got a fully autonomous store: the bot warms up, sells, takes payments and delivers the product — without manual Instagram receipts, running 24/7.',
      },
    },
    pl: {
      breadcrumbLabel: 'Smart Body',
      heroTitle: 'Smart Body — system EdTech sprzedaży kursu w Telegram',
      heroLead:
        'Narzędzie do automatyzacji sprzedaży i dostawy treści autorskiego kursu odchudzania. Onboarding, Monopay i natychmiastowa wydanie plików po płatności — autonomiczny sklep 24/7.',
      visitSite: 'Otwórz bota',
      stats: [
        { value: '1', label: 'integracja Monopay' },
        { value: '↑', label: 'natychmiastowa dostawa treści' },
        { value: '24/7', label: 'autonomiczna sprzedaż' },
        { value: '0', label: 'ręcznych sprawdzeń płatności' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Sprzedaż kursu na Instagramie opierała się na ręcznym wystawianiu rachunków i sprawdzaniu płatności. Onboarding, płatność i retention musiały żyć w jednej ścieżce Telegram.',
        items: [
          'Wygodny onboarding w bocie',
          'Unikalne linki płatności w czacie',
          'Natychmiastowa wydanie treści po potwierdzeniu',
          'Retention bez managerów',
          'Koniec ręcznego sprawdzania płatności na Instagramie',
          'Autonomiczny sklep 24/7',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead:
          'Kontur EdTech w Telegram: rozgrzewka, sprzedaż, płatność i dostawa treści w jednym bocie.',
        items: [
          'Onboarding i ścieżka sprzedaży kursu',
          'Monopay: unikalne linki w czacie',
          'Natychmiastowa dostawa plików po płatności',
          'Logika retention po zakupie',
          'Autonomiczny cykl bez ręcznych faktur',
          'Mniej czynnika ludzkiego i kosztów managerów',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'W pełni autonomiczny sklep: bot rozgrzewa, sprzedaje, przyjmuje płatności i wydaje produkt — bez ręcznych płatności na Instagramie, 24/7.',
      },
    },
    ru: {
      breadcrumbLabel: 'Smart Body',
      heroTitle: 'Smart Body — EdTech-система продажи курса в Telegram',
      heroLead:
        'Инструмент автоматизации продажи и доставки контента авторского курса похудения. Онбординг, оплата через Monopay и мгновенная выдача файлов после подтверждения транзакции — автономный магазин 24/7.',
      visitSite: 'Открыть бота',
      stats: [
        { value: '1', label: 'интеграция Monopay' },
        { value: '↑', label: 'мгновенная выдача контента' },
        { value: '24/7', label: 'автономные продажи' },
        { value: '0', label: 'ручных проверок чеков' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Продажа курса в Instagram держалась на ручном выставлении счетов и проверке чеков. Нужно было соединить онбординг, оплату и retention в одном Telegram-сценарии.',
        items: [
          'Удобный онбординг в боте',
          'Уникальные ссылки на оплату прямо в чате',
          'Мгновенная выдача контента после подтверждения',
          'Retention без менеджеров',
          'Отказ от ручной проверки чеков в Instagram',
          'Автономный магазин 24/7',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead:
          'Собрали EdTech-контур в Telegram: прогрев, продажа, оплата и доставка контента в одном боте.',
        items: [
          'Онбординг и сценарий продажи авторского курса',
          'Monopay: уникальные ссылки на оплату в чате',
          'Мгновенная выдача файлов после подтверждения',
          'Логика retention после покупки',
          'Автономный цикл без ручных счетов',
          'Минимум человеческого фактора и затрат на менеджеров',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Полностью автономный магазин: бот сам прогревает, продаёт, принимает оплаты и выдаёт товар — без ручных чеков в Instagram и с работой 24/7.',
      },
    },
  }),
};

import { MORE_CASE_STUDIES } from '@/lib/caseStudiesMore';
import { BATCH3_CASE_STUDIES } from '@/lib/caseStudiesBatch3';
import { BATCH4_CASE_STUDIES } from '@/lib/caseStudiesBatch4';

const STUDIES: Record<string, CaseStudyDefinition> = {
  [tradeground.id]: tradeground,
  [thirteenVplus.id]: thirteenVplus,
  [drTolstikova.id]: drTolstikova,
  [nieznanyPiekarz.id]: nieznanyPiekarz,
  [applum.id]: applum,
  [flixmarket.id]: flixmarket,
  [charsKyiv.id]: charsKyiv,
  [smartBody.id]: smartBody,
  ...MORE_CASE_STUDIES,
  ...BATCH3_CASE_STUDIES,
  ...BATCH4_CASE_STUDIES,
};

export function getCaseStudy(caseId: string): CaseStudyDefinition | undefined {
  return STUDIES[caseId];
}

export function getCaseStudyCopy(caseId: string, lang: Language): CaseStudyCopy | undefined {
  const study = getCaseStudy(caseId);
  if (!study) return undefined;
  return study.copy[lang] || study.copy.uk;
}
