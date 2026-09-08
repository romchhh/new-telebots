import { buildWebsiteIntentLanding, type WebsiteIntentLocale, type WebsiteIntentSlug } from './build';
import type { SeoLandingCopy } from '../types';

const LABELS = {
  relatedServiceLabel: 'Wszystkie strony i rozwiązania web',
  pricingLabel: 'Ceny stron internetowych',
  portfolioLabel: 'Case studies stron',
  contactLabel: 'Napisz do nas',
} as const;

type IntentBody = Omit<WebsiteIntentLocale, keyof typeof LABELS>;

const SITE_PRICE_BODY: IntentBody = {
  benefitsTitle: 'Z czego składa się cena strony internetowej',
  benefits: [
    'Liczba unikalnych szablonów stron i złożoność designu',
    'CMS/panel: kto i jak aktualizuje treści bez programisty',
    'Integracje: CRM, formularze, analityka, komunikatory, płatności',
    'Podstawa SEO: meta, sitemap, szybkość, Core Web Vitals',
    'Języki i lokalizacja (uk/en/pl/ru)',
    'Wsparcie po wdrożeniu: poprawki, aktualizacje, nowe sekcje',
  ],
  audienceTitle: 'Dla kogo jest wycena tworzenia strony',
  audience: [
    'Planujesz budżet na stronę lub redesign i potrzebujesz realistycznych widełek',
    'Porównujesz oferty agencji i chcesz zrozumieć różnice w cenach',
    'Potrzebujesz strony pod reklamy Google/Meta — liczy się szybkość i konwersja',
    'Masz bota lub Instagram, ale potrzebujesz kanału SEO w wyszukiwarce',
    'Chcesz rozwinąć landing page w stronę firmową lub sklep',
    'Musisz uzasadnić koszty zarządowi lub inwestorom',
  ],
  deliverablesTitle: 'Co otrzymujesz wraz z wyceną',
  deliverables: [
    { title: 'Rozbicie na etapy', text: 'Struktura, design, front-end, CMS, integracje i testy — osobno w każdej linii.' },
    { title: 'Kilka wariantów zakresu', text: 'Landing page, strona firmowa lub sklep — z różnymi sumami i terminami.' },
    { title: 'Lista wyłączeń', text: 'Domena, hosting, płatne API i treści — bez niespodzianek na fakturze.' },
    { title: 'Okres ważności oferty', text: 'Cenę blokujemy na uzgodniony czas, dopóki podejmujesz decyzję.' },
  ],
  useCasesTitle: 'Orientacyjne budżety według typu strony',
  useCases: [
    { title: 'Landing page — $150–300', text: 'Jedna oferta, formularz, analityka, responsywność, podstawowe SEO.' },
    { title: 'Strona firmowa — $500–800', text: 'Do 10 podstron, CMS, rozszerzone SEO, formularze i integracje.' },
    { title: 'Sklep internetowy — od $400', text: 'Katalog, koszyk, płatności, panel admina, filtry i statusy zamówień.' },
    { title: 'Zaawansowany e-commerce — wg specyfikacji', text: 'ERP, B2B, wielojęzyczność, kody promocyjne i synchronizacja magazynu.' },
  ],
  showcaseTitle: 'Strony w różnych budżetach w portfolio',
  showcaseIntro: 'Od landing page po e-commerce na Next.js — realne projekty z SEO i integracjami.',
  showcaseCaptions: ['Landing page pod konwersję', 'Strona firmowa z CMS', 'E-commerce z płatnościami'],
  stats: [
    { value: 'od $150', label: 'landing page' },
    { value: 'od $400', label: 'sklep internetowy' },
    { value: '24 godz', label: 'na wycenę' },
    { value: '200+', label: 'projektów' },
  ],
  sections: [
    {
      title: 'Dlaczego podobne strony kosztują inaczej',
      paragraphs: [
        'Dwa „landing page za $200” mogą różnić się trzykrotnie: w jednym szablon bez SEO i analityki, w drugim unikalny design, szybkość Core Web Vitals i integracja z CRM.',
        'Pokazujemy kalkulację etapami, żeby było jasne, za co płacisz. Gdy budżet jest ograniczony — startujemy z MVP i rozwijamy po pierwszych leadach.',
      ],
    },
  ],
  processTitle: 'Jak liczymy koszt strony internetowej',
  processSteps: [
    { title: 'Brief 20–30 minut', text: 'Cel, struktura, integracje, języki i deadline.' },
    { title: 'Wycena etapami', text: 'Wysyłamy widełki budżetu z wariantami zakresu.' },
    { title: 'Fiksacja w umowie', text: 'Uzgodniona suma jest zablokowana — dopłaty tylko za nowe zadania.' },
  ],
  midCtaText: 'Opisz projekt — wrócimy z rozbiciem budżetu na etapy.',
  ctaText: 'Wysyłamy wycenę z kilkoma wariantami zakresu w ciągu 24 godzin.',
};

