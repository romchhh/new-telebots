/** Звідки прийшла заявка: сторінка, UTM і клік з реклами. Тримаємо в сесії, щоб не загубити після скролу. */

const STORAGE_KEY = 'tb_lead_source';

const TRACK_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'yclid',
] as const;

type TrackKey = (typeof TRACK_KEYS)[number];

type StoredLeadSource = {
  path: string;
  referrer: string;
  params: Partial<Record<TrackKey, string>>;
};

function readStored(): StoredLeadSource | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredLeadSource;
    if (!parsed || typeof parsed.path !== 'string') return null;
    return parsed;
  } catch {
    return null;
  }
}

function clip(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, 180);
}

/** Викликати при відкритті лендингу, щоб зберегти мітки з URL. */
export function captureLeadSource() {
  if (typeof window === 'undefined') return;
  const current = new URLSearchParams(window.location.search);
  const incoming: StoredLeadSource['params'] = {};
  let hasMarks = false;
  for (const key of TRACK_KEYS) {
    const value = current.get(key);
    if (!value?.trim()) continue;
    incoming[key] = clip(value);
    hasMarks = true;
  }

  const stored = readStored();
  const next: StoredLeadSource = hasMarks
    ? {
        path: window.location.pathname,
        referrer: clip(document.referrer || stored?.referrer || ''),
        params: { ...stored?.params, ...incoming },
      }
    : stored ?? {
        path: window.location.pathname,
        referrer: clip(document.referrer || ''),
        params: {},
      };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* приватний режим */
  }
}

/** Рядок для повідомлення в Telegram. */
export function formatLeadSource(): string {
  if (typeof window === 'undefined') return '';
  captureLeadSource();
  const stored = readStored();
  const path = stored?.path || window.location.pathname;
  const lines = [`сторінка: ${path}`];
  for (const key of TRACK_KEYS) {
    const value = stored?.params[key];
    if (value) lines.push(`${key}: ${value}`);
  }
  if (stored?.referrer) lines.push(`referrer: ${stored.referrer}`);
  return lines.join('\n');
}
