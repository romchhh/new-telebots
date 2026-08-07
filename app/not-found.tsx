import type { Metadata } from 'next';
import LangNotFound from './[lang]/not-found';

export const metadata: Metadata = {
  title: 'Сторінку не знайдено',
  robots: { index: false, follow: true },
};

export default LangNotFound;
