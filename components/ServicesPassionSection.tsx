'use client';

interface ServicesPassionSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function ServicesPassionSection({ t }: ServicesPassionSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/services-bg.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
          {t.services.passion}
          <br />
          <span className="italic font-normal">{t.services.passionTitle}</span>
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed font-semibold">
          {t.services.passionDesc}
        </p>
      </div>
    </section>
  );
}

