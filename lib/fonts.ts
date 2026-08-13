import { Manrope, Montserrat } from 'next/font/google';

/**
 * Ваги не вказуємо навмисно: сімейства мають варіативні версії,
 * тож Google віддає один файл на сабсет замість окремого файлу на кожну вагу.
 */

/** Основний текст / UI та заголовки поза hero */
export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-manrope',
  preload: false,
});

/** Hero-секції */
export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

export const fontVariables = `${manrope.variable} ${montserrat.variable}`;
