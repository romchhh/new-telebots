import Link from 'next/link';
import {
  Bot,
  Globe2,
  LayoutTemplate,
  Megaphone,
  Puzzle,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import OrderCtaPill from '@/components/OrderCtaPill';
import PartnershipLeadForm from '@/components/PartnershipLeadForm';
import PortfolioCaseCard from '@/components/PortfolioCaseCard';
import KeyboardKeyBadge from '@/components/KeyboardKeyBadge';
import type { Language } from '@/components/translations';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';
import { getPortfolioCards } from '@/lib/portfolioCards';
import {
  PARTNERSHIP_SHOWCASE_IDS,
  partnershipPageCopy,
} from '@/lib/partnershipPageCopy';
import { SITE_INNER, SITE_PX } from '@/lib/siteLayout';
import {
  CARD_LIGHT,
  HORIZONTAL_SCROLL_OVERFLOW,
  RADIUS_CARD,
  SERVICE_SECTION_Y,
  TYPE_DISPLAY_H2,
  TYPE_EYEBROW,
} from '@/lib/siteUi';

const display = { fontFamily: 'var(--font-display)' } as const;
const sans = { fontFamily: 'var(--font-sans)' } as const;

const AUDIENCE_ICONS = [Megaphone, Target, LayoutTemplate, Puzzle] as const;
const SERVICE_ICONS = [Globe2, Bot, Workflow, Sparkles] as const;

export default function PartnershipPageClient({ lang }: { lang: Language }) {
  const p = partnershipPageCopy[lang];
  const portfolioById = new Map(getPortfolioCards(lang).map((card) => [card.id, card]));
  const showcaseCards = PARTNERSHIP_SHOWCASE_IDS.map((id) => portfolioById.get(id)).filter(
    (card): card is NonNullable<typeof card> => Boolean(card)
  );

  return (
    <main id="main-content">
      {/* Hero */}
      <section className={`relative overflow-hidden border-b border-neutral-100 bg-white pt-24 md:pt-28 lg:pt-16 ${SITE_PX}`}>
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px),
              linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)
            `,
            backgroundSize: '52px 52px',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-16 z-0 h-[min(70vw,28rem)] w-[min(70vw,28rem)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.18)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className={`relative z-10 ${SITE_INNER} pb-14 md:pb-20`}>
          <p className={`mb-5 text-neutral-500 ${TYPE_EYEBROW}`} style={sans}>
            <Link href={`/${lang}`} className="transition-colors hover:text-brand">
              {BREADCRUMB_HOME[lang]}
            </Link>
            <span className="mx-2 text-neutral-300">/</span>
            <span>{p.breadcrumb}</span>
          </p>

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div>
              <p className={`mb-4 text-brand ${TYPE_EYEBROW}`} style={sans}>
                {p.heroEyebrow}
              </p>
              <h1
                className="max-w-[16ch] text-[clamp(2.25rem,6vw,4.25rem)] font-black uppercase leading-[0.95] tracking-tight text-neutral-900"
                style={display}
              >
                {p.heroTitle}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg" style={sans}>
                {p.heroLead}
              </p>
              <div className="mt-8">
                <OrderCtaPill
                  size="md"
                  variant="brand"
                  label={p.heroCta}
                  href="#partnership-form"
                  className="w-full sm:w-auto sm:min-w-[16rem]"
                />
              </div>
            </div>

            <div className={`${RADIUS_CARD} border border-brand/20 bg-brand-soft/50 p-7 sm:p-9`}>
              <p
                className="text-[clamp(4rem,12vw,6.5rem)] font-black leading-none tracking-tight text-brand"
                style={display}
              >
                {p.commissionValue}
              </p>
              <p className="mt-4 max-w-[18ch] text-base font-semibold leading-snug text-neutral-900 sm:text-lg" style={sans}>
                {p.commissionLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className={`bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
        <div className={SITE_INNER}>
          <div className="mb-8 max-w-3xl md:mb-10">
            <h2 className={`text-neutral-900 ${TYPE_DISPLAY_H2}`} style={display}>
              {p.audienceTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg" style={sans}>
              {p.audienceLead}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {p.audienceCards.map((card, index) => {
              const Icon = AUDIENCE_ICONS[index] ?? Megaphone;
              return (
                <article
                  key={card.title}
                  className={`${CARD_LIGHT} p-6 transition-colors hover:border-neutral-300 sm:p-7`}
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900" style={display}>
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-600" style={sans}>
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`border-t border-neutral-100 bg-neutral-50/70 ${SERVICE_SECTION_Y} ${SITE_PX}`}>
        <div className={SITE_INNER}>
          <h2 className={`mb-8 text-neutral-900 md:mb-10 ${TYPE_DISPLAY_H2}`} style={display}>
            {p.servicesTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {p.serviceCards.map((card, index) => {
              const Icon = SERVICE_ICONS[index] ?? Globe2;
              return (
                <article key={card.title} className={`${CARD_LIGHT} h-full p-6 sm:p-7`}>
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900" style={display}>
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base" style={sans}>
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases & examples */}
      <section className={`border-t border-neutral-100 bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
        <div className={SITE_INNER}>
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <h2 className={`text-neutral-900 ${TYPE_DISPLAY_H2}`} style={display}>
                {p.casesTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg" style={sans}>
                {p.casesLead}
              </p>
            </div>
            <Link
              href={`/${lang}/portfolio`}
              className="shrink-0 text-sm font-semibold text-neutral-700 underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              {p.casesLink} →
            </Link>
          </div>

          <div className={`-mx-4 px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ${HORIZONTAL_SCROLL_OVERFLOW}`}>
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

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {p.cases.map((item) => (
              <article
                key={item.id}
                className={`${CARD_LIGHT} flex h-full flex-col p-6 transition-colors hover:border-neutral-300 sm:p-7`}
              >
                <p className={`text-brand ${TYPE_EYEBROW}`} style={sans}>
                  {item.niche}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900" style={display}>
                  {portfolioById.get(item.id)?.title || item.id}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600" style={sans}>
                  {item.task}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600" style={sans}>
                  {item.solution}
                </p>
                <p className="mt-auto pt-4 text-sm font-semibold text-neutral-900" style={sans}>
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={`border-t border-neutral-100 bg-neutral-50/70 ${SERVICE_SECTION_Y} ${SITE_PX}`}>
        <div className={SITE_INNER}>
          <h2 className={`mb-8 text-neutral-900 md:mb-10 ${TYPE_DISPLAY_H2}`} style={display}>
            {p.stepsTitle}
          </h2>
          <ol className="grid gap-4 lg:grid-cols-3 lg:gap-5">
            {p.steps.map((step, index) => (
              <li key={step.title} className={`${CARD_LIGHT} p-6 sm:p-7`}>
                <KeyboardKeyBadge n={index + 1} size="md" className="mb-5" />
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900" style={display}>
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600" style={sans}>
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Terms */}
      <section className={`border-t border-neutral-100 bg-[#0a0a0a] text-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
        <div className={SITE_INNER}>
          <h2 className={`mb-8 max-w-3xl text-white md:mb-10 ${TYPE_DISPLAY_H2}`} style={display}>
            {p.termsTitle}
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {p.terms.map((term) => (
              <div
                key={term.label}
                className={`${RADIUS_CARD} border border-white/10 bg-white/[0.03] p-6 sm:p-7`}
              >
                <dt className={`text-brand ${TYPE_EYEBROW}`} style={sans}>
                  {term.label}
                </dt>
                <dd className="mt-3 text-lg font-semibold leading-snug text-white" style={display}>
                  {term.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="partnership-form" className={`scroll-mt-24 bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
        <div className={SITE_INNER}>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div>
              <h2 className={`text-neutral-900 ${TYPE_DISPLAY_H2}`} style={display}>
                {p.ctaTitle}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg" style={sans}>
                {p.ctaText}
              </p>
              <div className="mt-8">
                <OrderCtaPill
                  size="md"
                  variant="dark"
                  label={p.ctaButton}
                  href="#partnership-form"
                  className="w-full sm:w-auto sm:min-w-[16rem]"
                />
              </div>
            </div>
            <PartnershipLeadForm lang={lang} p={p} />
          </div>
        </div>
      </section>
    </main>
  );
}
