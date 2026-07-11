import type { Language } from '@/components/translations';
import { SEO_LANDING_SLUGS, type SeoLandingCopy, type SeoLandingSlug } from './types';

type AllLandings = Record<SeoLandingSlug, SeoLandingCopy>;

const uk: AllLandings = {
  'telegram-bots': {
    metaTitle: 'Розробка Telegram-ботів під ключ | від $150 | TeleBots',
    metaDescription:
      'Замовити розробку Telegram-бота для бізнесу: ліди, оплата, CRM, AI. Старт від 24 год, від $150. 200+ проєктів. Безкоштовна консультація — TeleBots.',
    keywords:
      'розробка telegram ботів, замовити телеграм бота, створення бота telegram, телеграм бот для бізнесу, бот з оплатою, інтеграція crm telegram, ціна telegram бота, TeleBots',
    h1: 'Розробка Telegram-ботів під ключ для бізнесу',
    intro:
      'Робимо Telegram-ботів, які збирають заявки, приймають оплату, відповідають клієнтам і інтегруються з CRM. Без зайвого «коду ради коду» — лише сценарії, які економлять час і приносять продажі.',
    benefitsTitle: 'Що дає бот у Telegram',
    benefits: [
      'Заявки та кваліфікація лідів 24/7 без менеджера на лінії',
      'Оплата LiqPay, Fondy, Stripe або крипто прямо в чаті',
      'Синхронізація з CRM, Google Sheets, Notion і внутрішніми API',
      'AI-відповіді на типові питання з ескалацією до людини',
      'Розсилки, воронки та нагадування без сторонніх сервісів',
      'Адмін-панель або бот-адмінка для команди',
    ],
    sections: [
      {
        title: 'Для яких задач підходить Telegram-бот',
        paragraphs: [
          'Бот закриває повторювані сценарії: запис на послугу, каталог і кошик, підтримка клієнтів, онбординг співробітників, опитування та внутрішні сервіси компанії.',
          'Якщо у вас уже є сайт або Instagram — бот стає каналом, де клієнт швидше залишає контакт і доходить до оплати без зайвих кроків.',
        ],
      },
      {
        title: 'Як ми розробляємо ботів',
        paragraphs: [
          'Починаємо зі сценарію та цілі (лід, продаж, підтримка). Далі — прототип діалогу, інтеграції, тестовий запуск і передача з інструкцією.',
          'Стек під задачу: Node.js / Python, Telegram Bot API, вебхуки, бази даних, платежі та CRM. Типовий MVP — від кількох днів до 2–3 тижнів.',
        ],
      },
    ],
    processTitle: 'Етапи роботи',
    processSteps: [
      { title: 'Бриф і сценарій', text: 'Узгоджуємо ціль, кроки діалогу, інтеграції та критерії успіху.' },
      { title: 'Розробка і тести', text: 'Збираємо бота, підключаємо оплату/CRM, перевіряємо на реальних кейсах.' },
      { title: 'Запуск і підтримка', text: 'Деплой, інструкція для команди, правки після перших тижнів використання.' },
    ],
    faqTitle: 'Часті питання про розробку Telegram-ботів',
    faq: [
      {
        question: 'Скільки коштує розробка Telegram-бота?',
        answer:
          'Простий бот для заявок — від $150. Бот з оплатою, CRM і складнішою логікою — зазвичай від $300–800+. Точну оцінку даємо після брифу.',
      },
      {
        question: 'Скільки триває розробка?',
        answer:
          'MVP часто готовий за 3–10 днів. Складні інтеграції та кастомна адмінка — 2–4 тижні. Старт обговорення — протягом 24 годин.',
      },
      {
        question: 'Чи можна підключити оплату та CRM?',
        answer:
          'Так. Підключаємо платіжні системи та CRM/таблиці під ваш процес продажів. Якщо потрібна кастомна інтеграція — також робимо.',
      },
    ],
    ctaTitle: 'Потрібен Telegram-бот під ваш процес?',
    ctaText: 'Коротко опишіть задачу — запропонуємо сценарій, строк і орієнтовну ціну.',
    relatedServiceLabel: 'Усі чат-боти та інтеграції',
    pricingLabel: 'Ціни та пакети',
    portfolioLabel: 'Кейси в портфоліо',
    contactLabel: 'Написати нам',
    breadcrumbLabel: 'Telegram-боти',
  },
  'landing-pages': {
    metaTitle: 'Розробка лендінгу під ключ | від $300 | TeleBots',
    metaDescription:
      'Замовити лендінг під ключ: структура під конверсію, адаптив, SEO-база, швидкий запуск. Типово 1–2 тижні. Безкоштовна консультація — TeleBots.',
    keywords:
      'розробка лендінгу, лендінг під ключ, замовити лендінг, landing page, продаючий лендінг, односторінковий сайт, ціна лендінгу, TeleBots',
    h1: 'Розробка лендінгу під ключ — сторінка, яка продає',
    intro:
      'Робимо лендінги під запуск оферів, рекламу та збір заявок: чітка структура, швидке завантаження, адаптив і форма/CTA, які ведуть до контакту або оплати.',
    benefitsTitle: 'Що входить у лендінг',
    benefits: [
      'Структура блоків під офер і заперечення клієнта',
      'Адаптив під мобільні (основний трафік з реклами)',
      'Швидкість і технічна SEO-база (title, description, headings)',
      'Форма заявки, Telegram/CRM або інтеграція з ботом',
      'Базова аналітика (GA4 / Meta Pixel за потреби)',
      'Правки після запуску в межах узгодженого ТЗ',
    ],
    sections: [
      {
        title: 'Коли потрібен окремий лендінг',
        paragraphs: [
          'Лендінг працює краще за «великий сайт», коли є один офер, рекламна кампанія або потрібен швидкий тест продукту без зайвих сторінок.',
          'Ми збираємо сторінку так, щоб користувач за 5–10 секунд зрозумів цінність і зробив наступний крок — заявка, дзвінок або оплата.',
        ],
      },
      {
        title: 'Технології та SEO',
        paragraphs: [
          'Верстка на сучасному стеку (часто Next.js): швидкість, чистий HTML, коректні мета-теги. Це допомагає і рекламі, і органічному пошуку за брендовими/комерційними запитами.',
          'Якщо потрібен не лише лендінг, а сайт із кількома сторінками — запропонуємо корпоративний або e-commerce формат без переробки з нуля.',
        ],
      },
    ],
    processTitle: 'Як ми запускаємо лендінг',
    processSteps: [
      { title: 'Офер і структура', text: 'Узгоджуємо УТП, блоки, тексти та референси.' },
      { title: 'Дизайн і верстка', text: 'Макети або одразу розробка з адаптивною версткою.' },
      { title: 'Запуск', text: 'Домен, форми, аналітика, перевірка швидкості та мобільної версії.' },
    ],
    faqTitle: 'Питання про лендінги',
    faq: [
      {
        question: 'Скільки коштує лендінг?',
        answer:
          'Типовий лендінг під ключ — від $300. Складні анімації, інтеграції чи багатомовність впливають на кошторис. Оцінку даємо після брифу.',
      },
      {
        question: 'За скільки можна запустити?',
        answer: 'Часто 7–14 днів від узгодженого ТЗ. Термінові запуски обговорюємо окремо.',
      },
      {
        question: 'Чи підходить лендінг для Google/Meta реклами?',
        answer:
          'Так. Робимо швидку мобільну версію, зрозумілі CTA і технічні вимоги рекламних кабінетів.',
      },
    ],
    ctaTitle: 'Потрібен лендінг під рекламу чи запуск?',
    ctaText: 'Напишіть нішу та ціль сторінки — запропонуємо структуру і строк.',
    relatedServiceLabel: 'Усі сайти та веб-рішення',
    pricingLabel: 'Ціни на сайти',
    portfolioLabel: 'Приклади робіт',
    contactLabel: 'Залишити заявку',
    breadcrumbLabel: 'Лендінги',
  },
  'online-stores': {
    metaTitle: 'Розробка інтернет-магазину під ключ | Next.js | TeleBots',
    metaDescription:
      'Інтернет-магазин під ключ: каталог, кошик, оплата, доставка, адмінка. Next.js, SEO і швидкість. Консультація безкоштовно — TeleBots.',
    keywords:
      'розробка інтернет-магазину, інтернет-магазин під ключ, створити інтернет-магазин, e-commerce Next.js, магазин з оплатою, ціна інтернет-магазину, TeleBots',
    h1: 'Розробка інтернет-магазину під ключ',
    intro:
      'Збираємо e-commerce, зручний для покупця і для вас: каталог, фільтри, кошик, оплата, статуси замовлень і інтеграції з доставкою чи CRM.',
    benefitsTitle: 'Що отримуєте в магазині',
    benefits: [
      'Каталог з варіантами товарів, пошуком і фільтрами',
      'Кошик, checkout і онлайн-оплата',
      'Адаптив і швидкість — критично для конверсії з мобільного',
      'SEO-структура категорій і карток товарів',
      'Адмін-процеси: замовлення, статуси, базові звіти',
      'Інтеграції з Новою Поштою, CRM, аналітикою за потреби',
    ],
    sections: [
      {
        title: 'Кому підходить кастомний магазин',
        paragraphs: [
          'Кастомний магазин має сенс, коли шаблонний SaaS обмежує логіку цін, опції товарів, B2B-умови або потрібен унікальний UX під бренд.',
          'Якщо асортимент невеликий і потрібен швидкий старт — можемо почати з каталогу на лендінгу/сайті й масштабувати до повноцінного магазину.',
        ],
      },
      {
        title: 'Стек і підтримка',
        paragraphs: [
          'Часто використовуємо Next.js: швидкі сторінки, зручне SEO, гнучкі інтеграції. Платежі, доставка та облік підключаємо під ваш процес.',
          'Після запуску допомагаємо з правками, новими розділами та оптимізацією воронки оформлення замовлення.',
        ],
      },
    ],
    processTitle: 'Етапи запуску магазину',
    processSteps: [
      { title: 'Каталог і логіка', text: 'Товари, варіанти, ціни, доставка, оплата, ролі.' },
      { title: 'UX і розробка', text: 'Сторінки каталогу, картки, кошик, checkout, адмінка.' },
      { title: 'Запуск і навчання', text: 'Тестові замовлення, підключення домену, інструкція для команди.' },
    ],
    faqTitle: 'Питання про інтернет-магазини',
    faq: [
      {
        question: 'Скільки коштує інтернет-магазин?',
        answer:
          'Залежить від кількості сутностей і інтеграцій. Старт типово вищий за лендінг; точний діапазон даємо після короткого аудиту вимог.',
      },
      {
        question: 'Чи можна перенести товари з Excel / іншого магазину?',
        answer: 'Так, імпорт каталогу обговорюємо на старті — це економить тижні ручної роботи.',
      },
      {
        question: 'Чи буде магазин зручним для SEO?',
        answer:
          'Закладаємо ЧПУ, мета-теги, структуру заголовків і швидкість. Контент і лінкбілдинг — окремо або разом із вами.',
      },
    ],
    ctaTitle: 'Плануєте запуск або переїзд магазину?',
    ctaText: 'Опишіть асортимент і потрібні інтеграції — підкажемо формат і етапи.',
    relatedServiceLabel: 'Розробка сайтів',
    pricingLabel: 'Орієнтовні ціни',
    portfolioLabel: 'Кейси e-commerce',
    contactLabel: 'Обговорити проєкт',
    breadcrumbLabel: 'Інтернет-магазини',
  },
  'ai-chatbots': {
    metaTitle: 'AI-чат-бот для бізнесу | Telegram і сайт | TeleBots',
    metaDescription:
      'AI-чат-бот на базі GPT: відповіді з вашої бази знань, кваліфікація лідів, підтримка 24/7 у Telegram або на сайті. Консультація — TeleBots.',
    keywords:
      'ai чат-бот, chatgpt бот для бізнесу, ai бот telegram, нейромережа для підтримки, бот з штучним інтелектом, ai консультант, TeleBots',
    h1: 'AI-чат-боти для підтримки, продажів і онбордингу',
    intro:
      'Підключаємо AI до Telegram або віджета на сайті: бот відповідає мовою клієнта, спирається на ваші документи й передає складні діалоги менеджеру.',
    benefitsTitle: 'Можливості AI-бота',
    benefits: [
      'Відповіді на основі вашого прайсу, FAQ і політики компанії',
      'Кваліфікація лідів і збір контактів у зручному сценарії',
      'Підтримка кількома мовами без окремої команди',
      'Ескалація до людини з контекстом діалогу',
      'Працює в Telegram, на сайті або в обох каналах',
      'Облік діалогів і покращення промптів після запуску',
    ],
    sections: [
      {
        title: 'Коли AI кращий за «кнопковий» бот',
        paragraphs: [
          'Класичний сценарій ідеальний для жорстких кроків (запис, оплата). AI — коли питань багато, формулювання різні, а база знань уже є.',
          'Часто робимо гібрид: кнопки для ключових дій + AI для вільних питань. Так контрольована конверсія і жива підтримка в одному продукті.',
        ],
      },
      {
        title: 'Безпека та якість відповідей',
        paragraphs: [
          'Обмежуємо джерела знань, додаємо «не вигадуй» правила і тести на типових діалогах перед продакшеном.',
          'Для чутливих тем (медицина, фінанси, юрпослуги) налаштовуємо обережні відповіді й обов’язковий хендофф до спеціаліста.',
        ],
      },
    ],
    processTitle: 'Як підключаємо AI',
    processSteps: [
      { title: 'База знань', text: 'Збираємо FAQ, документи, тон спілкування і табу.' },
      { title: 'Сценарій і інтеграція', text: 'Канал (Telegram/сайт), CRM, передача лідів.' },
      { title: 'Тести і тюнінг', text: 'Перевірка якості, правки промптів, моніторинг перших тижнів.' },
    ],
    faqTitle: 'Питання про AI-чат-ботів',
    faq: [
      {
        question: 'Чи можна навчити бота на наших документах?',
        answer:
          'Так. Підключаємо ваші матеріали як джерело відповідей і оновлюємо базу, коли змінюється офер чи умови.',
      },
      {
        question: 'AI замінить менеджерів?',
        answer:
          'Зазвичай ні — знімає 40–80% типових питань і дає менеджерам тепліші ліди. Живі продажі залишаються за командою.',
      },
      {
        question: 'Скільки коштує AI-бот?',
        answer:
          'Залежить від каналу, обсягу бази знань і інтеграцій. Після брифу даємо пакет: розробка + орієнтовні витрати на API.',
      },
    ],
    ctaTitle: 'Хочете AI-підтримку без хаосу в відповідях?',
    ctaText: 'Надішліть приклади питань клієнтів — оцінимо, чи підходить AI саме вам.',
    relatedServiceLabel: 'Чат-боти TeleBots',
    pricingLabel: 'Ціни на ботів',
    portfolioLabel: 'Портфоліо',
    contactLabel: 'Запитати консультацію',
    breadcrumbLabel: 'AI-чат-боти',
  },
  'data-parsers': {
    metaTitle: 'Розробка парсерів і збір даних | Excel, API, CRM | TeleBots',
    metaDescription:
      'Парсери під ключ: ціни, товари, оголошення, моніторинг конкурентів. Експорт у Excel, Google Sheets, БД або API. Консультація — TeleBots.',
    keywords:
      'розробка парсера, парсинг сайтів, збір даних, парсер цін, парсер маркетплейсу, експорт excel, моніторинг конкурентів, TeleBots',
    h1: 'Парсери та автоматичний збір даних для бізнесу',
    intro:
      'Автоматизуємо збір даних із сайтів, маркетплейсів і відкритих джерел: замість годин копіювання — оновлювані таблиці, звіти або API під ваш процес.',
    benefitsTitle: 'Що автоматизуємо',
    benefits: [
      'Моніторинг цін і наявності у конкурентів',
      'Збір каталогів товарів і характеристик',
      'Парсинг оголошень і відкритих баз',
      'Планувальник запусків (щодня / щогодини)',
      'Експорт у Excel, Google Sheets, БД, webhook/API',
      'Сповіщення в Telegram про зміни або помилки',
    ],
    sections: [
      {
        title: 'Для кого парсер',
        paragraphs: [
          'Для e-commerce, агенцій, аналітиків і команд закупівель, яким потрібні регулярні дані без ручної рутини.',
          'Перед стартом оцінюємо джерело, стабільність розмітки та юридичні обмеження. Пропонуємо рішення, яке реально підтримувати.',
        ],
      },
      {
        title: 'Надійність і супровід',
        paragraphs: [
          'Сайти змінюють верстку — закладаємо моніторинг і швидкі правки. Для критичних пайплайнів додаємо логи та алерти.',
          'Можемо працювати як підрядник для агенцій із потоком схожих задач.',
        ],
      },
    ],
    processTitle: 'Як робимо парсер',
    processSteps: [
      { title: 'Джерело і поля', text: 'Що збираємо, як часто, куди складаємо результат.' },
      { title: 'Розробка', text: 'Скрипт/сервіс, розклад, експорт, обробка помилок.' },
      { title: 'Передача', text: 'Інструкція, тестові прогони, за потреби — підтримка.' },
    ],
    faqTitle: 'Питання про парсери',
    faq: [
      {
        question: 'Скільки коштує парсер?',
        answer:
          'Простий одноразовий збір дешевший за постійний моніторинг із кількома джерелами. Оцінку даємо після прикладу сторінок і потрібних полів.',
      },
      {
        question: 'Чи легально парсити сайти?',
        answer:
          'Залежить від джерела й умов використання. Підказуємо ризики й альтернативи (офіційні API), якщо парсинг недоцільний.',
      },
      {
        question: 'Куди можна віддавати дані?',
        answer: 'Excel, Google Sheets, базу даних, CRM або ваш API/webhook — як зручніше команді.',
      },
    ],
    ctaTitle: 'Маєте джерело даних і ручну рутину?',
    ctaText: 'Надішліть приклад сторінки й потрібні поля — скажемо, чи реально автоматизувати.',
    relatedServiceLabel: 'Усі послуги',
    pricingLabel: 'Ціни',
    portfolioLabel: 'Портфоліо',
    contactLabel: "Зв'язатися",
    breadcrumbLabel: 'Парсери',
  },
};

