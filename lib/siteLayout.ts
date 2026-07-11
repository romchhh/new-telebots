/** Єдині горизонтальні відступи контенту на всіх сторінках */
export const SITE_PX = 'px-6 md:px-10 lg:px-16';

/** Абсолютний лівий inset (= SITE_PX) */
export const SITE_INSET_L = 'left-6 md:left-10 lg:left-16';

/** Абсолютний правий inset (= SITE_PX) */
export const SITE_INSET_R = 'right-6 md:right-10 lg:right-16';

/** Стандартний контейнер: max-width + відступи */
export const SITE_CONTAINER = `mx-auto max-w-7xl w-full ${SITE_PX}`;

/** Широкий контейнер для секцій головної та about */
export const SITE_CONTAINER_WIDE = `mx-auto max-w-[1600px] w-full ${SITE_PX}`;

/** Внутрішній контейнер без повторних відступів (якщо padding уже на section) */
export const SITE_INNER = 'mx-auto max-w-7xl w-full';

export const SITE_INNER_WIDE = 'mx-auto max-w-[1600px] w-full';
