/** Горизонтальні відступи як у hero на головній (повна ширина екрана) */
export const SITE_PX = 'px-6 md:px-10 lg:px-16';

/** Абсолютний лівий inset (= SITE_PX) */
export const SITE_INSET_L = 'left-6 md:left-10 lg:left-16';

/** Абсолютний правий inset (= SITE_PX) */
export const SITE_INSET_R = 'right-6 md:right-10 lg:right-16';

/**
 * Стандартний контейнер сторінки / хедера / футера:
 * ті самі бокові відступи, що в hero — без max-width, який «відтискав» контент до центру.
 */
export const SITE_CONTAINER = `mx-auto w-full ${SITE_PX}`;

/** Широкий контейнер — ті самі бокові відступи */
export const SITE_CONTAINER_WIDE = SITE_CONTAINER;

/** Внутрішній контейнер без повторних відступів (якщо padding уже на section) */
export const SITE_INNER = 'mx-auto w-full';

export const SITE_INNER_WIDE = SITE_INNER;
