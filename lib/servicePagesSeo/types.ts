import type { ServiceAudienceCopy } from '@/components/ServiceAudienceSection';

export type ServiceSeoSlug = 'chatbots' | 'websites' | 'design';

export type ServiceRichBlock = { title: string; body: string };

export type ServiceLongFormBundle = {
  audienceSection: ServiceAudienceCopy;
  aboutParagraphs: string[];
  whatWeDoTitle: string;
  whatWeDoItems: ServiceRichBlock[];
  techTitle: string;
  techLines: string[];
  faqTitle: string;
  faq: { question: string; answer: string }[];
  websitesExtras?: {
    scopeTitle: string;
    scopeItems: string[];
  };
  designExtras?: {
    processTitle: string;
    processItems: string[];
  };
};
