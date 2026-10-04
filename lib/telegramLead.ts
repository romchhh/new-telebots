import type { NextRequest } from 'next/server';
import { HONEYPOT_FIELD } from '@/lib/antiSpam';

/** Telegram Bot API limit for uploads is 50MB; keep lower for safety */
export const MAX_TELEGRAM_ATTACHMENT_BYTES = 15 * 1024 * 1024;

export type ParsedLeadBody = {
  name: string;
  phone: string;
  email?: string;
  request?: string;
  project?: string;
  service?: string;
  caseId?: string;
  formStartedAt?: number;
  honeypot: string;
  attachment: File | null;
};

export async function parseLeadRequest(request: NextRequest): Promise<ParsedLeadBody> {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const getStr = (key: string) => {
      const v = formData.get(key);
      return typeof v === 'string' ? v : '';
    };
    const startedRaw = getStr('formStartedAt');
    const startedNum = startedRaw !== '' ? Number(startedRaw) : NaN;
    const attachmentEntry = formData.get('attachment');
    const attachment =
      attachmentEntry instanceof File && attachmentEntry.size > 0 ? attachmentEntry : null;

    return {
      name: getStr('name'),
      phone: getStr('phone'),
      email: getStr('email') || undefined,
      request: getStr('request') || undefined,
      project: getStr('project') || undefined,
      service: getStr('service') || undefined,
      caseId: getStr('caseId') || undefined,
      formStartedAt: Number.isFinite(startedNum) ? startedNum : undefined,
      honeypot: getStr(HONEYPOT_FIELD),
      attachment,
    };
  }

  const body = await request.json();
  const startedAt =
    typeof body.formStartedAt === 'number'
      ? body.formStartedAt
      : Number(body.formStartedAt);

  return {
    name: typeof body.name === 'string' ? body.name : '',
    phone: typeof body.phone === 'string' ? body.phone : '',
    email: typeof body.email === 'string' ? body.email : undefined,
    request: typeof body.request === 'string' ? body.request : undefined,
    project: typeof body.project === 'string' ? body.project : undefined,
    service: typeof body.service === 'string' ? body.service : undefined,
    caseId: typeof body.caseId === 'string' ? body.caseId : undefined,
    formStartedAt: Number.isFinite(startedAt) ? startedAt : undefined,
    honeypot: typeof body[HONEYPOT_FIELD] === 'string' ? body[HONEYPOT_FIELD] : '',
    attachment: null,
  };
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function buildLeadMessage(lead: Omit<ParsedLeadBody, 'attachment' | 'honeypot' | 'formStartedAt'>, fileName?: string): string {
  let message = '📋 <b>Нова заявка з сайту</b>\n\n';

  if (lead.name) {
    message += `👤 <b>Ім'я:</b> ${escapeHtml(lead.name)}\n`;
  }
  if (lead.phone) {
    message += `📞 <b>Телефон:</b> ${escapeHtml(lead.phone)}\n`;
  }
  if (lead.email) {
    message += `✉️ <b>Email:</b> ${escapeHtml(lead.email)}\n`;
  }
  if (lead.service) {
    message += `🛠 <b>Сервіс:</b> ${escapeHtml(lead.service)}\n`;
  }
  if (lead.caseId) {
    message += `📁 <b>Кейс:</b> ${escapeHtml(lead.caseId)}\n`;
  }
  if (lead.request) {
    message += `💬 <b>Повідомлення:</b>\n${escapeHtml(lead.request)}\n`;
  }
  if (lead.project) {
    message += `💼 <b>Проєкт:</b>\n${escapeHtml(lead.project)}\n`;
  }
  if (fileName) {
    message += `\n📎 <b>Файл:</b> ${escapeHtml(fileName)}`;
  }

  return message;
}

export async function telegramSendMessage(token: string, chatId: string, text: string) {
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    }),
  });
  const data = await response.json();
  return { ok: response.ok && data.ok === true, data };
}

export async function telegramSendAttachment(
  token: string,
  chatId: string,
  file: File,
  caption?: string
) {
  const isImage = file.type.startsWith('image/');
  const method = isImage ? 'sendPhoto' : 'sendDocument';
  const field = isImage ? 'photo' : 'document';

  const tgForm = new FormData();
  tgForm.append('chat_id', chatId);
  tgForm.append(field, file, file.name || 'attachment');
  if (caption) {
    tgForm.append('caption', caption.slice(0, 1024));
    tgForm.append('parse_mode', 'HTML');
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    body: tgForm,
  });
  const data = await response.json();
  return { ok: response.ok && data.ok === true, data };
}
