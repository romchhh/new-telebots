import type { PortfolioHomeShowcaseCardData } from '@/components/PortfolioHomeShowcaseCard';
import type { PortfolioCardCategory } from '@/lib/portfolioCards';

export type PortfolioShowcaseCard = PortfolioHomeShowcaseCardData & {
  category?: PortfolioCardCategory;
};

export type PortfolioShowcaseCategoryCopy = {
  filterWebsites?: string;
  filterChatbots?: string;
  fallback?: string;
};

export function resolveShowcaseCategoryLabel(
  card: PortfolioShowcaseCard,
  copy?: PortfolioShowcaseCategoryCopy
): string {
  if (card.tags[0]) return card.tags[0].toUpperCase();
  if (card.category && copy?.filterWebsites && copy?.filterChatbots) {
    return card.category === 'websites'
      ? copy.filterWebsites.toUpperCase()
      : copy.filterChatbots.toUpperCase();
  }
  return (copy?.fallback ?? 'CASE').toUpperCase();
}
