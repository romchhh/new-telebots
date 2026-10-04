'use client';

import { useState } from 'react';
import ContactFormBlock from '@/components/ContactFormBlock';
import SuccessMessage from '@/components/SuccessMessage';
import type { Language, SiteCopy } from '@/components/translations';

export default function ContactFormWithSuccess({
  t,
  lang,
  serviceName,
  hideTitle = false,
  variant = 'light',
}: {
  t: SiteCopy;
  lang: Language;
  serviceName?: string;
  hideTitle?: boolean;
  variant?: 'light' | 'dark';
}) {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  return (
    <>
      <ContactFormBlock
        t={t}
        lang={lang}
        serviceName={serviceName}
        hideTitle={hideTitle}
        variant={variant}
        onSuccess={() => setIsSuccessOpen(true)}
      />
      {isSuccessOpen ? (
        <SuccessMessage
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          message={t.contact.success}
        />
      ) : null}
    </>
  );
}
