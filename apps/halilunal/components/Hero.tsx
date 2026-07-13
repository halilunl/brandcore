type Props = {
  brand: {
    name: string;
    heroTitle: string;
    heroDescription: string;
  };
};

const ecosystemProducts = ["ServiNOTE", "MirChat", "Bisahibi", "LezzetHattı", "PanelAdd"];

function EcosystemVisual() {
  const desktopPaths = [
    "M136 80 C260 80 270 240 430 240",
    "M136 160 C270 160 292 240 430 240",
    "M136 240 H430",
    "M136 320 C270 320 292 240 430 240",
    "M136 400 C260 400 270 240 430 240",
  ];
  const mobilePaths = [
    "M70 52 C70 225 180 230 180 328",
    "M180 92 V328",
    "M290 132 C290 235 180 238 180 328",
    "M98 186 C98 260 180 260 180 328",
    "M262 224 C262 278 180 278 180 328",
  ];
  const mobilePositions = [
    { x: 70, y: 52 },
    { x: 180, y: 92 },
    { x: 290, y: 132 },
    { x: 98, y: 186 },
    { x: 262, y: 224 },
  ];

  return (
    <figure className="hero-ecosystem" aria-labelledby="hero-ecosystem-caption">
      <svg className="hero-ecosystem-desktop" viewBox="0 0 620 480" role="img" aria-hidden="true">
        {ecosystemProducts.map((product, index) => (
          <g className="hero-ecosystem-item" key={product}>
            <path d={desktopPaths[index]} />
            <circle cx="136" cy={80 + index * 80} r="4" />
            <text x="116" y={85 + index * 80} textAnchor="end">{product}</text>
          </g>
        ))}
        <g className="hero-ecosystem-center">
          <circle className="hero-ecosystem-halo" cx="472" cy="240" r="104" />
          <circle className="hero-ecosystem-core" cx="472" cy="240" r="67" />
          <circle className="hero-ecosystem-pulse" cx="472" cy="214" r="3" />
          <text x="472" y="247" textAnchor="middle">UNAL LTD</text>
        </g>
      </svg>

      <svg className="hero-ecosystem-mobile" viewBox="0 0 360 440" role="img" aria-hidden="true">
        {ecosystemProducts.map((product, index) => (
          <g className="hero-ecosystem-item" key={product}>
            <path d={mobilePaths[index]} />
            <circle cx={mobilePositions[index].x} cy={mobilePositions[index].y} r="3.5" />
            <text
              x={mobilePositions[index].x}
              y={mobilePositions[index].y - 12}
              textAnchor="middle"
            >
              {product}
            </text>
          </g>
        ))}
        <g className="hero-ecosystem-center">
          <circle className="hero-ecosystem-halo" cx="180" cy="344" r="82" />
          <circle className="hero-ecosystem-core" cx="180" cy="344" r="58" />
          <circle className="hero-ecosystem-pulse" cx="180" cy="321" r="3" />
          <text x="180" y="350" textAnchor="middle">UNAL LTD</text>
        </g>
      </svg>
      <figcaption id="hero-ecosystem-caption" className="sr-only">
        ServiNOTE, MirChat, Bisahibi, LezzetHattı ve PanelAdd ürünlerini UNAL LTD
        çekirdeğine bağlayan ürün ekosistemi.
      </figcaption>
    </figure>
  );
}

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

      <div className="hero-layout mx-auto grid min-w-0 w-full max-w-[1440px] grid-cols-[minmax(0,1fr)] items-start px-5 pb-14 pt-24 sm:items-center sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.44fr)] lg:px-14 lg:py-24 xl:px-20 xl:py-28">
        <div className="hero-layout-copy relative z-10 min-w-0 max-w-[850px]">
          <p className="hero-enter hero-enter-first mb-8 flex max-w-full items-center gap-3 text-[0.6rem] font-semibold uppercase leading-5 tracking-[0.17em] text-blue-200/65 sm:mb-10 sm:text-[0.68rem] sm:tracking-[0.24em]">
            <span className="h-px w-7 bg-blue-300/60" aria-hidden="true" />
            <span className="min-w-0">Dijital ürünler · Markalar · Platformlar</span>
          </p>

          <h1
            id="hero-title"
            className="hero-enter hero-enter-second max-w-[12ch] text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.058em] sm:text-[clamp(3.35rem,8.15vw,7.15rem)] sm:leading-[0.94] sm:tracking-[-0.062em]"
          >
            <span className="hero-title-line">Projelerimiz.</span>
            <span className="hero-title-line hero-title-support">Gerçek problemlere odaklanan</span>
            <span className="hero-title-line hero-title-support hero-title-accent">dijital ürünler.</span>
          </h1>

          <p className="hero-enter hero-enter-third mt-8 max-w-[590px] text-[0.98rem] leading-7 text-slate-300/75 sm:mt-10 sm:text-lg sm:leading-8 lg:text-[1.18rem]">
            Her ürün farklı bir ihtiyacı çözer. Tamamı aynı tasarım anlayışı,
            aynı mühendislik disiplini ve ortak kalite yaklaşımıyla geliştirilir.
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

        <EcosystemVisual />
      </div>
    </section>
  );
}
