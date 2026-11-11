/**
 * Footer (site-finale) reveal-on-scroll, or static stacking on small / tall footers.
 * Ported from site/app — with jump-safe freeze and cheaper per-frame updates.
 */

function reduceMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initFinale(): () => void {
  const root = document.documentElement;
  const holder = document.querySelector('.page-holder') as HTMLElement | null;
  const content = document.querySelector('.site-page-content') as HTMLElement | null;
  const pageInner =
    (document.querySelector('.site-page-inner') as HTMLElement | null) || content;
  const spacer = document.querySelector('.finale-spacer') as HTMLElement | null;
  const finale = document.querySelector('.site-finale') as HTMLElement | null;
  const header = document.querySelector('.site-header') as HTMLElement | null;
  if (!holder || !content || !spacer || !finale || !pageInner) return () => {};

  let vh = innerHeight;
  let vw = innerWidth;
  let mode = 'reveal';
  let overflowTravel = 0;
  let frozen = false;
  let raf = 0;
  const cache = {
    pageHeight: 0,
    vh: 0,
    start: 0,
    radius: -1,
    content: '',
    opacity: '',
    translate: '',
    finaleP: '',
    shadow: '',
    pe: '',
    transform: '',
    active: false,
  };

  const setActive = (on: boolean) => {
    if (cache.active === on) return;
    cache.active = on;
    if (on) root.dataset.finaleActive = '';
    else delete root.dataset.finaleActive;
  };

  const clearFinaleProgress = () => {
    root.style.removeProperty('--finale-p');
    delete root.dataset.finaleActive;
    cache.finaleP = '';
    cache.active = false;
  };

  const unfreeze = () => {
    if (!frozen) return;
    frozen = false;
    cache.pageHeight = 0;
    cache.vh = 0;
    cache.start = 0;
    cache.radius = -1;
    cache.content = '';
    cache.opacity = '';
    cache.translate = '';
    cache.shadow = '';
    cache.pe = '';
    cache.transform = '';
    holder.style.height = '';
    for (const prop of [
      'position',
      'top',
      'left',
      'right',
      'height',
      'overflow',
      'transform',
      'transformOrigin',
      'borderRadius',
      'pointerEvents',
      'willChange',
      'boxShadow',
    ] as const) {
      content.style[prop] = '';
    }
    pageInner.style.position = '';
    pageInner.style.top = '';
    if (header) {
      header.style.opacity = '';
      header.style.translate = '';
      header.inert = false;
    }
    content.inert = false;
    clearFinaleProgress();
    window.dispatchEvent(new Event('page-finale-release'));
  };

  const measureMode = () => {
    const band = parseFloat(getComputedStyle(root).getPropertyValue('--finale-band')) || 0.18;
    const inner = finale.querySelector('.finale-inner') as HTMLElement | null;
    let innerH = 0;
    if (inner) {
      inner.style.minHeight = '0';
      innerH = inner.offsetHeight;
      inner.style.minHeight = '';
    }
    const bandH = vh * (1 - band);
    const next = vw < 768 || innerH > 2 * vh ? 'static' : 'reveal';
    overflowTravel = next === 'reveal' ? Math.max(0, Math.ceil(innerH - bandH)) : 0;
    spacer.style.height = overflowTravel ? `${Math.round(bandH) + overflowTravel}px` : '';
    if (next !== mode || root.dataset.finaleMode !== next) {
      mode = next;
      root.dataset.finaleMode = next;
    }
  };

  const tick = () => {
    raf = 0;

    if (mode === 'static') {
      unfreeze();
      finale.style.setProperty('--p', '1');
      const p = Math.max(0, Math.min(1, (vh - finale.getBoundingClientRect().top) / (0.25 * vh)));
      if (p > 0) root.style.setProperty('--finale-p', p.toFixed(4));
      else root.style.removeProperty('--finale-p');
      setActive(p > 0);
      if (header) {
        header.style.opacity = p > 0 ? String(1 - p) : '';
        header.inert = p > 0.5;
      }
      return;
    }

    const pageH = Math.max(pageInner.offsetHeight, vh);
    const start = pageH - vh;
    const travel = Math.max(0, spacer.offsetHeight - overflowTravel);
    const progressScroll = scrollY - start;

    const inner = finale.querySelector('.finale-inner') as HTMLElement | null;
    const pin =
      overflowTravel > 0
        ? `translate3d(0, ${Math.round(
            overflowTravel - Math.max(0, Math.min(overflowTravel, progressScroll - travel))
          )}px, 0)`
        : '';
    if (inner && cache.content !== pin) {
      cache.content = pin;
      inner.style.transform = pin;
    }

    if (progressScroll <= 0 || travel <= 0) {
      unfreeze();
      finale.style.setProperty('--p', '0');
      return;
    }

    // Reserve scroll height BEFORE taking content out of flow — avoids a 1-frame jump.
    if (cache.pageHeight !== pageH) {
      cache.pageHeight = pageH;
      holder.style.height = `${pageH}px`;
    }

    if (!frozen) {
      frozen = true;
      content.style.position = 'fixed';
      content.style.top = '0';
      content.style.left = '0';
      content.style.right = '0';
      content.style.overflow = 'hidden';
      content.style.transformOrigin = '50% 100%';
      content.style.willChange = 'transform';
      pageInner.style.position = 'relative';
    }

    if (cache.vh !== vh) {
      cache.vh = vh;
      content.style.height = `${vh}px`;
    }
    if (cache.start !== start) {
      cache.start = start;
      pageInner.style.top = `${-start}px`;
    }

    const raw = Math.min(1, progressScroll / travel);
    // Soft ease without 3D perspective/rotateX (cheaper compositing).
    const eased = reduceMotion() ? 0 : raw * raw * (2 - raw);
    const y = -Math.min(progressScroll, travel);

    const transform = `translate3d(0, ${y}px, 0) scale(${1 - 0.06 * eased})`;
    if (cache.transform !== transform) {
      cache.transform = transform;
      content.style.transform = transform;
    }

    const radius = 4 * Math.round((32 * eased) / 4);
    if (cache.radius !== radius) {
      cache.radius = radius;
      content.style.borderRadius = `0 0 ${radius}px ${radius}px`;
    }

    // Quantize shadow alpha so we don't rewrite boxShadow every frame.
    const shadowStep = Math.round(eased * 8) / 8;
    const shadowA = (0.14 + shadowStep * 0.28).toFixed(3);
    const shadowB = (0.07 + shadowStep * 0.2).toFixed(3);
    const shadow = `0 28px 72px rgba(0,0,0,${shadowA}), 0 8px 24px rgba(0,0,0,${shadowB})`;
    if (cache.shadow !== shadow) {
      cache.shadow = shadow;
      content.style.boxShadow = shadow;
    }

    const pe = raw > 0.15 ? 'none' : '';
    if (cache.pe !== pe) {
      cache.pe = pe;
      content.style.pointerEvents = pe;
    }
    content.inert = raw > 0.5;

    const p = raw.toFixed(3);
    if (cache.finaleP !== p) {
      cache.finaleP = p;
      root.style.setProperty('--finale-p', p);
    }
    setActive(raw > 0);
    finale.style.setProperty('--p', p);

    if (header) {
      const fade = Math.min(1, raw / 0.22);
      const opacity = (1 - fade).toFixed(3);
      const translate = `0 ${Math.round(-12 * fade)}px`;
      if (cache.opacity !== opacity) {
        cache.opacity = opacity;
        header.style.opacity = opacity;
      }
      if (cache.translate !== translate) {
        cache.translate = translate;
        header.style.translate = translate;
      }
      header.inert = raw > 0.02;
    }
  };

  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(tick);
  };

  const onResize = () => {
    const nextW = innerWidth;
    const nextH = innerHeight;
    // Ignore URL-bar chrome jitter on mobile; remeasure real orientation/layout changes.
    if (nextW === vw && Math.abs(nextH - vh) < 80) return;
    vh = nextH;
    vw = nextW;
    unfreeze();
    measureMode();
    schedule();
  };

  // Drop leftover --finale-p from a previous soft navigation before first paint tick.
  clearFinaleProgress();
  measureMode();
  tick();

  const pageRO = new ResizeObserver(schedule);
  pageRO.observe(pageInner);

  const finaleInner = finale.querySelector('.finale-inner');
  let lastInnerH = 0;
  const finaleRO = new ResizeObserver(() => {
    const h = finaleInner?.scrollHeight ?? 0;
    if (Math.abs(h - lastInnerH) < 1) return;
    lastInnerH = h;
    measureMode();
    schedule();
  });
  if (finaleInner) finaleRO.observe(finaleInner);

  void document.fonts?.ready.then(() => {
    measureMode();
    schedule();
  });

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  return () => {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', onResize);
    pageRO.disconnect();
    finaleRO.disconnect();
    if (raf) cancelAnimationFrame(raf);
    unfreeze();
    clearFinaleProgress();
    spacer.style.height = '';
    finale.style.removeProperty('--p');
    delete root.dataset.finaleMode;
    if (header) {
      header.style.opacity = '';
      header.style.translate = '';
      header.inert = false;
    }
  };
}
