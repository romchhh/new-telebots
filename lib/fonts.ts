import { Manrope, Montserrat, Unbounded } from 'next/font/google';

/**
 * Ваги не вказуємо навмисно: усі три сімейства мають варіативні версії,
 * тож Google віддає один файл на сабсет замість окремого файлу на кожну вагу.
 */

/** Основний текст / UI — без preload, щоб не конкурувати з LCP-зображенням */
export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-manrope',
  preload: false,
});

/** Заголовки поза hero */
export const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-unbounded',
  preload: false,
});

/** Hero-секції */
export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

export const fontVariables = `${manrope.variable} ${unbounded.variable} ${montserrat.variable}`;
