import { buildChatbotIntentLanding, type ChatbotIntentLocale, type ChatbotIntentSlug } from './build';
import type { SeoLandingCopy } from '../types';

const PL_LOCALE: ChatbotIntentLocale = {
  benefitsTitle: 'Co daje bot w Telegramie',
  benefits: [
    'Leady i kwalifikacja 24/7 bez managera na linii',
    'Płatności LiqPay, Fondy, Stripe lub krypto w czacie',
    'Synchronizacja z CRM, Google Sheets, Notion i API',
    'Odpowiedzi AI z przekazaniem do człowieka',
    'Mailingi, lejki i przypomnienia bez dodatkowego SaaS',
    'Panel admina lub bot-admin dla zespołu',
  ],
  audienceTitle: 'Dla kogo',
  audience: [
    'Chcesz gotowe rozwiązanie, nie konstruktor DIY',
    'Powtarzalne pytania obciążają zespół',
    'Leady z Telegram / Instagram / reklam w jednym kanale',
    'Płatności bez osobnej strony kasowej',
    'Synchronizacja CRM',
    'MVP produktu w dni, nie miesiące',
  ],
  deliverablesTitle: 'Co otrzymujesz',
  deliverables: [
    { title: 'Scenariusz dialogu', text: 'Kroki, gałęzie, teksty i kryteria sukcesu.' },
    { title: 'Bot produkcyjny', text: 'Deploy, webhooki, baza, logi — stabilna praca.' },
    { title: 'Integracje', text: 'Płatności, CRM, arkusze, kanały, admin.' },
    { title: 'Instrukcja i wsparcie', text: 'Jak zmieniać teksty, plany, mailingi po starcie.' },
  ],
  useCasesTitle: 'Typowe scenariusze',
  useCases: [
    { title: 'Bot leadów i zapisów', text: 'Wybór usługi, kontakt, potwierdzenie.' },
    { title: 'Sprzedaż w czacie', text: 'Katalog, koszyk, płatność — bez wychodzenia z Telegram.' },
    { title: 'Support i FAQ', text: 'Odpowiedzi i eskalacja do managera.' },
    { title: 'Subskrypcje', text: 'Płatność, odnowienie, dostęp do kanału/grupy.' },
  ],
  showcaseTitle: 'Case studies',
  showcaseIntro: 'Realne boty pod klucz: marketplace, subskrypcje, automatyzacja.',
  showcaseCaptions: ['TradeGround — marketplace', 'Bot subskrypcji', 'Automatyzacja leadów'],
  stats: [
    { value: '200+', label: 'projektów' },
    { value: 'od $100', label: 'start bota' },
    { value: '24h', label: 'odpowiedź' },
    { value: '3–10 dni', label: 'typowe MVP' },
  ],
  sections: [
    {
      title: 'Dlaczego TeleBots',
      paragraphs: [
        'Jeden zespół: scenariusz, kod, integracje, start — bez ping-ponga między agencjami.',
        'Od prostych leadów po płatności, CRM i AI. Cena po briefie — bez ukrytych kosztów.',
      ],
    },
  ],
  processTitle: 'Etapy pracy',
  processSteps: [
    { title: 'Brief i scenariusz', text: 'Cel, kroki dialogu, integracje.' },
    { title: 'Development i testy', text: 'Bot, płatności/CRM, QA.' },
    { title: 'Start i wsparcie', text: 'Deploy, instrukcja, poprawki po starcie.' },
  ],
  relatedServiceLabel: 'Wszystkie chatboty',
  pricingLabel: 'Cennik',
  portfolioLabel: 'Portfolio',
  contactLabel: 'Kontakt',
  midCtaText: 'Opisz zadanie — zaproponujemy scenariusz i wycenę.',
  ctaText: 'Zostaw kontakt — odpowiemy w 24h z wyceną.',
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
  'chatbots-buy': buildChatbotIntentLanding(PL_LOCALE, {
    metaTitle: 'Kup chatboty | Bot Telegram pod klucz od $100',
    metaDescription:
      'Kup chatboty biznesowe: Telegram pod klucz od $100. Leady, płatności, CRM, AI. 200+ projektów. Darmowa konsultacja — TeleBots.',
    keywords: 'kup chatbot, zamów bota telegram, chatbot biznesowy, cena bota telegram, TeleBots',
    h1: 'Kup chatboty — Telegram pod klucz od $100',
    intro: 'Nie szablon z konstruktora — działający bot Telegram pod Twój proces.',
    lead: 'Szukasz „kup chatboty” — potrzebujesz gotowego narzędzia do leadów bez zespołu dev. Projektujemy, budujemy, wdrażamy.',
    breadcrumbLabel: 'Kup chatboty',
    faqTitle: 'FAQ: zakup chatbota',
    faq: [
      {
        question: 'Ile kosztuje chatbot?',
        answer: 'Prosty bot leadów od $100. Płatności, CRM — od $200–300 lub custom. Cena po briefie.',
      },
      ...FAQ_TAIL_PL,
    ],
    midCtaTitle: 'Chcesz bota pod swój scenariusz?',
    ctaTitle: 'Kup chatbot — wycena',
  }),
  'chatbot-development-price': buildChatbotIntentLanding(PL_LOCALE, {
    metaTitle: 'Rozwój chatbotów cena | od $100 — TeleBots',
    metaDescription:
      'Cena rozwoju chatbotów od $100. Pakiety LITE/PRO/CUSTOM. Telegram z płatnościami, CRM, AI. 200+ projektów.',
    keywords: 'rozwój chatbotów cena, cena chatbota, koszt bota telegram, TeleBots',
    h1: 'Rozwój chatbotów — cena od $100',
    intro: 'Przejrzyste widełki cenowe rozwoju chatbotów.',
    lead: 'Zapytanie o cenę rozwoju chatbotów — orientacyjne widełki i FAQ; dokładna wycena po briefie.',
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
      ...FAQ_TAIL_PL.slice(0, 2),
    ],
    midCtaTitle: 'Potrzebujesz dokładnej wyceny?',
    ctaTitle: 'Sprawdź cenę rozwoju chatbota',
  }),
  'telegram-bot-order-price': buildChatbotIntentLanding(PL_LOCALE, {
    metaTitle: 'Bot Telegram na zamówienie — koszt od $100',
    metaDescription:
      'Bot Telegram na zamówienie: koszt od $100, MVP 3–10 dni. Płatności, CRM, AI. 200+ projektów — TeleBots.',
    keywords: 'bot telegram na zamówienie cena, koszt bota telegram, zamów bota telegram, TeleBots',
    h1: 'Bot Telegram na zamówienie — koszt od $100',
    intro: 'Bot Telegram na zamówienie pod Twój biznes — scenariusz prowadzący do leadu lub płatności.',
    lead: 'Szukasz kosztu bota na zamówienie — widełki budżetu i FAQ poniżej. Wycena po briefie.',
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
      ...FAQ_TAIL_PL,
    ],
    midCtaTitle: 'Potrzebujesz bota na zamówienie?',
    ctaTitle: 'Zamów bota Telegram — wycena',
  }),
};
