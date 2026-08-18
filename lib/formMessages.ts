import type { Language } from '@/components/translations';

export const SUBMIT_ERROR: Record<Language, string> = {
  uk: "Помилка відправки. Спробуйте ще раз або зв'яжіться з нами безпосередньо.",
  en: 'Error sending. Please try again or contact us directly.',
  pl: 'Błąd wysyłki. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.',
  ru: 'Ошибка отправки. Попробуйте ещё раз или свяжитесь с нами напрямую.',
};

export const SUBMITTING: Record<Language, string> = {
  uk: 'Надсилаємо…',
  en: 'Sending…',
  pl: 'Wysyłamy…',
  ru: 'Отправляем…',
};

export const GOT_IT: Record<Language, string> = {
  uk: 'Зрозуміло',
  en: 'Got it',
  pl: 'Rozumiem',
  ru: 'Понятно',
};
