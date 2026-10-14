/**
 * Готові затемнені JPG для OG-прев’ю (текст читається без CSS-оверлеїв у Satori).
 * Ключ — оригінальний шлях у /public, значення — файл у /other/og-dark/.
 */
export const OG_DARK_BACKGROUNDS: Record<string, string> = {
  '/other/og-hero.jpg': '/other/og-dark/og-hero.jpg',
  '/other/about-hero-macbook.jpg': '/other/og-dark/about-hero-macbook.jpg',
  '/other/portfolio-hero.jpg': '/other/og-dark/portfolio-hero.jpg',
  '/services/services-websites.jpg': '/other/og-dark/services-websites.jpg',
  '/services/services-chatbots.jpg': '/other/og-dark/services-chatbots.jpg',
  '/services/services-design.jpg': '/other/og-dark/services-design.jpg',
  '/services/services-hero_new.jpg': '/other/og-dark/services-hero_new.jpg',
  '/services/services-parsers.jpg': '/other/og-dark/services-parsers.jpg',
  '/offer/carcloud.png': '/other/og-dark/carcloud.jpg',
};

export function toOgDarkBackground(path: string): string {
  return OG_DARK_BACKGROUNDS[path] || path;
}
