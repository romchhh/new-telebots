import { buildChatbotIntentLanding, type ChatbotIntentLocale, type ChatbotIntentSlug } from './build';
import type { SeoLandingCopy } from '../types';

/** Etykiety nawigacji to UI, nie treść strony — mogą być wspólne. */
const LABELS = {
  relatedServiceLabel: 'Wszystkie chatboty',
  pricingLabel: 'Cennik',
  portfolioLabel: 'Portfolio',
  contactLabel: 'Kontakt',
} as const;

type IntentBody = Omit<ChatbotIntentLocale, keyof typeof LABELS>;

/** „kup chatboty” — zamiar zakupu gotowego rozwiązania pod klucz. */
const BUY_BODY: IntentBody = {
  benefitsTitle: 'Co dokładnie kupujesz',
  benefits: [
    'Bot zbudowany pod Twój proces, a nie szablon z konstruktora z opłatą miesięczną',
    'Kod źródłowy i wszystkie dostępy zostają u Ciebie — bez uzależnienia od wykonawcy',
    'Przyjmowanie płatności w czacie: LiqPay, Fondy, Stripe lub krypto',
    'Połączenie z CRM, Google Sheets i wewnętrznymi API Twojego zespołu',
    'Panel admina do zmiany tekstów, pakietów i mailingów bez programisty',
    'Poprawki gwarancyjne po starcie oraz instrukcja dla zespołu',
  ],
  audienceTitle: 'Kiedy warto kupić gotowe rozwiązanie',
  audience: [
    'Konstruktory były już testowane — pojawiły się limity i stałe opłaty',
    'Bot musi działać na konkretną datę startu lub kampanii',
    'Nie ma własnego programisty, który utrzyma rozwiązanie',
    'Leady z Instagrama, reklam i strony trzeba zebrać w jednym kanale',
    'Chcesz przyjmować płatności bez osobnej strony kasowej',
    'Potrzebujesz jasnego zakresu i stałej kwoty przed startem prac',
  ],
  deliverablesTitle: 'Co obejmuje zakup',
  deliverables: [
    { title: 'Scenariusz i teksty', text: 'Mapa dialogu, gałęzie, treść przycisków i kryteria skutecznego leada.' },
    { title: 'Bot na produkcji', text: 'Wdrożony bot z bazą danych, logami i monitoringiem działania.' },
    { title: 'Kod i dostępy', text: 'Repozytorium, tokeny i dokumentacja przekazywane po odbiorze.' },
    { title: 'Szkolenie zespołu', text: 'Pokazujemy, jak zmieniać treści i czytać statystyki. Jesteśmy dostępni w pierwszych tygodniach.' },
  ],
  useCasesTitle: 'Co klienci kupują najczęściej',
  useCases: [
    { title: 'Bot leadowy', text: 'Menu usług, formularz kontaktu, natychmiastowe powiadomienie managera.' },
    { title: 'Sklep w Telegramie', text: 'Katalog, koszyk, płatność i status zamówienia bez wychodzenia z czatu.' },
    { title: 'Klub subskrypcyjny', text: 'Płatność za dostęp, automatyczne odnowienie, nadawanie i odbieranie dostępu.' },
    { title: 'Bot wsparcia', text: 'Odpowiedzi na powtarzalne pytania i przekazanie trudnych spraw człowiekowi.' },
  ],
  showcaseTitle: 'Boty już przekazane klientom',
  showcaseIntro: 'Wdrożenia pod klucz: marketplace, sprzedaż z płatnościami i dostęp subskrypcyjny.',
  showcaseCaptions: [
    'TradeGround — marketplace w Telegramie',
    'Bot subskrypcji i dostępu',
    'Sprzedaż z płatnością w czacie',
  ],
  stats: [
    { value: '200+', label: 'wdrożonych projektów' },
    { value: 'od $100', label: 'bot pod klucz' },
    { value: '3–10 dni', label: 'do przekazania' },
    { value: '100%', label: 'kod własnością klienta' },
  ],
  sections: [
    {
      title: 'Gotowy bot czy konstruktor — co wybrać',
      paragraphs: [
        'Konstruktory sprawdzają się przy prostym menu i testowaniu pomysłu. Gdy pojawiają się płatności, własna baza klientów lub nietypowa logika, zaczynają się obejścia i opłaty za każdą integrację.',
        'Rozwój na zamówienie kosztuje więcej na starcie, ale kod i dane należą do Ciebie. Bot rośnie razem z firmą, zamiast zatrzymywać się na limicie planu.',
      ],
    },
  ],
  processTitle: 'Jak wygląda zakup',
  processSteps: [
    { title: 'Brief i wycena', text: 'Omawiamy zadanie i ustalamy zakres oraz kwotę przed rozpoczęciem prac.' },
    { title: 'Development i demo', text: 'Pokazujemy działającego bota na etapach pośrednich — korygujesz przed startem.' },
    { title: 'Przekazanie i gwarancja', text: 'Oddajemy dostępy, kod i instrukcję. Poprawki gwarancyjne po uruchomieniu.' },
  ],
  midCtaText: 'Powiedz, jaki proces zamknąć — dobierzemy gotowy format i podamy kwotę.',
  ctaText: 'Zostaw kontakt: zakres prac i cenę wyślemy w ciągu 24 godzin.',
};

