import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import sharp from 'sharp';
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

function isAlreadyDarkPath(path: string) {
  return path.startsWith('/other/og-dark/');
}

async function loadBackgroundDataUrl(publicPath: string): Promise<string> {
  const resolved = resolveOgBackgroundPath(publicPath);
  const cached = backgroundCache.get(resolved);
  if (cached) return cached;

  const promise = (async () => {
    try {
      const absolute = join(process.cwd(), 'public', resolved.replace(/^\//, ''));
      const file = await readFile(absolute);

      // Готові og-dark файли вже затемнені; решту (кейси, блог) затемнюємо тут.
      if (isAlreadyDarkPath(resolved)) {
        return `data:image/jpeg;base64,${file.toString('base64')}`;
      }

      const darkened = await sharp(file)
        .rotate()
        .resize(OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, { fit: 'cover', position: 'centre' })
        .modulate({ brightness: 0.48 })
        .composite([
          {
            input: Buffer.from(
              `<svg width="${OG_IMAGE_WIDTH}" height="${OG_IMAGE_HEIGHT}">
                <defs>
                  <linearGradient id="b" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#000" stop-opacity="0.28"/>
                    <stop offset="45%" stop-color="#000" stop-opacity="0.45"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0.78"/>
                  </linearGradient>
                  <linearGradient id="l" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#000" stop-opacity="0.55"/>
                    <stop offset="55%" stop-color="#000" stop-opacity="0.15"/>
                    <stop offset="100%" stop-color="#000" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#b)"/>
                <rect width="100%" height="100%" fill="url(#l)"/>
              </svg>`
            ),
            top: 0,
            left: 0,
          },
        ])
        .jpeg({ quality: 86 })
        .toBuffer();

      return `data:image/jpeg;base64,${darkened.toString('base64')}`;
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
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
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
