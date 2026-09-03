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

const cosmy: CaseStudyDefinition = {
  id: 'cosmy',
  liveUrl: 'https://t.me/Cosmy_bot',
  mainImage: '/portfolio/portfolio-cosmy.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Cosmy',
      seoTitle: 'Кейс Cosmy: Telegram-бот для магазину',
      heroTitle: 'Cosmy — Telegram-бот для інтернет-магазину',
      heroLead:
        'Cosmy Assistant допомагає клієнтам керувати замовленнями прямо в Telegram: історія покупок, підтримка, рейтинги й відгуки. Автоматизація через Google Sheets дала 400+ клієнтів і +40% до зацікавленості.',
      visitSite: 'Відкрити бота',
      stats: [
        { value: '400+', label: 'клієнтів' },
        { value: '+40%', label: 'зростання зацікавленості' },
        { value: '24/7', label: 'канал підтримки' },
        { value: '5★', label: 'рейтинг і відгуки' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Завдання проєкту Cosmy',
        lead:
          'Інтернет-магазину потрібен був зручний канал після покупки: статус замовлення, підтримка й зворотний зв’язок без ручної рутини в месенджерах.',
        items: [
          'Клієнти мали бачити історію та деталі замовлень у боті',
          'Потрібен був прямий запит до служби підтримки',
          'Рейтинги й відгуки мали збиратися в одному місці',
          'Дані мали автоматично зберігатись у Google Sheets',
          'Підтримка мала відповідати швидко в робочий час',
          'Автоматизація мала підвищити залученість без росту штату',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Розробка рішення для Cosmy',
        lead:
          'Зібрали Cosmy Assistant як шар сервісу навколо замовлень: від статусу до відгуку — всередині Telegram.',
        items: [
          'Історія замовлень: товар, статус, сума',
          'Запити до служби підтримки прямо в боті',
          'Рейтинги та відгуки після отримання послуги',
          'Інтеграція з Google Sheets для автозбереження даних',
          'Швидкі відповіді в робочий час',
          'Сценарій, що тримає клієнта в зручному каналі після покупки',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          '400+ клієнтів і на 40% вища зацікавленість завдяки зручному управлінню замовленнями, підтримці та збору відгуків у Telegram.',
      },
    },
    en: {
      breadcrumbLabel: 'Cosmy',
      seoTitle: 'Cosmy case: Telegram bot for online store',
      heroTitle: 'Cosmy — Telegram bot for an online store',
      heroLead:
        'Cosmy Assistant helps customers manage orders in Telegram: order history, support, ratings and reviews. Google Sheets automation delivered 400+ clients and +40% engagement.',
      visitSite: 'Open bot',
      stats: [
        { value: '400+', label: 'clients' },
        { value: '+40%', label: 'engagement growth' },
        { value: '24/7', label: 'support channel' },
        { value: '5★', label: 'ratings & reviews' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Project challenge: Cosmy',
        lead:
          'The store needed a post-purchase channel: order status, support and feedback without manual messenger routine.',
        items: [
          'Clients needed order history and details in the bot',
          'Direct support requests were required',
          'Ratings and reviews had to live in one place',
          'Data had to sync automatically to Google Sheets',
          'Support needed fast replies during business hours',
          'Automation had to raise engagement without growing headcount',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Solution built for Cosmy',
        lead:
          'We built Cosmy Assistant as a service layer around orders — from status to review — inside Telegram.',
        items: [
          'Order history: product, status, total',
          'Support requests directly in the bot',
          'Ratings and reviews after delivery',
          'Google Sheets integration for auto-saving data',
          'Fast replies during business hours',
          'A journey that keeps the client in one convenient channel',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          '400+ clients and 40% higher engagement thanks to clear order management, support and reviews in Telegram.',
      },
    },
    pl: {
      breadcrumbLabel: 'Cosmy',
      seoTitle: 'Case Cosmy: bot Telegram dla sklepu',
      heroTitle: 'Cosmy — bot Telegram dla sklepu internetowego',
      heroLead:
        'Cosmy Assistant pomaga klientom zarządzać zamówieniami w Telegram: historia, wsparcie, oceny i opinie. Automatyzacja Google Sheets — 400+ klientów i +40% zaangażowania.',
      visitSite: 'Otwórz bota',
      stats: [
        { value: '400+', label: 'klientów' },
        { value: '+40%', label: 'wzrost zaangażowania' },
        { value: '24/7', label: 'kanał wsparcia' },
        { value: '5★', label: 'oceny i opinie' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Wyzwanie projektu Cosmy',
        lead:
          'Sklepowi potrzebny był kanał po zakupie: status, wsparcie i feedback bez ręcznej rutyny w komunikatorach.',
        items: [
          'Historia i szczegóły zamówień w bocie',
          'Bezpośrednie zgłoszenia do supportu',
          'Oceny i opinie w jednym miejscu',
          'Automatyczny zapis do Google Sheets',
          'Szybkie odpowiedzi w godzinach pracy',
          'Automatyzacja bez wzrostu zespołu',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Rozwiązanie dla Cosmy',
        lead: 'Cosmy Assistant jako warstwa serwisu wokół zamówień — od statusu do opinii — w Telegram.',
        items: [
          'Historia zamówień: produkt, status, kwota',
          'Zgłoszenia do supportu w bocie',
          'Oceny i opinie po usłudze',
          'Integracja Google Sheets',
          'Szybkie odpowiedzi w godzinach pracy',
          'Jedna wygodna ścieżka po zakupie',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          '400+ klientów i o 40% wyższe zaangażowanie dzięki wygodnemu zarządzaniu zamówieniami i wsparciu w Telegram.',
      },
    },
    ru: {
      breadcrumbLabel: 'Cosmy',
      seoTitle: 'Кейс Cosmy: Telegram-бот для магазина',
      heroTitle: 'Cosmy — Telegram-бот для интернет-магазина',
      heroLead:
        'Cosmy Assistant помогает клиентам управлять заказами в Telegram: история, поддержка, рейтинги и отзывы. Автоматизация через Google Sheets — 400+ клиентов и +40% вовлечённости.',
      visitSite: 'Открыть бота',
      stats: [
        { value: '400+', label: 'клиентов' },
        { value: '+40%', label: 'рост вовлечённости' },
        { value: '24/7', label: 'канал поддержки' },
        { value: '5★', label: 'рейтинг и отзывы' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Задача проекта Cosmy',
        lead:
          'Магазину нужен был канал после покупки: статус заказа, поддержка и обратная связь без ручной рутины.',
        items: [
          'История и детали заказов в боте',
          'Прямые обращения в поддержку',
          'Рейтинги и отзывы в одном месте',
          'Автосохранение в Google Sheets',
          'Быстрые ответы в рабочее время',
          'Автоматизация без роста штата',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Решение для Cosmy',
        lead: 'Cosmy Assistant как сервисный слой вокруг заказов — от статуса до отзыва — в Telegram.',
        items: [
          'История заказов: товар, статус, сумма',
          'Запросы в поддержку прямо в боте',
          'Рейтинги и отзывы после услуги',
          'Интеграция с Google Sheets',
          'Быстрые ответы в рабочее время',
          'Единый удобный канал после покупки',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          '400+ клиентов и на 40% выше вовлечённость благодаря удобному управлению заказами и поддержке в Telegram.',
      },
    },
  }),
};

const dente: CaseStudyDefinition = {
  id: 'dente',
  mainImage: '/portfolio/portfolio-dente.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Denté',
      seoTitle: 'Кейс Denté: сайт стоматологічної клініки',
      heroTitle: 'Denté — сайт стоматологічної клініки під довіру й запис',
      heroLead:
        'Сучасний сайт для стоматологічної клініки з акцентом на довіру та конверсію: преміальний дизайн, логічна структура, зручний запис на консультацію, адаптивність і швидке завантаження.',
      visitSite: 'Обговорити подібний проєкт',
      stats: [
        { value: '1', label: 'фокус на довірі' },
        { value: '↑', label: 'шлях до запису' },
        { value: '1', label: 'адаптив для всіх пристроїв' },
        { value: '↑', label: 'швидке завантаження' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Завдання проєкту Denté',
        lead:
          'Клініці потрібен був сайт, який одразу демонструє професіоналізм і веде пацієнта до запису — без хаосу в структурі й слабкого першого враження.',
        items: [
          'Дизайн мав виглядати преміально й викликати довіру',
          'Структура сторінки мала бути логічною й зрозумілою',
          'Запис на консультацію мав бути простим',
          'Потрібна була повна адаптивність',
          'Швидкість завантаження не могла гальмувати конверсію',
          'Кожен блок мав допомагати зробити перший крок до візиту',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Розробка рішення для Denté',
        lead:
          'Зібрали сайт клініки як інструмент залучення пацієнтів: імідж, послуги, лікарі й чіткий CTA на запис.',
        items: [
          'Чистий преміальний дизайн під сегмент стоматології',
          'Логічна структура: послуги, команда, шлях до запису',
          'Зручна форма / CTA на консультацію',
          'Повна адаптивність під мобільні пристрої',
          'Оптимізація швидкості завантаження',
          'Блоки, що ведуть від знайомства з клінікою до заявки',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Клініка отримала сайт, який підсилює імідж бренду, показує професіоналізм команди та ефективніше перетворює відвідувачів на нових пацієнтів.',
      },
    },
    en: {
      breadcrumbLabel: 'Denté',
      seoTitle: 'Denté case: dental clinic website',
      heroTitle: 'Denté — dental clinic site built for trust and bookings',
      heroLead:
        'A modern clinic website focused on trust and conversion: premium design, clear structure, easy consultation booking, full responsiveness and fast load times.',
      visitSite: 'Discuss a similar project',
      stats: [
        { value: '1', label: 'trust-first design' },
        { value: '↑', label: 'path to booking' },
        { value: '1', label: 'responsive on all devices' },
        { value: '↑', label: 'fast page load' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Project challenge: Denté',
        lead:
          'The clinic needed a site that signals professionalism immediately and guides patients to book — without a messy structure or a weak first impression.',
        items: [
          'Design had to feel premium and trustworthy',
          'Page structure had to stay clear',
          'Booking a consultation had to be simple',
          'Full responsiveness was required',
          'Load speed could not hurt conversion',
          'Every block had to push toward the first visit',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Solution built for Denté',
        lead:
          'We built the clinic site as a patient-acquisition tool: brand image, services, doctors and a clear booking CTA.',
        items: [
          'Clean premium design for dental care',
          'Logical structure: services, team, path to booking',
          'Simple consultation CTA / form',
          'Full mobile responsiveness',
          'Load-speed optimization',
          'Blocks that move visitors from discovery to inquiry',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'The clinic got a site that strengthens brand image, shows team professionalism and converts visitors into new patients more effectively.',
      },
    },
    pl: {
      breadcrumbLabel: 'Denté',
      seoTitle: 'Case Denté: strona kliniki stomatologicznej',
      heroTitle: 'Denté — strona kliniki stomatologicznej pod zaufanie i zapis',
      heroLead:
        'Nowoczesna strona kliniki z naciskiem na zaufanie i konwersję: premium design, jasna struktura, wygodny zapis, responsywność i szybkie ładowanie.',
      visitSite: 'Omów podobny projekt',
      stats: [
        { value: '1', label: 'fokus na zaufaniu' },
        { value: '↑', label: 'ścieżka do zapisu' },
        { value: '1', label: 'pełna responsywność' },
        { value: '↑', label: 'szybkie ładowanie' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Wyzwanie projektu Denté',
        lead:
          'Klinice potrzebna była strona, która od razu pokazuje profesjonalizm i prowadzi do zapisu — bez chaosu w strukturze.',
        items: [
          'Premium design budujący zaufanie',
          'Logiczna struktura strony',
          'Prosty zapis na konsultację',
          'Pełna responsywność',
          'Szybkość bez hamowania konwersji',
          'Każdy blok prowadzi do pierwszej wizyty',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Rozwiązanie dla Denté',
        lead: 'Strona kliniki jako narzędzie pozyskania pacjentów: wizerunek, usługi, lekarze i jasne CTA.',
        items: [
          'Czysty premium design',
          'Struktura: usługi, zespół, zapis',
          'Wygodne CTA / formularz',
          'Pełna responsywność',
          'Optymalizacja szybkości',
          'Bloki od poznania kliniki do zgłoszenia',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Klinika dostała stronę, która wzmacnia wizerunek, pokazuje profesjonalizm zespołu i skuteczniej zamienia odwiedzających w pacjentów.',
      },
    },
    ru: {
      breadcrumbLabel: 'Denté',
      seoTitle: 'Кейс Denté: сайт стоматологической клиники',
      heroTitle: 'Denté — сайт стоматологической клиники под доверие и запись',
      heroLead:
        'Современный сайт клиники с акцентом на доверие и конверсию: премиальный дизайн, логичная структура, удобная запись, адаптивность и быстрая загрузка.',
      visitSite: 'Обсудить похожий проект',
      stats: [
        { value: '1', label: 'фокус на доверии' },
        { value: '↑', label: 'путь к записи' },
        { value: '1', label: 'адаптив для всех устройств' },
        { value: '↑', label: 'быстрая загрузка' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Задача проекта Denté',
        lead:
          'Клинике нужен был сайт, который сразу показывает профессионализм и ведёт к записи — без хаоса в структуре.',
        items: [
          'Премиальный дизайн и доверие',
          'Логичная структура страницы',
          'Простая запись на консультацию',
          'Полная адаптивность',
          'Скорость без ущерба конверсии',
          'Каждый блок ведёт к первому визиту',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Решение для Denté',
        lead: 'Сайт клиники как инструмент привлечения пациентов: имидж, услуги, врачи и чёткий CTA.',
        items: [
          'Чистый премиальный дизайн',
          'Структура: услуги, команда, запись',
          'Удобное CTA / форма',
          'Полная адаптивность',
          'Оптимизация скорости',
          'Блоки от знакомства к заявке',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Клиника получила сайт, который усиливает имидж бренда, показывает профессионализм команды и эффективнее превращает посетителей в пациентов.',
      },
    },
  }),
};

const royalAcademy: CaseStudyDefinition = {
  id: 'royal-academy',
  liveUrl: 'https://www.royalacademyschool.in.ua/',
  mainImage: '/portfolio/portfolio-royal-academy.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Royal Academy',
      seoTitle: 'Кейс Royal Academy: сайт школи',
      heroTitle: 'Royal Academy School — сайт школи з сильним першим екраном',
      heroLead:
        'Сайт школи з акцентом на перше враження: яскравий дизайн, зрозуміла структура, продумані CTA, адаптивність і швидке завантаження. Кожен блок допомагає знайти інформацію й залишити заявку на навчання.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '↑', label: 'сильний перший екран' },
        { value: '1', label: 'шлях до реєстрації' },
        { value: '1', label: 'адаптив під усі пристрої' },
        { value: '↑', label: 'швидкі сторінки' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Завдання проєкту Royal Academy',
        lead:
          'Школі потрібен був цифровий фасад, який одразу викликає довіру й мотивує до реєстрації — без плутанини в програмах і слабких закликів до дії.',
        items: [
          'Перший екран мав задавати рівень бренду',
          'Структура мала швидко вести до потрібної інформації',
          'CTA мали бути помітними й зрозумілими',
          'Сайт мав добре працювати на мобільних',
          'Швидкість не мала відштовхувати батьків і учнів',
          'Програма навчання мала презентуватись переконливо',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Розробка рішення для Royal Academy',
        lead:
          'Зібрали сайт школи як воронку довіри: від першого враження до заявки на навчання.',
        items: [
          'Яскравий дизайн і сильне перше враження',
          'Зрозуміла структура розділів і програм',
          'Продумані CTA на ключових рівнях сторінки',
          'Повна адаптивність',
          'Оптимізація швидкості завантаження',
          'Блоки, що ведуть до рішення про реєстрацію',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Школа отримала сайт, який підсилює довіру до бренду, демонструє програму навчання та мотивує залишити заявку.',
      },
    },
    en: {
      breadcrumbLabel: 'Royal Academy',
      seoTitle: 'Royal Academy case: school website',
      heroTitle: 'Royal Academy School — school site with a strong hero',
      heroLead:
        'A school website built for first impression: vivid design, clear structure, thoughtful CTAs, responsiveness and fast pages. Every block helps visitors find answers and apply.',
      visitSite: 'Visit site',
      stats: [
        { value: '↑', label: 'strong first screen' },
        { value: '1', label: 'path to enrollment' },
        { value: '1', label: 'responsive on all devices' },
        { value: '↑', label: 'fast pages' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Project challenge: Royal Academy',
        lead:
          'The school needed a digital front that builds trust fast and motivates enrollment — without confusing programs or weak calls to action.',
        items: [
          'The first screen had to set brand level',
          'Structure had to surface key info quickly',
          'CTAs had to be clear and visible',
          'Mobile experience had to stay strong',
          'Speed could not push parents or students away',
          'The learning program had to feel convincing',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Solution built for Royal Academy',
        lead: 'We built the school site as a trust funnel: from first impression to application.',
        items: [
          'Vivid design and a strong first impression',
          'Clear structure for sections and programs',
          'Thoughtful CTAs across page levels',
          'Full responsiveness',
          'Load-speed optimization',
          'Blocks that drive the enrollment decision',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'The school got a site that strengthens brand trust, presents the program clearly and motivates applications.',
      },
    },
    pl: {
      breadcrumbLabel: 'Royal Academy',
      seoTitle: 'Case Royal Academy: strona szkoły',
      heroTitle: 'Royal Academy School — strona szkoły z mocnym hero',
      heroLead:
        'Strona szkoły pod pierwsze wrażenie: wyrazisty design, jasna struktura, CTA, responsywność i szybkość. Każdy blok prowadzi do informacji i zgłoszenia.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '↑', label: 'mocny pierwszy ekran' },
        { value: '1', label: 'ścieżka do rejestracji' },
        { value: '1', label: 'pełna responsywność' },
        { value: '↑', label: 'szybkie strony' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Wyzwanie projektu Royal Academy',
        lead:
          'Szkole potrzebna była cyfrowa wizytówka, która buduje zaufanie i motywuje do rejestracji — bez chaosu w programach.',
        items: [
          'Pierwszy ekran na poziomie marki',
          'Szybki dostęp do kluczowych informacji',
          'Wyraźne CTA',
          'Dobre mobile UX',
          'Szybkość bez odpychania użytkowników',
          'Przekonująca prezentacja programu',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Rozwiązanie dla Royal Academy',
        lead: 'Strona szkoły jako lejek zaufania: od pierwszego wrażenia do zgłoszenia.',
        items: [
          'Wyrazisty design',
          'Jasna struktura programów',
          'CTA na kluczowych poziomach',
          'Pełna responsywność',
          'Optymalizacja szybkości',
          'Bloki prowadzące do rejestracji',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Szkoła dostała stronę, która wzmacnia zaufanie, pokazuje program i motywuje do zostawienia zgłoszenia.',
      },
    },
    ru: {
      breadcrumbLabel: 'Royal Academy',
      seoTitle: 'Кейс Royal Academy: сайт школы',
      heroTitle: 'Royal Academy School — сайт школы с сильным первым экраном',
      heroLead:
        'Сайт школы с акцентом на первое впечатление: яркий дизайн, понятная структура, CTA, адаптивность и быстрая загрузка.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '↑', label: 'сильный первый экран' },
        { value: '1', label: 'путь к регистрации' },
        { value: '1', label: 'адаптив для всех устройств' },
        { value: '↑', label: 'быстрые страницы' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Задача проекта Royal Academy',
        lead:
          'Школе нужен был цифровой фасад, который быстро вызывает доверие и мотивирует к регистрации.',
        items: [
          'Первый экран на уровне бренда',
          'Быстрый доступ к ключевой информации',
          'Понятные CTA',
          'Сильный mobile UX',
          'Скорость без отталкивания аудитории',
          'Убедительная презентация программы',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Решение для Royal Academy',
        lead: 'Сайт школы как воронка доверия: от первого впечатления до заявки.',
        items: [
          'Яркий дизайн',
          'Понятная структура программ',
          'CTA на ключевых уровнях',
          'Полная адаптивность',
          'Оптимизация скорости',
          'Блоки, ведущие к регистрации',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Школа получила сайт, который усиливает доверие к бренду, показывает программу обучения и мотивирует оставить заявку.',
      },
    },
  }),
};

const kreona: CaseStudyDefinition = {
  id: 'kreona',
  liveUrl: 'https://kreona.net/uk',
  mainImage: '/portfolio/portfolio-kreona.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'KREONA',
      seoTitle: 'Кейс KREONA: підбір і доставка авто',
      heroTitle: 'KREONA — сайт підбору й доставки авто зі світу',
      heroLead:
        'Сучасний сайт для компанії, що підбирає й доставляє автомобілі зі США, Канади, Європи та Кореї. Зрозумілий шлях клієнта: від знайомства з компанією до заявки на підбір авто.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '4', label: 'ринки: США, Канада, ЄС, Корея' },
        { value: '1', label: 'каталог авто' },
        { value: '↑', label: 'форми захоплення лідів' },
        { value: '1', label: 'швидкий адаптивний сайт' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Завдання проєкту KREONA',
        lead:
          'Компанії з міжнародного автопідбору потрібен був сайт, який пояснює процес і знімає бар’єр до заявки — без перевантаженої структури.',
        items: [
          'Клієнт мав швидко зрозуміти, чим займається компанія',
          'Потрібен був каталог і детальні сторінки авто',
          'Форми лідів мали стояти на правильних кроках шляху',
          'Структура мала вести від знайомства до заявки',
          'Сайт мав бути швидким і адаптивним',
          'Міжнародний характер бізнесу мав читатись одразу',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Розробка рішення для KREONA',
        lead:
          'Зібрали швидкий сайт із каталогом, детальними картками й продуманими точками захоплення лідів.',
        items: [
          'Позиціонування компанії з міжнародного підбору авто',
          'Каталог і детальні сторінки автомобілів',
          'Форми заявок на ключових етапах',
          'Зрозуміла структура шляху клієнта',
          'Адаптивна верстка й швидке завантаження',
          'Акцент на довірі до процесу підбору та доставки',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Швидкий адаптивний сайт із каталогом, детальними сторінками та формами лідів — зрозумілий шлях від першого візиту до заявки на підбір авто.',
      },
    },
    en: {
      breadcrumbLabel: 'KREONA',
      seoTitle: 'KREONA case: car sourcing & delivery',
      heroTitle: 'KREONA — car sourcing & delivery website',
      heroLead:
        'A modern site for a company that sources and delivers cars from the US, Canada, Europe and Korea. A clear client path: from first visit to a sourcing request.',
      visitSite: 'Visit site',
      stats: [
        { value: '4', label: 'markets: US, CA, EU, Korea' },
        { value: '1', label: 'vehicle catalog' },
        { value: '↑', label: 'lead capture forms' },
        { value: '1', label: 'fast responsive site' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Project challenge: KREONA',
        lead:
          'An international car-sourcing company needed a site that explains the process and lowers the barrier to inquiry — without an overloaded structure.',
        items: [
          'Visitors had to grasp the offer quickly',
          'A catalog and detailed car pages were required',
          'Lead forms had to sit on the right path steps',
          'Structure had to lead from discovery to inquiry',
          'The site had to stay fast and responsive',
          'The international nature of the business had to read immediately',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Solution built for KREONA',
        lead: 'We built a fast site with a catalog, detailed cards and thoughtful lead-capture points.',
        items: [
          'Clear positioning for international car sourcing',
          'Catalog and detailed vehicle pages',
          'Lead forms on key journey steps',
          'A clear client-path structure',
          'Responsive layout and fast load',
          'Trust messaging around sourcing and delivery',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'A fast responsive site with a catalog, detail pages and lead forms — a clear path from first visit to a car-sourcing request.',
      },
    },
    pl: {
      breadcrumbLabel: 'KREONA',
      seoTitle: 'Case KREONA: dobór i dostawa aut',
      heroTitle: 'KREONA — strona doboru i dostawy aut ze świata',
      heroLead:
        'Nowoczesna strona firmy, która dobiera i dostarcza auta z USA, Kanady, Europy i Korei. Jasna ścieżka: od poznania firmy do zgłoszenia na dobór.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '4', label: 'rynki: USA, CA, EU, Korea' },
        { value: '1', label: 'katalog aut' },
        { value: '↑', label: 'formularze leadów' },
        { value: '1', label: 'szybka responsywna strona' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Wyzwanie projektu KREONA',
        lead:
          'Firmie z międzynarodowego doboru aut potrzebna była strona, która tłumaczy proces i obniża barierę zgłoszenia.',
        items: [
          'Szybkie zrozumienie oferty',
          'Katalog i szczegółowe karty aut',
          'Formularze na właściwych krokach',
          'Ścieżka od poznania do zgłoszenia',
          'Szybkość i responsywność',
          'Międzynarodowy charakter widoczny od razu',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Rozwiązanie dla KREONA',
        lead: 'Szybka strona z katalogiem, szczegółowymi kartami i punktami przejmowania leadów.',
        items: [
          'Pozycjonowanie międzynarodowego doboru',
          'Katalog i karty aut',
          'Formularze na kluczowych etapach',
          'Jasna struktura ścieżki klienta',
          'Responsywność i szybkie ładowanie',
          'Zaufanie do procesu dostawy',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Szybka responsywna strona z katalogiem i formularzami — jasna ścieżka od wizyty do zgłoszenia na dobór auta.',
      },
    },
    ru: {
      breadcrumbLabel: 'KREONA',
      seoTitle: 'Кейс KREONA: подбор и доставка авто',
      heroTitle: 'KREONA — сайт подбора и доставки авто из мира',
      heroLead:
        'Современный сайт компании, которая подбирает и доставляет автомобили из США, Канады, Европы и Кореи. Понятный путь: от знакомства до заявки на подбор.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '4', label: 'рынки: США, Канада, ЕС, Корея' },
        { value: '1', label: 'каталог авто' },
        { value: '↑', label: 'формы захвата лидов' },
        { value: '1', label: 'быстрый адаптивный сайт' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Задача проекта KREONA',
        lead:
          'Компании международного автоподбора нужен был сайт, который объясняет процесс и снижает барьер до заявки.',
        items: [
          'Быстро понять предложение компании',
          'Каталог и детальные страницы авто',
          'Формы лидов на нужных шагах',
          'Путь от знакомства к заявке',
          'Скорость и адаптивность',
          'Международный характер бизнеса с первого экрана',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Решение для KREONA',
        lead: 'Быстрый сайт с каталогом, детальными карточками и точками захвата лидов.',
        items: [
          'Позиционирование международного подбора',
          'Каталог и детальные страницы',
          'Формы на ключевых этапах',
          'Понятная структура пути клиента',
          'Адаптив и быстрая загрузка',
          'Доверие к процессу доставки',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Быстрый адаптивный сайт с каталогом и формами лидов — понятный путь от первого визита до заявки на подбор авто.',
      },
    },
  }),
};

const zavadska: CaseStudyDefinition = {
  id: 'zavadska',
  liveUrl: 'https://www.anastasiiazavadska.com/',
  mainImage: '/portfolio/portfolio-zavadska.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Anastasiia Zavadska',
      seoTitle: 'Кейс Zavadska: сайт психологині',
      heroTitle: 'Anastasiia Zavadska — сайт психологині під довіру й запис',
      heroLead:
        'Сучасний сайт для психологині, який вибудовує довіру ще до першої консультації: спокійний дизайн, зручна навігація, акцент на експертності, практикумі та онлайн-записі.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '1', label: 'особистий бренд експерта' },
        { value: '↑', label: 'шлях до першої сесії' },
        { value: '1', label: 'онлайн-запис' },
        { value: '↑', label: 'адаптив і швидкість' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Завдання проєкту Anastasiia Zavadska',
        lead:
          'Практиці потрібен був цифровий простір, де клієнт бачить підхід і експертність до дзвінка — і спокійно записується на сесію.',
        items: [
          'Дизайн мав бути спокійним і професійним',
          'Потрібно було підкреслити експертність і підхід до терапії',
          'Навігація мала вести до запису без тертя',
          'Онлайн-запис мав бути зручним',
          'Сайт мав добре працювати на будь-якому пристрої',
          'Особистий бренд мав звучати цілісно',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Розробка рішення для Anastasiia Zavadska',
        lead:
          'Зібрали сайт практики як інструмент довіри: експертність, формати роботи й чіткий шлях до першої сесії.',
        items: [
          'Спокійний мінімалістичний дизайн',
          'Акцент на експертності та практикумі',
          'Зручна навігація й структура',
          'Онлайн-запис на консультацію',
          'Повна адаптивність і швидке завантаження',
          'Презентація підходу до терапії для першого контакту',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Анастасія отримала сайт, який професійно презентує практику, підсилює особистий бренд і мотивує записатися на першу сесію.',
      },
    },
    en: {
      breadcrumbLabel: 'Anastasiia Zavadska',
      seoTitle: 'Zavadska case: psychologist website',
      heroTitle: 'Anastasiia Zavadska — psychologist site for trust & booking',
      heroLead:
        'A modern psychologist website that builds trust before the first session: calm design, clear navigation, expertise focus, practice presentation and online booking.',
      visitSite: 'Visit site',
      stats: [
        { value: '1', label: 'expert personal brand' },
        { value: '↑', label: 'path to first session' },
        { value: '1', label: 'online booking' },
        { value: '↑', label: 'responsive + fast' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Project challenge: Anastasiia Zavadska',
        lead:
          'The practice needed a digital space where clients see the approach and expertise before any call — and book a session calmly.',
        items: [
          'Design had to feel calm and professional',
          'Expertise and therapy approach needed emphasis',
          'Navigation had to lead to booking without friction',
          'Online booking had to stay simple',
          'The site had to work on every device',
          'The personal brand had to feel coherent',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Solution built for Anastasiia Zavadska',
        lead:
          'We built the practice site as a trust tool: expertise, formats and a clear path to the first session.',
        items: [
          'Calm minimal design',
          'Focus on expertise and practice',
          'Clear navigation and structure',
          'Online consultation booking',
          'Full responsiveness and fast load',
          'Therapy approach presented for first contact',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'Anastasiia got a site that presents the practice professionally, strengthens personal brand and motivates booking the first session.',
      },
    },
    pl: {
      breadcrumbLabel: 'Anastasiia Zavadska',
      seoTitle: 'Case Zavadska: strona psycholożki',
      heroTitle: 'Anastasiia Zavadska — strona psycholożki: zaufanie i zapis',
      heroLead:
        'Nowoczesna strona psycholożki, która buduje zaufanie przed pierwszą konsultacją: spokojny design, jasna nawigacja, eksperckość i online-zapis.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '1', label: 'marka osobista ekspertki' },
        { value: '↑', label: 'ścieżka do pierwszej sesji' },
        { value: '1', label: 'online-zapis' },
        { value: '↑', label: 'responsywność i szybkość' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Wyzwanie projektu Anastasiia Zavadska',
        lead:
          'Praktyce potrzebna była przestrzeń, gdzie klient widzi podejście i eksperckość przed rozmową — i spokojnie zapisuje się na sesję.',
        items: [
          'Spokojny, profesjonalny design',
          'Podkreślenie eksperckości i podejścia',
          'Nawigacja do zapisu bez tarcia',
          'Wygodny online-zapis',
          'Działanie na każdym urządzeniu',
          'Spójna marka osobista',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Rozwiązanie dla Anastasiia Zavadska',
        lead: 'Strona praktyki jako narzędzie zaufania: eksperckość, formaty i jasna ścieżka do sesji.',
        items: [
          'Spokojny minimalistyczny design',
          'Akcent na eksperckość i praktykę',
          'Wygodna nawigacja',
          'Online-zapis na konsultację',
          'Pełna responsywność i szybkość',
          'Prezentacja podejścia do terapii',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Anastasiia dostała stronę, która profesjonalnie prezentuje praktykę, wzmacnia markę osobistą i motywuje do pierwszej sesji.',
      },
    },
    ru: {
      breadcrumbLabel: 'Anastasiia Zavadska',
      seoTitle: 'Кейс Zavadska: сайт психологини',
      heroTitle: 'Anastasiia Zavadska — сайт психологини под доверие и запись',
      heroLead:
        'Современный сайт для психологини, который выстраивает доверие до первой консультации: спокойный дизайн, удобная навигация, акцент на экспертности и онлайн-записи.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '1', label: 'личный бренд эксперта' },
        { value: '↑', label: 'путь к первой сессии' },
        { value: '1', label: 'онлайн-запись' },
        { value: '↑', label: 'адаптив и скорость' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Задача проекта Anastasiia Zavadska',
        lead:
          'Практике нужно было цифровое пространство, где клиент видит подход и экспертность до звонка — и спокойно записывается на сессию.',
        items: [
          'Спокойный профессиональный дизайн',
          'Акцент на экспертности и подходе',
          'Навигация к записи без трения',
          'Удобная онлайн-запись',
          'Работа на любом устройстве',
          'Цельный личный бренд',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Решение для Anastasiia Zavadska',
        lead: 'Сайт практики как инструмент доверия: экспертность, форматы и путь к первой сессии.',
        items: [
          'Спокойный минималистичный дизайн',
          'Акцент на экспертности и практике',
          'Удобная навигация',
          'Онлайн-запись на консультацию',
          'Полная адаптивность и быстрая загрузка',
          'Презентация подхода к терапии',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Анастасия получила сайт, который профессионально презентует практику, усиливает личный бренд и мотивирует записаться на первую сессию.',
      },
    },
  }),
};

const wesauto: CaseStudyDefinition = {
  id: 'wesauto',
  liveUrl: 'https://westautousa.com.ua/',
  mainImage: '/portfolio/portfolio-wesauto.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'West Auto',
      seoTitle: 'Кейс West Auto: пригін авто зі США',
      heroTitle: 'West Auto Shipping — сайт пригону авто зі США',
      heroLead:
        'Сайт для компанії з пригону автомобілів зі США з головною перевагою: 70% оплати лише після прибуття авто в Україну. Структура веде через етапи співпраці, кейси, відеовідгуки та форми заявок.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '70%', label: 'оплати після прибуття в Україну' },
        { value: '↑', label: 'кейси та відеовідгуки' },
        { value: '1', label: 'форми захоплення заявок' },
        { value: '↑', label: 'прозорий шлях клієнта' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Завдання проєкту West Auto',
        lead:
          'У ніші пригону авто зі США довіра вирішує все. Компанії потрібен був сайт, який одразу пояснює головну перевагу й проводить клієнта через прозорий процес.',
        items: [
          'Ключова перевага 70% після прибуття мала бути в центрі',
          'Етапи співпраці мали читатись послідовно',
          'Потрібні були реальні кейси та відеовідгуки',
          'Форми заявок — на правильних кроках',
          'Сайт мав бути швидким і адаптивним',
          'Процес покупки мав виглядати прозоро й безпечно',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Розробка рішення для West Auto',
        lead:
          'Побудували сайт як інструмент довіри: перевага, процес, докази й чіткий шлях до заявки на підбір.',
        items: [
          'Акцент на 70% оплати після прибуття авто в Україну',
          'Структура етапів співпраці',
          'Блоки з реальними кейсами',
          'Відеовідгуки клієнтів',
          'Форми захоплення заявок',
          'Повна адаптивність і висока швидкість завантаження',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Компанія отримала сайт, який підсилює довіру, демонструє прозорість процесу, презентує ключові переваги та мотивує залишити заявку на підбір авто.',
      },
    },
    en: {
      breadcrumbLabel: 'West Auto',
      seoTitle: 'West Auto case: US car import site',
      heroTitle: 'West Auto Shipping — US car import website',
      heroLead:
        'A website for a US car import company with a core advantage: 70% payment only after the car arrives in Ukraine. The structure walks through the process, cases, video reviews and lead forms.',
      visitSite: 'Visit site',
      stats: [
        { value: '70%', label: 'paid after arrival in Ukraine' },
        { value: '↑', label: 'cases & video reviews' },
        { value: '1', label: 'lead capture forms' },
        { value: '↑', label: 'transparent client path' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Project challenge: West Auto',
        lead:
          'In US car import, trust decides everything. The company needed a site that explains the main advantage upfront and walks clients through a transparent process.',
        items: [
          'The 70% after-arrival offer had to sit center stage',
          'Cooperation stages had to read sequentially',
          'Real cases and video reviews were required',
          'Lead forms had to sit on the right steps',
          'The site had to stay fast and responsive',
          'The purchase process had to feel transparent and safe',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Solution built for West Auto',
        lead:
          'We built the site as a trust tool: advantage, process, proof and a clear path to a sourcing request.',
        items: [
          'Focus on 70% payment after arrival in Ukraine',
          'Structured cooperation stages',
          'Real project case blocks',
          'Client video reviews',
          'Lead capture forms',
          'Full responsiveness and fast load times',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'The company got a site that strengthens trust, shows process transparency, presents key advantages and motivates sourcing requests.',
      },
    },
    pl: {
      breadcrumbLabel: 'West Auto',
      seoTitle: 'Case West Auto: import aut z USA',
      heroTitle: 'West Auto Shipping — strona sprowadzania aut z USA',
      heroLead:
        'Strona firmy sprowadzającej auta z USA z główną przewagą: 70% płatności dopiero po przyjeździe auta do Ukrainy. Proces, case’y, video-opinie i formularze.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '70%', label: 'płatności po przyjeździe do UA' },
        { value: '↑', label: 'case’y i video-opinie' },
        { value: '1', label: 'formularze leadów' },
        { value: '↑', label: 'przejrzysta ścieżka klienta' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Wyzwanie projektu West Auto',
        lead:
          'W niszy sprowadzania aut z USA zaufanie decyduje o wszystkim. Potrzebna była strona, która od razu tłumaczy przewagę i prowadzi przez transparentny proces.',
        items: [
          '70% po przyjeździe w centrum przekazu',
          'Etapy współpracy czytelne po kolei',
          'Prawdziwe case’y i video-opinie',
          'Formularze na właściwych krokach',
          'Szybkość i responsywność',
          'Proces zakupu bezpieczny i przejrzysty',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Rozwiązanie dla West Auto',
        lead: 'Strona jako narzędzie zaufania: przewaga, proces, dowody i ścieżka do zgłoszenia.',
        items: [
          'Akcent na 70% po przyjeździe do Ukrainy',
          'Struktura etapów współpracy',
          'Bloki z realnymi case’ami',
          'Video-opinie klientów',
          'Formularze przejmowania leadów',
          'Pełna responsywność i szybkość',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Firma dostała stronę, która wzmacnia zaufanie, pokazuje przejrzystość procesu i motywuje do zgłoszenia na dobór auta.',
      },
    },
    ru: {
      breadcrumbLabel: 'West Auto',
      seoTitle: 'Кейс West Auto: пригон авто из США',
      heroTitle: 'West Auto Shipping — сайт пригона авто из США',
      heroLead:
        'Сайт компании по пригону авто из США с главным преимуществом: 70% оплаты только после прибытия авто в Украину. Структура ведёт через этапы, кейсы, видеоотзывы и формы заявок.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '70%', label: 'оплаты после прибытия в Украину' },
        { value: '↑', label: 'кейсы и видеоотзывы' },
        { value: '1', label: 'формы захвата заявок' },
        { value: '↑', label: 'прозрачный путь клиента' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Задача проекта West Auto',
        lead:
          'В нише пригона авто из США доверие решает всё. Нужен был сайт, который сразу объясняет главное преимущество и проводит через прозрачный процесс.',
        items: [
          '70% после прибытия — в центре коммуникации',
          'Этапы сотрудничества по порядку',
          'Реальные кейсы и видеоотзывы',
          'Формы заявок на нужных шагах',
          'Скорость и адаптивность',
          'Процесс покупки прозрачный и безопасный',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Решение для West Auto',
        lead: 'Сайт как инструмент доверия: преимущество, процесс, доказательства и путь к заявке.',
        items: [
          'Акцент на 70% оплаты после прибытия в Украину',
          'Структура этапов сотрудничества',
          'Блоки с реальными кейсами',
          'Видеоотзывы клиентов',
          'Формы захвата заявок',
          'Полная адаптивность и высокая скорость',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Компания получила сайт, который усиливает доверие, показывает прозрачность процесса и мотивирует оставить заявку на подбор авто.',
      },
    },
  }),
};

const normalnoauto: CaseStudyDefinition = {
  id: 'normalnoauto',
  liveUrl: 'https://t.me/NormalnoAutoBot',
  mainImage: '/portfolio/portfolio-normalnoauto.jpg',
  portfolioCategory: 'chatbots',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'Normalno Auto',
      seoTitle: 'Бот підбору авто Normalno Auto',
      heroTitle: 'Normalno Auto — бот підбору авто на аукціонах США',
      heroLead:
        'AutoSearchBot знаходить ідеальне авто на аукціонах Copart і IAAI прямо в Telegram: параметри → миттєвий підбір → заявка менеджеру за два кліки. Замість годин пошуку — 30 секунд і готовий лід.',
      visitSite: 'Відкрити бота',
      stats: [
        { value: '30с', label: 'на підбір замість годин' },
        { value: '2', label: 'аукціони: Copart, IAAI' },
        { value: '2', label: 'кліки до заявки' },
        { value: '↑', label: 'автокваліфікація лідів' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Завдання проєкту Normalno Auto',
        lead:
          'Пошук авто на аукціонах США займає години: лоти, фільтри, історія. Бізнесу потрібен був канал, який дає релевантні варіанти за секунди й передає гарячі заявки менеджеру.',
        items: [
          'Клієнт не мав витрачати години на ручний пошук лотів',
          'Потрібен був швидкий старт із параметрами: марка, модель, рік, пробіг, бюджет',
          'Бот мав аналізувати актуальну базу Copart і IAAI',
          'Варіанти — з фото, характеристиками та історією',
          'Заявка мала йти менеджеру автоматично',
          'Ліди мали кваліфікуватись без втрати заявок',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Розробка рішення для Normalno Auto',
        lead:
          'Зібрали Telegram-бота підбору: від параметрів пошуку до автоматичної передачі заявки менеджеру.',
        items: [
          'Швидкий старт: параметри авто в кілька кроків',
          'Миттєвий підбір з актуальної бази аукціонів США',
          'Картки варіантів із фото, характеристиками та історією',
          'Заявка за два кліки з збереженням контактів',
          'Автопередача запиту менеджеру',
          'Зворотний зв’язок клієнту протягом хвилини',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Замість годинного пошуку — 30 секунд на вибір авто. Замість втраченої заявки — автоматичний лід, готовий до покупки, з мінімальним бар’єром входу й високою конверсією.',
      },
    },
    en: {
      breadcrumbLabel: 'Normalno Auto',
      seoTitle: 'Normalno Auto car search bot',
      heroTitle: 'Normalno Auto — US auction car search bot',
      heroLead:
        'AutoSearchBot finds the right car on Copart and IAAI inside Telegram: set filters → instant matches → manager lead in two taps. Hours of searching become 30 seconds and a ready lead.',
      visitSite: 'Open bot',
      stats: [
        { value: '30s', label: 'to match instead of hours' },
        { value: '2', label: 'auctions: Copart, IAAI' },
        { value: '2', label: 'taps to request' },
        { value: '↑', label: 'auto lead qualification' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Project challenge: Normalno Auto',
        lead:
          'Searching US auctions takes hours: lots, filters, history. The business needed a channel that returns relevant options in seconds and passes hot leads to a manager.',
        items: [
          'Clients should not spend hours browsing lots manually',
          'Fast start with make, model, year, mileage and budget',
          'The bot had to scan live Copart and IAAI data',
          'Options needed photos, specs and history',
          'Requests had to reach managers automatically',
          'Leads had to be qualified without dropping inquiries',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Solution built for Normalno Auto',
        lead:
          'We built a Telegram sourcing bot: from search parameters to automatic manager handoff.',
        items: [
          'Fast start with car parameters in a few steps',
          'Instant matches from live US auction data',
          'Option cards with photos, specs and history',
          'Two-tap request with contact capture',
          'Automatic handoff to a manager',
          'Client feedback within a minute',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'Instead of hours of searching — 30 seconds to pick a car. Instead of a lost inquiry — an automatic lead ready to buy, with a low entry barrier and high conversion.',
      },
    },
    pl: {
      breadcrumbLabel: 'Normalno Auto',
      seoTitle: 'Bot doboru aut Normalno Auto',
      heroTitle: 'Normalno Auto — bot doboru aut z aukcji USA',
      heroLead:
        'AutoSearchBot znajduje auto na Copart i IAAI w Telegram: parametry → natychmiastowy dobór → lead do managera w dwa kliknięcia.',
      visitSite: 'Otwórz bota',
      stats: [
        { value: '30s', label: 'na dobór zamiast godzin' },
        { value: '2', label: 'aukcje: Copart, IAAI' },
        { value: '2', label: 'kliknięcia do zgłoszenia' },
        { value: '↑', label: 'autokwalifikacja leadów' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Wyzwanie projektu Normalno Auto',
        lead:
          'Szukanie aut na aukcjach USA zajmuje godziny. Potrzebny był kanał, który daje trafne opcje w sekundy i przekazuje gorące leady managerowi.',
        items: [
          'Klient bez godzin ręcznego przeglądania',
          'Szybki start: marka, model, rok, przebieg, budżet',
          'Analiza bazy Copart i IAAI',
          'Opcje ze zdjęciami, parametrami i historią',
          'Automatyczne przekazanie zgłoszenia',
          'Kwalifikacja leadów bez utraty zapytań',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Rozwiązanie dla Normalno Auto',
        lead: 'Bot Telegram do doboru: od parametrów wyszukiwania po automatyczny handoff do managera.',
        items: [
          'Szybki start z parametrami auta',
          'Natychmiastowy dobór z aukcji USA',
          'Karty opcji ze zdjęciami i historią',
          'Zgłoszenie w dwa kliknięcia',
          'Auto-przekazanie do managera',
          'Feedback dla klienta w ciągu minuty',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'Zamiast godzinnego szukania — 30 sekund na wybór. Zamiast utraconego zapytania — automatyczny lead gotowy do zakupu.',
      },
    },
    ru: {
      breadcrumbLabel: 'Normalno Auto',
      seoTitle: 'Бот подбора авто Normalno Auto',
      heroTitle: 'Normalno Auto — бот подбора авто на аукционах США',
      heroLead:
        'AutoSearchBot находит авто на Copart и IAAI в Telegram: параметры → мгновенный подбор → заявка менеджеру в два клика.',
      visitSite: 'Открыть бота',
      stats: [
        { value: '30с', label: 'на подбор вместо часов' },
        { value: '2', label: 'аукционы: Copart, IAAI' },
        { value: '2', label: 'клика до заявки' },
        { value: '↑', label: 'автоквалификация лидов' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Задача проекта Normalno Auto',
        lead:
          'Поиск авто на аукционах США занимает часы. Нужен был канал, который за секунды выдаёт релевантные варианты и передаёт горячие заявки менеджеру.',
        items: [
          'Клиент без часов ручного поиска лотов',
          'Быстрый старт: марка, модель, год, пробег, бюджет',
          'Анализ базы Copart и IAAI',
          'Варианты с фото, характеристиками и историей',
          'Автопередача заявки менеджеру',
          'Квалификация лидов без потери заявок',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Решение для Normalno Auto',
        lead: 'Telegram-бот подбора: от параметров поиска до автоматической передачи менеджеру.',
        items: [
          'Быстрый старт с параметрами авто',
          'Мгновенный подбор с аукционов США',
          'Карточки с фото, характеристиками и историей',
          'Заявка в два клика',
          'Автопередача менеджеру',
          'Обратная связь клиенту в течение минуты',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'Вместо часового поиска — 30 секунд на выбор авто. Вместо потерянной заявки — автоматический лид, готовый к покупке.',
      },
    },
  }),
};

const litunEdu: CaseStudyDefinition = {
  id: 'litun-edu',
  liveUrl: 'https://www.consultlitun.com/',
  mainImage: '/portfolio/portfolio-litun-edu.jpg',
  portfolioCategory: 'websites',
  copy: withRelated({
    uk: {
      breadcrumbLabel: 'TURBO EDUCATION',
      seoTitle: 'Кейс TURBO EDUCATION: освітня екосистема',
      heroTitle: 'TURBO EDUCATION — сайт Іллі Літуна та освітньої екосистеми',
      heroLead:
        'Сайт особистого бренду Іллі Літуна та TURBO EDUCATION з акцентом на експертність, соціальний доказ і зручну презентацію форматів співпраці. Мінімалізм і швидкість тримають фокус на цінності продукту та записі на консультацію.',
      visitSite: 'Відкрити сайт',
      stats: [
        { value: '1', label: 'особистий бренд + EdTech' },
        { value: '↑', label: 'соціальний доказ' },
        { value: '1', label: 'формати співпраці' },
        { value: '↑', label: 'шлях до консультації' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Завдання проєкту TURBO EDUCATION',
        lead:
          'Освітній бренд потребував сайту, який одразу показує масштаб і експертність — і веде до консультації або вибору формату співпраці.',
        items: [
          'Потрібно було посилити особистий бренд експерта',
          'Досягнення й соціальний доказ мали бути видимими',
          'Формати співпраці мали презентуватись зрозуміло',
          'Дизайн мав лишатись мінімалістичним і сфокусованим',
          'Адаптив і швидкість — без компромісів',
          'Головна дія — запис на консультацію',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Розробка рішення для TURBO EDUCATION',
        lead:
          'Зібрали сайт як вітрину експертності й освітньої екосистеми з чітким шляхом до контакту.',
        items: [
          'Сильне позиціонування Іллі Літуна та TURBO EDUCATION',
          'Блоки соціального доказу й досягнень',
          'Зрозуміла презентація форматів співпраці',
          'Мінімалістичний дизайн без зайвого шуму',
          'Адаптивна верстка й швидке завантаження',
          'CTA на консультацію та вибір формату',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'TURBO EDUCATION отримали сайт, який підсилює особистий бренд, демонструє масштаб освітнього проєкту, формує довіру через досягнення й мотивує записатися на консультацію.',
      },
    },
    en: {
      breadcrumbLabel: 'TURBO EDUCATION',
      seoTitle: 'TURBO EDUCATION case: education ecosystem',
      heroTitle: 'TURBO EDUCATION — Illia Litun brand & education site',
      heroLead:
        'A site for Illia Litun’s personal brand and TURBO EDUCATION focused on expertise, social proof and clear collaboration formats. Minimal design and speed keep attention on value and booking a consult.',
      visitSite: 'Visit site',
      stats: [
        { value: '1', label: 'personal brand + EdTech' },
        { value: '↑', label: 'social proof' },
        { value: '1', label: 'collaboration formats' },
        { value: '↑', label: 'path to consult' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Project challenge: TURBO EDUCATION',
        lead:
          'The education brand needed a site that shows scale and expertise immediately — and leads to a consult or a collaboration format.',
        items: [
          'Strengthen the expert personal brand',
          'Make achievements and social proof visible',
          'Present collaboration formats clearly',
          'Keep design minimal and focused',
          'No compromise on responsiveness or speed',
          'Primary action: book a consultation',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Solution built for TURBO EDUCATION',
        lead:
          'We built the site as a showcase of expertise and the education ecosystem with a clear path to contact.',
        items: [
          'Strong positioning for Illia Litun and TURBO EDUCATION',
          'Social proof and achievement blocks',
          'Clear presentation of collaboration formats',
          'Minimal design without noise',
          'Responsive layout and fast load',
          'CTAs for consultation and format choice',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Result',
        text:
          'TURBO EDUCATION got a site that strengthens personal brand, shows project scale, builds trust through achievements and motivates booking a consult.',
      },
    },
    pl: {
      breadcrumbLabel: 'TURBO EDUCATION',
      seoTitle: 'Case TURBO EDUCATION: ekosystem edukacyjny',
      heroTitle: 'TURBO EDUCATION — strona Illi Lituna i edukacji',
      heroLead:
        'Strona marki osobistej Illi Lituna i TURBO EDUCATION z naciskiem na eksperckość, social proof i jasne formaty współpracy.',
      visitSite: 'Otwórz stronę',
      stats: [
        { value: '1', label: 'marka osobista + EdTech' },
        { value: '↑', label: 'social proof' },
        { value: '1', label: 'formaty współpracy' },
        { value: '↑', label: 'ścieżka do konsultacji' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Wyzwanie projektu TURBO EDUCATION',
        lead:
          'Marce edukacyjnej potrzebna była strona, która od razu pokazuje skalę i eksperckość — i prowadzi do konsultacji lub wyboru formatu.',
        items: [
          'Wzmocnienie marki osobistej eksperta',
          'Widoczne osiągnięcia i social proof',
          'Jasne formaty współpracy',
          'Minimalistyczny, skupiony design',
          'Responsywność i szybkość',
          'Główna akcja: zapis na konsultację',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Rozwiązanie dla TURBO EDUCATION',
        lead: 'Strona jako witryna eksperckości i ekosystemu edukacyjnego z jasną ścieżką do kontaktu.',
        items: [
          'Silne pozycjonowanie Illi Lituna i TURBO EDUCATION',
          'Bloki social proof i osiągnięć',
          'Jasna prezentacja formatów współpracy',
          'Minimalistyczny design',
          'Responsywność i szybkie ładowanie',
          'CTA na konsultację i wybór formatu',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Efekt',
        text:
          'TURBO EDUCATION dostało stronę, która wzmacnia markę osobistą, pokazuje skalę projektu i motywuje do konsultacji.',
      },
    },
    ru: {
      breadcrumbLabel: 'TURBO EDUCATION',
      seoTitle: 'Кейс TURBO EDUCATION: образовательная экосистема',
      heroTitle: 'TURBO EDUCATION — сайт Ильи Литуна и его экосистемы',
      heroLead:
        'Сайт личного бренда Ильи Литуна и TURBO EDUCATION с акцентом на экспертность, социальное доказательство и удобную презентацию форматов сотрудничества.',
      visitSite: 'Открыть сайт',
      stats: [
        { value: '1', label: 'личный бренд + EdTech' },
        { value: '↑', label: 'социальное доказательство' },
        { value: '1', label: 'форматы сотрудничества' },
        { value: '↑', label: 'путь к консультации' },
      ],
      challenge: {
        eyebrow: '/ CHALLENGE',
        title: 'Задача проекта TURBO EDUCATION',
        lead:
          'Образовательному бренду нужен был сайт, который сразу показывает масштаб и экспертность — и ведёт к консультации или выбору формата.',
        items: [
          'Усилить личный бренд эксперта',
          'Сделать достижения и social proof видимыми',
          'Понятно презентовать форматы сотрудничества',
          'Минималистичный сфокусированный дизайн',
          'Адаптив и скорость без компромиссов',
          'Главное действие — запись на консультацию',
        ],
      },
      solution: {
        eyebrow: '/ SOLUTION',
        title: 'Решение для TURBO EDUCATION',
        lead: 'Сайт как витрина экспертности и образовательной экосистемы с чётким путём к контакту.',
        items: [
          'Сильное позиционирование Ильи Литуна и TURBO EDUCATION',
          'Блоки social proof и достижений',
          'Понятная презентация форматов сотрудничества',
          'Минималистичный дизайн',
          'Адаптив и быстрая загрузка',
          'CTA на консультацию и выбор формата',
        ],
      },
      outcome: {
        eyebrow: '/ OUTCOME',
        title: 'Результат',
        text:
          'TURBO EDUCATION получили сайт, который усиливает личный бренд, показывает масштаб проекта и мотивирует записаться на консультацию.',
      },
    },
  }),
};

export const MORE_CASE_STUDIES: Record<string, CaseStudyDefinition> = {
  [cosmy.id]: cosmy,
  [dente.id]: dente,
  [royalAcademy.id]: royalAcademy,
  [kreona.id]: kreona,
  [zavadska.id]: zavadska,
  [wesauto.id]: wesauto,
  [normalnoauto.id]: normalnoauto,
  [litunEdu.id]: litunEdu,
};
