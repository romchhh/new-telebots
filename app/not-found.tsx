import type { Metadata } from 'next';
import NotFoundPage from '@/components/NotFoundPage';

export const metadata: Metadata = {
  title: { absolute: 'Сторінку не знайдено | TeleBots' },
  robots: { index: false, follow: true },
};

export default NotFoundPage;
