import { Language } from '@/components/translations';

export type OfferCaseCard = {
  id: string;
  niche: string;
  task: string;
  solution: string;
  result: string;
};

export type OfferPageCopy = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  breadcrumb: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroCta: string;
  heroNote: string;
  riskTitle: string;
  riskLead: string;
  riskPoints: string[];
  riskBeamOn: string;
  riskBeamOff: string;
  painTitle: string;
  painItems: string[];
  freeTitle: string;
  freeLead: string;
  freeSteps: Array<{ title: string; text: string; badge: string }>;
  priceTitle: string;
  priceLead: string;
  priceAmount: string;
  priceItems: string[];
  priceNote: string;
  casesTitle: string;
  cases: OfferCaseCard[];
  whoTitle: string;
  whoText: string;
  whoLink: string;
  faqTitle: string;
  faqItems: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;
  ctaNote: string;
  formName: string;
  formNamePlaceholder: string;
  formAbout: string;
  formAboutPlaceholder: string;
  formSubmit: string;
  formTelegram: string;
  formSuccess: string;
};

const uk: OfferPageCopy = {
  metaTitle: 'Сайт за $200 — безкоштовна консультація та прототип сайту | TeleBots',
  metaDescription:
    'Покажемо як виглядатиме ваш сайт ще до оплати. Безкоштовна консультація + прототип сайту. Якщо подобається — доробимо за $200 за 5 робочих днів.',
  metaKeywords:
    'сайт за 200 доларів, безкоштовний прототип сайту, розробка сайту МСБ, лендінг Next.js, TeleBots',
  breadcrumb: 'Пропозиція $200',
  heroEyebrow: 'Звичайна пропозиція',
  heroTitle: 'Покажемо як виглядатиме ваш сайт — ще до оплати',
  heroLead:
    'Безкоштовна консультація + прототип сайту. Якщо подобається — доробимо за $200. Отримаєш робочий сайт з головною протягом 2 днів і зрозумієш результат ще до будь-якої передоплати.',
  heroCta: 'Отримати безкоштовний прототип',
  heroNote: 'Без передоплати. Без зобовʼязань.',
  riskTitle: 'Що якщо не сподобається?',
  riskLead:
    'Головний страх МСБ: «Заплачу — і отримаю не те». Закриваємо одразу: спочатку бачиш прототип — потім платиш. Ніякого кота в мішку.',
  riskPoints: [
    'Спочатку консультація і прототип сайту',
    'Платиш лише якщо прототип підходить',
    'Не сподобалось — просто не замовляєш',
  ],
  riskBeamOn: 'Увімкнути світло',
  riskBeamOff: 'Вимкнути світло',
  painTitle: 'Знайоме?',
  painItems: [
    'Фрілансер пообіцяв — зник.',
    'Агенція зробила на шаблоні за $800.',
    'Сайт є, але соромно показувати.',
    'Не знаю скільки коштує і що в підсумку отримаю.',
  ],
  freeTitle: 'Два кроки — безкоштовно',
  freeLead: 'Без «загальних слів» — конкретний результат на руках.',
  freeSteps: [
    {
      badge: '01 · Free',
      title: 'Консультація — 30 хв',
      text: 'Обговорюємо задачу, структуру, конкурентів. Фіксуємо що має робити сайт і для кого.',
    },
    {
      badge: '02 · Free',
      title: 'Прототип сайту',
      text: 'Робочий сайт: головна сторінка + 1–2 секції, адаптив. Відкриваєш у браузері — бачиш результат до оплати.',
    },
  ],
  priceTitle: 'Що входить у $200',
  priceLead: 'Без прихованих доплат — усе що є в ціні, вказано тут.',
  priceAmount: '$200',
  priceItems: [
    'Next.js або статика',
    'SEO-базис',
    'Повний адаптив',
    'Форма заявки',
    'Підключення до CRM або Telegram',
    '5 робочих днів',
    '1 раунд правок',
  ],
  priceNote: 'Після затвердження прототипу — фіксована ціна, фіксований склад.',
  casesTitle: 'Схожі проєкти',
  cases: [
    {
      id: 'butenko-fit',
      niche: 'Особистий бренд · фітнес',
      task: 'Передати вайб експертки і чітко вести до запису на програми.',
      solution: 'Багатосторінковий сайт: окремі сторінки програм, повітря, якісні фото.',
      result: 'Продаж курсів 24/7 без шаблонного вигляду',
    },
    {
      id: 'zavadska',
      niche: 'Психолог · особистий бренд',
      task: 'Вибудувати довіру ще до першої сесії і спростити запис.',
      solution: 'Спокійний дизайн, акцент на експертності, онлайн-запис.',
      result: 'Чіткий шлях до першої консультації',
    },
    {
      id: 'newlineschool',
      niche: 'Освіта · школа англійської',
      task: 'Зробити сайт каналом лідогенерації, а не візитівкою.',
      solution: 'Форми на пробні уроки, тест рівня, SEO-блог, чистий код.',
      result: 'Інструмент під Ads і органіку',
    },
  ],
  whoTitle: 'Хто робить',
  whoText:
    'TeleBots: 200+ проєктів, 4 роки. Next.js / Figma / Telegram. Робимо сайти, які можна показувати клієнтам без пояснень «це ще шаблон».',
  whoLink: 'Повне портфоліо',
  faqTitle: 'FAQ',
  faqItems: [
    {
      question: 'Чи можна на $200 зробити нормальний сайт?',
      answer:
        'Так — якщо скоуп чіткий: лендінг або невеликий сайт із зафіксованим складом. Саме тому спочатку робимо прототип: бачиш обсяг і результат до оплати.',
    },
    {
      question: 'Скільки часу займе прототип?',
      answer:
        'Зазвичай протягом 2 днів після короткої консультації. Отримаєш робочий сайт — головну + 1–2 ключові секції, можна відкрити в браузері.',
    },
    {
      question: 'Що якщо не сподобається?',
      answer:
        'Не замовляєш доробку. Прототип і консультація безкоштовні й без зобовʼязань — платиш лише коли сайт підходить.',
    },
    {
      question: 'Чи є підтримка після запуску?',
      answer:
        'Так. Можна підключити подальші правки, розвиток або супровід окремо — після запуску домовимось про формат, який потрібен саме тобі.',
    },
    {
      question: 'Що потрібно від мене на старті?',
      answer:
        'Коротко: хто клієнт, яка мета сайту, посилання на конкурентів або референси. Решту розберемо на 30-хвилинній консультації.',
    },
  ],
  ctaTitle: 'Отримати безкоштовний прототип',
  ctaLead: 'Залиш імʼя і коротко про сайт — або напиши в Telegram.',
  ctaButton: 'Отримати безкоштовний прототип',
  ctaNote: 'Без передоплати. Без зобовʼязань. Прототип отримаєш протягом 2 днів.',
  formName: 'Імʼя',
  formNamePlaceholder: 'Як до вас звертатись',
  formAbout: 'Коротко про сайт',
  formAboutPlaceholder: 'Ніша, мета, що вже є',
  formSubmit: 'Надіслати',
  formTelegram: 'Написати в Telegram',
  formSuccess: 'Заявку надіслано. Відповімо найближчим часом.',
};

