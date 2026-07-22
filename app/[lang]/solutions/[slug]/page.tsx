'use client';

import { useEffect, useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import OrderCtaPill from '@/components/OrderCtaPill';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';
import { siteUrl } from '@/lib/site';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';
import {
  SEO_LANDING_MEDIA,
  SEO_LANDING_RELATED_SERVICE,
  getSeoLanding,
  isSeoLandingSlug,
  type SeoLandingSlug,
} from '@/lib/seoLandings';
import { getCaseHref } from '@/lib/portfolioCases';

const montserrat = { fontFamily: 'var(--font-montserrat)' };

export default function SeoSolutionPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const slugParam = (params?.slug as string) || '';

  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const slugValid = isSeoLandingSlug(slugParam);
  const slug = slugValid ? (slugParam as SeoLandingSlug) : null;
  const page = slug ? getSeoLanding(lang, slug) : null;
  const t = translations[lang];

  useEffect(() => {
    if (langParam && langParam !== lang && ['uk', 'en', 'pl', 'ru'].includes(langParam)) {
      setLang(langParam as Language);
    }
  }, [langParam, lang]);

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 50);
    checkScroll();
    window.scrollTo(0, 0);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [slugParam]);

  if (!slug || !page) {
    notFound();
  }

  const media = SEO_LANDING_MEDIA[slug];
  const relatedService = SEO_LANDING_RELATED_SERVICE[slug];
  const pageUrl = `${siteUrl}/${lang}/solutions/${slug}`;
  const relatedHref = relatedService
    ? `/${lang}/services/${relatedService}`
    : `/${lang}/services`;

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: page.h1,
    });
    if (success) {
      closeModal();
      setSuccessMessage(t.modal.success);
      setIsSuccessOpen(true);
    } else {
      alert(
        lang === 'uk'
          ? 'Помилка відправки. Спробуйте ще раз.'
          : lang === 'pl'
            ? 'Błąd wysyłki. Spróbuj ponownie.'
            : lang === 'ru'
              ? 'Ошибка отправки. Попробуйте ещё раз.'
              : 'Error sending. Please try again.'
      );
    }
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'TeleBots', url: `/${lang}` },
          { name: t.nav.services, url: `/${lang}/services` },
          { name: page.breadcrumbLabel, url: `/${lang}/solutions/${slug}` },
        ]}
      />
      <StructuredData
        type="service"
        serviceName={page.h1}
        serviceDescription={page.metaDescription}
        serviceUrl={pageUrl}
      />
      <StructuredData type="faq" faqs={page.faq} />

      <div className="min-h-screen bg-white">
        <Navigation
          isScrolled={isScrolled}
          solidHeader
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={openModal}
        />

        <main id="main-content">
          {/* Hero + photo */}
          <section className={`border-b border-gray-100 bg-white pt-24 md:pt-28 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-6xl pb-14 md:pb-20`}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                <Link href={`/${lang}/services`} className="transition-colors hover:text-[#F05A00]">
                  {t.nav.services}
                </Link>
                <span className="mx-2 text-gray-300">/</span>
                <span>{page.breadcrumbLabel}</span>
              </p>

              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div>
                  <h1
                    className="mb-5 text-4xl font-black leading-tight tracking-tight text-black lg:text-5xl"
                    style={montserrat}
                  >
                    {page.h1}
                  </h1>
                  <p className="mb-4 text-lg leading-relaxed text-gray-700 md:text-xl">{page.intro}</p>
                  <p className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg">{page.lead}</p>
                  <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
                    <OrderCtaPill
                      size="sm"
                      label={page.contactLabel}
                      onClick={openModal}
                      elevated
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
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className={`border-b border-gray-100 bg-zinc-50 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-6xl py-10 md:py-12`}>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {page.stats.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <p className="text-2xl font-black text-black md:text-3xl" style={montserrat}>
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
            <div className={`${SITE_INNER} max-w-6xl`}>
              <h2 className="mb-8 text-2xl font-black tracking-tight text-black md:text-3xl" style={montserrat}>
                {page.benefitsTitle}
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.benefits.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-gray-100 bg-white p-5 text-gray-800 leading-relaxed shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                  >
                    <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-[#F05A00]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Audience */}
          <section className={`bg-black py-14 text-white md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-6xl`}>
              <h2 className="mb-10 text-2xl font-black tracking-tight md:text-3xl" style={montserrat}>
                {page.audienceTitle}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.audience.map((item, i) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                    <span className="mb-3 block text-sm font-light italic text-white/40" style={montserrat}>
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
            <div className={`${SITE_INNER} max-w-6xl`}>
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
                      <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={montserrat}>
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
            <div className={`${SITE_INNER} max-w-6xl`}>
              <h2 className="mb-10 text-2xl font-black tracking-tight text-black md:text-3xl" style={montserrat}>
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
            <div className={`${SITE_INNER} max-w-6xl`}>
              <h2 className="mb-10 text-2xl font-black tracking-tight text-black md:text-3xl" style={montserrat}>
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
          <section className={`relative overflow-hidden py-16 md:py-24 ${SITE_PX}`}>
            <div className="absolute inset-0">
              <Image src={media.hero} alt="" fill className="object-cover" sizes="100vw" quality={70} />
              <div className="absolute inset-0 bg-black/75" />
            </div>
            <div className={`relative ${SITE_INNER} max-w-4xl text-white`}>
              <h2 className="mb-4 text-2xl font-black tracking-tight md:text-4xl" style={montserrat}>
                {page.midCtaTitle}
              </h2>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/80">{page.midCtaText}</p>
              <OrderCtaPill
                size="sm"
                label={page.contactLabel}
                onClick={openModal}
                className="w-full sm:w-auto sm:min-w-[14rem]"
              />
            </div>
          </section>

          {/* Showcase gallery */}
          <section className={`py-14 md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-6xl`}>
              <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={montserrat}>
                {page.showcaseTitle}
              </h2>
              <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-600">{page.showcaseIntro}</p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {media.gallery.map((src, i) => (
                  <Link
                    key={src}
                    href={getCaseHref(lang, media.caseIds[i])}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-zinc-50"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={src}
                        alt={page.showcaseCaptions[i]}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        quality={85}
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-black group-hover:text-[#F05A00]">{page.showcaseCaptions[i]}</p>
                      <p className="mt-1 text-sm text-gray-500">{page.portfolioLabel} →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Extra sections */}
          {page.sections.length > 2 && (
            <section className={`border-t border-gray-100 bg-zinc-50 py-14 md:py-20 ${SITE_PX}`}>
              <div className={`${SITE_INNER} max-w-4xl space-y-12`}>
                {page.sections.slice(2).map((section) => (
                  <div key={section.title}>
                    <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={montserrat}>
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
            <div className={`${SITE_INNER} max-w-6xl`}>
              <h2 className="mb-10 text-2xl font-black tracking-tight text-black md:text-3xl" style={montserrat}>
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

          {/* FAQ */}
          <section className={`border-t border-gray-100 py-14 md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl`}>
              <h2 className="mb-8 text-2xl font-black tracking-tight text-black md:text-3xl" style={montserrat}>
                {page.faqTitle}
              </h2>
              <div className="space-y-6">
                {page.faq.map((item) => (
                  <div key={item.question} className="border-b border-gray-100 pb-6 last:border-0">
                    <h3 className="mb-2 text-lg font-bold text-black">{item.question}</h3>
                    <p className="leading-relaxed text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className={`pb-16 md:pb-24 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl rounded-2xl bg-black px-6 py-10 text-white md:px-10 md:py-12`}>
              <h2 className="mb-4 text-2xl font-black tracking-tight md:text-3xl" style={montserrat}>
                {page.ctaTitle}
              </h2>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/75">{page.ctaText}</p>
              <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
                <OrderCtaPill
                  size="sm"
                  label={page.contactLabel}
                  onClick={openModal}
                  elevated
                  className="w-full sm:w-auto sm:min-w-[14rem]"
                />
                <Link
                  href={`/${lang}/pricing`}
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {page.pricingLabel}
                </Link>
                <Link
                  href={`/${lang}/portfolio`}
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {page.portfolioLabel}
                </Link>
              </div>
            </div>
          </section>

          <section className={`border-t border-gray-100 pb-16 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl pt-10`}>
              <ul className="flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap sm:gap-x-6">
                <li>
                  <Link href={relatedHref} className="text-gray-800 underline-offset-4 hover:text-[#F05A00] hover:underline">
                    {page.relatedServiceLabel}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/pricing`} className="text-gray-800 underline-offset-4 hover:text-[#F05A00] hover:underline">
                    {page.pricingLabel}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/contact`} className="text-gray-800 underline-offset-4 hover:text-[#F05A00] hover:underline">
                    {page.contactLabel}
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </main>

        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} onConsultClick={openModal} />
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
        t={t}
        serviceName={page.h1}
      />
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={successMessage}
      />
    </>
  );
}