/** „cena rozwoju chatbotów” — zamiar poznania budżetu przed startem. */
const PRICE_BODY: IntentBody = {
  benefitsTitle: 'Z czego składa się cena',
  benefits: [
    'Liczba gałęzi dialogu i ekranów, które trzeba zaprojektować',
    'Integracje: bramka płatności, CRM, magazyn, zewnętrzne API — każda dokłada godzin',
    'Praca z danymi: własna baza, konta użytkowników, historia zamówień',
    'Moduł AI i baza wiedzy, jeśli potrzebne są swobodne odpowiedzi zamiast przycisków',
    'Wersje językowe interfejsu bota i panelu administracyjnego',
    'Forma wsparcia po starcie: pojedyncze poprawki czy stała opieka miesięczna',
  ],
  audienceTitle: 'Komu przyda się to zestawienie',
  audience: [
    'Planujesz budżet kwartalny i potrzebujesz realnych widełek',
    'Porównujesz oferty wykonawców i chcesz zrozumieć różnicę w cenach',
    'Dostałeś wycenę, która wygląda na zawyżoną albo podejrzanie niską',
    'Musisz uzasadnić wydatek zarządowi lub inwestorowi',
    'Wybierasz między MVP teraz a pełną wersją później',
    'Chcesz policzyć koszt utrzymania, a nie tylko samego wdrożenia',
  ],
  deliverablesTitle: 'Co otrzymujesz razem z wyceną',
  deliverables: [
    { title: 'Rozbicie na etapy', text: 'Ile godzin zajmuje scenariusz, development, integracje i testy.' },
    { title: 'Kilka wariantów zakresu', text: 'Minimalne MVP, wersja robocza i rozszerzona — każda z własną kwotą.' },
    { title: 'Lista wykluczeń', text: 'Hosting, płatne API i treści — żeby faktura nie zaskoczyła.' },
    { title: 'Termin ważności oferty', text: 'Utrzymujemy cenę przez ustalony okres, gdy podejmujesz decyzję.' },
  ],
  useCasesTitle: 'Orientacyjne budżety według typu bota',
  useCases: [
    { title: 'Bot leadowy — od $100', text: 'Menu, formularz zgłoszenia, powiadomienie managera, podstawowe statystyki.' },
    { title: 'Bot z płatnościami — od $200', text: 'Katalog, koszyk, bramka płatnicza i potwierdzenie zamówienia.' },
    { title: 'Bot z CRM — od $300', text: 'Synchronizacja szans sprzedaży, segmenty klientów, automatyczne mailingi.' },
    { title: 'AI i złożona logika — wg specyfikacji', text: 'Baza wiedzy, role, konta użytkowników i zewnętrzne API.' },
  ],
  showcaseTitle: 'Projekty w różnych budżetach',
  showcaseIntro: 'Od prostego bota leadowego po systemy z płatnościami i panelem — przykłady z różnych przedziałów cenowych.',
  showcaseCaptions: [
    'TradeGround — złożona logika i role',
    'Bot z płatnościami i subskrypcjami',
    'Automatyzacja leadów w średnim budżecie',
  ],
  stats: [
    { value: 'od $100', label: 'bot leadowy' },
    { value: 'od $200', label: 'bot z płatnościami' },
    { value: '24h', label: 'na wycenę' },
    { value: '0', label: 'ukrytych dopłat' },
  ],
  sections: [
    {
      title: 'Dlaczego podobne boty kosztują różnie',
      paragraphs: [
        'Dwie oferty na „bota z płatnościami” potrafią różnić się trzykrotnie. Różnica zwykle nie leży w stawce, tylko w zakresie: czy w ogóle policzono testy płatności, obsługę błędów, logi, panel admina i dokumentację.',
        'Pokazujemy kalkulację etapami, żeby było widać, za co dokładnie płacisz. Przy ograniczonym budżecie usuwamy to, co opcjonalne, i wracamy do tego po pierwszych sprzedażach.',
      ],
    },
  ],
  processTitle: 'Jak liczymy koszt',
  processSteps: [
    { title: 'Brief 20–30 minut', text: 'Ustalamy cel, scenariusz, integracje i spodziewaną liczbę zgłoszeń.' },
    { title: 'Wycena etapami', text: 'Wysyłamy rozbicie godzin i widełki budżetu z wariantami zakresu.' },
    { title: 'Zapis w umowie', text: 'Ustaloną kwotę i terminy utrwalamy — dopłaty tylko za nowe zadania.' },
  ],
  midCtaText: 'Opisz zadanie — wrócimy z budżetem rozbitym na etapy.',
  ctaText: 'Wyślemy wycenę z kilkoma wariantami zakresu w ciągu 24 godzin.',
};

