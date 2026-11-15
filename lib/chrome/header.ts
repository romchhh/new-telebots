/** Subtle header tuck after scrolling past the hero (desktop only). */

export function initHeader(): () => void {
  const header = document.querySelector('.site-header');
  if (!header) return () => {};

  // Mobile: skip tuck listener — transform-on-scroll was a common jank source.
  if (matchMedia('(max-width: 767px), (hover: none)').matches) {
    header.removeAttribute('data-tucked');
    return () => {};
  }

  let raf = 0;
  let lastTucked: boolean | null = null;
  const update = () => {
    raf = 0;
    const tucked = window.scrollY > 48;
    if (tucked === lastTucked) return;
    lastTucked = tucked;
    if (tucked) header.setAttribute('data-tucked', '');
    else header.removeAttribute('data-tucked');
  };

  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', schedule, { passive: true });
  return () => {
    window.removeEventListener('scroll', schedule);
    if (raf) cancelAnimationFrame(raf);
  };
}
