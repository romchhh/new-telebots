'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesPassionSection from '@/components/ServicesPassionSection';
import ServiceItem from '@/components/ServiceItem';
import PricingTable from '@/components/PricingTable';
import StatsSection from '@/components/StatsSection';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';

export default function ServicesPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const t = translations[lang];

  useEffect(() => {
    if (langParam && langParam !== lang && ['uk', 'en', 'pl', 'ru'].includes(langParam)) {
      setLang(langParam as Language);
    }
  }, [langParam, lang]);

  useEffect(() => {
    // Перевіряємо початковий стан скролу
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Перевіряємо одразу при завантаженні
    checkScroll();
    
    // Прокручуємо до початку сторінки
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      checkScroll();
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: selectedService,
    });
    
    if (success) {
      closeModal();
      setIsSuccessOpen(true);
    } else {
      alert('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };

  const services = [
    {
      key: 'websitesPage' as const,
      image: '/services/services-websites.jpg',
      imagePosition: 'right' as const
    },
    {
      key: 'chatbotsPage' as const,
      image: '/services/services-chatbots.jpg',
      imagePosition: 'left' as const
    },
    {
      key: 'parsersPage' as const,
      image: '/services/services-parsers.jpg',
      imagePosition: 'right' as const
    },
    {
      key: 'designPage' as const,
      image: '/services/services-design.jpg',
      imagePosition: 'left' as const
    }
  ];

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.about, url: `/${lang}` },
          { name: t.nav.services, url: `/${lang}/services` },
        ]}
      />
      {services.map((service) => (
        <StructuredData
          key={service.key}
          type="product"
          serviceName={service.key}
          serviceDescription={t.services[service.key]?.description || ''}
        />
      ))}
      <div className="min-h-screen bg-white">
        <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
        <main id="main-content">
        <ServicesPassionSection t={t} />
      <p className="max-w-4xl mx-auto px-6 mb-10 text-lg text-gray-600 text-center">
        <Link href={`/${lang}/portfolio`} className="text-black font-medium underline hover:no-underline">{t.nav.portfolio}</Link>
        {' — '}
        <Link href={`/${lang}/about`} className="text-black font-medium underline hover:no-underline">{t.nav.about}</Link>.
      </p>
      <div id="services-list">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          serviceKey={service.key}
          image={service.image}
          imagePosition={service.imagePosition}
          t={t}
          onOrderClick={openModal}
        />
      ))}
      </div>

      <PricingTable
        pricing={t.services.pricingChatbots}
        lang={lang}
        onContactClick={() => openModal(t.services.chatbotsPage.title)}
      />
      <PricingTable
        pricing={t.services.pricingWebsites}
        lang={lang}
        onContactClick={() => openModal(t.services.websitesPage.title)}
      />

      <StatsSection t={t} />
        </main>
      <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      
      <OrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        serviceName={selectedService}
        t={t}
        onSubmit={handleSubmit}
      />
      
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={t.modal.success}
      />
      </div>
    </>
  );
}


