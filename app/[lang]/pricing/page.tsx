'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormBlock from '@/components/ContactFormBlock';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { pricingPageCopy } from '@/lib/pricingPageCopy';
import { sendToTelegram } from '@/lib/telegram';
import PricingTable from '@/components/PricingTable';
import { getPricingKey } from '@/app/[lang]/services/[serviceId]/metadata';
import type { ServiceId } from '@/app/[lang]/services/[serviceId]/metadata';

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
      <button
        type="button"
        onClick={onConsult}
        className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-black text-white font-bold uppercase text-sm tracking-wide hover:bg-gray-800 transition-colors"
      >
        {p.btnConsult}
      </button>
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
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={() => openModal()}
        />

        <main id="main-content">
          {/* Смуга як на сторінці контактів */}
          <div className="w-full bg-black mt-16 py-20 shrink-0" aria-hidden />

          <section className="pt-12 md:pt-16 pb-16 md:pb-24 px-6 md:px-10 lg:px-16 bg-white border-b border-gray-100">
            <article className="max-w-6xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-12 h-px bg-black mr-4" />
                <p className="text-sm font-black text-black tracking-wider uppercase">{t.footer.pricing}</p>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-black leading-tight mb-6">{p.h1}</h1>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-snug mb-8 max-w-3xl">{p.subtitle}</p>
              <p className="text-lg text-gray-800 leading-relaxed font-semibold mb-6">{p.intro}</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">{p.introSecondary}</p>

              <CtaCluster lang={lang} p={p} onConsult={() => openModal()} className="mb-14" />

              <p className="text-base text-gray-700 leading-relaxed mb-14 border-l-4 border-black pl-6 py-2">
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

              {p.sections.map((section) => {
                const pricingData = t.services[getPricingKey(section.id as ServiceId)];
                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="mb-16 md:mb-24 pb-16 border-b border-gray-200 last:border-b-0"
                  >
                    <PricingTable
                      pricing={pricingData}
                      lang={lang}
                      onContactClick={() => openModal(pricingData.categoryLabel)}
                      embedded
                    />
                    <div className="mt-10 md:mt-12">
                      <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-8 font-medium">
                        {section.bullets.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
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
                      <button
                        type="button"
                        onClick={() => openModal(pricingData.categoryLabel)}
                        className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-black text-white font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
                      >
                        {p.btnConsult}
                      </button>
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
              <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-200 pt-8">{p.disclaimer}</p>

              <div className="mt-12 p-8 md:p-10 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-lg font-bold text-black mb-6">{p.ctaBanner}</p>
                <CtaCluster lang={lang} p={p} onConsult={() => openModal()} />
              </div>
            </article>
          </section>

          <section
            id="pricing-contact"
            className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-white border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-10 md:mb-14">
                <span className="text-xs font-black tracking-[0.2em] text-gray-500 uppercase">{p.formSectionEyebrow}</span>
                <div className="h-px flex-1 bg-gray-200 max-w-[160px]" />
              </div>
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
