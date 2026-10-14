import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import type { Language } from '@/components/translations';
import {
  OG_DEFAULT_DESCRIPTION_BY_LANG,
  OG_DEFAULT_TITLE_BY_LANG,
  OG_HOME_BACKGROUND,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  resolveOgBackgroundPath,
} from '@/lib/ogImage';
import { asSiteLang } from '@/lib/site';

export const runtime = 'nodejs';

const fontsPromise = Promise.all([
  readFile(join(process.cwd(), 'assets/og/Montserrat-ExtraBold.ttf')),
  readFile(join(process.cwd(), 'assets/og/Montserrat-SemiBold.ttf')),
]);

const backgroundCache = new Map<string, Promise<string>>();

function mimeForPath(path: string) {
  const ext = path.split('.').pop()?.toLowerCase();
  if (ext === 'png') return 'image/png';
  if (ext === 'webp') return 'image/webp';
  return 'image/jpeg';
}

async function loadBackgroundDataUrl(publicPath: string): Promise<string> {
  const resolved = resolveOgBackgroundPath(publicPath);
  const cached = backgroundCache.get(resolved);
  if (cached) return cached;

  const promise = (async () => {
    try {
      const absolute = join(process.cwd(), 'public', resolved.replace(/^\//, ''));
      const data = await readFile(absolute, 'base64');
      return `data:${mimeForPath(resolved)};base64,${data}`;
    } catch {
      if (resolved === OG_HOME_BACKGROUND) throw new Error('OG home background missing');
      return loadBackgroundDataUrl(OG_HOME_BACKGROUND);
    }
  })();

  backgroundCache.set(resolved, promise);
  return promise;
}

function clampText(value: string, max: number) {
  const text = value.replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.55 ? cut.slice(0, space) : cut).trim()}…`;
}

function titleFontSize(title: string) {
  if (title.length > 110) return 36;
  if (title.length > 90) return 40;
  if (title.length > 70) return 46;
  if (title.length > 48) return 52;
  return 60;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const lang = asSiteLang(searchParams.get('lang') || undefined) as Language;
  const title = clampText(
    searchParams.get('title') || OG_DEFAULT_TITLE_BY_LANG[lang],
    140
  );
  const description = clampText(
    searchParams.get('description') || OG_DEFAULT_DESCRIPTION_BY_LANG[lang],
    160
  );
  const backgroundPath = resolveOgBackgroundPath(searchParams.get('bg'));

  const [[fontBold, fontSemi], heroSrc] = await Promise.all([
    fontsPromise,
    loadBackgroundDataUrl(backgroundPath),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000000',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroSrc}
          alt=""
          width={OG_IMAGE_WIDTH}
          height={OG_IMAGE_HEIGHT}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundColor: 'rgba(0,0,0,0.42)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.28) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '52px 64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: '#f472b6',
              }}
            />
            <div
              style={{
                display: 'flex',
                fontSize: 36,
                fontFamily: 'Montserrat',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.04em',
              }}
            >
              telebots.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 980 }}>
            <div
              style={{
                display: 'flex',
                width: 72,
                height: 6,
                borderRadius: 999,
                backgroundColor: '#f472b6',
              }}
            />
            <div
              style={{
                display: 'flex',
                fontSize: titleFontSize(title),
                lineHeight: 1.08,
                fontFamily: 'Montserrat',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 26,
                lineHeight: 1.35,
                fontFamily: 'Montserrat',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.88)',
                maxWidth: 920,
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      fonts: [
        {
          name: 'Montserrat',
          data: fontBold,
          style: 'normal',
          weight: 800,
        },
        {
          name: 'Montserrat',
          data: fontSemi,
          style: 'normal',
          weight: 600,
        },
      ],
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
      },
    }
  );
}
