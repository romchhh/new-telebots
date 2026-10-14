import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import type { Language } from '@/components/translations';
import {
  OG_BADGE_BY_LANG,
  OG_DEFAULT_DESCRIPTION_BY_LANG,
  OG_DEFAULT_TITLE_BY_LANG,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
} from '@/lib/ogImage';
import { asSiteLang } from '@/lib/site';

export const runtime = 'nodejs';

const fontsPromise = Promise.all([
  readFile(join(process.cwd(), 'assets/og/Montserrat-ExtraBold.ttf')),
  readFile(join(process.cwd(), 'assets/og/Montserrat-SemiBold.ttf')),
]);

const heroPromise = readFile(join(process.cwd(), 'public/other/og-hero.jpg'), 'base64').then(
  (data) => `data:image/jpeg;base64,${data}`
);

function clampText(value: string, max: number) {
  const text = value.replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.55 ? cut.slice(0, space) : cut).trim()}…`;
}

function titleFontSize(title: string) {
  if (title.length > 90) return 42;
  if (title.length > 70) return 48;
  if (title.length > 48) return 54;
  return 62;
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
    150
  );
  const badge = OG_BADGE_BY_LANG[lang];

  const [[fontBold, fontSemi], heroSrc] = await Promise.all([fontsPromise, heroPromise]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#0a0a0a',
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
            background:
              'linear-gradient(115deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.62) 48%, rgba(0,0,0,0.45) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.35) 100%)',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
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

            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                padding: '10px 18px',
                borderRadius: 999,
                border: '1px solid rgba(244,114,182,0.45)',
                backgroundColor: 'rgba(244,114,182,0.16)',
                color: '#fce7f3',
                fontSize: 22,
                fontFamily: 'Montserrat',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              {badge}
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
                fontSize: 28,
                lineHeight: 1.35,
                fontFamily: 'Montserrat',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.84)',
                maxWidth: 900,
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
