'use client';

import OrderCtaPill from '@/components/OrderCtaPill';
import { useHomeModal } from '@/components/HomeModalProvider';

type HeroOrderCtaProps = {
  eyebrow?: string;
  eyebrowMobile?: string;
  label: string;
  labelMobile?: string;
  className?: string;
};

/** Герой — біла пігулка TeleBots + чорне коло зі стрілкою */
export default function HeroOrderCta({
  label,
  labelMobile,
  eyebrow,
  eyebrowMobile,
  className,
}: HeroOrderCtaProps) {
  const openModal = useHomeModal();

  return (
    <OrderCtaPill
      size="hero"
      variant="solid"
      label={label}
      labelMobile={labelMobile}
      eyebrow={eyebrow}
      eyebrowMobile={eyebrowMobile}
      elevated
      onClick={() => openModal()}
      className={`w-full max-w-full shadow-lg shadow-black/25 ${className ?? ''}`.trim()}
    />
  );
}
