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
} from '@/lib/seo';

interface StructuredDataProps {
  type: 'organization' | 'breadcrumb' | 'article' | 'service' | 'website' | 'faq';
  caseId?: string;
  serviceName?: string;
  serviceDescription?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

export default function StructuredData({
  type,
  caseId,
  serviceName,
  serviceDescription,
  breadcrumbs,
  faqs,
}: StructuredDataProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;

  let schema = null;

  switch (type) {
    case 'organization':
      schema = generateOrganizationSchema(validLang);
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
    case 'service':
      if (serviceName && serviceDescription) {
        schema = generateServiceSchema(serviceName, serviceDescription, validLang);
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
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}



