import type { NextRequest } from 'next/server';

/** Obscure honeypot name — avoid "company/url/website" so browsers don't autofill it */
export const HONEYPOT_FIELD = 'hp_field_xb7';

/** Soft floor only — real users often submit in 1–2s */
export const MIN_FORM_FILL_MS = 600;
export const MAX_FORM_AGE_MS = 48 * 60 * 60 * 1000;
export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
export const RATE_LIMIT_MAX = 8;

export type AntiSpamFields = {
  [HONEYPOT_FIELD]?: string;
  formStartedAt?: number;
};

export type LeadFormPayload = {
  name: string;
  phone: string;
  request?: string;
  project?: string;
} & AntiSpamFields;

type CheckInput = {
  honeypot?: string;
  formStartedAt?: number;
  name?: string;
  phone?: string;
  message?: string;
  ip: string;
  originOk: boolean;
};

export type AntiSpamCheckResult = { ok: true } | { ok: false; reason: string };

const ipHits = new Map<string, number[]>();

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

/**
 * Block only when Origin/Referer is present AND untrusted.
 * Missing headers are allowed (privacy tools / some mobile browsers).
 */
export function isAllowedFormOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin') || '';
  const referer = request.headers.get('referer') || '';
  if (!origin && !referer) return true;
  if (origin && isTrustedUrl(origin)) return true;
  if (referer && isTrustedUrl(referer)) return true;
  // Origin present but untrusted
  if (origin && !isTrustedUrl(origin)) return false;
  if (referer && !isTrustedUrl(referer)) return false;
  return true;
}

function isTrustedUrl(value: string): boolean {
  if (!value) return false;
  try {
    const { hostname } = new URL(value);
    return (
      hostname === 'telebots.site' ||
      hostname === 'www.telebots.site' ||
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.endsWith('.vercel.app')
    );
  } catch {
    return false;
  }
}

function allowIp(ip: string): boolean {
  const now = Date.now();
  const recent = (ipHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, recent);
    return false;
  }
  recent.push(now);
  ipHits.set(ip, recent);
  return true;
}

export function isPlausiblePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  // UA: 0XX… (10) or 380… (12); also allow intl 10–15
  if (digits.length < 10 || digits.length > 15) return false;
  if (/^(\d)\1+$/.test(digits)) return false;
  const blocked = new Set([
    '0123456789',
    '1234567890',
    '9876543210',
    '0987654321',
    '0000000000',
    '1111111111',
  ]);
  if (blocked.has(digits)) return false;
  if (/^0{5,}/.test(digits)) return false;
  return true;
}

export function isPlausibleName(name: string): boolean {
  const trimmed = name.trim();
  if (trimmed.length < 2 || trimmed.length > 80) return false;
  if (/https?:\/\//i.test(trimmed)) return false;
  return true;
}

/** Promo spam like “no anti-spam? DM @handle” */
export function looksLikeSpamPromo(text: string): boolean {
  const t = text.trim();
  if (!t) return false;
  const lower = t.toLowerCase();
  const hasHandle = /@[a-z0-9_]{4,}/i.test(t);
  const promoHints =
    /антиспам|anti[\s-]?spam|домовимось|звертайтесь\s+в\s+телеграм|contact\s+(us\s+)?(in\s+)?(telegram|tg)|buy\s+(backlinks?|followers?)|seo\s+(service|agency|cheap)/i.test(
      lower
    );
  if (hasHandle && promoHints) return true;
  if ((t.match(/https?:\/\//gi) || []).length >= 2) return true;
  return false;
}

export function checkAntiSpam(input: CheckInput): AntiSpamCheckResult {
  if (!input.originOk) return { ok: false, reason: 'origin' };

  if (input.honeypot && input.honeypot.trim() !== '') {
    return { ok: false, reason: 'honeypot' };
  }

  // Timing is soft: if missing/invalid, still allow (older clients / edge cases)
  if (typeof input.formStartedAt === 'number' && Number.isFinite(input.formStartedAt)) {
    const elapsed = Date.now() - input.formStartedAt;
    // Only block absurdly instant submits (< 600ms) — classic bots
    if (elapsed >= 0 && elapsed < MIN_FORM_FILL_MS) {
      return { ok: false, reason: 'timing' };
    }
    // Ignore absurdly old timestamps instead of blocking (clock skew / stale tab)
    if (elapsed > MAX_FORM_AGE_MS) {
      // allow through
    }
  }

  if (!isPlausibleName(input.name || '')) {
    return { ok: false, reason: 'name' };
  }

  if (!isPlausiblePhone(input.phone || '')) {
    return { ok: false, reason: 'phone' };
  }

  if (looksLikeSpamPromo(input.message || '')) {
    return { ok: false, reason: 'content' };
  }

  if (!allowIp(input.ip)) {
    return { ok: false, reason: 'rate' };
  }

  return { ok: true };
}

/** Read anti-spam fields from FormData (uncontrolled / mixed forms) */
export function antiSpamFromFormData(formData: FormData): AntiSpamFields {
  const startedRaw = formData.get('formStartedAt');
  const startedAt =
    typeof startedRaw === 'string' && startedRaw !== '' ? Number(startedRaw) : undefined;
  return {
    [HONEYPOT_FIELD]: String(formData.get(HONEYPOT_FIELD) || ''),
    formStartedAt: Number.isFinite(startedAt) ? startedAt : undefined,
  };
}
