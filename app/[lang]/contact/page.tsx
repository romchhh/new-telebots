'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Instagram, MessageCircle } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { sendToTelegram } from '@/lib/telegram';
import { legal } from '@/lib/legal';

export default function ContactPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [formRef, isFormVisible] = useScrollAnimation();
  const [contactsRef, isContactsVisible] = useScrollAnimation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const success = await sendToTelegram({
      name: formData.name,
      phone: formData.phone,
      project: formData.project,
    });
    
    if (success) {
      setFormData({ name: '', phone: '', project: '' });
      setIsSuccessOpen(true);
    } else {
      alert('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };

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
      alert('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData type="contactPage" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.about, url: `/${lang}` },
          { name: t.nav.contact, url: `/${lang}/contact` },
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
          onConsultClick={openModal}
        />
        
        <main id="main-content">
      {/* Смуга як у футері: той самий bg-black і вертикальний ритм (py-20 як у max-w-7xl у footer) */}
      <div
        className="w-full bg-black mt-16 py-20 shrink-0"
        aria-hidden
      />
      <section className="pt-12 md:pt-16 pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={titleRef} className={`mb-20 scroll-animate-up ${isTitleVisible ? 'animate' : ''}`}>
            <h1 className="text-4xl lg:text-6xl font-black text-black leading-tight mb-8">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-700 font-semibold leading-relaxed max-w-3xl">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div ref={formRef} className={`scroll-animate-left ${isFormVisible ? 'animate' : ''}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-10 md:mb-12 leading-tight">
                {t.contact.formTitle}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
                    {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
                    {t.contact.phone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
                    {t.contact.project}
                  </label>
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t.contact.projectPlaceholder}
                    className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent resize-none"
                  />
                </div>

                <div className="w-full text-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center min-w-[min(100%,280px)] sm:min-w-[300px] md:min-w-[340px] px-14 py-5 md:px-16 md:py-6 text-white font-semibold text-lg md:text-xl rounded-full transition hover:opacity-90 bg-black tracking-wide"
                  >
                    {t.contact.submit}
                  </button>
                </div>
              </form>

              <p className="text-gray-600 font-semibold mt-12 leading-relaxed text-lg">
                {t.contact.help}
              </p>
            </div>

            <div ref={contactsRef} className={`scroll-animate-right ${isContactsVisible ? 'animate' : ''}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-10 md:mb-12 leading-tight">
                {t.contact.contacts}
              </h2>
              
              <div className="space-y-8">
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-xs font-normal text-gray-500 mb-3 tracking-wider">{t.footer.legalBlockTitle}</p>
                  <p className="text-xs font-normal text-gray-500 mb-1 tracking-wider">{t.footer.recipientLabel}</p>
                  <p className="text-lg font-black text-black">{t.footer.companyName}</p>
                  <p className="text-gray-600 font-semibold mt-1 break-all">{t.footer.footerIban}: {legal.iban}</p>
                  <p className="text-gray-600 font-semibold mt-1">{t.footer.footerEdrpou}: {legal.edrpou}</p>
                  <p className="text-gray-600 font-semibold mt-2">{t.footer.address}: {t.footer.legalAddress}</p>
                </div>

                <div className="pb-6 border-b border-gray-200">
                  <p className="text-xs font-normal text-gray-500 mb-3 tracking-wider">{t.footer.phone}</p>
                  <a href={`tel:${legal.phoneRaw}`} className="text-2xl font-black text-black hover:text-gray-600 transition">
                    {legal.phone}
                  </a>
                </div>

                <div className="pb-6 border-b border-gray-200">
                  <p className="text-xs font-normal text-gray-500 mb-3 tracking-wider">{t.footer.email}</p>
                  <a href={`mailto:${legal.email}`} className="text-xl font-black text-black hover:text-gray-600 transition break-all">
                    {legal.email}
                  </a>
                </div>

                <div className="pt-4 space-y-4">
                  <a
                    href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 bg-black text-white py-4 px-6 hover:bg-gray-900 transition-all duration-300 w-full rounded-full"
                  >
                    <FaWhatsapp className="w-6 h-6 flex-shrink-0" aria-hidden />
                    <span className="tracking-wider font-black">{t.contact.whatsapp}</span>
                    <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                      <div className="w-8 h-px bg-white"></div>
                    </div>
                  </a>
                  
                  <a
                    href="https://t.me/telebotsnowayrm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 bg-black text-white py-4 px-6 hover:bg-gray-900 transition-all duration-300 w-full rounded-full"
                  >
                    <FaTelegramPlane className="w-6 h-6 flex-shrink-0" aria-hidden />
                    <span className="tracking-wider font-black">{t.contact.telegram}</span>
                    <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                      <div className="w-8 h-px bg-white"></div>
                    </div>
                  </a>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xs font-normal text-gray-500 mb-4 tracking-wider">
                      {t.contact.followNews}
                    </p>
                    <div className="flex items-center space-x-4">
                      <a
                        href="https://www.instagram.com/telebotsnowayrm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://t.me/telebotsnowayrmchannel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors"
                        aria-label="Telegram Channel"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2">
                  <Link href={`/${lang}/privacy`} className="group inline-flex items-center text-gray-500 hover:text-black transition font-semibold">
                    <div className="w-8 h-px bg-gray-300 mr-3 group-hover:w-12 group-hover:bg-black transition-all" />
                    {t.footer.privacy}
                  </Link>
                  <Link href={`/${lang}/terms`} className="group inline-flex items-center text-gray-500 hover:text-black transition font-semibold">
                    <div className="w-8 h-px bg-gray-300 mr-3 group-hover:w-12 group-hover:bg-black transition-all" />
                    {t.footer.terms}
                  </Link>
                  <Link href={`/${lang}/refund`} className="group inline-flex items-center text-gray-500 hover:text-black transition font-semibold">
                    <div className="w-8 h-px bg-gray-300 mr-3 group-hover:w-12 group-hover:bg-black transition-all" />
                    {t.footer.refund}
                  </Link>
                </div>
              </div>
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

