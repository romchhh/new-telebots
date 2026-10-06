import { HONEYPOT_FIELD, type AntiSpamFields } from '@/lib/antiSpam';
import { formatLeadSource } from '@/lib/leadSource';
import { MAX_TELEGRAM_ATTACHMENT_BYTES } from '@/lib/telegramLead';

export interface TelegramFormData extends AntiSpamFields {
  name: string;
  phone: string;
  email?: string;
  request?: string;
  project?: string;
  service?: string;
  caseId?: string;
  /** Сторінка, UTM і рекламні кліки. Якщо порожньо — знімається з поточного URL. */
  source?: string;
}

function reportLeadConversion() {
  if (typeof window === 'undefined') return;
  const win = window as Window & {
    gtag_report_conversion?: (url?: string) => boolean;
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof win.gtag_report_conversion === 'function') {
    win.gtag_report_conversion();
    return;
  }

  if (typeof win.gtag === 'function') {
    win.gtag('event', 'conversion', {
      send_to: 'AW-16801058748/CPxTCNPDyqAcELyfr8s-',
    });
  }
}

function appendLeadFields(formData: FormData, data: TelegramFormData) {
  formData.append('name', data.name);
  formData.append('phone', data.phone);
  if (data.email) formData.append('email', data.email);
  if (data.request) formData.append('request', data.request);
  if (data.project) formData.append('project', data.project);
  if (data.service) formData.append('service', data.service);
  if (data.caseId) formData.append('caseId', data.caseId);
  if (data.source) formData.append('source', data.source);
  if (data.formStartedAt !== undefined) {
    formData.append('formStartedAt', String(data.formStartedAt));
  }
  const hp = data[HONEYPOT_FIELD];
  if (hp !== undefined) formData.append(HONEYPOT_FIELD, String(hp));
}

export async function sendToTelegram(
  data: TelegramFormData,
  attachment?: File | null
): Promise<boolean> {
  try {
    if (attachment && attachment.size > MAX_TELEGRAM_ATTACHMENT_BYTES) {
      console.error('Attachment exceeds size limit');
      return false;
    }

    const payload: TelegramFormData = {
      ...data,
      source: data.source?.trim() || formatLeadSource(),
    };

    let response: Response;

    if (attachment && attachment.size > 0) {
      const formData = new FormData();
      appendLeadFields(formData, payload);
      formData.append('attachment', attachment, attachment.name);
      response = await fetch('/api/telegram', {
        method: 'POST',
        body: formData,
      });
    } else {
      response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    }

    const result = await response.json();
    const success = result.success === true;
    const delivered = result.delivered !== false;

    if (success && delivered) {
      reportLeadConversion();
    }

    return success;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}