const en: OfferPageCopy = {
  metaTitle: 'Website for $200 — free consult + site prototype | TeleBots',
  metaDescription:
    'See how your site will look before you pay. Free consultation + live site prototype. If you like it — we finish it for $200 in 5 business days.',
  metaKeywords: 'website for 200 dollars, free site prototype, SMB website, Next.js landing, TeleBots',
  breadcrumb: '$200 offer',
  heroEyebrow: 'Standard offer',
  heroTitle: 'See how your website will look — before you pay',
  heroLead:
    'Free consultation + live site prototype. If you like it — we finish it for $200. You get a working homepage within 2 days and know the result before any deposit.',
  heroCta: 'Get a free prototype',
  heroNote: 'No deposit. No commitment.',
  riskTitle: 'What if I don’t like it?',
  riskLead:
    'The #1 SMB fear: “I pay — and get the wrong thing.” We close it upfront: you see the prototype first, then you pay. No pig in a poke.',
  riskPoints: [
    'First: consult + live site prototype',
    'You pay only if the prototype fits',
    'Don’t like it — simply don’t order',
  ],
  riskBeamOn: 'Turn light on',
  riskBeamOff: 'Turn light off',
  painTitle: 'Sound familiar?',
  painItems: [
    'Freelancer promised — then vanished.',
    'Agency shipped a $800 template.',
    'There is a site, but it’s embarrassing to share.',
    'I don’t know the price or what I’ll get.',
  ],
  freeTitle: 'Two steps — free',
  freeLead: 'No vague promises — a concrete result in your hands.',
  freeSteps: [
    {
      badge: '01 · Free',
      title: 'Consultation — 30 min',
      text: 'We discuss the goal, structure and competitors. We define what the site must do and for whom.',
    },
    {
      badge: '02 · Free',
      title: 'Site prototype',
      text: 'A working site: homepage + 1–2 sections, responsive. Open it in the browser — see the result before payment.',
    },
  ],
  priceTitle: 'What’s in $200',
  priceLead: 'No hidden add-ons — everything in the price is listed here.',
  priceAmount: '$200',
  priceItems: [
    'Next.js or static',
    'SEO basics',
    'Full responsive',
    'Lead form',
    'CRM or Telegram connection',
    '5 business days',
    '1 revision round',
  ],
  priceNote: 'After prototype approval — fixed price, fixed scope.',
  casesTitle: 'Similar projects',
  cases: [
    {
      id: 'butenko-fit',
      niche: 'Personal brand · fitness',
      task: 'Carry the expert vibe and guide visitors to program bookings.',
      solution: 'Multi-page site: program pages, breathing space, quality photos.',
      result: 'Course sales 24/7 without a template look',
    },
    {
      id: 'zavadska',
      niche: 'Psychologist · personal brand',
      task: 'Build trust before the first session and simplify booking.',
      solution: 'Calm design, expertise focus, online booking.',
      result: 'Clear path to the first consultation',
    },
    {
      id: 'newlineschool',
      niche: 'Education · English school',
      task: 'Turn the site into a lead channel, not a brochure.',
      solution: 'Trial forms, level test, SEO blog, clean code.',
      result: 'A tool for Ads and organic growth',
    },
  ],
  whoTitle: 'Who builds it',
  whoText:
    'TeleBots: 200+ projects, 4 years. Next.js / Figma / Telegram. We build sites you can show clients without saying “it’s still a template.”',
  whoLink: 'Full portfolio',
  faqTitle: 'FAQ',
  faqItems: [
    {
      question: 'Can $200 produce a decent website?',
      answer:
        'Yes — with a clear scope: a landing or small site with a fixed package. That’s why we prototype first: you see scope and result before paying.',
    },
    {
      question: 'How long does the prototype take?',
      answer:
        'Usually within 2 days after a short consult. You get a working site — homepage + 1–2 key sections you can open in the browser.',
    },
    {
      question: 'What if I don’t like it?',
      answer:
        'You don’t order the full build. Prototype and consult are free and no-commitment — you pay only when the site fits.',
    },
    {
      question: 'Is there support after launch?',
      answer:
        'Yes. Further edits, growth or maintenance can be arranged separately after launch — in the format you need.',
    },
    {
      question: 'What do you need from me to start?',
      answer:
        'Briefly: who the client is, the site goal, competitor links or references. We’ll cover the rest in a 30-minute consult.',
    },
  ],
  ctaTitle: 'Get a free prototype',
  ctaLead: 'Leave your name and a short note about the site — or message on Telegram.',
  ctaButton: 'Get a free prototype',
  ctaNote: 'No deposit. No commitment. Prototype within 2 days.',
  formName: 'Name',
  formNamePlaceholder: 'How should we address you',
  formAbout: 'About the site',
  formAboutPlaceholder: 'Niche, goal, what exists now',
  formSubmit: 'Send',
  formTelegram: 'Message on Telegram',
  formSuccess: 'Request sent. We’ll reply soon.',
};

