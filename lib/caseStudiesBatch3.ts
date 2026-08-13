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

const movnaTest: CaseStudyDefinition = {
  id: 'movna-test',
  liveUrl: 'https://levelup.movna.online/placement_test',
  mainImage: '/portfolio/portfolio-movna-test.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Level Up Test',
      heroTitle: 'Level Up — інтерактивний placement-тест рівня англійської',
      heroLead:
        'Онлайн-тест для визначення рівня англійської: зрозуміле проходження, сучасний дизайн, покроковий сценарій і автоматична рекомендація рівня навчання. Адаптивний інтерфейс робить тест швидким і комфортним на будь-якому пристрої.',
      visitSite: 'Пройти тест',
      stats: [
        { value: '1', label: 'інтерактивний placement-тест' },
        { value: '↑', label: 'автовизначення рівня' },
        { value: '1', label: 'покроковий сценарій' },
        { value: '↑', label: 'адаптив під усі пристрої' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Школі потрібен був інструмент первинного оцінювання знань без ручного розподілу студентів і з комфортним UX для нових учнів.',
        items: [
          'Проходження тесту мало бути зрозумілим без інструкцій менеджера',
          'Потрібен сучасний дизайн і покроковий сценарій',
          'Рівень навчання мав визначатись автоматично',
          'Інтерфейс — повністю адаптивний',
          'Тест мав допомагати залучати нових учнів',
          'Процес розподілу за рівнями мав стати швидшим для школи',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали інтерактивний placement-тест як перший крок у воронці школи: від старту до рекомендованого рівня.',
        items: [
          'Покроковий сценарій проходження тесту',
          'Сучасний, чистий інтерфейс',
          'Автоматичне визначення рекомендованого рівня',
          'Повна адаптивність під мобільні й десктоп',
          'Швидке й комфортне проходження без зайвих кроків',
          'Інструмент первинного оцінювання для команди школи',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Школа отримала зручний інструмент первинного оцінювання: автоматичний розподіл за рівнями, кращий UX і сильніший вхід нових учнів у навчання.',
      },
    },
    en: {
      breadcrumbLabel: 'Level Up Test',
      heroTitle: 'Level Up — interactive English placement test',
      heroLead:
        'An online English level test with a clear flow, modern design, step-by-step scenario and automatic recommended learning level. Fully responsive so the experience stays fast and comfortable on any device.',
      visitSite: 'Take the test',
      stats: [
        { value: '1', label: 'interactive placement test' },
        { value: '↑', label: 'auto level recommendation' },
        { value: '1', label: 'step-by-step flow' },
        { value: '↑', label: 'responsive on all devices' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The school needed a first-assessment tool without manual student sorting — and with a comfortable UX for new learners.',
        items: [
          'The test had to be clear without manager instructions',
          'Modern design and a step-by-step scenario were required',
          'Learning level had to be assigned automatically',
          'The interface had to be fully responsive',
          'The test had to help attract new students',
          'Level distribution had to get faster for the school team',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built an interactive placement test as the first step in the school funnel: from start to recommended level.',
        items: [
          'Step-by-step test scenario',
          'Modern clean interface',
          'Automatic recommended level',
          'Full mobile and desktop responsiveness',
          'Fast comfortable completion without extra friction',
          'A primary assessment tool for the school team',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'The school got a clear first-assessment tool: automatic level distribution, better UX and a stronger path into learning for new students.',
      },
    },
    pl: {
      breadcrumbLabel: 'Level Up Test',
      heroTitle: 'Level Up — interaktywny test poziomu angielskiego',
      heroLead:
        'Online-test poziomu angielskiego: jasny przebieg, nowoczesny design, scenariusz krok po kroku i automatyczna rekomendacja poziomu. Pełna responsywność.',
      visitSite: 'Rozpocznij test',
      stats: [
        { value: '1', label: 'interaktywny placement-test' },
        { value: '↑', label: 'auto-rekomendacja poziomu' },
        { value: '1', label: 'scenariusz krok po kroku' },
        { value: '↑', label: 'pełna responsywność' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Szkole potrzebne było narzędzie wstępnej oceny bez ręcznego rozdzielania studentów i z wygodnym UX.',
        items: [
          'Test zrozumiały bez managera',
          'Nowoczesny design i scenariusz krok po kroku',
          'Automatyczne określenie poziomu',
          'Pełna responsywność',
          'Wsparcie pozyskania nowych uczniów',
          'Szybszy podział na poziomy dla szkoły',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Interaktywny placement-test jako pierwszy krok w lejku szkoły.',
        items: [
          'Scenariusz krok po kroku',
          'Nowoczesny interfejs',
          'Automatyczna rekomendacja poziomu',
          'Pełna responsywność',
          'Szybkie, wygodne przejście',
          'Narzędzie wstępnej oceny dla zespołu',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Szkoła dostała wygodne narzędzie wstępnej oceny: automatyczny podział na poziomy, lepszy UX i silniejszy start nowych uczniów.',
      },
    },
    ru: {
      breadcrumbLabel: 'Level Up Test',
      heroTitle: 'Level Up — интерактивный placement-тест уровня английского',
      heroLead:
        'Онлайн-тест уровня английского: понятное прохождение, современный дизайн, пошаговый сценарий и автоматическая рекомендация уровня обучения. Полный адаптив.',
      visitSite: 'Пройти тест',
      stats: [
        { value: '1', label: 'интерактивный placement-тест' },
        { value: '↑', label: 'автоопределение уровня' },
        { value: '1', label: 'пошаговый сценарий' },
        { value: '↑', label: 'адаптив для всех устройств' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Школе нужен был инструмент первичной оценки без ручного распределения студентов и с комфортным UX.',
        items: [
          'Тест понятен без менеджера',
          'Современный дизайн и пошаговый сценарий',
          'Автоматическое определение уровня',
          'Полная адаптивность',
          'Помощь в привлечении новых учеников',
          'Быстрее распределение по уровням для школы',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'Интерактивный placement-тест как первый шаг воронки школы.',
        items: [
          'Пошаговый сценарий',
          'Современный интерфейс',
          'Автоматическая рекомендация уровня',
          'Полный адаптив',
          'Быстрое комфортное прохождение',
          'Инструмент первичной оценки для команды',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Школа получила удобный инструмент первичной оценки: автоматическое распределение по уровням, лучший UX и более сильный вход новых учеников.',
      },
    },
  }),
};

const kls: CaseStudyDefinition = {
  id: 'kls',
  mainImage: '/portfolio/portfolio-kls.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'KLS',
      heroTitle: 'KLS — сайт логістики: доставка з Китаю в Україну та світом',
      heroLead:
        'Корпоративний сайт логістичної компанії з чітким позиціонуванням: доставка з Китаю в Україну та по світу. Структура веде від першого екрану до контакту й розрахунку вартості — без зайвої складності для клієнта.',
      visitSite: 'Обговорити подібний проєкт',
      stats: [
        { value: '1', label: 'фокус: Китай → Україна / світ' },
        { value: '↑', label: 'шлях до розрахунку вартості' },
        { value: '1', label: 'мобільний перший екран' },
        { value: '↑', label: 'B2B-довіра до логістики' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Логістичній компанії потрібен був сайт, який одразу пояснює географію й сервіс і знімає бар’єр до заявки — без перевантаженої корпоративної «візитки».',
        items: [
          'Перший екран мав чітко сказати: доставка з Китаю в Україну та світом',
          'Клієнт мав швидко зрозуміти, що логістика «без зайвих турбот»',
          'Потрібні були CTA на контакт і розрахунок вартості',
          'Мобільна версія — критична для першого контакту',
          'Візуал мав передавати масштаб міжнародної логістики',
          'Шлях до заявки мав бути коротким і зрозумілим',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали лендінг/сайт логістики як інструмент залучення: сильний hero, просте позиціонування й дві головні дії.',
        items: [
          'Hero з позиціонуванням доставки Китай → Україна / світ',
          'Підзаголовок, що знімає страх складної логістики',
          'CTA «Зв’язатися» і «Розрахувати вартість»',
          'Сучасний адаптивний інтерфейс під мобільні',
          'Візуальний акцент на міжнародних перевезеннях',
          'Структура, що веде від знайомства до заявки',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Компанія отримала зрозумілий цифровий фасад логістики: клієнт одразу бачить географію сервісу, перевагу простоти й має два короткі шляхи до контакту або розрахунку.',
      },
    },
    en: {
      breadcrumbLabel: 'KLS',
      heroTitle: 'KLS — logistics site: China to Ukraine and worldwide',
      heroLead:
        'A logistics company website with clear positioning: delivery from China to Ukraine and worldwide. The structure leads from the first screen to contact and cost calculation — without unnecessary complexity.',
      visitSite: 'Discuss a similar project',
      stats: [
        { value: '1', label: 'focus: China → Ukraine / world' },
        { value: '↑', label: 'path to cost estimate' },
        { value: '1', label: 'mobile-first hero' },
        { value: '↑', label: 'B2B logistics trust' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The logistics company needed a site that explains geography and service immediately and lowers the barrier to inquiry — without an overloaded corporate brochure.',
        items: [
          'The first screen had to state China → Ukraine / worldwide delivery',
          'Clients had to feel logistics without unnecessary hassle',
          'CTAs for contact and cost calculation were required',
          'Mobile was critical for first contact',
          'Visuals had to convey international shipping scale',
          'The path to inquiry had to stay short and clear',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built a logistics landing/site as an acquisition tool: strong hero, simple positioning and two primary actions.',
        items: [
          'Hero positioning China → Ukraine / worldwide',
          'Subcopy that removes fear of complex logistics',
          'CTAs for contact and cost calculation',
          'Modern responsive mobile-first UI',
          'Visual focus on international freight',
          'Structure from discovery to inquiry',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'The company got a clear digital front for logistics: clients see service geography, simplicity and two short paths to contact or a cost estimate.',
      },
    },
    pl: {
      breadcrumbLabel: 'KLS',
      heroTitle: 'KLS — strona logistyki: Chiny → Ukraina i świat',
      heroLead:
        'Strona firmy logistycznej z jasnym pozycjonowaniem: dostawa z Chin do Ukrainy i na świat. Od pierwszego ekranu do kontaktu i wyceny — bez zbędnej złożoności.',
      visitSite: 'Omów podobny projekt',
      stats: [
        { value: '1', label: 'fokus: Chiny → UA / świat' },
        { value: '↑', label: 'ścieżka do wyceny' },
        { value: '1', label: 'mobile-first hero' },
        { value: '↑', label: 'zaufanie B2B do logistyki' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Firmie logistycznej potrzebna była strona, która od razu tłumaczy geografię i usługę oraz obniża barierę zapytania.',
        items: [
          'Pierwszy ekran: Chiny → Ukraina / świat',
          'Logistyka bez zbędnych komplikacji',
          'CTA: kontakt i wycena',
          'Kluczowe mobile UX',
          'Wizual skali międzynarodowych przewozów',
          'Krótka ścieżka do zgłoszenia',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Landing/strona logistyki jako narzędzie pozyskania: mocny hero i dwie główne akcje.',
        items: [
          'Hero z pozycjonowaniem Chiny → UA / świat',
          'Tekst zdejmujący strach przed złożoną logistyką',
          'CTA kontakt i wycena',
          'Responsywny mobile-first UI',
          'Wizual międzynarodowych przewozów',
          'Struktura od poznania do zgłoszenia',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Firma dostała jasny cyfrowy fasad logistyki: geografia usługi, prostota i dwie krótkie ścieżki do kontaktu lub wyceny.',
      },
    },
    ru: {
      breadcrumbLabel: 'KLS',
      heroTitle: 'KLS — сайт логистики: доставка из Китая в Украину и по миру',
      heroLead:
        'Корпоративный сайт логистической компании с чётким позиционированием: доставка из Китая в Украину и по миру. От первого экрана до контакта и расчёта стоимости.',
      visitSite: 'Обсудить похожий проект',
      stats: [
        { value: '1', label: 'фокус: Китай → Украина / мир' },
        { value: '↑', label: 'путь к расчёту стоимости' },
        { value: '1', label: 'mobile-first hero' },
        { value: '↑', label: 'B2B-доверие к логистике' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Логистической компании нужен был сайт, который сразу объясняет географию и сервис и снижает барьер до заявки.',
        items: [
          'Первый экран: Китай → Украина / мир',
          'Логистика без лишних сложностей',
          'CTA на контакт и расчёт стоимости',
          'Критичный mobile UX',
          'Визуал масштаба международных перевозок',
          'Короткий путь к заявке',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'Лендинг/сайт логистики как инструмент привлечения: сильный hero и два главных действия.',
        items: [
          'Hero с позиционированием Китай → Украина / мир',
          'Подзаголовок, снимающий страх сложной логистики',
          'CTA «Связаться» и «Рассчитать стоимость»',
          'Адаптивный mobile-first UI',
          'Визуальный акцент на международных перевозках',
          'Структура от знакомства к заявке',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Компания получила понятный цифровой фасад логистики: география сервиса, простота и два коротких пути к контакту или расчёту.',
      },
    },
  }),
};

const wayOfProcessing: CaseStudyDefinition = {
  id: 'wayofprocessing',
  liveUrl: 'https://wayofprocessing.com/',
  mainImage: '/portfolio/portfolio-wayofprocessing.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'WayOfProcessing',
      heroTitle: 'WayOfProcessing — сайт міжнародного платіжного процесингу',
      heroLead:
        'Сучасний сайт для сервісу міжнародного процесингу платежів через Stripe. Акцент на експертності, довірі й зрозумілій презентації послуг: підключення, переваги, кейси для різних ніш і шлях до консультації.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '1', label: 'фокус на Stripe-процесингу' },
        { value: '↑', label: 'довіра через цифри й переваги' },
        { value: '1', label: 'кейси для різних ніш' },
        { value: '↑', label: 'шлях до консультації' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Платіжному сервісу потрібен був сайт, який пояснює складний продукт просто й переконливо — з доказами експертності та чітким шляхом до заявки.',
        items: [
          'Потрібно було підкреслити експертність компанії',
          'Процес підключення мав бути зрозумілим',
          'Переваги сервісу — без «води»',
          'Кейси використання для різних ніш',
          'Сайт мав будувати довіру цифрами й комунікацією',
          'Головна дія — заявка на консультацію',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали B2B-сайт процесингу як воронку довіри: послуги, процес, кейси й консультація.',
        items: [
          'Позиціонування міжнародного процесингу через Stripe',
          'Структура з поясненням підключення',
          'Блоки переваг і доказової комунікації',
          'Кейси використання для різних ніш',
          'Повна адаптивність і швидке завантаження',
          'CTA на консультацію на ключових рівнях',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'WayOfProcessing отримали сайт, який професійно презентує послуги, підсилює довіру цифрами й перевагами та ефективніше конвертує відвідувачів у заявки.',
      },
    },
    en: {
      breadcrumbLabel: 'WayOfProcessing',
      heroTitle: 'WayOfProcessing — international payment processing website',
      heroLead:
        'A modern site for an international payment processing service via Stripe. Built around expertise, trust and a clear service story: onboarding, benefits, niche use cases and a path to consultation.',
      visitSite: 'Visit site',
      stats: [
        { value: '1', label: 'focus on Stripe processing' },
        { value: '↑', label: 'trust via proof & benefits' },
        { value: '1', label: 'use cases across niches' },
        { value: '↑', label: 'path to consultation' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The payment service needed a site that explains a complex product simply and convincingly — with proof of expertise and a clear path to inquiry.',
        items: [
          'Company expertise had to stand out',
          'Onboarding had to be easy to understand',
          'Benefits needed to stay concrete',
          'Use cases across different niches',
          'Trust had to come from numbers and clear messaging',
          'Primary action: request a consultation',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built a B2B processing site as a trust funnel: services, process, cases and consultation.',
        items: [
          'Positioning for international Stripe processing',
          'Structure explaining onboarding',
          'Benefit and proof blocks',
          'Use cases for different niches',
          'Full responsiveness and fast load',
          'Consultation CTAs across key levels',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'WayOfProcessing got a site that presents services professionally, strengthens trust through proof and converts visitors into consultation requests more effectively.',
      },
    },
    pl: {
      breadcrumbLabel: 'WayOfProcessing',
      heroTitle: 'WayOfProcessing — strona processingu płatności',
      heroLead:
        'Nowoczesna strona serwisu processingu płatności przez Stripe. Eksperckość, zaufanie i jasna prezentacja usług: podłączenie, korzyści, case’y i ścieżka do konsultacji.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '1', label: 'fokus na Stripe processing' },
        { value: '↑', label: 'zaufanie przez liczby i korzyści' },
        { value: '1', label: 'case’y dla różnych nisz' },
        { value: '↑', label: 'ścieżka do konsultacji' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Serwisowi płatności potrzebna była strona, która tłumaczy złożony produkt prosto i buduje zaufanie z jasną ścieżką do zgłoszenia.',
        items: [
          'Podkreślenie eksperckości',
          'Zrozumiały proces podłączenia',
          'Konkretne korzyści',
          'Case’y dla różnych nisz',
          'Zaufanie przez liczby i komunikację',
          'Główna akcja: konsultacja',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Strona B2B processingu jako lejek zaufania: usługi, proces, case’y i konsultacja.',
        items: [
          'Pozycjonowanie processingu przez Stripe',
          'Struktura z wyjaśnieniem podłączenia',
          'Bloki korzyści i dowodów',
          'Case’y dla różnych nisz',
          'Pełna responsywność i szybkość',
          'CTA na konsultację',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'WayOfProcessing dostało stronę, która profesjonalnie prezentuje usługi, wzmacnia zaufanie i skuteczniej zamienia odwiedzających w zgłoszenia.',
      },
    },
    ru: {
      breadcrumbLabel: 'WayOfProcessing',
      heroTitle: 'WayOfProcessing — сайт международного платёжного процессинга',
      heroLead:
        'Современный сайт сервиса международного процессинга платежей через Stripe. Акцент на экспертности, доверии и понятной презентации услуг.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '1', label: 'фокус на Stripe-процессинге' },
        { value: '↑', label: 'доверие через цифры и преимущества' },
        { value: '1', label: 'кейсы для разных ниш' },
        { value: '↑', label: 'путь к консультации' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Платёжному сервису нужен был сайт, который просто объясняет сложный продукт и ведёт к заявке.',
        items: [
          'Подчеркнуть экспертность',
          'Понятный процесс подключения',
          'Конкретные преимущества',
          'Кейсы для разных ниш',
          'Доверие через цифры и коммуникацию',
          'Главное действие — консультация',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'B2B-сайт процессинга как воронка доверия: услуги, процесс, кейсы и консультация.',
        items: [
          'Позиционирование процессинга через Stripe',
          'Структура с объяснением подключения',
          'Блоки преимуществ и доказательств',
          'Кейсы для разных ниш',
          'Полный адаптив и быстрая загрузка',
          'CTA на консультацию',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'WayOfProcessing получили сайт, который профессионально презентует услуги, усиливает доверие и эффективнее конвертирует посетителей в заявки.',
      },
    },
  }),
};

const emviDigital: CaseStudyDefinition = {
  id: 'emvi-digital',
  liveUrl: 'https://emvi-digital.vercel.app/',
  mainImage: '/portfolio/portfolio-emvi-digital.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'EMVI Digital',
      heroTitle: 'EMVI Digital — сайт агенції контенту та e-commerce',
      heroLead:
        'Сучасний сайт для digital-агенції: стильна візуальна подача, зрозумілі послуги, кейси й пакети співпраці. Структура, адаптив і швидкість допомагають швидко оцінити можливості агенції та залишити заявку.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '3', label: 'напрями: контент, бренд, e-com' },
        { value: '↑', label: 'стильна візуальна подача' },
        { value: '1', label: 'пакети співпраці' },
        { value: '↑', label: 'шлях до заявки' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Агенції потрібен був сайт, який виглядає на рівні послуг і швидко пояснює, з чим можна прийти — без розмитої презентації.',
        items: [
          'Візуал мав підсилювати експертність бренду',
          'Послуги мали читатись одразу',
          'Потрібні були кейси та пакети співпраці',
          'Структура — без зайвого шуму',
          'Адаптив і швидкість — обов’язкові',
          'Головна дія — заявка від потенційного клієнта',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали сайт агенції як вітрину експертності: послуги, кейси, пакети й чіткий CTA.',
        items: [
          'Стильна візуальна система під digital-бренд',
          'Зрозуміла презентація послуг',
          'Блоки кейсів і пакетів співпраці',
          'Продумана структура сторінок',
          'Адаптивний дизайн і швидке завантаження',
          'Шлях від знайомства з агенцією до заявки',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'EMVI Digital отримали сайт, який підсилює експертність бренду, професійно презентує послуги, формує довіру до команди та ефективніше конвертує відвідувачів у клієнтів.',
      },
    },
    en: {
      breadcrumbLabel: 'EMVI Digital',
      heroTitle: 'EMVI Digital — agency site for content & e-commerce',
      heroLead:
        'A modern digital agency website: strong visuals, clear services, cases and collaboration packages. Structure, responsiveness and speed help prospects evaluate the agency and send a request.',
      visitSite: 'Visit site',
      stats: [
        { value: '3', label: 'areas: content, brand, e-com' },
        { value: '↑', label: 'strong visual presentation' },
        { value: '1', label: 'collaboration packages' },
        { value: '↑', label: 'path to inquiry' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The agency needed a site that matches the quality of its work and quickly explains what clients can buy — without a vague presentation.',
        items: [
          'Visuals had to reinforce brand expertise',
          'Services had to read immediately',
          'Cases and collaboration packages were required',
          'Structure without unnecessary noise',
          'Responsiveness and speed were mandatory',
          'Primary action: prospect inquiry',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built the agency site as an expertise showcase: services, cases, packages and a clear CTA.',
        items: [
          'Stylish visual system for a digital brand',
          'Clear service presentation',
          'Case and package blocks',
          'Thoughtful page structure',
          'Responsive design and fast load',
          'Path from agency discovery to inquiry',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'EMVI Digital got a site that strengthens brand expertise, presents services professionally, builds team trust and converts visitors into clients more effectively.',
      },
    },
    pl: {
      breadcrumbLabel: 'EMVI Digital',
      heroTitle: 'EMVI Digital — strona agencji content i e-commerce',
      heroLead:
        'Nowoczesna strona agencji digital: stylowa wizualizacja, jasne usługi, case’y i pakiety współpracy. Struktura, responsywność i szybkość prowadzą do zgłoszenia.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '3', label: 'obszary: content, brand, e-com' },
        { value: '↑', label: 'stylowa prezentacja wizualna' },
        { value: '1', label: 'pakiety współpracy' },
        { value: '↑', label: 'ścieżka do zgłoszenia' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Agencji potrzebna była strona na poziomie usług, która szybko tłumaczy, z czym można przyjść.',
        items: [
          'Wizual wzmacniający eksperckość',
          'Usługi czytelne od razu',
          'Case’y i pakiety współpracy',
          'Struktura bez szumu',
          'Responsywność i szybkość',
          'Główna akcja: zgłoszenie',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Strona agencji jako witryna eksperckości: usługi, case’y, pakiety i CTA.',
        items: [
          'Stylowy system wizualny',
          'Jasna prezentacja usług',
          'Bloki case’ów i pakietów',
          'Przemyślana struktura',
          'Responsywność i szybkie ładowanie',
          'Ścieżka od poznania agencji do zgłoszenia',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'EMVI Digital dostało stronę, która wzmacnia eksperckość, profesjonalnie prezentuje usługi i skuteczniej konwertuje odwiedzających.',
      },
    },
    ru: {
      breadcrumbLabel: 'EMVI Digital',
      heroTitle: 'EMVI Digital — сайт агентства контента и e-commerce',
      heroLead:
        'Современный сайт digital-агентства: стильная визуальная подача, понятные услуги, кейсы и пакеты сотрудничества.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '3', label: 'направления: контент, бренд, e-com' },
        { value: '↑', label: 'стильная визуальная подача' },
        { value: '1', label: 'пакеты сотрудничества' },
        { value: '↑', label: 'путь к заявке' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Агентству нужен был сайт на уровне услуг, который быстро объясняет, с чем можно прийти.',
        items: [
          'Визуал, усиливающий экспертность',
          'Услуги читаются сразу',
          'Кейсы и пакеты сотрудничества',
          'Структура без шума',
          'Адаптив и скорость',
          'Главное действие — заявка',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'Сайт агентства как витрина экспертности: услуги, кейсы, пакеты и CTA.',
        items: [
          'Стильная визуальная система',
          'Понятная презентация услуг',
          'Блоки кейсов и пакетов',
          'Продуманная структура',
          'Адаптив и быстрая загрузка',
          'Путь от знакомства к заявке',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'EMVI Digital получили сайт, который усиливает экспертность бренда, профессионально презентует услуги и эффективнее конвертирует посетителей в клиентов.',
      },
    },
  }),
};

const topTrendShop: CaseStudyDefinition = {
  id: 'toptrendshop',
  mainImage: '/portfolio/portfolio-toptrendshop.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'TopTrendShop',
      heroTitle: 'TopTrendShop — e-commerce під товарку та масштабування',
      heroLead:
        'Повноцінний інтернет-магазин під товарний бізнес: швидкий запуск оферів, тест зв’язок і стабільний вихід у плюс. Зручна адмінка, логічні категорії, пошук і «Обрані» — без зайвої бюрократії.',
      visitSite: 'Обговорити подібний проєкт',
      stats: [
        { value: '↑', label: 'швидкий запуск оферів' },
        { value: '1', label: 'адмінка під рекламний трафік' },
        { value: '↑', label: 'категорії під ніші й воронки' },
        { value: '1', label: 'пошук + обрані' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Товарному бізнесу потрібен був магазин, який витримує рекламні навантаження й дає швидко міняти офери, ціни й креативи — без довгих доопрацювань.',
        items: [
          'Швидкий запуск і тест рекламних зв’язок',
          'Адмінка для товарів, цін і креативів за хвилини',
          'Порядок товарів під трафік з реклами',
          'Логічна структура категорій під різні ніші',
          'Пошук і обрані для повернення до покупки',
          'Стабільність під рекламним навантаженням',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали e-commerce під операційну швидкість товарки: від адмінки до структури каталогу.',
        items: [
          'Повноцінний магазин під масштабування оферів',
          'Адмін-панель: товари, ціни, креативи, порядок',
          'Категорії під ніші, воронки та гіпотези',
          'Вбудований пошук позицій',
          'Функція «Обрані» для дотиску до покупки',
          'Архітектура, готова до рекламних піків',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Магазин витримує рекламні навантаження, не втрачає ліди й готовий масштабувати успішні зв’язки: швидкий запуск оферів і стабільний вихід у плюс.',
      },
    },
    en: {
      breadcrumbLabel: 'TopTrendShop',
      heroTitle: 'TopTrendShop — e-commerce built for offers and scale',
      heroLead:
        'A full online store for product businesses: fast offer launches, creative testing and stable profitability. Clean admin, logical categories, search and favorites — without unnecessary process friction.',
      visitSite: 'Discuss a similar project',
      stats: [
        { value: '↑', label: 'fast offer launches' },
        { value: '1', label: 'admin built for ad traffic' },
        { value: '↑', label: 'categories for niches & funnels' },
        { value: '1', label: 'search + favorites' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The product business needed a store that handles ad load and lets the team change offers, prices and creatives fast — without long reworks.',
        items: [
          'Fast launch and testing of ad combinations',
          'Admin for products, prices and creatives in minutes',
          'Product order tuned to ad traffic',
          'Logical categories for different niches',
          'Search and favorites to push purchase',
          'Stability under advertising load',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built e-commerce for operational speed: from admin to catalog structure.',
        items: [
          'Full store ready to scale offers',
          'Admin panel: products, prices, creatives, sorting',
          'Categories for niches, funnels and hypotheses',
          'Built-in product search',
          'Favorites to increase return and conversion',
          'Architecture ready for ad traffic spikes',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'The store handles ad load, keeps leads and is ready to scale winning combinations: fast offer launches and a stable path to profit.',
      },
    },
    pl: {
      breadcrumbLabel: 'TopTrendShop',
      heroTitle: 'TopTrendShop — e-commerce pod oferty i skalę',
      heroLead:
        'Pełny sklep internetowy pod biznes produktowy: szybki start ofert, testy kreacji i stabilny plus. Wygodny panel, kategorie, wyszukiwanie i ulubione.',
      visitSite: 'Omów podobny projekt',
      stats: [
        { value: '↑', label: 'szybki start ofert' },
        { value: '1', label: 'panel pod ruch z reklam' },
        { value: '↑', label: 'kategorie pod nisze i lejki' },
        { value: '1', label: 'wyszukiwanie + ulubione' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Biznesowi produktowemu potrzebny był sklep odporny na ruch z reklam i pozwalający szybko zmieniać oferty, ceny i kreacje.',
        items: [
          'Szybki start i test powiązań reklamowych',
          'Panel: produkty, ceny, kreacje w minuty',
          'Kolejność produktów pod ruch z reklam',
          'Logiczne kategorie pod różne nisze',
          'Wyszukiwanie i ulubione do zakupu',
          'Stabilność pod obciążeniem reklamowym',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'E-commerce pod szybkość operacyjną: od panelu po strukturę katalogu.',
        items: [
          'Pełny sklep pod skalowanie ofert',
          'Panel admina: produkty, ceny, kreacje, kolejność',
          'Kategorie pod nisze, lejki i hipotezy',
          'Wbudowane wyszukiwanie',
          'Ulubione do dociśnięcia zakupu',
          'Architektura gotowa na piki ruchu',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Sklep wytrzymuje ruch z reklam, nie traci leadów i jest gotowy skalować skuteczne powiązania.',
      },
    },
    ru: {
      breadcrumbLabel: 'TopTrendShop',
      heroTitle: 'TopTrendShop — e-commerce под товарку и масштабирование',
      heroLead:
        'Полноценный интернет-магазин под товарный бизнес: быстрый запуск офферов, тест связок и стабильный выход в плюс. Удобная админка, категории, поиск и избранное.',
      visitSite: 'Обсудить похожий проект',
      stats: [
        { value: '↑', label: 'быстрый запуск офферов' },
        { value: '1', label: 'админка под рекламный трафик' },
        { value: '↑', label: 'категории под ниши и воронки' },
        { value: '1', label: 'поиск + избранное' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Товарному бизнесу нужен был магазин, который выдерживает рекламную нагрузку и даёт быстро менять офферы, цены и креативы.',
        items: [
          'Быстрый запуск и тест рекламных связок',
          'Админка товаров, цен и креативов за минуты',
          'Порядок товаров под рекламный трафик',
          'Логичные категории под разные ниши',
          'Поиск и избранное для дожима покупки',
          'Стабильность под рекламной нагрузкой',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'E-commerce под операционную скорость товарки: от админки до структуры каталога.',
        items: [
          'Полноценный магазин под масштабирование офферов',
          'Админ-панель: товары, цены, креативы, порядок',
          'Категории под ниши, воронки и гипотезы',
          'Встроенный поиск',
          'Избранное для возврата к покупке',
          'Архитектура, готовая к рекламным пикам',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Магазин выдерживает рекламную нагрузку, не теряет лиды и готов масштабировать успешные связки.',
      },
    },
  }),
};

const journeyZavadska: CaseStudyDefinition = {
  id: 'journey-zavadska',
  liveUrl: 'https://journey.anastasiiazavadska.com/',
  mainImage: '/portfolio/portfolio-journey-zavadska.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Journey Course',
      heroTitle: 'Journey — сайт курсу + WayForPay + Telegram-бот доступу',
      heroLead:
        'Запуск онлайн-курсу без технічного головного болю: сайт, оплата через WayForPay і Telegram-бот, який автоматично видає доступ і щодня надсилає матеріали. Оплата → доступ → 7 днів навчання в боті.',
      visitSite: 'Відкрити проєкт',
      stats: [
        { value: '3', label: 'шар: сайт + оплата + бот' },
        { value: '1', label: 'оплата WayForPay' },
        { value: '7', label: 'днів навчання в боті' },
        { value: '↑', label: 'автовидача доступу' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Експерту потрібен був запуск курсу без ручної видачі доступу й розсилки матеріалів — єдиний контур від оплати до щоденного навчання.',
        items: [
          'Сайт мав продавати курс і вести на оплату',
          'Оплата — через WayForPay',
          'Після оплати доступ мав видаватись автоматично',
          'Матеріали мали приходити щодня в Telegram',
          'Сценарій: 7 днів навчання без менеджера',
          'Технічний запуск без зайвого головного болю для експерта',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали зв’язку сайт + платіж + бот: від покупки до щоденної доставки контенту.',
        items: [
          'Сайт курсу як точка входу й продажу',
          'Інтеграція оплати через WayForPay',
          'Telegram-бот з автовидачею доступу після оплати',
          'Щоденна розсилка матеріалів курсу',
          'Сценарій навчання на 7 днів',
          'Автономний цикл без ручної видачі контенту',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Готовий контур запуску курсу: оплата → доступ → 7 днів навчання в боті. Експерт продає продукт без технічної рутини на кожному учні.',
      },
    },
    en: {
      breadcrumbLabel: 'Journey Course',
      heroTitle: 'Journey — course site + WayForPay + Telegram access bot',
      heroLead:
        'Launch an online course without technical headache: a site, WayForPay checkout and a Telegram bot that grants access and sends daily lessons. Pay → access → 7 days of learning in the bot.',
      visitSite: 'Open project',
      stats: [
        { value: '3', label: 'layers: site + pay + bot' },
        { value: '1', label: 'WayForPay checkout' },
        { value: '7', label: 'days of learning in-bot' },
        { value: '↑', label: 'automatic access delivery' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The expert needed a course launch without manually granting access or sending materials — one loop from payment to daily learning.',
        items: [
          'The site had to sell the course and lead to payment',
          'Checkout via WayForPay',
          'Access after payment had to be automatic',
          'Materials had to arrive daily in Telegram',
          'A 7-day learning scenario without a manager',
          'A technical launch without constant expert overhead',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We connected site + payment + bot: from purchase to daily content delivery.',
        items: [
          'Course site as the sales entry point',
          'WayForPay payment integration',
          'Telegram bot with auto access after payment',
          'Daily course material delivery',
          '7-day learning scenario',
          'Autonomous loop without manual content handoff',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'A ready course-launch loop: pay → access → 7 days of learning in the bot. The expert sells without technical routine on every student.',
      },
    },
    pl: {
      breadcrumbLabel: 'Journey Course',
      heroTitle: 'Journey — strona kursu + WayForPay + bot dostępu',
      heroLead:
        'Start kursu online bez technicznego bólu głowy: strona, płatność WayForPay i bot Telegram, który daje dostęp i codziennie wysyła materiały.',
      visitSite: 'Otwórz projekt',
      stats: [
        { value: '3', label: 'warstwy: strona + płatność + bot' },
        { value: '1', label: 'płatność WayForPay' },
        { value: '7', label: 'dni nauki w bocie' },
        { value: '↑', label: 'autowyadanie dostępu' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Ekspertce potrzebny był start kursu bez ręcznego wydawania dostępu i materiałów — jeden kontur od płatności do codziennej nauki.',
        items: [
          'Strona sprzedaje kurs i prowadzi do płatności',
          'Płatność przez WayForPay',
          'Automatyczny dostęp po płatności',
          'Codzienne materiały w Telegram',
          '7 dni nauki bez managera',
          'Start bez technicznej rutyny',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Połączenie strona + płatność + bot: od zakupu do codziennej dostawy treści.',
        items: [
          'Strona kursu jako punkt sprzedaży',
          'Integracja WayForPay',
          'Bot z autowyadaniem dostępu',
          'Codzienna wysyłka materiałów',
          'Scenariusz 7 dni nauki',
          'Autonomiczny cykl bez ręcznej obsługi',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Gotowy kontur startu kursu: płatność → dostęp → 7 dni nauki w bocie. Ekspertka sprzedaje bez technicznej rutyny przy każdym uczniu.',
      },
    },
    ru: {
      breadcrumbLabel: 'Journey Course',
      heroTitle: 'Journey — сайт курса + WayForPay + Telegram-бот доступа',
      heroLead:
        'Запуск онлайн-курса без технической головной боли: сайт, оплата WayForPay и Telegram-бот, который выдаёт доступ и ежедневно присылает материалы.',
      visitSite: 'Открыть проект',
      stats: [
        { value: '3', label: 'слоя: сайт + оплата + бот' },
        { value: '1', label: 'оплата WayForPay' },
        { value: '7', label: 'дней обучения в боте' },
        { value: '↑', label: 'автовыдача доступа' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Эксперту нужен был запуск курса без ручной выдачи доступа и материалов — единый контур от оплаты до ежедневного обучения.',
        items: [
          'Сайт продаёт курс и ведёт к оплате',
          'Оплата через WayForPay',
          'Автодоступ после оплаты',
          'Ежедневные материалы в Telegram',
          '7 дней обучения без менеджера',
          'Запуск без технической рутины',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'Связка сайт + платёж + бот: от покупки до ежедневной доставки контента.',
        items: [
          'Сайт курса как точка продажи',
          'Интеграция WayForPay',
          'Бот с автовыдачей доступа',
          'Ежедневная рассылка материалов',
          'Сценарий обучения на 7 дней',
          'Автономный цикл без ручной выдачи',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Готовый контур запуска курса: оплата → доступ → 7 дней обучения в боте. Эксперт продаёт без технической рутины на каждом ученике.',
      },
    },
  }),
};

const butenkoFit: CaseStudyDefinition = {
  id: 'butenko-fit',
  liveUrl: 'https://www.butenkofit.com/',
  mainImage: '/portfolio/portfolio-butenko-fit.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'ButenkoFit',
      heroTitle: 'ButenkoFit — сайт сертифікованої тренерки з пілатесу',
      heroLead:
        'Сайт для Юлії ButenkoFit, який передає вайб експертки: замість одного довгого лендінгу — структура з окремими сторінками під програми, повітря, якісні фото й блоки, що закривають питання клієнта до запису.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '↑', label: 'окремі сторінки під програми' },
        { value: '1', label: 'мінімум візуального шуму' },
        { value: '24/7', label: 'продаж курсів автономно' },
        { value: '↑', label: 'передача вайбу бренду' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Що було',
        lead:
          'Головним викликом було не просто зібрати сторінки, а передати вайб Юлії: експертність, спокій і чіткий вибір програми без хаосу довгого лендінгу.',
        items: [
          'Один довгий лендінг губив клієнта між програмами',
          'Потрібна була чітка структура під кожен запит',
          'Візуал мав лишати повітря й якісні фото',
          'Блоки мали закривати питання ще до запису',
          'Сайт мав продавати курси автономно',
          'Особистий бренд тренерки мав звучати цілісно',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Що зробили',
        lead:
          'Зібрали багатосторінковий сайт під пілатес-бренд: програми, експертність і спокійний продаж 24/7.',
        items: [
          'Окремі сторінки під кожну програму',
          'Мінімум візуального шуму, акцент на повітрі й фото',
          'Змістовні блоки під типові питання клієнта',
          'Структура, що допомагає обрати свій запит',
          'Автономний інструмент презентації експертності',
          'Шлях до запису / покупки курсу без зайвих кроків',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Автономний інструмент, який презентує експертність Юлії та продає курси 24/7 — з чіткою структурою програм і сильним відчуттям бренду.',
      },
    },
    en: {
      breadcrumbLabel: 'ButenkoFit',
      heroTitle: 'ButenkoFit — website for a certified pilates coach',
      heroLead:
        'A site for Yulia ButenkoFit that carries the coach’s vibe: instead of one long landing — separate pages per program, breathing space, quality photos and blocks that answer client questions before booking.',
      visitSite: 'Visit site',
      stats: [
        { value: '↑', label: 'separate pages per program' },
        { value: '1', label: 'minimum visual noise' },
        { value: '24/7', label: 'autonomous course sales' },
        { value: '↑', label: 'brand vibe transferred' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'What was',
        lead:
          'The core challenge was not just shipping pages — it was transferring Yulia’s vibe: expertise, calm and a clear program choice without a chaotic long landing.',
        items: [
          'One long landing made clients lose programs',
          'Clear structure per request was required',
          'Visuals needed space and quality photography',
          'Blocks had to answer questions before booking',
          'The site had to sell courses autonomously',
          'The coach’s personal brand had to feel coherent',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'What we did',
        lead:
          'We built a multi-page pilates brand site: programs, expertise and calm sales 24/7.',
        items: [
          'Dedicated pages for each program',
          'Minimum visual noise, focus on space and photos',
          'Content blocks for typical client questions',
          'Structure that helps choose the right request',
          'An autonomous expertise presentation tool',
          'A short path to booking / course purchase',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'An autonomous tool that presents Yulia’s expertise and sells courses 24/7 — with clear program structure and a strong brand feel.',
      },
    },
    pl: {
      breadcrumbLabel: 'ButenkoFit',
      heroTitle: 'ButenkoFit — strona certyfikowanej trenerki pilates',
      heroLead:
        'Strona dla Julii ButenkoFit, która oddaje vibe ekspertki: zamiast jednego długiego landingu — osobne strony programów, powietrze, jakościowe zdjęcia i bloki odpowiadające na pytania przed zapisem.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '↑', label: 'osobne strony programów' },
        { value: '1', label: 'minimum wizualnego szumu' },
        { value: '24/7', label: 'autonomiczna sprzedaż kursów' },
        { value: '↑', label: 'przeniesiony vibe marki' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Co było',
        lead:
          'Głównym wyzwaniem było nie tylko napisać kod, lecz oddać vibe Julii: eksperckość, spokój i jasny wybór programu.',
        items: [
          'Jeden długi landing gubił programy',
          'Potrzebna jasna struktura pod każdy request',
          'Wizual z powietrzem i jakościowymi zdjęciami',
          'Bloki zamykające pytania przed zapisem',
          'Autonomiczna sprzedaż kursów',
          'Spójna marka osobista trenerki',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Co zrobiliśmy',
        lead: 'Wielo-stronicowa strona marki pilates: programy, eksperckość i spokojna sprzedaż 24/7.',
        items: [
          'Osobne strony pod każdy program',
          'Minimum szumu, powietrze i zdjęcia',
          'Treściowe bloki pod typowe pytania',
          'Struktura pomagająca wybrać request',
          'Autonomiczne narzędzie prezentacji eksperckości',
          'Krótka ścieżka do zapisu / zakupu kursu',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Autonomiczne narzędzie, które prezentuje eksperckość Julii i sprzedaje kursy 24/7 — z jasną strukturą programów i mocnym feelingiem marki.',
      },
    },
    ru: {
      breadcrumbLabel: 'ButenkoFit',
      heroTitle: 'ButenkoFit — сайт сертифицированной тренерки по пилатесу',
      heroLead:
        'Сайт для Юлии ButenkoFit, который передаёт вайб экспертки: вместо одного длинного лендинга — структура с отдельными страницами программ, воздух, качественные фото и блоки, закрывающие вопросы до записи.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '↑', label: 'отдельные страницы программ' },
        { value: '1', label: 'минимум визуального шума' },
        { value: '24/7', label: 'автономные продажи курсов' },
        { value: '↑', label: 'передача вайба бренда' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Что было',
        lead:
          'Главным вызовом было не просто собрать страницы, а передать вайб Юлии: экспертность, спокойствие и ясный выбор программы.',
        items: [
          'Один длинный лендинг терял программы',
          'Нужна чёткая структура под каждый запрос',
          'Визуал с воздухом и качественными фото',
          'Блоки, закрывающие вопросы до записи',
          'Автономные продажи курсов',
          'Цельный личный бренд тренерки',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Что сделали',
        lead: 'Многостраничный сайт пилатес-бренда: программы, экспертность и спокойные продажи 24/7.',
        items: [
          'Отдельные страницы под каждую программу',
          'Минимум шума, акцент на воздухе и фото',
          'Содержательные блоки под типовые вопросы',
          'Структура, помогающая выбрать свой запрос',
          'Автономный инструмент презентации экспертности',
          'Короткий путь к записи / покупке курса',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Автономный инструмент, который презентует экспертность Юлии и продаёт курсы 24/7 — с чёткой структурой программ и сильным ощущением бренда.',
      },
    },
  }),
};

export const BATCH3_CASE_STUDIES: Record<string, CaseStudyDefinition> = {
  [movnaTest.id]: movnaTest,
  [kls.id]: kls,
  [wayOfProcessing.id]: wayOfProcessing,
  [emviDigital.id]: emviDigital,
  [topTrendShop.id]: topTrendShop,
  [journeyZavadska.id]: journeyZavadska,
  [butenkoFit.id]: butenkoFit,
};
