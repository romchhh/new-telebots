import { Language } from '@/components/translations';

export type PricingSectionId = 'websites' | 'chatbots' | 'design';

export interface PricingSectionCopy {
  id: PricingSectionId;
  bullets: string[];
  paragraphs: string[];
}

export interface PricingPageCopy {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  h1: string;
  subtitle: string;
  intro: string;
  introSecondary: string;
  paymentAndEstimate: string;
  factorsTitle: string;
  factorsItems: string[];
  factorsClosing: string;
  timelineTitle: string;
  timelineParagraphs: string[];
  supportTitle: string;
  supportParagraphs: string[];
  techStackTitle: string;
  techStackParagraphs: string[];
  sections: PricingSectionCopy[];
  closingSeo: string;
  disclaimer: string;
  ctaBanner: string;
  btnServicePage: string;
  btnConsult: string;
  btnContactForm: string;
  linkAllServices: string;
  formSectionEyebrow: string;
}

export const pricingPageCopy: Record<Language, PricingPageCopy> = {
  uk: {
    metaTitle: 'Ціни на розробку сайтів і Telegram-ботів — орієнтири TeleBots',
    metaDescription:
      'Вилки вартості: лендинги, сайти, інтернет-магазини, Telegram-боти з оплатою та CRM, UI/UX. Що формує бюджет і терміни, етапи оплати. Консультація безкоштовно. TeleBots — Україна та віддалено.',
    metaKeywords:
      'ціни розробка сайту київ, вартість телеграм бота, лендинг ціна україна, чат-бот замовити вартість, розробка інтернет магазину ціна, UI UX дизайн вартість, веб студія телеграм бот, орієнтир вартості розробки сайту',
    h1: 'Ціни на розробку сайтів і Telegram-ботів у TeleBots',
    subtitle:
      'Прозорі діапазони бюджету для сайтів, ботів і дизайну: орієнтуйтесь у вилках, а точну суму отримайте після брифу та узгодженого ТЗ.',
    intro:
      'На цій сторінці зібрані орієнтовні діапазони вартості розробки сайтів, чат-ботів у месенджерах та дизайну інтерфейсів. Фінальна ціна завжди залежить від обсягу інтеграцій, кількості мов, рівня кастомізації, дедлайнів і супроводу після запуску — тому перед стартом ми узгоджуємо технічне завдання та комерційну пропозицію без прихованих пунктів.',
    introSecondary:
      'TeleBots спеціалізується на веб-розробці (Next.js та сучасний стек), Telegram-ботах з оплатою та CRM, а також на UI/UX і брендингу. Ми працюємо з бізнесом по всій Україні та з міжнародними замовниками: комунікація українською, англійською, польською та російською. Типові проєкти — від лендінгів і каталогів до складних e-commerce та багатокрокових ботів з адмін-панелями. Сторінка корисна для SEO-запитів на кшталт «скільки коштує розробка сайту», «вартість телеграм-бота з оплатою», «ціни на дизайн сайту під ключ» — нижче наведено структуровані вилки та фактори, що рухають бюджет.',
    paymentAndEstimate:
      'Оплата зазвичай розбивається на етапи: перед стартом робіт і після приймання результату або по спринтах для великих систем. Можливі переказ на ФОП, рахунок для юридичних осіб, а також міжнародні платежі за домовленістю. Після короткого брифу ми даємо зрозумілу оцінку термінів і бюджету; якщо потрібно — пропонуємо поетапний запуск (MVP), щоб швидше вийти на ринок і доробити функціонал пізніше. Валюта в комерційних пропозиціях може бути в доларах США або еквіваленті в гривні за курсом на дату рахунку.',
    factorsTitle: 'Що найбільше впливає на вартість',
    factorsItems: [
      'Обсяг інтеграцій: CRM, платежі, склад, маркетингові пікселі, внутрішні API та кількість сторонніх сервісів.',
      'Кількість унікальних шаблонів сторінок, мовних версій і ролей користувачів (гість, клієнт, адміністратор).',
      'Рівень кастомізації дизайну замість готових шаблонів і кількість ітерацій правок після узгодження макетів.',
      'Терміни: стислі дедлайни потребують паралельної роботи і часто збільшують бюджет порівняно з стандартним графіком.',
      'Підтримка після запуску: лише критичні виправлення, регулярні оновлення залежностей, або повний супровід з пріоритетом у черзі.',
    ],
    factorsClosing:
      'Для порівняння: два проєкти з однаковою «назвою» (наприклад, «інтернет-магазин») можуть суттєво відрізнятися за ціною, якщо в одному 200 товарів у двох мовах без складу, а в іншому — синхронізація з ERP, промокоди та складські залишки в реальному часі.',
    timelineTitle: 'Терміни та етапи роботи',
    timelineParagraphs: [
      'Типовий лендинг або невеликий корпоративний сайт: від 2 до 6 тижнів з моменту затвердженого ТЗ і контенту. Інтернет-магазин середньої складності часто потребує 6–12 тижнів залежно від інтеграцій, кількості мов і тестування оплат.',
      'Telegram-бот з оплатою та CRM зазвичай проходить етапи: прототип сценаріїв → розробка → тести на staging → запуск у продакшн; для складних систем можливі спринти по 2 тижні з демо та прийманням.',
    ],
    supportTitle: 'Підтримка та розвиток після запуску',
    supportParagraphs: [
      'Після релізу ми можемо залишатися на звʼязку: оновлення залежностей, моніторинг доступності, дрібні правки текстів і зображень, додавання нових блоків на сайті або сценаріїв у боті — обсяг фіксується окремим пакетом або погодинно.',
      'Якщо ви плануєте регулярні оновлення каталогу, акції та A/B-тести лендингів, варто закласти бюджет на супровід на квартал наперед — так швидше проходить погодження і пріоритизація задач.',
    ],
    techStackTitle: 'Технології та якість',
    techStackParagraphs: [
      'Для вебу використовуємо сучасний стек (зокрема React/Next.js), адаптивну верстку, семантичну розмітку та оптимізацію швидкості завантаження — це важливо і для SEO, і для користувачів на мобільних.',
      'Боти будуємо з урахуванням стабільності webhook-ів, обробки помилок платіжних провайдерів і зручної адмін-панелі для вашої команди, щоб не залежати від розробника для кожної дрібної зміни в текстах.',
    ],
    sections: [
      {
        id: 'websites',
        bullets: [
          'Лендинги та промо-сторінки з формами заявок і базовою аналітикою',
          'Корпоративні сайти з кількома розділами, блогом, мультимовністю',
          'Інтернет-магазини: каталог, кошик, інтеграції оплати (LiqPay, WayForPay, MonoPay тощо)',
          'SEO-структура URL, мета-теги, швидкість завантаження (Core Web Vitals)',
          'Інтеграції з CRM, email-розсилками, рекламними пікселями та месенджерами',
        ],
        paragraphs: [
          'Типовий лендінг або сайт-візитка з адаптивною версткою та адмінкою часто вкладається в нижню частину діапазону; вартість зростає разом із кількістю унікальних шаблонів сторінок, фільтрами в каталозі, особистими кабінетами та нестандартними інтеграціями.',
          'Для інтернет-магазинів важливі обсяг номенклатури, синхронізація з обліковими системами, складські залишки та сценарії промо — усе це обговорюється на етапі оцінки. Після запуску пропонуємо технічний супровід: оновлення залежностей, моніторинг, дрібні правки контенту.',
        ],
      },
      {
        id: 'chatbots',
        bullets: [
          'Сценарії продажів, підтримки, запису на послуги та розсилки з сегментацією',
          'Оплата в боті, кошик, звʼязка з Google Sheets / CRM / внутрішніми API',
          'Мультимовність, ролі адміністраторів, логування звернень',
          'Інтеграція ШІ (за потреби) для відповідей у межах вашої бази знань',
        ],
        paragraphs: [
          'Простий інформаційний бот з кількома гілками діалогу коштує менше, ніж система з оплатою, особистими кабінетами та синхронізацією замовлень. Чим більше зовнішніх сервісів підключається, тим більше часу йде на стабільність і тестування.',
          'Ми допомагаємо сформувати мінімально життєздатний продукт (MVP) бота, щоб швидко перевірити гіпотезу, а потім нарощувати функціонал без «переписування з нуля».',
        ],
      },
      {
        id: 'design',
        bullets: [
          'UX-дослідження структури, прототипи, UI-кит у Figma',
          'Логотип, гайдлайни кольорів і типографіки для вебу та соцмереж',
          'Адаптація макетів під розробку, передача активів розробникам',
        ],
        paragraphs: [
          'Вартість залежить від кількості екранів, станів інтерфейсу та необхідності розширеного брендбуку. Для невеликих проєктів достатньо чіткого UI-киту; для екосистеми бренду — повний пакет носіїв і узгодження з маркетингом.',
          'Дизайн можна замовити окремо або в пакеті з розробкою сайту чи бота — так узгодження між дизайном і кодом швидше, а правки дешевші на етапі прототипу.',
        ],
      },
    ],
    closingSeo:
      'Якщо ви шукаєте підрядника на розробку сайту під ключ, телеграм-бота з оплатою або редизайн продукту — надішліть опис задачі через форму нижче або замовте безкоштовну консультацію. Ми підкажемо оптимальний стек, орієнтовний бюджет і терміни, щоб ви могли порівняти пропозицію з іншими виконавцями на прозорих умовах. Для великих проєктів можемо підготувати порівняльну таблицю етапів і орієнтовних витрат по кожному модулі.',
    disclaimer:
      'Усі суми на сторінці є орієнтирами, а не публічною офертою. Актуальна вартість фіксується в комерційній пропозиції або договорі після узгодження ТЗ.',
    ctaBanner:
      'Потрібна точна оцінка під ваш проєкт? Оберіть зручний спосіб звʼязку — сторінка послуги, форма або коротка консультація.',
    btnServicePage: 'Сторінка послуги',
    btnConsult: 'Консультація',
    btnContactForm: 'До форми заявки',
    linkAllServices: 'Усі послуги',
    formSectionEyebrow: 'Заявка',
  },
  en: {
    metaTitle: 'Pricing for websites, chatbots & design — TeleBots estimates',
    metaDescription:
      'Indicative price ranges for landing pages, corporate sites, e-commerce, Telegram bots and UI/UX. What drives cost, timelines and payment milestones. Free consultation. TeleBots — Ukraine, remote worldwide.',
    metaKeywords:
      'website development cost Ukraine, telegram bot price, landing page pricing, ecommerce development quote, UI UX design cost, chatbot development estimate, hire web agency TeleBots',
    h1: 'Pricing and cost estimates — TeleBots',
    subtitle:
      'Clear budget bands for sites, bots and design — use the ranges as a guide; the exact quote follows your brief and agreed scope.',
    intro:
      'This page lists indicative budget ranges for websites, messenger chatbots and interface design. The final quote depends on integrations, languages, customization level, deadlines and post-launch support — we always align scope and price in a written proposal before work starts.',
    introSecondary:
      'TeleBots focuses on modern web (including Next.js), Telegram bots with payments and CRM hooks, plus UI/UX and branding. We work with clients across Ukraine and internationally and communicate in Ukrainian, English, Polish and Russian. Typical projects range from landing pages to complex e-commerce and multi-step bots with admin panels. This page targets searches like “how much does a website cost”, “Telegram bot with payment price” and “UI/UX design rates” — we outline structured tiers and cost drivers below.',
    paymentAndEstimate:
      'Payments are usually split into milestones: before kick-off and after acceptance, or per sprint for larger builds. Bank transfer to sole proprietor, invoicing for companies, and international options are available where agreed. After a short brief we provide a clear timeline and budget; when useful we suggest a phased MVP launch. Quotes may be in USD or local currency equivalent at the invoice date.',
    factorsTitle: 'What drives the price most',
    factorsItems: [
      'Integration scope: CRM, payments, inventory, marketing pixels, internal APIs and number of third-party systems.',
      'Unique page templates, languages and user roles (guest, customer, admin).',
      'Design customization vs templates and the number of revision rounds after sign-off.',
      'Deadlines: tight deadlines often require parallel work and a higher budget than a standard schedule.',
      'Post-launch: hotfixes only, regular dependency updates, or full retainers with priority queue.',
    ],
    factorsClosing:
      'Two projects with the same label (“web store”) can differ a lot: one may be 200 SKUs in two languages without stock sync, another may sync with ERP, promo codes and real-time inventory.',
    timelineTitle: 'Timelines and phases',
    timelineParagraphs: [
      'Typical landing or small corporate site: about 2–6 weeks from a signed spec and content. Mid-size e-commerce often needs 6–12 weeks depending on integrations, languages and payment testing.',
      'A Telegram bot with payments and CRM usually follows: flow prototype → build → staging tests → production launch; larger systems may use 2-week sprints with demos and acceptance.',
    ],
    supportTitle: 'Support and evolution after launch',
    supportParagraphs: [
      'After go-live we can stay on retainer: dependency updates, uptime checks, minor copy/image tweaks, new blocks on the site or new bot flows — as a fixed package or hourly.',
      'If you plan frequent catalog updates, campaigns and landing experiments, budgeting quarterly support upfront speeds up prioritisation and approvals.',
    ],
    techStackTitle: 'Technology and quality',
    techStackParagraphs: [
      'For the web we use a modern stack (including React/Next.js), responsive layouts, semantic HTML and performance tuning — important for SEO and mobile users.',
      'Bots are built with reliable webhooks, payment error handling and an admin UI your team can use without a developer for every text change.',
    ],
    sections: [
      {
        id: 'websites',
        bullets: [
          'Landing pages with lead forms and basic analytics',
          'Corporate sites with multiple sections, blog, multilingual setup',
          'E-commerce: catalog, cart, payment integrations (LiqPay, WayForPay, MonoPay, etc.)',
          'SEO-friendly URLs, meta, performance (Core Web Vitals)',
          'CRM, email, ads pixels and messenger integrations',
        ],
        paragraphs: [
          'A typical responsive marketing site with CMS often sits in the lower half of the range; cost grows with unique templates, advanced catalog filters, user areas and custom integrations.',
          'For online stores, assortment size, stock sync and promo logic drive effort. After launch we offer maintenance: dependency updates, monitoring and content tweaks.',
        ],
      },
      {
        id: 'chatbots',
        bullets: [
          'Sales/support flows, bookings, segmented broadcasts',
          'In-bot payments, cart, Google Sheets / CRM / internal API links',
          'Multilingual UI, admin roles, conversation logging',
          'Optional AI layer grounded in your knowledge base',
        ],
        paragraphs: [
          'A small FAQ-style bot costs less than a system with payments, user accounts and order sync. More external services mean more testing and hardening.',
          'We help shape an MVP bot to validate the idea quickly, then extend features without rewriting from scratch.',
        ],
      },
      {
        id: 'design',
        bullets: [
          'UX structure, prototypes, Figma UI kit',
          'Logo, colour & typography guidelines for web and social',
          'Hand-off ready for developers',
        ],
        paragraphs: [
          'Pricing scales with screen count, states and brand scope. Small projects need a tight UI kit; larger brands need full guidelines and marketing alignment.',
          'Design can be booked alone or bundled with web/bot delivery for smoother design–dev handoff.',
        ],
      },
    ],
    closingSeo:
      'If you need a turnkey website, a payment-enabled Telegram bot or a product redesign, use the form below or book a free consultation. We will suggest stack, ballpark budget and timeline so you can compare options transparently. For large builds we can break down modules and indicative costs per stage.',
    disclaimer:
      'All figures here are indicative, not a binding offer. The binding price is set in the quote or contract after the scope is agreed.',
    ctaBanner:
      'Need an exact estimate? Pick what suits you — service page, form or a short consultation.',
    btnServicePage: 'Service page',
    btnConsult: 'Consultation',
    btnContactForm: 'Go to contact form',
    linkAllServices: 'All services',
    formSectionEyebrow: 'Request',
  },
  pl: {
    metaTitle: 'Ceny stron, botów Telegram i designu — orientacyjnie TeleBots',
    metaDescription:
      'Orientacyjne widełki: landingi, strony firmowe, sklepy online, boty Telegram, UI/UX. Co wpływa na koszt, terminy i etapy płatności. Darmowa konsultacja. TeleBots — Ukraina, praca zdalna.',
    metaKeywords:
      'koszt strony www, cena bota telegram, landing page cena, sklep internetowy wycena, projektowanie UI UX cena, chatbot dla firmy cena',
    h1: 'Ceny i orientacyjne koszty — TeleBots',
    subtitle:
      'Przejrzyste przedziały cenowe dla stron, botów i designu — widełki pomagają zaplanować budżet; dokładna wycena po briefie i zakresie.',
    intro:
      'Na tej stronie zebraliśmy orientacyjne przedziały cenowe dla stron internetowych, botów w komunikatorach oraz projektowania interfejsów. Ostateczna wycena zależy od integracji, języków, poziomu customizacji, terminów i wsparcia po starcie — zakres i cena są zawsze uzgadniane w ofercie przed rozpoczęciem prac.',
    introSecondary:
      'TeleBots realizuje nowoczesne strony (m.in. Next.js), boty Telegram z płatnościami i CRM, a także UI/UX i branding. Współpracujemy z klientami z Ukrainy i zagranicą; komunikacja po ukraińsku, angielsku, polsku i rosyjsku. Projekty od landingów po rozbudowane e-commerce i wieloetapowe boty z panelami administracyjnymi. Poniżej: strukturalne widełki i czynniki kosztów — przydatne przy zapytaniach typu „ile kosztuje strona internetowa” czy „cena bota Telegram z płatnością”.',
    paymentAndEstimate:
      'Płatności zwykle dzielimy na etapy: przed startem i po odbiorze lub sprintami przy większych systemach. Możliwy przelew na działalność jednoosobową, faktura dla firm oraz płatności międzynarodowe po uzgodnieniu. Po krótkim briefie podajemy orientacyjny harmonogram i budżet; często proponujemy fazowy MVP. Kwoty mogą być w USD lub przeliczeniu w PLN według kursu z dnia faktury.',
    factorsTitle: 'Co najbardziej wpływa na koszt',
    factorsItems: [
      'Zakres integracji: CRM, płatności, magazyn, piksele reklamowe, API i liczba systemów zewnętrznych.',
      'Liczba unikalnych szablonów, wersji językowych i ról użytkowników.',
      'Stopień customizacji designu vs szablony oraz liczba iteracji po akceptacji makiet.',
      'Terminy: krótkie deadliny często wymagają pracy równoległej i wyższego budżetu.',
      'Wsparcie po wdrożeniu: tylko krytyczne poprawki, regularne aktualizacje lub pełny retainer z priorytetem.',
    ],
    factorsClosing:
      'Dwa „sklepy internetowe” mogą mocno różnić się kosztem: w jednym 200 SKU w dwóch językach bez magazynu, w drugim synchronizacja z ERP, kody promocyjne i stany na żywo.',
    timelineTitle: 'Terminy i fazy',
    timelineParagraphs: [
      'Typowy landing lub niewielka strona firmowa: ok. 2–6 tygodni od zamkniętego zakresu i treści. Średni e-commerce często 6–12 tygodni w zależności od integracji i testów płatności.',
      'Bot Telegram z płatnością i CRM: prototyp → development → testy na staging → produkcja; większe systemy mogą pracować w sprintach 2-tygodniowych.',
    ],
    supportTitle: 'Wsparcie i rozwój po starcie',
    supportParagraphs: [
      'Po wdrożeniu możemy zostać na utrzymaniu: aktualizacje, monitoring, drobne zmiany treści, nowe bloki na stronie lub scenariusze w bocie — pakiet lub stawka godzinowa.',
      'Przy częstych promocjach i testach landingów warto zaplanować budżet kwartalny z góry.',
    ],
    techStackTitle: 'Technologie i jakość',
    techStackParagraphs: [
      'Do stron używamy m.in. React/Next.js, responsywności, semantyki i optymalizacji wydajności — ważne pod SEO i mobile.',
      'Boty projektujemy ze stabilnymi webhookami, obsługą błędów płatności i panelem admina dla zespołu.',
    ],
    sections: [
      {
        id: 'websites',
        bullets: [
          'Landingi z formularzami leadów i podstawową analityką',
          'Strony firmowe z wieloma sekcjami, blogiem, wielojęzycznością',
          'E-commerce: katalog, koszyk, integracje płatności (LiqPay, WayForPay, MonoPay itd.)',
          'Struktura pod SEO, meta, wydajność (Core Web Vitals)',
          'Integracje z CRM, e-mail, pikselami reklam i komunikatorami',
        ],
        paragraphs: [
          'Typowa responsywna strona z CMS często mieści się w dolnej części widełek; koszt rośnie wraz z liczbą unikalnych szablonów, filtrów w katalogu, strefami użytkownika i niestandardowymi integracjami.',
          'W sklepach ważna jest wielkość asortymentu, synchronizacja stanów i logika promocji — to ustalamy przy wycenie. Po wdrożeniu oferujemy utrzymanie: aktualizacje, monitoring, drobne poprawki treści.',
        ],
      },
      {
        id: 'chatbots',
        bullets: [
          'Scenariusze sprzedaży, supportu, rezerwacji, segmentowane wysyłki',
          'Płatność w bocie, koszyk, Google Sheets / CRM / wewnętrzne API',
          'Wielojęzyczność, role administratorów, logowanie rozmów',
          'Opcjonalnie warstwa AI oparta o Twoją bazę wiedzy',
        ],
        paragraphs: [
          'Prosty bot informacyjny kosztuje mniej niż system z płatnościami, kontami użytkowników i synchronizacją zamówień. Więcej usług zewnętrznych oznacza więcej testów.',
          'Pomagamy zbudować MVP bota, aby szybko zweryfikować pomysł, a potem rozwijać funkcje bez przepisywania projektu od zera.',
        ],
      },
      {
        id: 'design',
        bullets: [
          'Struktura UX, prototypy, zestaw UI w Figmie',
          'Logo, paleta kolorów i typografia pod web i social media',
          'Przekazanie plików pod wdrożenie dla developerów',
        ],
        paragraphs: [
          'Cena zależy od liczby ekranów, stanów interfejsu i zakresu brandingu. Małe projekty potrzebują zwięzłego UI kitu; duże marki — pełnych wytycznych.',
          'Design można zamówić osobno lub w pakiecie ze stroną lub botem — wtedy przekazanie do kodu jest szybsze i tańsze na etapie prototypu.',
        ],
      },
    ],
    closingSeo:
      'Szukasz wykonawcy strony pod klucz, bota Telegram z płatnością lub redesignu produktu? Wyślij opis zadania w formularzu lub zamów bezpłatną konsultację. Podpowiemy stack, orientacyjny budżet i terminy przy przejrzystych założeniach. Przy dużych projektach możemy rozłożyć koszty na moduły i etapy.',
    disclaimer:
      'Kwoty na stronie mają charakter orientacyjny i nie stanowią oferty w rozumieniu prawa. Wiążąca cena jest ustalana w ofercie lub umowie po uzgodnieniu zakresu.',
    ctaBanner:
      'Potrzebujesz dokładnej wyceny? Wybierz dogodną opcję — strona usługi, formularz lub krótka konsultacja.',
    btnServicePage: 'Strona usługi',
    btnConsult: 'Konsultacja',
    btnContactForm: 'Do formularza',
    linkAllServices: 'Wszystkie usługi',
    formSectionEyebrow: 'Zgłoszenie',
  },
  ru: {
    metaTitle: 'Цены на разработку сайтов, чат-ботов и дизайна — ориентиры TeleBots',
    metaDescription:
      'Ориентировочные вилки цен на лендинги, корпоративные сайты, интернет-магазины, Telegram-ботов и UI/UX. От чего зависит бюджет, сроки и этапы оплаты. Бесплатная консультация. TeleBots — Киев, Украина, удалённо по миру.',
    metaKeywords:
      'цена разработка сайта, стоимость телеграм бота, лендинг цена, чат-бот стоимость, интернет магазин разработка цена, UI UX дизайн стоимость, веб-студия телеграм бот',
    h1: 'Цены и ориентиры стоимости услуг TeleBots',
    subtitle:
      'Понятные диапазоны бюджета для сайтов, ботов и дизайна — ориентируйтесь по вилкам; точная сумма после брифа и согласованного ТЗ.',
    intro:
      'На этой странице собраны ориентировочные диапазоны стоимости разработки сайтов, чат-ботов в мессенджерах и дизайна интерфейсов. Итоговая цена зависит от интеграций, языков, уровня кастомизации, сроков и сопровождения после запуска — поэтому перед стартом мы согласуем техническое задание и коммерческое предложение без скрытых пунктов.',
    introSecondary:
      'TeleBots специализируется на веб-разработке (в том числе Next.js), Telegram-ботах с оплатой и CRM, а также на UI/UX и брендинге. Работаем с бизнесом по Украине и с международными заказчиками; коммуникация на украинском, английском, польском и русском. Типичные проекты — от лендингов и каталогов до сложного e-commerce и многошаговых ботов с админ-панелями. Ниже — структурированные вилки и факторы, влияющие на стоимость, в том числе под запросы «сколько стоит разработка сайта», «цена телеграм-бота с оплатой», «стоимость дизайна сайта под ключ».',
    paymentAndEstimate:
      'Оплата обычно делится на этапы: перед началом работ и после приёмки или спринтами для крупных систем. Возможен перевод на ФОП, счёт для юрлиц, а также международные платежи по договорённости. После короткого брифа даём понятную оценку сроков и бюджета; при необходимости предлагаем поэтапный запуск (MVP). В коммерческих предложениях суммы могут быть в USD или эквиваленте в гривне по курсу на дату счёта.',
    factorsTitle: 'Что сильнее всего влияет на стоимость',
    factorsItems: [
      'Объём интеграций: CRM, платежи, склад, рекламные пиксели, внутренние API и число внешних сервисов.',
      'Количество уникальных шаблонов страниц, языковых версий и ролей пользователей.',
      'Уровень кастомизации дизайна и число итераций правок после согласования макетов.',
      'Сроки: сжатые дедлайны часто требуют параллельной работы и увеличения бюджета.',
      'Сопровождение после запуска: только критические исправления, регулярные обновления или полный ретейнер с приоритетом в очереди.',
    ],
    factorsClosing:
      'Два проекта с одинаковым названием («интернет-магазин») могут сильно отличаться по цене: в одном 200 товаров на двух языках без складского учёта, в другом — синхронизация с ERP, промокоды и остатки в реальном времени.',
    timelineTitle: 'Сроки и этапы работы',
    timelineParagraphs: [
      'Типичный лендинг или небольшой корпоративный сайт: порядка 2–6 недель после утверждённого ТЗ и контента. Средний интернет-магазин часто 6–12 недель в зависимости от интеграций, языков и тестирования оплат.',
      'Telegram-бот с оплатой и CRM обычно проходит этапы: прототип сценариев → разработка → тесты на staging → запуск; для сложных систем возможны спринты по 2 недели с демо и приёмкой.',
    ],
    supportTitle: 'Поддержка и развитие после запуска',
    supportParagraphs: [
      'После релиза можем оставаться на связи: обновления зависимостей, мониторинг доступности, мелкие правки текстов и изображений, новые блоки на сайте или сценарии в боте — отдельным пакетом или погодово.',
      'Если планируются частые обновления каталога, акции и A/B-тесты лендингов, разумно заложить бюджет на сопровождение кварталом вперёд — так быстрее согласуются приоритеты задач.',
    ],
    techStackTitle: 'Технологии и качество',
    techStackParagraphs: [
      'Для веба используем современный стек (в том числе React/Next.js), адаптивную вёрстку, семантическую разметку и оптимизацию скорости — это важно и для SEO, и для мобильных пользователей.',
      'Боты строим с учётом стабильности webhook-ов, обработки ошибок платёжных провайдеров и удобной админ-панели для вашей команды.',
    ],
    sections: [
      {
        id: 'websites',
        bullets: [
          'Лендинги и промо-страницы с формами заявок и базовой аналитикой',
          'Корпоративные сайты с несколькими разделами, блогом, мультиязычностью',
          'Интернет-магазины: каталог, корзина, интеграции оплаты (LiqPay, WayForPay, MonoPay и др.)',
          'SEO-структура URL, мета-теги, скорость загрузки (Core Web Vitals)',
          'Интеграции с CRM, email-рассылками, рекламными пикселями и мессенджерами',
        ],
        paragraphs: [
          'Типичный лендинг или сайт-визитка с адаптивной вёрсткой и админкой часто укладывается в нижнюю часть диапазона; стоимость растёт вместе с числом уникальных шаблонов страниц, фильтрами в каталоге, личными кабинетами и нестандартными интеграциями.',
          'Для интернет-магазинов важны объём номенклатуры, синхронизация с учётными системами, складские остатки и промо-сценарии — всё это обсуждается на этапе оценки. После запуска предлагаем техническое сопровождение: обновления, мониторинг, мелкие правки контента.',
        ],
      },
      {
        id: 'chatbots',
        bullets: [
          'Сценарии продаж, поддержки, записи на услуги и рассылки с сегментацией',
          'Оплата в боте, корзина, связка с Google Sheets / CRM / внутренними API',
          'Мультиязычность, роли администраторов, логирование обращений',
          'Интеграция ИИ (по необходимости) для ответов в рамках вашей базы знаний',
        ],
        paragraphs: [
          'Простой информационный бот с несколькими ветками диалога стоит меньше, чем система с оплатой, личными кабинетами и синхронизацией заказов. Чем больше внешних сервисов подключается, тем больше времени уходит на стабильность и тестирование.',
          'Мы помогаем сформировать минимально жизнеспособный продукт (MVP) бота, чтобы быстро проверить гипотезу, а затем наращивать функционал без «переписывания с нуля».',
        ],
      },
      {
        id: 'design',
        bullets: [
          'UX-структура, прототипы, UI-кит в Figma',
          'Логотип, гайдлайны цветов и типографики для веба и соцсетей',
          'Адаптация макетов под разработку, передача активов разработчикам',
        ],
        paragraphs: [
          'Стоимость зависит от количества экранов, состояний интерфейса и необходимости расширенного брендбука. Для небольших проектов достаточно чёткого UI-кита; для экосистемы бренда — полный пакет носителей.',
          'Дизайн можно заказать отдельно или в пакете с разработкой сайта или бота — так согласование между дизайном и кодом быстрее, а правки дешевле на этапе прототипа.',
        ],
      },
    ],
    closingSeo:
      'Если вы ищете подрядчика на разработку сайта под ключ, телеграм-бота с оплатой или редизайн продукта — пришлите описание задачи через форму ниже или закажите бесплатную консультацию. Мы подскажем стек, ориентировочный бюджет и сроки на прозрачных условиях. Для крупных проектов можем привести разбивку по модулям и этапам.',
    disclaimer:
      'Все суммы на странице являются ориентирами, а не публичной офертой. Актуальная стоимость фиксируется в коммерческом предложении или договоре после согласования ТЗ.',
    ctaBanner:
      'Нужна точная оценка под ваш проект? Выберите удобный способ — страница услуги, форма или короткая консультация.',
    btnServicePage: 'Страница услуги',
    btnConsult: 'Консультация',
    btnContactForm: 'К форме заявки',
    linkAllServices: 'Все услуги',
    formSectionEyebrow: 'Заявка',
  },
};
