import type { Language } from '@/components/translations';
import type { ServiceOutcomesCopy } from '@/components/ServiceOutcomesSection';
import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';

const uk: Record<'websites' | 'chatbots' | 'design' | 'apps', ServiceOutcomesCopy> = {
  websites: {
    valueLead: [
      { text: 'Ми робимо не «сайт для галочки», а ' },
      { text: 'канал заявок і продажів', pink: true },
      { text: ' — швидкий, зрозумілий команді й прив’язаний до CRM та аналітики.' },
    ],
    problems: {
      eyebrow: 'До проєкту',
      title: 'Які проблеми',
      titleAccent: 'вирішуємо',
      items: [
        {
          title: 'Заявки губляться',
          body: 'Форми, Direct і менеджери в різних чатах — немає єдиної картини по лідах.',
          emphasis: 'єдиної картини',
        },
        {
          title: 'Реклама «зливає» бюджет',
          body: 'Посадкова повільна або не збирає конверсію — ви не бачите, що саме не працює.',
          emphasis: 'не збирає конверсію',
        },
        {
          title: 'Все вручну',
          body: 'Оплата, статуси замовлень і CRM не з’єднані — команда витрачає години на копіювання.',
          emphasis: 'не з’єднані',
        },
        {
          title: 'Конструктор упирається в стелю',
          body: 'Шаблони, плагіни й обмеження не дають масштабувати e-commerce або кастомну логіку.',
          emphasis: 'не дають масштабувати',
        },
      ],
    },
    benefits: {
      eyebrow: 'Після запуску',
      title: 'Яку користь',
      titleAccent: 'отримує клієнт',
      items: [
        {
          title: 'Передбачувані ліди',
          body: 'Заявки з форм і месенджерів потрапляють у CRM або таблицю — менеджер бачить джерело.',
          emphasis: 'потрапляють у CRM',
        },
        {
          title: 'Швидкість на мобільному',
          body: 'Next.js і адаптив — сторінки відкриваються швидко; це впливає на SEO і рекламу.',
          emphasis: 'впливає на SEO',
        },
        {
          title: 'Прозорі процеси',
          body: 'Адмінка, оплати та аналітика під ваш сценарій — без «зоопарку» зайвих сервісів.',
          emphasis: 'під ваш сценарій',
        },
        {
          title: 'Ріст без переробки',
          body: 'Архітектура дозволяє додавати каталог, мови та інтеграції без переїзду на новий сайт.',
          emphasis: 'без переїзду',
        },
      ],
    },
  },
  chatbots: {
    valueLead: [
      { text: 'Бот закриває рутину в месенджері, щоб ви ' },
      { text: 'не втрачали заявки вночі', pink: true },
      { text: ' і не дублювали відповіді менеджерами.' },
    ],
    problems: {
      eyebrow: 'До проєкту',
      title: 'Які проблеми',
      titleAccent: 'вирішуємо',
      items: [
        {
          title: 'Повільна перша відповідь',
          body: 'Клієнт пише в Telegram — менеджер зайнятий; заявка остигає або йде до конкурента.',
          emphasis: 'остигає',
        },
        {
          title: 'Одні й ті самі питання',
          body: 'Ціни, доставка, запис — команда відповідає вручну десятки разів на день.',
          emphasis: 'вручну',
        },
        {
          title: 'Оплата окремо від чату',
          body: 'Клієнт готовий купити, але лінк на оплату і підтвердження — через різні канали.',
          emphasis: 'різні канали',
        },
        {
          title: 'Немає єдиної бази',
          body: 'Діалоги в месенджері, замовлення в таблиці — складно рахувати конверсію.',
          emphasis: 'складно рахувати',
        },
      ],
    },
    benefits: {
      eyebrow: 'Після запуску',
      title: 'Яку користь',
      titleAccent: 'отримує клієнт',
      items: [
        {
          title: '24/7 перша лінія',
          body: 'Сценарій збирає контакт, оплату або запис — навіть коли офіс закритий.',
          emphasis: 'навіть коли офіс закритий',
        },
        {
          title: 'Менше навантаження на команду',
          body: 'Менеджери підключаються до складних кейсів, а не до FAQ.',
          emphasis: 'складних кейсів',
        },
        {
          title: 'Оплата в одному потоці',
          body: 'Mono, LiqPay, WayForPay у боті — клієнт не «стрибає» між сервісами.',
          emphasis: 'в одному потоці',
        },
        {
          title: 'Дані для маркетингу',
          body: 'CRM або Sheets фіксують джерело й етап воронки — видно, що масштабувати.',
          emphasis: 'що масштабувати',
        },
      ],
    },
  },
  design: {
    valueLead: [
      { text: 'Дизайн у нас — не «картинка», а ' },
      { text: 'мова бренду й шлях до заявки', pink: true },
      { text: ' на сайті чи в додатку, з передачею в розробку без втрат.' },
    ],
    problems: {
      eyebrow: 'До проєкту',
      title: 'Які проблеми',
      titleAccent: 'вирішуємо',
      items: [
        {
          title: 'Розрізнений бренд',
          body: 'Лого, соцмережі й сайт виглядають по-різному — клієнт не впізнає вас.',
          emphasis: 'не впізнає',
        },
        {
          title: 'Інтерфейс не веде до цілі',
          body: 'Користувач губиться в меню — заявки й покупки падають без очевидної причини.',
          emphasis: 'губиться',
        },
        {
          title: 'Макети «ламаються» в коді',
          body: 'Відступи, шрифти й стани кнопок губляться між Figma і версткою.',
          emphasis: 'губляться',
        },
        {
          title: 'Немає системи',
          body: 'Кожен новий екран малюють з нуля — повільно й дорого.',
          emphasis: 'з нуля',
        },
      ],
    },
    benefits: {
      eyebrow: 'Після запуску',
      title: 'Яку користь',
      titleAccent: 'отримує клієнт',
      items: [
        {
          title: 'Впізнаваність',
          body: 'Айдентика й UI працюють разом — бренд виглядає цілісно на всіх носіях.',
          emphasis: 'цілісно',
        },
        {
          title: 'Конверсія в структурі',
          body: 'Прототипи в Figma закладають шлях до заявки або покупки до старту коду.',
          emphasis: 'до старту коду',
        },
        {
          title: 'Швидша розробка',
          body: 'Компоненти й спеки для dev — менше правок «на око» після верстки.',
          emphasis: 'менше правок',
        },
        {
          title: 'Масштаб дизайну',
          body: 'Дизайн-система прискорює нові сторінки й фічі в одному стилі.',
          emphasis: 'в одному стилі',
        },
      ],
    },
  },
  apps: {
    valueLead: [
      { text: 'Робимо не «ще один екран», а ' },
      { text: 'мобільний продукт', pink: true },
      { text: ' під iOS і Android: від MVP до релізу в сторах.' },
    ],
    problems: {
      eyebrow: 'До проєкту',
      title: 'Які проблеми',
      titleAccent: 'вирішуємо',
      items: [
        {
          title: 'Немає каналу в телефоні',
          body: 'Клієнт шукає вас у App Store / Play — а там порожньо або чужий шаблон.',
          emphasis: 'порожньо',
        },
        {
          title: 'Сайт не замінює додаток',
          body: 'Пуші, офлайн і швидкий доступ до кабінету на сайті працюють гірше.',
          emphasis: 'гірше',
        },
        {
          title: 'Два підрядники — два коди',
          body: 'Окремі iOS і Android команди тягнуть бюджет і розʼїжджають логіку.',
          emphasis: 'розʼїжджають',
        },
        {
          title: 'Застрягли на MVP',
          body: 'Є прототип у Figma, але немає команди, яка доведе до сторів.',
          emphasis: 'до сторів',
        },
      ],
    },
    benefits: {
      eyebrow: 'Після запуску',
      title: 'Яку користь',
      titleAccent: 'отримує клієнт',
      items: [
        {
          title: 'Один продукт на двох платформах',
          body: 'React Native / Flutter або натив — спільна логіка й швидші ітерації.',
          emphasis: 'швидші ітерації',
        },
        {
          title: 'Пуші й утримання',
          body: 'Нагадування, статуси й акції приходять у телефон, а не губляться в пошті.',
          emphasis: 'у телефон',
        },
        {
          title: 'Оплата й кабінет',
          body: 'Замовлення й підписки всередині додатку — менше тертя до покупки.',
          emphasis: 'менше тертя',
        },
        {
          title: 'Реліз у сторах',
          body: 'Допомагаємо з акаунтами, збірками й модерацією App Store / Google Play.',
          emphasis: 'модерацією',
        },
      ],
    },
  },

};

