'use client';

import { useScrollAnimation } from './useScrollAnimation';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';

interface ServicesBenefitsSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function ServicesBenefitsSection({ t }: ServicesBenefitsSectionProps) {
  const [ref, isVisible] = useScrollAnimation();

  const benefits = [
    {
      title: t.services.benefits?.experience || 'Досвід',
      description: t.services.benefits?.experienceDesc || 'Більше 4 років роботи та 200+ успішних проєктів',
      icon: '🎯'
    },
    {
      title: t.services.benefits?.quality || 'Якість',
      description: t.services.benefits?.qualityDesc || 'Кожен проєкт проходить ретельну перевірку та тестування',
      icon: '✨'
    },
    {
      title: t.services.benefits?.support || 'Підтримка',
      description: t.services.benefits?.supportDesc || 'Ми з вами від старту до фінішу й навіть після',
      icon: '🤝'
    },
    {
      title: t.services.benefits?.speed || 'Швидкість',
      description: t.services.benefits?.speedDesc || 'Оперативне виконання без втрати якості',
      icon: '⚡'
    }
  ];

  return (
    <section className={`bg-gray-50 py-24 ${SITE_PX}`}>
      <div className={SITE_INNER}>
        <div className={`text-center mb-16 scroll-animate-up ${isVisible ? 'animate' : ''}`} ref={ref}>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            {t.services.benefitsTitle || 'Чому обирають нас?'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.benefitsSubtitle || 'Ми пропонуємо комплексні рішення для вашого бізнесу'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const [benefitRef, isBenefitVisible] = useScrollAnimation();
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 scroll-animate-up ${isBenefitVisible ? 'animate' : ''}`}
                ref={benefitRef}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-black text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