const LANDING_PRICE_BODY: IntentBody = {
  benefitsTitle: 'Co wchodzi w cenę landing page',
  benefits: [
    'Struktura pod konwersję: hero, oferta, korzyści, CTA, FAQ',
    'Responsywny layout na mobile i tablet',
    'Formularz z integracją CRM lub Telegram',
    'Podstawowe SEO: title, description, Open Graph, sitemap',
    'Szybkość ładowania i Core Web Vitals',
    'Google Analytics / Meta Pixel w razie potrzeby',
  ],
  audienceTitle: 'Kiedy landing page to dobry format',
  audience: [
    'Startujesz reklamy w Google lub Meta i potrzebujesz jednej strony docelowej',
    'Testujesz nowy produkt lub ofertę bez dużej strony',
    'Potrzebujesz szybkiego startu w 1–2 tygodnie',
    'Masz bota w Telegramie, ale potrzebujesz kanału SEO w wyszukiwarce',
    'Planujesz później rozbudować stronę firmową',
    'Chcesz stałą cenę przed rozpoczęciem prac',
  ],
  deliverablesTitle: 'Co otrzymujesz',
  deliverables: [
    { title: 'Makieta i struktura', text: 'Wireframe lub mockup w Figma przed kodem — poprawki przed startem developmentu.' },
    { title: 'Gotowy landing page', text: 'Deploy, SSL, formularz, analityka — gotowy pod reklamy.' },
    { title: 'Podstawa SEO', text: 'Meta tagi, sitemap, robots.txt, szybkość na mobile.' },
    { title: 'Instrukcja', text: 'Jak edytować teksty przez CMS lub panel admina.' },
  ],
  useCasesTitle: 'Landing page, które tworzymy',
  useCases: [
    { title: 'Premiera produktu', text: 'Jedna oferta, formularz, analityka — walidacja popytu.' },
    { title: 'Kampania reklamowa', text: 'UTM, konwersje, testy A/B nagłówków i CTA.' },
    { title: 'Usługi i B2B', text: 'Case studies, proces, formularz briefu dla managera.' },
    { title: 'Wydarzenie lub kurs', text: 'Program, prelegenci, płatność lub rejestracja.' },
  ],
  showcaseTitle: 'Landing page w portfolio',
  showcaseIntro: 'Strony pod konwersję: od studiów fitness po platformy edukacyjne.',
  showcaseCaptions: ['Landing page usług', 'Projekt edukacyjny', 'Strona B2B'],
  stats: [
    { value: 'od $150', label: 'landing page pod klucz' },
    { value: '1–2 tyg', label: 'typowy termin' },
    { value: '24 godz', label: 'na wycenę' },
    { value: 'SEO', label: 'od pierwszego dnia' },
  ],
  sections: [
    {
      title: 'Landing page czy wielostronicowa strona',
      paragraphs: [
        'Landing page działa, gdy masz jedną ofertę i jeden cel — lead lub zakup. Gdy potrzebujesz O nas, bloga i case studies — lepiej od razu zaplanować strukturę firmową.',
        'Po udanym teście oferty rozwijamy landing w pełną stronę, zachowując design system i analitykę.',
      ],
    },
  ],
  processTitle: 'Jak wdrażamy landing page',
  processSteps: [
    { title: 'Struktura i oferta', text: 'Uzgodniamy bloki, teksty i CTA przed kodowaniem.' },
    { title: 'Development i integracje', text: 'Next.js, formularz, analityka, testy na mobile.' },
    { title: 'Start i poprawki', text: 'Deploy, weryfikacja pikseli reklamowych, dopracowanie po pierwszych leadach.' },
  ],
  midCtaText: 'Opowiedz o ofercie — podamy cenę landing page i termin.',
  ctaText: 'Otrzymaj wycenę landing page w ciągu 24 godzin.',
};

