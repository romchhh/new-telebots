'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesPassionSection from '@/components/ServicesPassionSection';
import ServiceItem from '@/components/ServiceItem';
import StatsSection from '@/components/StatsSection';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormBlock from '@/components/ContactFormBlock';
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
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedService, setSelectedService] = useState('');

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

    const scrollToServicesList = () => {
      document.getElementById('services-list')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    let hashScrollTimer: number | undefined;

    if (window.location.hash === '#services-list') {
      // Після монту DOM / лейауту (і замість миттєвого scrollTo(0,0), який зривав якір)
      hashScrollTimer = window.setTimeout(scrollToServicesList, 80);
    } else {
      window.scrollTo(0, 0);
    }

    const onHashChange = () => {
      if (window.location.hash === '#services-list') {
        scrollToServicesList();
      }
    };

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('hashchange', onHashChange);
      if (hashScrollTimer !== undefined) window.clearTimeout(hashScrollTimer);
    };
  }, []);

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
      setSuccessMessage(t.modal.success);
      setIsSuccessOpen(true);
    } else {
      alert('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };


  const services = [
    {
      key: 'websitesPage' as const,
      image: '/services/services-websites.jpg',
      imagePosition: 'right' as const,
    },
    {
      key: 'chatbotsPage' as const,
      image: '/services/services-chatbots.jpg',
      imagePosition: 'left' as const,
    },
    {
      key: 'designPage' as const,
      image: '/services/services-design.jpg',
      imagePosition: 'left' as const,
    },
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
        <Navigation
          isScrolled={isScrolled}
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={() => openModal(t.modal.title)}
        />
        <main id="main-content">
        <ServicesPassionSection t={t} />
      <div id="services-list" className="scroll-mt-20 md:scroll-mt-24 pt-12 md:pt-16 lg:pt-24">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          serviceKey={service.key}
          image={service.image}
          imagePosition={service.imagePosition}
          lang={lang}
          t={t}
          onOrderClick={openModal}
        />
      ))}
      </div>

      <StatsSection t={t} />

      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200">
          <div className="lg:pr-10 xl:pr-14 2xl:pr-20">
            <ContactFormBlock
              t={t}
              lang={lang}
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
      </section>
        </main>
      <Footer
        t={t}
        lang={lang}
        setLang={handleLangChange}
        currentLang={lang}
        onConsultClick={() => openModal(t.modal.title)}
      />
      
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
        message={successMessage || t.modal.success}
      />
      </div>
    </>
  );
}


