import type { Language } from '@/components/translations';

export type PartnershipDirectionId = 'smm' | 'target' | 'marketing' | 'agency' | 'other';

export type PartnershipCaseExample = {
  id: string;
  niche: string;
  task: string;
  solution: string;
  result: string;
};

/** Реальні кейси з /portfolio для горизонтального ряду на сторінці партнерів. */
export const PARTNERSHIP_SHOWCASE_IDS = [
  'emaro-autocare',
  'newlineschool',
  'butenko-fit',
  'flix-market',
  'applum-bot',
  'tradeground-bot',
  'cosmy',
  'zavadska',
] as const;

export type PartnershipPageCopy = {
  navLabel: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  commissionValue: string;
  commissionLabel: string;
  heroCta: string;
  audienceTitle: string;
  audienceLead: string;
  audienceCards: Array<{ title: string; body: string }>;
  servicesTitle: string;
  serviceCards: Array<{ title: string; body: string }>;
  casesTitle: string;
  casesLead: string;
  casesLink: string;
  cases: PartnershipCaseExample[];
  stepsTitle: string;
  steps: Array<{ title: string; body: string }>;
  termsTitle: string;
  terms: Array<{ label: string; body: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  formTitle: string;
  formName: string;
  formNamePlaceholder: string;
  formContact: string;
  formContactPlaceholder: string;
  formDirection: string;
  formDirectionPlaceholder: string;
  formDirections: Array<{ id: PartnershipDirectionId; label: string }>;
  formComment: string;
  formCommentPlaceholder: string;
  formConsent: string;
  formConsentLink: string;
  formSubmit: string;
  formSending: string;
  formSuccess: string;
  formError: string;
};

const uk: PartnershipPageCopy = {
  navLabel: 'Партнерам',
  breadcrumb: 'Партнерам',
  metaTitle: 'Партнерська програма TeleBots — 20% комісії',
  metaDescription:
    'Рекомендуй TeleBots клієнтам, яким потрібні сайти, чат-боти чи автоматизація. Ми реалізуємо проєкт — ти отримуєш 20% комісії.',
  metaKeywords:
    'партнерська програма TeleBots, комісія 20%, партнерство SMM, таргет, маркетинг, digital-агенція, рекомендація розробки',
  heroEyebrow: 'Партнерська програма TeleBots',
  heroTitle: 'Твої клієнти. Наші розробки. Твій додатковий дохід.',
  heroLead:
    'Доповнюй свої маркетингові послуги сайтами, чат-ботами та автоматизацією. Ми реалізуємо проєкт, а ти отримуєш комісію за рекомендацію.',
  commissionValue: '20%',
  commissionLabel: 'Комісія за кожного залученого клієнта',
  heroCta: 'Стати партнером',
  audienceTitle: 'Посилюй свою пропозицію',
  audienceLead:
    'Працюєш із бізнесами? Допоможи клієнтам отримувати більше, розширюй власну пропозицію та заробляй на рекомендаціях.',
  audienceCards: [
    {
      title: 'SMM-спеціалісти',
      body: 'Сайти під просування, чат-боти для обробки заявок та автоматизація комунікації.',
    },
    {
      title: 'Таргетологи',
      body: 'Лендінги, посадкові сторінки й інтеграції для ефективної роботи з рекламним трафіком.',
    },
    {
      title: 'Маркетологи',
      body: 'Технічна реалізація стратегій, воронки продажів та автоматизація процесів.',
    },
    {
      title: 'Digital-агенції',
      body: 'Розширюй перелік послуг без необхідності утримувати власну команду розробки.',
    },
  ],
  servicesTitle: 'Усе технічне — на нас',
  serviceCards: [
    {
      title: 'Сайти та e-commerce',
      body: 'Лендінги, корпоративні сайти, інтернет-магазини.',
    },
    {
      title: 'Чат-боти',
      body: 'Telegram-боти та рішення для автоматизації комунікації.',
    },
    {
      title: 'Автоматизація',
      body: 'CRM, інтеграції, платежі та робочі процеси.',
    },
    {
      title: 'AI-рішення',
      body: 'AI-асистенти й автоматизована обробка звернень.',
    },
  ],
  casesTitle: 'Що ти можеш рекомендувати',
  casesLead:
    'Реальні проєкти TeleBots — сайти під трафік, e-commerce і боти з автоматизацією. Саме такі рішення ти передаєш клієнтам.',
  casesLink: 'Усе портфоліо',
  cases: [
    {
      id: 'newlineschool',
      niche: 'Освіта · Ads і органіка',
      task: 'Школі потрібен сайт як канал заявок, а не візитівка.',
      solution: 'Лендінг під трафік: форми, тест рівня, SEO-блог, чистий код.',
      result: 'Посадкова, яку можна вести з реклами й органіки',
    },
    {
      id: 'butenko-fit',
      niche: 'Особистий бренд · SMM',
      task: 'Передати вайб експертки і вести до запису на програми.',
      solution: 'Багатосторінковий сайт із акцентом на фото, програми та CTA.',
      result: 'Продаж курсів 24/7 без шаблонного вигляду',
    },
    {
      id: 'flix-market',
      niche: 'E-commerce · підписки',
      task: 'Каталог підписок з оплатою та кабінетом.',
      solution: 'Сайт-каталог, оплата, автовидача, мобільна версія.',
      result: 'Повноцінний магазин під ключ',
    },
    {
      id: 'applum-bot',
      niche: 'Сервіс · Telegram-бот',
      task: 'Автоматизувати заявки та комунікацію з клієнтами.',
      solution: 'Telegram-бот з сценаріями, CRM і обробкою звернень.',
      result: 'Менше ручної роботи — більше оброблених лідів',
    },
  ],
  stepsTitle: 'Три кроки до партнерства',
  steps: [
    {
      title: 'Знаходиш клієнта',
      body: 'Клієнту потрібен сайт, бот або автоматизація — ти рекомендуєш TeleBots.',
    },
    {
      title: 'Ми реалізуємо проєкт',
      body: 'Узгоджуємо завдання, оцінюємо розробку та беремо на себе технічну реалізацію.',
    },
    {
      title: 'Ти отримуєш 20%',
      body: 'Після оплати проєкту клієнтом ти отримуєш партнерську винагороду згідно з узгодженими умовами.',
    },
  ],
  termsTitle: 'Прозорі умови. Зрозуміла вигода.',
  terms: [
    { label: 'Комісія', body: '20%.' },
    { label: 'Підстава', body: 'Залучення клієнта на послуги розробки TeleBots.' },
    { label: 'Виконання', body: 'Команда TeleBots займається реалізацією проєкту.' },
    {
      label: 'Виплата',
      body: 'Після отримання оплати від клієнта, згідно з погодженими умовами.',
    },
  ],
  ctaTitle: 'Маєш клієнтів. Ми маємо рішення.',
  ctaText:
    'Давай співпрацювати. Ти рекомендуєш TeleBots, ми допомагаємо реалізувати проєкт, а ти отримуєш свою винагороду.',
  ctaButton: 'Обговорити партнерство',
  formTitle: 'Заявка на партнерство',
  formName: "Ім'я",
  formNamePlaceholder: 'Як до вас звертатися',
  formContact: 'Контакт для звʼязку',
  formContactPlaceholder: 'Telegram, телефон або email',
  formDirection: 'Напрям діяльності',
  formDirectionPlaceholder: 'Оберіть напрям',
  formDirections: [
    { id: 'smm', label: 'SMM' },
    { id: 'target', label: 'Таргет' },
    { id: 'marketing', label: 'Маркетинг' },
    { id: 'agency', label: 'Агенція' },
    { id: 'other', label: 'Інше' },
  ],
  formComment: 'Коментар',
  formCommentPlaceholder: 'Коротко про клієнтів або формат співпраці (необовʼязково)',
  formConsent: 'Даю згоду на обробку персональних даних.',
  formConsentLink: 'Політика конфіденційності',
  formSubmit: 'Надіслати заявку',
  formSending: 'Надсилаємо…',
  formSuccess: 'Заявку отримано. Звʼяжемося з вами найближчим часом.',
  formError: 'Не вдалося надіслати. Спробуйте ще раз або напишіть у Telegram.',
};

const en: PartnershipPageCopy = {
  navLabel: 'Partners',
  breadcrumb: 'Partners',
  metaTitle: 'TeleBots Partner Program — 20% commission',
  metaDescription:
    'Recommend TeleBots to clients who need websites, chatbots or automation. We deliver the project — you earn 20% commission.',
  metaKeywords:
    'TeleBots partner program, 20% commission, SMM partnership, ads, marketing agency, development referral',
  heroEyebrow: 'TeleBots partner program',
  heroTitle: 'Your clients. Our builds. Your extra income.',
  heroLead:
    'Add websites, chatbots and automation to your marketing offer. We deliver the project — you earn a referral commission.',
  commissionValue: '20%',
  commissionLabel: 'Commission for every referred client',
  heroCta: 'Become a partner',
  audienceTitle: 'Strengthen your offer',
  audienceLead:
    'Working with businesses? Help clients get more, expand your offer and earn on referrals.',
  audienceCards: [
    {
      title: 'SMM specialists',
      body: 'Sites for growth, chatbots for leads and communication automation.',
    },
    {
      title: 'Media buyers',
      body: 'Landings, offer pages and integrations that make paid traffic convert.',
    },
    {
      title: 'Marketers',
      body: 'Technical delivery of strategies, sales funnels and process automation.',
    },
    {
      title: 'Digital agencies',
      body: 'Expand your service list without keeping an in-house development team.',
    },
  ],
  servicesTitle: 'We handle the technical side',
  serviceCards: [
    {
      title: 'Websites & e-commerce',
      body: 'Landings, corporate sites, online stores.',
    },
    {
      title: 'Chatbots',
      body: 'Telegram bots and communication automation.',
    },
    {
      title: 'Automation',
      body: 'CRM, integrations, payments and workflows.',
    },
    {
      title: 'AI solutions',
      body: 'AI assistants and automated request handling.',
    },
  ],
  casesTitle: 'What you can recommend',
  casesLead:
    'Real TeleBots projects — traffic-ready sites, e-commerce and bots with automation. These are the builds you pass to clients.',
  casesLink: 'Full portfolio',
  cases: [
    {
      id: 'newlineschool',
      niche: 'Education · Ads & organic',
      task: 'The school needed a lead channel, not a brochure site.',
      solution: 'Traffic landing: forms, level test, SEO blog, clean code.',
      result: 'A page ready for ads and organic growth',
    },
    {
      id: 'butenko-fit',
      niche: 'Personal brand · SMM',
      task: 'Show expert vibe and drive bookings for programs.',
      solution: 'Multi-page site focused on photos, programs and CTA.',
      result: 'Course sales 24/7 without a template look',
    },
    {
      id: 'flix-market',
      niche: 'E-commerce · subscriptions',
      task: 'Subscription catalog with payments and a client cabinet.',
      solution: 'Catalog site, payments, auto-delivery, mobile-first.',
      result: 'A full turnkey store',
    },
    {
      id: 'applum-bot',
      niche: 'Service · Telegram bot',
      task: 'Automate leads and client communication.',
      solution: 'Telegram bot with flows, CRM and request handling.',
      result: 'Less manual work — more processed leads',
    },
  ],
  stepsTitle: 'Three steps to partner',
  steps: [
    {
      title: 'You find a client',
      body: 'They need a site, bot or automation — you recommend TeleBots.',
    },
    {
      title: 'We deliver the project',
      body: 'We align scope, estimate the build and take the technical work.',
    },
    {
      title: 'You get 20%',
      body: 'After the client pays, you receive the partner reward under agreed terms.',
    },
  ],
  termsTitle: 'Clear terms. Clear upside.',
  terms: [
    { label: 'Commission', body: '20%.' },
    { label: 'Basis', body: 'Referring a client to TeleBots development services.' },
    { label: 'Delivery', body: 'The TeleBots team delivers the project.' },
    {
      label: 'Payout',
      body: 'After client payment, under the agreed terms.',
    },
  ],
  ctaTitle: 'You have clients. We have the build.',
  ctaText:
    'Let’s partner. You recommend TeleBots, we help deliver the project, you get your reward.',
  ctaButton: 'Discuss partnership',
  formTitle: 'Partner application',
  formName: 'Name',
  formNamePlaceholder: 'How should we address you',
  formContact: 'Contact',
  formContactPlaceholder: 'Telegram, phone or email',
  formDirection: 'Focus area',
  formDirectionPlaceholder: 'Select an option',
  formDirections: [
    { id: 'smm', label: 'SMM' },
    { id: 'target', label: 'Paid ads' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'agency', label: 'Agency' },
    { id: 'other', label: 'Other' },
  ],
  formComment: 'Comment',
  formCommentPlaceholder: 'Briefly about your clients or collaboration format (optional)',
  formConsent: 'I consent to personal data processing.',
  formConsentLink: 'Privacy policy',
  formSubmit: 'Send application',
  formSending: 'Sending…',
  formSuccess: 'Application received. We will contact you soon.',
  formError: 'Could not send. Please try again or message us on Telegram.',
};

const pl: PartnershipPageCopy = {
  navLabel: 'Partnerzy',
  breadcrumb: 'Partnerzy',
  metaTitle: 'Program partnerski TeleBots — 20% prowizji',
  metaDescription:
    'Polecaj TeleBots klientom, którzy potrzebują stron, chatbotów lub automatyzacji. My realizujemy projekt — Ty dostajesz 20% prowizji.',
  metaKeywords:
    'program partnerski TeleBots, prowizja 20%, partnerstwo SMM, target, marketing, agencja digital',
  heroEyebrow: 'Program partnerski TeleBots',
  heroTitle: 'Twoi klienci. Nasze wdrożenia. Twój dodatkowy dochód.',
  heroLead:
    'Uzupełnij usługi marketingowe stronami, chatbotami i automatyzacją. My realizujemy projekt, a Ty dostajesz prowizję za polecenie.',
  commissionValue: '20%',
  commissionLabel: 'Prowizja za każdego poleconego klienta',
  heroCta: 'Zostań partnerem',
  audienceTitle: 'Wzmocnij swoją ofertę',
  audienceLead:
    'Pracujesz z biznesami? Pomóż klientom osiągać więcej, poszerzaj ofertę i zarabiaj na poleceniach.',
  audienceCards: [
    {
      title: 'Specjaliści SMM',
      body: 'Strony pod promocję, chatboty do leadów i automatyzacja komunikacji.',
    },
    {
      title: 'Specjaliści od reklam',
      body: 'Landingi, strony ofertowe i integracje pod płatny ruch.',
    },
    {
      title: 'Marketerzy',
      body: 'Techniczna realizacja strategii, lejki sprzedaży i automatyzacja procesów.',
    },
    {
      title: 'Agencje digital',
      body: 'Poszerz listę usług bez własnego zespołu developerskiego.',
    },
  ],
  servicesTitle: 'Techniczną stronę bierzemy na siebie',
  serviceCards: [
    {
      title: 'Strony i e-commerce',
      body: 'Landingi, strony firmowe, sklepy internetowe.',
    },
    {
      title: 'Chatboty',
      body: 'Boty Telegram i automatyzacja komunikacji.',
    },
    {
      title: 'Automatyzacja',
      body: 'CRM, integracje, płatności i procesy.',
    },
    {
      title: 'Rozwiązania AI',
      body: 'Asystenci AI i automatyczna obsługa zapytań.',
    },
  ],
  casesTitle: 'Co możesz polecać',
  casesLead:
    'Realne projekty TeleBots — strony pod ruch, e-commerce i boty z automatyzacją. Takie rozwiązania przekazujesz klientom.',
  casesLink: 'Całe portfolio',
  cases: [
    {
      id: 'newlineschool',
      niche: 'Edukacja · Ads i organika',
      task: 'Szkole potrzebny był kanał leadów, nie wizytówka.',
      solution: 'Landing pod ruch: formularze, test poziomu, blog SEO.',
      result: 'Strona gotowa na reklamę i organic',
    },
    {
      id: 'butenko-fit',
      niche: 'Marka osobista · SMM',
      task: 'Oddać vibe ekspertki i prowadzić do zapisów.',
      solution: 'Wielostronicowy serwis: zdjęcia, programy, CTA.',
      result: 'Sprzedaż kursów 24/7 bez szablonowego wyglądu',
    },
    {
      id: 'flix-market',
      niche: 'E-commerce · subskrypcje',
      task: 'Katalog subskrypcji z płatnością i panelem klienta.',
      solution: 'Katalog, płatności, autowydanie, mobile-first.',
      result: 'Sklep pod klucz',
    },
    {
      id: 'applum-bot',
      niche: 'Usługa · bot Telegram',
      task: 'Zautomatyzować leady i komunikację z klientami.',
      solution: 'Bot Telegram ze scenariuszami, CRM i obsługą zapytań.',
      result: 'Mniej ręcznej pracy — więcej obsłużonych leadów',
    },
  ],
  stepsTitle: 'Trzy kroki do partnerstwa',
  steps: [
    {
      title: 'Znajdujesz klienta',
      body: 'Klient potrzebuje strony, bota lub automatyzacji — polecasz TeleBots.',
    },
    {
      title: 'My realizujemy projekt',
      body: 'Ustalamy zakres, wyceniamy i bierzemy realizację techniczną.',
    },
    {
      title: 'Dostajesz 20%',
      body: 'Po płatności klienta otrzymujesz wynagrodzenie partnerskie według ustalonych warunków.',
    },
  ],
  termsTitle: 'Przejrzyste warunki. Jasna korzyść.',
  terms: [
    { label: 'Prowizja', body: '20%.' },
    { label: 'Podstawa', body: 'Pozyskanie klienta na usługi developmentu TeleBots.' },
    { label: 'Realizacja', body: 'Zespół TeleBots prowadzi projekt.' },
    {
      label: 'Wypłata',
      body: 'Po otrzymaniu płatności od klienta, według ustalonych warunków.',
    },
  ],
  ctaTitle: 'Masz klientów. My mamy rozwiązanie.',
  ctaText:
    'Współpracujmy. Ty polecasz TeleBots, my pomagamy zrealizować projekt, a Ty dostajesz wynagrodzenie.',
  ctaButton: 'Omówić partnerstwo',
  formTitle: 'Wniosek partnerski',
  formName: 'Imię',
  formNamePlaceholder: 'Jak się do Ciebie zwracać',
  formContact: 'Kontakt',
  formContactPlaceholder: 'Telegram, telefon lub email',
  formDirection: 'Obszar działalności',
  formDirectionPlaceholder: 'Wybierz opcję',
  formDirections: [
    { id: 'smm', label: 'SMM' },
    { id: 'target', label: 'Target' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'agency', label: 'Agencja' },
    { id: 'other', label: 'Inne' },
  ],
  formComment: 'Komentarz',
  formCommentPlaceholder: 'Krótko o klientach lub formie współpracy (opcjonalnie)',
  formConsent: 'Wyrażam zgodę na przetwarzanie danych osobowych.',
  formConsentLink: 'Polityka prywatności',
  formSubmit: 'Wyślij wniosek',
  formSending: 'Wysyłamy…',
  formSuccess: 'Wniosek otrzymany. Skontaktujemy się wkrótce.',
  formError: 'Nie udało się wysłać. Spróbuj ponownie lub napisz na Telegram.',
};

const ru: PartnershipPageCopy = {
  navLabel: 'Партнёрам',
  breadcrumb: 'Партнёрам',
  metaTitle: 'Партнёрская программа TeleBots — 20% комиссии',
  metaDescription:
    'Рекомендуй TeleBots клиентам, которым нужны сайты, чат-боты или автоматизация. Мы делаем проект — ты получаешь 20% комиссии.',
  metaKeywords:
    'партнёрская программа TeleBots, комиссия 20%, партнёрство SMM, таргет, маркетинг, digital-агентство',
  heroEyebrow: 'Партнёрская программа TeleBots',
  heroTitle: 'Твои клиенты. Наши разработки. Твой дополнительный доход.',
  heroLead:
    'Дополняй маркетинговые услуги сайтами, чат-ботами и автоматизацией. Мы реализуем проект, а ты получаешь комиссию за рекомендацию.',
  commissionValue: '20%',
  commissionLabel: 'Комиссия за каждого привлечённого клиента',
  heroCta: 'Стать партнёром',
  audienceTitle: 'Усиль своё предложение',
  audienceLead:
    'Работаешь с бизнесами? Помоги клиентам получать больше, расширяй предложение и зарабатывай на рекомендациях.',
  audienceCards: [
    {
      title: 'SMM-специалисты',
      body: 'Сайты под продвижение, чат-боты для заявок и автоматизация коммуникации.',
    },
    {
      title: 'Таргетологи',
      body: 'Лендинги, посадочные и интеграции для работы с рекламным трафиком.',
    },
    {
      title: 'Маркетологи',
      body: 'Техническая реализация стратегий, воронки продаж и автоматизация процессов.',
    },
    {
      title: 'Digital-агентства',
      body: 'Расширяй список услуг без собственной команды разработки.',
    },
  ],
  servicesTitle: 'Всё техническое — на нас',
  serviceCards: [
    {
      title: 'Сайты и e-commerce',
      body: 'Лендинги, корпоративные сайты, интернет-магазины.',
    },
    {
      title: 'Чат-боты',
      body: 'Telegram-боты и автоматизация коммуникации.',
    },
    {
      title: 'Автоматизация',
      body: 'CRM, интеграции, платежи и рабочие процессы.',
    },
    {
      title: 'AI-решения',
      body: 'AI-ассистенты и автоматическая обработка обращений.',
    },
  ],
  casesTitle: 'Что ты можешь рекомендовать',
  casesLead:
    'Реальные проекты TeleBots — сайты под трафик, e-commerce и боты с автоматизацией. Именно такие решения ты передаёшь клиентам.',
  casesLink: 'Всё портфолио',
  cases: [
    {
      id: 'newlineschool',
      niche: 'Образование · Ads и органика',
      task: 'Школе нужен сайт как канал заявок, а не визитка.',
      solution: 'Лендинг под трафик: формы, тест уровня, SEO-блог.',
      result: 'Посадочная под рекламу и органику',
    },
    {
      id: 'butenko-fit',
      niche: 'Личный бренд · SMM',
      task: 'Передать вайб экспертки и вести к записи на программы.',
      solution: 'Многостраничный сайт с фото, программами и CTA.',
      result: 'Продажа курсов 24/7 без шаблонного вида',
    },
    {
      id: 'flix-market',
      niche: 'E-commerce · подписки',
      task: 'Каталог подписок с оплатой и кабинетом.',
      solution: 'Сайт-каталог, оплата, автовыдача, mobile-first.',
      result: 'Магазин под ключ',
    },
    {
      id: 'applum-bot',
      niche: 'Сервис · Telegram-бот',
      task: 'Автоматизировать заявки и коммуникацию с клиентами.',
      solution: 'Telegram-бот со сценариями, CRM и обработкой обращений.',
      result: 'Меньше ручной работы — больше обработанных лидов',
    },
  ],
  stepsTitle: 'Три шага к партнёрству',
  steps: [
    {
      title: 'Находишь клиента',
      body: 'Нужен сайт, бот или автоматизация — ты рекомендуешь TeleBots.',
    },
    {
      title: 'Мы реализуем проект',
      body: 'Согласуем задачу, оценим разработку и берём техническую реализацию.',
    },
    {
      title: 'Ты получаешь 20%',
      body: 'После оплаты проекта клиентом ты получаешь партнёрское вознаграждение по согласованным условиям.',
    },
  ],
  termsTitle: 'Прозрачные условия. Понятная выгода.',
  terms: [
    { label: 'Комиссия', body: '20%.' },
    { label: 'Основание', body: 'Привлечение клиента на услуги разработки TeleBots.' },
    { label: 'Выполнение', body: 'Команда TeleBots занимается реализацией проекта.' },
    {
      label: 'Выплата',
      body: 'После получения оплаты от клиента, согласно согласованным условиям.',
    },
  ],
  ctaTitle: 'Есть клиенты. У нас есть решение.',
  ctaText:
    'Давай сотрудничать. Ты рекомендуешь TeleBots, мы помогаем реализовать проект, а ты получаешь вознаграждение.',
  ctaButton: 'Обсудить партнёрство',
  formTitle: 'Заявка на партнёрство',
  formName: 'Имя',
  formNamePlaceholder: 'Как к вам обращаться',
  formContact: 'Контакт для связи',
  formContactPlaceholder: 'Telegram, телефон или email',
  formDirection: 'Направление деятельности',
  formDirectionPlaceholder: 'Выберите направление',
  formDirections: [
    { id: 'smm', label: 'SMM' },
    { id: 'target', label: 'Таргет' },
    { id: 'marketing', label: 'Маркетинг' },
    { id: 'agency', label: 'Агентство' },
    { id: 'other', label: 'Другое' },
  ],
  formComment: 'Комментарий',
  formCommentPlaceholder: 'Кратко о клиентах или формате сотрудничества (необязательно)',
  formConsent: 'Даю согласие на обработку персональных данных.',
  formConsentLink: 'Политика конфиденциальности',
  formSubmit: 'Отправить заявку',
  formSending: 'Отправляем…',
  formSuccess: 'Заявку получили. Свяжемся с вами в ближайшее время.',
  formError: 'Не удалось отправить. Попробуйте ещё раз или напишите в Telegram.',
};

export const partnershipPageCopy: Record<Language, PartnershipPageCopy> = {
  uk,
  en,
  pl,
  ru,
};
