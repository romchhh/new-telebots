import { initViewport } from './viewport';
import { initHeader } from './header';
import { initMenu } from './menu';
import { initFinale } from './finale';
/** Client-side chrome behaviour from site/app (menu + sticky finale). UX+AI: UxAiScrollBoot. */
export function bootSiteChrome(): () => void {
  const cleanups = [initViewport(), initHeader(), initMenu(), initFinale()];
  return () => {
    for (const stop of cleanups) stop();
  };
}

export { closeSiteMenu } from './menu';