const en: Record<'websites' | 'chatbots' | 'design' | 'apps', ServiceOutcomesCopy> = {
  websites: {
    valueLead: [
      { text: 'We build more than a brochure site — a ' },
      { text: 'lead and sales channel', pink: true },
      { text: ' that is fast, team-friendly, and tied to CRM and analytics.' },
    ],
    problems: {
      eyebrow: 'Before',
      title: 'Problems',
      titleAccent: 'we solve',
      items: [
        {
          title: 'Lost leads',
          body: 'Forms, DMs, and managers in different chats — no single view of inquiries.',
          emphasis: 'single view',
        },
        {
          title: 'Ad spend waste',
          body: 'Slow landing pages that do not convert — you cannot see what fails.',
          emphasis: 'do not convert',
        },
        {
          title: 'Manual workflows',
          body: 'Payments, order status, and CRM are disconnected — hours of copy-paste.',
          emphasis: 'disconnected',
        },
        {
          title: 'Builder limits',
          body: 'Templates and plugins block scaling e-commerce or custom logic.',
          emphasis: 'block scaling',
        },
      ],
    },
    benefits: {
      eyebrow: 'After launch',
      title: 'Value for',
      titleAccent: 'your business',
      items: [
        {
          title: 'Predictable leads',
          body: 'Inquiries land in CRM or Sheets — managers see the source.',
          emphasis: 'land in CRM',
        },
        {
          title: 'Mobile speed',
          body: 'Next.js and responsive layout — faster pages help SEO and ads.',
          emphasis: 'help SEO',
        },
        {
          title: 'Clear operations',
          body: 'Admin, payments, and analytics match your process — fewer tools.',
          emphasis: 'match your process',
        },
        {
          title: 'Room to grow',
          body: 'Architecture supports catalog, locales, and integrations without a rebuild.',
          emphasis: 'without a rebuild',
        },
      ],
    },
  },
  chatbots: {
    valueLead: [
      { text: 'A bot handles routine in chat so you ' },
      { text: 'do not lose leads at night', pink: true },
      { text: ' or repeat the same answers manually.' },
    ],
    problems: {
      eyebrow: 'Before',
      title: 'Problems',
      titleAccent: 'we solve',
      items: [
        {
          title: 'Slow first reply',
          body: 'User writes in Telegram — manager is busy; the lead goes cold.',
          emphasis: 'goes cold',
        },
        {
          title: 'Repeated FAQ',
          body: 'Price, delivery, booking — answered manually dozens of times a day.',
          emphasis: 'manually',
        },
        {
          title: 'Payment outside chat',
          body: 'Buyer is ready but payment link and confirmation live elsewhere.',
          emphasis: 'live elsewhere',
        },
        {
          title: 'No single database',
          body: 'Chats in messenger, orders in spreadsheets — hard to measure conversion.',
          emphasis: 'hard to measure',
        },
      ],
    },
    benefits: {
      eyebrow: 'After launch',
      title: 'Value for',
      titleAccent: 'your business',
      items: [
        {
          title: '24/7 first line',
          body: 'Flow collects contact, payment, or booking — even when the office is closed.',
          emphasis: 'office is closed',
        },
        {
          title: 'Less team load',
          body: 'Managers handle complex cases, not every FAQ.',
          emphasis: 'complex cases',
        },
        {
          title: 'One payment flow',
          body: 'Mono, LiqPay, WayForPay in the bot — no jumping between services.',
          emphasis: 'in the bot',
        },
        {
          title: 'Marketing data',
          body: 'CRM or Sheets track source and funnel stage — you see what to scale.',
          emphasis: 'what to scale',
        },
      ],
    },
  },
  design: {
    valueLead: [
      { text: 'Design here is not decoration — it is ' },
      { text: 'brand language and path to conversion', pink: true },
      { text: ', handed off to development without loss.' },
    ],
    problems: {
      eyebrow: 'Before',
      title: 'Problems',
      titleAccent: 'we solve',
      items: [
        {
          title: 'Inconsistent brand',
          body: 'Logo, social, and site look different — customers do not recognize you.',
          emphasis: 'do not recognize',
        },
        {
          title: 'UI without goal',
          body: 'Users get lost — leads and sales drop without an obvious reason.',
          emphasis: 'get lost',
        },
        {
          title: 'Broken handoff',
          body: 'Spacing, type, and button states lost between Figma and code.',
          emphasis: 'lost between',
        },
        {
          title: 'No system',
          body: 'Every new screen from scratch — slow and expensive.',
          emphasis: 'from scratch',
        },
      ],
    },
    benefits: {
      eyebrow: 'After launch',
      title: 'Value for',
      titleAccent: 'your business',
      items: [
        {
          title: 'Recognition',
          body: 'Identity and UI work together — consistent across touchpoints.',
          emphasis: 'consistent',
        },
        {
          title: 'Conversion by structure',
          body: 'Figma prototypes define the path to lead or purchase before coding.',
          emphasis: 'before coding',
        },
        {
          title: 'Faster build',
          body: 'Components and dev specs — fewer “eyeball” fixes after launch.',
          emphasis: 'fewer',
        },
        {
          title: 'Scalable design',
          body: 'Design system speeds new pages and features in one style.',
          emphasis: 'one style',
        },
      ],
    },
  },
  apps: {
    valueLead: [
      { text: 'We build more than another screen — a ' },
      { text: 'mobile product', pink: true },
      { text: ' for iOS and Android: from MVP to store release.' },
    ],
    problems: {
      eyebrow: 'Before',
      title: 'Problems',
      titleAccent: 'we solve',
      items: [
        {
          title: 'No presence on the phone',
          body: 'Customers look for you in App Store / Play — and find nothing or a generic template.',
          emphasis: 'nothing',
        },
        {
          title: 'A website is not an app',
          body: 'Push, offline and quick account access work worse on the web alone.',
          emphasis: 'worse',
        },
        {
          title: 'Two vendors, two codebases',
          body: 'Separate iOS and Android teams inflate budget and drift apart on logic.',
          emphasis: 'drift apart',
        },
        {
          title: 'Stuck at MVP',
          body: 'You have Figma prototypes but no team to ship to the stores.',
          emphasis: 'to the stores',
        },
      ],
    },
    benefits: {
      eyebrow: 'After launch',
      title: 'What the client',
      titleAccent: 'gets',
      items: [
        {
          title: 'One product, two platforms',
          body: 'React Native / Flutter or native — shared logic and faster iterations.',
          emphasis: 'faster iterations',
        },
        {
          title: 'Push and retention',
          body: 'Reminders, statuses and offers land on the phone, not lost in email.',
          emphasis: 'on the phone',
        },
        {
          title: 'Payments and account',
          body: 'Orders and subscriptions inside the app — less friction to buy.',
          emphasis: 'less friction',
        },
        {
          title: 'Store release',
          body: 'We help with accounts, builds and App Store / Google Play review.',
          emphasis: 'review',
        },
      ],
    },
  },

};

