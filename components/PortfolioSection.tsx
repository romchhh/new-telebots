'use client';

import { useParams } from 'next/navigation';
import { useScrollAnimation } from './useScrollAnimation';
import { Language } from './translations';
import { getPortfolioCards } from '@/lib/portfolioCards';
import PortfolioShowcaseScroller, {
  PortfolioShowcaseHeading,
} from '@/components/PortfolioShowcaseScroller';

interface PortfolioSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function PortfolioSection({ t }: PortfolioSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [contentRef, isContentVisible] = useScrollAnimation();
  const cards = [...getPortfolioCards(validLang)].sort((a, b) => {
    if (a.category === b.category) return 0;
    return a.category === 'websites' ? -1 : 1;
  });

  if (cards.length === 0) {
    return null;
  }

  const line1 = t.portfolio.homeTitleLine1 ?? t.portfolio.title;
  const line2 = t.portfolio.homeTitleLine2;

  return (
    <div ref={contentRef} className={`scroll-animate-up ${isContentVisible ? 'animate' : ''}`}>
      <PortfolioShowcaseScroller
        lang={validLang}
        cards={cards}
        sectionId="portfolio"
        headingId="home-portfolio-heading"
        heading={<PortfolioShowcaseHeading line1={line1} line2={line2} />}
        viewAllHref={`/${validLang}/portfolio`}
        viewAllLabel={t.portfolio.viewPortfolio}
        scrollPrevLabel={t.portfolio.homeScrollPrev ?? 'Previous'}
        scrollNextLabel={t.portfolio.homeScrollNext ?? 'Next'}
        categoryCopy={{
          filterWebsites: t.portfolio.filterWebsites,
          filterChatbots: t.portfolio.filterChatbots,
        }}
      />
    </div>
  );
}
