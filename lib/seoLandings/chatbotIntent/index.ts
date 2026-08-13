import { UK_CHATBOT_INTENT } from './uk';
import { EN_CHATBOT_INTENT } from './en';
import { PL_CHATBOT_INTENT } from './pl';
import { RU_CHATBOT_INTENT } from './ru';
import type { Language } from '@/components/translations';
import type { SeoLandingCopy } from '../types';
import type { ChatbotIntentSlug } from './build';

export const CHATBOT_INTENT_SLUGS = [
  'chatbots-buy',
  'chatbot-development-price',
  'telegram-bot-order-price',
] as const satisfies readonly ChatbotIntentSlug[];

export const CHATBOT_INTENT_BY_LANG: Record<Language, Record<ChatbotIntentSlug, SeoLandingCopy>> = {
  uk: UK_CHATBOT_INTENT,
  en: EN_CHATBOT_INTENT,
  pl: PL_CHATBOT_INTENT,
  ru: RU_CHATBOT_INTENT,
};
