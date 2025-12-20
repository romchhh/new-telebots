import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '7879990803:AAFUsmy_hGfhhKNCk_ipRfDHudbFOA5MtuA';
const TELEGRAM_CHAT_ID = '7119952932';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, request: requestText, service, caseId, project } = body;

    // Формуємо повідомлення
    let message = '📋 <b>Нова заявка з сайту</b>\n\n';
    
    if (name) {
      message += `👤 <b>Ім\'я:</b> ${escapeHtml(name)}\n`;
    }
    
    if (phone) {
      message += `📞 <b>Телефон:</b> ${escapeHtml(phone)}\n`;
    }
    
    if (service) {
      message += `🛠 <b>Сервіс:</b> ${escapeHtml(service)}\n`;
    }
    
    if (caseId) {
      message += `📁 <b>Кейс:</b> ${escapeHtml(caseId)}\n`;
    }
    
    if (requestText) {
      message += `💬 <b>Повідомлення:</b>\n${escapeHtml(requestText)}\n`;
    }
    
    if (project) {
      message += `💼 <b>Проєкт:</b>\n${escapeHtml(project)}\n`;
    }

    // Відправляємо повідомлення через Telegram Bot API
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

    return NextResponse.json({ success: true });
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

