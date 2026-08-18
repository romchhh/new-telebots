import OfferPageClient from '@/components/OfferPageClient';
import SitePageShell from '@/components/SitePageShell';
import { translations, Language } from '@/components/translations';
import { offerPageCopy } from '@/lib/offerPageCopy';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateServiceSchema,
} from '@/lib/seo';
import { siteUrl } from '@/lib/site';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';

export default async function OfferPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];
  const p = offerPageCopy[lang];
  const pageUrl = `${siteUrl}/${lang}/offer`;

  const structuredData = [
    generateOrganizationSchema(lang),
    generateLocalBusinessSchema(lang),
    generateBreadcrumbSchema(
      [
        { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
        { name: p.breadcrumb, url: `/${lang}/offer` },
      ],
      lang
    ),
    generateServiceSchema(p.heroTitle, p.metaDescription, lang, pageUrl),
    generateFAQSchema(p.faqItems),
  ];

  return (
    <>
      {structuredData.map((schema) => (
        <script
          key={schema['@type'] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SitePageShell initialLang={lang} t={t} transparentOnLight modalServiceName={p.metaTitle}>
        <OfferPageClient key={lang} lang={lang} />
      </SitePageShell>
    </>
  );
}
