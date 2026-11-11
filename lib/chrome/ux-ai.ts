/** Scroll-driven UX+AI drum — ported from site/app. */

const TUNE = { radius: 0.6, fade: 0.85, cardsStart: 0.18 };

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const range = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));
const smooth = (v: number) => v * v * (3 - 2 * v);

function isFinaleFrozen() {
  return (document.querySelector('.site-page-content') as HTMLElement | null)?.style.position === 'fixed';
}

let activeCleanup: (() => void) | null = null;

export function initUxAi(): () => void {
  activeCleanup?.();
  activeCleanup = null;

  const section = document.querySelector<HTMLElement>('.ux-ai');
  const stage = document.querySelector<HTMLElement>('.ux-ai-stage');
  const intro = document.querySelector<HTMLElement>('.ux-ai-intro');
  const words = [...document.querySelectorAll<HTMLElement>('.ux-ai-heading .ux-ai-word')];
  const plus = document.querySelector<HTMLElement>('.ux-ai-plus');
  const lines = [...document.querySelectorAll<HTMLElement>('.ux-ai-line')];
  const cards = [...document.querySelectorAll<HTMLElement>('.ux-ai-card')];
  if (!section || !stage || !intro || words.length < 2 || !cards.length) return () => {};

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const geo = { lx: 0, ly: 0, rx: 0, ry: 0, h: 1000, step: 356 };
  let raf = 0;

  const offsetIn = (el: HTMLElement, root: HTMLElement) => {
    let x = 0;
    let y = 0;
    for (let node: HTMLElement | null = el; node && node !== root; node = node.offsetParent as HTMLElement | null) {
      x += node.offsetLeft;
      y += node.offsetTop;
    }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  };

  const measure = () => {
    if (isFinaleFrozen()) return;
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    if (!w || !h) return;
    const pad = Math.min(72, Math.max(24, 0.0375 * w));
    const left = offsetIn(words[0], stage);
    const right = offsetIn(words[1] ?? words[0], stage);
    const desktop = w >= 768;
    geo.lx = desktop ? pad - left.x : (w - left.w) / 2 - left.x;
    geo.ly = desktop ? h / 2 - left.h / 2 - left.y : 2 * pad - left.y;
    geo.rx = desktop ? w - pad - right.w - right.x : (w - right.w) / 2 - right.x;
    geo.ry = desktop ? h / 2 - right.h / 2 - right.y : h - 2 * pad - right.h - right.y;
    geo.h = desktop ? h : h * 0.75;
    geo.step = cards[0].offsetWidth * (1 + 16 / 340);
  };

  const progress = () => {
    const travel = section.offsetHeight - window.innerHeight;
    if (travel <= 0) return 0;
    return clamp01(-section.getBoundingClientRect().top / travel);
  };

  const tick = () => {
    raf = 0;
    if (isFinaleFrozen()) return;

    const L = progress();
    const outro = smooth(range(L, 0.88, 1));
    intro.style.opacity = String(1 - outro);
    intro.style.transform = `scale(${1 - 0.12 * outro})`;

    const spread = smooth(range(L, 0.1, 0.28));
    words[0].style.transform = `translate(${geo.lx * spread}px, ${geo.ly * spread}px)`;
    (words[1] ?? words[0]).style.transform = `translate(${geo.rx * spread}px, ${geo.ry * spread}px)`;
    if (plus) plus.style.opacity = String(1 - range(L, 0.08, 0.16));

    lines.forEach((line, i) => {
      const o = smooth(range(L, 0.02 + 0.035 * i, 0.09 + 0.035 * i));
      line.style.opacity = String(1 - o);
      line.style.transform = `scale(${1 - 0.15 * o})`;
    });

    const count = cards.length;
    const radius = geo.h * TUNE.radius;
    const n = range(L, TUNE.cardsStart, 1);
    const angleMin = -1.05;
    const angleMax = ((count - 1) * geo.step) / radius + 1.05;
    const anglePos = angleMin + (angleMax - angleMin) * n;

    cards.forEach((card, i) => {
      const angle = (i * geo.step) / radius - anglePos;
      const y = radius * Math.sin(angle);
      const z = radius * (Math.cos(angle) - 1);
      card.style.transform = `translate3d(0, ${y.toFixed(2)}px, ${z.toFixed(2)}px) rotateX(${(-angle).toFixed(4)}rad)`;

      const norm = clamp01(Math.abs(angle) / 1.05);
      const opacity = (1 - TUNE.fade * norm ** 2) * (1 - smooth(range(norm, 0.7, 1)));
      card.style.opacity = String(opacity);
      // No per-frame filter:blur — opacity + transform are enough and far cheaper.
      if (card.style.filter) card.style.filter = 'none';
    });
  };

  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(tick);
  };

  const onResize = () => {
    measure();
    schedule();
  };

  measure();
  tick();

  const ro = new ResizeObserver(() => {
    measure();
    schedule();
  });
  ro.observe(stage);
  ro.observe(section);
  void document.fonts?.ready.then(() => {
    measure();
    schedule();
  });

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', onResize);
  window.addEventListener('page-finale-release', onResize);

  const cleanup = () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('page-finale-release', onResize);
    if (activeCleanup === cleanup) activeCleanup = null;
  };

  activeCleanup = cleanup;
  return cleanup;
}
