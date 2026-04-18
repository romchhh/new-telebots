import type { ServiceLongFormBundle } from './types';
import type { ServiceSeoSlug } from './types';

const priceFaq =
  'Dokładną wycenę ustalamy po bezpłatnej konsultacji i zakresie; orientacyjne poziomy znajdziesz w tabeli planów poniżej na stronie.';

export const PL_SERVICE_LONGFORM: Record<ServiceSeoSlug, ServiceLongFormBundle> = {
  chatbots: {
    audienceSection: {
      title: 'Dla kogo',
      titleAccent: 'to jest:',
      items: [
        'E-commerce przyjmujące zamówienia i płatności w Telegramie',
        'Usługi (salony, kliniki, studia) z automatyczną rezerwacją',
        'Projekty edukacyjne: dostęp, przypomnienia, zadania',
        'Agencje nieruchomości: selekcja ofert i umówienie spotkań',
        'HoReCa: menu, rezerwacja stolika, dostawy',
        'B2B: kwalifikacja leadów i demo',
        'Media i społeczności z płatnym lub ograniczonym dostępem',
      ],
    },
    aboutParagraphs: [
      'W komunikatorach klienci oczekują szybkiej odpowiedzi bez zbędnych kroków. Bot Telegram to nie tylko autoresponder — to kanał sprzedaży i obsługi, który działa 24/7 i skaluje się z ruchem.',
      'TeleBots dostarcza chatboty pod klucz: od zbierania leadów po katalogi, płatności, CRM i odpowiedzi wspierane AI. Ponad 200 wdrożeń — wiemy, które architektury wytrzymują produkcję.',
      'Proces jest przejrzysty: konsultacja, specyfikacja, wdrożenie, dokumentacja i szkolenie. Po starcie zostajemy w kontakcie — wsparcie i rozwój ustalamy osobno.',
      'Stack: Python (aiogram, Pyrogram, Telethon), Node.js, integracje Mono, LiqPay, WayForPay, Stripe, AmoCRM, HubSpot, Arkusze Google. Pierwszy prototyp scenariusza możliwy już po starcie; pełne wdrożenia zwykle 2–4 tygodnie w zależności od zakresu.',
    ],
    whatWeDoTitle: 'Co budujemy',
    whatWeDoItems: [
      {
        title: 'Boty sprzedażowe w Telegramie',
        body: 'Katalog, koszyk, płatności online (Mono, LiqPay, WayForPay). Klient kończy ścieżkę w komunikatorze, a zamówienia trafiają do CRM lub Arkuszy bez ręcznego przepisywania.',
      },
      {
        title: 'Boty rezerwacyjne',
        body: 'Wolne terminy, rezerwacja, przypomnienia (np. dzień i godzinę przed). Dla salonów, terapeutów, lekarzy, korepetytorów, trenerów.',
      },
      {
        title: 'Boty wsparcia',
        body: 'FAQ, status zamówienia, zasady dostawy, cennik 24/7. Trudniejsze wątki przekazujemy do konsultanta.',
      },
      {
        title: 'Asystenci AI (GPT)',
        body: 'OpenAI do nietypowych pytań, triażu i rekomendacji opartych o Twoją bazę wiedzy — w granicach polityki marki.',
      },
      {
        title: 'Mailingi i powiadomienia',
        body: 'Segmentowane wysyłki, promocje, przypomnienia i statusy — automatycznie, bez ręcznych list.',
      },
    ],
    techTitle: 'Technologie i integracje',
    techLines: [
      'Platformy: Telegram, WhatsApp Business API, Viber, Facebook Messenger',
      'Języki: Python (aiogram 3, Pyrogram, Telethon), Node.js',
      'Płatności: Mono, LiqPay, WayForPay, Stripe',
      'CRM: AmoCRM, HubSpot, Pipedrive, Arkusze Google',
      'Bazy: PostgreSQL, MongoDB, SQLite',
      'AI: OpenAI GPT-4o, function calling, RAG w razie potrzeby',
      'Hosting: VPS/chmura (DigitalOcean, Hetzner itd.) pod obciążenie',
    ],
    faqTitle: 'FAQ',
    faq: [
      { question: 'Ile kosztuje bot Telegram?', answer: priceFaq },
      {
        question: 'Jak długo trwa development?',
        answer:
          'Prosty bot: ok. 1–2 tygodnie. Z płatnościami i integracjami: 2–4 tygodnie. Pierwszy prototyp scenariusza możliwy szybko po starcie po uzgodnieniu zakresu.',
      },
      {
        question: 'Czy bot nadaje się do małej firmy?',
        answer:
          'Tak — szybsza odpowiedź i mniej utraconych leadów zwykle zwraca się już przy umiarkowanym ruchu.',
      },
      {
        question: 'Czy jest opieka po wdrożeniu?',
        answer:
          'Tak — ustalamy SLA, poprawki i rozwój osobno; przekazujemy dostępy i krótkie szkolenie.',
      },
      {
        question: 'Czy robicie boty na WhatsApp i Viber?',
        answer:
          'Tak — Telegram, WhatsApp Business API, Viber, Messenger, także wielokanałowo.',
      },
      {
        question: 'Czy bot może łączyć się ze stroną?',
        answer:
          'Tak — przyciski, formularze i UTM kierują leady do bota i dalej do CRM lub bazy.',
      },
    ],
  },
  websites: {
    audienceSection: {
      title: 'Strona pod klucz',
      titleAccent: 'dla Ciebie, jeśli:',
      items: [
        'Potrzebujesz szybkiej, nowoczesnej witryny na każdym urządzeniu',
        'Chcesz leady i płatności bez dżungli wtyczek',
        'Planujesz sklep lub katalog z wygodnym panelem',
        'Zależy Ci na SEO i czytelnej analityce',
        'Potrzebujesz integracji CRM, komunikatorów, e-maila, reklam',
        'Nie chcesz sztywnego konstruktora z tymi samymi szablonami',
        'Szukasz partnera end-to-end: od struktury do startu i opieki',
      ],
    },
    aboutParagraphs: [
      'Strona to pierwszy sygnał wiarygodności — powinna prowadzić do kontaktu lub zakupu. TeleBots buduje witryny nastawione na konwersję, szybkość i SEO.',
      'Next.js, React i TypeScript dają wysokie wyniki PageSpeed i przewidywalną architekturę. Projekt i development w jednym zespole — bez strat w przekazaniu.',
      'Dostarczamy analitykę, formy, integracje z CRM i komunikatorami oraz techniczne SEO od pierwszego dnia. Terminy uzgadniamy na piśmie; po starcie pomagamy z przekazaniem i utrzymaniem.',
      'Budżet zależy od liczby widoków, integracji i poziomu designu — wycena po krótkim briefie; orientacyjne poziomy w tabeli poniżej.',
    ],
    whatWeDoTitle: 'Typy stron',
    whatWeDoItems: [
      {
        title: 'Landing',
        body: 'Jedna strona konwersyjna: oferta, dowody społeczne, CTA. Świetny na start produktu lub kampanie płatne.',
      },
      {
        title: 'Wizytówka',
        body: '3–6 podstron: usługi, o nas, realizacje, kontakt — szybki zaufanie budujący zestaw informacji.',
      },
      {
        title: 'Serwis firmowy',
        body: 'Rozbudowana IA, blog, FAQ, integracje CRM i czatu — skalowalna bez przepisywania wszystkiego od zera.',
      },
      {
        title: 'Sklep internetowy',
        body: 'Katalog, filtry, koszyk, checkout, płatności, konto klienta, panel admina, opcjonalna synchronizacja stanów.',
      },
      {
        title: 'Strona dla eksperta',
        body: 'Branding osobisty z rezerwacją (Google Calendar, Calendly lub moduł dedykowany).',
      },
    ],
    techTitle: 'Stack techniczny',
    techLines: [
      'Frontend: Next.js 14+, React, TypeScript',
      'Style: Tailwind CSS, CSS Modules, styled-components — wg projektu',
      'CMS: Sanity, Strapi, Contentful lub własny panel',
      'Hosting: Vercel, DigitalOcean, Hetzner',
      'Serwer: Ubuntu, Nginx, PM2, SSL (Let’s Encrypt)',
      'Bazy: PostgreSQL, MongoDB',
    ],
    faqTitle: 'FAQ',
    faq: [
      { question: 'Ile kosztuje strona pod klucz?', answer: priceFaq },
      {
        question: 'Jak długo trwa realizacja?',
        answer:
          'Landing: od kilku dni. Wizytówka: ok. 1–2 tygodnie. Serwis firmowy: 2–4 tygodnie. Sklep zależy od integracji — opisujemy harmonogram w ofercie.',
      },
      {
        question: 'Czy pomagacie w SEO po wdrożeniu?',
        answer:
          'Wdrażamy fundamenty techniczne. Dalszy content/linkbuilding — osobny zakres, jeśli potrzebujesz wzrostu.',
      },
      {
        question: 'Czy można zamówić sam design lub sam kod?',
        answer:
          'Tak — projekt w Figmie, implementacja z gotowych makiet lub optymalizacja istniejącej witryny.',
      },
      {
        question: 'Czy utrzymujecie strony po starcie?',
        answer:
          'Tak — pakiety utrzymania: aktualizacje, monitoring, drobne zmiany i rozwój funkcji.',
      },
    ],
    websitesExtras: {
      scopeTitle: 'Co zwykle obejmuje wdrożenie',
      scopeItems: [
        'Analiza niszy i konkurentów',
        'Wireframe’y / prototyp w Figma',
        'Projekt wizualny zgodny z marką',
        'Responsywna implementacja',
        'SEO: meta, sitemap.xml, robots.txt',
        'Optymalizacja wydajności (Core Web Vitals)',
        'Formularze do Telegrama lub e-maila',
        'Google Analytics i Search Console',
        'Wdrożenie z SSL',
        'Przekazanie dostępów i szkolenie',
        'Opieka po wdrożeniu — wg umowy',
      ],
    },
  },
  design: {
    audienceSection: {
      title: 'Design z nami',
      titleAccent: 'jeśli:',
      items: [
        'Startujesz z produktem lub rebrandingiem i potrzebujesz logo oraz systemu wizualnego',
        'Strona lub aplikacja wygląda przestarzałe — potrzebny nowoczesny UI/UX',
        'Potrzebujesz makiet w Figmie z dobrym handoffem dla devów',
        'Druk i social media wymagają spójnej palety i typografii',
        'Masz zespół developerski — potrzebujesz specyfikacji i komponentów',
        'Chcesz spójności marki na wszystkich punktach styku',
      ],
    },
    aboutParagraphs: [
      'Design buduje zaufanie zanim użytkownik przeczyta tekst. Chaos wizualny sygnalizuje nieprofesjonalizm — porządkujemy to procesem i pakietem plików.',
      'TeleBots: logo i identyfikacja, UI/UX stron i aplikacji, gotowe zestawy w Figmie. Designer z doświadczeniem w e-commerce, B2B, medycynie, edukacji, HoReCa.',
      'Projektujemy interfejsy pod cel: hierarchia, kolor i typografia wspierają konwersję i rozpoznawalność.',
    ],
    whatWeDoTitle: 'Zakres usług designu',
    whatWeDoItems: [
      {
        title: 'Logo i identyfikacja',
        body: 'Koncepcje, iteracje, paleta, typografia, wzory, ikony. Pliki AI, SVG, PNG (jasny/ciemny).',
      },
      {
        title: 'Brand book',
        body: 'Zasady użycia logo, kolorów, typografii, odstępów, zakazów. Szablony pod social i prezentacje.',
      },
      {
        title: 'UI/UX stron',
        body: 'Wireframe’y do pełnego UI w Figmie (desktop + mobile), auto-layout, komentarze dla devów.',
      },
      {
        title: 'UI/UX dla Telegram Web App',
        body: 'Ekrany zgodne z ograniczeniami platformy iOS/Android, biblioteka komponentów.',
      },
      {
        title: 'Szablony social',
        body: 'Posty, stories, okładki, highlighty w jednym stylu marki.',
      },
      {
        title: 'Materiały drukowane',
        body: 'Wizytówki, ulotki, bannery, prezentacje — pliki pod druk (CMYK, 300 dpi, spady).',
      },
    ],
    techTitle: 'Narzędzia i przekazanie',
    techLines: [
      'Figma: prototypy, UI kit, auto-layout',
      'Illustrator / Photoshop: logo i print',
      'Komponenty i tokeny pod przewidywalny handoff',
      'Dopasowanie do istniejącego brand booka, jeśli jest',
    ],
    faqTitle: 'FAQ',
    faq: [
      { question: 'Ile kosztuje logo?', answer: priceFaq },
      {
        question: 'W jakich formatach dostanę pliki?',
        answer: 'AI/SVG/PNG/PDF dla identyfikacji; projekt Figma z komponentami dla UI/UX.',
      },
      {
        question: 'Czy macie portfolio?',
        answer: 'Tak — sekcja portfolio na stronie z przykładami brandingu i UI.',
      },
      {
        question: 'Jak długo trwa projekt logo?',
        answer: 'Zależy od rund i zakresu — ustalamy po briefie; orientacje w tabeli poniżej.',
      },
      {
        question: 'Czy robicie redesign logo?',
        answer: 'Tak — aktualizacja kształtu pod digital, typografia, eksport nowych pakietów.',
      },
      {
        question: 'Pakiety MVP dla startupów?',
        answer: 'Tak — kompaktowe zestawy logo + baza stylu + UI landinga lub aplikacji.',
      },
    ],
    designExtras: {
      processTitle: 'Nasz proces',
      processItems: [
        'Brief: formularz lub rozmowa — cele i ograniczenia',
        'Analiza: rynek, konkurencja, odbiorcy',
        'Koncepcje: 2–3 kierunki do wyboru',
        'Dopracowanie: iteracje do finału',
        'Przekazanie: pliki, guidelines, komponenty Figma',
      ],
    },
  },
};
