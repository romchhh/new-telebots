'use client';

interface StatsSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function StatsSection({ t }: StatsSectionProps) {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-black mb-2">
              {t.services.stats.projects}
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-black mb-2">
              {t.services.stats.years}
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-xl font-semibold">
              {t.services.stats.support}
            </div>
          </div>
        </div>
        
        <div className="text-center border-t border-gray-800 pt-12">
          <h3 className="text-3xl md:text-4xl font-black">
            {t.services.stats.cta}
          </h3>
        </div>
      </div>
    </section>
  );
}

