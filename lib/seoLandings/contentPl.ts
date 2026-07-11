import type { SeoLandingCopy, SeoLandingSlug } from './types';

type AllLandings = Record<SeoLandingSlug, SeoLandingCopy>;

export const PL_SEO_LANDINGS: AllLandings = {
  'telegram-bots': {
    metaTitle: 'Tworzenie botów Telegram pod klucz | od $150 | TeleBots',
    metaDescription:
      'Zamów bota Telegram dla biznesu: leady, płatności, CRM, AI. Start od 24h, od $150. 200+ projektów. Bezpłatna konsultacja — TeleBots.',
    keywords:
      'tworzenie botów telegram, zamówić bota telegram, bot telegram dla biznesu, bot z płatnością, integracja crm telegram, cena bota telegram, TeleBots',
    h1: 'Tworzenie botów Telegram pod klucz dla biznesu',
    intro:
      'Budujemy boty Telegram, które zbierają zgłoszenia, przyjmują płatności, odpowiadają klientom i łączą się z CRM. Bez zbędnego „kodu dla kodu” — tylko scenariusze, które oszczędzają czas i generują sprzedaż.',
    lead:
      'Telegram jest już otwarty u większości Twoich klientów. Bot zdejmuje rutynę z menedżerów: kwalifikuje zapytanie, podaje cennik, przyjmuje płatność i przekazuje „gorący” lead do CRM. Projektujemy dialog pod Twój proces sprzedaży — od prostego bota zgłoszeń po marketplace w komunikatorze.',
    benefitsTitle: 'Co daje bot w Telegramie',
    benefits: [
      'Zgłoszenia i kwalifikacja leadów 24/7 bez menedżera na linii',
      'Płatności LiqPay, Fondy, Stripe lub krypto bezpośrednio w czacie',
      'Synchronizacja z CRM, Google Sheets, Notion i wewnętrznymi API',
      'Odpowiedzi AI na typowe pytania z eskalacją do człowieka',
      'Wysyłki, lejki i przypomnienia bez zewnętrznych serwisów',
      'Panel admina lub bot-admin dla zespołu',
    ],
    audienceTitle: 'Dla kogo jest ten format',
    audience: [
      'Masz powtarzalne pytania i chcesz zdjąć je z menedżerów',
      'Potrzebujesz zgłoszeń z Telegram / Instagram / reklam w jednym kanale',
      'Chcesz przyjmować płatności bez osobnej strony kasowej',
      'Masz CRM i potrzebujesz automatycznej synchronizacji transakcji',
      'Uruchamiasz produkt i potrzebujesz szybkiego MVP w dni, nie miesiące',
      'Pracujesz z subskrypcjami, zapisami lub wewnętrznymi narzędziami zespołu',
    ],
    deliverablesTitle: 'Co otrzymujesz na wyjściu',
    deliverables: [
      {
        title: 'Scenariusz dialogu',
        text: 'Mapa kroków, gałęzie, teksty i kryteria „udanego” zgłoszenia — żeby bot prowadził do celu, a nie tylko odpowiadał.',
      },
      {
        title: 'Działający bot w produkcji',
        text: 'Deploy, webhooki, baza, logi. Stabilna praca pod realnym obciążeniem, nie demo na laptopie.',
      },
      {
        title: 'Integracje pod proces',
        text: 'Płatności, CRM, arkusze, kanały, admin — tylko to, czego naprawdę potrzebuje Twój zespół.',
      },
      {
        title: 'Instrukcja i wsparcie startu',
        text: 'Jak zmieniać teksty, taryfy, wysyłki. Poprawki po pierwszych tygodniach żywego ruchu.',
      },
    ],
    useCasesTitle: 'Typowe scenariusze, które uruchamiamy',
    useCases: [
      {
        title: 'Bot leadów i zapis',
        text: 'Klient wybiera usługę, zostawia kontakt, dostaje potwierdzenie. Menedżer widzi gotowy brief w CRM.',
      },
      {
        title: 'Sprzedaż w czacie',
        text: 'Katalog, koszyk, płatność, paragon i status zamówienia — bez wychodzenia z Telegrama.',
      },
      {
        title: 'Wsparcie i baza wiedzy',
        text: 'FAQ, statusy, eskalacja do człowieka z kontekstem dialogu. Mniej powtarzalnych ticketów.',
      },
      {
        title: 'Subskrypcje i dostęp',
        text: 'Płatność, przedłużenie, auto-dostęp do kanału/grupy, odcinanie wygasłych subskrypcji.',
      },
    ],
    showcaseTitle: 'Case’y z naszego portfolio',
    showcaseIntro:
      'Poniżej — realne boty, które zrobiliśmy pod klucz: marketplace, subskrypcje z płatnością i automatyzacja dla biznesu.',
    showcaseCaptions: [
      'TradeGround — marketplace w Telegramie',
      'Bot subskrypcji i dostępu do community',
      'Automatyzacja zgłoszeń i procesów w bocie',
    ],
    stats: [
      { value: '200+', label: 'projektów' },
      { value: 'od $150', label: 'start bota' },
      { value: '24 godz.', label: 'na odpowiedź' },
      { value: '3–10 dni', label: 'typowy MVP' },
    ],
    sections: [
      {
        title: 'Do jakich zadań pasuje bot Telegram',
        paragraphs: [
          'Bot zamyka powtarzalne scenariusze: zapis na usługę, katalog i koszyk, wsparcie klientów, onboarding pracowników, ankiety i wewnętrzne narzędzia firmy.',
          'Jeśli masz już stronę lub Instagram — bot staje się kanałem, w którym klient szybciej zostawia kontakt i dochodzi do płatności bez zbędnych kroków.',
          'Nie „rysujemy przycisków dla przycisków”. Najpierw ustalamy cel biznesowy (lead, sprzedaż, wsparcie, subskrypcja), potem budujemy minimalny scenariusz, który można sprawdzić na realnych dialogach.',
        ],
      },
      {
        title: 'Jak tworzymy boty',
        paragraphs: [
          'Zaczynamy od scenariusza i celu. Dalej — prototyp dialogu, integracje, testowy start i przekazanie z instrukcją.',
          'Stack pod zadanie: Node.js / Python, Telegram Bot API, webhooki, bazy danych, płatności i CRM. Typowy MVP — od kilku dni do 2–3 tygodni.',
          'Po starcie patrzymy na realne rozmowy: gdzie użytkownicy się gubią, jakie pytania się powtarzają, co warto wynieść do AI lub osobnej gałęzi menu.',
        ],
      },
      {
        title: 'Dlaczego zamawiają w TeleBots',
        paragraphs: [
          'Jeden zespół zamyka scenariusz, kod, integracje i start — bez „przerzucania” między agencją, freelancerm a supportem.',
          'Mamy doświadczenie zarówno z prostymi leadami, jak i złożonymi produktami: mini-API, płatności, subskrypcje, panele admina. Możemy też pracować jako podwykonawca dla agencji z potokiem zapytań.',
        ],
      },
    ],
    processTitle: 'Etapy pracy',
    processSteps: [
      { title: 'Brief i scenariusz', text: 'Ustalamy cel, kroki dialogu, integracje i kryteria sukcesu.' },
      { title: 'Rozwój i testy', text: 'Budujemy bota, podłączamy płatności/CRM, sprawdzamy na realnych case’ach.' },
      { title: 'Start i wsparcie', text: 'Deploy, instrukcja dla zespołu, poprawki po pierwszych tygodniach użycia.' },
    ],
    faqTitle: 'Częste pytania o tworzenie botów Telegram',
    faq: [
      {
        question: 'Ile kosztuje stworzenie bota Telegram?',
        answer:
          'Prosty bot do zgłoszeń — od $150. Bot z płatnością, CRM i bardziej złożoną logiką — zwykle od $300–800+. Dokładną wycenę dajemy po briefie.',
      },
      {
        question: 'Ile trwa rozwój?',
        answer:
          'MVP często jest gotowy w 3–10 dni. Złożone integracje i customowy admin — 2–4 tygodnie. Start rozmowy — w ciągu 24 godzin.',
      },
      {
        question: 'Czy można podłączyć płatności i CRM?',
        answer:
          'Tak. Podłączamy systemy płatności oraz CRM/arkusze pod Twój proces sprzedaży. Jeśli potrzebna jest customowa integracja — też ją robimy.',
      },
      {
        question: 'Czy potrzebny jest osobny serwer?',
        answer:
          'Podpowiemy optymalny wariant hostingu pod obciążenie. Dla większości botów biznesowych wystarczy stabilny VPS lub zarządzane środowisko.',
      },
      {
        question: 'Czy można dodać AI później?',
        answer:
          'Tak. Często startujemy od jasnego menu i przycisków, a AI podłączamy w drugim etapie — gdy jest baza pytań i jasne reguły odpowiedzi.',
      },
    ],
    midCtaTitle: 'Chcesz zobaczyć, jak bot zamknie Twój scenariusz?',
    midCtaText: 'Napisz 3–5 kroków, które teraz robi menedżer ręcznie — zaproponujemy schemat bota.',
    ctaTitle: 'Potrzebujesz bota Telegram pod swój proces?',
    ctaText: 'Krótko opisz zadanie — zaproponujemy scenariusz, termin i orientacyjną cenę.',
    relatedServiceLabel: 'Wszystkie chatboty i integracje',
    pricingLabel: 'Ceny i pakiety',
    portfolioLabel: 'Case’y w portfolio',
    contactLabel: 'Napisz do nas',
    breadcrumbLabel: 'Boty Telegram',
  },
  'landing-pages': {
    metaTitle: 'Tworzenie landing page pod klucz | od $300 | TeleBots',
    metaDescription:
      'Zamów landing pod klucz: struktura pod konwersję, responsywność, baza SEO, szybki start. Typowo 1–2 tygodnie. Bezpłatna konsultacja — TeleBots.',
    keywords:
      'tworzenie landingu, landing pod klucz, zamówić landing, landing page, sprzedający landing, strona jednostronicowa, cena landingu, TeleBots',
    h1: 'Tworzenie landing page pod klucz — strona, która sprzedaje',
    intro:
      'Budujemy landingu pod start oferty, reklamy i zbieranie zgłoszeń: jasna struktura, szybkie ładowanie, responsywność oraz formularz/CTA prowadzące do kontaktu lub płatności.',
    lead:
      'Landing to nie „ładny obrazek”, tylko narzędzie lejka. Składamy bloki pod obiekcje klienta, stawiamy nacisk na wersję mobilną (tam jest główny ruch z reklam) i podłączamy analitykę, żeby było widać, co działa.',
    benefitsTitle: 'Co wchodzi w landing',
    benefits: [
      'Struktura bloków pod ofertę i obiekcje klienta',
      'Responsywność pod mobile (główny ruch z reklam)',
      'Szybkość i techniczna baza SEO (title, description, headings)',
      'Formularz zgłoszenia, Telegram/CRM lub integracja z botem',
      'Podstawowa analityka (GA4 / Meta Pixel w razie potrzeby)',
      'Poprawki po starcie w ramach uzgodnionego zakresu',
    ],
    audienceTitle: 'Kiedy landing to właściwy format',
    audience: [
      'Uruchamiasz nową ofertę lub promocję pod reklamy',
      'Potrzebujesz testu produktu bez dużej wielostronicowej strony',
      'Masz ruch z Meta / Google i liczy się konwersja w zgłoszenie',
      'Chcesz szybki start w 1–2 tygodnie',
      'Potrzebujesz strony pod jeden produkt, usługę lub wydarzenie',
      'Planujesz później skalować do korporacyjnej strony lub sklepu',
    ],
    deliverablesTitle: 'Co oddajemy',
    deliverables: [
      {
        title: 'Struktura i teksty',
        text: 'Uzgodniony outline bloków, USP, oferty i logika CTA przed finalnym buildem.',
      },
      {
        title: 'Gotowa strona',
        text: 'Responsywność, szybkość, poprawne meta-tagi, formularze i podłączenie domeny.',
      },
      {
        title: 'Integracje zgłoszeń',
        text: 'Formularz → Telegram / CRM / Sheets. W razie potrzeby — połączenie z botem.',
      },
      {
        title: 'Baza pod wzrost',
        text: 'Czysty kod i struktura, którą można rozbudować do strony z wieloma podstronami.',
      },
    ],
    useCasesTitle: 'Do jakich zadań robimy landingu',
    useCases: [
      {
        title: 'Oferta reklamowa',
        text: 'Jedna usługa / produkt, jasne CTA, tracking do panelu reklam.',
      },
      {
        title: 'Start eksperta',
        text: 'Marka osobista, konsultacje, kursy — strona z zaufaniem i zgłoszeniem.',
      },
      {
        title: 'Lokalny biznes',
        text: 'Zapis, telefon, dojazd, social proof — szybko i jasno z telefonu.',
      },
      {
        title: 'B2B lead gen',
        text: 'Case’y, stack, formularz briefu — menedżer dostaje zakwalifikowane zapytanie.',
      },
    ],
    showcaseTitle: 'Przykłady z portfolio',
    showcaseIntro: 'Strony i witryny zbudowane pod konwersję i nowoczesny styl wizualny.',
    showcaseCaptions: [
      'Landing / oferta pod start',
      'Strona marki z naciskiem na wizual',
      'Format osobisty / ekspercki',
    ],
    stats: [
      { value: 'od $300', label: 'landing pod klucz' },
      { value: '7–14 dni', label: 'typowy termin' },
      { value: 'Next.js', label: 'nowoczesny stack' },
      { value: 'baza SEO', label: 'od pierwszego dnia' },
    ],
    sections: [
      {
        title: 'Kiedy potrzebny jest osobny landing',
        paragraphs: [
          'Landing działa lepiej niż „duża strona”, gdy jest jedna oferta, kampania reklamowa lub potrzebny szybki test produktu bez zbędnych podstron.',
          'Składamy stronę tak, by użytkownik w 5–10 sekund zrozumiał wartość i zrobił kolejny krok — zgłoszenie, telefon lub płatność.',
          'Jeśli po teście oferta wchodzi — rozbudowujemy do wielostronicowej witryny lub e-commerce, zachowując system designu i analitykę.',
        ],
      },
      {
        title: 'Technologie i SEO',
        paragraphs: [
          'Build na nowoczesnym stacku (często Next.js): szybkość, czysty HTML, poprawne meta-tagi. To pomaga i reklamom, i organicznemu wyszukiwaniu.',
          'Zakładamy logiczną hierarchię nagłówków, alt dla obrazów, poprawny viewport i podstawowe tagi Open Graph do udostępniania.',
        ],
      },
    ],
    processTitle: 'Jak uruchamiamy landing',
    processSteps: [
      { title: 'Oferta i struktura', text: 'Ustalamy USP, bloki, teksty i referencje.' },
      { title: 'Design i build', text: 'Makiety albo od razu rozwój z responsywnym layoutem.' },
      { title: 'Start', text: 'Domena, formularze, analityka, sprawdzenie szybkości i wersji mobilnej.' },
    ],
    faqTitle: 'Pytania o landingu',
    faq: [
      {
        question: 'Ile kosztuje landing?',
        answer:
          'Typowy landing pod klucz — od $300. Złożone animacje, integracje lub wielojęzyczność wpływają na wycenę.',
      },
      {
        question: 'W ile można uruchomić?',
        answer: 'Często 7–14 dni od uzgodnionego briefu. Pilne starty omawiamy osobno.',
      },
      {
        question: 'Czy landing nadaje się do reklam Google/Meta?',
        answer: 'Tak. Robimy szybką wersję mobilną, jasne CTA i spełniamy wymagania techniczne paneli reklamowych.',
      },
      {
        question: 'Czy można zrobić kilka języków?',
        answer: 'Tak — uk/en/pl/ru lub inne. Wielojęzyczność zakładamy w strukturze URL i meta-tagach.',
      },
    ],
    midCtaTitle: 'Masz ofertę, ale nie ma strony pod reklamy?',
    midCtaText: 'Wyślij niszę i cel (zgłoszenie / telefon / płatność) — zaproponujemy strukturę bloków.',
    ctaTitle: 'Potrzebujesz landingu pod reklamę lub start?',
    ctaText: 'Napisz niszę i cel strony — zaproponujemy strukturę i termin.',
    relatedServiceLabel: 'Wszystkie strony i rozwiązania web',
    pricingLabel: 'Ceny stron',
    portfolioLabel: 'Przykłady prac',
    contactLabel: 'Zostaw zgłoszenie',
    breadcrumbLabel: 'Landingi',
  },
  'online-stores': {
    metaTitle: 'Tworzenie sklepu internetowego pod klucz | Next.js | TeleBots',
    metaDescription:
      'Sklep internetowy pod klucz: katalog, koszyk, płatności, dostawa, admin. Next.js, SEO i szybkość. Konsultacja bezpłatna — TeleBots.',
    keywords:
      'tworzenie sklepu internetowego, sklep internetowy pod klucz, stworzyć sklep online, e-commerce Next.js, sklep z płatnością, cena sklepu internetowego, TeleBots',
    h1: 'Tworzenie sklepu internetowego pod klucz',
    intro:
      'Budujemy e-commerce wygodny dla kupującego i dla Ciebie: katalog, filtry, koszyk, płatności, statusy zamówień oraz integracje z dostawą lub CRM.',
    lead:
      'Customowy sklep ma sens, gdy szablonowy konstruktor ogranicza logikę cen, opcje produktów, warunki B2B lub UX marki. Budujemy katalog i checkout tak, by na mobile było tak samo wygodnie jak na desktopie — i by SEO kategorii działało od pierwszego dnia.',
    benefitsTitle: 'Co dostajesz w sklepie',
    benefits: [
      'Katalog z wariantami produktów, wyszukiwaniem i filtrami',
      'Koszyk, checkout i płatności online',
      'Responsywność i szybkość — krytyczne dla konwersji z mobile',
      'Struktura SEO kategorii i kart produktów',
      'Procesy admina: zamówienia, statusy, podstawowe raporty',
      'Integracje z dostawą, CRM, analityką w razie potrzeby',
    ],
    audienceTitle: 'Dla kogo jest customowy sklep',
    audience: [
      'Marka odzieżowa / beauty / food z naciskiem na wizual i UX',
      'Potrzebujesz złożonych wariantów produktów, kompletów lub cen B2B',
      'Chcesz kontrolę nad SEO i szybkością, a nie „szablonowy” motyw',
      'Planujesz integracje z ERP / CRM / dostawą',
      'Przenosisz się ze starej platformy z zachowaniem SEO',
      'Potrzebujesz sklepu + bota / wysyłek w jednej ekosystemie',
    ],
    deliverablesTitle: 'Skład projektu',
    deliverables: [
      {
        title: 'Katalog i karty',
        text: 'Kategorie, filtry, warianty, galeria, powiązane produkty.',
      },
      {
        title: 'Checkout i płatności',
        text: 'Koszyk, zamówienie, bramki płatności, maile/powiadomienia.',
      },
      {
        title: 'Operacje',
        text: 'Statusy zamówień, podstawowy admin, eksport w razie potrzeby.',
      },
      {
        title: 'SEO i analityka',
        text: 'Przyjazne URL, meta, szybkość, piksele / GA4 dla lejka.',
      },
    ],
    useCasesTitle: 'Formaty sklepów',
    useCases: [
      {
        title: 'Fashion / lifestyle',
        text: 'Mocny wizual, rozmiary, lookbooki, szybki mobile UX.',
      },
      {
        title: 'Niszowy e-commerce',
        text: 'Wąski asortyment, jasne filtry, nacisk na zaufanie i dostawę.',
      },
      {
        title: 'Sklep + Telegram',
        text: 'Katalog na stronie, statusy i wsparcie w bocie.',
      },
      {
        title: 'Migracja',
        text: 'Przeniesienie produktów i URL ze starej platformy z minimalnymi stratami SEO.',
      },
    ],
    showcaseTitle: 'Sklepy z portfolio',
    showcaseIntro: 'E-commerce i katalogi, które zbudowaliśmy pod markę i sprzedaż.',
    showcaseCaptions: [
      '13VPLUS — fashion e-commerce',
      'Cats Fresh — sklep + ekosystem',
      'Nieznany Piekarz — platforma e-commerce',
    ],
    stats: [
      { value: 'Next.js', label: 'szybkość i SEO' },
      { value: 'płatności', label: 'karty / krypto' },
      { value: 'mobile', label: 'first UX' },
      { value: 'pod klucz', label: 'od pomysłu do startu' },
    ],
    sections: [
      {
        title: 'Dla kogo ma sens customowy sklep',
        paragraphs: [
          'Custom ma sens, gdy szablon SaaS blokuje logikę cen, opcje lub potrzebny UX.',
          'Niewielki asortyment można zacząć lżejszym formatem i skalować do pełnego sklepu.',
          'Na starcie ustalamy encje: produkty, warianty, dostawa, płatności, role — żeby nie przepisywać checkoutu w środku projektu.',
        ],
      },
      {
        title: 'Stack i wsparcie',
        paragraphs: [
          'Często używamy Next.js: szybkie strony, wygodne SEO, elastyczne integracje.',
          'Po starcie pomagamy z poprawkami, nowymi sekcjami i optymalizacją lejka zamówienia.',
        ],
      },
    ],
    processTitle: 'Etapy startu sklepu',
    processSteps: [
      { title: 'Katalog i logika', text: 'Produkty, warianty, ceny, dostawa, płatności, role.' },
      { title: 'UX i rozwój', text: 'Strony katalogu, karty, koszyk, checkout, admin.' },
      { title: 'Start i szkolenie', text: 'Testowe zamówienia, domena, instrukcja dla zespołu.' },
    ],
    faqTitle: 'Pytania o sklepy internetowe',
    faq: [
      {
        question: 'Ile kosztuje sklep internetowy?',
        answer:
          'Zależy od liczby encji i integracji. Start typowo wyższy niż landing; zakres podajemy po krótkim audycie wymagań.',
      },
      {
        question: 'Czy można przenieść produkty z Excela / innego sklepu?',
        answer: 'Tak, import katalogu omawiamy na starcie — to oszczędza tygodnie ręcznej pracy.',
      },
      {
        question: 'Czy sklep będzie wygodny pod SEO?',
        answer:
          'Zakładamy przyjazne URL, meta-tagi, strukturę nagłówków i szybkość. Treści kategorii możemy prowadzić razem.',
      },
      {
        question: 'Jakie płatności podłączacie?',
        answer: 'Bramki kartowe (np. WayForPay), Stripe, krypto i inne — pod geo i model biznesowy.',
      },
    ],
    midCtaTitle: 'Planujesz start lub migrację sklepu?',
    midCtaText: 'Opisz asortyment i potrzebne integracje — podpowiemy format i etapy.',
    ctaTitle: 'Gotowy omówić e-commerce?',
    ctaText: 'Krótki brief — i dostaniesz orientacyjną architekturę z etapami.',
    relatedServiceLabel: 'Tworzenie stron',
    pricingLabel: 'Orientacyjne ceny',
    portfolioLabel: 'Case’y e-commerce',
    contactLabel: 'Omówić projekt',
    breadcrumbLabel: 'Sklepy internetowe',
  },
  'ai-chatbots': {
    metaTitle: 'Chatbot AI dla biznesu | Telegram i strona | TeleBots',
    metaDescription:
      'Chatbot AI na bazie GPT: odpowiedzi z Twojej bazy wiedzy, kwalifikacja leadów, wsparcie 24/7 w Telegramie lub na stronie. Konsultacja — TeleBots.',
    keywords:
      'chatbot ai, bot chatgpt dla biznesu, bot ai telegram, sieć neuronowa do wsparcia, bot ze sztuczną inteligencją, konsultant ai, TeleBots',
    h1: 'Chatboty AI do wsparcia, sprzedaży i onboardingu',
    intro:
      'Podłączamy AI do Telegrama lub widgetu na stronie: bot odpowiada językiem klienta, opiera się na Twoich dokumentach i przekazuje złożone dialogi menedżerowi.',
    lead:
      'AI dobrze działa tam, gdzie jest wiele sformułowań tych samych pytań. Ograniczamy źródła wiedzy, dodajemy reguły „nie wymyślaj” i hybrydę z przyciskami — żeby konwersja pozostała kontrolowana, a odpowiedzi — w granicach Twojej polityki.',
    benefitsTitle: 'Możliwości bota AI',
    benefits: [
      'Odpowiedzi na podstawie Twojego cennika, FAQ i polityki firmy',
      'Kwalifikacja leadów i zbieranie kontaktów w wygodnym scenariuszu',
      'Wsparcie w kilku językach bez osobnego zespołu',
      'Eskalacja do człowieka z kontekstem dialogu',
      'Działa w Telegramie, na stronie lub w obu kanałach',
      'Ewidencja dialogów i poprawa promptów po starcie',
    ],
    audienceTitle: 'Dla kogo jest bot AI',
    audience: [
      'Dużo typowych pytań we wsparciu lub sprzedaży',
      'Jest baza wiedzy / FAQ / cennik, którą można „nauczyć”',
      'Potrzebujesz odpowiedzi 24/7 bez rozszerzania zespołu',
      'Klienci piszą swobodnie, nie tylko klikają przyciski',
      'Chcesz hybrydę: menu do akcji + AI do wyjaśnień',
      'Wrażliwa nisza — potrzebne ostrożne odpowiedzi i handoff',
    ],
    deliverablesTitle: 'Co wchodzi we wdrożenie',
    deliverables: [
      {
        title: 'Baza wiedzy',
        text: 'Zbieranie i strukturyzacja materiałów, ton komunikacji, tematy tabu.',
      },
      {
        title: 'Scenariusz i guardrails',
        text: 'Reguły odpowiedzi, eskalacja, zbieranie leada, zakaz zmyślania.',
      },
      {
        title: 'Kanał i integracje',
        text: 'Telegram / strona, CRM, powiadomienia dla zespołu.',
      },
      {
        title: 'Tuning po starcie',
        text: 'Analiza dialogów pierwszych tygodni i poprawki promptów.',
      },
    ],
    useCasesTitle: 'Gdzie AI daje największy efekt',
    useCases: [
      {
        title: 'Wsparcie produktu',
        text: 'Statusy, warunki, instrukcje — bez kolejki w komunikatorze.',
      },
      {
        title: 'Przedsprzedaż',
        text: 'Wyjaśnienie oferty, kwalifikacja, zapis na rozmowę.',
      },
      {
        title: 'Onboarding klientów',
        text: 'Pierwsze kroki po zakupie, mniej ticketów „jak zacząć?”.',
      },
      {
        title: 'Wewnętrzna baza',
        text: 'Asystent AI dla zespołu po regulaminach i FAQ.',
      },
    ],
    showcaseTitle: 'Boty i interfejsy z praktyki',
    showcaseIntro: 'Przykłady rozwiązań chat i produktów, w których dialog i automatyzacja są w centrum.',
    showcaseCaptions: [
      'Scenariusze chat dla biznesu',
      'Bot do nauki / webinarów',
      'Bot serwisowy dla klientów',
    ],
    stats: [
      { value: 'GPT', label: 'nowoczesne modele' },
      { value: '24/7', label: 'odpowiedzi' },
      { value: 'hybrid', label: 'przyciski + AI' },
      { value: 'handoff', label: 'do człowieka' },
    ],
    sections: [
      {
        title: 'Kiedy AI jest lepszy niż bot „przyciskowy”',
        paragraphs: [
          'Klasyczny scenariusz jest idealny do sztywnych kroków (zapis, płatność). AI — gdy pytań jest dużo i sformułowania są różne.',
          'Często robimy hybrydę: przyciski do kluczowych akcji + AI do wolnych pytań.',
          'Przed produkcją przepuszczamy zestaw testowych dialogów i ustalamy, na co bot ma odpowiadać, a co — przekazać menedżerowi.',
        ],
      },
      {
        title: 'Bezpieczeństwo i jakość odpowiedzi',
        paragraphs: [
          'Ograniczamy źródła wiedzy, dodajemy reguły i testy na typowych dialogach.',
          'Dla wrażliwych tematów ustawiamy ostrożne odpowiedzi i obowiązkowy handoff do specjalisty.',
        ],
      },
    ],
    processTitle: 'Jak podłączamy AI',
    processSteps: [
      { title: 'Baza wiedzy', text: 'Zbieramy FAQ, dokumenty, ton komunikacji i tabu.' },
      { title: 'Scenariusz i integracja', text: 'Kanał (Telegram/strona), CRM, przekazanie leadów.' },
      { title: 'Testy i tuning', text: 'Kontrola jakości, poprawki promptów, monitoring pierwszych tygodni.' },
    ],
    faqTitle: 'Pytania o chatboty AI',
    faq: [
      {
        question: 'Czy można nauczyć bota na naszych dokumentach?',
        answer: 'Tak. Podłączamy Twoje materiały jako źródło odpowiedzi i aktualizujemy bazę, gdy zmienia się oferta.',
      },
      {
        question: 'Czy AI zastąpi menedżerów?',
        answer: 'Zwykle nie — zdejmuje część typowych pytań i daje cieplejsze leady. Żywa sprzedaż zostaje przy zespole.',
      },
      {
        question: 'Ile kosztuje bot AI?',
        answer: 'Zależy od kanału, objętości bazy i integracji. Po briefie dajemy pakiet: rozwój + orientacyjne koszty API.',
      },
      {
        question: 'Gdzie będzie działał bot?',
        answer: 'W Telegramie, na stronie (widget) lub w obu kanałach z jedną logiką.',
      },
    ],
    midCtaTitle: 'Masz przykłady pytań klientów?',
    midCtaText: 'Wyślij 10–20 realnych wiadomości — powiemy, czy AI je dobrze zamknie.',
    ctaTitle: 'Chcesz wsparcie AI bez chaosu w odpowiedziach?',
    ctaText: 'Wyślij przykłady pytań klientów — ocenimy, czy AI pasuje właśnie Tobie.',
    relatedServiceLabel: 'Chatboty TeleBots',
    pricingLabel: 'Ceny botów',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Poproś o konsultację',
    breadcrumbLabel: 'Chatboty AI',
  },
  'data-parsers': {
    metaTitle: 'Tworzenie parserów i zbieranie danych | Excel, API, CRM | TeleBots',
    metaDescription:
      'Parsery pod klucz: ceny, produkty, ogłoszenia, monitoring konkurencji. Eksport do Excel, Google Sheets, DB lub API. Konsultacja — TeleBots.',
    keywords:
      'tworzenie parsera, parsing stron, zbieranie danych, parser cen, parser marketplace, eksport excel, monitoring konkurencji, TeleBots',
    h1: 'Parsery i automatyczne zbieranie danych dla biznesu',
    intro:
      'Automatyzujemy zbieranie danych ze stron, marketplace’ów i otwartych źródeł: zamiast godzin kopiowania — aktualizowane tabele, raporty lub API pod Twój proces.',
    lead:
      'Parser oszczędza godziny ręcznej pracy analitykom i zakupom. Najpierw oceniamy stabilność źródła i ryzyka, potem budujemy pipeline z harmonogramem, eksportem i alertami — żeby dane przychodziły same, a Ty zajmowałeś się decyzjami.',
    benefitsTitle: 'Co automatyzujemy',
    benefits: [
      'Monitoring cen i dostępności u konkurencji',
      'Zbieranie katalogów produktów i cech',
      'Parsing ogłoszeń i otwartych baz',
      'Harmonogram uruchomień (codziennie / co godzinę)',
      'Eksport do Excel, Google Sheets, DB, webhook/API',
      'Powiadomienia w Telegramie o zmianach lub błędach',
    ],
    audienceTitle: 'Dla kogo jest parser',
    audience: [
      'E-commerce z regularnym monitoringiem cen',
      'Agencje i analitycy z potokiem jednolitych zbiórek',
      'Zakupy / zarządzanie kategoriami',
      'Zespoły łączące dane w Sheets lub CRM',
      'Potrzebujesz API/webhook zamiast ręcznych eksportów',
      'Masz kilka źródeł i chcesz jeden format raportu',
    ],
    deliverablesTitle: 'Wynik pracy',
    deliverables: [
      {
        title: 'Działające zbieranie',
        text: 'Skrypt/serwis pod Twoje pola i częstotliwość aktualizacji.',
      },
      {
        title: 'Eksport',
        text: 'Sheets, Excel, DB lub Twoje API — jak wygodnie zespołowi.',
      },
      {
        title: 'Harmonogram i logi',
        text: 'Uruchomienia po cron, historia błędów, jasne statusy.',
      },
      {
        title: 'Alerty',
        text: 'Powiadomienia Telegram o awariach lub ważnych zmianach.',
      },
    ],
    useCasesTitle: 'Scenariusze parsingu',
    useCases: [
      {
        title: 'Monitoring cen',
        text: 'Codzienne porównanie z konkurencją do dynamicznego cenowania.',
      },
      {
        title: 'Katalogi',
        text: 'Zbieranie produktów i cech do wewnętrznej bazy.',
      },
      {
        title: 'Ogłoszenia',
        text: 'Selekcja z platform według filtrów regionu / ceny / kategorii.',
      },
      {
        title: 'Raporty dla klientów',
        text: 'Regularne eksporty dla agencji bez ręcznego kopiowania.',
      },
    ],
    showcaseTitle: 'Powiązane produkty i interfejsy',
    showcaseIntro: 'Przykłady złożonych produktów cyfrowych i systemów, w których dane i automatyzacja są krytyczne.',
    showcaseCaptions: [
      'Produkt z katalogiem i danymi',
      'Interfejs technologiczny / B2B',
      'Stanowisko zespołu z danymi',
    ],
    stats: [
      { value: 'cron', label: 'harmonogram uruchomień' },
      { value: 'Sheets', label: 'wygodny eksport' },
      { value: 'alerts', label: 'w Telegramie' },
      { value: 'API', label: 'w razie potrzeby' },
    ],
    sections: [
      {
        title: 'Dla kogo jest parser',
        paragraphs: [
          'Dla e-commerce, agencji, analityków i zespołów zakupów z regularną potrzebą danych.',
          'Przed startem oceniamy źródło, stabilność markupu i ograniczenia prawne.',
          'Jeśli jest oficjalne API — często proponujemy je jako bardziej niezawodną alternatywę dla parsingu.',
        ],
      },
      {
        title: 'Niezawodność i opieka',
        paragraphs: [
          'Strony zmieniają layout — zakładamy monitoring i szybkie poprawki.',
          'Dla krytycznych pipeline’ów dodajemy logi i alerty. Możemy pracować white-label dla agencji.',
        ],
      },
    ],
    processTitle: 'Jak robimy parser',
    processSteps: [
      { title: 'Źródło i pola', text: 'Co zbieramy, jak często, gdzie składujemy wynik.' },
      { title: 'Rozwój', text: 'Skrypt/serwis, harmonogram, eksport, obsługa błędów.' },
      { title: 'Przekazanie', text: 'Instrukcja, testowe przebiegi, w razie potrzeby — wsparcie.' },
    ],
    faqTitle: 'Pytania o parsery',
    faq: [
      {
        question: 'Ile kosztuje parser?',
        answer:
          'Prosty jednorazowy zbiór jest tańszy niż stały monitoring z kilku źródeł. Wycena — po przykładzie stron i pól.',
      },
      {
        question: 'Czy legalne jest parsowanie stron?',
        answer:
          'Zależy od źródła i warunków użytkowania. Wskazujemy ryzyka i alternatywy (oficjalne API).',
      },
      {
        question: 'Dokąd można oddawać dane?',
        answer: 'Excel, Google Sheets, baza danych, CRM lub Twoje API/webhook.',
      },
      {
        question: 'Co jeśli strona zmieni layout?',
        answer: 'Zakładamy wsparcie: monitoring i szybkie poprawki selektorów.',
      },
    ],
    midCtaTitle: 'Masz źródło i ręczną rutynę?',
    midCtaText: 'Wyślij przykład strony i listę pól — powiemy, czy da się zautomatyzować.',
    ctaTitle: 'Gotowy wycenić parser pod Twoje zadanie?',
    ctaText: 'Krótki opis źródła — i dostaniesz werdykt oraz orientacyjną wycenę.',
    relatedServiceLabel: 'Wszystkie usługi',
    pricingLabel: 'Ceny',
    portfolioLabel: 'Portfolio',
    contactLabel: 'Skontaktuj się',
    breadcrumbLabel: 'Parsery',
  },
};
