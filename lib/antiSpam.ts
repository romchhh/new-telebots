import type { NextRequest } from 'next/server';

/** Honeypot field name — bots fill it, humans never see it */
export const HONEYPOT_FIELD = 'company_url';

export const MIN_FORM_FILL_MS = 2800;
export const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
export const RATE_LIMIT_MAX = 4;

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

export function isAllowedFormOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin') || '';
  const referer = request.headers.get('referer') || '';
  return isTrustedUrl(origin) || isTrustedUrl(referer);
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
  if ((trimmed.match(/@/g) || []).length > 0) return false;
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

  if (typeof input.formStartedAt !== 'number' || !Number.isFinite(input.formStartedAt)) {
    return { ok: false, reason: 'timing_missing' };
  }

  const elapsed = Date.now() - input.formStartedAt;
  if (elapsed < MIN_FORM_FILL_MS || elapsed > MAX_FORM_AGE_MS) {
    return { ok: false, reason: 'timing' };
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
