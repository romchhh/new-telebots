import { initViewport } from './viewport';
import { initHeader } from './header';
import { initMenu } from './menu';
import { initFinale } from './finale';

let activeCleanup: (() => void) | null = null;

/**
 * Client-side chrome behaviour (menu + sticky finale).
 * Idempotent: a new boot always tears down the previous one first, so Soft nav
 * and React Strict Mode never leave duplicate scroll / resize listeners.
 */
export function bootSiteChrome(): () => void {
  activeCleanup?.();
  activeCleanup = null;

  const prevRestoration =
    typeof history !== 'undefined' && 'scrollRestoration' in history
      ? history.scrollRestoration
      : null;
  if (prevRestoration !== null) history.scrollRestoration = 'manual';

  const cleanups = [initViewport(), initHeader(), initMenu(), initFinale()];

  const cleanup = () => {
    for (const stop of cleanups) stop();
    if (prevRestoration !== null) history.scrollRestoration = prevRestoration;
    if (activeCleanup === cleanup) activeCleanup = null;
  };

  activeCleanup = cleanup;
  return cleanup;
}

export { closeSiteMenu } from './menu';