const en: AllLandings = {
  'telegram-bots': {
    metaTitle: 'Telegram Bot Development | from $150 | TeleBots',
    metaDescription:
      'Custom Telegram bots for leads, payments, CRM and AI. Kickoff within 24h, from $150. 200+ projects. Free consultation — TeleBots.',
    keywords:
      'telegram bot development, order telegram bot, business telegram bot, bot with payments, telegram crm integration, telegram bot price, TeleBots',
    h1: 'Telegram bot development for business',
    intro:
      'We build Telegram bots that capture leads, take payments, answer customers and sync with your CRM — practical workflows, not demos.',
    benefitsTitle: 'What a Telegram bot unlocks',
    benefits: [
      'Lead capture and qualification 24/7',
      'Payments in-chat (Stripe, local PSPs, crypto)',
      'CRM, Sheets and API integrations',
      'AI answers with human handoff',
      'Broadcasts, funnels and reminders',
      'Admin tools for your team',
    ],
    sections: [
      {
        title: 'Use cases that fit Telegram',
        paragraphs: [
          'Booking, catalogs, support, internal tools, surveys and sales automation — especially when customers already live in messengers.',
          'If you have a website or Instagram, a bot shortens the path from interest to contact or payment.',
        ],
      },
      {
        title: 'How we build',
        paragraphs: [
          'We start from the business goal and dialog flow, then prototype, integrate, test and hand over with docs.',
          'Typical stack: Node.js/Python, Bot API, webhooks, databases and payment providers. MVP often ships in days to a few weeks.',
        ],
      },
    ],
    processTitle: 'Delivery steps',
    processSteps: [
      { title: 'Brief & flow', text: 'Goals, dialog steps, integrations and success metrics.' },
      { title: 'Build & QA', text: 'Bot logic, payments/CRM, real-scenario testing.' },
      { title: 'Launch', text: 'Deploy, team training and early iteration support.' },
    ],
    faqTitle: 'Telegram bot FAQ',
    faq: [
      {
        question: 'How much does a Telegram bot cost?',
        answer: 'Simple lead bots start from $150. Payments, CRM and complex logic usually start around $300–800+. We quote after a short brief.',
      },
      {
        question: 'How long does it take?',
        answer: 'MVP often takes 3–10 days. Heavier integrations: 2–4 weeks. We typically reply within 24 hours.',
      },
      {
        question: 'Can you connect payments and CRM?',
        answer: 'Yes — standard providers and custom APIs depending on your sales process.',
      },
    ],
    ctaTitle: 'Need a Telegram bot for your workflow?',
    ctaText: 'Describe the goal — we will suggest a flow, timeline and budget range.',
    relatedServiceLabel: 'All chatbots',
    pricingLabel: 'Pricing',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Contact us',
    breadcrumbLabel: 'Telegram bots',
  },
  'landing-pages': {
    metaTitle: 'Landing Page Development | from $300 | TeleBots',
    metaDescription:
      'Conversion-focused landing pages: clear structure, mobile-first, SEO basics, fast launch. Typically 1–2 weeks. Free consult — TeleBots.',
    keywords:
      'landing page development, order landing page, conversion landing page, one-page website, landing page price, TeleBots',
    h1: 'Landing page development that converts',
    intro:
      'We design and ship landing pages for offers and ads: sharp structure, speed, mobile UX and CTAs that drive form fills or sales.',
    benefitsTitle: 'What’s included',
    benefits: [
      'Offer-driven page structure',
      'Mobile-first responsive layout',
      'Technical SEO basics',
      'Forms, Telegram/CRM or bot hooks',
      'Analytics hooks (GA4 / pixels)',
      'Post-launch tweaks in scope',
    ],
    sections: [
      {
        title: 'When a landing page wins',
        paragraphs: [
          'Best for a single offer, paid campaigns or a fast product test without building a full multi-page site.',
          'Visitors should understand value in seconds and know the next step.',
        ],
      },
      {
        title: 'Stack & SEO',
        paragraphs: [
          'Modern stack (often Next.js) for speed and clean metadata — helpful for ads and organic brand queries.',
          'Need more pages later? We can expand into a corporate site or store without starting over.',
        ],
      },
    ],
    processTitle: 'How we launch',
    processSteps: [
      { title: 'Offer & outline', text: 'USP, sections, copy and references.' },
      { title: 'Design & build', text: 'Layouts or direct development with responsive UI.' },
      { title: 'Go live', text: 'Domain, forms, analytics, speed checks.' },
    ],
    faqTitle: 'Landing page FAQ',
    faq: [
      {
        question: 'How much does a landing page cost?',
        answer: 'Typical turnkey landings start from $300. Motion, integrations or multilingual setups change the estimate.',
      },
      {
        question: 'How fast can you launch?',
        answer: 'Often 7–14 days after the brief is locked. Rush timelines are possible.',
      },
      {
        question: 'Good for Google/Meta ads?',
        answer: 'Yes — mobile speed, clear CTAs and tracking-friendly setup.',
      },
    ],
    ctaTitle: 'Need a landing for ads or a launch?',
    ctaText: 'Share your niche and goal — we will propose structure and timing.',
    relatedServiceLabel: 'All websites',
    pricingLabel: 'Website pricing',
    portfolioLabel: 'Work examples',
    contactLabel: 'Send a request',
    breadcrumbLabel: 'Landing pages',
  },
  'online-stores': {
    metaTitle: 'Online Store Development | Next.js E-commerce | TeleBots',
    metaDescription:
      'Custom online stores: catalog, cart, checkout, payments, admin. Next.js, SEO and speed. Free consultation — TeleBots.',
    keywords:
      'online store development, ecommerce website, next.js store, shop with payments, ecommerce price, TeleBots',
    h1: 'Custom online store development',
    intro:
      'We build stores that are easy to buy from and run: catalog, filters, cart, payments, order statuses and delivery/CRM integrations.',
    benefitsTitle: 'Store capabilities',
    benefits: [
      'Catalog with variants, search and filters',
      'Cart, checkout and online payments',
      'Mobile performance for conversion',
      'SEO-friendly category and product pages',
      'Order management basics',
      'Shipping, CRM and analytics integrations',
    ],
    sections: [
      {
        title: 'When custom ecommerce makes sense',
        paragraphs: [
          'Choose custom when SaaS templates block pricing rules, B2B flows or the UX your brand needs.',
          'Small catalogs can start lighter and grow into a full store.',
        ],
      },
      {
        title: 'Stack & support',
        paragraphs: [
          'Next.js is a common fit for speed, SEO and flexible integrations.',
          'After launch we help with iterations and checkout optimization.',
        ],
      },
    ],
    processTitle: 'Launch stages',
    processSteps: [
      { title: 'Catalog logic', text: 'Products, variants, shipping, payments, roles.' },
      { title: 'UX & engineering', text: 'Listing pages, PDP, cart, checkout, admin.' },
      { title: 'Go-live', text: 'Test orders, domain, team handoff.' },
    ],
    faqTitle: 'Online store FAQ',
    faq: [
      {
        question: 'How much does a store cost?',
        answer: 'Depends on catalog complexity and integrations. We share a range after a short requirements review.',
      },
      {
        question: 'Can you import products?',
        answer: 'Yes — Excel or platform exports are planned at kickoff.',
      },
      {
        question: 'Is it SEO-ready?',
        answer: 'We ship clean URLs, metadata structure and performance. Content strategy can be collaborative.',
      },
    ],
    ctaTitle: 'Planning a store launch or migration?',
    ctaText: 'Tell us about catalog size and integrations — we will outline the build.',
    relatedServiceLabel: 'Website development',
    pricingLabel: 'Pricing overview',
    portfolioLabel: 'E-commerce cases',
    contactLabel: 'Discuss the project',
    breadcrumbLabel: 'Online stores',
  },
  'ai-chatbots': {
    metaTitle: 'AI Chatbot for Business | Telegram & Website | TeleBots',
    metaDescription:
      'GPT-powered AI chatbots trained on your knowledge base for leads and 24/7 support on Telegram or your site. Consult — TeleBots.',
    keywords:
      'ai chatbot, chatgpt business bot, ai telegram bot, ai customer support, neural network chatbot, TeleBots',
    h1: 'AI chatbots for support, sales and onboarding',
    intro:
      'We connect AI to Telegram or a site widget: answers grounded in your docs, lead qualification and smooth handoff to humans.',
    benefitsTitle: 'AI bot capabilities',
    benefits: [
      'Answers from your pricing, FAQ and policies',
      'Lead qualification and contact capture',
      'Multilingual support',
      'Human escalation with context',
      'Telegram, website, or both',
      'Dialog review and prompt tuning',
    ],
    sections: [
      {
        title: 'AI vs scripted bots',
        paragraphs: [
          'Scripted flows win for rigid steps (booking, payments). AI wins when questions vary and a knowledge base already exists.',
          'Hybrids are common: buttons for key actions + AI for free-form questions.',
        ],
      },
      {
        title: 'Quality & safety',
        paragraphs: [
          'We constrain sources, reduce hallucinations and test real dialogs before production.',
          'Sensitive niches get cautious answers and mandatory specialist handoff.',
        ],
      },
    ],
    processTitle: 'How we implement AI',
    processSteps: [
      { title: 'Knowledge base', text: 'FAQ, docs, tone and restricted topics.' },
      { title: 'Channel & CRM', text: 'Telegram/site, lead routing, tooling.' },
      { title: 'Tune & monitor', text: 'Quality checks and early-week improvements.' },
    ],
    faqTitle: 'AI chatbot FAQ',
    faq: [
      {
        question: 'Can it use our documents?',
        answer: 'Yes — we ground answers in your materials and update them as offers change.',
      },
      {
        question: 'Will AI replace managers?',
        answer: 'Usually it removes repetitive questions and passes warmer leads to people.',
      },
      {
        question: 'What does it cost?',
        answer: 'Depends on channel, knowledge size and integrations — plus API usage estimates after the brief.',
      },
    ],
    ctaTitle: 'Want AI support without messy answers?',
    ctaText: 'Send sample customer questions — we will say if AI is a fit.',
    relatedServiceLabel: 'TeleBots chatbots',
    pricingLabel: 'Bot pricing',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Book a consult',
    breadcrumbLabel: 'AI chatbots',
  },
  'data-parsers': {
    metaTitle: 'Custom Parsers & Data Collection | Excel, API, CRM | TeleBots',
    metaDescription:
      'Turnkey parsers for prices, products and listings. Export to Excel, Google Sheets, DB or API. Free consult — TeleBots.',
    keywords:
      'web scraper development, data parser, price monitoring, marketplace parser, excel export, competitor monitoring, TeleBots',
    h1: 'Parsers and automated data collection',
    intro:
      'We automate collection from sites and marketplaces — refreshed tables, reports or APIs instead of manual copy-paste.',
    benefitsTitle: 'What we automate',
    benefits: [
      'Competitor price and stock monitoring',
      'Product catalog collection',
      'Listings and open-data parsing',
      'Scheduled runs',
      'Export to Sheets, DB or webhooks',
      'Telegram alerts on changes or failures',
    ],
    sections: [
      {
        title: 'Who needs a parser',
        paragraphs: [
          'E-commerce, agencies, analysts and procurement teams that need recurring data without busywork.',
          'We assess source stability and legal constraints before recommending an approach.',
        ],
      },
      {
        title: 'Reliability',
        paragraphs: [
          'Layouts change — we plan monitoring and fast fixes, with logs/alerts for critical pipelines.',
          'We also support agencies as a white-label delivery partner.',
        ],
      },
    ],
    processTitle: 'Parser delivery',
    processSteps: [
      { title: 'Source & fields', text: 'What to collect, how often, where it lands.' },
      { title: 'Build', text: 'Service, schedule, export, error handling.' },
      { title: 'Handoff', text: 'Docs, test runs, optional support.' },
    ],
    faqTitle: 'Parser FAQ',
    faq: [
      {
        question: 'How much does a parser cost?',
        answer: 'One-off extraction is cheaper than continuous multi-source monitoring. We quote after sample pages and fields.',
      },
      {
        question: 'Is scraping legal?',
        answer: 'It depends on the source and terms. We flag risks and prefer official APIs when available.',
      },
      {
        question: 'Where can data go?',
        answer: 'Excel, Google Sheets, databases, CRM or your API/webhook.',
      },
    ],
    ctaTitle: 'Have a data source and manual routine?',
    ctaText: 'Send a sample page and fields — we will say if automation is realistic.',
    relatedServiceLabel: 'All services',
    pricingLabel: 'Pricing',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Get in touch',
    breadcrumbLabel: 'Parsers',
  },
};

