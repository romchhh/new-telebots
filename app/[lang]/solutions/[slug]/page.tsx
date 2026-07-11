'use client';

import { useEffect, useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
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
  SEO_LANDING_RELATED_SERVICE,
  getSeoLanding,
  isSeoLandingSlug,
  type SeoLandingSlug,
} from '@/lib/seoLandings';

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

  const relatedService = SEO_LANDING_RELATED_SERVICE[slug];
  const pageUrl = `${siteUrl}/${lang}/solutions/${slug}`;

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

  const relatedHref = relatedService
    ? `/${lang}/services/${relatedService}`
    : `/${lang}/services`;

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
          <section className={`pt-24 md:pt-28 pb-14 md:pb-20 bg-white border-b border-gray-100 ${SITE_PX}`}>
            <article className={`${SITE_INNER} max-w-4xl`}>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                <Link href={`/${lang}/services`} className="hover:text-[#F05A00] transition-colors">
                  {t.nav.services}
                </Link>
                <span className="mx-2 text-gray-300">/</span>
                <span>{page.breadcrumbLabel}</span>
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
                {page.h1}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">{page.intro}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <OrderCtaPill
                  size="sm"
                  label={page.contactLabel}
                  onClick={openModal}
                  elevated
                  className="w-full sm:w-auto sm:min-w-[14rem]"
                />
                <Link
                  href={relatedHref}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-black text-black font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-white transition-colors text-center"
                >
                  {page.relatedServiceLabel}
                </Link>
              </div>
            </article>
          </section>

          <section className={`py-14 md:py-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl`}>
              <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-8">
                {page.benefitsTitle}
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {page.benefits.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-gray-800 leading-relaxed before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[#F05A00] before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className={`pb-14 md:pb-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl space-y-12`}>
              {page.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-5">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-lg text-gray-700 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className={`pb-14 md:pb-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl`}>
              <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-8">
                {page.processTitle}
              </h2>
              <ol className="space-y-6">
                {page.processSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-1">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={`pb-14 md:pb-20 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl`}>
              <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-8">
                {page.faqTitle}
              </h2>
              <div className="space-y-6">
                {page.faq.map((item) => (
                  <div key={item.question} className="border-b border-gray-100 pb-6 last:border-0">
                    <h3 className="text-lg font-bold text-black mb-2">{item.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`pb-16 md:pb-24 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl rounded-2xl bg-black px-6 py-10 md:px-10 md:py-12 text-white`}>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">{page.ctaTitle}</h2>
              <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">{page.ctaText}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <OrderCtaPill
                  size="sm"
                  label={page.contactLabel}
                  onClick={openModal}
                  elevated
                  className="w-full sm:w-auto sm:min-w-[14rem]"
                />
                <Link
                  href={`/${lang}/pricing`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-white/40 text-white font-bold uppercase text-sm tracking-wide hover:border-white hover:bg-white/10 transition-colors text-center"
                >
                  {page.pricingLabel}
                </Link>
                <Link
                  href={`/${lang}/portfolio`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-white/40 text-white font-bold uppercase text-sm tracking-wide hover:border-white hover:bg-white/10 transition-colors text-center"
                >
                  {page.portfolioLabel}
                </Link>
              </div>
            </div>
          </section>

          <section className={`pb-16 border-t border-gray-100 ${SITE_PX}`}>
            <div className={`${SITE_INNER} max-w-4xl pt-10`}>
              <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 text-sm font-medium">
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