const pl: OfferPageCopy = {
  metaTitle: 'Strona za $200 — darmowa konsultacja i prototyp strony | TeleBots',
  metaDescription:
    'Zobacz, jak będzie wyglądać Twoja strona jeszcze przed płatnością. Darmowa konsultacja + prototyp strony. Jeśli pasuje — dokończymy za $200 w 5 dni roboczych.',
  metaKeywords: 'strona za 200 dolarów, darmowy prototyp strony, strona dla MŚP, landing Next.js, TeleBots',
  breadcrumb: 'Oferta $200',
  heroEyebrow: 'Standardowa oferta',
  heroTitle: 'Pokażemy, jak będzie wyglądać Twoja strona — przed płatnością',
  heroLead:
    'Darmowa konsultacja + prototyp strony. Jeśli pasuje — dokończymy za $200. Działającą stronę główną dostaniesz w ciągu 2 dni, zanim wpłacisz cokolwiek.',
  heroCta: 'Otrzymaj darmowy prototyp',
  heroNote: 'Bez przedpłaty. Bez zobowiązań.',
  riskTitle: 'A jeśli się nie spodoba?',
  riskLead:
    'Największy strach MŚP: „Zapłacę — i dostanę nie to”. Zamykamy od razu: najpierw widzisz prototyp — potem płacisz. Bez kota w worku.',
  riskPoints: [
    'Najpierw konsultacja i prototyp strony',
    'Płacisz tylko, gdy prototyp pasuje',
    'Nie pasuje — po prostu nie zamawiasz',
  ],
  riskBeamOn: 'Włącz światło',
  riskBeamOff: 'Wyłącz światło',
  painTitle: 'Znasz to?',
  painItems: [
    'Freelancer obiecał — zniknął.',
    'Agencja zrobiła szablon za $800.',
    'Strona jest, ale wstyd pokazywać.',
    'Nie wiem ile kosztuje i co dostanę.',
  ],
  freeTitle: 'Dwa kroki — za darmo',
  freeLead: 'Bez ogólników — konkretny wynik w ręku.',
  freeSteps: [
    {
      badge: '01 · Free',
      title: 'Konsultacja — 30 min',
      text: 'Omawiamy cel, strukturę i konkurencję. Ustalamy, co strona ma robić i dla kogo.',
    },
    {
      badge: '02 · Free',
      title: 'Prototyp strony',
      text: 'Działająca strona: strona główna + 1–2 sekcje, responsyw. Otwierasz w przeglądarce — widzisz efekt przed płatnością.',
    },
  ],
  priceTitle: 'Co wchodzi w $200',
  priceLead: 'Bez ukrytych dopłat — wszystko w cenie jest tu.',
  priceAmount: '$200',
  priceItems: [
    'Next.js lub statyka',
    'Podstawy SEO',
    'Pełna responsywność',
    'Formularz zgłoszeń',
    'Podłączenie do CRM lub Telegram',
    '5 dni roboczych',
    '1 runda poprawek',
  ],
  priceNote: 'Po akceptacji prototypu — stała cena, stały zakres.',
  casesTitle: 'Podobne projekty',
  cases: [
    {
      id: 'butenko-fit',
      niche: 'Marka osobista · fitness',
      task: 'Oddać vibe ekspertki i prowadzić do zapisu na programy.',
      solution: 'Wielostronicowa strona: osobne programy, powietrze, jakościowe zdjęcia.',
      result: 'Sprzedaż kursów 24/7 bez wyglądu szablonu',
    },
    {
      id: 'zavadska',
      niche: 'Psycholog · marka osobista',
      task: 'Zbudować zaufanie przed pierwszą sesją i uprościć zapis.',
      solution: 'Spokojny design, nacisk na ekspertyzę, zapis online.',
      result: 'Wyraźna ścieżka do pierwszej konsultacji',
    },
    {
      id: 'newlineschool',
      niche: 'Edukacja · szkoła angielskiego',
      task: 'Zrobić ze strony kanał leadów, nie wizytówkę.',
      solution: 'Formy lekcji próbnych, test poziomu, blog SEO, czysty kod.',
      result: 'Narzędzie pod Ads i organic',
    },
  ],
  whoTitle: 'Kto robi',
  whoText:
    'TeleBots: 200+ projektów, 4 lata. Next.js / Figma / Telegram. Robimy strony, które można pokazać klientom bez tłumaczenia „to jeszcze szablon”.',
  whoLink: 'Pełne portfolio',
  faqTitle: 'FAQ',
  faqItems: [
    {
      question: 'Czy za $200 da się zrobić normalną stronę?',
      answer:
        'Tak — przy jasnym zakresie: landing lub mała strona ze stałym pakietem. Dlatego najpierw prototyp: widzisz zakres i wynik przed płatnością.',
    },
    {
      question: 'Ile trwa prototyp?',
      answer:
        'Zwykle w ciągu 2 dni po krótkiej konsultacji. Dostajesz działającą stronę — stronę główną + 1–2 kluczowe sekcje, do otwarcia w przeglądarce.',
    },
    {
      question: 'A jeśli się nie spodoba?',
      answer:
        'Nie zamawiasz dokończenia. Prototyp i konsultacja są darmowe i bez zobowiązań — płacisz dopiero, gdy strona pasuje.',
    },
    {
      question: 'Czy jest wsparcie po starcie?',
      answer:
        'Tak. Dalsze poprawki, rozwój lub opiekę można ustalić osobno po uruchomieniu — w formacie, którego potrzebujesz.',
    },
    {
      question: 'Czego potrzebujecie na start?',
      answer:
        'Krótko: kto jest klientem, jaki cel strony, linki do konkurencji lub referencje. Resztę omówimy na 30-minutowej konsultacji.',
    },
  ],
  ctaTitle: 'Otrzymaj darmowy prototyp',
  ctaLead: 'Zostaw imię i krótko o stronie — albo napisz na Telegram.',
  ctaButton: 'Otrzymaj darmowy prototyp',
  ctaNote: 'Bez przedpłaty. Bez zobowiązań. Prototyp w ciągu 2 dni.',
  formName: 'Imię',
  formNamePlaceholder: 'Jak się do Ciebie zwracać',
  formAbout: 'Krótko o stronie',
  formAboutPlaceholder: 'Nisza, cel, co już jest',
  formSubmit: 'Wyślij',
  formTelegram: 'Napisz na Telegram',
  formSuccess: 'Zgłoszenie wysłane. Odpowiemy wkrótce.',
};

