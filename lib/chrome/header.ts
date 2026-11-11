/** Subtle header tuck after scrolling past the hero (site/app). */

function refreshHeaderVeil() {
  const veil = document.querySelector('.header-veil') as HTMLElement | null;
  if (!veil) return;
  // Soft nav remounts the veil; WebKit/Blink can leave backdrop-filter inert until a reflow.
  veil.style.display = 'none';
  void veil.offsetHeight;
  veil.style.display = '';
}

export function initHeader(): () => void {
  const header = document.querySelector('.site-header');
  if (!header) return () => {};

  refreshHeaderVeil();

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
