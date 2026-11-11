import type { Language } from '@/components/translations';
import UxAiScrollBoot from '@/components/UxAiScrollBoot';

type UxCard = {
  value: string | null;
  title: string;
  metric: string;
};

type UxCopy = {
  heading: [string, string];
  sub: [string, string];
  cards: UxCard[];
};

/** Matches site/lib/i18n/home.ts uxHeading / uxSub / uxCards */
const COPY: Record<Language, UxCopy> = {
  uk: {
    heading: ['Дизайн', 'Розробка сайтів'],
    sub: ['від Figma до продакшену', 'одна команда TeleBots для дизайну та коду'],
    cards: [
      { value: 'x3', title: 'Швидша здача', metric: 'Delivery Time' },
      { value: null, title: 'UX під конверсію', metric: 'Conversion Rate' },
      { value: '90+', title: 'Швидкі сторінки', metric: 'Page Speed' },
      { value: null, title: 'Чистий бренд і UI', metric: 'Design System' },
    ],
  },
  en: {
    heading: ['Design', 'Web development'],
    sub: ['from Figma to production', 'one TeleBots team for design and code'],
    cards: [
      { value: 'x3', title: 'Faster delivery', metric: 'Delivery Time' },
      { value: null, title: 'Conversion-focused UX', metric: 'Conversion Rate' },
      { value: '90+', title: 'Fast pages', metric: 'Page Speed' },
      { value: null, title: 'Clear brand & UI', metric: 'Design System' },
    ],
  },
  pl: {
    heading: ['Design', 'Tworzenie stron'],
    sub: ['od Figmy do produkcji', 'jeden zespół TeleBots dla designu i kodu'],
    cards: [
      { value: 'x3', title: 'Szybsza realizacja', metric: 'Delivery Time' },
      { value: null, title: 'UX pod konwersję', metric: 'Conversion Rate' },
      { value: '90+', title: 'Szybkie strony', metric: 'Page Speed' },
      { value: null, title: 'Czysty brand i UI', metric: 'Design System' },
    ],
  },
  ru: {
    heading: ['Дизайн', 'Разработка сайтов'],
    sub: ['от Figma до продакшена', 'одна команда TeleBots для дизайна и кода'],
    cards: [
      { value: 'x3', title: 'Быстрее сдача', metric: 'Delivery Time' },
      { value: null, title: 'UX под конверсию', metric: 'Conversion Rate' },
      { value: '90+', title: 'Быстрые страницы', metric: 'Page Speed' },
      { value: null, title: 'Чистый бренд и UI', metric: 'Design System' },
    ],
  },
};

function ArrowDownLeft() {
  return (
    <svg
      className="tabler-icon tabler-icon-arrow-down-left ux-ai-arrow"
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17 7l-10 10" />
      <path d="M16 17l-9 0l0 -9" />
    </svg>
  );
}

function ArrowUpRightUxAi() {
  return (
    <svg
      className="tabler-icon tabler-icon-arrow-up-right ux-ai-arrow"
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17 7l-10 10" />
      <path d="M8 7l9 0l0 9" />
    </svg>
  );
}

export default function HomeUxAiSection({ lang }: { lang: Language }) {
  const c = COPY[lang] ?? COPY.uk;

  return (
    <section aria-labelledby="ux-ai-heading" className="ux-ai" id="ux-ai">
      <UxAiScrollBoot />
      <div className="ux-ai-stage">
        <div className="ux-ai-intro">
          <h2 className="ux-ai-heading" id="ux-ai-heading">
            <span className="ux-ai-word">{c.heading[0]}</span>
            <span className="ux-ai-plus">+</span>
            <span className="ux-ai-word">{c.heading[1]}</span>
          </h2>
          <p className="ux-ai-sub">
            <span className="ux-ai-line">{c.sub[0]}</span>
            <span className="ux-ai-line">{c.sub[1]}</span>
          </p>
        </div>
        <ul className="ux-ai-drum" role="list">
          {c.cards.map((card, i) => (
            <li className="ux-ai-card" key={card.metric}>
              {card.value !== null ? (
                <p className="ux-ai-value">{card.value}</p>
              ) : (
                <span aria-hidden="true" className="ux-ai-arrow-box">
                  {i === 1 ? <ArrowUpRightUxAi /> : <ArrowDownLeft />}
                </span>
              )}
              <h3 className="ux-ai-title">{card.title}</h3>
              <p className="ux-ai-metric" lang="en">
                {card.metric}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
