'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormBlock from '@/components/ContactFormBlock';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import FullBleedHeroImage from '@/components/FullBleedHeroImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { sendToTelegram } from '@/lib/telegram';
import { SUBMIT_ERROR } from '@/lib/formMessages';
import { SITE_PX } from '@/lib/siteLayout';
import { BREADCRUMB_HOME, BREADCRUMB_CONTACT } from '@/lib/breadcrumbLabels';

const HERO_ALTS: Record<Language, string> = {
  uk: 'TeleBots — робоче місце команди розробки',
  en: 'TeleBots — the development team workspace',
  pl: 'TeleBots — stanowisko zespołu deweloperskiego',
  ru: 'TeleBots — рабочее место команды разработки',
};

export default function ContactPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);

  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    if (langParam && langParam !== lang && ['uk', 'en', 'pl', 'ru'].includes(langParam)) {
      setLang(langParam as Language);
    }
  }, [langParam, lang]);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkScroll();
    window.scrollTo(0, 0);

    const handleScroll = () => {
      checkScroll();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const [formRef, isFormVisible] = useScrollAnimation();
  const [contactsRef, isContactsVisible] = useScrollAnimation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: t.modal.title,
    });

    if (success) {
      closeModal();
      setIsSuccessOpen(true);
    } else {
      alert(SUBMIT_ERROR[lang]);
    }
  };

  const breadcrumbs = [
    { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
    { name: BREADCRUMB_CONTACT[lang], url: `/${lang}/contact` },
  ];

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData type="contactPage" />
      <StructuredData type="breadcrumb" breadcrumbs={breadcrumbs} />
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
          onConsultClick={openModal}
        />

        <main id="main-content">
          <ServiceHeroSection
            heroBackground={
              <FullBleedHeroImage src="/other/about-hero-macbook.jpg" alt={HERO_ALTS[lang]} />
            }
            hero={{
              title: t.contact.title,
              subtitle: t.contact.subtitle,
              tagline: t.contact.subtitle,
              intro: t.contact.help,
              ctaQuestion: t.hero.ctaQuestion,
              ctaQuestionShort: t.hero.ctaQuestionShort,
              startDate: t.hero.startDate,
              duration: t.hero.duration,
            }}
            orderButtonLabel={t.modal.title}
            onOrderClick={openModal}
            scrollTargetId="contact-form"
          />

          <Breadcrumbs
            items={breadcrumbs.map((crumb, index) => ({
              name: crumb.name,
              href: index < breadcrumbs.length - 1 ? crumb.url : undefined,
            }))}
          />

          <section
            id="contact-form"
            className={`border-t border-gray-100 bg-white py-20 md:py-28 ${SITE_PX}`}
          >
            <div className="mb-10 text-center md:mb-14">
              <p
                className="pointer-events-none select-none text-[clamp(2.75rem,12vw,8.5rem)] font-light leading-[0.88] text-gray-100"
                style={{ fontFamily: 'var(--font-display)' }}
                aria-hidden
              >
                TeleBots
              </p>
              <h2
                className="relative z-10 -mt-5 text-2xl font-semibold leading-tight tracking-tight text-black sm:-mt-7 sm:text-4xl md:-mt-9 lg:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t.contact.formTitle}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200">
              <div
                ref={formRef}
                className={`scroll-animate-left ${isFormVisible ? 'animate' : ''} lg:pr-10 xl:pr-14 2xl:pr-20`}
              >
                <ContactFormBlock
                  t={t}
                  lang={lang}
                  hideTitle
                  onSuccess={() => setIsSuccessOpen(true)}
                />
              </div>

              <div
                ref={contactsRef}
                className={`scroll-animate-right ${isContactsVisible ? 'animate' : ''} mt-14 lg:mt-0 lg:pl-10 xl:pl-14 2xl:pl-20`}
              >
                <ContactDetailsColumn t={t} />
              </div>
            </div>
          </section>
        </main>
        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={openModal}
        />

        <OrderModal
          isOpen={isModalOpen}
          onClose={closeModal}
          serviceName={t.modal.title}
          t={t}
          onSubmit={handleModalSubmit}
        />
        <SuccessMessage
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          message={t.contact.success}
        />
      </div>
    </>
  );
}
