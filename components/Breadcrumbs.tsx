import Link from 'next/link';
import { SITE_PX } from '@/lib/siteLayout';

export type Crumb = {
  name: string;
  /** Останній елемент лишаємо без href — це поточна сторінка */
  href?: string;
};

/**
 * Видимий аналог розмітки BreadcrumbList: Google вимагає, щоб структуровані
 * дані відповідали видимому контенту, інакше rich result ігнорується.
 */
export default function Breadcrumbs({
  items,
  /** `bar` — окрема смуга на всю ширину, `inline` — усередині наявного контейнера */
  variant = 'bar',
}: {
  items: Crumb[];
  variant?: 'bar' | 'inline';
}) {
  const isBar = variant === 'bar';

  return (
    <nav
      aria-label="Breadcrumb"
      className={isBar ? `border-b border-gray-100 bg-white ${SITE_PX}` : undefined}
    >
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm ${
          isBar ? 'py-4' : 'mb-6'
        }`}
      >
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-x-2">
            {index > 0 && (
              <span className="text-gray-300" aria-hidden>
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-brand">
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-900" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
