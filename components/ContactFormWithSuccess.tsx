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
}: {
  t: SiteCopy;
  lang: Language;
  serviceName?: string;
  hideTitle?: boolean;
}) {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  return (
    <>
      <ContactFormBlock
        t={t}
        lang={lang}
        serviceName={serviceName}
        hideTitle={hideTitle}
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
