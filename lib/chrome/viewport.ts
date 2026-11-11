/** Keep --vh / --lvh in sync with the real viewport (site/app). */

export function initViewport(): () => void {
  const root = document.documentElement;
  let lastW = 0;
  let lastH = 0;

  const update = (force = false) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const lvh = window.outerHeight || h;
    if (!force && w === lastW && Math.abs(h - lastH) < 1) return;
    lastW = w;
    lastH = h;
    root.style.setProperty('--vh', `${Math.round(h)}px`);
    root.style.setProperty('--lvh', `${Math.round(lvh)}px`);
  };

  const onResize = () => update();
  const onOrient = () => update(true);

  update(true);
  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('orientationchange', onOrient, { passive: true });
  window.visualViewport?.addEventListener('resize', onResize, { passive: true });

  return () => {
    window.removeEventListener('resize', onResize);
    window.removeEventListener('orientationchange', onOrient);
    window.visualViewport?.removeEventListener('resize', onResize);
  };
}
