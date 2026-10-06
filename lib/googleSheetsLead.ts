import { createSign } from 'crypto';
import type { ParsedLeadBody } from '@/lib/telegramLead';

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';

const HEADERS = [
  'Дата',
  "Ім'я",
  'Телефон',
  'Email',
  'Сервіс',
  'Повідомлення',
  'Проєкт',
  'Кейс',
  'Звідки',
  'Файл',
] as const;

type ServiceAccount = {
  client_email: string;
  private_key: string;
};

type TokenCache = { token: string; expiresAt: number };
type SheetRef = { sheetId: number; title: string };

let tokenCache: TokenCache | null = null;
let sheetCache: SheetRef | null = null;
let layoutReady = false;

const COLUMN_WIDTHS = [168, 160, 168, 200, 240, 320, 240, 140, 300, 140];

function loadServiceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim();
  if (!raw || !spreadsheetId) return null;

  const jsonText = raw.startsWith('{') ? raw : Buffer.from(raw, 'base64').toString('utf8');
  const parsed = JSON.parse(jsonText) as Partial<ServiceAccount>;
  if (!parsed.client_email || !parsed.private_key) return null;
  return { client_email: parsed.client_email, private_key: parsed.private_key };
}

function spreadsheetId() {
  return process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim() || '';
}

function signJwt(account: ServiceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(
    JSON.stringify({
      iss: account.client_email,
      scope: SHEETS_SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  ).toString('base64url');
  const unsigned = `${header}.${payload}`;
  const signer = createSign('RSA-SHA256');
  signer.update(unsigned);
  signer.end();
  return `${unsigned}.${signer.sign(account.private_key).toString('base64url')}`;
}

async function accessToken(account: ServiceAccount) {
  const now = Date.now();
  if (tokenCache && tokenCache.expiresAt > now + 60_000) return tokenCache.token;

  const assertion = signJwt(account);
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });
  const data = (await response.json()) as { access_token?: string; expires_in?: number; error?: string };
  if (!response.ok || !data.access_token) {
    throw new Error(data.error || `Google token ${response.status}`);
  }
  tokenCache = {
    token: data.access_token,
    expiresAt: now + (data.expires_in ?? 3600) * 1000,
  };
  return data.access_token;
}

function quoteSheet(title: string) {
  return `'${title.replace(/'/g, "''")}'`;
}

async function sheetsFetch(token: string, path: string, init?: RequestInit) {
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      typeof data === 'object' && data && 'error' in data
        ? JSON.stringify((data as { error: unknown }).error)
        : `Sheets ${response.status}`;
    throw new Error(message);
  }
  return data as Record<string, unknown>;
}

async function firstSheet(token: string): Promise<SheetRef> {
  if (sheetCache) return sheetCache;
  const data = await sheetsFetch(token, '?fields=sheets.properties,sheets.bandedRanges');
  const sheets = data.sheets as Array<{
    properties?: { sheetId?: number; title?: string };
    bandedRanges?: unknown[];
  }> | undefined;
  const first = sheets?.find((sheet) => sheet.properties?.sheetId === 0) ?? sheets?.[0];
  const sheetId = first?.properties?.sheetId;
  const title = first?.properties?.title;
  if (sheetId === undefined || !title) throw new Error('Google Sheets: не знайдено аркуш');
  sheetCache = { sheetId, title };
  if (first?.bandedRanges?.length) layoutReady = true;
  return sheetCache;
}

function kyivStamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Kyiv',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const pick = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? '';
  return `${pick('day')}.${pick('month')}.${pick('year')} ${pick('hour')}:${pick('minute')}`;
}

/** Серійник Google Таблиць (46301,69097) → київський час, який у нього закладений. */
function displayFromSerial(raw: string | number) {
  const serial = Number(String(raw).trim().replace(',', '.'));
  if (!Number.isFinite(serial) || serial < 20_000 || serial > 80_000) return null;
  const ms = Date.UTC(1899, 11, 30) + Math.round(serial * 86_400_000);
  const date = new Date(ms);
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${pad(date.getUTCDate())}.${pad(date.getUTCMonth() + 1)}.${date.getUTCFullYear()} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;
}

async function repairSerialDates(token: string, sheet: SheetRef) {
  const range = `${quoteSheet(sheet.title)}!A2:A`;
  const data = (await sheetsFetch(
    token,
    `/values/${encodeURIComponent(range)}?valueRenderOption=UNFORMATTED_VALUE`
  )) as { values?: Array<Array<string | number>> };
  const rows = data.values ?? [];
  const fixed: Array<{ row: number; value: string }> = [];
  rows.forEach((row, index) => {
    const value = row?.[0];
    if (value === undefined || value === '') return;
    const next = displayFromSerial(value);
    if (!next || next === String(value)) return;
    fixed.push({ row: index + 2, value: next });
  });
  if (fixed.length === 0) return;

  await sheetsFetch(token, '/values:batchUpdate', {
    method: 'POST',
    body: JSON.stringify({
      valueInputOption: 'RAW',
      data: fixed.map((item) => ({
        range: `${quoteSheet(sheet.title)}!A${item.row}`,
        values: [[item.value]],
      })),
    }),
  });
}

