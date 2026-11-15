import { NextResponse } from 'next/server';
import { AGENT_LINK_HEADER } from '@/lib/agentDiscovery';
import { LLMS_TXT } from '@/lib/publishedTexts';

export async function GET() {
  return new NextResponse(LLMS_TXT, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      Vary: 'Accept',
      Link: AGENT_LINK_HEADER,
    },
  });
}