const STORE_PRICE_BODY: IntentBody = {
  benefitsTitle: 'Z czego składa się cena sklepu internetowego',
  benefits: [
    'Rozmiar katalogu: SKU, warianty, filtry, wyszukiwarka',
    'Płatności: LiqPay, WayForPay, MonoPay, Stripe, krypto',
    'Dostawa: Nova Poshta, kurier, odbiór osobisty, międzynarodowa',
    'Panel admina: produkty, zamówienia, rabaty, kody promocyjne',
    'SEO kategorii i kart produktów',
    'Synchronizacja z magazynem, ERP lub marketplace',
  ],
  audienceTitle: 'Dla kogo jest wycena e-commerce',
  audience: [
    'Przechodzisz z Instagram/Telegram na własny kanał sprzedaży',
    'Konstruktor szablonów ogranicza logikę cen i opcji produktów',
    'Potrzebujesz integracji z magazynem lub ERP',
    'Planujesz ruch SEO na kategorie produktów',
    'B2B: indywidualne ceny i panel dealera',
    'Chcesz połączyć stronę i bota Telegram do leadów',
  ],
  deliverablesTitle: 'Co wchodzi w sklep pod klucz',
  deliverables: [
    { title: 'Katalog i koszyk', text: 'Filtry, warianty, zdjęcia, SEO-friendly URL.' },
    { title: 'Checkout i płatności', text: 'Koszyk, dostawa, płatność, potwierdzenie zamówienia.' },
    { title: 'Panel administracyjny', text: 'Produkty, zamówienia, statusy, podstawowa analityka.' },
    { title: 'Integracje', text: 'CRM, mailing, komunikatory — wg uzgodnionej specyfikacji.' },
  ],
  useCasesTitle: 'Orientacyjne budżety e-commerce',
  useCases: [
    { title: 'Sklep startowy — od $400', text: 'Katalog do ~100 SKU, płatności, panel admina, podstawowe SEO.' },
    { title: 'Sklep średni — $800–1500', text: 'Filtry, kody promocyjne, kilka metod dostawy.' },
    { title: 'Zaawansowany e-commerce — wg specyfikacji', text: 'ERP, B2B, wielojęzyczność, synchronizacja magazynu.' },
    { title: 'Strona + bot', text: 'Katalog SEO w Google + szybkie leady w Telegramie.' },
  ],
  showcaseTitle: 'Sklepy internetowe w portfolio',
  showcaseIntro: 'E-commerce na Next.js: moda, kosmetyki, edukacja i B2B.',
  showcaseCaptions: ['Fashion e-commerce', 'Platforma sprzedaży', 'Sklep z płatnościami'],
  stats: [
    { value: 'od $400', label: 'sklep pod klucz' },
    { value: '6–12 tyg', label: 'typowy termin' },
    { value: 'Next.js', label: 'szybkość i SEO' },
    { value: '200+', label: 'projektów' },
  ],
  sections: [
    {
      title: 'Sklep custom czy konstruktor',
      paragraphs: [
        'Konstruktory są dobre na szybki start z małym katalogiem. Gdy potrzebujesz niestandardowych opcji, cen B2B lub synchronizacji magazynu — custom na Next.js zwraca kontrolę i SEO.',
        'Często łączymy stronę pod organiczny Google i bota Telegram pod szybkie leady z reklam — jeden zespół prowadzi oba kanały.',
      ],
    },
  ],
  processTitle: 'Jak liczymy koszt sklepu internetowego',
  processSteps: [
    { title: 'Audyt katalogu', text: 'SKU, opcje, płatności, dostawa, integracje.' },
    { title: 'Wycena i prototyp', text: 'Struktura katalogu i checkout przed developmentem.' },
    { title: 'Wdrożenie etapami', text: 'MVP → płatności → integracje → skalowanie.' },
  ],
  midCtaText: 'Opisz katalog i proces sprzedaży — podamy widełki budżetu.',
  ctaText: 'Wysyłamy wycenę sklepu internetowego w ciągu 24 godzin.',
};

const FAQ_TAIL = [
  {
    question: 'Ile trwa tworzenie strony internetowej?',
    answer: 'Landing page — 1–2 tygodnie, strona firmowa — 3–6 tygodni, sklep internetowy — 6–12 tygodni w zależności od integracji.',
  },
  {
    question: 'Czy SEO jest w cenie?',
    answer: 'Tak — podstawowe SEO (meta, sitemap, szybkość, struktura nagłówków) wdrażamy od pierwszego dnia. Content marketing wyceniamy osobno.',
  },
  {
    question: 'Czy można połączyć stronę i bota Telegram?',
    answer: 'Tak. Popularny model: strona pod SEO w Google + bot pod leady z Instagramu i reklam. Jeden zespół TeleBots prowadzi oba kanały.',
  },
];

