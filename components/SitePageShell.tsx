'use client';

import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { HomeModalProvider } from '@/components/HomeModalProvider';
import type { Language, SiteCopy } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';
import { SUBMIT_ERROR } from '@/lib/formMessages';

const OrderModal = lazy(() => import('@/components/OrderModal'));
const SuccessMessage = lazy(() => import('@/components/SuccessMessage'));

type SitePageShellProps = {
  initialLang: Language;
  t: SiteCopy;
  children: ReactNode;
  /** Непрозорий хедер з першого кадру (юридичні, контакт, блог) */
  solidHeader?: boolean;
  /** Світлий прозорий хедер (офер) */
  transparentOnLight?: boolean;
  /** Підпис заявки в Telegram, якщо відкрили модалку з цієї сторінки */
  modalServiceName?: string;
};

/**
 * Клієнтська оболонка: меню, футер, модалка. Контент сторінки передається
 * children з серверного page.tsx — тому він потрапляє в статичний HTML.
 */
export default function SitePageShell({
  initialLang,
  t,
  children,
  solidHeader = false,
  transparentOnLight = false,
  modalServiceName,
}: SitePageShellProps) {
  const router = useRouter();
  const [lang, setLang] = useState<Language>(initialLang);
  const [isScrolled, setIsScrolled] = useState(solidHeader);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(t.modal.success);

  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#services-list') {
      const scrollToList = () =>
        document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const timer = window.setTimeout(scrollToList, 80);
      const onHashChange = () => {
        if (window.location.hash === '#services-list') scrollToList();
      };
      window.addEventListener('hashchange', onHashChange);
      if (!solidHeader) {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
          window.clearTimeout(timer);
          window.removeEventListener('hashchange', onHashChange);
          window.removeEventListener('scroll', onScroll);
        };
      }
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener('hashchange', onHashChange);
      };
    }

    window.scrollTo(0, 0);
    if (solidHeader) return;
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [solidHeader]);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    router.push(window.location.pathname.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: modalServiceName || t.modal.title,
    });
    if (success) {
      closeModal();
      setSuccessMessage(t.modal.success);
      setIsSuccessOpen(true);
    } else {
      alert(SUBMIT_ERROR[lang]);
    }
  };

  return (
    <HomeModalProvider openModal={openModal}>
      <div className="min-h-screen bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navigation
          isScrolled={isScrolled}
          solidHeader={solidHeader}
          transparentOnLight={transparentOnLight}
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={openModal}
        />
        {children}
        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={openModal}
        />
        {isModalOpen ? (
          <Suspense fallback={null}>
            <OrderModal
              isOpen={isModalOpen}
              onClose={closeModal}
              serviceName={modalServiceName || t.modal.title}
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
              message={successMessage}
            />
          </Suspense>
        ) : null}
      </div>
    </HomeModalProvider>
  );
}
