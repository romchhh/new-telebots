'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Language } from './translations';

interface LanguageSelectorProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isMobile?: boolean;
  isScrolled?: boolean;
  currentLang?: Language;
}

const languages = [
  { code: 'uk' as Language, name: 'UA' },
  { code: 'en' as Language, name: 'EN' },
  { code: 'pl' as Language, name: 'PL' }
];

export default function LanguageSelector({ lang, setLang, isMobile = false, isScrolled = false, currentLang }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = currentLang || lang;

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    setIsOpen(false);
    if (pathname) {
      const newPath = pathname.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
      router.push(newPath);
    }
  };

  const iconClass = `p-2 rounded-full transition ${
    isScrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
  }`;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={iconClass}
        aria-label="Оберіть мову"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-5 h-5" strokeWidth={1.8} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" aria-hidden onClick={() => setIsOpen(false)} />
          <div
            className={`absolute right-0 z-20 mt-2 min-w-[100px] rounded-lg border border-white/15 bg-black/95 backdrop-blur-md shadow-xl overflow-hidden ${
              isMobile ? 'top-full mt-3' : 'top-full'
            }`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-3 text-left text-sm font-medium tracking-wider transition ${
                  currentLanguage === language.code
                    ? 'text-white bg-white/15'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {language.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

