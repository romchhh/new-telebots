'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormBlock from '@/components/ContactFormBlock';
import OrderModal from '@/components/OrderModal';
import OrderCtaPill from '@/components/OrderCtaPill';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { pricingPageCopy } from '@/lib/pricingPageCopy';
import { sendToTelegram } from '@/lib/telegram';
import { siteUrl } from '@/lib/site';
import PricingTable from '@/components/PricingTable';
import SiteCtaBand from '@/components/SiteCtaBand';
import FaqAccordion from '@/components/FaqAccordion';
import { getPricingKey } from '@/app/[lang]/services/[serviceId]/metadata';
import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';
import {
  PRICING_GALLERY_IMAGES,
  PRICING_HERO_IMAGE,
  PRICING_SECTION_IMAGES,
} from '@/lib/pricingPageMedia';

const display = { fontFamily: 'var(--font-display)' };

function PricingImage({
  src,
  alt,
  className = '',
  priority = false,
  aspectClass = 'aspect-[4/3]',
  sizes = '(max-width: 1024px) 100vw, 50vw',
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectClass?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-zinc-100 ${aspectClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        fetchPriority={priority ? 'high' : undefined}
        className="object-cover"
        sizes={sizes}
        quality={85}
      />
    </div>
  );
}

function CtaCluster({
  lang,
  p,
  onConsult,
  className = '',
}: {
  lang: Language;
  p: (typeof pricingPageCopy)['uk'];
  onConsult: () => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 ${className}`}>
      <Link
        href={`/${lang}/services`}
        className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-black text-black font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-white transition-colors text-center"
      >
        {p.linkAllServices}
      </Link>
      <Link
        href={`/${lang}/contact`}
        className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-black text-black font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-white transition-colors text-center"
      >
        {p.btnContactForm}
      </Link>
      <OrderCtaPill
        size="sm"
        label={p.btnConsult}
        onClick={onConsult}
        elevated
        className="w-full sm:w-auto sm:min-w-[14rem]"
      />
    </div>
  );
}

function SeoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-14 md:mb-16">
      <h2 className="text-xl md:text-2xl font-black text-black tracking-tight mb-5">{title}</h2>
      {children}
    </div>
  );
}

export default function PricingPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [modalServiceLabel, setModalServiceLabel] = useState('');

  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);

  const t = translations[lang];
  const p = pricingPageCopy[lang];

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
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const openModal = (serviceLabel?: string) => {
    setModalServiceLabel(serviceLabel || p.metaTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: modalServiceLabel || p.metaTitle,
    });
    if (success) {
      closeModal();
      setSuccessMessage(t.modal.success);
      setIsSuccessOpen(true);
    } else {
      alert(
        lang === 'uk'
          ? 'Помилка відправки. Спробуйте ще раз.'
          : 'Error sending. Please try again.'
      );
    }
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.brand, url: `/${lang}` },
          { name: t.footer.pricing, url: `/${lang}/pricing` },
        ]}
      />
      <StructuredData type="faq" faqs={p.faqItems} />
      <StructuredData
        type="service"
        serviceName={p.h1}
        serviceDescription={p.metaDescription}
        serviceUrl={`${siteUrl}/${lang}/pricing`}
      />
      <div className="min-h-screen bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        <Navigation
          isScrolled={isScrolled}
          solidHeader
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={() => openModal()}
        />

        <main id="main-content">
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
            <article className={`relative z-10 ${SITE_INNER} pb-12 md:pb-16`}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div>
                  <h1
                    className="mb-6 text-4xl font-black leading-tight text-black lg:text-5xl xl:text-6xl"
                    style={display}
                  >
                    {p.h1}
                  </h1>
                  <p className="mb-8 max-w-3xl text-xl font-semibold leading-snug text-gray-800 md:text-2xl">
                    {p.subtitle}
                  </p>
                  <CtaCluster lang={lang} p={p} onConsult={() => openModal()} />
                </div>
                <PricingImage src={PRICING_HERO_IMAGE} alt={p.h1} priority aspectClass="aspect-[4/3] lg:aspect-[5/4]" />
              </div>
            </article>
          </section>

          <section className={`pb-16 md:pb-24 bg-white ${SITE_PX}`}>
            <article className={SITE_INNER}>
              <p className="text-lg text-gray-800 leading-relaxed font-semibold mb-6">{p.intro}</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">{p.introSecondary}</p>

              <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {PRICING_GALLERY_IMAGES.map((src, index) => {
                  const section = p.sections[index];
                  const label = section
                    ? t.services[getPricingKey(section.id as ServiceId)].categoryLabel
                    : p.h1;
                  return (
                    <PricingImage
                      key={src}
                      src={src}
                      alt={label}
                      aspectClass="aspect-[16/10]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  );
                })}
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-14 border-l-4 border-brand pl-6 py-2">
                {p.paymentAndEstimate}
              </p>

              <SeoBlock title={p.factorsTitle}>
                <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-relaxed mb-6">
                  {p.factorsItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed">{p.factorsClosing}</p>
              </SeoBlock>

              <SeoBlock title={p.timelineTitle}>
                {p.timelineParagraphs.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </SeoBlock>

              <SeoBlock title={p.supportTitle}>
                {p.supportParagraphs.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </SeoBlock>

              <SeoBlock title={p.techStackTitle}>
                {p.techStackParagraphs.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </SeoBlock>

              <div className="mb-14 md:mb-16 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 lg:p-10">
                <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-4">{p.plansBlockTitle}</h2>
                <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-3xl">{p.plansBlockIntro}</p>
                <ul className="list-disc pl-6 space-y-2.5 text-gray-700 leading-relaxed">
                  {p.plansBlockItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {p.sections.map((section, sectionIndex) => {
                const pricingData = t.services[getPricingKey(section.id as ServiceId)];
                const media = PRICING_SECTION_IMAGES[section.id];
                const imageLeft = sectionIndex % 2 === 0;
                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="mb-16 md:mb-24 pb-16 border-b border-gray-200 last:border-b-0"
                  >
                    <div
                      className={`mb-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12 ${
                        imageLeft ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                      }`}
                    >
                      <PricingImage
                        src={media.primary}
                        alt={pricingData.categoryLabel}
                        aspectClass="aspect-[4/3] lg:aspect-[5/4]"
                      />
                      <div>
                        <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                          {pricingData.categoryLabel}
                        </h2>
                        <p className="text-lg font-medium leading-relaxed text-gray-800">{section.plansNote}</p>
                      </div>
                    </div>
                    <PricingTable
                      pricing={pricingData}
                      lang={lang}
                      onContactClick={() => openModal(pricingData.categoryLabel)}
                      embedded
                      hideCategoryLabel
                    />
                    <div className="mt-10 md:mt-12">
                      <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-8 font-medium">
                        {section.bullets.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <PricingImage
                        src={media.secondary}
                        alt={pricingData.categoryLabel}
                        aspectClass="aspect-[21/9] md:aspect-[2.4/1]"
                        sizes="100vw"
                        className="mb-8"
                      />
                      {section.paragraphs.map((para, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                          {para}
                        </p>
                      ))}
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
                      <Link
                        href={`/${lang}/services/${section.id}`}
                        className="inline-flex items-center justify-center px-5 py-3 rounded-full border-2 border-black text-black font-bold text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
                      >
                        {p.btnServicePage}
                      </Link>
                      <OrderCtaPill
                        size="sm"
                        label={p.btnConsult}
                        onClick={() => openModal(pricingData.categoryLabel)}
                        elevated
                        className="w-full sm:w-auto sm:min-w-[12rem]"
                      />
                      <Link
                        href={`/${lang}/contact#contact-form`}
                        className="inline-flex items-center justify-center px-5 py-3 rounded-full border-2 border-gray-400 text-gray-900 font-bold text-sm uppercase tracking-wide hover:border-black transition-colors"
                      >
                        {p.btnContactForm}
                      </Link>
                    </div>
                  </section>
                );
              })}

              <p className="text-gray-700 leading-relaxed text-lg mb-8">{p.closingSeo}</p>

              <nav
                aria-label={p.resourceLinksTitle}
                className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8"
              >
                <h2 className="text-xl font-black text-black mb-4">{p.resourceLinksTitle}</h2>
                <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                  {p.resourceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center text-sm font-semibold text-black underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-200 pt-8">{p.disclaimer}</p>
            </article>
          </section>

          <FaqAccordion title={p.faqTitle} items={p.faqItems} sectionClassName={SITE_PX} />

          <SiteCtaBand
            title={t.about.homeCta.title}
            text={t.about.homeCta.text}
            contactLabel={t.about.homeCta.contactLabel}
            pricingLabel={p.linkAllServices}
            portfolioLabel={t.about.homeCta.portfolioLabel}
            pricingHref={`/${lang}/services`}
            portfolioHref={`/${lang}/portfolio`}
            onContactClick={() => openModal()}
            className="pt-16 md:pt-20"
          />

          <section
            id="pricing-contact"
            className={`py-16 md:py-24 bg-white border-t border-gray-100 ${SITE_PX}`}
          >
            <div className={SITE_INNER}>
              <div className="grid lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200">
                <div className="lg:pr-10 xl:pr-14 2xl:pr-20">
                  <ContactFormBlock
                    t={t}
                    lang={lang}
                    serviceName={p.metaTitle}
                    onSuccess={() => {
                      setSuccessMessage(t.contact.success);
                      setIsSuccessOpen(true);
                    }}
                  />
                </div>
                <div className="mt-14 lg:mt-0 lg:pl-10 xl:pl-14 2xl:pl-20">
                  <ContactDetailsColumn t={t} />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={() => openModal()}
        />

        <OrderModal
          isOpen={isModalOpen}
          onClose={closeModal}
          serviceName={modalServiceLabel || p.metaTitle}
          t={t}
          onSubmit={handleModalSubmit}
        />
        <SuccessMessage
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          message={successMessage || t.modal.success}
        />
      </div>
    </>
  );
}
