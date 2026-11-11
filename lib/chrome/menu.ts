/**
 * Full-screen navigation menu (ported from site/app).
 * Phases: closed → opening → open → closing → closed
 * Animates a cloned page preview into the navigation-stage (WAAPI).
 */

const EASE = 'cubic-bezier(.22, 1, .36, 1)';
const OPEN_MS = 800;
const CLOSE_MS = 720;
const RADIUS_MS = 180;
const CLOSE_EVENT = 'site-chrome:close-menu';

function reduceMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function openTransform() {
  return innerWidth < 768
    ? 'translateY(calc(100svh - 112px)) scale(.90)'
    : 'translateY(28svh) perspective(1600px) rotateX(12deg) scale(.91)';
}

function snapshotPage(pageContent: HTMLElement, stage: HTMLElement) {
  stage.replaceChildren();
  const preview = document.createElement('div');
  preview.className = 'navigation-preview';
  preview.setAttribute('aria-hidden', 'true');
  preview.inert = true;

  const clone = pageContent.cloneNode(true) as HTMLElement;
  clone.inert = true;
  clone.style.cssText = `opacity:1;visibility:visible;position:absolute;top:${-window.scrollY}px;left:0;width:100%;pointer-events:none`;

  clone.querySelectorAll('[id]').forEach((node) => {
    node.id = `nav-snap-${node.id}`;
  });
  clone.querySelectorAll('script, iframe, video, audio').forEach((n) => n.remove());

  preview.appendChild(clone);
  stage.appendChild(preview);
  return preview;
}

function normalizePath(href: string) {
  try {
    const u = new URL(href, window.location.origin);
    return (u.pathname.replace(/\/$/, '') || '/') + u.hash;
  } catch {
    return href;
  }
}

function isLangHome(path: string) {
  return /^\/(uk|en|pl|ru)?$/.test(path.replace(/\/$/, '') || '/');
}

