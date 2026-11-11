import { initViewport } from './viewport';
import { initHeader } from './header';
import { initMenu } from './menu';
import { initFinale } from './finale';

/** Client-side chrome behaviour from site/app (menu + sticky finale). UX+AI: UxAiScrollBoot. */
export function bootSiteChrome(): () => void {
  const prevRestoration =
    typeof history !== 'undefined' && 'scrollRestoration' in history
      ? history.scrollRestoration
      : null;
  // Avoid browser restoring mid-page scroll against our route resets / finale freeze.
  if (prevRestoration !== null) history.scrollRestoration = 'manual';

  const cleanups = [initViewport(), initHeader(), initMenu(), initFinale()];
  return () => {
    for (const stop of cleanups) stop();
    if (prevRestoration !== null) history.scrollRestoration = prevRestoration;
  };
}

export { closeSiteMenu } from './menu';
