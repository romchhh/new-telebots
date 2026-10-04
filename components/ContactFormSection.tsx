'use client';

import Image from 'next/image';
import ContactFormWithSuccess from '@/components/ContactFormWithSuccess';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import type { Language, SiteCopy } from '@/components/translations';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import { FORM_EYEBROW, SHELL_LIGHT } from '@/lib/siteUi';

const CONTACT_FORM_VISUAL = '/other/contact-form-visual.png';

type ContactFormSectionProps = {
  t: SiteCopy;
  lang: Language;
  serviceName?: string;
  id?: string;
  className?: string;
};

export default function ContactFormSection({
  t,
  lang,
  serviceName,
  id = 'contact-form',
  className = '',
}: ContactFormSectionProps) {
  const c = t.contact;

  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 lg:py-24 ${SITE_PX} ${className}`}>
      <div className={`${SITE_INNER_WIDE} overflow-hidden ${SHELL_LIGHT} max-sm:rounded-[1.25rem]`}>
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)_minmax(0,1fr)] lg:items-stretch">
          <div className="relative hidden min-h-[280px] overflow-hidden border-b border-neutral-100 bg-white lg:block lg:min-h-0 lg:border-b-0 lg:border-r lg:border-neutral-100 lg:py-10 lg:pl-0 lg:pr-10 xl:py-12 xl:pr-12">
            <Image
              src={CONTACT_FORM_VISUAL}
              alt=""
              fill
              className="object-contain object-left pl-0 pr-6 pt-6 pb-6 lg:pr-8 lg:pt-8 lg:pb-8 xl:pr-10"
              sizes="(max-width: 1024px) 0px, 22vw"
              quality={90}
              aria-hidden
            />
            <p className={`relative z-10 pl-8 ${FORM_EYEBROW} text-neutral-500 lg:pl-10 xl:pl-12`}>
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand align-middle" aria-hidden />
              {c.formEyebrow}
            </p>
          </div>

          <div className="border-b border-neutral-100 p-5 sm:p-8 md:p-10 lg:border-b-0 lg:border-r lg:border-neutral-100 lg:p-10 xl:p-12">
            <p className={`mb-3 sm:mb-4 ${FORM_EYEBROW} text-brand lg:hidden`}>{c.formEyebrow}</p>
            <ContactFormWithSuccess t={t} lang={lang} serviceName={serviceName} variant="light" />
          </div>

          <div className="bg-neutral-50/50 p-5 sm:p-8 md:p-10 lg:p-10 xl:p-12">
            <ContactDetailsColumn t={t} lang={lang} variant="light" layout="sidebar" />
          </div>
        </div>
      </div>
    </section>
  );
}
