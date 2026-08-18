import Image from 'next/image';
import Link from 'next/link';
import OrderCtaPill from '@/components/OrderCtaPill';
import StructuredData from '@/components/StructuredData';
import { translations, type Language } from '@/components/translations';
import { siteUrl } from '@/lib/site';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';
import {
  SEO_LANDING_MEDIA,
  SEO_LANDING_RELATED_SERVICE,
  getSeoLanding,
  type SeoLandingSlug,
} from '@/lib/seoLandings';
import SiteCtaBand from '@/components/SiteCtaBand';
import FaqAccordion from '@/components/FaqAccordion';
import PortfolioCaseCard from '@/components/PortfolioCaseCard';
import KeyboardKeyBadge, { KEYBOARD_BENEFIT_SYMBOLS } from '@/components/KeyboardKeyBadge';
import { getPortfolioCards } from '@/lib/portfolioCards';

const display = { fontFamily: 'var(--font-display)' };

export default function SeoSolutionPage({
  lang,
  slug,
}: {
  lang: Language;
  slug: SeoLandingSlug;
}) {
  const page = getSeoLanding(lang, slug);
  const t = translations[lang];

  if (!page) return null;

  const media = SEO_LANDING_MEDIA[slug];
  const relatedService = SEO_LANDING_RELATED_SERVICE[slug];
  const pageUrl = `${siteUrl}/${lang}/solutions/${slug}`;
  const relatedHref = relatedService
    ? `/${lang}/services/${relatedService}`
    : `/${lang}/services`;

  const portfolioById = new Map(getPortfolioCards(lang).map((card) => [card.id, card]));
  const showcaseCards = media.caseIds
    .map((id) => portfolioById.get(id))
    .filter((card): card is NonNullable<typeof card> => Boolean(card));

  return (
    <>
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="localBusiness" lang={lang} />
      <StructuredData
        type="breadcrumb"
        lang={lang}
        breadcrumbs={[
          { name: 'TeleBots', url: `/${lang}` },
          { name: t.nav.services, url: `/${lang}/services` },
          { name: page.breadcrumbLabel, url: `/${lang}/solutions/${slug}` },
        ]}
      />
      <StructuredData
        type="service"
        lang={lang}
        serviceName={page.h1}
        serviceDescription={page.metaDescription}
        serviceUrl={pageUrl}
      />
      <StructuredData type="faq" lang={lang} faqs={page.faq} />

      <main id="main-content">
          {/* Hero + photo */}
          <section className={`relative overflow-hidden border-b border-gray-100 bg-white pt-24 md:pt-28 ${SITE_PX}`}>
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px),
                  linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px)
                `,
                backgroundSize: '52px 52px',
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-24 top-1/4 z-0 h-[min(60vw,420px)] w-[min(60vw,420px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.12)_0%,transparent_70%)] blur-3xl"
              aria-hidden
            />
            <div className={`relative z-10 ${SITE_INNER} pb-14 md:pb-20`}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                <Link href={`/${lang}/services`} className="transition-colors hover:text-brand">
                  {t.nav.services}
                </Link>
                <span className="mx-2 text-gray-300">/</span>
                <span>{page.breadcrumbLabel}</span>
              </p>

              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div>
                  <h1
                    className="mb-5 text-4xl font-black leading-tight tracking-tight text-black lg:text-5xl"
                    style={display}
                  >
                    {page.h1}
                  </h1>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700 md:text-base">{page.intro}</p>
                  <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">{page.lead}</p>
                  <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
                    <OrderCtaPill
                      size="sm"
                      variant="brand"
                      label={page.contactLabel}
                      className="w-full sm:w-auto sm:min-w-[14rem]"
                    />
                    <Link
                      href={relatedHref}
                      className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white"
                    >
                      {page.relatedServiceLabel}
                    </Link>
                  </div>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src={media.hero}
                    alt={page.h1}
                    fill
                    priority
                    fetchPriority="high"
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className={`border-b border-gray-100 bg-zinc-50 ${SITE_PX}`}>
            <div className={`${SITE_INNER} py-10 md:py-12`}>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {page.stats.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <p className="text-2xl font-black text-black md:text-3xl" style={display}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.12em] text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className={`py-14 md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER}`}>
              <h2 className="mb-8 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                {page.benefitsTitle}
              </h2>
              <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {page.benefits.map((item, i) => (
                  <li
                    key={item}
                    className="flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-zinc-50 p-3.5 sm:rounded-3xl sm:p-6"
                  >
                    <KeyboardKeyBadge
                      symbol={KEYBOARD_BENEFIT_SYMBOLS[i % KEYBOARD_BENEFIT_SYMBOLS.length]}
                      size="sm"
                      className="mb-3 sm:mb-4"
                    />
                    <p className="text-lg font-semibold leading-snug tracking-tight text-black sm:text-xl sm:leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Audience */}
          <section className={`bg-black py-14 text-white md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER}`}>
              <h2 className="mb-10 text-2xl font-black tracking-tight md:text-3xl" style={display}>
                {page.audienceTitle}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.audience.map((item, i) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                    <span className="mb-3 block text-sm font-light italic text-white/40" style={display}>
                      [{String(i + 1).padStart(2, '0')}]
                    </span>
                    <p className="leading-relaxed text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Image + text */}
          <section className={`py-14 md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER}`}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="relative order-2 aspect-[5/4] overflow-hidden rounded-2xl bg-zinc-100 lg:order-1">
                  <Image
                    src={media.secondary}
                    alt={page.sections[0]?.title || page.h1}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    quality={85}
                  />
                </div>
                <div className="order-1 space-y-10 lg:order-2">
                  {page.sections.slice(0, 2).map((section) => (
                    <div key={section.title}>
                      <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                        {section.title}
                      </h2>
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)} className="mb-3 text-lg leading-relaxed text-gray-700 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Deliverables */}
          <section className={`border-y border-gray-100 bg-zinc-50 py-14 md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER}`}>
              <h2 className="mb-10 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                {page.deliverablesTitle}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {page.deliverables.map((item, i) => (
                  <div key={item.title} className="rounded-2xl border border-gray-200/80 bg-white p-6 md:p-7">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gray-400">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mb-2 text-xl font-bold text-black">{item.title}</h3>
                    <p className="leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use cases */}
          <section className={`py-14 md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER}`}>
              <h2 className="mb-10 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                {page.useCasesTitle}
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {page.useCases.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-gray-100 p-6 transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                    <h3 className="mb-2 text-xl font-bold text-black">{item.title}</h3>
                    <p className="leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mid CTA with photo */}
          <section className={`py-16 md:py-24 ${SITE_PX}`}>
            <div className="relative overflow-hidden rounded-2xl px-6 py-14 md:px-10 md:py-20">
              <div className="absolute inset-0">
                <Image src={media.gallery[2]} alt={page.midCtaTitle} fill className="object-cover" sizes="100vw" quality={70} />
                <div className="absolute inset-0 bg-black/75" />
              </div>
              <div className="relative text-white">
                <h2 className="mb-4 text-2xl font-black tracking-tight md:text-4xl" style={display}>
                  {page.midCtaTitle}
                </h2>
                <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{page.midCtaText}</p>
                <OrderCtaPill
                  size="sm"
                  variant="brand"
                  label={page.contactLabel}
                  className="w-full sm:w-auto sm:min-w-[14rem]"
                />
              </div>
            </div>
          </section>

          {/* Showcase / portfolio */}
          {showcaseCards.length > 0 ? (
            <section className={`bg-white py-14 md:py-20 ${SITE_PX}`}>
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-3xl">
                  <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                    {page.showcaseTitle}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">{page.showcaseIntro}</p>
                </div>
                <Link
                  href={`/${lang}/portfolio`}
                  className="text-sm font-semibold text-gray-700 underline-offset-4 transition-colors hover:text-brand hover:underline"
                >
                  {page.portfolioLabel} →
                </Link>
              </div>
              <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="flex w-max gap-5">
                  {showcaseCards.map((card) => (
                    <PortfolioCaseCard
                      key={card.id}
                      card={card}
                      lang={lang}
                      className="w-[min(82vw,20rem)] shrink-0 sm:w-[22rem]"
                      sizes="352px"
                    />
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* Extra sections */}
          {page.sections.length > 2 && (
            <section className={`border-t border-gray-100 bg-zinc-50 py-14 md:py-20 ${SITE_PX}`}>
              <div className={`${SITE_INNER} max-w-4xl space-y-12`}>
                {page.sections.slice(2).map((section) => (
                  <div key={section.title}>
                    <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                      {section.title}
                    </h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="mb-3 text-lg leading-relaxed text-gray-700 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Process */}
          <section className={`py-14 md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER}`}>
              <h2 className="mb-10 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                {page.processTitle}
              </h2>
              <ol className="grid gap-6 md:grid-cols-3">
                {page.processSteps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-gray-100 p-6">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-black">{step.title}</h3>
                    <p className="leading-relaxed text-gray-700">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <FaqAccordion title={page.faqTitle} items={page.faq} sectionClassName={SITE_PX} />

          {/* Final CTA — на всю ширину */}
          <SiteCtaBand
            title={page.ctaTitle}
            text={page.ctaText}
            contactLabel={page.contactLabel}
            pricingLabel={page.pricingLabel}
            portfolioLabel={page.portfolioLabel}
            pricingHref={`/${lang}/pricing`}
            portfolioHref={`/${lang}/portfolio`}
            className="pt-16 md:pt-24"
          />

          <section className={`border-t border-gray-100 pb-16 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl pt-10`}>
              <ul className="flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap sm:gap-x-6">
                <li>
                  <Link href={relatedHref} className="text-gray-800 underline-offset-4 hover:text-brand hover:underline">
                    {page.relatedServiceLabel}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/pricing`} className="text-gray-800 underline-offset-4 hover:text-brand hover:underline">
                    {page.pricingLabel}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/contact`} className="text-gray-800 underline-offset-4 hover:text-brand hover:underline">
                    {page.contactLabel}
                  </Link>
                </li>
                {lang === 'uk' && slug === 'telegram-bots' ? (
                  <>
                    <li>
                      <Link
                        href="/uk/blog/telegram-bot-dlya-biznesu-2026"
                        className="text-gray-800 underline-offset-4 hover:text-brand hover:underline"
                      >
                        Telegram-бот для бізнесу 2026
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/uk/blog/skilky-koshtuye-telegram-bot"
                        className="text-gray-800 underline-offset-4 hover:text-brand hover:underline"
                      >
                        Скільки коштує Telegram-бот
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
          </section>
        </main>
    </>
  );
}