const pl: Record<'websites' | 'chatbots' | 'design' | 'apps', ServiceOutcomesCopy> = {
  websites: {
    valueLead: [
      { text: 'Tworzymy nie stronę „dla show”, lecz ' },
      { text: 'kanał leadów i sprzedaży', pink: true },
      { text: ' — szybki, zrozumiały dla zespołu i spięty z CRM oraz analityką.' },
    ],
    problems: {
      eyebrow: 'Przed startem',
      title: 'Jakie problemy',
      titleAccent: 'rozwiązujemy',
      items: [
        {
          title: 'Gubione leady',
          body: 'Formularze, DM i menedżerowie w różnych czatach — brak jednego obrazu.',
          emphasis: 'jednego obrazu',
        },
        {
          title: 'Przepalany budżet ads',
          body: 'Wolny landing bez konwersji — nie widać, co nie działa.',
          emphasis: 'bez konwersji',
        },
        {
          title: 'Ręczna praca',
          body: 'Płatności, statusy i CRM rozłączone — godziny kopiowania.',
          emphasis: 'rozłączone',
        },
        {
          title: 'Limit konstruktora',
          body: 'Szablony blokują skalowanie sklepu lub logiki na zamówienie.',
          emphasis: 'blokują skalowanie',
        },
      ],
    },
    benefits: {
      eyebrow: 'Po wdrożeniu',
      title: 'Korzyść dla',
      titleAccent: 'klienta',
      items: [
        {
          title: 'Przewidywalne leady',
          body: 'Zgłoszenia trafiają do CRM lub Sheets — widać źródło.',
          emphasis: 'trafiają do CRM',
        },
        {
          title: 'Szybkość mobile',
          body: 'Next.js i RWD — szybsze strony wspierają SEO i reklamy.',
          emphasis: 'wspierają SEO',
        },
        {
          title: 'Jasne procesy',
          body: 'Admin, płatności i analityka pod Twój scenariusz.',
          emphasis: 'pod Twój scenariusz',
        },
        {
          title: 'Rośniesz bez przebudowy',
          body: 'Architektura pozwala dokładać katalog i integracje bez migracji.',
          emphasis: 'bez migracji',
        },
      ],
    },
  },
  chatbots: {
    valueLead: [
      { text: 'Bot przejmuje rutynę w czacie, żebyś ' },
      { text: 'nie tracił leadów w nocy', pink: true },
      { text: ' i nie powtarzał tych samych odpowiedzi.' },
    ],
    problems: {
      eyebrow: 'Przed startem',
      title: 'Jakie problemy',
      titleAccent: 'rozwiązujemy',
      items: [
        {
          title: 'Wolna pierwsza odpowiedź',
          body: 'Klient pisze na Telegram — menedżer zajęty; lead stygnie.',
          emphasis: 'stygnie',
        },
        {
          title: 'Te same pytania',
          body: 'Cena, dostawa, rezerwacja — ręcznie dziesiątki razy dziennie.',
          emphasis: 'ręcznie',
        },
        {
          title: 'Płatność poza czatem',
          body: 'Klient gotowy, ale link i potwierdzenie w innych kanałach.',
          emphasis: 'innych kanałach',
        },
        {
          title: 'Brak bazy',
          body: 'Czaty w messengerze, zamówienia w arkuszu — trudno mierzyć konwersję.',
          emphasis: 'trudno mierzyć',
        },
      ],
    },
    benefits: {
      eyebrow: 'Po wdrożeniu',
      title: 'Korzyść dla',
      titleAccent: 'klienta',
      items: [
        {
          title: 'Pierwsza linia 24/7',
          body: 'Scenariusz zbiera kontakt lub płatność — także po godzinach.',
          emphasis: 'po godzinach',
        },
        {
          title: 'Mniej obciążenia zespołu',
          body: 'Menedżerzy biorą trudne sprawy, nie każde FAQ.',
          emphasis: 'trudne sprawy',
        },
        {
          title: 'Jeden flow płatności',
          body: 'Mono, LiqPay, WayForPay w bocie — bez skakania między serwisami.',
          emphasis: 'w bocie',
        },
        {
          title: 'Dane marketingowe',
          body: 'CRM lub Sheets pokazują, co skalować w lejku.',
          emphasis: 'co skalować',
        },
      ],
    },
  },
  design: {
    valueLead: [
      { text: 'Design to u nas nie „ładny obrazek”, lecz ' },
      { text: 'język marki i ścieżka do konwersji', pink: true },
      { text: ' — z przekazaniem do developmentu.' },
    ],
    problems: {
      eyebrow: 'Przed startem',
      title: 'Jakie problemy',
      titleAccent: 'rozwiązujemy',
      items: [
        {
          title: 'Rozjechany branding',
          body: 'Logo, social i strona wyglądają inaczej — brak rozpoznawalności.',
          emphasis: 'brak rozpoznawalności',
        },
        {
          title: 'UI bez celu',
          body: 'Użytkownik gubi się — spada liczba zgłoszeń i sprzedaży.',
          emphasis: 'gubi się',
        },
        {
          title: 'Utrata w kodzie',
          body: 'Odstępy i stany przycisków giną między Figmą a wdrożeniem.',
          emphasis: 'giną',
        },
        {
          title: 'Brak systemu',
          body: 'Każdy ekran od zera — wolno i drogo.',
          emphasis: 'od zera',
        },
      ],
    },
    benefits: {
      eyebrow: 'Po wdrożeniu',
      title: 'Korzyść dla',
      titleAccent: 'klienta',
      items: [
        {
          title: 'Spójność marki',
          body: 'Identyfikacja i UI w jednym stylu na wszystkich kanałach.',
          emphasis: 'w jednym stylu',
        },
        {
          title: 'Konwersja w strukturze',
          body: 'Prototypy w Figmie przed kodem — jasna ścieżka do celu.',
          emphasis: 'przed kodem',
        },
        {
          title: 'Szybszy dev',
          body: 'Komponenty i specyfikacja — mniej poprawek po wdrożeniu.',
          emphasis: 'mniej poprawek',
        },
        {
          title: 'Skalowalny design',
          body: 'Design system przyspiesza kolejne ekrany.',
          emphasis: 'przyspiesza',
        },
      ],
    },
  },
  apps: {
    valueLead: [
      { text: 'Budujemy nie „kolejny ekran”, lecz ' },
      { text: 'produkt mobilny', pink: true },
      { text: ' na iOS i Android: od MVP do releasu w store’ach.' },
    ],
    problems: {
      eyebrow: 'Przed projektem',
      title: 'Jakie problemy',
      titleAccent: 'rozwiązujemy',
      items: [
        {
          title: 'Brak kanału w telefonie',
          body: 'Klient szuka Cię w App Store / Play — a tam pusto albo obcy szablon.',
          emphasis: 'pusto',
        },
        {
          title: 'Strona nie zastąpi aplikacji',
          body: 'Push, offline i szybki dostęp do konta na stronie działają gorzej.',
          emphasis: 'gorzej',
        },
        {
          title: 'Dwa zespoły — dwa kody',
          body: 'Osobne iOS i Android ciągną budżet i rozjeżdżają logikę.',
          emphasis: 'rozjeżdżają',
        },
        {
          title: 'Utknięcie na MVP',
          body: 'Jest prototyp w Figma, ale brak zespołu, który dowiezie do store’ów.',
          emphasis: 'do store’ów',
        },
      ],
    },
    benefits: {
      eyebrow: 'Po starcie',
      title: 'Jaką korzyść',
      titleAccent: 'dostaje klient',
      items: [
        {
          title: 'Jeden produkt na dwóch platformach',
          body: 'React Native / Flutter lub native — wspólna logika i szybsze iteracje.',
          emphasis: 'szybsze iteracje',
        },
        {
          title: 'Push i retencja',
          body: 'Przypomnienia, statusy i oferty trafiają do telefonu, nie giną w mailu.',
          emphasis: 'do telefonu',
        },
        {
          title: 'Płatności i konto',
          body: 'Zamówienia i subskrypcje w aplikacji — mniej tarcia do zakupu.',
          emphasis: 'mniej tarcia',
        },
        {
          title: 'Releas w store’ach',
          body: 'Pomagamy z kontami, buildami i moderacją App Store / Google Play.',
          emphasis: 'moderacją',
        },
      ],
    },
  },

};

