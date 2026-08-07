type KeyboardKeyBadgeProps = {
  /** Number shown as 01, 02… (ignored if `symbol` is set). */
  n?: number;
  /** Keyboard glyph / short label (e.g. ⌘, ⌥, ⇧). */
  symbol?: string;
  className?: string;
};

/** Клавіша: рожева з білим текстом — цифра або символ. */
export default function KeyboardKeyBadge({ n = 1, symbol, className = '' }: KeyboardKeyBadgeProps) {
  const label = symbol ?? String(n).padStart(2, '0');

  return (
    <span
      className={`inline-flex h-9 min-w-9 select-none items-center justify-center rounded-lg bg-brand px-2 text-sm font-bold tabular-nums text-white shadow-[0_3px_0_var(--brand-dark),0_6px_14px_rgba(244,114,182,0.35)] sm:h-11 sm:min-w-11 sm:rounded-xl sm:text-base md:h-12 md:min-w-12 md:text-lg ${className}`}
      aria-hidden
    >
      {label}
    </span>
  );
}

/** Символи для benefit-карток на solutions (циклічно). */
export const KEYBOARD_BENEFIT_SYMBOLS = ['⌘', '⌥', '⇧', '⌃', '⏎', '⎋'] as const;
