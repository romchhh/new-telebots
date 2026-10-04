/**
 * Єдині радіуси, кнопки та типографіка для TeleBots.
 * card = 1.25rem · shell = 1.75rem · pill = full
 */

/** Картки, фото, textarea, CTA-band, модалки */
export const RADIUS_CARD = 'rounded-[1.25rem]';

/** Великі обгортки секцій (форма контактів, карусель послуг) */
export const RADIUS_SHELL = 'rounded-[1.75rem]';

/** Поля вводу, прості CTA та «пігулки» OrderCtaPill */
export const RADIUS_PILL = 'rounded-full';

/** Розміри кругів зі стрілкою (узгоджено з OrderCtaPill) */
export const CTA_ARROW_CIRCLE = {
  hero: 'h-12 w-12 shrink-0 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-[4.25rem] xl:w-[4.25rem]',
  md: 'h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14',
  sm: 'h-10 w-10 sm:h-11 sm:w-11',
} as const;

export const CTA_ARROW_ICON = {
  hero: 'h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7',
  md: 'h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6',
  sm: 'h-4 w-4 sm:h-5 sm:w-5',
} as const;

/** Prev/next у горизонтальних каруселях */
export const BTN_NAV_CIRCLE = `${RADIUS_PILL} inline-flex h-12 w-12 items-center justify-center border border-neutral-200 bg-white text-neutral-800 transition hover:border-neutral-300 hover:bg-neutral-50`;

/** Окремий круг-CTA (картки, «переглянути все») */
export const BTN_ARROW_CIRCLE = `${RADIUS_PILL} inline-flex h-11 w-11 items-center justify-center bg-neutral-900 text-white transition-transform group-hover:scale-105 sm:h-12 sm:w-12`;

export const BTN_ARROW_CIRCLE_OUTLINE = `${RADIUS_PILL} inline-flex h-11 w-11 items-center justify-center border border-neutral-300 bg-white transition group-hover:border-neutral-400 group-hover:bg-neutral-50 sm:h-12 sm:w-12`;

export const ICON_ARROW_IN_CIRCLE = 'h-4 w-4 sm:h-5 sm:w-5';
export const ICON_ARROW_NAV = 'h-4 w-4';

export const SHADOW_CARD =
  'shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]';

export const SHADOW_BRAND =
  'shadow-[0_24px_80px_-20px_rgba(244,114,182,0.35)]';

export const TYPE_EYEBROW =
  'text-xs font-semibold uppercase tracking-[0.14em]';

export const TYPE_SECTION_TITLE =
  'text-[clamp(1.75rem,4vw,2.35rem)] font-black leading-[1.06] tracking-tight';

/** Заголовок блоку контактної форми */
export const FORM_HEADLINE =
  'text-[clamp(1.85rem,4.5vw,2.85rem)] font-black leading-[1.06] tracking-tight';

export const FORM_EYEBROW =
  'text-sm font-semibold uppercase tracking-[0.14em] sm:text-base';

export const TYPE_DISPLAY_H2 =
  'text-[clamp(1.65rem,4vw,2.75rem)] font-black uppercase leading-[1.05] tracking-tight';

/** Primary CTA — форми, модалка, success */
export const BTN_BRAND =
  `${RADIUS_PILL} bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-neutral-900 shadow-lg shadow-brand/30 transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70`;

export const BTN_BRAND_BLOCK = `inline-flex w-full items-center justify-center ${BTN_BRAND}`;

/** Submit у великій контактній формі */
export const BTN_BRAND_LG =
  `${RADIUS_PILL} bg-brand px-10 py-4 text-base font-bold uppercase tracking-[0.06em] text-neutral-900 shadow-lg shadow-brand/30 transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70 sm:px-12 sm:py-[1.125rem] sm:text-lg`;

/** Outline на білому фоні */
export const BTN_OUTLINE =
  `${RADIUS_PILL} border-2 border-neutral-900 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.06em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white`;

/** Outline на темному фоні */
export const BTN_OUTLINE_ON_DARK =
  `${RADIUS_PILL} border border-brand/35 bg-white/[0.03] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:border-brand/55 hover:bg-brand/10 sm:text-sm`;

