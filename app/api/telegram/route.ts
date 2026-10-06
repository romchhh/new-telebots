import { after, NextRequest, NextResponse } from 'next/server';
import { checkAntiSpam, getClientIp, isAllowedFormOrigin } from '@/lib/antiSpam';
import { appendLeadToSheet } from '@/lib/googleSheetsLead';
import {
  MAX_TELEGRAM_ATTACHMENT_BYTES,
  buildLeadMessage,
  parseLeadRequest,
  telegramSendAttachment,
  telegramSendMessage,
} from '@/lib/telegramLead';

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
    const parsed = await parseLeadRequest(request);
    const {
      name,
      phone,
      email,
      request: requestText,
      service,
      caseId,
      project,
      source,
      formStartedAt,
      honeypot,
      attachment,
    } = parsed;

    if (attachment && attachment.size > MAX_TELEGRAM_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { success: false, error: 'attachment_too_large' },
        { status: 400 }
      );
    }

    const spamCheck = checkAntiSpam({
      honeypot,
      formStartedAt,
      name,
      phone,
      message: [requestText, project].filter(Boolean).join('\n'),
      ip: getClientIp(request),
      originOk: isAllowedFormOrigin(request),
    });

    if (!spamCheck.ok) {
      console.warn('Lead blocked by anti-spam:', spamCheck.reason, {
        ip: getClientIp(request),
        phone: phone.slice(0, 6),
      });

      if (spamCheck.reason === 'phone' || spamCheck.reason === 'name') {
        return NextResponse.json(
          { success: false, error: 'validation', reason: spamCheck.reason },
          { status: 400 }
        );
      }

      return NextResponse.json({ success: true, delivered: false });
    }

    const lead = {
      name,
      phone,
      email,
      request: requestText,
      service,
      caseId,
      project,
      source,
    };
    const message = buildLeadMessage(lead, attachment?.name);
    const fileName = attachment?.name;

    after(() => appendLeadToSheet(lead, fileName));

    const msgResult = await telegramSendMessage(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, message);

    if (!msgResult.ok) {
      console.error('Telegram API error (sendMessage):', msgResult.data);
      return NextResponse.json(
        { success: false, error: 'Failed to send message' },
        { status: 500 }
      );
    }

    if (attachment) {
      const caption = `📎 Файл до заявки від ${name || 'клієнта'}`.slice(0, 1024);
      const fileResult = await telegramSendAttachment(
        TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID,
        attachment,
        caption
      );

      if (!fileResult.ok) {
        console.error('Telegram API error (attachment):', fileResult.data);
        return NextResponse.json(
          { success: false, error: 'Failed to send attachment' },
          { status: 500 }
        );
      }
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
