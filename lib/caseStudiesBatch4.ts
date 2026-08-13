import type { Language } from '@/components/translations';
import type { CaseStudyCopy, CaseStudyDefinition } from '@/lib/caseStudies';

const RELATED: Record<Language, Pick<CaseStudyCopy, 'relatedTitle' | 'relatedCta'>> = {
  uk: { relatedTitle: 'Інші кейси', relatedCta: 'Усі кейси' },
  en: { relatedTitle: 'Other cases', relatedCta: 'All cases' },
  pl: { relatedTitle: 'Inne case’y', relatedCta: 'Wszystkie case’y' },
  ru: { relatedTitle: 'Другие кейсы', relatedCta: 'Все кейсы' },
};

type LangBody = Omit<CaseStudyCopy, 'relatedTitle' | 'relatedCta'>;

function withRelated(copy: Record<Language, LangBody>): Record<Language, CaseStudyCopy> {
  return {
    uk: { ...copy.uk, ...RELATED.uk },
    en: { ...copy.en, ...RELATED.en },
    pl: { ...copy.pl, ...RELATED.pl },
    ru: { ...copy.ru, ...RELATED.ru },
  };
}

const carbit: CaseStudyDefinition = {
  id: 'carbit',
  liveUrl: 'https://carbit.info/',
  mainImage: '/portfolio/portfolio-carbit.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Carbit',
      heroTitle: 'Carbit — SaaS-моніторинг автооголошень AUTO.RIA та OLX',
      heroLead:
        'Вебсервіс для моніторингу автомобільних оголошень, який об’єднує AUTO.RIA, OLX та Telegram в одному пошуку. Швидкий старт, зручні фільтри, зрозумілі тарифи й миттєві сповіщення про нові лоти.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '3', label: 'джерела: AUTO.RIA, OLX, Telegram' },
        { value: '↑', label: 'моніторинг за кілька кліків' },
        { value: '1', label: 'SaaS із тарифами' },
        { value: '↑', label: 'миттєві сповіщення' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Підбірникам і перекупникам потрібен був один інструмент замість ручного моніторингу кількох майданчиків — із швидким запуском і чіткою цінністю підписки.',
        items: [
          'Пошук мав охоплювати AUTO.RIA, OLX і Telegram разом',
          'Фільтри мали налаштовуватись швидко й зрозуміло',
          'Моніторинг — запуск за кілька кліків',
          'Сповіщення про нові оголошення мали приходити миттєво',
          'Тарифи мали презентуватись прозоро',
          'Перший екран мав одразу показувати цінність SaaS',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали сучасний SaaS під моніторинг авторинку: єдиний пошук, фільтри, тарифи й конверсія в платну підписку.',
        items: [
          'Єдиний пошук по AUTO.RIA, OLX і Telegram',
          'Зручне налаштування фільтрів моніторингу',
          'Швидкий сценарій запуску моніторингу',
          'Миттєві сповіщення про нові оголошення',
          'Зрозуміла презентація тарифів',
          'Інтерфейс і структура під конверсію у платних користувачів',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Carbit отримав SaaS-продукт, який показує цінність з першого екрана, спрощує пошук авто для підбірників і перекупників та ефективно конвертує відвідувачів у платну підписку.',
      },
    },
    en: {
      breadcrumbLabel: 'Carbit',
      heroTitle: 'Carbit — SaaS monitoring for AUTO.RIA and OLX listings',
      heroLead:
        'A web service that monitors car listings across AUTO.RIA, OLX and Telegram in one search. Fast setup, clear filters, transparent pricing and instant alerts on new ads.',
      visitSite: 'Visit site',
      stats: [
        { value: '3', label: 'sources: AUTO.RIA, OLX, Telegram' },
        { value: '↑', label: 'monitoring in a few clicks' },
        { value: '1', label: 'SaaS with pricing plans' },
        { value: '↑', label: 'instant alerts' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'Sourcers and resellers needed one tool instead of manually watching several marketplaces — with a fast start and a clear subscription value.',
        items: [
          'Search had to cover AUTO.RIA, OLX and Telegram together',
          'Filters had to be quick and clear',
          'Monitoring had to start in a few clicks',
          'New-listing alerts had to arrive instantly',
          'Pricing had to be transparent',
          'The first screen had to prove SaaS value immediately',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built a modern car-market monitoring SaaS: unified search, filters, pricing and conversion into paid plans.',
        items: [
          'Unified search across AUTO.RIA, OLX and Telegram',
          'Convenient monitoring filter setup',
          'Fast monitoring launch flow',
          'Instant alerts for new listings',
          'Clear pricing presentation',
          'UI and structure tuned for paid conversion',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'Carbit got a SaaS product that shows value from the first screen, simplifies car search for sourcers and resellers, and converts visitors into paid subscribers.',
      },
    },
    pl: {
      breadcrumbLabel: 'Carbit',
      heroTitle: 'Carbit — SaaS monitoringu ogłoszeń AUTO.RIA, OLX i Telegram',
      heroLead:
        'Webserwis monitorujący ogłoszenia aut: AUTO.RIA, OLX i Telegram w jednym wyszukiwaniu. Szybki start, filtry, taryfy i natychmiastowe alerty.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '3', label: 'źródła: AUTO.RIA, OLX, Telegram' },
        { value: '↑', label: 'monitoring w kilka kliknięć' },
        { value: '1', label: 'SaaS z taryfami' },
        { value: '↑', label: 'natychmiastowe alerty' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Pośrednikom i odsprzedawcom potrzebne było jedno narzędzie zamiast ręcznego monitoringu wielu platform.',
        items: [
          'Wyszukiwanie AUTO.RIA, OLX i Telegram razem',
          'Szybkie, jasne filtry',
          'Start monitoringu w kilka kliknięć',
          'Natychmiastowe alerty o nowych ogłoszeniach',
          'Przejrzyste taryfy',
          'Pierwszy ekran pokazuje wartość SaaS',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Nowoczesny SaaS monitoringu rynku aut: jedno wyszukiwanie, filtry, taryfy i konwersja w subskrypcję.',
        items: [
          'Jedno wyszukiwanie po AUTO.RIA, OLX i Telegram',
          'Wygodne ustawianie filtrów',
          'Szybki start monitoringu',
          'Natychmiastowe powiadomienia',
          'Jasna prezentacja taryf',
          'UI pod konwersję w płatnych użytkowników',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Carbit dostał produkt SaaS, który pokazuje wartość od pierwszego ekranu, upraszcza poszukiwanie aut i konwertuje odwiedzających w płatną subskrypcję.',
      },
    },
    ru: {
      breadcrumbLabel: 'Carbit',
      heroTitle: 'Carbit — SaaS-мониторинг автообъявлений AUTO.RIA и OLX',
      heroLead:
        'Веб-сервис мониторинга автомобильных объявлений: AUTO.RIA, OLX и Telegram в одном поиске. Быстрый старт, фильтры, тарифы и мгновенные уведомления.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '3', label: 'источники: AUTO.RIA, OLX, Telegram' },
        { value: '↑', label: 'мониторинг за несколько кликов' },
        { value: '1', label: 'SaaS с тарифами' },
        { value: '↑', label: 'мгновенные уведомления' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Подборщикам и перекупам нужен был один инструмент вместо ручного мониторинга нескольких площадок.',
        items: [
          'Поиск по AUTO.RIA, OLX и Telegram вместе',
          'Быстрые понятные фильтры',
          'Запуск мониторинга за несколько кликов',
          'Мгновенные уведомления о новых объявлениях',
          'Прозрачные тарифы',
          'Первый экран сразу показывает ценность SaaS',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'Современный SaaS мониторинга авторынка: единый поиск, фильтры, тарифы и конверсия в подписку.',
        items: [
          'Единый поиск по AUTO.RIA, OLX и Telegram',
          'Удобная настройка фильтров',
          'Быстрый сценарий запуска',
          'Мгновенные уведомления',
          'Понятная презентация тарифов',
          'Интерфейс под конверсию в платных пользователей',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Carbit получил SaaS-продукт, который показывает ценность с первого экрана, упрощает поиск авто и конвертирует посетителей в платную подписку.',
      },
    },
  }),
};

const thirteenPm: CaseStudyDefinition = {
  id: '13pm',
  liveUrl: 'https://13pm.com.ua/',
  mainImage: '/portfolio/portfolio-13pm.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: '13PM Tactic',
      heroTitle: '13PM Tactic — e-commerce бренду тактичного одягу',
      heroLead:
        'Інтернет-магазин українського бренду тактичного одягу: швидкий вибір товарів, зручний каталог, презентація лінійок і просте оформлення замовлення з будь-якого пристрою.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '↑', label: 'каталог і лінійки продукції' },
        { value: '1', label: 'просте оформлення замовлення' },
        { value: '↑', label: 'акції та популярні товари' },
        { value: '1', label: 'адаптив під усі пристрої' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Бренду тактичного одягу потрібен був магазин, який швидко веде від каталогу до покупки й підсилює довіру до власного виробництва.',
        items: [
          'Каталог мав допомагати швидко знайти товар',
          'Лінійки продукції мали презентуватись зрозуміло',
          'Оформлення замовлення — просте з будь-якого пристрою',
          'Потрібно було показати переваги бренду',
          'Популярні товари й акції — на видному місці',
          'Сайт мав конвертувати відвідувачів у покупців',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали e-commerce під тактичний бренд: каталог, лінійки, акції й короткий шлях до замовлення.',
        items: [
          'Зручний каталог із швидким вибором',
          'Презентація лінійок продукції',
          'Блоки переваг бренду та власного виробництва',
          'Популярні товари й акції',
          'Просте оформлення замовлення',
          'Повна адаптивність і швидка робота магазину',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          '13PM Tactic отримали e-commerce сайт, який професійно презентує виробництво, підсилює довіру до бренду, показує популярні товари й акції та ефективніше конвертує відвідувачів у покупців.',
      },
    },
    en: {
      breadcrumbLabel: '13PM Tactic',
      heroTitle: '13PM Tactic — e-commerce for a tactical apparel brand',
      heroLead:
        'An online store for a Ukrainian tactical clothing brand: fast product discovery, a clear catalog, product-line presentation and simple checkout on any device.',
      visitSite: 'Visit site',
      stats: [
        { value: '↑', label: 'catalog & product lines' },
        { value: '1', label: 'simple checkout' },
        { value: '↑', label: 'promos & bestsellers' },
        { value: '1', label: 'responsive on all devices' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The tactical apparel brand needed a store that moves quickly from catalog to purchase and builds trust in in-house production.',
        items: [
          'The catalog had to help find products fast',
          'Product lines needed a clear presentation',
          'Checkout had to stay simple on any device',
          'Brand advantages had to stand out',
          'Bestsellers and promos needed visibility',
          'The site had to convert visitors into buyers',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built e-commerce for the tactical brand: catalog, lines, promos and a short path to order.',
        items: [
          'Convenient catalog for fast selection',
          'Product-line presentation',
          'Brand and in-house production advantages',
          'Bestsellers and promo blocks',
          'Simple checkout',
          'Full responsiveness and fast store performance',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          '13PM Tactic got an e-commerce site that presents production professionally, strengthens brand trust, highlights bestsellers and promos, and converts visitors into buyers more effectively.',
      },
    },
    pl: {
      breadcrumbLabel: '13PM Tactic',
      heroTitle: '13PM Tactic — e-commerce marki odzieży taktycznej',
      heroLead:
        'Sklep internetowy ukraińskiej marki odzieży taktycznej: szybki wybór, katalog, linie produktów i proste zamówienie na każdym urządzeniu.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '↑', label: 'katalog i linie produktów' },
        { value: '1', label: 'proste zamówienie' },
        { value: '↑', label: 'promocje i hitowe produkty' },
        { value: '1', label: 'pełna responsywność' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Marce odzieży taktycznej potrzebny był sklep, który szybko prowadzi od katalogu do zakupu i buduje zaufanie do własnej produkcji.',
        items: [
          'Szybkie znajdowanie produktów',
          'Jasna prezentacja linii',
          'Proste zamówienie na każdym urządzeniu',
          'Widoczne przewagi marki',
          'Hitowe produkty i promocje',
          'Konwersja odwiedzających w kupujących',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'E-commerce pod markę taktyczną: katalog, linie, promocje i krótka ścieżka do zamówienia.',
        items: [
          'Wygodny katalog',
          'Prezentacja linii produktów',
          'Bloki przewag marki i produkcji',
          'Hity i promocje',
          'Proste zamówienie',
          'Pełna responsywność i szybkość',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          '13PM Tactic dostało sklep, który profesjonalnie prezentuje produkcję, wzmacnia zaufanie i skuteczniej konwertuje odwiedzających w kupujących.',
      },
    },
    ru: {
      breadcrumbLabel: '13PM Tactic',
      heroTitle: '13PM Tactic — e-commerce бренда тактической одежды',
      heroLead:
        'Интернет-магазин украинского бренда тактической одежды: быстрый выбор, удобный каталог, презентация линеек и простое оформление заказа с любого устройства.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '↑', label: 'каталог и линейки продукции' },
        { value: '1', label: 'простое оформление заказа' },
        { value: '↑', label: 'акции и популярные товары' },
        { value: '1', label: 'адаптив для всех устройств' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Бренду тактической одежды нужен был магазин, который быстро ведёт от каталога к покупке и усиливает доверие к собственному производству.',
        items: [
          'Быстрый поиск товара в каталоге',
          'Понятная презентация линеек',
          'Простое оформление заказа с любого устройства',
          'Видимые преимущества бренда',
          'Популярные товары и акции',
          'Конверсия посетителей в покупателей',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'E-commerce под тактический бренд: каталог, линейки, акции и короткий путь к заказу.',
        items: [
          'Удобный каталог',
          'Презентация линеек продукции',
          'Блоки преимуществ бренда и производства',
          'Популярные товары и акции',
          'Простое оформление заказа',
          'Полный адаптив и быстрая работа',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          '13PM Tactic получили e-commerce сайт, который профессионально презентует производство, усиливает доверие к бренду и эффективнее конвертирует посетителей в покупателей.',
      },
    },
  }),
};

const newStudyLine: CaseStudyDefinition = {
  id: 'newlineschool',
  liveUrl: 'https://newstudyline.com.ua/',
  mainImage: '/portfolio/portfolio-newlineschool.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'New Study Line',
      heroTitle: 'New Study Line — сайт школи англійської під лідогенерацію',
      heroLead:
        'Повноцінний інструмент залучення лідів для школи англійської: форми на пробні уроки, онлайн-тест рівня, SEO-блог і чистий код без конструкторів — швидкість для користувача й Google.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '↑', label: 'форми на пробні уроки' },
        { value: '1', label: 'онлайн-тест рівня' },
        { value: '1', label: 'SEO-блог' },
        { value: '↑', label: 'чистий код, без конструкторів' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Школі потрібен був сайт як канал лідогенерації через Google Ads і органіку — з конверсійними формами, тестом рівня та SEO-структурою, а не шаблонним конструктором.',
        items: [
          'Зручні форми реєстрації на пробні уроки',
          'Онлайн-тест визначення рівня англійської',
          'SEO-блог для органічного трафіку',
          'Грамотна SEO-структура під просування',
          'Максимальна швидкість без конструкторів',
          'Унікальний дизайн, не схожий на типові шкільні шаблони',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали сайт школи як конверсійний інструмент: реклама, органіка й чіткі точки входу в навчання.',
        items: [
          'Форми на пробні уроки',
          'Інтеграція онлайн-тесту рівня',
          'SEO-блог і структура під Google',
          'Акцент на лідогенерацію з Ads і органіки',
          'Чистий код без конструкторів для швидкості',
          'Індивідуальний дизайн після ітерацій із замовником',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Школа отримала швидкий, унікальний сайт під лідогенерацію: пробні уроки, тест рівня й SEO-база для Google Ads та органічного росту.',
      },
    },
    en: {
      breadcrumbLabel: 'New Study Line',
      heroTitle: 'New Study Line — English school site built for lead gen',
      heroLead:
        'A full lead-generation tool for an English school: trial-lesson forms, an online level test, an SEO blog and clean code without page builders — speed for users and Google.',
      visitSite: 'Visit site',
      stats: [
        { value: '↑', label: 'trial-lesson forms' },
        { value: '1', label: 'online level test' },
        { value: '1', label: 'SEO blog' },
        { value: '↑', label: 'clean code, no builders' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The school needed a site as a lead channel via Google Ads and organic search — with conversion forms, a level test and SEO structure, not a generic builder template.',
        items: [
          'Convenient trial-lesson registration forms',
          'Online English level test',
          'SEO blog for organic traffic',
          'Solid SEO structure for growth',
          'Maximum speed without page builders',
          'Unique design unlike typical school templates',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built the school site as a conversion tool: ads, organic and clear entry points into learning.',
        items: [
          'Trial-lesson forms',
          'Online level-test integration',
          'SEO blog and Google-ready structure',
          'Focus on lead gen from Ads and organic',
          'Clean code without builders for speed',
          'Custom design refined with the client',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'The school got a fast unique site for lead generation: trial lessons, a level test and an SEO base for Google Ads and organic growth.',
      },
    },
    pl: {
      breadcrumbLabel: 'New Study Line',
      heroTitle: 'New Study Line — strona szkoły angielskiego pod lead gen',
      heroLead:
        'Pełne narzędzie lead generation dla szkoły angielskiego: formularze lekcji próbnych, test poziomu, blog SEO i czysty kod bez kreatorów.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '↑', label: 'formularze lekcji próbnych' },
        { value: '1', label: 'online-test poziomu' },
        { value: '1', label: 'blog SEO' },
        { value: '↑', label: 'czysty kod, bez kreatorów' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Szkole potrzebna była strona jako kanał leadów z Google Ads i organiki — z formularzami, testem i SEO, nie szablonem z kreatora.',
        items: [
          'Formularze lekcji próbnych',
          'Online-test poziomu angielskiego',
          'Blog SEO pod ruch organiczny',
          'Struktura SEO pod promocję',
          'Maksymalna szybkość bez kreatorów',
          'Unikalny design, nie jak typowe szablony szkół',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Strona szkoły jako narzędzie konwersji: reklama, organika i jasne wejścia do nauki.',
        items: [
          'Formularze lekcji próbnych',
          'Integracja testu poziomu',
          'Blog SEO i struktura pod Google',
          'Lead gen z Ads i organiki',
          'Czysty kod bez kreatorów',
          'Indywidualny design z klientem',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Szkoła dostała szybką, unikalną stronę pod lead gen: lekcje próbne, test poziomu i bazę SEO pod Ads oraz organiczny wzrost.',
      },
    },
    ru: {
      breadcrumbLabel: 'New Study Line',
      heroTitle: 'New Study Line — сайт школы английского под лидогенерацию',
      heroLead:
        'Полноценный инструмент привлечения лидов для школы английского: формы на пробные уроки, онлайн-тест уровня, SEO-блог и чистый код без конструкторов.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '↑', label: 'формы на пробные уроки' },
        { value: '1', label: 'онлайн-тест уровня' },
        { value: '1', label: 'SEO-блог' },
        { value: '↑', label: 'чистый код, без конструкторов' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Школе нужен был сайт как канал лидогенерации через Google Ads и органику — с формами, тестом и SEO-структурой, а не шаблоном конструктора.',
        items: [
          'Удобные формы на пробные уроки',
          'Онлайн-тест уровня английского',
          'SEO-блог для органики',
          'Грамотная SEO-структура',
          'Максимальная скорость без конструкторов',
          'Уникальный дизайн, не как типовые школьные шаблоны',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'Сайт школы как конверсионный инструмент: реклама, органика и точки входа в обучение.',
        items: [
          'Формы на пробные уроки',
          'Интеграция онлайн-теста уровня',
          'SEO-блог и структура под Google',
          'Фокус на лидогенерацию из Ads и органики',
          'Чистый код без конструкторов',
          'Индивидуальный дизайн с заказчиком',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Школа получила быстрый уникальный сайт под лидогенерацию: пробные уроки, тест уровня и SEO-база для Google Ads и органического роста.',
      },
    },
  }),
};

const vevyne: CaseStudyDefinition = {
  id: 'vevyne-dating-bot',
  liveUrl: 'https://t.me/VevyneDatingBot',
  mainImage: '/portfolio/portfolio-vevyne-dating-bot.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Vevene',
      heroTitle: 'Vevene — Telegram-бот для знайомств без зайвих додатків',
      heroLead:
        'Ідея клієнта: знайомитись прямо в Telegram. Ми зібрали Vevene — бот, який замінює класичні дейтинг-сервіси: KYC-перевірка профілів, підбір за інтересами, DateRadar по геолокації та щоденні персональні рекомендації.',
      visitSite: 'Відкрити бота',
      stats: [
        { value: '1', label: 'KYC-перевірка профілів' },
        { value: '↑', label: 'підбір за інтересами' },
        { value: '1', label: 'DateRadar по геолокації' },
        { value: '↑', label: 'щоденні рекомендації' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Користувачі втомились від окремих дейтинг-додатків. Потрібен був сучасний сервіс знайомств усередині Telegram — швидкий, простий і безпечніший за випадкові чати.',
        items: [
          'Знайомства мали відбуватись без зайвих додатків',
          'Профілі потрібно було перевіряти, щоб відсікати ботів і фейки',
          'Підбір пари — за інтересами, а не випадково',
          'Потрібні були знайомства поблизу через геолокацію',
          'Щоденні персональні рекомендації мали тримати залученість',
          'Увесь сценарій мав жити всередині Telegram',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Перетворили ідею на повноцінний Telegram dating-продукт із безпекою, релевантним матчингом і гео-сценаріями.',
        items: [
          'KYC-перевірка профілів проти ботів і фейків',
          'Підбір пари за інтересами',
          'DateRadar — знайомства по геолокації',
          'Щоденні персональні рекомендації',
          'Повний сценарій знайомств усередині Telegram',
          'Швидкий, простий і безпечніший UX порівняно з класичними додатками',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Сучасний зручний сервіс знайомств у Telegram: перевірені профілі, релевантний підбір, геолокація та щоденні рекомендації — без потреби в окремих дейтинг-додатках.',
      },
    },
    en: {
      breadcrumbLabel: 'Vevene',
      heroTitle: 'Vevene — Telegram dating bot without extra apps',
      heroLead:
        'The client’s idea: let people meet inside Telegram. We built Vevene — a bot that replaces classic dating apps: KYC profile checks, interest-based matching, DateRadar by geolocation and daily personal recommendations.',
      visitSite: 'Open bot',
      stats: [
        { value: '1', label: 'KYC profile checks' },
        { value: '↑', label: 'interest-based matching' },
        { value: '1', label: 'DateRadar by geolocation' },
        { value: '↑', label: 'daily recommendations' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'People were tired of separate dating apps. They needed a modern dating product inside Telegram — faster, simpler and safer than random chats.',
        items: [
          'Dating had to work without extra apps',
          'Profiles needed verification against bots and fakes',
          'Matching by interests, not at random',
          'Nearby dating via geolocation',
          'Daily personal recommendations to keep engagement',
          'The full journey had to live inside Telegram',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We turned the idea into a full Telegram dating product with safety, relevant matching and geo scenarios.',
        items: [
          'KYC profile checks against bots and fakes',
          'Interest-based pair matching',
          'DateRadar for geolocation dating',
          'Daily personal recommendations',
          'Full dating journey inside Telegram',
          'Faster, simpler, safer UX than classic apps',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'A modern convenient dating service in Telegram: verified profiles, relevant matching, geolocation and daily recommendations — without separate dating apps.',
      },
    },
    pl: {
      breadcrumbLabel: 'Vevene',
      heroTitle: 'Vevene — bot randkowy w Telegram bez zbędnych aplikacji',
      heroLead:
        'Pomysł klienta: poznawać się w Telegram. Zbudowaliśmy Vevene — bota zamiast klasycznych aplikacji: KYC, dopasowanie po zainteresowaniach, DateRadar i codzienne rekomendacje.',
      visitSite: 'Otwórz bota',
      stats: [
        { value: '1', label: 'weryfikacja KYC profili' },
        { value: '↑', label: 'dopasowanie po zainteresowaniach' },
        { value: '1', label: 'DateRadar po geolokalizacji' },
        { value: '↑', label: 'codzienne rekomendacje' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Użytkownicy zmęczyli się osobnymi aplikacjami randkowymi. Potrzebny był nowoczesny serwis w Telegram — szybki, prosty i bezpieczniejszy.',
        items: [
          'Randki bez zbędnych aplikacji',
          'Weryfikacja profili przeciw botom i fake’om',
          'Dopasowanie po zainteresowaniach',
          'Randki w pobliżu przez geolokalizację',
          'Codzienne personalne rekomendacje',
          'Cała ścieżka wewnątrz Telegram',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Pełny produkt dating w Telegram: bezpieczeństwo, trafny matching i scenariusze geo.',
        items: [
          'KYC profili przeciw botom i fake’om',
          'Dobór pary po zainteresowaniach',
          'DateRadar — geolokalizacja',
          'Codzienne rekomendacje',
          'Pełny scenariusz w Telegram',
          'Szybszy, prostszy, bezpieczniejszy UX',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Nowoczesny wygodny serwis randkowy w Telegram: zweryfikowane profile, trafny matching, geolokalizacja i codzienne rekomendacje — bez osobnych aplikacji.',
      },
    },
    ru: {
      breadcrumbLabel: 'Vevene',
      heroTitle: 'Vevene — Telegram-бот для знакомств без лишних приложений',
      heroLead:
        'Идея клиента: знакомиться прямо в Telegram. Мы собрали Vevene — бот вместо классических дейтинг-сервисов: KYC, подбор по интересам, DateRadar и ежедневные рекомендации.',
      visitSite: 'Открыть бота',
      stats: [
        { value: '1', label: 'KYC-проверка профилей' },
        { value: '↑', label: 'подбор по интересам' },
        { value: '1', label: 'DateRadar по геолокации' },
        { value: '↑', label: 'ежедневные рекомендации' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Пользователи устали от отдельных дейтинг-приложений. Нужен был современный сервис знакомств внутри Telegram — быстрый, простой и безопаснее случайных чатов.',
        items: [
          'Знакомства без лишних приложений',
          'Проверка профилей против ботов и фейков',
          'Подбор по интересам, а не случайно',
          'Знакомства рядом через геолокацию',
          'Ежедневные персональные рекомендации',
          'Весь сценарий внутри Telegram',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'Превратили идею в полноценный Telegram dating-продукт с безопасностью, релевантным матчингом и geo-сценариями.',
        items: [
          'KYC-проверка профилей',
          'Подбор пары по интересам',
          'DateRadar — знакомства по геолокации',
          'Ежедневные персональные рекомендации',
          'Полный сценарий внутри Telegram',
          'Более быстрый, простой и безопасный UX',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Современный удобный сервис знакомств в Telegram: проверенные профили, релевантный подбор, геолокация и ежедневные рекомендации — без отдельных дейтинг-приложений.',
      },
    },
  }),
};

export const BATCH4_CASE_STUDIES: Record<string, CaseStudyDefinition> = {
  [carbit.id]: carbit,
  [thirteenPm.id]: thirteenPm,
  [newStudyLine.id]: newStudyLine,
  [vevyne.id]: vevyne,
};
