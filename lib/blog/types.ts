export type BlogCategory = 'pricing' | 'telegram' | 'websites' | 'ai' | 'security' | 'business';

export type BlogSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'pricing'; plans: BlogPricingPlan[] }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'callout'; text: string };

export type BlogPricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

/** Блог лише українською */
export type BlogPost = {
  slug: string;
  category: BlogCategory;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
  title: string;
  description: string;
  keywords: string;
  excerpt: string;
  /** Структурований контент (ціни, FAQ) */
  sections?: BlogSection[];
  /** Повний контент з Blog/BlogPostN.jsx */
  legacyId?: number;
};
