#!/usr/bin/env node
/**
 * Звіряє теки в app/[lang]/ зі списком у lib/siteRoutes.ts.
 *
 * Маршрут, відсутній у списку, middleware обробляє через rewrite: сторінка
 * стає доступною і на /foo, і на /uk/foo — два URL з однаковим вмістом.
 * Зайвий запис у списку дає 308 на неіснуючу сторінку.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROUTES_FILE = 'lib/siteRoutes.ts';
const APP_LANG_DIR = join('app', '[lang]');

const source = readFileSync(ROUTES_FILE, 'utf8');
const arrayMatch = source.match(/KNOWN_SITE_ROUTES\s*=\s*\[([\s\S]*?)\]/);
if (!arrayMatch) {
  console.error(`✖ Не вдалося прочитати KNOWN_SITE_ROUTES з ${ROUTES_FILE}`);
  process.exit(1);
}
const declared = new Set([...arrayMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]));

const onDisk = new Set(
  readdirSync(APP_LANG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('_'))
    .map((entry) => entry.name)
);

const missing = [...onDisk].filter((route) => !declared.has(route)).sort();
const stale = [...declared].filter((route) => !onDisk.has(route)).sort();

if (missing.length === 0 && stale.length === 0) {
  console.log(`✓ KNOWN_SITE_ROUTES синхронний з ${APP_LANG_DIR} (${onDisk.size} маршрутів)`);
  process.exit(0);
}

if (missing.length > 0) {
  console.error(`✖ Немає в ${ROUTES_FILE} (ризик дубля /foo і /:lang/foo): ${missing.join(', ')}`);
}
if (stale.length > 0) {
  console.error(`✖ Є в ${ROUTES_FILE}, але теки немає (308 у нікуди): ${stale.join(', ')}`);
}
process.exit(1);
