/** Instant scroll helpers — avoids fighting CSS `scroll-behavior: smooth`. */

export function scrollToInstant(top: number, left = 0) {
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo({ top, left, behavior: 'instant' as ScrollBehavior });
  root.style.scrollBehavior = prev;
}

export function scrollToTopInstant() {
  scrollToInstant(0);
}
