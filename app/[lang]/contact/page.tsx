'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Instagram, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { translations, Language } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';
import SuccessMessage from '@/components/SuccessMessage';

export default function ContactPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
      
      <div className="bg-black text-white py-3 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wider">
            {t.contact.cta}
          </p>
        </div>
      </div>
      
      <section className="pt-20 pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-4xl lg:text-6xl font-black text-black leading-tight mb-8">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-700 font-semibold leading-relaxed mb-4 text-lg max-w-3xl">
              {t.contact.subtitle}
            </p>
            <p className="text-lg text-gray-600 font-semibold max-w-3xl">
              {t.contact.cta}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-px bg-black mr-4"></div>
                <h2 className="text-sm font-black text-black tracking-wider">
                  {t.contact.formTitle}
                </h2>
              </div>
              
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

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 text-white font-normal text-base rounded-full transition hover:opacity-90 bg-black"
                >
                  {t.contact.submit}
                </button>
              </form>

              <p className="text-gray-600 font-semibold mt-12 leading-relaxed text-lg">
                {t.contact.help}
              </p>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-px bg-black mr-4"></div>
                <h2 className="text-sm font-black text-black tracking-wider">
                  {t.contact.contacts}
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-xs font-normal text-gray-500 mb-3 tracking-wider">{t.footer.phone}</p>
                  <a href="tel:+380960908006" className="text-2xl font-black text-black hover:text-gray-600 transition">
                    +38 0 96 090 80 06
                  </a>
                </div>

                <div className="pb-6 border-b border-gray-200">
                  <p className="text-xs font-normal text-gray-500 mb-3 tracking-wider">{t.footer.email}</p>
                  <a href="mailto:roman.fedoniuk@gmail.com" className="text-xl font-black text-black hover:text-gray-600 transition break-all">
                    roman.fedoniuk@gmail.com
                  </a>
                </div>

                <div className="pt-4 space-y-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=380960908006&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-black text-white py-4 px-6 hover:bg-gray-900 transition-all duration-300 w-full rounded-full"
                  >
                    <span className="tracking-wider font-black">{t.contact.whatsapp}</span>
                    <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                      <div className="w-8 h-px bg-white"></div>
                    </div>
                  </a>
                  
                  <a
                    href="https://t.me/telebotsnowayrm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-black text-white py-4 px-6 hover:bg-gray-900 transition-all duration-300 w-full rounded-full"
                  >
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

                <div className="pt-12 border-t border-gray-200">
                  <a href="#" className="group inline-flex items-center text-gray-500 hover:text-black transition font-semibold">
                    <div className="w-8 h-px bg-gray-300 mr-3 group-hover:w-12 group-hover:bg-black transition-all"></div>
                    {t.footer.privacy}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={t.contact.success}
      />
      </div>
  );
}