const ru: Record<'websites' | 'chatbots' | 'design' | 'apps', ServiceOutcomesCopy> = {
  websites: {
    valueLead: [
      { text: 'Мы делаем не «сайт для галочки», а ' },
      { text: 'канал заявок и продаж', pink: true },
      { text: ' — быстрый, понятный команде и связанный с CRM и аналитикой.' },
    ],
    problems: {
      eyebrow: 'До проекта',
      title: 'Какие проблемы',
      titleAccent: 'решаем',
      items: [
        {
          title: 'Теряются заявки',
          body: 'Формы, Direct и менеджеры в разных чатах — нет единой картины лидов.',
          emphasis: 'единой картины',
        },
        {
          title: 'Реклама без отдачи',
          body: 'Медленный лендинг не конвертирует — не видно, что ломается.',
          emphasis: 'не конвертирует',
        },
        {
          title: 'Ручная работа',
          body: 'Оплата, статусы и CRM не связаны — часы копирования.',
          emphasis: 'не связаны',
        },
        {
          title: 'Потолок конструктора',
          body: 'Шаблоны мешают масштабировать магазин или кастомную логику.',
          emphasis: 'мешают масштабировать',
        },
      ],
    },
    benefits: {
      eyebrow: 'После запуска',
      title: 'Какую пользу',
      titleAccent: 'получает клиент',
      items: [
        {
          title: 'Предсказуемые лиды',
          body: 'Заявки попадают в CRM или таблицу — видно источник.',
          emphasis: 'попадают в CRM',
        },
        {
          title: 'Скорость на мобильном',
          body: 'Next.js и адаптив — быстрые страницы помогают SEO и рекламе.',
          emphasis: 'помогают SEO',
        },
        {
          title: 'Прозрачные процессы',
          body: 'Админка, оплаты и аналитика под ваш сценарий.',
          emphasis: 'под ваш сценарий',
        },
        {
          title: 'Рост без пересборки',
          body: 'Архитектура позволяет добавлять каталог и интеграции без миграции.',
          emphasis: 'без миграции',
        },
      ],
    },
  },
  chatbots: {
    valueLead: [
      { text: 'Бот закрывает рутину в мессенджере, чтобы вы ' },
      { text: 'не теряли заявки ночью', pink: true },
      { text: ' и не дублировали ответы менеджерами.' },
    ],
    problems: {
      eyebrow: 'До проекта',
      title: 'Какие проблемы',
      titleAccent: 'решаем',
      items: [
        {
          title: 'Медленный первый ответ',
          body: 'Клиент пишет в Telegram — менеджер занят; заявка «остывает».',
          emphasis: 'остывает',
        },
        {
          title: 'Одинаковые вопросы',
          body: 'Цена, доставка, запись — вручную десятки раз в день.',
          emphasis: 'вручную',
        },
        {
          title: 'Оплата вне чата',
          body: 'Клиент готов купить, но ссылка и подтверждение в разных каналах.',
          emphasis: 'разных каналах',
        },
        {
          title: 'Нет единой базы',
          body: 'Диалоги в мессенджере, заказы в таблице — сложно считать конверсию.',
          emphasis: 'сложно считать',
        },
      ],
    },
    benefits: {
      eyebrow: 'После запуска',
      title: 'Какую пользу',
      titleAccent: 'получает клиент',
      items: [
        {
          title: 'Первая линия 24/7',
          body: 'Сценарий собирает контакт или оплату — даже когда офис закрыт.',
          emphasis: 'офис закрыт',
        },
        {
          title: 'Меньше нагрузки на команду',
          body: 'Менеджеры подключаются к сложным кейсам, а не к FAQ.',
          emphasis: 'сложным кейсам',
        },
        {
          title: 'Оплата в одном потоке',
          body: 'Mono, LiqPay, WayForPay в боте — без прыжков между сервисами.',
          emphasis: 'в одном потоке',
        },
        {
          title: 'Данные для маркетинга',
          body: 'CRM или Sheets фиксируют этап воронки — видно, что масштабировать.',
          emphasis: 'что масштабировать',
        },
      ],
    },
  },
  design: {
    valueLead: [
      { text: 'Дизайн у нас — не «картинка», а ' },
      { text: 'язык бренда и путь к заявке', pink: true },
      { text: ' с передачей в разработку без потерь.' },
    ],
    problems: {
      eyebrow: 'До проекта',
      title: 'Какие проблемы',
      titleAccent: 'решаем',
      items: [
        {
          title: 'Разрозненный бренд',
          body: 'Лого, соцсети и сайт выглядят по-разному — клиент не узнаёт вас.',
          emphasis: 'не узнаёт',
        },
        {
          title: 'Интерфейс без цели',
          body: 'Пользователь теряется — падают заявки и продажи.',
          emphasis: 'теряется',
        },
        {
          title: 'Макеты ломаются в коде',
          body: 'Отступы и состояния кнопок теряются между Figma и вёрсткой.',
          emphasis: 'теряются',
        },
        {
          title: 'Нет системы',
          body: 'Каждый экран с нуля — медленно и дорого.',
          emphasis: 'с нуля',
        },
      ],
    },
    benefits: {
      eyebrow: 'После запуска',
      title: 'Какую пользу',
      titleAccent: 'получает клиент',
      items: [
        {
          title: 'Узнаваемость',
          body: 'Айдентика и UI работают вместе — цельный образ на всех носителях.',
          emphasis: 'цельный образ',
        },
        {
          title: 'Конверсия в структуре',
          body: 'Прототипы в Figma до кода — понятный путь к заявке или покупке.',
          emphasis: 'до кода',
        },
        {
          title: 'Быстрее разработка',
          body: 'Компоненты и спеки для dev — меньше правок «на глаз».',
          emphasis: 'меньше правок',
        },
        {
          title: 'Масштаб дизайна',
          body: 'Дизайн-система ускоряет новые экраны в одном стиле.',
          emphasis: 'одном стиле',
        },
      ],
    },
  },
  apps: {
    valueLead: [
      { text: 'Делаем не «ещё один экран», а ' },
      { text: 'мобильный продукт', pink: true },
      { text: ' под iOS и Android: от MVP до релиза в сторах.' },
    ],
    problems: {
      eyebrow: 'До проекта',
      title: 'Какие проблемы',
      titleAccent: 'решаем',
      items: [
        {
          title: 'Нет канала в телефоне',
          body: 'Клиент ищет вас в App Store / Play — а там пусто или чужой шаблон.',
          emphasis: 'пусто',
        },
        {
          title: 'Сайт не заменяет приложение',
          body: 'Пуши, офлайн и быстрый доступ к кабинету на сайте работают хуже.',
          emphasis: 'хуже',
        },
        {
          title: 'Два подрядчика — два кода',
          body: 'Отдельные iOS и Android команды тянут бюджет и разъезжают логику.',
          emphasis: 'разъезжают',
        },
        {
          title: 'Застряли на MVP',
          body: 'Есть прототип в Figma, но нет команды, которая доведёт до сторов.',
          emphasis: 'до сторов',
        },
      ],
    },
    benefits: {
      eyebrow: 'После запуска',
      title: 'Какую пользу',
      titleAccent: 'получает клиент',
      items: [
        {
          title: 'Один продукт на двух платформах',
          body: 'React Native / Flutter или натив — общая логика и быстрые итерации.',
          emphasis: 'быстрые итерации',
        },
        {
          title: 'Пуши и удержание',
          body: 'Напоминания, статусы и акции приходят в телефон, а не теряются в почте.',
          emphasis: 'в телефон',
        },
        {
          title: 'Оплата и кабинет',
          body: 'Заказы и подписки внутри приложения — меньше трения до покупки.',
          emphasis: 'меньше трения',
        },
        {
          title: 'Релиз в сторах',
          body: 'Помогаем с аккаунтами, сборками и модерацией App Store / Google Play.',
          emphasis: 'модерацией',
        },
      ],
    },
  },

};

const byLang: Record<Language, Record<'websites' | 'chatbots' | 'design' | 'apps', ServiceOutcomesCopy>> = {
  uk,
  en,
  pl,
  ru,
};

export function getServiceOutcomesCopy(
  lang: Language,
  serviceId: ServiceId
): ServiceOutcomesCopy | null {
  if (serviceId !== 'websites' && serviceId !== 'chatbots' && serviceId !== 'design' && serviceId !== 'apps') {
    return null;
  }
  return byLang[lang]?.[serviceId] ?? byLang.uk[serviceId] ?? null;
}