/** „bot Telegram na zamówienie” — zamiar zbudowania nietypowego rozwiązania. */
const ORDER_BODY: IntentBody = {
  benefitsTitle: 'Czym bot na zamówienie różni się od szablonu',
  benefits: [
    'Scenariusz piszemy pod Twój lejek, zamiast dopasowywać proces do gotowca',
    'Dowolna logika: kalkulacje, warunki, role, ograniczenia czasowe lub regionalne',
    'Integracja z tym, co już działa w firmie — od księgowości po własne API',
    'Struktura i ton komunikatów zgodne z Twoją marką',
    'Obciążenie i bezpieczeństwo projektowane pod realną liczbę rozmów',
    'Rozwój etapami: najpierw MVP, potem moduły według priorytetu',
  ],
  audienceTitle: 'Kiedy potrzebne jest rozwiązanie na zamówienie',
  audience: [
    'Proces sprzedaży ma nietypowe kroki, których nie obsługują gotowe narzędzia',
    'Potrzebna integracja z wewnętrznym systemem księgowym lub własnym API',
    'Bot musi obsłużyć kilka ról: klient, manager, administrator',
    'Kalkulacje dzieją się w bocie: cena, dostawa, rabaty, stany magazynowe',
    'Planujesz rozwijać produkt i dokładać moduły w ciągu roku',
    'Liczy się kontrola dostępów, logowanie i trzymanie danych po Twojej stronie',
  ],
  deliverablesTitle: 'Co obejmuje zamówienie',
  deliverables: [
    { title: 'Specyfikacja techniczna', text: 'Scenariusze, role, dane i integracje spisane i zatwierdzone przed developmentem.' },
    { title: 'Praca w sprintach', text: 'Pokazujemy efekt co tydzień, a Ty korygujesz priorytety w trakcie.' },
    { title: 'Testy obciążeniowe', text: 'Sprawdzamy zachowanie przy szczytowym ruchu i awariach usług zewnętrznych.' },
    { title: 'Opieka po wdrożeniu', text: 'Monitoring, aktualizacje zależności i nowe moduły jako osobne zadania.' },
  ],
  useCasesTitle: 'Przykłady botów na zamówienie',
  useCases: [
    { title: 'Marketplace w Telegramie', text: 'Sprzedawcy, oferty, transakcje, prowizja i spory rozstrzygane w bocie.' },
    { title: 'Usługi z dojazdem', text: 'Zgłoszenie, dobór specjalisty, kalkulacja ceny i status realizacji.' },
    { title: 'Bot wewnętrzny firmy', text: 'Wnioski pracowników, akceptacje, raporty i powiadomienia dla kierownictwa.' },
    { title: 'Bot z kontem klienta', text: 'Historia zamówień, saldo, dokumenty i ponowny zakup jednym kliknięciem.' },
  ],
  showcaseTitle: 'Boty zbudowane od zera',
  showcaseIntro: 'Nietypowe scenariusze z rolami, kalkulacjami i integracjami pod konkretny biznes.',
  showcaseCaptions: [
    'TradeGround — role, transakcje i prowizja',
    'Bot z kalkulacjami i kontem klienta',
    'Integracja z systemami wewnętrznymi',
  ],
  stats: [
    { value: 'od $100', label: 'bot na zamówienie' },
    { value: '3–10 dni', label: 'MVP' },
    { value: '2–4 tygodnie', label: 'złożone integracje' },
    { value: '24h', label: 'na odpowiedź' },
  ],
  sections: [
    {
      title: 'Ile trwa development na zamówienie',
      paragraphs: [
        'Działające MVP z podstawowym scenariuszem i jedną integracją powstaje zwykle w 3–10 dni. Rozwiązania z płatnościami, kontami i synchronizacją z systemem księgowym — 2–4 tygodnie.',
        'Terminy zależą nie tylko od kodu: najdłużej trwa zwykle uzyskanie dostępów do usług zewnętrznych. Dlatego listę potrzebnych API układamy już na pierwszej rozmowie.',
      ],
    },
  ],
  processTitle: 'Jak zamówić bota',
  processSteps: [
    { title: 'Rozmowa i specyfikacja', text: 'Analizujemy proces i spisujemy scenariusze, role oraz integracje.' },
    { title: 'Prototyp scenariusza', text: 'Pokazujemy strukturę dialogu przed napisaniem kodu — zmiany na tym etapie są bezpłatne.' },
    { title: 'Start i rozwój', text: 'Uruchamiamy, obserwujemy realne rozmowy i dopracowujemy na podstawie danych.' },
  ],
  midCtaText: 'Opowiedz o procesie — zaproponujemy strukturę bota, termin i koszt.',
  ctaText: 'Opisz zadanie: plan developmentu i koszt wrócą do Ciebie w 24 godziny.',
};

