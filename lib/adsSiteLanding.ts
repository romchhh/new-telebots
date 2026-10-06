/** Рекламний лендинг розробки сайтів. Не в меню і не в sitemap. */

export const ADS_SITE_NICHES = ['auto', 'cleaning', 'realty'] as const;
export type AdsSiteNiche = (typeof ADS_SITE_NICHES)[number] | 'general';

export const ADS_TELEGRAM_URL = 'https://t.me/telebotsnowayrm';

/** Профіль TeleBots у Google (відгуки). */
export const ADS_GOOGLE_PROFILE_URL = 'https://share.google/sMZc6KSznvV36C7FM';

export const ADS_GOOGLE_RATING = {
  score: '5.0',
  reviewsLabel: '178 відгуків',
  category: 'Компанія-розробник програмного забезпечення в Києві',
} as const;

export type AdsSiteCase = {
  id: string;
  image: string;
  liveUrl?: string;
  niche: string;
  task: string;
  result: string;
};

const CASES: Record<string, AdsSiteCase> = {
  emaro: {
    id: 'emaro-autocare',
    image: '/portfolio/portfolio-emaro-autocare.jpg',
    liveUrl: 'https://emaroautocare.pl/uk',
    niche: 'Автодетейлінг',
    task: 'Показати послуги, ціни і галерею до/після, щоб заявка йшла з телефону.',
    result: 'Одна сторінка з прайсом, фото робіт і формою. Клієнт бачить, що замовляє, до дзвінка.',
  },
  glow: {
    id: 'royal-glow',
    image: '/portfolio/portfolio-royal-glow.jpg',
    liveUrl: 'https://www.royalglow.services/',
    niche: 'Клінінг',
    task: 'Зібрати послуги, ціни і заявку для локального сервісу.',
    result: 'Прайс і форма на сайті, без «напишіть нам у директ і ми відповімо коли-небудь».',
  },
  filo: {
    id: 'filo-estate',
    image: '/portfolio/portfolio-filo-estate.jpg',
    liveUrl: 'https://filo.estate/en',
    niche: 'Нерухомість',
    task: 'Каталог об’єктів з фільтрами і заявкою на перегляд.',
    result: 'Об’єкти можна гортати з телефону, заявка не губиться в пошті.',
  },
  flix: {
    id: 'flix-market',
    image: '/portfolio/portfolio-flix-market.jpg',
    liveUrl: 'https://flix-market.com/',
    niche: 'Інтернет-магазин',
    task: 'Каталог, оплата і особистий кабінет.',
    result: 'Покупець оплачує на сайті, замовлення не збирається вручну з чату.',
  },
};

const TRUST = ['EMARO', 'ROYAL GLOW', 'FILO', 'FLIX', '12 FEET'] as const;

export type AdsSiteLandingCopy = {
  slug: AdsSiteNiche;
  h1: string;
  lead: string;
  cases: AdsSiteCase[];
};

const SHARED_CASES = [CASES.emaro, CASES.glow, CASES.filo, CASES.flix];

export function getAdsSiteLanding(slug: string | undefined): AdsSiteLandingCopy | null {
  if (!slug || slug === 'general') {
    return {
      slug: 'general',
      h1: 'Розробка сайту під ключ для бізнесу',
      lead: 'Сайт, з якого залишають заявку з телефону: структура, дизайн, форма в Telegram. Працюємо напряму, без посередників.',
      cases: SHARED_CASES,
    };
  }
  if (slug === 'auto') {
    return {
      slug: 'auto',
      h1: 'Розробка сайту під ключ для автосервісу',
      lead: 'Послуги, ціни і запис з телефону — без конструктора, який виглядає як у сусіда. Лендінг зазвичай за 5–7 днів. Працюємо напряму, без посередників.',
      cases: [CASES.emaro, CASES.glow, CASES.flix, CASES.filo],
    };
  }
  if (slug === 'cleaning') {
    return {
      slug: 'cleaning',
      h1: 'Розробка сайту під ключ для клінінгу',
      lead: 'Прайс, райони виїзду і заявка на прибирання. Людина розуміє ціну до дзвінка. Лендінг зазвичай за 5–7 днів. Працюємо напряму.',
      cases: [CASES.glow, CASES.emaro, CASES.filo, CASES.flix],
    };
  }
  if (slug === 'realty') {
    return {
      slug: 'realty',
      h1: 'Розробка сайту під ключ для агентства нерухомості',
      lead: 'Каталог об’єктів, фільтри і заявка на перегляд. Лендінг або каталог — після брифу називаємо строк. Працюємо напряму, без посередників.',
      cases: [CASES.filo, CASES.flix, CASES.emaro, CASES.glow],
    };
  }
  return null;
}

