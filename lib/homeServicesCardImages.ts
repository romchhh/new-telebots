/** Hero-фото для карток «Розробка для бізнесу» на головній */
const HOME_SERVICE_CARD_IMAGES: Record<string, string> = {
  'solutions/online-stores': '/services/services-websites.jpg',
  'services/websites': '/services/services-websites.jpg',
  'solutions/landing-pages': '/services/services-websites.jpg',
  'services/chatbots': '/services/services-chatbots.jpg',
  'solutions/data-parsers': '/services/services-parsers.jpg',
  'services/design': '/services/services-design.jpg',
};
export function getHomeServiceCardImage(href: string): string {
  return HOME_SERVICE_CARD_IMAGES[href] ?? '/services/services-hero_new.jpg';
}