const pl: AllLandings = {
  'telegram-bots': {
    metaTitle: 'Tworzenie botów Telegram pod klucz | od $150 | TeleBots',
    metaDescription:
      'Boty Telegram dla leadów, płatności, CRM i AI. Start w 24h, od $150. 200+ projektów. Darmowa konsultacja — TeleBots.',
    keywords:
      'tworzenie botów telegram, zamów bota telegram, bot telegram dla firmy, bot z płatnościami, integracja crm telegram, cena bota telegram, TeleBots',
    h1: 'Tworzenie botów Telegram dla biznesu',
    intro:
      'Budujemy boty Telegram, które zbierają leady, przyjmują płatności, odpowiadają klientom i łączą się z CRM — praktyczne scenariusze, nie dema.',
    benefitsTitle: 'Co daje bot w Telegramie',
    benefits: [
      'Leady i kwalifikacja 24/7',
      'Płatności w czacie',
      'Integracje CRM, Sheets i API',
      'Odpowiedzi AI z przekazaniem do człowieka',
      'Broadcasty, lejki i przypomnienia',
      'Panel dla zespołu',
    ],
    sections: [
      {
        title: 'Do jakich zadań pasuje bot',
        paragraphs: [
          'Rezerwacje, katalogi, support, narzędzia wewnętrzne i automatyzacja sprzedaży — szczególnie gdy klienci są w komunikatorach.',
          'Jeśli macie stronę lub Instagram, bot skraca drogę do kontaktu lub płatności.',
        ],
      },
      {
        title: 'Jak pracujemy',
        paragraphs: [
          'Zaczynamy od celu i scenariusza rozmowy, potem prototyp, integracje, testy i przekazanie.',
          'Stack: Node.js/Python, Bot API, webhooki, bazy i płatności. MVP często w dni–kilka tygodni.',
        ],
      },
    ],
    processTitle: 'Etapy',
    processSteps: [
      { title: 'Brief i flow', text: 'Cel, kroki dialogu, integracje, metryki.' },
      { title: 'Build i QA', text: 'Logika, płatności/CRM, testy.' },
      { title: 'Start', text: 'Wdrożenie, instrukcja, wczesne poprawki.' },
    ],
    faqTitle: 'FAQ: boty Telegram',
    faq: [
      {
        question: 'Ile kosztuje bot Telegram?',
        answer: 'Prosty bot leadowy od $150. Płatności i CRM zwykle od $300–800+. Wycena po briefie.',
      },
      {
        question: 'Ile trwa realizacja?',
        answer: 'MVP często 3–10 dni. Trudniejsze integracje: 2–4 tygodnie.',
      },
      {
        question: 'Czy podłączycie płatności i CRM?',
        answer: 'Tak — standardowe systemy i autorskie API pod Wasz proces.',
      },
    ],
    ctaTitle: 'Potrzebujecie bota pod proces?',
    ctaText: 'Opiszcie cel — zaproponujemy scenariusz, termin i widełki.',
    relatedServiceLabel: 'Wszystkie chatboty',
    pricingLabel: 'Cennik',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Kontakt',
    breadcrumbLabel: 'Boty Telegram',
  },
  'landing-pages': {
    metaTitle: 'Tworzenie landing page pod klucz | od $300 | TeleBots',
    metaDescription:
      'Landing page pod konwersję: struktura, mobile-first, SEO, szybki start. Zwykle 1–2 tygodnie. Konsultacja — TeleBots.',
    keywords:
      'tworzenie landing page, landing pod klucz, zamów landing, strona sprzedażowa, one page, cena landingu, TeleBots',
    h1: 'Landing page, który sprzedaje',
    intro:
      'Projektujemy i wdrażamy landingi pod oferty i reklamy: jasna struktura, szybkość, mobile i CTA prowadzące do leadu lub sprzedaży.',
    benefitsTitle: 'Co zawiera landing',
    benefits: [
      'Struktura pod ofertę',
      'RWD mobile-first',
      'Podstawy SEO technicznego',
      'Formularz / Telegram / CRM',
      'Analityka (GA4 / piksele)',
      'Poprawki po starcie w zakresie',
    ],
    sections: [
      {
        title: 'Kiedy landing ma sens',
        paragraphs: [
          'Jedna oferta, kampania ads lub szybki test produktu bez rozbudowanego serwisu.',
          'Użytkownik ma w kilka sekund zrozumieć wartość i kolejny krok.',
        ],
      },
      {
        title: 'Technologia i SEO',
        paragraphs: [
          'Nowoczesny stack (często Next.js) pod szybkość i metadane.',
          'Później możemy rozbudować do strony firmowej lub sklepu.',
        ],
      },
    ],
    processTitle: 'Jak uruchamiamy',
    processSteps: [
      { title: 'Oferta i outline', text: 'USP, bloki, copy, referencje.' },
      { title: 'Design i kod', text: 'Makiety lub od razu development.' },
      { title: 'Start', text: 'Domena, formularze, analityka, speed.' },
    ],
    faqTitle: 'FAQ: landingi',
    faq: [
      {
        question: 'Ile kosztuje landing?',
        answer: 'Typowo od $300. Animacje, integracje i wersje językowe wpływają na wycenę.',
      },
      {
        question: 'Jak szybko start?',
        answer: 'Często 7–14 dni po briefie.',
      },
      {
        question: 'Pod Google/Meta ads?',
        answer: 'Tak — mobile, CTA i tracking.',
      },
    ],
    ctaTitle: 'Potrzebujecie landingu pod ads?',
    ctaText: 'Napiszcie niszę i cel — zaproponujemy strukturę.',
    relatedServiceLabel: 'Wszystkie strony',
    pricingLabel: 'Cennik stron',
    portfolioLabel: 'Przykłady',
    contactLabel: 'Wyślij zapytanie',
    breadcrumbLabel: 'Landing pages',
  },
  'online-stores': {
    metaTitle: 'Tworzenie sklepu internetowego | Next.js | TeleBots',
    metaDescription:
      'Sklep pod klucz: katalog, koszyk, płatności, admin. Next.js, SEO i szybkość. Konsultacja — TeleBots.',
    keywords:
      'tworzenie sklepu internetowego, sklep pod klucz, e-commerce Next.js, sklep z płatnościami, cena sklepu, TeleBots',
    h1: 'Tworzenie sklepu internetowego pod klucz',
    intro:
      'Budujemy e-commerce wygodny dla klienta i zespołu: katalog, filtry, koszyk, płatności, statusy i integracje dostawy/CRM.',
    benefitsTitle: 'Funkcje sklepu',
    benefits: [
      'Katalog z wariantami i filtrami',
      'Koszyk, checkout, płatności online',
      'Wydajność mobile',
      'SEO kategorii i kart produktu',
      'Obsługa zamówień',
      'Integracje dostawy, CRM, analityki',
    ],
    sections: [
      {
        title: 'Kiedy custom e-commerce',
        paragraphs: [
          'Gdy szablon SaaS blokuje logikę cen, B2B lub UX marki.',
          'Mały asortyment można zacząć lżej i rozbudować później.',
        ],
      },
      {
        title: 'Stack i wsparcie',
        paragraphs: [
          'Next.js często daje dobry balans szybkości, SEO i integracji.',
          'Po starcie pomagamy w iteracjach checkoutu.',
        ],
      },
    ],
    processTitle: 'Etapy',
    processSteps: [
      { title: 'Logika katalogu', text: 'Produkty, dostawa, płatności, role.' },
      { title: 'UX i kod', text: 'Listingi, PDP, koszyk, admin.' },
      { title: 'Start', text: 'Testy zamówień, domena, szkolenie.' },
    ],
    faqTitle: 'FAQ: sklepy',
    faq: [
      {
        question: 'Ile kosztuje sklep?',
        answer: 'Zależy od złożoności katalogu i integracji — widełki po krótkim audycie wymagań.',
      },
      {
        question: 'Import produktów?',
        answer: 'Tak, Excel lub eksport z innej platformy.',
      },
      {
        question: 'SEO?',
        answer: 'Czyste URL, metadane, wydajność. Treści możemy prowadzić wspólnie.',
      },
    ],
    ctaTitle: 'Start lub migracja sklepu?',
    ctaText: 'Opiszcie asortyment i integracje — zaplanujemy etapy.',
    relatedServiceLabel: 'Tworzenie stron',
    pricingLabel: 'Cennik',
    portfolioLabel: 'Case e-commerce',
    contactLabel: 'Omówić projekt',
    breadcrumbLabel: 'Sklepy online',
  },
  'ai-chatbots': {
    metaTitle: 'Chatbot AI dla firm | Telegram i strona | TeleBots',
    metaDescription:
      'Chatbot AI (GPT) na Waszej bazie wiedzy: leady i support 24/7 w Telegramie lub na stronie. Konsultacja — TeleBots.',
    keywords:
      'chatbot ai, bot chatgpt dla firmy, ai bot telegram, support ai, chatbot neural, TeleBots',
    h1: 'Chatboty AI do supportu, sprzedaży i onboardingu',
    intro:
      'Podłączamy AI do Telegrama lub widgetu: odpowiedzi z Waszych dokumentów, kwalifikacja leadów i przekazanie do człowieka.',
    benefitsTitle: 'Możliwości AI',
    benefits: [
      'Odpowiedzi z cennika, FAQ i polityk',
      'Kwalifikacja leadów',
      'Wiele języków',
      'Eskalacja z kontekstem',
      'Telegram i/lub strona',
      'Tuning promptów po starcie',
    ],
    sections: [
      {
        title: 'AI vs bot przyciskowy',
        paragraphs: [
          'Sztywne kroki (rezerwacja, płatność) — scenariusz. Dużo pytań w różnej formie — AI.',
          'Hybryda bywa najlepsza: przyciski + wolne pytania.',
        ],
      },
      {
        title: 'Jakość i bezpieczeństwo',
        paragraphs: [
          'Ograniczamy źródła, testujemy dialogi, ograniczamy halucynacje.',
          'Branże wrażliwe: ostrożne odpowiedzi i obowiązkowy handoff.',
        ],
      },
    ],
    processTitle: 'Wdrożenie AI',
    processSteps: [
      { title: 'Baza wiedzy', text: 'FAQ, dokumenty, ton, tematy zakazane.' },
      { title: 'Kanał i CRM', text: 'Telegram/strona, routing leadów.' },
      { title: 'Tuning', text: 'Testy jakości i poprawki.' },
    ],
    faqTitle: 'FAQ: chatbot AI',
    faq: [
      {
        question: 'Czy uczycie na naszych dokumentach?',
        answer: 'Tak — i aktualizujemy bazę przy zmianie oferty.',
      },
      {
        question: 'Czy AI zastąpi handlowców?',
        answer: 'Raczej zdejmuje powtarzalne pytania i przekazuje cieplejsze leady.',
      },
      {
        question: 'Koszt?',
        answer: 'Zależy od kanału, bazy i integracji + szacunek kosztów API.',
      },
    ],
    ctaTitle: 'Chcecie AI support bez chaosu?',
    ctaText: 'Prześlijcie przykładowe pytania klientów.',
    relatedServiceLabel: 'Chatboty TeleBots',
    pricingLabel: 'Cennik botów',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Konsultacja',
    breadcrumbLabel: 'Chatboty AI',
  },
  'data-parsers': {
    metaTitle: 'Parsery i zbieranie danych | Excel, API, CRM | TeleBots',
    metaDescription:
      'Parsery pod klucz: ceny, produkty, ogłoszenia. Eksport do Excel, Sheets, DB lub API. Konsultacja — TeleBots.',
    keywords:
      'tworzenie parsera, parsing stron, zbieranie danych, parser cen, parser marketplace, eksport excel, TeleBots',
    h1: 'Parsery i automatyczny zbiór danych',
    intro:
      'Automatyzujemy zbiór z serwisów i marketplace’ów — odświeżane tabele, raporty lub API zamiast ręcznego kopiowania.',
    benefitsTitle: 'Co automatyzujemy',
    benefits: [
      'Monitoring cen i stanów',
      'Zbiór katalogów',
      'Ogłoszenia i dane otwarte',
      'Harmonogram uruchomień',
      'Eksport do Sheets/DB/API',
      'Alerty w Telegramie',
    ],
    sections: [
      {
        title: 'Dla kogo parser',
        paragraphs: [
          'E-commerce, agencje, analityka i zakupy z cykliczną potrzebą danych.',
          'Ocena źródła i ryzyk prawnych przed startem.',
        ],
      },
      {
        title: 'Niezawodność',
        paragraphs: [
          'Layouty się zmieniają — monitoring i szybkie poprawki.',
          'Współpraca white-label z agencjami.',
        ],
      },
    ],
    processTitle: 'Jak robimy parser',
    processSteps: [
      { title: 'Źródło i pola', text: 'Co, jak często, dokąd.' },
      { title: 'Build', text: 'Serwis, schedule, eksport, błędy.' },
      { title: 'Przekazanie', text: 'Dokumentacja, testy, opcjonalny support.' },
    ],
    faqTitle: 'FAQ: parsery',
    faq: [
      {
        question: 'Ile kosztuje parser?',
        answer: 'Jednorazowy zrzut tańszy niż ciągły monitoring wielu źródeł. Wycena po przykładach stron.',
      },
      {
        question: 'Czy parsing jest legalny?',
        answer: 'Zależy od źródła i regulaminu. Wskazujemy ryzyka i API, jeśli dostępne.',
      },
      {
        question: 'Dokąd trafiają dane?',
        answer: 'Excel, Sheets, baza, CRM lub Wasze API.',
      },
    ],
    ctaTitle: 'Macie źródło i ręczną rutynę?',
    ctaText: 'Wyślijcie przykład strony i pola — ocenimy automatyzację.',
    relatedServiceLabel: 'Wszystkie usługi',
    pricingLabel: 'Cennik',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Kontakt',
    breadcrumbLabel: 'Parsery',
  },
};