export const ADS_SITE_TRUST = TRUST;

export const ADS_SITE_PROBLEMS = [
  'Сайт не приносить заявок.',
  'Студія пропала після оплати.',
  'Довго і дорого.',
  'Не зрозуміло, що вам продають.',
];

export const ADS_SITE_INCLUDES_INTRO_ITEMS = [
  {
    kicker: 'Під ключ',
    text: 'Це розробка «під ключ»: повна реалізація сайту, проєктування структури та адаптивний дизайн під ваш бізнес.',
  },
  {
    kicker: 'Інтеграції',
    text: 'Впроваджуємо функціонал і інтеграції — CRM, оплати, за потреби Нова Пошта, форми заявок, синхронізація залишків зі складом. Для магазинів — адмін-панель для каталогу, клієнтів і замовлень.',
  },
  {
    kicker: 'Контент і SEO',
    text: 'Допоможемо з текстами (copywriting) і підбором фото та відео для товарів і сайту. У межах проєкту — базова SEO-оптимізація та швидкість завантаження.',
  },
] as const;

/** @deprecated use ADS_SITE_INCLUDES_INTRO_ITEMS */
export const ADS_SITE_INCLUDES_INTRO = ADS_SITE_INCLUDES_INTRO_ITEMS.map((item) => item.text);

export const ADS_SITE_STEPS = [
  { n: '01', title: 'Розмова', time: '1 день', text: 'Що продаєте, звідки клієнти, який сайт уже є. Після цього називаємо тип сайту і вилку.' },
  { n: '02', title: 'Структура і дизайн', time: '3–7 днів', text: 'Схема сторінок і макет. Правите до верстки, а не після.' },
  { n: '03', title: 'Збірка', time: '1–4 тижні', text: 'Верстка, форма, оплата якщо потрібна. Показуємо на тестовому адресі.' },
  { n: '04', title: 'Запуск', time: '1–2 дні', text: 'Домен, аналітика, перевірка форми з телефону. Далі сайт ваш.' },
];

export const ADS_SITE_PRICES = [
  { type: 'Лендінг', from: 'від $300', time: '5–7 днів', note: 'Одна сторінка: послуга, ціни, форма.' },
  { type: 'Сайт на кілька сторінок', from: 'від $500', time: '1–2 тижні', note: 'Розділи, блог або каталог без кошика.' },
  { type: 'Інтернет-магазин', from: 'від $600', time: '1–3 тижні', note: 'Каталог, кошик, оплата. Склад і кабінет — окремо.' },
];

export const ADS_SITE_PRICE_FACTORS = [
  'Скільки унікальних екранів, а не «сторінок з одним шаблоном».',
  'Оплата, CRM, кілька мов.',
  'Чи готові тексти і фото, чи їх треба зібрати.',
];

export const ADS_SITE_FAQ = [
  {
    q: 'Скільки це займає?',
    a: 'Лендінг — зазвичай 5–7 днів після того, як затвердили структуру. Сайт на кілька сторінок — 1–2 тижні, магазин — 1–3 тижні: залежить від каталогу і оплати.',
  },
  {
    q: 'Що потрібно від мене?',
    a: 'Ніша, приклади сайтів які подобаються, тексти і фото якщо є. Якщо текстів немає — скажемо, які блоки заповнити, і не будемо вигадувати ціни за вас.',
  },
  {
    q: 'Хто пише тексти?',
    a: 'Заголовки і структуру блоків збираємо ми. Факти, ціни і обіцянки — ваші. Чужий прайс у текст не ставимо.',
  },
  {
    q: 'Кому належить сайт після запуску?',
    a: 'Вам: домен, хостинг, доступи. Ми не тримаємо сайт «у себе», щоб ви не могли піти.',
  },
  {
    q: 'Що після запуску?',
    a: 'Місяць дивимось, чи форма доходить. Далі правки за окремою домовленістю, не абонемент за замовчуванням.',
  },
  {
    q: 'Як платити?',
    a: 'Частинами: старт і здача. Суму фіксуємо після розрахунку, не «від і до» в процесі без причини.',
  },
];