export function initMenu(): () => void {
  const shell = document.querySelector('.navigation-shell') as HTMLElement | null;
  const stage = document.querySelector('.navigation-stage') as HTMLElement | null;
  const pageContent = document.querySelector('.site-page-content') as HTMLElement | null;
  const controls = document.querySelector('.navigation-controls') as HTMLElement | null;
  const header = document.querySelector('.site-header') as HTMLElement | null;
  const toggle = document.querySelector('.menu-toggle') as HTMLButtonElement | null;
  const nav = document.getElementById('site-navigation');
  const backdrop = document.querySelector('.navigation-backdrop');
  if (!shell || !stage || !pageContent || !toggle || !nav || !header) return () => {};

  const labels = toggle.querySelectorAll('.menu-toggle-label > span');
  let phase = 'closed';
  let token = 0;
  let preview: HTMLElement | null = null;
  let lockedScrollY = 0;
  let savedOverflow = '';
  const running = new Set<Animation>();

  const setPhase = (next: string) => {
    phase = next;
    shell.dataset.menuPhase = next;
  };

  const setMenuChrome = (open: boolean) => {
    header.classList.toggle('site-header--menu', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.hidden = !open;
    if (controls) {
      if (open) {
        controls.setAttribute('role', 'dialog');
        controls.setAttribute('aria-modal', 'true');
        controls.setAttribute('aria-label', 'Site menu');
      } else {
        controls.removeAttribute('role');
        controls.removeAttribute('aria-modal');
        controls.removeAttribute('aria-label');
      }
    }
    if (labels[0]) {
      if (!open) labels[0].setAttribute('data-active', 'true');
      else labels[0].removeAttribute('data-active');
    }
    if (labels[1]) {
      if (open) labels[1].setAttribute('data-active', 'true');
      else labels[1].removeAttribute('data-active');
    }
  };

  const lockScroll = () => {
    const html = document.documentElement;
    const body = document.body;
    lockedScrollY = window.scrollY;
    savedOverflow = html.style.overflow;
    html.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${lockedScrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
  };

  const unlockScroll = (restore = true) => {
    const html = document.documentElement;
    const body = document.body;
    if (body.style.position !== 'fixed') return;
    html.style.overflow = savedOverflow;
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    if (restore) window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'instant' as ScrollBehavior });
  };

  const clearPreview = () => {
    for (const a of running) a.cancel();
    running.clear();
    stage.replaceChildren();
    preview = null;
  };

  const finishClose = (focusToggle = true, restoreScroll = true) => {
    token += 1;
    pageContent.inert = false;
    unlockScroll(restoreScroll);
    setPhase('closed');
    setMenuChrome(false);
    clearPreview();
    if (focusToggle) {
      requestAnimationFrame(() => toggle.focus({ preventScroll: true }));
    }
  };

  const run = async (
    el: HTMLElement | null,
    frames: Keyframe[],
    duration: number,
    delay = 0
  ) => {
    if (!el) return;
    const anim = el.animate(frames, {
      duration: reduceMotion() ? 1 : duration,
      delay: reduceMotion() ? 0 : delay,
      easing: EASE,
      fill: 'forwards',
    });
    running.add(anim);
    try {
      await anim.finished;
    } catch {
      /* cancelled */
    }
    running.delete(anim);
  };

  const openMenu = async () => {
    if (phase !== 'closed' || !pageContent || !stage) return;
    const id = ++token;
    preview = snapshotPage(pageContent, stage);
    lockScroll();
    pageContent.inert = true;
    setMenuChrome(true);
    setPhase('opening');

    await run(preview, [{ borderRadius: '0px' }, { borderRadius: '40px' }], RADIUS_MS);
    await run(
      preview,
      [{ transform: 'none', opacity: 1 }, { transform: openTransform(), opacity: 1 }],
      OPEN_MS
    );
    if (id === token) setPhase('open');
  };

  const closeMenu = async () => {
    if (phase !== 'open' && phase !== 'opening') return;
    const id = ++token;
    setPhase('closing');
    if (preview) {
      const style = getComputedStyle(preview);
      run(preview, [{ borderRadius: style.borderRadius }, { borderRadius: '0px' }], RADIUS_MS, 60);
      await run(
        preview,
        [{ transform: style.transform, opacity: 1 }, { transform: 'none', opacity: 1 }],
        CLOSE_MS,
        60
      );
    }
    if (id === token) finishClose(true, true);
  };

  const onToggle = () => {
    if (phase === 'closed') openMenu();
    else if (phase === 'open' || phase === 'opening') closeMenu();
  };

  const onBackdrop = () => {
    if (phase === 'open') closeMenu();
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && (phase === 'open' || phase === 'opening')) {
      e.preventDefault();
      closeMenu();
    }
  };

  const onCloseEvent = () => {
    if (phase === 'open' || phase === 'opening') {
      setPhase('closing');
      finishClose(false, true);
    }
  };

  const onNavClick = (e: Event) => {
    const link = e.currentTarget as HTMLAnchorElement;
    const href = link.getAttribute('href') || '';
    const target = normalizePath(href).split('#')[0] || '/';
    const current = normalizePath(window.location.pathname);
    const hash = href.includes('#') ? `#${href.split('#')[1]}` : '';

    if (hash && (target === current || href.startsWith('#'))) {
      e.preventDefault();
      closeMenu().then(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }

    if (isLangHome(target) && target === current) {
      e.preventDefault();
      closeMenu().then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    if (phase === 'open' || phase === 'opening') {
      setPhase('closing');
      finishClose(false, false);
    }
  };

  toggle.addEventListener('click', onToggle);
  backdrop?.addEventListener('click', onBackdrop);
  document.addEventListener('keydown', onKey);
  document.addEventListener(CLOSE_EVENT, onCloseEvent);

  const links = [...nav.querySelectorAll('a[href]')];
  links.forEach((link) => link.addEventListener('click', onNavClick));

  setPhase('closed');
  setMenuChrome(false);

  return () => {
    token += 1;
    toggle.removeEventListener('click', onToggle);
    backdrop?.removeEventListener('click', onBackdrop);
    document.removeEventListener('keydown', onKey);
    document.removeEventListener(CLOSE_EVENT, onCloseEvent);
    links.forEach((link) => link.removeEventListener('click', onNavClick));
    finishClose(false, true);
  };
}

export function closeSiteMenu() {
  document.dispatchEvent(new Event(CLOSE_EVENT));
}
