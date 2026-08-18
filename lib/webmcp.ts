/** Декларативні анотації WebMCP для форм — AI-агенти бачать інструменти в HTML. */

export const WEBMCP_CONSULTATION = {
  toolname: 'submitConsultationRequest',
  tooldescription:
    'Submit a consultation request to TeleBots. Requires name and phone; project details are optional.',
  params: {
    name: 'Full name of the person requesting a consultation.',
    phone: 'Phone number with country code, for example +380XXXXXXXXX.',
    project: 'Optional short description of the website, chatbot, or automation project.',
  },
} as const;

export const WEBMCP_ORDER = {
  toolname: 'submitOrderRequest',
  tooldescription:
    'Submit an order or consultation request to TeleBots. Requires name and phone; a short message is optional.',
  params: {
    name: 'Full name of the person placing the request.',
    phone: 'Phone number with country code, for example +380XXXXXXXXX.',
    request: 'Optional message describing what to build or discuss.',
  },
} as const;

export const WEBMCP_OFFER = {
  toolname: 'submitOfferRequest',
  tooldescription:
    'Submit a request for the TeleBots $200 website offer (free consult + prototype). Requires name and phone.',
  params: {
    name: 'Full name of the person requesting a callback.',
    phone: 'Phone number with country code, for example +380XXXXXXXXX.',
  },
} as const;
