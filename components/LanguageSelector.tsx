'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
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

const allLanguages = [
  { code: 'uk' as Language, name: 'UA' },
  { code: 'en' as Language, name: 'EN' },
  { code: 'pl' as Language, name: 'PL' },
  { code: 'ru' as Language, name: 'RU' }
];

export default function LanguageSelector({ lang, setLang, isMobile = false, isScrolled = false, currentLang }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const currentLanguage = currentLang || lang;
  const currentLangObj = allLanguages.find(l => l.code === currentLanguage);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    if (pathname) {
      const newPath = pathname.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
      router.push(newPath);
    }
  };

  if (isMobile) {
    return (
      <div className="flex space-x-3">
        {languages.map(language => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`px-4 py-2 text-sm font-medium tracking-wider transition ${
              currentLanguage === language.code 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {language.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 text-sm tracking-widest transition ${
          isScrolled 
            ? 'text-black hover:text-gray-600' 
            : 'text-white hover:text-gray-300'
        }`}
      >
        <span>{currentLangObj?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className={`absolute right-0 mt-3 border shadow-xl z-20 min-w-[80px] rounded-md overflow-hidden ${
            isScrolled 
              ? 'bg-white border-gray-200' 
              : 'bg-black border-gray-800'
          }`}>
            {languages.map(language => (
              <button
                key={language.code}
                onClick={() => {
                  handleLanguageChange(language.code);
                  setIsOpen(false);
                }}
                className={`w-full px-5 py-3 text-left text-sm tracking-wider transition ${
                  isScrolled
                    ? currentLanguage === language.code
                      ? 'text-black bg-gray-100'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : currentLanguage === language.code
                      ? 'text-white bg-gray-900'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
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

