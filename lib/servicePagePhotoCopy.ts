import type { Language } from '@/components/translations';
import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';

type PhotoStripCopy = {
  title: string;
  lead: string;
  alts: [string, string, string];
  featureAlt: string;
  wideAlt: string;
};

const COPY: Record<Language, Record<ServiceId, PhotoStripCopy>> = {
  uk: {
    websites: {
      title: 'Як виглядає робота над сайтом',
      lead: 'Макет, верстка й живі екрани — від першого ескізу до сторінки, яку клієнт відкриває з телефону.',
      alts: [
        'Інтерфейс і структура сайту для бізнесу',
        'Робоче місце під час розробки сайту',
        'Мобільна версія сайту TeleBots',
      ],
      featureAlt: 'Ноутбук із макетом сайту на робочому столі',
      wideAlt: 'Процес розробки веб-проєкту TeleBots',
    },
    chatbots: {
      title: 'Як виглядає робота над ботом',
      lead: 'Сценарії в месенджері, оплата й CRM — те, що клієнт бачить у чаті, а ви в замовленнях.',
      alts: [
        'Telegram-бот і сценарії для бізнесу',
        'Мобільний інтерфейс чат-бота',
        'Демонстрація бота на телефоні',
      ],
      featureAlt: 'Ноутбук і телефон під час розробки чат-бота',
      wideAlt: 'Розробка Telegram-бота TeleBots',
    },
    design: {
      title: 'Як виглядає робота над дизайном',
      lead: 'Логотип, палітра й екрани в Figma — файли, з яких можна верстати, а не лише показувати в презентації.',
      alts: [
        'Дизайн інтерфейсу та айдентики',
        'Робочий процес UI/UX у Figma',
        'Візуальні матеріали бренду',
      ],
      featureAlt: 'Робочий стіл дизайнера з макетами',
      wideAlt: 'Дизайн-процес TeleBots',
    },
  },
  en: {
    websites: {
      title: 'What the build looks like',
      lead: 'From structure and layout to screens clients open on a phone — not a deck of mockups that never ship.',
      alts: [
        'Business website interface and structure',
        'Workspace during website development',
        'Mobile website screens from TeleBots',
      ],
      featureAlt: 'Laptop with a website layout on a desk',
      wideAlt: 'TeleBots website development process',
    },
    chatbots: {
      title: 'What the bot build looks like',
      lead: 'Messenger flows, payments and CRM — what the client sees in chat and what your team sees in orders.',
      alts: [
        'Telegram bot and business scenarios',
        'Mobile chatbot interface',
        'Bot demo on a phone',
      ],
      featureAlt: 'Laptop and phone during chatbot development',
      wideAlt: 'TeleBots Telegram bot development',
    },
    design: {
      title: 'What the design work looks like',
      lead: 'Logo, palette and screens in Figma — files a developer can build from, not only slides.',
      alts: [
        'Interface and brand identity design',
        'UI/UX work in Figma',
        'Brand visual materials',
      ],
      featureAlt: 'Designer desk with interface mockups',
      wideAlt: 'TeleBots design process',
    },
  },
  pl: {
    websites: {
      title: 'Jak wygląda praca nad stroną',
      lead: 'Od struktury i layoutu po ekrany, które klient otwiera w telefonie — nie prezentacja makiet „na później”.',
      alts: [
        'Interfejs i struktura strony dla biznesu',
        'Stanowisko podczas tworzenia strony',
        'Mobilna wersja strony TeleBots',
      ],
      featureAlt: 'Laptop z makietą strony na biurku',
      wideAlt: 'Proces tworzenia strony TeleBots',
    },
    chatbots: {
      title: 'Jak wygląda praca nad botem',
      lead: 'Scenariusze w komunikatorze, płatności i CRM — to, co klient widzi na czacie, a Ty w zamówieniach.',
      alts: [
        'Bot Telegram i scenariusze biznesowe',
        'Mobilny interfejs chatbota',
        'Demo bota na telefonie',
      ],
      featureAlt: 'Laptop i telefon podczas tworzenia chatbota',
      wideAlt: 'Tworzenie bota Telegram TeleBots',
    },
    design: {
      title: 'Jak wygląda praca nad designem',
      lead: 'Logo, paleta i ekrany w Figma — pliki pod wdrożenie, nie tylko slajdy.',
      alts: [
        'Projekt interfejsu i identyfikacji',
        'Praca UI/UX w Figma',
        'Materiały wizualne marki',
      ],
      featureAlt: 'Biurko projektanta z makietami',
      wideAlt: 'Proces designu TeleBots',
    },
  },
  ru: {
    websites: {
      title: 'Как выглядит работа над сайтом',
      lead: 'От структуры и вёрстки до экранов, которые клиент открывает с телефона — не презентация макетов «на потом».',
      alts: [
        'Интерфейс и структура сайта для бизнеса',
        'Рабочее место во время разработки сайта',
        'Мобильная версия сайта TeleBots',
      ],
      featureAlt: 'Ноутбук с макетом сайта на рабочем столе',
      wideAlt: 'Процесс разработки сайта TeleBots',
    },
    chatbots: {
      title: 'Как выглядит работа над ботом',
      lead: 'Сценарии в мессенджере, оплата и CRM — то, что клиент видит в чате, а вы в заказах.',
      alts: [
        'Telegram-бот и сценарии для бизнеса',
        'Мобильный интерфейс чат-бота',
        'Демо бота на телефоне',
      ],
      featureAlt: 'Ноутбук и телефон во время разработки чат-бота',
      wideAlt: 'Разработка Telegram-бота TeleBots',
    },
    design: {
      title: 'Как выглядит работа над дизайном',
      lead: 'Логотип, палитра и экраны в Figma — файлы под вёрстку, а не только слайды.',
      alts: [
        'Дизайн интерфейса и айдентики',
        'UI/UX-работа в Figma',
        'Визуальные материалы бренда',
      ],
      featureAlt: 'Рабочий стол дизайнера с макетами',
      wideAlt: 'Дизайн-процесс TeleBots',
    },
  },
};

export function getServicePagePhotoCopy(lang: Language, serviceId: ServiceId): PhotoStripCopy {
  return COPY[lang][serviceId];
}