const ru: OfferPageCopy = {
  metaTitle: 'Сайт за $200 — бесплатная консультация и прототип сайта | TeleBots',
  metaDescription:
    'Покажем, как будет выглядеть ваш сайт ещё до оплаты. Бесплатная консультация + прототип сайта. Если нравится — доработаем за $200 за 5 рабочих дней.',
  metaKeywords: 'сайт за 200 долларов, бесплатный прототип сайта, сайт для МСБ, лендинг Next.js, TeleBots',
  breadcrumb: 'Предложение $200',
  heroEyebrow: 'Обычное предложение',
  heroTitle: 'Покажем, как будет выглядеть ваш сайт — ещё до оплаты',
  heroLead:
    'Бесплатная консультация + прототип сайта. Если нравится — доработаем за $200. Рабочий сайт с главной получите за 2 дня и поймёте результат до любой предоплаты.',
  heroCta: 'Получить бесплатный прототип',
  heroNote: 'Без предоплаты. Без обязательств.',
  riskTitle: 'Что если не понравится?',
  riskLead:
    'Главный страх МСБ: «Заплачу — и получу не то». Закрываем сразу: сначала видишь прототип — потом платишь. Никакого кота в мешке.',
  riskPoints: [
    'Сначала консультация и прототип сайта',
    'Платишь только если прототип подходит',
    'Не понравилось — просто не заказываешь',
  ],
  riskBeamOn: 'Включить свет',
  riskBeamOff: 'Выключить свет',
  painTitle: 'Знакомо?',
  painItems: [
    'Фрилансер пообещал — пропал.',
    'Агентство сделало на шаблоне за $800.',
    'Сайт есть, но стыдно показывать.',
    'Не знаю сколько стоит и что в итоге получу.',
  ],
  freeTitle: 'Два шага — бесплатно',
  freeLead: 'Без «общих слов» — конкретный результат на руках.',
  freeSteps: [
    {
      badge: '01 · Free',
      title: 'Консультация — 30 мин',
      text: 'Обсуждаем задачу, структуру, конкурентов. Фиксируем, что должен делать сайт и для кого.',
    },
    {
      badge: '02 · Free',
      title: 'Прототип сайта',
      text: 'Рабочий сайт: главная + 1–2 секции, адаптив. Открываешь в браузере — видишь результат до оплаты.',
    },
  ],
  priceTitle: 'Что входит в $200',
  priceLead: 'Без скрытых доплат — всё что есть в цене, указано здесь.',
  priceAmount: '$200',
  priceItems: [
    'Next.js или статика',
    'SEO-базис',
    'Полный адаптив',
    'Форма заявки',
    'Подключение к CRM или Telegram',
    '5 рабочих дней',
    '1 раунд правок',
  ],
  priceNote: 'После утверждения прототипа — фиксированная цена, фиксированный состав.',
  casesTitle: 'Похожие проекты',
  cases: [
    {
      id: 'butenko-fit',
      niche: 'Личный бренд · фитнес',
      task: 'Передать вайб экспертки и вести к записи на программы.',
      solution: 'Многостраничный сайт: отдельные страницы программ, воздух, качественные фото.',
      result: 'Продажа курсов 24/7 без шаблонного вида',
    },
    {
      id: 'zavadska',
      niche: 'Психолог · личный бренд',
      task: 'Выстроить доверие до первой сессии и упростить запись.',
      solution: 'Спокойный дизайн, акцент на экспертности, онлайн-запись.',
      result: 'Чёткий путь к первой консультации',
    },
    {
      id: 'newlineschool',
      niche: 'Образование · школа английского',
      task: 'Сделать сайт каналом лидогенерации, а не визиткой.',
      solution: 'Формы на пробные уроки, тест уровня, SEO-блог, чистый код.',
      result: 'Инструмент под Ads и органику',
    },
  ],
  whoTitle: 'Кто делает',
  whoText:
    'TeleBots: 200+ проектов, 4 года. Next.js / Figma / Telegram. Делаем сайты, которые можно показывать клиентам без объяснений «это ещё шаблон».',
  whoLink: 'Полное портфолио',
  faqTitle: 'FAQ',
  faqItems: [
    {
      question: 'Можно ли на $200 сделать нормальный сайт?',
      answer:
        'Да — при чётком скоупе: лендинг или небольшой сайт с зафиксированным составом. Поэтому сначала прототип: видишь объём и результат до оплаты.',
    },
    {
      question: 'Сколько времени займёт прототип?',
      answer:
        'Обычно в течение 2 дней после короткой консультации. Получите рабочий сайт — главную + 1–2 ключевые секции, можно открыть в браузере.',
    },
    {
      question: 'Что если не понравится?',
      answer:
        'Не заказываете доработку. Прототип и консультация бесплатны и без обязательств — платите только когда сайт подходит.',
    },
    {
      question: 'Есть ли поддержка после запуска?',
      answer:
        'Да. Дальнейшие правки, развитие или сопровождение можно подключить отдельно после запуска — в нужном вам формате.',
    },
    {
      question: 'Что нужно от меня на старте?',
      answer:
        'Кратко: кто клиент, цель сайта, ссылки на конкурентов или референсы. Остальное разберём на 30-минутной консультации.',
    },
  ],
  ctaTitle: 'Получить бесплатный прототип',
  ctaLead: 'Оставьте имя и кратко о сайте — или напишите в Telegram.',
  ctaButton: 'Получить бесплатный прототип',
  ctaNote: 'Без предоплаты. Без обязательств. Прототип получите в течение 2 дней.',
  formName: 'Имя',
  formNamePlaceholder: 'Как к вам обращаться',
  formAbout: 'Кратко о сайте',
  formAboutPlaceholder: 'Ниша, цель, что уже есть',
  formSubmit: 'Отправить',
  formTelegram: 'Написать в Telegram',
  formSuccess: 'Заявку отправлено. Ответим в ближайшее время.',
};

export const offerPageCopy: Record<Language, OfferPageCopy> = { uk, en, pl, ru };

export const OFFER_TELEGRAM_URL = 'https://t.me/telebotsnowayrm';
export const OFFER_CASE_IDS = ['butenko-fit', 'zavadska', 'newlineschool'] as const;
