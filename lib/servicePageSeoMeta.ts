import type { Language } from '@/components/translations';
import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';

/**
 * Семантика (один запит на URL, uk):
 * chatbots — «чат боти купити» + ціна Telegram
 * websites — «розробка сайтів під ключ» + вилка лендінг/магазин
 * design — «дизайн логотипу» + UI/UX у Figma
 * apps — «розробка додатків» iOS/Android
 * Бренд у title не пишемо: його додає withBrandTitle().
 */
export type ServicePageSeoCopy = {
  title: string;
  description: string;
  keywords: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export const SERVICE_PAGE_META: Record<Language, Record<ServiceId, ServicePageSeoCopy>> = {
  uk: {
    chatbots: {
      title: 'Чат-боти купити: Telegram від $100',
      description:
        'Чат-боти купити можна від $100: бот у Telegram збирає заявки, бере оплату й кладе замовлення в CRM. На консультації розберемо сценарій і назвемо строк.',
      keywords:
        'чат боти купити, замовити телеграм бота, розробка чат ботів ціна, чат бот ціна, telegram бот на замовлення, бот з оплатою, TeleBots',
      openGraphTitle: 'Чат-бот у Telegram від $100',
      openGraphDescription:
        'Заявки, оплата й CRM у Telegram. Простий сценарій збираємо за добу, складніший — після брифу.',
    },
    websites: {
      title: 'Розробка сайтів під ключ від $150',
      description:
        'Розробка сайтів під ключ на Next.js: лендінг від $150, інтернет-магазин від $400. Адмінка, оплата і сторінки, які нормально відкриваються з телефону.',
      keywords:
        'розробка сайтів під ключ, розробка сайту під ключ, лендінг замовити, інтернет-магазин під ключ, веб-розробка Україна, TeleBots',
      openGraphTitle: 'Сайт під ключ від $150',
      openGraphDescription:
        'Лендінг, корпоративний сайт або магазин. Після короткого брифу кажемо бюджет і термін.',
    },
    design: {
      title: 'Дизайн логотипу та UI/UX у Figma',
      description:
        'Дизайн логотипу і макетів сайту в Figma: файли під верстку й друк, не картинка для сторіс. Два-три кола правок у межах завдання.',
      keywords:
        'дизайн логотипу, фірмовий стиль, UI UX дизайн, брендбук, макети Figma, айдентика, TeleBots',
      openGraphTitle: 'Логотип і макети в Figma',
      openGraphDescription:
        'Логотип, палітра, шрифти й екрани сайту. Далі їх можна віддати в розробку без здогадок.',
    },
    apps: {
      title: 'Розробка додатків для iOS і Android',
      description:
        'Розробка мобільних додатків під iOS і Android: MVP від кількох тижнів, оплата, пуші, кабінет і публікація в App Store та Google Play.',
      keywords:
        'розробка додатків, мобільний додаток iOS, додаток Android, React Native, Flutter, MVP додаток, TeleBots',
      openGraphTitle: 'Додатки для iOS і Android',
      openGraphDescription:
        'MVP, каталог, кабінет, оплата й пуші. Після брифу називаємо стек, строк і бюджет.',
    },
  },
  en: {
    chatbots: {
      title: 'Buy a chatbot: Telegram bot from $100',
      description:
        'Order a Telegram bot from $100. It takes leads, payments, and writes orders into your CRM. On a call we map the flow and give you a timeline.',
      keywords:
        'buy chatbot, order telegram bot, telegram bot development price, business chatbot, bot payments, TeleBots',
      openGraphTitle: 'Telegram bot from $100',
      openGraphDescription:
        'Leads, payments, and CRM inside Telegram. A simple flow can be ready in a day.',
    },
    websites: {
      title: 'Turnkey websites from $150',
      description:
        'Turnkey websites on Next.js: a landing from $150, an online store from $400. Admin, checkout, and pages that load properly on a phone.',
      keywords:
        'turnkey website development, landing page, online store development, Next.js website, TeleBots',
      openGraphTitle: 'Websites from $150',
      openGraphDescription:
        'Landing, company site, or store. After a short brief we name the budget and the date.',
    },
    design: {
      title: 'Logo design and UI/UX in Figma',
      description:
        'Logo, brand rules, and page layouts in Figma. Files a developer can build from, plus two or three revision rounds in the agreed scope.',
      keywords:
        'logo design, brand identity, UI UX design, brand book, Figma mockups, TeleBots',
      openGraphTitle: 'Logo and layouts in Figma',
      openGraphDescription:
        'Logo, colors, type, and screens. Ready to hand to development without guesswork.',
    },
    apps: {
      title: 'iOS and Android app development',
      description:
        'Mobile apps for iOS and Android: MVP in a few weeks, payments, push, account and App Store / Google Play publishing.',
      keywords:
        'mobile app development, iOS app, Android app, React Native, Flutter, MVP app, TeleBots',
      openGraphTitle: 'Apps for iOS and Android',
      openGraphDescription:
        'MVP, catalog, account, payments and push. After a brief we name stack, timeline and budget.',
    },
  },
  pl: {
    chatbots: {
      title: 'Kup chatbota: bot Telegram od $100',
      description:
        'Bot Telegram od $100 zbiera leady, przyjmuje płatność i zapisuje zamówienie w CRM. Na rozmowie rozpisujemy scenariusz i podajemy termin.',
      keywords:
        'kup chatbota, bot Telegram na zamówienie, cena bota Telegram, chatbot dla firmy, płatności w bocie, TeleBots',
      openGraphTitle: 'Bot Telegram od $100',
      openGraphDescription:
        'Leady, płatności i CRM w Telegramie. Prosty scenariusz da się złożyć w dobę.',
    },
    websites: {
      title: 'Strony pod klucz od $150',
      description:
        'Strony na Next.js pod klucz: landing od $150, sklep od $400. Panel, płatności i strony, które normalnie otwierają się w telefonie.',
      keywords:
        'strona pod klucz, landing na zamówienie, sklep internetowy, strona Next.js, TeleBots',
      openGraphTitle: 'Strona od $150',
      openGraphDescription:
        'Landing, strona firmowa albo sklep. Po krótkim briefie podajemy budżet i termin.',
    },
    design: {
      title: 'Projekt logo i UI/UX w Figma',
      description:
        'Logo, identyfikacja i makiety stron w Figma. Dostajesz pliki pod wdrożenie, nie obrazek do Instagrama. Dwie–trzy rundy poprawek w uzgodnionym zakresie.',
      keywords:
        'projekt logo, identyfikacja wizualna, UI UX, brand book, makiety Figma, TeleBots',
      openGraphTitle: 'Logo i makiety w Figma',
      openGraphDescription:
        'Logo, kolory, fonty i ekrany. Da się je oddać do developmentu bez domysłów.',
    },
    apps: {
      title: 'Tworzenie aplikacji na iOS i Android',
      description:
        'Aplikacje mobilne na iOS i Android: MVP w kilka tygodni, płatności, push, konto oraz publikacja w App Store i Google Play.',
      keywords:
        'aplikacja mobilna, aplikacja iOS, aplikacja Android, React Native, Flutter, MVP aplikacji, TeleBots',
      openGraphTitle: 'Aplikacje na iOS i Android',
      openGraphDescription:
        'MVP, katalog, konto, płatności i push. Po briefie podajemy stack, termin i budżet.',
    },
  },
  ru: {
    chatbots: {
      title: 'Чат-боты купить: Telegram от $100',
      description:
        'Чат-бот в Telegram от $100 собирает заявки, принимает оплату и кладёт заказ в CRM. На консультации разберём сценарий и назовём срок.',
      keywords:
        'чат боты купить, заказать телеграм бота, разработка чат ботов цена, telegram бот на заказ, бот с оплатой, TeleBots',
      openGraphTitle: 'Чат-бот в Telegram от $100',
      openGraphDescription:
        'Заявки, оплата и CRM в Telegram. Простой сценарий собираем за сутки.',
    },
    websites: {
      title: 'Разработка сайтов под ключ от $150',
      description:
        'Сайты под ключ на Next.js: лендинг от $150, интернет-магазин от $400. Админка, оплата и страницы, которые нормально открываются с телефона.',
      keywords:
        'разработка сайтов под ключ, лендинг заказать, интернет-магазин под ключ, веб-разработка, TeleBots',
      openGraphTitle: 'Сайт под ключ от $150',
      openGraphDescription:
        'Лендинг, корпоративный сайт или магазин. После короткого брифа называем бюджет и срок.',
    },
    design: {
      title: 'Дизайн логотипа и UI/UX в Figma',
      description:
        'Логотип, фирменный стиль и макеты сайта в Figma. Отдаём файлы под вёрстку и печать, не картинку для соцсетей. Два-три круга правок в рамках задачи.',
      keywords:
        'дизайн логотипа, фирменный стиль, UI UX, брендбук, макеты Figma, TeleBots',
      openGraphTitle: 'Логотип и макеты в Figma',
      openGraphDescription:
        'Логотип, палитра, шрифты и экраны сайта. Их можно отдать в разработку без догадок.',
    },
    apps: {
      title: 'Разработка приложений для iOS и Android',
      description:
        'Мобильные приложения под iOS и Android: MVP от нескольких недель, оплата, пуши, кабинет и публикация в App Store и Google Play.',
      keywords:
        'разработка приложений, мобильное приложение iOS, приложение Android, React Native, Flutter, MVP приложение, TeleBots',
      openGraphTitle: 'Приложения для iOS и Android',
      openGraphDescription:
        'MVP, каталог, кабинет, оплата и пуши. После брифа называем стек, срок и бюджет.',
    },
  },
};

export function getServicePageSeoMeta(serviceId: ServiceId, lang: Language): ServicePageSeoCopy {
  return SERVICE_PAGE_META[lang][serviceId];
}
