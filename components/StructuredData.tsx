import { Language } from './translations';
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateServiceSchema,
  generateWebSiteSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateServiceOfferSchema,
  generateHowToSchema,
  generateContactPageSchema,
  generateItemListSchema,
  generateArticleSchemaForBlog,
} from '@/lib/seo';

interface StructuredDataProps {
  type: 'organization' | 'breadcrumb' | 'article' | 'service' | 'website' | 'faq' | 'localBusiness' | 'serviceOffer' | 'howTo' | 'contactPage' | 'itemList' | 'blogPosting';
  caseId?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceUrl?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  howToSteps?: Array<{ name: string; text: string }>;
  items?: Array<{ name: string; url: string; description?: string }>;
  blogTitle?: string;
  blogDescription?: string;
  blogPublishedTime?: string;
  blogModifiedTime?: string;
  blogImage?: string;
  blogSlug?: string;
  lang?: Language;
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
  blogTitle,
  blogDescription,
  blogPublishedTime,
  blogModifiedTime,
  blogImage,
  blogSlug,
  lang = 'uk',
}: StructuredDataProps) {
  let schema = null;

  switch (type) {
    case 'organization':
      schema = generateOrganizationSchema(lang);
      break;
    case 'localBusiness':
      schema = generateLocalBusinessSchema(lang);
      break;
    case 'breadcrumb':
      if (breadcrumbs) {
        schema = generateBreadcrumbSchema(breadcrumbs, lang);
      }
      break;
    case 'article':
      if (caseId) {
        schema = generateArticleSchema(caseId, lang);
      }
      break;
    case 'blogPosting':
      if (blogTitle && blogDescription && blogPublishedTime) {
        schema = generateArticleSchemaForBlog(
          blogTitle,
          blogDescription,
          blogPublishedTime,
          lang,
          {
            modifiedTime: blogModifiedTime,
            image: blogImage,
            slug: blogSlug,
          }
        );
      }
      break;
    case 'service':
      if (serviceName && serviceDescription) {
        schema = generateServiceSchema(serviceName, serviceDescription, lang, serviceUrl);
      }
      break;
    case 'serviceOffer':
      if (serviceName && serviceDescription) {
        schema = generateServiceOfferSchema(serviceName, serviceDescription, lang);
      }
      break;
    case 'website':
      schema = generateWebSiteSchema(lang);
      break;
    case 'faq':
      if (faqs) {
        schema = generateFAQSchema(faqs);
      }
      break;
    case 'howTo':
      if (howToSteps) {
        schema = generateHowToSchema(howToSteps, lang);
      }
      break;
    case 'contactPage':
      schema = generateContactPageSchema(lang);
      break;
    case 'itemList':
      if (items) {
        schema = generateItemListSchema(items, lang);
      }
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
