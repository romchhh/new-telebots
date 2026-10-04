import ContactFormSection from '@/components/ContactFormSection';
import type { Language, SiteCopy } from '@/components/translations';

type T = SiteCopy;

interface ContactSectionProps {
  t: T;
  lang: Language;
  serviceName?: string;
  id?: string;
  headingLevel?: 'h1' | 'h2';
  className?: string;
}

/** @deprecated headingLevel ignored — layout uses ContactFormSection */
export default function ContactSection({
  t,
  lang,
  serviceName,
  id = 'contact-form',
  className = '',
}: ContactSectionProps) {
  return <ContactFormSection t={t} lang={lang} serviceName={serviceName} id={id} className={className} />;
}
