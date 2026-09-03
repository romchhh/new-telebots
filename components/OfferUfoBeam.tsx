'use client';

import OfferPng from '@/components/OfferPng';

type OfferUfoBeamProps = {
  className?: string;
};

type UfoUnitProps = {
  ufoW: number;
  beamW: number;
  beamH: number;
  floatDelayClass?: string;
  beamDelayClass?: string;
  className?: string;
};

function UfoUnit({
  ufoW,
  beamW,
  beamH,
  floatDelayClass = '',
  beamDelayClass = '',
  className = '',
}: UfoUnitProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div style={{ width: ufoW }}>
        <OfferPng
          src="/offer/ufo.png"
          alt="НЛО TeleBots — ілюстрація оферу сайту за $200"
          width={507}
          height={169}
          className={`block h-auto w-full offer-float-sm ${floatDelayClass}`}
        />
      </div>
      <div className="-mt-0.5 overflow-hidden" style={{ width: beamW, height: beamH }}>
        <OfferPng
          src="/offer/beam.png"
          alt="Промінь світла під НЛО — ілюстрація TeleBots"
          width={288}
          height={532}
          className={`block h-full w-full object-cover object-top offer-beam-blink ${beamDelayClass}`}
        />
      </div>
    </div>
  );
}

/** Три компактні НЛО — не виходять за межі блоку */
export default function OfferUfoBeam({ className = '' }: OfferUfoBeamProps) {
  return (
    <div
      className={`relative mx-auto h-[108px] w-[128px] overflow-hidden sm:h-[116px] sm:w-[136px] lg:ml-auto lg:mr-0 ${className}`}
    >
      <UfoUnit
        ufoW={46}
        beamW={22}
        beamH={28}
        beamDelayClass="[animation-delay:0.2s]"
        className="absolute left-0 top-1"
      />
      <UfoUnit
        ufoW={40}
        beamW={19}
        beamH={24}
        floatDelayClass="[animation-delay:1.1s]"
        beamDelayClass="[animation-delay:0.9s]"
        className="absolute right-0 top-[22%]"
      />
      <UfoUnit
        ufoW={34}
        beamW={16}
        beamH={20}
        floatDelayClass="[animation-delay:2.2s]"
        beamDelayClass="[animation-delay:1.6s]"
        className="absolute bottom-1 left-[32%]"
      />
    </div>
  );
}
