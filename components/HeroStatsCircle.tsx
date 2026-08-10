const montserrat = { fontFamily: 'var(--font-montserrat)' };

export type HeroStatPair = {
  label: string;
  value: string;
};

type HeroStatsCircleProps = {
  startDate: HeroStatPair;
  duration: HeroStatPair;
};

/**
 * Круг з двома статами (верхній правий + нижній лівий кут).
 * Текст тримаємо в зовнішніх кутах квадрантів — подалі від хреста по центру.
 */
export default function HeroStatsCircle({ startDate, duration }: HeroStatsCircleProps) {
  return (
    <div className="absolute z-20 right-0 top-16 sm:top-24 md:top-28 lg:top-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(220px,58vw)] w-[min(220px,58vw)] -translate-x-1/2 -translate-y-1/2 sm:h-[min(240px,52vw)] sm:w-[min(240px,52vw)] md:h-[clamp(280px,32vw,440px)] md:w-[clamp(280px,32vw,440px)]"
        style={{
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 38%, rgba(0,0,0,0.14) 62%, transparent 86%)',
        }}
        aria-hidden
      />
      <div className="relative p-3 sm:p-5 md:p-7 lg:p-9 xl:p-10">
        <div className="relative h-[8.5rem] w-[8.5rem] sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-60 lg:w-60 xl:h-64 xl:w-64">
          <div className="absolute inset-0 z-0" aria-hidden>
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-px bg-white/35" />
            <div className="absolute bottom-0 top-0 left-1/2 w-px -translate-x-px bg-white/35" />
          </div>

          <div className="relative z-10 grid h-full w-full grid-cols-2 grid-rows-2">
            <div aria-hidden />

            {/* Верхній правий кут — подалі від центру (pb + pl) */}
            <div className="flex min-w-0 flex-col items-end justify-start text-right pb-[18%] pl-[14%] pt-1 pr-1 sm:pt-1.5 sm:pr-1.5 md:pb-[20%] md:pl-[16%] md:pt-2 md:pr-2 lg:pt-2.5 lg:pr-3">
              <span
                className="mb-0.5 max-w-full text-[9px] uppercase leading-snug tracking-[0.12em] text-gray-300 sm:mb-1 sm:text-[10px] sm:tracking-[0.14em] md:text-xs lg:text-sm"
                style={montserrat}
              >
                {startDate.label}
              </span>
              <span
                className="max-w-full text-[11px] font-semibold uppercase leading-[1.15] text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl"
                style={montserrat}
              >
                {startDate.value}
              </span>
            </div>

            {/* Нижній лівий кут — подалі від центру (pt + pr) */}
            <div className="flex min-w-0 flex-col items-start justify-end text-left pt-[18%] pr-[14%] pb-1 pl-1 sm:pb-1.5 sm:pl-1.5 md:pt-[20%] md:pr-[16%] md:pb-2 md:pl-2 lg:pb-2.5 lg:pl-3">
              <span
                className="mb-0.5 max-w-full text-[9px] uppercase leading-snug tracking-[0.12em] text-gray-300 sm:mb-1 sm:text-[10px] sm:tracking-[0.14em] md:text-xs lg:text-sm"
                style={montserrat}
              >
                {duration.label}
              </span>
              <span
                className="max-w-full text-[11px] font-semibold uppercase leading-[1.15] text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl"
                style={montserrat}
              >
                {duration.value}
              </span>
            </div>

            <div aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