export const INPUT_DARK = `${RADIUS_PILL} w-full border border-white/12 bg-white/[0.04] px-5 py-3.5 text-sm text-white placeholder:text-white/35 transition focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/35`;

export const INPUT_LIGHT = `${RADIUS_PILL} w-full border-2 border-neutral-300 bg-white px-6 py-[1.125rem] text-base text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.05)] placeholder:text-neutral-500 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25 sm:text-[17px] md:py-5`;

export const TEXTAREA_DARK = `w-full min-h-[120px] resize-none ${RADIUS_CARD} border border-white/12 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-white/35 focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/35`;

export const TEXTAREA_LIGHT = `w-full min-h-[11rem] resize-none ${RADIUS_CARD} border-2 border-neutral-300 bg-white px-6 py-5 text-base text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.05)] placeholder:text-neutral-500 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25 sm:text-[17px] md:min-h-[12rem]`;

export const PHONE_WRAP_DARK = `${RADIUS_PILL} flex items-center gap-2 border border-white/12 bg-white/[0.04] pl-4 pr-2 transition focus-within:border-brand/60 focus-within:ring-1 focus-within:ring-brand/35`;

export const PHONE_WRAP_LIGHT = `${RADIUS_PILL} flex items-center gap-2.5 border-2 border-neutral-300 bg-white pl-5 pr-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/25 md:py-2`;

export const CARD_LIGHT =
  `${RADIUS_CARD} border border-neutral-200 bg-neutral-50`;

export const CARD_MEDIA = `${RADIUS_CARD} overflow-hidden bg-neutral-100 ${SHADOW_CARD}`;

export const SHELL_DARK = `${RADIUS_SHELL} border border-brand/10 bg-black text-white ${SHADOW_BRAND}`;

export const SHELL_LIGHT = `${RADIUS_SHELL} border border-neutral-200/90 bg-white text-neutral-900 shadow-[0_32px_64px_-28px_rgba(0,0,0,0.12)]`;

/** Другорядні кнопки на світлому фоні (месенджери) */
export const BTN_GHOST_LIGHT = `${RADIUS_PILL} border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-xs font-semibold text-neutral-800 transition hover:border-brand/40 hover:bg-brand-soft sm:text-sm`;

/** Секції та картки на сторінках послуг */
export const SERVICE_SECTION_Y = 'py-20 md:py-28 lg:py-32';

export const SERVICE_CARD_GRID =
  'flex w-full flex-wrap justify-center gap-4 sm:gap-6 md:gap-8';

/** 2 колонки на sm, 3 на lg */
export const SERVICE_CARD_SIZE =
  'w-full min-w-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-[540px]';

/** 2 колонки (outcomes, benefits) */
export const SERVICE_CARD_SIZE_WIDE =
  'w-full min-w-0 sm:w-[calc(50%-12px)] max-w-[540px]';

export const SERVICE_CARD = `${CARD_LIGHT} p-6 sm:p-8 md:p-10 lg:p-11`;

export const SERVICE_CARD_TITLE =
  'text-xl font-semibold leading-snug tracking-tight text-black sm:text-2xl';

export const SERVICE_CARD_BODY = 'text-base leading-relaxed text-neutral-600 sm:text-lg';

/** Обгортка горизонтального скролу — без overflow:hidden (ламає вертикальний скрол сторінки на touch) */
export const HORIZONTAL_SCROLL_WRAP = 'w-full min-w-0';

/**
 * Карусель з snap. Не використовувати touch-action: pan-x — блокує вертикальний скрол на мобільному.
 * Додайте gap/padding через className (наприклад `${SITE_PX}`).
 */
export const HORIZONTAL_SCROLL_RAIL =
  'scroll-rail-x flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:[scrollbar-width:thin] lg:[scrollbar-color:rgba(0,0,0,0.2)_transparent] lg:[&::-webkit-scrollbar]:h-1.5 lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-neutral-300';

/** Простий горизонтальний overflow (пов’язані кейси, offer) */
export const HORIZONTAL_SCROLL_OVERFLOW = 'scroll-rail-x overflow-x-auto overscroll-x-contain [scrollbar-width:thin]';
