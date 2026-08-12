'use client';

import OfferPng from '@/components/OfferPng';

type OfferUfoBeamProps = {
  className?: string;
};

type UfoUnitProps = {
  ufoWidth: string;
  beamWidth: string;
  floatDelayClass?: string;
  beamDelayClass?: string;
  className?: string;
};

function UfoUnit({
  ufoWidth,
  beamWidth,
  floatDelayClass = '',
  beamDelayClass = '',
  className = '',
}: UfoUnitProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <OfferPng
        src="/offer/ufo.png"
        alt=""
        width={507}
        height={169}
        className={`relative z-10 ${ufoWidth} offer-float ${floatDelayClass}`}
      />
      <OfferPng
        src="/offer/beam.png"
        alt=""
        width={288}
        height={532}
        className={`offer-beam-blink -mt-0.5 ${beamWidth} ${beamDelayClass}`}
      />
    </div>
  );
}

/** Три компактні НЛО асиметрично в колонці праворуч */
export default function OfferUfoBeam({ className = '' }: OfferUfoBeamProps) {
  return (
    <div
      className={`relative mx-auto h-[150px] w-full max-w-[11rem] sm:h-[165px] sm:max-w-[12rem] lg:mx-0 lg:ml-auto lg:h-[175px] lg:max-w-[13rem] ${className}`}
    >
      <UfoUnit
        ufoWidth="w-[68px] sm:w-[72px]"
        beamWidth="w-[32px] sm:w-[34px]"
        beamDelayClass="[animation-delay:0.2s]"
        className="absolute left-0 top-0"
      />
      <UfoUnit
        ufoWidth="w-[58px] sm:w-[62px]"
        beamWidth="w-[28px] sm:w-[30px]"
        floatDelayClass="[animation-delay:1.1s]"
        beamDelayClass="[animation-delay:0.9s]"
        className="absolute right-0 top-[16%]"
      />
      <UfoUnit
        ufoWidth="w-[50px] sm:w-[54px]"
        beamWidth="w-[24px] sm:w-[26px]"
        floatDelayClass="[animation-delay:2.2s]"
        beamDelayClass="[animation-delay:1.6s]"
        className="absolute bottom-0 left-[30%]"
      />
    </div>
  );
}
