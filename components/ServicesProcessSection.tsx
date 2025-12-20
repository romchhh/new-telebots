'use client';

import { useScrollAnimation } from './useScrollAnimation';

interface ServicesProcessSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function ServicesProcessSection({ t }: ServicesProcessSectionProps) {
  const [ref, isVisible] = useScrollAnimation();

  const steps = [
    {
      number: '01',
      title: t.services.process?.step1 || 'Консультація',
      description: t.services.process?.step1Desc || 'Безкоштовна консультація для визначення найкращого рішення'
    },
    {
      number: '02',
      title: t.services.process?.step2 || 'Аудит',
      description: t.services.process?.step2Desc || 'Повний аудит бізнес-процесів для оптимального рішення'
    },
    {
      number: '03',
      title: t.services.process?.step3 || 'Розробка',
      description: t.services.process?.step3Desc || 'Створення рішення згідно з вашими потребами'
    },
    {
      number: '04',
      title: t.services.process?.step4 || 'Підтримка',
      description: t.services.process?.step4Desc || 'Постійна підтримка та оптимізація після запуску'
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 scroll-animate-up ${isVisible ? 'animate' : ''}`} ref={ref}>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            {t.services.processTitle || 'Як ми працюємо?'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.processSubtitle || 'Простий та зрозумілий процес від ідеї до реалізації'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const [stepRef, isStepVisible] = useScrollAnimation();
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 z-0" style={{ width: 'calc(100% - 4rem)' }} />
                )}
                <div
                  className={`relative bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 scroll-animate-scale ${isStepVisible ? 'animate' : ''}`}
                  ref={stepRef}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-6xl font-black text-gray-300 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

