# Hyperframes Composition Brief: TeleBots

## Objective
Create a short launch-style brag video for TeleBots (new-telebots site).

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 20 seconds

## Source Material
- Project root: `/Users/nowayrm/Desktop/Projects/Sites/Done/new-telebots`
- Primary files read: `app/[lang]/page.tsx`, `components/translations.ts`, `components/HeroSectionContent.tsx`, `app/globals.css`, `lib/fonts.ts`, `lib/site.ts`
- Product name: TeleBots
- Tagline / strongest claim: Розробка сайтів і Telegram-ботів під ключ · 200+ проєктів
- Key UI or visual moment to recreate: dark hero + uppercase Montserrat title + brand pink accent
- Copy that must appear verbatim:
  - Розробка сайтів і Telegram-ботів під ключ
  - Зручні сайти та боти, які ведуть клієнта до заявки й покупки.
  - telebots. / telebots.site

## Creative Direction
- Tone preset: polished
- Creative direction: quiet premium agency film with one sharp Ukrainian hook
- Interpretation: longer holds, restrained GSAP, brand pink only accent
- Angle: bots take leads even at 3am; one team ships sites + Telegram bots
- Hook: БОТ БЕРЕ ЗАЯВКУ / НАВІТЬ О 3 НОЧІ
- Outro / punchline: Заявка → бот → оплата.
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign
  - Real personal emails / secrets / credential files

## Visual Identity
- Background: #0a0a0a
- Text: #ffffff / #171717
- Accent: #f472b6
- Display font: Montserrat
- Body font: Manrope
- Visual references from the project: hero dusk gradient, brand soft cards `#fdf2f8`, pink `#f472b6`

## Storyboard
Use `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. Hook — 3.0s — two-line Ukrainian hook
2. Reveal — 4.5s — real hero title + tagline
3. Proof — 5.0s — 200+ / 4+ / 24 год
4. Stack — 4.5s — Чат-боти · Сайти · E-commerce
5. Outro — 3.0s — logo + punchline + URL

## Audio
- Audio role: warm bed
- Audio arc: soft enter → steady under scenes → fade under logo
- Music: happy-beats-business-moves-vol-9-by-ende-dot-app.mp3
- Music treatment: volume ~0.28, fade-in 0.4s, fade-out last 1.2s
- Music cue guidance: bundled preset under skill assets/music/cues/; optional locks near 3.70, 6.34, 10.54
- Audio-reactive treatment: subtle brand glow only if easy; else none
- Audio-coupled moments:
  - Scene 1 — snap text
  - Scene 3 — card sequence
  - Scene 5 — final logo
- SFX selection guidance: soft UI / interface ticks; one light impact on outro
- SFX analysis guidance: `~/.agents/skills/brag/assets/sfx/sfx-analysis.md`
- Exact SFX choice: optional; music alone is acceptable if SFX wiring is noisy
- Audio files: copy music into `composition/assets/music/`

## Hyperframes Instructions
Author a single `index.html` composition with GSAP timeline on `window.__timelines["main"]`, `data-duration="20"`, landscape 1920x1080. Prefer native Hyperframes `data-*` conventions from project AGENTS.md. Run `npx hyperframes check` before render. Keep creation and rendering local.
