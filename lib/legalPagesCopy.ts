import type { Language } from '@/components/translations';

export type LegalDocId = 'privacy' | 'terms' | 'refund';

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocCopy = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const UPDATED = {
  uk: 'Оновлено 18 серпня 2026',
  en: 'Updated 18 August 2026',
  pl: 'Aktualizacja: 18 sierpnia 2026',
  ru: 'Обновлено 18 августа 2026',
} as const;

const uk: Record<LegalDocId, LegalDocCopy> = {
  privacy: {
    title: 'Політика конфіденційності',
    updated: UPDATED.uk,
    intro:
      'Ця політика пояснює, які персональні дані збирає TeleBots (ФОП Федонюк Роман Ігорович), навіщо вони потрібні і як довго зберігаються. Користуючись сайтом telebots.site або залишаючи заявку, ви підтверджуєте, що ознайомилися з цими правилами.',
    sections: [
      {
        title: 'Хто відповідає за дані',
        paragraphs: [
          'Контролер персональних даних — ФОП Федонюк Роман Ігорович, ЄДРПОУ 3831208275, м. Київ, Україна. З питань даних пишіть на roman.fedoniuk@gmail.com або телефонуйте +380960908006.',
        ],
      },
      {
        title: 'Які дані ми збираємо',
        paragraphs: [
          'Ми не продаємо бази контактів і не збираємо зайве. Дані з’являються лише тоді, коли ви самі їх залишаєте або коли сайт фіксує технічну статистику.',
        ],
        bullets: [
          'Заявки: ім’я, телефон, текст запиту, обрана послуга.',
          'Листування в Telegram, WhatsApp, email або за телефоном — те, що ви надсилаєте самі.',
          'Технічні дані: IP, тип пристрою, сторінки перегляду, джерело переходу (cookies / аналітика).',
        ],
      },
      {
        title: 'Навіщо обробляємо',
        paragraphs: ['Персональні дані потрібні лише для роботи з вашим запитом і покращення сайту.'],
        bullets: [
          'Відповісти на консультацію або заявку.',
          'Укласти й виконати договір / комерційну пропозицію.',
          'Надіслати рахунок, акт і матеріали проєкту.',
          'Зрозуміти, які сторінки працюють (анонімна аналітика).',
        ],
      },
      {
        title: 'Кому можемо передати',
        paragraphs: [
          'Дані не продаються. Передаємо лише підрядникам, без яких заявка або сайт не працюють: хостинг, форма заявок (Telegram), аналітика (Google Tag Manager, Microsoft Clarity, Plerdy). Платіжні реквізити, якщо ви платите через LiqPay / WayForPay / банк, обробляє відповідний провайдер — ми їх не зберігаємо на сайті.',
        ],
      },
      {
        title: 'Скільки зберігаємо',
        paragraphs: [
          'Заявки та листування по проєкту — поки потрібні для виконання робіт і бухгалтерського обліку (зазвичай до 3 років після завершення проєкту, якщо закон не вимагає довше). Дані аналітики зберігаються в інструментах постачальників згідно з їхніми політиками. Запит на видалення: roman.fedoniuk@gmail.com.',
        ],
      },
      {
        title: 'Ваші права',
        paragraphs: [
          'Ви можете запросити доступ до своїх даних, виправлення, видалення або обмеження обробки. Скарга щодо персональних даних — до Уповноваженого Верховної Ради України з прав людини. Відкликати згоду на розсилку чи аналітичні cookies можна, написавши нам або через налаштування браузера.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Сайт використовує необхідні cookies для роботи сторінки та аналітичні cookies (через GTM, Clarity, Plerdy), щоб бачити, як користуються сайтом. Це не рекламні профілі третіх мереж на кшталт персоналізованого ретаргетингу з наших форм. Блокування cookies у браузері не заважає залишити заявку вручну.',
        ],
      },
    ],
  },
  terms: {
    title: 'Умови надання послуг',
    updated: UPDATED.uk,
    intro:
      'Користуючись послугами TeleBots (далі — Виконавець), ви погоджуєтесь із цими умовами. Вони діють для розробки сайтів, Telegram-ботів, дизайну, парсерів та супутніх робіт, якщо в договорі чи комерційній пропозиції не зазначено інакше.',
    sections: [
      {
        title: 'Як приймається замовлення',
        paragraphs: [
          'Заявка з форми, Telegram, WhatsApp, email або телефону — це запит на консультацію, а не автоматичний договір. Обсяг, ціна, терміни й етапи фіксуються в комерційній пропозиції, рахунку або договорі. Типовий термін — від кількох днів до кількох місяців залежно від задачі. Якщо дедлайн змінюється, Виконавець повідомляє про це замовника.',
        ],
      },
      {
        title: 'Що входить у послугу',
        paragraphs: [
          'Склад робіт — лише те, що прямо узгоджено: наприклад лендінг, інтернет-магазин, чат-бот, інтеграція оплати чи CRM, дизайн. Ідеї «на потім», нові сторінки, редизайн після приймання й контент від замовника, якого не було в ТЗ, оцінюються окремо.',
        ],
      },
      {
        title: 'Оплата',
        paragraphs: [
          'Спосіб оплати узгоджується індивідуально: картка (Monobank, ПриватБанк тощо), рахунок IBAN, LiqPay / WayForPay / MonoPay, за домовленістю — криптовалюта. Зазвичай аванс перед стартом і решта після приймання; для більших проєктів — етапи. Ціни на сторінці «Ціни та орієнтири» є орієнтирами, а не публічною офертою. Офер «Сайт за $200» — окремий пакет із власними умовами на своїй сторінці.',
        ],
      },
      {
        title: 'Передача результату',
        paragraphs: [
          'Послуги цифрові. Результат передається доступом до сайту, бота, репозиторію, Figma чи файлів — email, хмара, посилання. Доставка вважається виконаною з моменту надання доступу, якщо інше не прописано. Хостинг і домен — за окремою домовленістю.',
        ],
      },
      {
        title: 'Обов’язки замовника',
        paragraphs: [
          'Замовник вчасно надає тексти, доступи, логотипи та фідбек. Затримка матеріалів зсуває термін. Відповідальність за законність контенту (зображення, персональні дані клієнтів замовника, права на бренд) лежить на замовнику.',
        ],
      },
      {
        title: 'Права на результат',
        paragraphs: [
          'Після повної оплати замовник отримує право користуватися зданим сайтом, ботом чи макетами для свого бізнесу. Чернетки, внутрішні бібліотеки та інструменти Виконавця не передаються, якщо це прямо не узгоджено.',
        ],
      },
      {
        title: 'Відповідальність',
        paragraphs: [
          'Виконавець не відповідає за збитки через рішення хостингу, месенджерів, платіжних систем чи зміну їхніх правил. Відповідальність Виконавця обмежується сумою, сплаченою за конкретний етап, у межах якого виникла претензія — якщо інше не вимагає закон.',
        ],
      },
      {
        title: 'Закон і спори',
        paragraphs: [
          'Застосовується законодавство України. Спори вирішуємо переговорами; якщо не вдалося — у суді за місцем реєстрації Виконавця. Зміни цих умов публікуються на цій сторінці; для вже узгоджених проєктів діє редакція на дату КП або договору.',
        ],
      },
    ],
  },
  refund: {
    title: 'Повернення коштів',
    updated: UPDATED.uk,
    intro:
      'TeleBots надає індивідуальні цифрові послуги (розробка, дизайн, налаштування), а не готові товари з полиці. Нижче — коли повернення можливе, а коли ні.',
    sections: [
      {
        title: 'Загальне правило',
        paragraphs: [
          'Після старту робіт (отримання ТЗ, макетів у роботу, написання коду, запуск прототипу) загального автоматичного повернення немає. Про це повідомляємо до оплати: на цій сторінці, в КП і під час консультації. Передплата покриває вже витрачений час, а не «бронювання слота».',
        ],
      },
      {
        title: 'До початку робіт',
        paragraphs: [
          'Якщо аванс надійшов, але Виконавець ще не почав роботу і сторони письмово скасували замовлення — кошти можна повернути за вирахуванням комісії платіжної системи, якщо вона вже списана і не повертається провайдером.',
        ],
      },
      {
        title: 'Офер «Сайт за $200»',
        paragraphs: [
          'Консультація та прототип безкоштовні й без зобов’язань. Оплата $200 — лише після того, як ви підтвердили прототип. Якщо прототип не підійшов, ви нічого не платите. Після оплати доробки пакету діє те саме правило, що й для інших індивідуальних робіт.',
        ],
      },
      {
        title: 'Винятки',
        paragraphs: [
          'Індивідуально розглядаємо повернення або безкоштовне виправлення, якщо Виконавець істотно порушив узгоджений обсяг, здав не той результат або не може завершити роботу з власної вини. Претензію опишіть листом на roman.fedoniuk@gmail.com: номер платежу, дату, що саме не виконано.',
        ],
      },
      {
        title: 'Як подати запит',
        paragraphs: [
          'Напишіть email, Telegram або зателефонуйте. Відповідаємо протягом 5 робочих днів. Якщо повернення погоджене, гроші йдуть тим самим каналом, яким була оплата (картка, IBAN, платіжна система), у строки цього каналу — зазвичай до 10 робочих днів після підтвердження.',
        ],
      },
    ],
  },
};

