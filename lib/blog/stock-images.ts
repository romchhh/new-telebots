/** Перевірені Unsplash-зображення для блогу (w=1200, q=80) */
const q = '?w=1200&q=80&auto=format&fit=crop';
const u = (id: string) => `https://images.unsplash.com/photo-${id}${q}`;

export const blogStockImages = {
  dev: {
    codeMonitor: u('1555066931-4365d14bab8c'),
    macbook: u('1498050108023-c5249f4df085'),
    keyboard: u('1618477388954-7852f32655ec'),
    neonCode: u('1542831371-29b0f74f9713'),
  },
  ai: {
    data3d: u('1620712943543-bcc4688e7485'),
    cyber: u('1614741118887-7a4ee193a5fa'),
    humanTech: u('1485827404703-89b55fcc595e'),
    neural: u('1639762681485-074b7f938ba0'),
  },
  design: {
    mobileUi: u('1581291518633-83b4ebd1d83e'),
    wireframe: u('1586717791821-3f44a563fa4c'),
    uxDesk: u('1561070791-26c113006238'),
  },
  business: {
    studio: u('1497366216548-37526070297c'),
    architecture: u('1600585154340-be6161a56a0c'),
    desk: u('1504868584819-f8e8b4b6d7e3'),
    team: u('1522202176988-66273c2fd55f'),
  },
  abstract: {
    wave: u('1618005182384-a83a8bd57fbe'),
    lightArch: u('1600585154526-990dced4db0d'),
    texture: u('1507525428034-b723cf961d3e'),
    digital: u('1634017839464-5c339ebe3cb4'),
  },
} as const;

/** Картки та hero для 4 pricing-статей */
export const pricingBlogImages = {
  website: blogStockImages.dev.codeMonitor,
  shop: blogStockImages.business.studio,
  telegram: blogStockImages.ai.data3d,
  design: blogStockImages.design.mobileUi,
} as const;

/** Hero для legacy BlogPost1–15 */
export const legacyBlogImages: Record<number, string> = {
  1: blogStockImages.dev.codeMonitor,
  2: blogStockImages.dev.macbook,
  3: blogStockImages.dev.keyboard,
  4: blogStockImages.abstract.wave,
  5: blogStockImages.business.desk,
  6: blogStockImages.dev.macbook,
  7: blogStockImages.business.studio,
  8: blogStockImages.ai.neural,
  9: blogStockImages.ai.data3d,
  10: blogStockImages.dev.neonCode,
  11: blogStockImages.ai.cyber,
  12: blogStockImages.ai.humanTech,
  13: blogStockImages.business.desk,
  14: blogStockImages.abstract.digital,
  15: blogStockImages.business.architecture,
};
