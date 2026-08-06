/**
 * Кейси портфоліо (мінімальний контент для хабу / SEO-URL).
 * Повні case study: lib/caseStudies.ts
 * Картки хабу: lib/portfolioCards.ts
 */
import { PORTFOLIO_CARDS } from '@/lib/portfolioCards';
import { getCaseStudy, getCaseStudyCopy } from '@/lib/caseStudies';

type Lang = 'uk' | 'en' | 'pl' | 'ru';

function buildLang(lang: Lang) {
  const out: Record<string, Record<string, unknown>> = {};
  for (const card of PORTFOLIO_CARDS) {
    const c = card.copy[lang] || card.copy.uk;
    const study = getCaseStudy(card.id);
    const studyCopy = getCaseStudyCopy(card.id, lang);
    out[card.id] = {
      title: studyCopy?.heroTitle || c.title,
      subtitle: c.subtitle,
      mainImage: study?.mainImage || card.image,
      description: studyCopy?.heroLead || c.highlights,
      portfolioCategory: study?.portfolioCategory || card.category,
      category: card.category === 'chatbots' ? 'Telegram Bot' : 'Website',
      liveUrl: study?.liveUrl || card.liveUrl,
      features: c.tags,
      results: studyCopy?.stats,
    };
  }
  return out;
}

export const cases = {
  uk: buildLang('uk'),
  en: buildLang('en'),
  pl: buildLang('pl'),
  ru: buildLang('ru'),
};
