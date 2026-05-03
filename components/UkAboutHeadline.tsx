import { ukHomeAboutHeadline } from '@/components/translations';

export default function UkAboutHeadline() {
  const h = ukHomeAboutHeadline;

  return (
    <div className="w-full max-w-full mx-auto flex flex-col items-center text-center gap-8 md:gap-10 lg:gap-12 md:w-[95vw] md:max-w-[95vw] md:mx-0 md:items-start md:text-left">
      <h1 className="w-full max-w-full font-black text-black leading-[1.05] md:leading-[1.08] tracking-[-0.03em] hyphens-none break-normal text-center md:text-left">
        <span
          className="block text-[clamp(2.35rem,10vw,6.25rem)] normal-case tracking-tight pb-1 md:pb-2"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {h.brand}
        </span>
        <span
          className="block mt-5 md:mt-7 lg:mt-8 text-[clamp(0.62rem,1.65vw,0.8rem)] md:text-xs font-bold tracking-[0.32em] text-neutral-500 uppercase max-w-2xl text-balance leading-relaxed"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {h.eyebrow}
        </span>
        {h.lines.map((line) => (
          <span
            key={line}
            className="block mt-4 md:mt-5 lg:mt-6 text-[clamp(1.05rem,5.2vw,4.25rem)] sm:text-[clamp(1.2rem,4.5vw,3.75rem)] md:text-[clamp(2.75rem,7vw,5.5rem)] uppercase tracking-[-0.02em] max-w-full text-balance leading-[1.12] md:leading-[1.1]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {line}
          </span>
        ))}
      </h1>
      <p
        className="w-full max-w-3xl mx-auto md:mx-0 text-[clamp(0.95rem,2.6vw,1.3rem)] md:text-lg text-neutral-600 font-medium leading-[1.75] md:leading-[1.8] text-balance text-center md:text-left mt-2 md:mt-4"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {h.lead}
      </p>
    </div>
  );
}
