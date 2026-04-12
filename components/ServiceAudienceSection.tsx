'use client';

export type ServiceAudienceCopy = {
  title: string;
  titleAccent: string;
  items: string[];
};

interface ServiceAudienceSectionProps {
  copy: ServiceAudienceCopy;
}

export default function ServiceAudienceSection({ copy }: ServiceAudienceSectionProps) {
  const { title, titleAccent, items } = copy;

  return (
    <div className="relative px-4 pt-16 md:pt-24 lg:pt-32 pb-14 md:pb-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight text-center mb-14 md:mb-20 px-2 leading-tight">
          {title}{' '}
          <span className="font-black text-black">{titleAccent}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-7">
          {items.map((text, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <div
                key={num}
                className="w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] min-w-[140px] max-w-[420px] rounded-3xl p-6 md:p-8 border border-gray-200/90 bg-white/95 backdrop-blur-sm shadow-[0_14px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_52px_rgba(0,0,0,0.11)] hover:border-gray-300 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div
                  className="text-4xl md:text-5xl font-light italic mb-4 md:mb-6 text-gray-900 leading-none tracking-tight"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  [{num}]
                </div>
                <p className="mt-1 text-sm md:text-base leading-snug font-light text-gray-800">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
