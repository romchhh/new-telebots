import type { ServiceLongFormBundle } from './types';
import type { ServiceSeoSlug } from './types';

const priceFaq =
  'Exact pricing is confirmed after a free consultation and agreed scope; tier guidance is in the pricing table below on this page.';

export const EN_SERVICE_LONGFORM: Record<ServiceSeoSlug, ServiceLongFormBundle> = {
  chatbots: {
    audienceSection: {
      title: 'Who this is',
      titleAccent: 'for:',
      items: [
        'E-commerce brands taking orders and payments in Telegram',
        'Service businesses (salons, clinics, studios) needing automated booking',
        'Education projects: access, reminders, assignments',
        'Real estate agencies: shortlists and meeting requests',
        'HoReCa: menus, table booking, delivery flows',
        'B2B teams qualifying leads and booking demos',
        'Media and communities with gated access or subscriptions',
      ],
    },
    aboutParagraphs: [
      'Messengers are where customers expect fast answers without extra steps. A Telegram bot is more than an auto-reply: it is a sales and service channel that runs 24/7 and scales with traffic.',
      'TeleBots ships chatbots end-to-end for teams of any size — from lead capture to catalogs, payments, CRM, and AI-assisted replies. With 200+ shipped projects, we know which architectures survive real production load.',
      'The process stays transparent: consultation, spec, build, documentation, and team onboarding. After launch we stay available — support and iteration are scoped separately.',
      'We work with Python (aiogram, Pyrogram, Telethon), Node.js, and integrations such as Mono, LiqPay, WayForPay, Stripe, AmoCRM, HubSpot, and Google Sheets. A first scenario prototype can land quickly after kickoff; full builds typically take 2–4 weeks depending on scope.',
    ],
    whatWeDoTitle: 'What we build',
    whatWeDoItems: [
      {
        title: 'Sales bots in Telegram',
        body: 'Catalogs or services in chat, cart, checkout, and online payments via Mono, LiqPay, or WayForPay. Customers complete the journey inside the messenger while orders sync to CRM or Sheets automatically.',
      },
      {
        title: 'Booking bots',
        body: 'Slot discovery, reservations, and reminders (e.g., one day and one hour before). Ideal for salons, therapists, doctors, tutors, and trainers.',
      },
      {
        title: 'Customer support bots',
        body: 'FAQ, order status, delivery rules, and pricing 24/7. Complex threads can hand off to a human agent while reducing repetitive workload.',
      },
      {
        title: 'AI assistants with GPT',
        body: 'OpenAI GPT for nuanced answers, triage, and recommendations grounded in your knowledge base — FAQs, catalogs, and policies — with guardrails for brand tone.',
      },
      {
        title: 'Broadcasts and notifications',
        body: 'Segmented outreach, promos, reminders, and order updates triggered automatically without manual lists.',
      },
    ],
    techTitle: 'Technology & integrations',
    techLines: [
      'Platforms: Telegram, WhatsApp Business API, Viber, Facebook Messenger',
      'Languages & frameworks: Python (aiogram 3, Pyrogram, Telethon), Node.js',
      'Payments: Mono (Monobank), LiqPay, WayForPay, Stripe',
      'CRM: AmoCRM, HubSpot, Pipedrive, Google Sheets',
      'Databases: PostgreSQL, MongoDB, SQLite',
      'AI: OpenAI GPT-4o, function calling, RAG when required',
      'Hosting: VPS/cloud (DigitalOcean, Hetzner, and similar) sized for your load',
    ],
    faqTitle: 'FAQ',
    faq: [
      { question: 'How much does a Telegram bot cost?', answer: priceFaq },
      {
        question: 'How long does development take?',
        answer:
          'Simple bots: about 1–2 weeks. Flows with payments and integrations: 2–4 weeks. We can demo a first scenario quickly after kickoff once scope is agreed.',
      },
      {
        question: 'Is a Telegram bot suitable for small businesses?',
        answer:
          'Yes. Even a modest volume of daily conversations benefits from faster replies, fewer missed leads, and less manual coordination.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Yes. We agree support windows, fixes, and feature iterations separately and hand over access with a short enablement for your team.',
      },
      {
        question: 'Do you build bots for WhatsApp and Viber?',
        answer:
          'Yes — Telegram, WhatsApp Business API, Viber, and Facebook Messenger, including multi-channel setups when needed.',
      },
      {
        question: 'Can a bot connect to an existing website?',
        answer:
          'Yes. Buttons, forms, and UTMs can route leads into the bot and onward to CRM or your database automatically.',
      },
    ],
  },
  websites: {
    audienceSection: {
      title: 'Website development fits',
      titleAccent: 'if you:',
      items: [
        'Need a fast, modern site that looks right on every device',
        'Want lead capture and payments without a fragile plugin stack',
        'Plan an online store or catalog with a practical admin',
        'Care about SEO foundations and clear analytics',
        'Need CRM, messenger, email, or ad platform integrations',
        'Want to avoid rigid builders with identical templates',
        'Prefer an end-to-end partner from structure to launch and care',
      ],
    },
    aboutParagraphs: [
      'Your site is often the first impression online — it should move visitors toward a conversation or purchase. TeleBots builds conversion-minded sites that stay fast, accessible, and SEO-aware.',
      'We ship on Next.js, React, and TypeScript for strong PageSpeed scores, predictable architecture, and maintainable content tooling. Design and engineering stay in one team so nothing gets lost in handoffs.',
      'Deliveries include analytics, forms, CRM and messenger hooks, and technical SEO from day one. Timelines are agreed upfront; after launch we help with training and ongoing support.',
      'Budget depends on pages, integrations, and design depth — we provide a clear estimate after a short brief; tier guidance lives in the table below.',
    ],
    whatWeDoTitle: 'Site types we deliver',
    whatWeDoItems: [
      {
        title: 'Landing page',
        body: 'Single high-conversion page: offer, proof, cases, testimonials, CTA. Great for launches, promos, or paid traffic. Responsive by default with forms or deep links to chat.',
      },
      {
        title: 'Business card website',
        body: '3–6 pages for a company or expert: services, about, portfolio, contacts — enough structure to build trust quickly.',
      },
      {
        title: 'Corporate website',
        body: 'Richer IA: multiple service lines, team, cases, blog, FAQ. CRM, analytics, and chat integrations with room to grow without rebuilding everything.',
      },
      {
        title: 'E-commerce',
        body: 'Catalog with filters, PDP, cart, checkout, payments (LiqPay, WayForPay, Stripe, etc.), customer area, admin. Optional sync with inventory or external feeds.',
      },
      {
        title: 'Professional practice site',
        body: 'Personal brand site with booking (Google Calendar, Calendly, or custom), services, testimonials, and privacy-conscious copy.',
      },
    ],
    techTitle: 'Technical stack',
    techLines: [
      'Frontend: Next.js 14+, React, TypeScript',
      'Styling: Tailwind CSS, CSS Modules, or styled-components depending on the project',
      'CMS: Sanity, Strapi, Contentful, or a custom admin when needed',
      'Hosting: Vercel, DigitalOcean, Hetzner — matched to data residency and traffic',
      'Server: Ubuntu, Nginx, PM2, SSL (Let’s Encrypt)',
      'Databases: PostgreSQL, MongoDB',
    ],
    faqTitle: 'FAQ',
    faq: [
      { question: 'How much does a turnkey website cost?', answer: priceFaq },
      {
        question: 'How long does a project take?',
        answer:
          'Landing pages: from a few days. Brochure sites: about 1–2 weeks. Corporate builds: 2–4 weeks. Stores depend on catalog depth and integrations — we document timelines in the proposal.',
      },
      {
        question: 'Do you help with SEO after launch?',
        answer:
          'We bake in technical SEO during build. Ongoing content or link building can be scoped separately if you need growth support.',
      },
      {
        question: 'Can I order only design or only development?',
        answer:
          'Yes — Figma-only design, implementation from existing mockups, or optimization of an existing codebase.',
      },
      {
        question: 'Do you maintain sites after launch?',
        answer:
          'Yes. We offer maintenance retainers for updates, monitoring, and iterative improvements.',
      },
    ],
    websitesExtras: {
      scopeTitle: 'What is typically included',
      scopeItems: [
        'Discovery on niche and competitors',
        'IA / wireframes in Figma',
        'Visual design aligned to your brand',
        'Responsive implementation',
        'SEO basics: metadata, sitemap.xml, robots.txt',
        'Performance tuning (Core Web Vitals / PageSpeed)',
        'Lead forms to Telegram or email',
        'Google Analytics & Search Console wiring',
        'Deployment with SSL',
        'Handover training and access transfer',
        'Post-launch support by agreement',
      ],
    },
  },
  design: {
    audienceSection: {
      title: 'Design with us',
      titleAccent: 'if you:',
      items: [
        'Launch or rebrand and need a logo plus core visual system',
        'Your site or app feels dated — you need modern UI/UX',
        'You need Figma files that developers can ship faithfully',
        'You publish across print and social — you need consistent colors and type',
        'You have engineering — you need specs and components',
        'Brand recognition must stay consistent across touchpoints',
      ],
    },
    aboutParagraphs: [
      'Design signals trust before a single line of copy is read. Inconsistent visuals across channels quietly erodes confidence — we fix that with a structured process and deliverables you can reuse everywhere.',
      'TeleBots covers design end-to-end: logos and brand systems, UI/UX for web and apps, and production-ready Figma kits. Our designer works across e-commerce, B2B, healthcare, education, and HoReCa.',
      'Interfaces are planned for outcomes — hierarchy, color, and typography support conversion and recognition. You receive print- and web-ready assets, guidelines, and dev-ready mockups.',
    ],
    whatWeDoTitle: 'Design services',
    whatWeDoItems: [
      {
        title: 'Logo & visual identity',
        body: 'New marks or redesigns with multiple concepts and revision rounds. Palette, typography, patterns, and icons. Deliverables include AI, SVG, PNG (light/dark).',
      },
      {
        title: 'Brand book',
        body: 'Rules for logo usage, color, type, spacing, and off-limits treatments. Templates for social posts and decks so partners stay on-brand.',
      },
      {
        title: 'UI/UX for websites',
        body: 'Wireframes to full Figma UI for desktop and mobile, auto-layout, annotations, optional competitor scan and customer journey mapping.',
      },
      {
        title: 'UI/UX for Telegram Mini Apps',
        body: 'Layouts that respect platform constraints on iOS and Android, componentized Figma libraries for faster build-out.',
      },
      {
        title: 'Social templates',
        body: 'Posts, stories, covers, and highlights aligned to your brand system.',
      },
      {
        title: 'Print & corporate collateral',
        body: 'Business cards, flyers, banners, presentations — print-ready files (CMYK, 300 dpi, bleed).',
      },
    ],
    techTitle: 'Tooling & handoff',
    techLines: [
      'Figma for prototypes, UI kits, and auto-layout',
      'Adobe Illustrator / Photoshop for logos and print',
      'Components and tokens for predictable dev handoff',
      'Alignment with existing brand manuals when provided',
    ],
    faqTitle: 'FAQ',
    faq: [
      { question: 'How much does a logo project cost?', answer: priceFaq },
      {
        question: 'Which file formats do we receive?',
        answer:
          'AI/SVG/PNG/PDF for identity work; Figma projects with structured components for UI/UX engagements.',
      },
      {
        question: 'Is there a design portfolio?',
        answer: 'Yes — browse the portfolio section on this site for branding and interface case studies.',
      },
      {
        question: 'How long does a logo take?',
        answer:
          'Depends on rounds and touchpoints; we align timelines after the brief. Tier guidance sits in the pricing table below.',
      },
      {
        question: 'Do you redesign existing logos?',
        answer:
          'Yes — we modernize marks for digital use, refresh typography and palettes, and export updated asset packs.',
      },
      {
        question: 'Do you support startups and MVPs?',
        answer:
          'Yes — compact packages for logo, base system, and UI for a landing page or app screen set, expandable after validation.',
      },
    ],
    designExtras: {
      processTitle: 'Our process',
      processItems: [
        'Brief: async form or live call to capture goals and constraints',
        'Analysis: market, competitors, and audience signals',
        'Concepts: 2–3 directions to choose from',
        'Refinement: iterative polish to the signed-off direction',
        'Delivery: all agreed formats, brand guidelines, and Figma components',
      ],
    },
  },
};