export const PL_WEBSITE_INTENT: Record<WebsiteIntentSlug, SeoLandingCopy> = {
  'website-development-price': buildWebsiteIntentLanding(
    { ...LABELS, ...SITE_PRICE_BODY },
    {
      metaTitle: 'Cena strony internetowej | od $150 — TeleBots',
      metaDescription:
        'Cena strony internetowej od $150: landing page, strona firmowa od $500, sklep od $400. Next.js, SEO, panel admina. 200+ projektów. Bezpłatna konsultacja.',
      keywords:
        'cena strony internetowej, ile kosztuje strona www, koszt strony internetowej, cena landing page, tworzenie stron www, TeleBots',
      h1: 'Cena strony internetowej — pakiety od $150',
      intro: 'Przejrzyste widełki cen tworzenia stron: od landing page po e-commerce na Next.js.',
      lead:
        'Szukasz „ceny strony internetowej”, bo potrzebujesz realnego budżetu przed startem. Poniżej — co wpływa na sumę, orientacyjne widełki według typu strony i jak przygotowujemy wycenę.',
      breadcrumbLabel: 'Cena strony internetowej',
      faqTitle: 'FAQ: cena strony internetowej',
      faq: [
        {
          question: 'Ile kosztuje stworzenie strony internetowej?',
          answer: 'Landing page — $150–300, strona firmowa — $500–800, sklep internetowy — od $400. Dokładną sumę ustalamy po briefie.',
        },
        {
          question: 'Co wchodzi w cenę?',
          answer: 'Design/struktura, front-end, CMS, podstawowe SEO, formularze, deploy i instrukcja. Hosting i domena osobno.',
        },
        ...FAQ_TAIL,
      ],
      midCtaTitle: 'Potrzebujesz dokładnej wyceny wg specyfikacji?',
      ctaTitle: 'Sprawdź cenę strony internetowej',
    }
  ),
  'landing-page-price': buildWebsiteIntentLanding(
    { ...LABELS, ...LANDING_PRICE_BODY },
    {
      metaTitle: 'Ile kosztuje landing page w 2026 | od $150',
      metaDescription:
        'Cena landing page od $150: struktura pod konwersję, responsywność, podstawowe SEO, formularz. Start w 1–2 tygodnie. Bezpłatna konsultacja — TeleBots.',
      keywords:
        'ile kosztuje landing page, cena landing page, landing page pod klucz cena, zamówić landing page, koszt landing page, TeleBots',
      h1: 'Ile kosztuje landing page — ceny od $150',
      intro: 'Orientacyjna cena landing page pod klucz: co wchodzi w zakres i od czego zależy budżet.',
      lead:
        'Landing page to najszybszy sposób na test oferty lub start reklam. Poniżej — typowe pakiety, terminy i co dokładnie otrzymujesz za podaną kwotę.',
      breadcrumbLabel: 'Cena landing page',
      faqTitle: 'FAQ: cena landing page',
      faq: [
        {
          question: 'Ile kosztuje landing page pod klucz?',
          answer: 'Typowy landing page to $150–300. Zaawansowane animacje, integracje lub kilka języków wpływają na wycenę.',
        },
        {
          question: 'Czy landing page nadaje się pod reklamy Google/Meta?',
          answer: 'Tak. Od pierwszego dnia zakładamy szybkość, UTM, konwersje i layout na mobile.',
        },
        ...FAQ_TAIL.slice(0, 2),
      ],
      midCtaTitle: 'Potrzebujesz landing page pod reklamy?',
      ctaTitle: 'Sprawdź cenę landing page',
    }
  ),
  'online-store-price': buildWebsiteIntentLanding(
    { ...LABELS, ...STORE_PRICE_BODY },
    {
      metaTitle: 'Cena sklepu internetowego | od $400',
      metaDescription:
        'Cena sklepu internetowego od $400: katalog, koszyk, płatności, panel admina, SEO. E-commerce na Next.js. 200+ projektów. Bezpłatna konsultacja — TeleBots.',
      keywords:
        'cena sklepu internetowego, ile kosztuje sklep internetowy, koszt sklepu online, wycena e-commerce, TeleBots',
      h1: 'Cena sklepu internetowego — od $400',
      intro: 'Orientacyjna cena sklepu internetowego pod klucz: katalog, płatności, dostawa, panel admina.',
      lead:
        'Koszt e-commerce zależy od katalogu, płatności, dostawy i integracji. Poniżej — typowe widełki i co wchodzi w pakiet bazowy.',
      breadcrumbLabel: 'Cena sklepu internetowego',
      faqTitle: 'FAQ: cena sklepu internetowego',
      faq: [
        {
          question: 'Ile kosztuje sklep internetowy?',
          answer: 'Startowy — od $400. Średni z filtrami i kodami promocyjnymi — $800–1500. Zaawansowane integracje — wg specyfikacji.',
        },
        {
          question: 'Jakie płatności integrujecie?',
          answer: 'LiqPay, WayForPay, MonoPay, Stripe i krypto — zależnie od potrzeb Twojego rynku.',
        },
        ...FAQ_TAIL,
      ],
      midCtaTitle: 'Potrzebujesz sklepu pod swój katalog?',
      ctaTitle: 'Sprawdź cenę sklepu internetowego',
    }
  ),
};
