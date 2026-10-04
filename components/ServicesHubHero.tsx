'use client';

import FullBleedHeroImage from '@/components/FullBleedHeroImage';
import ServiceHeroSection, { type ServiceHeroCopy } from '@/components/ServiceHeroSection';
interface ServicesHubHeroProps {
  t: typeof import('./translations').translations.uk;
}

function buildServicesHubHero(t: ServicesHubHeroProps['t']): ServiceHeroCopy {
  return {
    tagline: t.services.passionTitle,
    title: t.services.passion,
    subtitle: '',
    intro: t.services.passionDesc,
    ctaQuestion: t.services.passionMoreQuestion,
    ctaQuestionShort: t.hero.ctaQuestionShort,
    startDate: t.hero.startDate,
    duration: t.hero.duration,
  };
}

export default function ServicesHubHero({ t }: ServicesHubHeroProps) {
  const serviceButton =
    t.services.websitesPage?.button ?? t.about.getInTouch;

  return (
    <ServiceHeroSection
      heroBackground={
        <FullBleedHeroImage
          src="/services/services-hero_new.jpg"
          alt="TeleBots — послуги розробки сайтів, чат-ботів та дизайну"
        />
      }
      hero={buildServicesHubHero(t)}
      orderButtonLabel={serviceButton}
    />
  );
}
