type KeyboardKeyBadgeProps = {
  /** Number shown as 01, 02… (ignored if `symbol` is set). */
  n?: number;
  /** Keyboard glyph / short label (e.g. ⌘, ⌥, ⇧). */
  symbol?: string;
  /** `sm` — compact; default — larger keys for audience / benefit cards. */
  size?: 'sm' | 'md';
  className?: string;
};

const SIZE_CLASS = {
  sm: 'h-7 min-w-7 rounded-md px-1.5 text-xs shadow-[0_2px_0_var(--brand-dark),0_4px_10px_rgba(244,114,182,0.3)] sm:h-8 sm:min-w-8 sm:rounded-lg sm:text-sm',
  md: 'h-9 min-w-9 rounded-lg px-2 text-sm shadow-[0_3px_0_var(--brand-dark),0_6px_14px_rgba(244,114,182,0.35)] sm:h-11 sm:min-w-11 sm:rounded-xl sm:text-base md:h-12 md:min-w-12 md:text-lg',
} as const;

/** Клавіша: рожева з білим текстом — цифра або символ. */
export default function KeyboardKeyBadge({
  n = 1,
  symbol,
  size = 'md',
  className = '',
}: KeyboardKeyBadgeProps) {
  const label = symbol ?? String(n).padStart(2, '0');

  return (
    <span
      className={`inline-flex select-none items-center justify-center bg-brand font-bold tabular-nums text-white ${SIZE_CLASS[size]} ${className}`}
      aria-hidden
    >
      {label}
    </span>
  );
}

/** Символи для benefit-карток на solutions (циклічно). */
export const KEYBOARD_BENEFIT_SYMBOLS = ['⌘', '⌥', '⇧', '⌃', '⏎', '⎋'] as const;