async function styleSheet(token: string, sheet: SheetRef) {
  if (layoutReady) return;
  const pink = { red: 244 / 255, green: 114 / 255, blue: 182 / 255 };
  const ink = { red: 0.07, green: 0.07, blue: 0.07 };
  const requests: Record<string, unknown>[] = [
    {
      updateSheetProperties: {
        properties: { sheetId: sheet.sheetId, gridProperties: { frozenRowCount: 1 } },
        fields: 'gridProperties.frozenRowCount',
      },
    },
    {
      repeatCell: {
        range: {
          sheetId: sheet.sheetId,
          startRowIndex: 0,
          endRowIndex: 1,
          startColumnIndex: 0,
          endColumnIndex: HEADERS.length,
        },
        cell: {
          userEnteredFormat: {
            backgroundColor: ink,
            horizontalAlignment: 'LEFT',
            verticalAlignment: 'MIDDLE',
            wrapStrategy: 'CLIP',
            textFormat: {
              bold: true,
              fontFamily: 'Arial',
              fontSize: 11,
              foregroundColor: { red: 1, green: 1, blue: 1 },
            },
            borders: { bottom: { style: 'SOLID_MEDIUM', color: pink } },
          },
        },
        fields:
          'userEnteredFormat(backgroundColor,horizontalAlignment,verticalAlignment,wrapStrategy,textFormat,borders)',
      },
    },
    {
      repeatCell: {
        range: {
          sheetId: sheet.sheetId,
          startRowIndex: 1,
          startColumnIndex: 0,
          endColumnIndex: HEADERS.length,
        },
        cell: {
          userEnteredFormat: {
            verticalAlignment: 'TOP',
            wrapStrategy: 'WRAP',
            textFormat: { fontFamily: 'Arial', fontSize: 10, foregroundColor: ink },
          },
        },
        fields: 'userEnteredFormat(verticalAlignment,wrapStrategy,textFormat)',
      },
    },
    {
      setBasicFilter: {
        filter: {
          range: {
            sheetId: sheet.sheetId,
            startRowIndex: 0,
            startColumnIndex: 0,
            endColumnIndex: HEADERS.length,
          },
        },
      },
    },
    {
      addBanding: {
        bandedRange: {
          range: {
            sheetId: sheet.sheetId,
            startRowIndex: 0,
            startColumnIndex: 0,
            endColumnIndex: HEADERS.length,
          },
          rowProperties: {
            headerColor: ink,
            firstBandColor: { red: 1, green: 1, blue: 1 },
            secondBandColor: { red: 0.98, green: 0.945, blue: 0.957 },
          },
        },
      },
    },
    ...COLUMN_WIDTHS.map((pixelSize, index) => ({
      updateDimensionProperties: {
        range: { sheetId: sheet.sheetId, dimension: 'COLUMNS', startIndex: index, endIndex: index + 1 },
        properties: { pixelSize },
        fields: 'pixelSize',
      },
    })),
    {
      updateDimensionProperties: {
        range: { sheetId: sheet.sheetId, dimension: 'ROWS', startIndex: 0, endIndex: 1 },
        properties: { pixelSize: 40 },
        fields: 'pixelSize',
      },
    },
  ];

  try {
    await sheetsFetch(token, ':batchUpdate', {
      method: 'POST',
      body: JSON.stringify({ requests }),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : '';
    if (!message.includes('banded range')) throw error;
  }
  layoutReady = true;
}

function leadRow(lead: Omit<ParsedLeadBody, 'honeypot' | 'formStartedAt'>, fileName?: string) {
  const date = kyivStamp();

  return [
    date,
    lead.name || '',
    lead.phone || '',
    lead.email || '',
    lead.service || '',
    lead.request || '',
    lead.project || '',
    lead.caseId || '',
    lead.source || '',
    fileName || '',
  ];
}

/** Дописує заявку в Google Таблицю. Не кидає помилку назовні: форма лишається успішною, якщо Telegram дійшов. */
export async function appendLeadToSheet(
  lead: Omit<ParsedLeadBody, 'honeypot' | 'formStartedAt'>,
  fileName?: string
): Promise<{ ok: boolean; skipped?: boolean; error?: string }> {
  const account = loadServiceAccount();
  if (!account) {
    console.error('Google Sheets: GOOGLE_SERVICE_ACCOUNT_JSON або GOOGLE_SHEETS_SPREADSHEET_ID не задані');
    return { ok: false, skipped: true, error: 'not_configured' };
  }

  try {
    const token = await accessToken(account);
    const sheet = await firstSheet(token);
    const range = `${quoteSheet(sheet.title)}!A:J`;
    const head = (await sheetsFetch(
      token,
      `/values/${encodeURIComponent(`${quoteSheet(sheet.title)}!A1:A1`)}`
    )) as { values?: string[][] };

    if (!head.values?.[0]?.[0]) {
      await sheetsFetch(token, `/values/${encodeURIComponent(`${quoteSheet(sheet.title)}!A1:J1`)}?valueInputOption=RAW`, {
        method: 'PUT',
        body: JSON.stringify({ values: [HEADERS] }),
      });
    }

    await repairSerialDates(token, sheet);
    await styleSheet(token, sheet);

    await sheetsFetch(
      token,
      `/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        body: JSON.stringify({ values: [leadRow(lead, fileName)] }),
      }
    );
    return { ok: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'sheets_error';
    console.error('Google Sheets append failed:', message);
    return { ok: false, error: message };
  }
}
