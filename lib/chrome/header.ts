/** Subtle header tuck after scrolling past the hero (site/app). */

export function initHeader(): () => void {
  const header = document.querySelector('.site-header');
  if (!header) return () => {};

  let raf = 0;
  const update = () => {
    raf = 0;
    const tucked = window.scrollY > 48;
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
