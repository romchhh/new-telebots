'use client';

import OrderCtaPill from '@/components/OrderCtaPill';
import { useHomeModal } from '@/components/HomeModalProvider';

type HeroOrderCtaProps = {
  eyebrow: string;
  eyebrowMobile: string;
  label: string;
  className?: string;
};

export default function HeroOrderCta({ eyebrow, eyebrowMobile, label, className }: HeroOrderCtaProps) {
  const openModal = useHomeModal();

  return (
    <OrderCtaPill
      size="hero"
      eyebrow={eyebrow}
      eyebrowMobile={eyebrowMobile}
      label={label}
      onClick={openModal}
      className={className}
    />
  );
}
