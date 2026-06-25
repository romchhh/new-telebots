import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

/** Віддає текстовий файл з public/ з коректним Content-Type. */
export async function servePublicText(publicPath: string): Promise<NextResponse> {
  try {
    const content = await readFile(join(process.cwd(), 'public', publicPath), 'utf-8');
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch {
    return new NextResponse('Not Found', { status: 404 });
  }
}
