import { NextResponse } from 'next/server';
import { LLMS_TXT } from '@/lib/publishedTexts';
import { siteUrl } from '@/lib/site';

/** RFC 8288 Link values for machine-readable site discovery (existing resources only). */
export const AGENT_LINK_HEADER = [
  `<${siteUrl}/llms.txt>; rel="alternate"; type="text/markdown"`,
  `<${siteUrl}/ai.txt>; rel="describedby"`,
].join(', ');

export function isLocaleHomePath(pathname: string): boolean {
  return /^\/(uk|en|pl|ru)\/?$/.test(pathname);
}

/** True when the client prefers text/markdown over text/html (content negotiation). */
export function prefersMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  let mdQ = -1;
  let htmlQ = -1;
  for (const part of accept.split(',')) {
    const [rawType, ...params] = part.trim().split(';').map((s) => s.trim());
    const type = rawType.toLowerCase();
    const qParam = params.find((p) => p.toLowerCase().startsWith('q='));
    const q = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
    if (Number.isNaN(q)) continue;
    if (type === 'text/markdown') mdQ = q;
    if (type === 'text/html') htmlQ = q;
  }
  if (mdQ < 0) return false;
  if (htmlQ < 0) return true;
  return mdQ >= htmlQ;
}

/** Homepage markdown negotiation — Edge-safe (no fs / no rewrite conflict). */
export function agentMarkdownResponse(): NextResponse {
  return new NextResponse(LLMS_TXT, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
      Link: AGENT_LINK_HEADER,
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

export function withAgentLinkHeaders(response: NextResponse): NextResponse {
  response.headers.set('Link', AGENT_LINK_HEADER);
  const vary = response.headers.get('Vary');
  if (!vary) response.headers.set('Vary', 'Accept');
  else if (!/\bAccept\b/i.test(vary)) response.headers.set('Vary', `${vary}, Accept`);
  return response;
}
