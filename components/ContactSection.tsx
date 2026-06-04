'use client';

import ContactFormBlock from '@/components/ContactFormBlock';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import { translations, Language } from '@/components/translations';

type T = (typeof translations)['uk'];

interface ContactSectionProps {
  t: T;
  lang: Language;
  onSuccess?: () => void;
  serviceName?: string;
  id?: string;
  /** h1 на /contact, h2 в кінці статті блогу */
  headingLevel?: 'h1' | 'h2';
  className?: string;
}

export default function ContactSection({
  t,
  lang,
  onSuccess,
  serviceName,
  id = 'contact-form',
  headingLevel = 'h2',
  className = '',
}: ContactSectionProps) {
  const Heading = headingLevel;

  return (
    <section id={id} className={`bg-white px-6 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <Heading className="mb-6 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </Heading>
          <p className="max-w-3xl text-lg font-semibold leading-relaxed text-gray-700 md:text-xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200">
          <div className="lg:pr-10 xl:pr-14 2xl:pr-20">
            <ContactFormBlock
              t={t}
              lang={lang}
              serviceName={serviceName}
              onSuccess={onSuccess}
            />
          </div>
          <div className="mt-14 lg:mt-0 lg:pl-10 xl:pl-14 2xl:pl-20">
            <ContactDetailsColumn t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
