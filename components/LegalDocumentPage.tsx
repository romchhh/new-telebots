import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { translations, type Language } from '@/components/translations';
import { legal } from '@/lib/legal';
import {
  legalPagesCopy,
  LEGAL_DOC_PATH,
  type LegalDocId,
} from '@/lib/legalPagesCopy';
import { SITE_PX } from '@/lib/siteLayout';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';

const display = { fontFamily: 'var(--font-display)' };

const DOC_NAV_LABEL: Record<Language, Record<LegalDocId, string>> = {
  uk: { privacy: 'Конфіденційність', terms: 'Умови', refund: 'Повернення' },
  en: { privacy: 'Privacy', terms: 'Terms', refund: 'Refunds' },
  pl: { privacy: 'Prywatność', terms: 'Regulamin', refund: 'Zwroty' },
  ru: { privacy: 'Конфиденциальность', terms: 'Условия', refund: 'Возврат' },
};

export default function LegalDocumentPage({
  doc,
  lang,
}: {
  doc: LegalDocId;
  lang: Language;
}) {
  const t = translations[lang];
  const copy = legalPagesCopy[lang][doc];
  const path = LEGAL_DOC_PATH[doc];
  const title =
    doc === 'privacy' ? t.footer.privacy : doc === 'terms' ? t.footer.terms : t.footer.refund;

  const breadcrumbs = [
    { name: BREADCRUMB_HOME[lang], href: `/${lang}` },
    { name: title },
  ];

  const otherDocs = (['privacy', 'terms', 'refund'] as const).filter((id) => id !== doc);

  return (
    <>
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="localBusiness" lang={lang} />
      <StructuredData
        type="breadcrumb"
        lang={lang}
        breadcrumbs={[
          { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
          { name: title, url: `/${lang}/${path}` },
        ]}
      />
      <main id="main-content">
          <section className={`border-b border-gray-100 bg-white pt-24 md:pt-28 ${SITE_PX}`}>
            <div className="mx-auto max-w-3xl pb-8 md:pb-10">
              <Breadcrumbs items={breadcrumbs} variant="inline" />
              <h1
                className="mt-2 text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl md:text-[2.75rem]"
                style={display}
              >
                {copy.title}
              </h1>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
                {copy.updated}
              </p>
            </div>
          </section>

          <article className={`bg-white py-12 md:py-16 ${SITE_PX}`}>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-gray-700">{copy.intro}</p>

              <div className="mt-12 space-y-10">
                {copy.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="mb-3 text-xl font-black tracking-tight text-black md:text-2xl">
                      {section.title}
                    </h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="mb-3 leading-relaxed text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && section.bullets.length > 0 ? (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                        {section.bullets.map((item) => (
                          <li key={item} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-14 border-t border-gray-200 pt-8">
                <h2 className="mb-4 text-xl font-black text-black">{t.footer.legalBlockTitle}</h2>
                <ul className="space-y-1.5 text-sm leading-relaxed text-gray-700 md:text-base">
                  <li>
                    {t.footer.recipientLabel}: {t.footer.companyName}
                  </li>
                  <li>
                    {t.footer.footerIban}: {legal.iban}
                  </li>
                  <li>
                    {t.footer.footerEdrpou}: {legal.edrpou}
                  </li>
                  <li>
                    {t.footer.address}: {t.footer.legalAddress}
                  </li>
                  <li>
                    {t.footer.phone}:{' '}
                    <a href={`tel:${legal.phoneRaw}`} className="text-black underline-offset-2 hover:underline">
                      {legal.phone}
                    </a>
                  </li>
                  <li>
                    {t.footer.email}:{' '}
                    <a href={`mailto:${legal.email}`} className="text-black underline-offset-2 hover:underline">
                      {legal.email}
                    </a>
                  </li>
                </ul>
              </div>

              <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold" aria-label="Legal">
                {otherDocs.map((id) => (
                  <Link
                    key={id}
                    href={`/${lang}/${LEGAL_DOC_PATH[id]}`}
                    className="text-black underline-offset-4 hover:text-brand hover:underline"
                  >
                    {DOC_NAV_LABEL[lang][id]}
                  </Link>
                ))}
                <Link href={`/${lang}`} className="text-gray-500 underline-offset-4 hover:text-black hover:underline">
                  {t.footer.backHome}
                </Link>
              </nav>
            </div>
          </article>
        </main>
    </>
  );
}
