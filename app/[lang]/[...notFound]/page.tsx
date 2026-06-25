import { notFound } from 'next/navigation';

/** Будь-який невідомий шлях під /:lang/* → 404 */
export default function CatchAllNotFound() {
  notFound();
}