const FAQ_TAIL_PL = [
  {
    question: 'Ile trwa development?',
    answer: 'MVP często 3–10 dni. Złożone integracje — 2–4 tygodnie. Odpowiedź w 24h.',
  },
  {
    question: 'Płatności i CRM?',
    answer: 'Tak — bramki płatności i CRM/arkusze pod Twój proces sprzedaży.',
  },
  {
    question: 'Własny serwer?',
    answer: 'Doradzimy hosting; większość botów biznesowych działa na stabilnym VPS.',
  },
];

export const PL_CHATBOT_INTENT: Record<ChatbotIntentSlug, SeoLandingCopy> = {
  'chatbots-buy': buildChatbotIntentLanding(
    { ...LABELS, ...BUY_BODY },
    {
      metaTitle: 'Kup chatboty | Bot Telegram pod klucz od $100',
      metaDescription:
        'Kup chatboty biznesowe: Telegram pod klucz od $100. Leady, płatności, CRM, AI. 200+ projektów. Darmowa konsultacja — TeleBots.',
      keywords: 'kup chatbot, zamów bota telegram, chatbot biznesowy, cena bota telegram, TeleBots',
      h1: 'Kup chatboty — Telegram pod klucz od $100',
      intro: 'Nie szablon z konstruktora — działający bot Telegram pod Twój proces.',
      lead: 'Szukasz „kup chatboty” — potrzebujesz gotowego narzędzia do leadów bez zespołu dev. Projektujemy, budujemy, wdrażamy i przekazujemy razem z kodem i instrukcją.',
      breadcrumbLabel: 'Kup chatboty',
      faqTitle: 'FAQ: zakup chatbota',
      faq: [
        {
          question: 'Ile kosztuje chatbot?',
          answer: 'Prosty bot leadów od $100. Płatności, CRM — od $200–300 lub custom. Cena po briefie.',
        },
        {
          question: 'Czy kod zostaje u nas po zakupie?',
          answer:
            'Tak. Po odbiorze przekazujemy repozytorium, tokeny i dokumentację, więc nie jesteś od nas zależny przy dalszym utrzymaniu.',
        },
        ...FAQ_TAIL_PL,
      ],
      midCtaTitle: 'Chcesz bota pod swój scenariusz?',
      ctaTitle: 'Kup chatbot — wycena',
    }
  ),
  'chatbot-development-price': buildChatbotIntentLanding(
    { ...LABELS, ...PRICE_BODY },
    {
      metaTitle: 'Rozwój chatbotów cena | od $100 — TeleBots',
      metaDescription:
        'Cena rozwoju chatbotów od $100. Pakiety LITE/PRO/CUSTOM. Telegram z płatnościami, CRM, AI. 200+ projektów.',
      keywords: 'rozwój chatbotów cena, cena chatbota, koszt bota telegram, TeleBots',
      h1: 'Rozwój chatbotów — cena od $100',
      intro: 'Przejrzyste widełki cenowe rozwoju chatbotów.',
      lead: 'Szukasz ceny rozwoju chatbotów — poniżej to, co realnie kształtuje kwotę, orientacyjne widełki według typu bota i sposób liczenia wyceny.',
      breadcrumbLabel: 'Cena rozwoju chatbotów',
      faqTitle: 'FAQ: cena chatbotów',
      faq: [
        {
          question: 'Ile kosztuje rozwój chatbota?',
          answer: 'LITE od $100. PRO od $200–300. CUSTOM wg specyfikacji.',
        },
        {
          question: 'Co wchodzi w cenę?',
          answer: 'Scenariusz, kod, deploy, podstawowe integracje, dokumentacja.',
        },
        {
          question: 'Czy cena może się zmienić w trakcie?',
          answer:
            'Ustalony zakres jest zapisany w umowie. Kwota zmienia się tylko wtedy, gdy dokładasz zadania spoza pierwotnej specyfikacji.',
        },
        ...FAQ_TAIL_PL.slice(0, 2),
      ],
      midCtaTitle: 'Potrzebujesz dokładnej wyceny?',
      ctaTitle: 'Sprawdź cenę rozwoju chatbota',
    }
  ),
  'telegram-bot-order-price': buildChatbotIntentLanding(
    { ...LABELS, ...ORDER_BODY },
    {
      metaTitle: 'Bot Telegram na zamówienie — koszt od $100',
      metaDescription:
        'Bot Telegram na zamówienie: koszt od $100, MVP 3–10 dni. Płatności, CRM, AI. 200+ projektów — TeleBots.',
      keywords: 'bot telegram na zamówienie cena, koszt bota telegram, zamów bota telegram, TeleBots',
      h1: 'Bot Telegram na zamówienie — koszt od $100',
      intro: 'Bot Telegram na zamówienie pod Twój biznes — scenariusz prowadzący do leadu lub płatności.',
      lead: 'Szukasz kosztu bota na zamówienie — poniżej czym rozwój bespoke różni się od gotowców, ile trwa i co wpływa na końcową kwotę.',
      breadcrumbLabel: 'Bot Telegram na zamówienie',
      faqTitle: 'FAQ: bot na zamówienie',
      faq: [
        {
          question: 'Ile kosztuje bot na zamówienie?',
          answer: 'Od $100 za prosty bot leadów. Płatności, CRM — od $200–300.',
        },
        {
          question: 'Co wpływa na koszt?',
          answer: 'Gałęzie dialogu, integracje, języki, moduł AI, terminy i wsparcie.',
        },
        {
          question: 'Czy można zacząć od MVP i rozwijać później?',
          answer:
            'Tak, to najczęstsza ścieżka. Wersję bazową uruchamiamy w 3–10 dni, potem dokładamy moduły według priorytetu i danych z realnych rozmów.',
        },
        ...FAQ_TAIL_PL,
      ],
      midCtaTitle: 'Potrzebujesz bota na zamówienie?',
      ctaTitle: 'Zamów bota Telegram — wycena',
    }
  ),
};
