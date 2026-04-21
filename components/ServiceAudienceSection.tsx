'use client';

export type ServiceAudienceCopy = {
  title: string;
  titleAccent: string;
  items: string[];
};

interface ServiceAudienceSectionProps {
  copy: ServiceAudienceCopy;
}

const montserrat = { fontFamily: 'var(--font-montserrat)' } as const;

export default function ServiceAudienceSection({ copy }: ServiceAudienceSectionProps) {
  const { title, titleAccent, items } = copy;

  return (
    <div className="relative bg-white overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl w-full">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight text-center mb-14 md:mb-16 leading-tight"
          style={montserrat}
        >
          {title}{' '}
          <span className="italic font-black text-black">{titleAccent}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((text, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <div
                key={num}
                className="w-[calc(50%-12px)] min-w-[140px] max-w-[420px] md:w-[calc(33.333%-16px)] rounded-3xl p-6 sm:p-8 border border-gray-200/70 bg-white/45 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)] hover:bg-white/75 hover:border-gray-300/90 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div
                  className="text-4xl sm:text-5xl font-light italic mb-5 sm:mb-6 text-black leading-none"
                  style={montserrat}
                  aria-hidden
                >
                  [{num}]
                </div>
                <p className="mt-1 text-base leading-snug font-light text-gray-900">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
