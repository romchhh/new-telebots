export interface TelegramFormData {
  name: string;
  phone: string;
  request?: string;
  project?: string;
  service?: string;
  caseId?: string;
}

export async function sendToTelegram(data: TelegramFormData): Promise<boolean> {
  try {
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

