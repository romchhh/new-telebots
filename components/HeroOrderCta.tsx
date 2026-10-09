'use client';

import OrderCtaPill from '@/components/OrderCtaPill';
import { useHomeModal } from '@/components/HomeModalProvider';

type HeroOrderCtaProps = {
  eyebrow: string;
  eyebrowMobile: string;
  label: string;
  labelMobile: string;
  className?: string;
};

export default function HeroOrderCta({
  eyebrow,
  eyebrowMobile,
  label,
  labelMobile,
  className,
}: HeroOrderCtaProps) {
  const openModal = useHomeModal();

  return (
    <OrderCtaPill
      size="hero"
      eyebrow={eyebrow}
      eyebrowMobile={eyebrowMobile}
      label={label}
      labelMobile={labelMobile}
      onClick={openModal}
      className={className}
    />
  );
}
