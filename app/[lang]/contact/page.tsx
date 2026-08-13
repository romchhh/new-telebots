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
import ContactPageHero from '@/components/ContactPageHero';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { sendToTelegram } from '@/lib/telegram';
import { SUBMIT_ERROR } from '@/lib/formMessages';
import { SITE_PX } from '@/lib/siteLayout';
import { BREADCRUMB_HOME, BREADCRUMB_CONTACT } from '@/lib/breadcrumbLabels';

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

  const breadcrumbItems = breadcrumbs.map((crumb, index) => ({
    name: crumb.name,
    href: index < breadcrumbs.length - 1 ? crumb.url : undefined,
  }));

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
          solidHeader
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={openModal}
        />

        <main id="main-content">
          <ContactPageHero
            title={t.contact.formTitle}
            subtitle={t.contact.help}
            breadcrumbs={breadcrumbItems}
          />

          <section
            id="contact-form"
            className={`bg-white py-12 md:py-16 ${SITE_PX}`}
          >
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
