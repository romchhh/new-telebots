import PartnershipPageClient from '@/components/PartnershipPageClient';
import SitePageShell from '@/components/SitePageShell';
import { translations, Language } from '@/components/translations';
import { partnershipPageCopy } from '@/lib/partnershipPageCopy';
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateServiceSchema,
} from '@/lib/seo';
import { siteUrl } from '@/lib/site';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';

export default async function PartnershipPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];
  const p = partnershipPageCopy[lang];
  const pageUrl = `${siteUrl}/${lang}/partnership`;

  const structuredData = [
    generateOrganizationSchema(lang),
    generateLocalBusinessSchema(lang),
    generateBreadcrumbSchema(
      [
        { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
        { name: p.breadcrumb, url: `/${lang}/partnership` },
      ],
      lang
    ),
    generateServiceSchema(p.metaTitle, p.metaDescription, lang, pageUrl),
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
      <SitePageShell
        initialLang={lang}
        t={t}
        transparentOnLight
        modalServiceName={p.metaTitle}
      >
        <PartnershipPageClient lang={lang} />
      </SitePageShell>
    </>
  );
}
