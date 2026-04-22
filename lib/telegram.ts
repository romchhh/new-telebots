export interface TelegramFormData {
  name: string;
  phone: string;
  request?: string;
  project?: string;
  service?: string;
  caseId?: string;
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
    const success = result.success === true;

    if (success) {
      reportLeadConversion();
    }

    return success;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

