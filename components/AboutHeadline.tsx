export type AboutHeadlineData = {
  title: string;
  sub: string;
  body: string;
};

export default function AboutHeadline({ headline }: { headline: AboutHeadlineData }) {
  const h = headline;
  const montserrat = { fontFamily: 'var(--font-montserrat)' } as const;

  return (
    <div className="mx-auto w-full max-w-full md:max-w-full md:pr-2 lg:pr-6">
      <div className="mx-auto w-full max-w-4xl text-center md:max-w-3xl md:text-left lg:max-w-4xl">
        <h1
          className="mx-auto mb-3 max-w-[min(100%,34rem)] font-bold uppercase leading-tight text-black sm:mb-4 sm:max-w-2xl sm:leading-[1.12] md:mb-5 md:mx-0 md:max-w-3xl lg:max-w-4xl text-[clamp(1.2rem,4.8vw,2.05rem)] sm:text-3xl md:text-4xl lg:text-5xl [letter-spacing:0.04em] sm:[letter-spacing:0.07em] md:[letter-spacing:0.09em]"
          style={montserrat}
        >
          {h.title}
        </h1>

        <p
          className="mb-4 font-normal leading-snug text-neutral-900 sm:mb-5 md:mb-6 text-lg sm:text-xl md:text-2xl [letter-spacing:0.04em] sm:[letter-spacing:0.08em] md:[letter-spacing:0.1em]"
          style={montserrat}
        >
          {h.sub}
        </p>

        <p
          className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-600 sm:text-lg md:mx-0 md:text-xl md:leading-relaxed"
          style={montserrat}
        >
          {h.body}
        </p>
      </div>
    </div>
  );
}
