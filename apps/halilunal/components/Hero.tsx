type Props = {
  brand: {
    name: string;
    heroTitle: string;
    heroDescription: string;
  };
};

export default function Hero({ brand }: Props) {
  if (brand.name !== "Halil Ünal") {
    return (
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            {brand.name}
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {brand.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-neutral-600 md:text-xl">
            {brand.heroDescription}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="hero-shell relative isolate flex min-h-[calc(100svh-69px)] overflow-hidden bg-[#060812] text-white"
      aria-labelledby="hero-title"
    >
      <div className="hero-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-glow absolute -z-10" aria-hidden="true" />

      <div className="mx-auto grid min-w-0 w-full max-w-[1440px] grid-cols-[minmax(0,1fr)] items-start px-5 pb-14 pt-24 sm:items-center sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.44fr)] lg:px-14 lg:py-24 xl:px-20 xl:py-28">
        <div className="relative z-10 min-w-0 max-w-[850px]">
          <p className="hero-enter hero-enter-first mb-8 flex max-w-full items-center gap-3 text-[0.6rem] font-semibold uppercase leading-5 tracking-[0.17em] text-blue-200/65 sm:mb-10 sm:text-[0.68rem] sm:tracking-[0.24em]">
            <span className="h-px w-7 bg-blue-300/60" aria-hidden="true" />
            <span className="min-w-0">Dijital ürünler · Markalar · Platformlar</span>
          </p>

          <h1
            id="hero-title"
            className="hero-enter hero-enter-second max-w-[12ch] text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.058em] sm:text-[clamp(3.35rem,8.15vw,7.15rem)] sm:leading-[0.94] sm:tracking-[-0.062em]"
          >
            <span className="hero-title-line">Yazılım</span>
            <span className="hero-title-line hero-title-accent">geliştiriyoruz.</span>
          </h1>

          <p className="hero-enter hero-enter-third mt-8 max-w-[590px] text-[0.98rem] leading-7 text-slate-300/75 sm:mt-10 sm:text-lg sm:leading-8 lg:text-[1.18rem]">
            Farklı sektörlerin gerçek ihtiyaçlarına odaklanan dijital ürünler
            geliştiriyoruz. Her ürün aynı tasarım anlayışını, aynı kalite
            yaklaşımını ve aynı teknoloji temelini paylaşır.
          </p>

          <div className="hero-enter hero-enter-fourth mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#products"
              className="hero-button hero-button-primary inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
            >
              Ürünleri keşfet
              <span className="hero-button-arrow ml-3 text-base" aria-hidden="true">
                ↘
              </span>
            </a>
            <a
              href="#brandcore"
              className="hero-button hero-button-secondary inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
            >
              Yaklaşımımı gör
            </a>
          </div>
        </div>

        <div className="hero-signal-wrap pointer-events-none absolute bottom-[-9rem] right-[-9rem] -z-0 h-[25rem] w-[25rem] opacity-65 sm:bottom-[-12rem] sm:right-[-8rem] sm:h-[34rem] sm:w-[34rem] lg:relative lg:bottom-auto lg:right-auto lg:ml-auto lg:h-[29rem] lg:w-[29rem] lg:opacity-100 xl:h-[35rem] xl:w-[35rem]" aria-hidden="true">
          <div className="hero-orbit-arc absolute inset-[1px] rounded-full" />
          <div className="hero-signal absolute inset-0 rounded-full border border-blue-300/15">
            <span className="hero-signal-dot absolute" />
          </div>
          <div className="hero-signal-inner absolute inset-[18%] rounded-full border border-violet-300/10">
            <span className="hero-signal-particle absolute" />
          </div>
          <div className="hero-core absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-36 sm:w-36" />
          <span className="hero-core-point absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50" />
        </div>
      </div>
    </section>
  );
}
