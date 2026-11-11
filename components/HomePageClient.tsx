'use client';

import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { HomeModalProvider } from '@/components/HomeModalProvider';
import Footer from '@/components/Footer';
import SiteChromeFrame from '@/components/SiteChromeFrame';
import type { Language, SiteCopy } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';
import { SUBMIT_ERROR } from '@/lib/formMessages';

const OrderModal = lazy(() => import('@/components/OrderModal'));
const SuccessMessage = lazy(() => import('@/components/SuccessMessage'));

interface HomePageClientProps {
  initialLang: Language;
  t: SiteCopy;
  /** Hero + below-fold з сервера (кожен child має key). */
  children: ReactNode;
}

export default function HomePageClient({ initialLang, t, children }: HomePageClientProps) {
  const params = useParams();
  const langParam = params?.lang as string;

  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(initialLang);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setLang(validLang);
  }, [validLang]);

  useEffect(() => {
    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };
    raf = requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const openModal = () => {
    setSelectedService(t.modal.title);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };
  const handleSubmit = async (data: {
    name: string;
    phone: string;
    request: string;
    formStartedAt?: number;
    hp_field_xb7?: string;
  }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: selectedService,
      formStartedAt: data.formStartedAt,
      hp_field_xb7: data.hp_field_xb7,
    });
    if (success) {
      closeModal();
      setIsSuccessOpen(true);
    } else {
      alert(SUBMIT_ERROR[lang]);
    }
  };

  return (
    <HomeModalProvider openModal={openModal}>
      <>
        <SiteChromeFrame
          footer={
            <Footer
              t={t}
              lang={lang}
              setLang={handleLangChange}
              currentLang={lang}
              onConsultClick={openModal}
            />
          }
          navigation={
            <Navigation
              isScrolled={isScrolled}
              lang={lang}
              setLang={handleLangChange}
              t={t}
              currentLang={lang}
              onConsultClick={openModal}
            />
          }
        >
          <>
            <a href="#main-content" className="skip-link" aria-label="Skip to main content">
              Skip to main content
            </a>
            <main id="main-content">{children}</main>
          </>
        </SiteChromeFrame>

        {isModalOpen ? (
          <Suspense fallback={null}>
            <OrderModal
              isOpen={isModalOpen}
              onClose={closeModal}
              serviceName={selectedService}
              t={t}
              onSubmit={handleSubmit}
            />
          </Suspense>
        ) : null}
        {isSuccessOpen ? (
          <Suspense fallback={null}>
            <SuccessMessage
              isOpen={isSuccessOpen}
              onClose={() => setIsSuccessOpen(false)}
              message={t.modal.success}
            />
          </Suspense>
        ) : null}
      </>
    </HomeModalProvider>
  );
}