const en: Record<LegalDocId, LegalDocCopy> = {
  privacy: {
    title: 'Privacy Policy',
    updated: UPDATED.en,
    intro:
      'This policy explains what personal data TeleBots (FOP Fedoniuk Roman Ihorovych) collects, why, and how long it is kept. Using telebots.site or sending a request means you have read these rules.',
    sections: [
      {
        title: 'Who is responsible',
        paragraphs: [
          'The data controller is FOP Fedoniuk Roman Ihorovych, EDRPOU 3831208275, Kyiv, Ukraine. Privacy requests: roman.fedoniuk@gmail.com or +380960908006.',
        ],
      },
      {
        title: 'What we collect',
        paragraphs: ['We do not sell contact lists. Data appears only when you provide it or when the site records technical stats.'],
        bullets: [
          'Requests: name, phone, message, selected service.',
          'Messages you send via Telegram, WhatsApp, email or phone.',
          'Technical data: IP, device type, pages viewed, referrer (cookies / analytics).',
        ],
      },
      {
        title: 'Why we process it',
        paragraphs: ['Personal data is used only to handle your request and improve the site.'],
        bullets: [
          'Reply to a consultation or order request.',
          'Agree and deliver a quote or contract.',
          'Send invoices and project files.',
          'See which pages work (anonymous analytics).',
        ],
      },
      {
        title: 'Who may receive data',
        paragraphs: [
          'We do not sell data. We share it only with processors the site needs: hosting, request delivery (Telegram), analytics (Google Tag Manager, Microsoft Clarity, Plerdy). Card payments via LiqPay / WayForPay / your bank are handled by that provider — we do not store card numbers on this site.',
        ],
      },
      {
        title: 'How long we keep it',
        paragraphs: [
          'Project requests and correspondence are kept while needed for delivery and accounting (typically up to 3 years after the project, unless law requires longer). Analytics follow the vendors’ retention rules. Deletion request: roman.fedoniuk@gmail.com.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'You may request access, correction, deletion or restriction. Complaints about personal data in Ukraine may be filed with the Ukrainian Parliament Commissioner for Human Rights. You can object to analytics cookies in your browser or by emailing us.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'The site uses necessary cookies to run pages and analytics cookies (GTM, Clarity, Plerdy) to understand usage. This is not a third-party ad profile built from our forms. Blocking cookies does not stop you from sending a request manually.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: UPDATED.en,
    intro:
      'By using TeleBots services (the Provider) you agree to these terms. They cover websites, Telegram bots, design, parsers and related work, unless a quote or contract says otherwise.',
    sections: [
      {
        title: 'How an order is accepted',
        paragraphs: [
          'A form, Telegram, WhatsApp, email or phone message is a consultation request, not an automatic contract. Scope, price, deadlines and stages are set in a quote, invoice or contract. Typical delivery is from a few days to several months. If a deadline changes, the Provider informs the client.',
        ],
      },
      {
        title: 'What is included',
        paragraphs: [
          'Only what was agreed: e.g. a landing page, store, chatbot, payment/CRM integration, design. Extra pages, post-acceptance redesign and missing client content are quoted separately.',
        ],
      },
      {
        title: 'Payment',
        paragraphs: [
          'Method is agreed per project: card (Monobank, PrivatBank, etc.), IBAN, LiqPay / WayForPay / MonoPay, or crypto by agreement. Usually a deposit before start and the rest on acceptance; larger projects in stages. Figures on the pricing page are estimates, not a public offer. The “Website for $200” package has its own terms on that page.',
        ],
      },
      {
        title: 'Delivery of results',
        paragraphs: [
          'Services are digital. Results are handed over as access to the site, bot, repo, Figma or files — email, cloud or a link. Delivery is complete when access is given, unless agreed otherwise. Hosting and domain are separate.',
        ],
      },
      {
        title: 'Client duties',
        paragraphs: [
          'The client provides copy, access, logos and feedback on time. Late materials shift the deadline. The client is responsible for the legality of their content (images, their customers’ data, brand rights).',
        ],
      },
      {
        title: 'IP',
        paragraphs: [
          'After full payment the client may use the delivered site, bot or designs for their business. The Provider’s drafts, internal libraries and tools are not transferred unless agreed in writing.',
        ],
      },
      {
        title: 'Liability',
        paragraphs: [
          'The Provider is not liable for losses caused by hosting, messengers, payment providers or changes in their rules. Liability is limited to the amount paid for the stage in dispute, unless law requires otherwise.',
        ],
      },
      {
        title: 'Law and disputes',
        paragraphs: [
          'Ukrainian law applies. We try to settle disputes by negotiation; otherwise in court at the Provider’s place of registration. Updates are published on this page; ongoing projects follow the version in force on the quote or contract date.',
        ],
      },
    ],
  },
  refund: {
    title: 'Refund Policy',
    updated: UPDATED.en,
    intro:
      'TeleBots delivers custom digital work (development, design, setup), not off-the-shelf goods. This page states when a refund is possible.',
    sections: [
      {
        title: 'Default rule',
        paragraphs: [
          'Once work has started (brief in progress, layouts, code, prototype) there is no general automatic refund. We state this before payment: here, in the quote and on the call. A deposit pays for time already spent, not a “slot reservation”.',
        ],
      },
      {
        title: 'Before work starts',
        paragraphs: [
          'If a deposit was paid but the Provider has not started and both sides cancel in writing, the amount can be refunded minus the payment provider’s non-refundable fee, if any.',
        ],
      },
      {
        title: '“Website for $200” offer',
        paragraphs: [
          'The consultation and prototype are free and without obligation. The $200 is due only after you approve the prototype. If it does not fit, you pay nothing. After you pay for the finish, the same custom-work rule applies.',
        ],
      },
      {
        title: 'Exceptions',
        paragraphs: [
          'We may refund or fix the work at no extra cost if the Provider materially missed the agreed scope, delivered the wrong result, or cannot finish due to our fault. Email roman.fedoniuk@gmail.com with payment reference, date and what was not delivered.',
        ],
      },
      {
        title: 'How to request',
        paragraphs: [
          'Write by email, Telegram or phone. We reply within 5 business days. Approved refunds go back through the original channel (card, IBAN, payment system) on that channel’s timeline — usually within 10 business days after confirmation.',
        ],
      },
    ],
  },
};

const pl: Record<LegalDocId, LegalDocCopy> = {
  privacy: {
    title: 'Polityka prywatności',
    updated: UPDATED.pl,
    intro:
      'Ta polityka wyjaśnia, jakie dane osobowe zbiera TeleBots (FOP Fedoniuk Roman Ihorowycz), po co i jak długo je przechowuje. Korzystając z telebots.site lub wysyłając zgłoszenie, potwierdzasz, że zapoznałeś się z tymi zasadami.',
    sections: [
      {
        title: 'Kto odpowiada za dane',
        paragraphs: [
          'Administratorem jest FOP Fedoniuk Roman Ihorowycz, EDRPOU 3831208275, Kijów, Ukraina. Sprawy prywatności: roman.fedoniuk@gmail.com lub +380960908006.',
        ],
      },
      {
        title: 'Jakie dane zbieramy',
        paragraphs: ['Nie sprzedajemy baz kontaktów. Dane pojawiają się tylko wtedy, gdy je podasz albo gdy strona zapisuje statystyki techniczne.'],
        bullets: [
          'Zgłoszenia: imię, telefon, treść, wybrana usługa.',
          'Wiadomości, które sam wysyłasz (Telegram, WhatsApp, e-mail, telefon).',
          'Dane techniczne: IP, urządzenie, odwiedzone strony, źródło wejścia (cookies / analityka).',
        ],
      },
      {
        title: 'Po co przetwarzamy',
        paragraphs: ['Dane służą wyłącznie obsłudze zgłoszenia i ulepszaniu strony.'],
        bullets: [
          'Odpowiedź na konsultację lub zamówienie.',
          'Oferta i realizacja umowy.',
          'Faktury i pliki projektu.',
          'Zrozumienie, które podstrony działają (analityka).',
        ],
      },
      {
        title: 'Komu możemy przekazać',
        paragraphs: [
          'Danych nie sprzedajemy. Przekazujemy je tylko podwykonawcom niezbędnym do działania strony: hosting, zgłoszenia (Telegram), analityka (Google Tag Manager, Microsoft Clarity, Plerdy). Płatności kartą przez LiqPay / WayForPay / bank obsługuje dany operator — numerów kart na stronie nie przechowujemy.',
        ],
      },
      {
        title: 'Jak długo przechowujemy',
        paragraphs: [
          'Zgłoszenia i korespondencję projektową — tak długo, jak potrzeba do realizacji i księgowości (zwykle do 3 lat po projekcie, chyba że prawo wymaga dłużej). Analityka — według polityk dostawców. Wniosek o usunięcie: roman.fedoniuk@gmail.com.',
        ],
      },
      {
        title: 'Twoje prawa',
        paragraphs: [
          'Możesz żądać dostępu, sprostowania, usunięcia lub ograniczenia przetwarzania. Skargę w Ukrainie składa się do Rzecznika Praw Człowieka Rady Najwyższej. Pliki cookies analityczne możesz wyłączyć w przeglądarce lub mailowo.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Strona używa niezbędnych cookies do działania oraz analitycznych (GTM, Clarity, Plerdy). To nie jest profil reklamowy z naszych formularzy. Blokada cookies nie przeszkadza wysłać zgłoszenia ręcznie.',
        ],
      },
    ],
  },
  terms: {
    title: 'Warunki świadczenia usług',
    updated: UPDATED.pl,
    intro:
      'Korzystając z usług TeleBots (Wykonawca), akceptujesz te warunki. Obejmują strony, boty Telegram, design, parsery i prace pokrewne, chyba że oferta lub umowa stanowi inaczej.',
    sections: [
      {
        title: 'Jak przyjmowane jest zamówienie',
        paragraphs: [
          'Formularz, Telegram, WhatsApp, e-mail lub telefon to prośba o konsultację, nie automatyczna umowa. Zakres, cena, terminy i etapy są w ofercie, fakturze lub umowie. Typowy czas: od kilku dni do kilku miesięcy. Zmianę terminu Wykonawca zgłasza zamawiającemu.',
        ],
      },
      {
        title: 'Co wchodzi w usługę',
        paragraphs: [
          'Tylko to, co uzgodniono: np. landing, sklep, chatbot, płatność/CRM, design. Dodatkowe strony, redesign po odbiorze i brakujące materiały wyceniane są osobno.',
        ],
      },
      {
        title: 'Płatność',
        paragraphs: [
          'Sposób ustalamy indywidualnie: karta (Monobank, PrivatBank itd.), IBAN, LiqPay / WayForPay / MonoPay, ewentualnie krypto. Zwykle zaliczka przed startem i reszta po odbiorze; większe projekty etapami. Kwoty na stronie cennika to orientacja, nie oferta publiczna. Pakiet „Strona za $200” ma własne warunki na swojej stronie.',
        ],
      },
      {
        title: 'Przekazanie rezultatu',
        paragraphs: [
          'Usługi są cyfrowe. Wynik to dostęp do strony, bota, repozytorium, Figma lub plików — e-mail, chmura, link. Dostawę uznajemy za wykonaną z chwilą udostępnienia dostępu. Hosting i domena — osobno.',
        ],
      },
      {
        title: 'Obowiązki zamawiającego',
        paragraphs: [
          'Zamawiający na czas przekazuje teksty, dostępy, logo i feedback. Opóźnienie materiałów przesuwa termin. Za legalność treści (zdjęcia, dane klientów zamawiającego, prawa do marki) odpowiada zamawiający.',
        ],
      },
      {
        title: 'Prawa do rezultatu',
        paragraphs: [
          'Po pełnej płatności zamawiający może używać oddanej strony, bota lub makiet w swoim biznesie. Szkice, biblioteki i narzędzia Wykonawcy nie przechodzą, chyba że uzgodniono inaczej.',
        ],
      },
      {
        title: 'Odpowiedzialność',
        paragraphs: [
          'Wykonawca nie odpowiada za straty wynikające z hostingu, komunikatorów, płatności lub zmiany ich regulaminów. Odpowiedzialność ogranicza się do kwoty zapłaconej za dany etap, chyba że prawo stanowi inaczej.',
        ],
      },
      {
        title: 'Prawo i spory',
        paragraphs: [
          'Zastosowanie ma prawo Ukrainy. Spory najpierw polubownie, potem sąd właściwy dla siedziby Wykonawcy. Zmiany publikujemy na tej stronie; dla trwających projektów wiąże wersja z daty oferty lub umowy.',
        ],
      },
    ],
  },
  refund: {
    title: 'Zwrot środków',
    updated: UPDATED.pl,
    intro:
      'TeleBots świadczy indywidualne usługi cyfrowe (rozwój, design, wdrożenie), nie towary z półki. Poniżej — kiedy zwrot jest możliwy.',
    sections: [
      {
        title: 'Zasada ogólna',
        paragraphs: [
          'Po starcie prac (brief, makiety, kod, prototyp) nie ma automatycznego zwrotu. Informujemy o tym przed płatnością: tutaj, w ofercie i na konsultacji. Zaliczka pokrywa już wykonany czas, nie „rezerwację slotu”.',
        ],
      },
      {
        title: 'Przed rozpoczęciem prac',
        paragraphs: [
          'Jeśli zaliczka wpłynęła, ale Wykonawca jeszcze nie zaczął i strony pisemnie anulują zamówienie — zwrot jest możliwy pomniejszony o bezzwrotną prowizję operatora płatności, o ile została pobrana.',
        ],
      },
      {
        title: 'Oferta „Strona za $200”',
        paragraphs: [
          'Konsultacja i prototyp są darmowe i bez zobowiązań. 200 $ płacisz dopiero po akceptacji prototypu. Jeśli nie pasuje — nic nie płacisz. Po opłaceniu dokończenia pakietu obowiązuje ta sama zasada co przy innych pracach indywidualnych.',
        ],
      },
      {
        title: 'Wyjątki',
        paragraphs: [
          'Rozpatrujemy zwrot lub bezpłatną poprawkę, gdy Wykonawca istotnie naruszył uzgodniony zakres, oddał zły rezultat albo nie może skończyć z własnej winy. Napisz na roman.fedoniuk@gmail.com: numer płatności, data, czego brakuje.',
        ],
      },
      {
        title: 'Jak złożyć wniosek',
        paragraphs: [
          'E-mail, Telegram lub telefon. Odpowiadamy w 5 dni roboczych. Uzgodniony zwrot idzie tym samym kanałem co płatność (karta, IBAN, system płatności), w terminach tego kanału — zwykle do 10 dni roboczych po potwierdzeniu.',
        ],
      },
    ],
  },
};

const ru: Record<LegalDocId, LegalDocCopy> = {
  privacy: {
    title: 'Политика конфиденциальности',
    updated: UPDATED.ru,
    intro:
      'Эта политика объясняет, какие персональные данные собирает TeleBots (ФОП Федонюк Роман Игоревич), зачем и сколько хранит. Пользуясь telebots.site или оставляя заявку, вы подтверждаете, что ознакомились с правилами.',
    sections: [
      {
        title: 'Кто отвечает за данные',
        paragraphs: [
          'Контролёр — ФОП Федонюк Роман Игоревич, ЕГРПОУ 3831208275, г. Киев, Украина. По вопросам данных: roman.fedoniuk@gmail.com или +380960908006.',
        ],
      },
      {
        title: 'Какие данные собираем',
        paragraphs: ['Мы не продаём базы контактов. Данные появляются, только когда вы их оставляете или когда сайт фиксирует техническую статистику.'],
        bullets: [
          'Заявки: имя, телефон, текст, выбранная услуга.',
          'Переписка в Telegram, WhatsApp, email или по телефону.',
          'Техданные: IP, устройство, просмотренные страницы, источник перехода (cookies / аналитика).',
        ],
      },
      {
        title: 'Зачем обрабатываем',
        paragraphs: ['Данные нужны только чтобы ответить на запрос и улучшать сайт.'],
        bullets: [
          'Ответ на консультацию или заявку.',
          'КП и выполнение договора.',
          'Счета и материалы проекта.',
          'Понимание, какие страницы работают (аналитика).',
        ],
      },
      {
        title: 'Кому можем передать',
        paragraphs: [
          'Данные не продаём. Передаём только подрядчикам, без которых сайт или заявка не работают: хостинг, доставка заявок (Telegram), аналитика (Google Tag Manager, Microsoft Clarity, Plerdy). Оплату картой через LiqPay / WayForPay / банк обрабатывает провайдер — номера карт на сайте не храним.',
        ],
      },
      {
        title: 'Сколько храним',
        paragraphs: [
          'Заявки и переписку по проекту — пока нужны для работ и учёта (обычно до 3 лет после проекта, если закон не требует дольше). Аналитика — по политикам поставщиков. Запрос на удаление: roman.fedoniuk@gmail.com.',
        ],
      },
      {
        title: 'Ваши права',
        paragraphs: [
          'Можно запросить доступ, исправление, удаление или ограничение обработки. Жалоба в Украине — Уполномоченному Верховной Рады по правам человека. Аналитические cookies отключаются в браузере или по письму нам.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Сайт использует необходимые cookies для работы страниц и аналитические (GTM, Clarity, Plerdy). Это не рекламный профиль с наших форм. Блокировка cookies не мешает отправить заявку вручную.',
        ],
      },
    ],
  },
  terms: {
    title: 'Условия оказания услуг',
    updated: UPDATED.ru,
    intro:
      'Пользуясь услугами TeleBots (Исполнитель), вы соглашаетесь с этими условиями. Они касаются сайтов, Telegram-ботов, дизайна, парсеров и смежных работ, если в КП или договоре не указано иное.',
    sections: [
      {
        title: 'Как принимается заказ',
        paragraphs: [
          'Форма, Telegram, WhatsApp, email или звонок — запрос на консультацию, а не автоматический договор. Объём, цена, сроки и этапы фиксируются в КП, счёте или договоре. Типичный срок — от нескольких дней до нескольких месяцев. Об изменении дедлайна Исполнитель сообщает заказчику.',
        ],
      },
      {
        title: 'Что входит в услугу',
        paragraphs: [
          'Только согласованное: лендинг, магазин, чат-бот, оплата/CRM, дизайн. Доп. страницы, редизайн после приёмки и контент, которого не было в ТЗ, оцениваются отдельно.',
        ],
      },
      {
        title: 'Оплата',
        paragraphs: [
          'Способ согласуется индивидуально: карта (Monobank, ПриватБанк и др.), IBAN, LiqPay / WayForPay / MonoPay, по договорённости — криптовалюта. Обычно аванс до старта и остаток после приёмки; крупные проекты — этапами. Цифры на странице цен — ориентиры, не публичная оферта. Пакет «Сайт за $200» имеет свои условия на своей странице.',
        ],
      },
      {
        title: 'Передача результата',
        paragraphs: [
          'Услуги цифровые. Результат — доступ к сайту, боту, репозиторию, Figma или файлам: email, облако, ссылка. Доставка считается выполненной с момента доступа. Хостинг и домен — отдельно.',
        ],
      },
      {
        title: 'Обязанности заказчика',
        paragraphs: [
          'Заказчик вовремя даёт тексты, доступы, логотипы и фидбек. Задержка материалов сдвигает срок. Законность контента (изображения, данные клиентов заказчика, права на бренд) — на стороне заказчика.',
        ],
      },
      {
        title: 'Права на результат',
        paragraphs: [
          'После полной оплаты заказчик может использовать сданный сайт, бота или макеты в своём бизнесе. Черновики, внутренние библиотеки и инструменты Исполнителя не передаются, если это прямо не согласовано.',
        ],
      },
      {
        title: 'Ответственность',
        paragraphs: [
          'Исполнитель не отвечает за убытки из-за хостинга, мессенджеров, платёжных систем или смены их правил. Ответственность ограничена суммой, уплаченной за этап, по которому претензия, если закон не требует иного.',
        ],
      },
      {
        title: 'Право и споры',
        paragraphs: [
          'Применяется законодательство Украины. Споры — сначала переговоры, затем суд по месту регистрации Исполнителя. Изменения публикуются на этой странице; для текущих проектов действует редакция на дату КП или договора.',
        ],
      },
    ],
  },
  refund: {
    title: 'Возврат средств',
    updated: UPDATED.ru,
    intro:
      'TeleBots оказывает индивидуальные цифровые услуги (разработка, дизайн, настройка), а не товары с полки. Ниже — когда возврат возможен.',
    sections: [
      {
        title: 'Общее правило',
        paragraphs: [
          'После старта работ (ТЗ, макеты, код, прототип) общего автоматического возврата нет. Об этом говорим до оплаты: здесь, в КП и на консультации. Предоплата закрывает уже потраченное время, а не «бронь слота».',
        ],
      },
      {
        title: 'До начала работ',
        paragraphs: [
          'Если аванс пришёл, но Исполнитель ещё не начал и стороны письменно отменили заказ — сумму можно вернуть за вычетом невозвратной комиссии платёжной системы, если она уже списана.',
        ],
      },
      {
        title: 'Офер «Сайт за $200»',
        paragraphs: [
          'Консультация и прототип бесплатны и без обязательств. $200 платите только после подтверждения прототипа. Не подошёл — ничего не платите. После оплаты доработки пакета действует то же правило, что и для других индивидуальных работ.',
        ],
      },
      {
        title: 'Исключения',
        paragraphs: [
          'Рассматриваем возврат или бесплатное исправление, если Исполнитель существенно нарушил объём, сдал не тот результат или не может закончить по своей вине. Пишите на roman.fedoniuk@gmail.com: номер платежа, дата, что не выполнено.',
        ],
      },
      {
        title: 'Как подать запрос',
        paragraphs: [
          'Email, Telegram или телефон. Ответ — в течение 5 рабочих дней. Согласованный возврат идёт тем же каналом, что и оплата (карта, IBAN, платёжка), в сроки канала — обычно до 10 рабочих дней после подтверждения.',
        ],
      },
    ],
  },
};

export const legalPagesCopy: Record<Language, Record<LegalDocId, LegalDocCopy>> = {
  uk,
  en,
  pl,
  ru,
};

export const LEGAL_DOC_PATH: Record<LegalDocId, string> = {
  privacy: 'privacy',
  terms: 'terms',
  refund: 'refund',
};
