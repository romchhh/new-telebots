'use client';

import type { MouseEvent, PointerEvent } from 'react';
import { useHomeModal } from '@/components/HomeModalProvider';

type LivingCtaButtonProps = {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  /** Hero uses solid core + glass rim like site/app */
  variant?: 'hero' | 'default';
};

export default function LivingCtaButton({
  label,
  onClick,
  className = '',
  variant = 'default',
}: LivingCtaButtonProps) {
  const openModal = useHomeModal();
  const isHero = variant === 'hero';

  const handlePointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== 'mouse') return;
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty('--pointer-x', `${x}%`);
    btn.style.setProperty('--pointer-y', `${y}%`);
  };

  return (
    <div className={`cta-anchor ${isHero ? 'cta-anchor--hero' : ''} ${className}`.trim()}>
      <button
        type="button"
        className={`living-button ${isHero ? 'living-button--hero' : ''}`}
        data-ready="true"
        aria-label={label}
        onClick={onClick ?? (() => openModal())}
        onPointerMove={handlePointerMove}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <span aria-hidden="true" className="button-material">
          {isHero ? <span className="button-material-core" /> : <span className="button-substrate" />}
          <span className="glass-shell">
            <span className="fluid-glass-scene">
              <span className="glass-surface">
                <span className="glass-surface-rim" />
                {isHero ? (
                  <span className="glass-surface-splay glass-surface-splay--ends" />
                ) : (
                  <span className="glass-surface-splay" />
                )}
              </span>
            </span>
          </span>
          <span className="glass-highlight" />
        </span>
        <span className="button-label">{label}</span>
      </button>
    </div>
  );
}