const ru: AllLandings = {
  'telegram-bots': {
    metaTitle: 'Разработка Telegram-ботов под ключ | от $150 | TeleBots',
    metaDescription:
      'Telegram-бот для бизнеса: лиды, оплата, CRM, AI. Старт от 24 ч, от $150. 200+ проектов. Бесплатная консультация — TeleBots.',
    keywords:
      'разработка telegram ботов, заказать телеграм бота, создание бота telegram, телеграм бот для бизнеса, бот с оплатой, интеграция crm telegram, TeleBots',
    h1: 'Разработка Telegram-ботов под ключ для бизнеса',
    intro:
      'Делаем Telegram-ботов, которые собирают заявки, принимают оплату, отвечают клиентам и синхронизируются с CRM — рабочие сценарии, а не демо.',
    benefitsTitle: 'Что даёт бот в Telegram',
    benefits: [
      'Заявки и квалификация лидов 24/7',
      'Оплата прямо в чате',
      'Интеграции CRM, Sheets и API',
      'AI-ответы с передачей человеку',
      'Рассылки, воронки и напоминания',
      'Админка для команды',
    ],
    sections: [
      {
        title: 'Для каких задач подходит бот',
        paragraphs: [
          'Запись, каталог, поддержка, внутренние сервисы и продажи — особенно если клиенты уже в мессенджерах.',
          'Если есть сайт или Instagram, бот сокращает путь до контакта или оплаты.',
        ],
      },
      {
        title: 'Как мы разрабатываем',
        paragraphs: [
          'Сначала цель и сценарий диалога, затем прототип, интеграции, тесты и передача с инструкцией.',
          'Стек: Node.js/Python, Bot API, вебхуки, БД и платежи. MVP часто за дни–несколько недель.',
        ],
      },
    ],
    processTitle: 'Этапы работы',
    processSteps: [
      { title: 'Бриф и сценарий', text: 'Цель, шаги диалога, интеграции, метрики.' },
      { title: 'Разработка и тесты', text: 'Логика, оплата/CRM, проверка кейсов.' },
      { title: 'Запуск', text: 'Деплой, обучение команды, правки после старта.' },
    ],
    faqTitle: 'Частые вопросы о Telegram-ботах',
    faq: [
      {
        question: 'Сколько стоит Telegram-бот?',
        answer: 'Простой бот для заявок — от $150. Оплата, CRM и сложная логика — обычно от $300–800+. Оценку даём после брифа.',
      },
      {
        question: 'Сколько длится разработка?',
        answer: 'MVP часто 3–10 дней. Сложные интеграции — 2–4 недели.',
      },
      {
        question: 'Можно подключить оплату и CRM?',
        answer: 'Да — стандартные провайдеры и кастомные API под ваш процесс.',
      },
    ],
    ctaTitle: 'Нужен Telegram-бот под ваш процесс?',
    ctaText: 'Кратко опишите задачу — предложим сценарий, срок и вилку бюджета.',
    relatedServiceLabel: 'Все чат-боты',
    pricingLabel: 'Цены',
    portfolioLabel: 'Портфолио',
    contactLabel: 'Написать нам',
    breadcrumbLabel: 'Telegram-боты',
  },
  'landing-pages': {
    metaTitle: 'Разработка лендинга под ключ | от $300 | TeleBots',
    metaDescription:
      'Лендинг под ключ: структура под конверсию, адаптив, SEO-база, быстрый запуск. Обычно 1–2 недели. Консультация — TeleBots.',
    keywords:
      'разработка лендинга, лендинг под ключ, заказать лендинг, продающий лендинг, одностраничный сайт, цена лендинга, TeleBots',
    h1: 'Разработка лендинга под ключ — страница, которая продаёт',
    intro:
      'Делаем лендинги под офферы и рекламу: понятная структура, скорость, мобильная версия и CTA к заявке или оплате.',
    benefitsTitle: 'Что входит в лендинг',
    benefits: [
      'Структура блоков под оффер',
      'Mobile-first адаптив',
      'Техническая SEO-база',
      'Форма / Telegram / CRM',
      'Аналитика (GA4 / пиксели)',
      'Правки после запуска в рамках ТЗ',
    ],
    sections: [
      {
        title: 'Когда нужен отдельный лендинг',
        paragraphs: [
          'Один оффер, рекламная кампания или быстрый тест продукта без большого сайта.',
          'За 5–10 секунд пользователь должен понять ценность и следующий шаг.',
        ],
      },
      {
        title: 'Технологии и SEO',
        paragraphs: [
          'Современный стек (часто Next.js): скорость и корректные мета-теги.',
          'Позже можно расширить до корпоративного сайта или магазина.',
        ],
      },
    ],
    processTitle: 'Как запускаем лендинг',
    processSteps: [
      { title: 'Оффер и структура', text: 'УТП, блоки, тексты, референсы.' },
      { title: 'Дизайн и вёрстка', text: 'Макеты или сразу разработка.' },
      { title: 'Запуск', text: 'Домен, формы, аналитика, скорость.' },
    ],
    faqTitle: 'Вопросы о лендингах',
    faq: [
      {
        question: 'Сколько стоит лендинг?',
        answer: 'Типичный лендинг под ключ — от $300. Анимации, интеграции и мультиязычность влияют на смету.',
      },
      {
        question: 'За сколько можно запустить?',
        answer: 'Часто 7–14 дней после согласованного ТЗ.',
      },
      {
        question: 'Подходит для Google/Meta ads?',
        answer: 'Да — мобильная скорость, понятные CTA и трекинг.',
      },
    ],
    ctaTitle: 'Нужен лендинг под рекламу или запуск?',
    ctaText: 'Напишите нишу и цель страницы — предложим структуру и срок.',
    relatedServiceLabel: 'Все сайты',
    pricingLabel: 'Цены на сайты',
    portfolioLabel: 'Примеры работ',
    contactLabel: 'Оставить заявку',
    breadcrumbLabel: 'Лендинги',
  },
  'online-stores': {
    metaTitle: 'Разработка интернет-магазина под ключ | Next.js | TeleBots',
    metaDescription:
      'Интернет-магазин под ключ: каталог, корзина, оплата, админка. Next.js, SEO и скорость. Консультация — TeleBots.',
    keywords:
      'разработка интернет-магазина, интернет-магазин под ключ, создать интернет-магазин, e-commerce Next.js, магазин с оплатой, TeleBots',
    h1: 'Разработка интернет-магазина под ключ',
    intro:
      'Собираем e-commerce, удобный покупателю и команде: каталог, фильтры, корзина, оплата, статусы заказов и интеграции доставки/CRM.',
    benefitsTitle: 'Что получает магазин',
    benefits: [
      'Каталог с вариантами и фильтрами',
      'Корзина, checkout и онлайн-оплата',
      'Мобильная скорость',
      'SEO категорий и карточек',
      'Базовая обработка заказов',
      'Интеграции доставки, CRM, аналитики',
    ],
    sections: [
      {
        title: 'Кому подходит кастомный магазин',
        paragraphs: [
          'Когда шаблонный SaaS ограничивает логику цен, B2B или нужный UX.',
          'Небольшой ассортимент можно начать легче и масштабировать позже.',
        ],
      },
      {
        title: 'Стек и поддержка',
        paragraphs: [
          'Next.js часто даёт баланс скорости, SEO и гибких интеграций.',
          'После запуска помогаем с итерациями и оптимизацией checkout.',
        ],
      },
    ],
    processTitle: 'Этапы запуска',
    processSteps: [
      { title: 'Логика каталога', text: 'Товары, доставка, оплата, роли.' },
      { title: 'UX и разработка', text: 'Листинги, карточки, корзина, админка.' },
      { title: 'Запуск', text: 'Тестовые заказы, домен, обучение.' },
    ],
    faqTitle: 'Вопросы об интернет-магазинах',
    faq: [
      {
        question: 'Сколько стоит интернет-магазин?',
        answer: 'Зависит от каталога и интеграций. Диапазон даём после короткого разбора требований.',
      },
      {
        question: 'Можно импортировать товары?',
        answer: 'Да — Excel или выгрузка с другой платформы.',
      },
      {
        question: 'Будет ли магазин удобен для SEO?',
        answer: 'ЧПУ, мета-теги, структура и скорость. Контент можно вести вместе.',
      },
    ],
    ctaTitle: 'Планируете запуск или переезд магазина?',
    ctaText: 'Опишите ассортимент и интеграции — предложим этапы.',
    relatedServiceLabel: 'Разработка сайтов',
    pricingLabel: 'Ориентировочные цены',
    portfolioLabel: 'Кейсы e-commerce',
    contactLabel: 'Обсудить проект',
    breadcrumbLabel: 'Интернет-магазины',
  },
  'ai-chatbots': {
    metaTitle: 'AI-чат-бот для бизнеса | Telegram и сайт | TeleBots',
    metaDescription:
      'AI-чат-бот на GPT: ответы по вашей базе знаний, лиды и поддержка 24/7 в Telegram или на сайте. Консультация — TeleBots.',
    keywords:
      'ai чат-бот, chatgpt бот для бизнеса, ai бот telegram, нейросеть для поддержки, бот с искусственным интеллектом, TeleBots',
    h1: 'AI-чат-боты для поддержки, продаж и онбординга',
    intro:
      'Подключаем AI к Telegram или виджету на сайте: ответы на основе ваших документов, квалификация лидов и передача сложных диалогов менеджеру.',
    benefitsTitle: 'Возможности AI-бота',
    benefits: [
      'Ответы по прайсу, FAQ и политикам',
      'Квалификация лидов и сбор контактов',
      'Мультиязычная поддержка',
      'Эскалация человеку с контекстом',
      'Telegram и/или сайт',
      'Разбор диалогов и тюнинг промптов',
    ],
    sections: [
      {
        title: 'Когда AI лучше «кнопочного» бота',
        paragraphs: [
          'Жёсткие шаги (запись, оплата) — сценарий. Много формулировок вопросов — AI.',
          'Часто делаем гибрид: кнопки + свободные вопросы.',
        ],
      },
      {
        title: 'Качество и безопасность',
        paragraphs: [
          'Ограничиваем источники, снижаем галлюцинации, тестируем диалоги до продакшена.',
          'Чувствительные ниши — осторожные ответы и обязательный хэндофф.',
        ],
      },
    ],
    processTitle: 'Как подключаем AI',
    processSteps: [
      { title: 'База знаний', text: 'FAQ, документы, тон, табу.' },
      { title: 'Канал и CRM', text: 'Telegram/сайт, маршрутизация лидов.' },
      { title: 'Тюнинг', text: 'Проверка качества и правки.' },
    ],
    faqTitle: 'Вопросы об AI-чат-ботах',
    faq: [
      {
        question: 'Можно обучить на наших документах?',
        answer: 'Да — и обновляем базу при изменении оффера.',
      },
      {
        question: 'AI заменит менеджеров?',
        answer: 'Обычно снимает типовые вопросы и передаёт более тёплые лиды команде.',
      },
      {
        question: 'Сколько стоит AI-бот?',
        answer: 'Зависит от канала, объёма базы и интеграций + ориентир по API.',
      },
    ],
    ctaTitle: 'Хотите AI-поддержку без хаоса в ответах?',
    ctaText: 'Пришлите примеры вопросов клиентов — оценим, подходит ли AI.',
    relatedServiceLabel: 'Чат-боты TeleBots',
    pricingLabel: 'Цены на ботов',
    portfolioLabel: 'Портфолио',
    contactLabel: 'Запросить консультацию',
    breadcrumbLabel: 'AI-чат-боты',
  },
  'data-parsers': {
    metaTitle: 'Разработка парсеров и сбор данных | Excel, API, CRM | TeleBots',
    metaDescription:
      'Парсеры под ключ: цены, товары, объявления. Экспорт в Excel, Google Sheets, БД или API. Консультация — TeleBots.',
    keywords:
      'разработка парсера, парсинг сайтов, сбор данных, парсер цен, парсер маркетплейса, экспорт excel, мониторинг конкурентов, TeleBots',
    h1: 'Парсеры и автоматический сбор данных для бизнеса',
    intro:
      'Автоматизируем сбор с сайтов и маркетплейсов: обновляемые таблицы, отчёты или API вместо ручного копирования.',
    benefitsTitle: 'Что автоматизируем',
    benefits: [
      'Мониторинг цен и наличия',
      'Сбор каталогов товаров',
      'Объявления и открытые данные',
      'Планировщик запусков',
      'Экспорт в Sheets/БД/API',
      'Алерты в Telegram',
    ],
    sections: [
      {
        title: 'Для кого парсер',
        paragraphs: [
          'E-commerce, агентства, аналитика и закупки с регулярной потребностью в данных.',
          'Оцениваем источник и юридические ограничения до старта.',
        ],
      },
      {
        title: 'Надёжность',
        paragraphs: [
          'Вёрстка меняется — закладываем мониторинг и быстрые правки.',
          'Можем работать white-label для агентств.',
        ],
      },
    ],
    processTitle: 'Как делаем парсер',
    processSteps: [
      { title: 'Источник и поля', text: 'Что собираем, как часто, куда складываем.' },
      { title: 'Разработка', text: 'Сервис, расписание, экспорт, ошибки.' },
      { title: 'Передача', text: 'Инструкция, тестовые прогоны, поддержка по запросу.' },
    ],
    faqTitle: 'Вопросы о парсерах',
    faq: [
      {
        question: 'Сколько стоит парсер?',
        answer: 'Разовый сбор дешевле постоянного мониторинга нескольких источников. Оценку — после примеров страниц.',
      },
      {
        question: 'Легально ли парсить сайты?',
        answer: 'Зависит от источника и условий. Подсказываем риски и официальные API, если они есть.',
      },
      {
        question: 'Куда можно отдавать данные?',
        answer: 'Excel, Google Sheets, БД, CRM или ваш API/webhook.',
      },
    ],
    ctaTitle: 'Есть источник данных и ручная рутина?',
    ctaText: 'Пришлите пример страницы и нужные поля — скажем, реально ли автоматизировать.',
    relatedServiceLabel: 'Все услуги',
    pricingLabel: 'Цены',
    portfolioLabel: 'Портфолио',
    contactLabel: 'Связаться',
    breadcrumbLabel: 'Парсеры',
  },
};

export const seoLandingsByLang: Record<Language, AllLandings> = { uk, en, pl, ru };

export function getSeoLanding(lang: Language, slug: string): SeoLandingCopy | null {
  if (!(slug in uk)) return null;
  return seoLandingsByLang[lang][slug as SeoLandingSlug];
}

export function isSeoLandingSlug(slug: string): slug is SeoLandingSlug {
  return (SEO_LANDING_SLUGS as readonly string[]).includes(slug);
}
