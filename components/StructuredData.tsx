'use client';

import { useParams } from 'next/navigation';
import { Language } from './translations';
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateServiceSchema,
  generateWebSiteSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateProductSchema,
  generateHowToSchema,
  generateContactPageSchema,
  generateAggregateRatingSchema,
  generateItemListSchema,
  generateArticleSchemaForBlog,
  generateCollectionPageSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/seo';

interface StructuredDataProps {
  type: 'organization' | 'breadcrumb' | 'article' | 'service' | 'website' | 'faq' | 'localBusiness' | 'product' | 'howTo' | 'contactPage' | 'aggregateRating' | 'itemList' | 'blogPosting' | 'collectionPage' | 'softwareApplication';
  caseId?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceUrl?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  howToSteps?: Array<{ name: string; text: string }>;
  items?: Array<{ name: string; url: string; description?: string }>;
  rating?: number;
  reviewCount?: number;
  blogTitle?: string;
  blogDescription?: string;
  blogPublishedTime?: string;
}

export default function StructuredData({
  type,
  caseId,
  serviceName,
  serviceDescription,
  serviceUrl,
  breadcrumbs,
  faqs,
  howToSteps,
  items,
  rating,
  reviewCount,
  blogTitle,
  blogDescription,
  blogPublishedTime,
}: StructuredDataProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;

  let schema = null;

  switch (type) {
    case 'organization':
      schema = generateOrganizationSchema(validLang);
      break;
    case 'localBusiness':
      schema = generateLocalBusinessSchema(validLang);
      break;
    case 'breadcrumb':
      if (breadcrumbs) {
        schema = generateBreadcrumbSchema(breadcrumbs, validLang);
      }
      break;
    case 'article':
      if (caseId) {
        schema = generateArticleSchema(caseId, validLang);
      }
      break;
    case 'blogPosting':
      if (blogTitle && blogDescription && blogPublishedTime) {
        schema = generateArticleSchemaForBlog(blogTitle, blogDescription, blogPublishedTime, validLang);
      }
      break;
    case 'service':
      if (serviceName && serviceDescription) {
        schema = generateServiceSchema(serviceName, serviceDescription, validLang, serviceUrl);
      }
      break;
    case 'product':
      if (serviceName && serviceDescription) {
        schema = generateProductSchema(serviceName, serviceDescription, validLang);
      }
      break;
    case 'website':
      schema = generateWebSiteSchema(validLang);
      break;
    case 'faq':
      if (faqs) {
        schema = generateFAQSchema(faqs);
      }
      break;
    case 'howTo':
      if (howToSteps) {
        schema = generateHowToSchema(howToSteps, validLang);
      }
      break;
    case 'contactPage':
      schema = generateContactPageSchema(validLang);
      break;
    case 'aggregateRating':
      schema = generateAggregateRatingSchema(rating, reviewCount);
      break;
    case 'itemList':
      if (items) {
        schema = generateItemListSchema(items, validLang);
      }
      break;
    case 'collectionPage':
      schema = generateCollectionPageSchema(validLang);
      break;
    case 'softwareApplication':
      schema = generateSoftwareApplicationSchema(validLang);
      break;
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}








