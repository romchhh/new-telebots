import { NextRequest, NextResponse } from 'next/server';
import {
  HONEYPOT_FIELD,
  checkAntiSpam,
  getClientIp,
  isAllowedFormOrigin,
} from '@/lib/antiSpam';

export async function POST(request: NextRequest) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram: TELEGRAM_BOT_TOKEN або TELEGRAM_CHAT_ID не задані в .env');
    return NextResponse.json(
      { success: false, error: 'Service not configured' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const {
      name,
      phone,
      request: requestText,
      service,
      caseId,
      project,
      formStartedAt,
      [HONEYPOT_FIELD]: honeypot,
    } = body;

    const spamCheck = checkAntiSpam({
      honeypot: typeof honeypot === 'string' ? honeypot : '',
      formStartedAt: typeof formStartedAt === 'number' ? formStartedAt : Number(formStartedAt),
      name: typeof name === 'string' ? name : '',
      phone: typeof phone === 'string' ? phone : '',
      message: [requestText, project].filter((v) => typeof v === 'string').join('\n'),
      ip: getClientIp(request),
      originOk: isAllowedFormOrigin(request),
    });

    if (!spamCheck.ok) {
      console.warn('Lead blocked by anti-spam:', spamCheck.reason, {
        ip: getClientIp(request),
        phone: typeof phone === 'string' ? phone.slice(0, 6) : undefined,
      });

      // Soft validation — show error so a real user can fix the phone/name
      if (spamCheck.reason === 'phone' || spamCheck.reason === 'name') {
        return NextResponse.json(
          { success: false, error: 'validation', reason: spamCheck.reason },
          { status: 400 }
        );
      }

      // Bots / abuse — pretend success so they stop retrying
      return NextResponse.json({ success: true, delivered: false });
    }

    let message = '📋 <b>Нова заявка з сайту</b>\n\n';

    if (name) {
      message += `👤 <b>Ім\'я:</b> ${escapeHtml(String(name))}\n`;
    }

    if (phone) {
      message += `📞 <b>Телефон:</b> ${escapeHtml(String(phone))}\n`;
    }

    if (service) {
      message += `🛠 <b>Сервіс:</b> ${escapeHtml(String(service))}\n`;
    }

    if (caseId) {
      message += `📁 <b>Кейс:</b> ${escapeHtml(String(caseId))}\n`;
    }

    if (requestText) {
      message += `💬 <b>Повідомлення:</b>\n${escapeHtml(String(requestText))}\n`;
    }

    if (project) {
      message += `💼 <b>Проєкт:</b>\n${escapeHtml(String(project))}\n`;
    }

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error('Telegram API error:', data);
      return NextResponse.json(
        { success: false, error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, delivered: true });
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
