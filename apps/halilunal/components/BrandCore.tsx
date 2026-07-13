const products = ["ServiNOTE", "MirChat", "Bisahibi", "LezzetHattı", "PanelAdd"];
const principles = [
  "Tutarlı tasarım",
  "Kolay kullanılan arayüzler",
  "Güvenilir teknoloji",
  "Uzun ömürlü yazılım",
];

export default function BrandCore() {
  return (
    <section
      id="brandcore"
      className="landing-section brandcore-section scroll-mt-20"
      aria-labelledby="brandcore-title"
    >
      <div className="landing-container grid gap-16 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:gap-24">
        <div>
          <p className="section-kicker">Ürün ekosistemi</p>
          <h2 id="brandcore-title" className="section-title mt-6">
            Bir çekirdek.
            <span className="block text-slate-400">Birden fazla ürün.</span>
          </h2>
          <p className="section-copy mt-8 max-w-lg">
            Geliştirdiğimiz tüm ürünler ortak bir temelden doğar. Her biri farklı
            bir problemi çözer; tamamı aynı tasarım anlayışı, teknoloji altyapısı
            ve kalite yaklaşımıyla geliştirilir.
          </p>
          <ul className="brandcore-principles mt-10" aria-label="BrandCore ortak ilkeleri">
            {principles.map((principle, index) => (
              <li key={principle}>
                <span>0{index + 1}</span>
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <figure className="brandcore-map relative mx-auto w-full max-w-[760px]" aria-labelledby="brandcore-map-caption">
          <svg
            className="h-auto w-full"
            viewBox="0 0 800 460"
            role="img"
            aria-labelledby="brandcore-map-title brandcore-map-description"
          >
            <title id="brandcore-map-title">UNAL LTD ürün ekosistemi</title>
            <desc id="brandcore-map-description">
              Ortak çekirdekten beş dijital ürüne uzanan bağlantılar.
            </desc>
            <g className="brandcore-paths">
              <path d="M400 230 C315 230 278 82 168 82" />
              <path d="M400 230 C320 230 282 156 168 156" />
              <path d="M400 230 H168" />
              <path d="M400 230 C320 230 282 304 168 304" />
              <path d="M400 230 C315 230 278 378 168 378" />
            </g>
            <g className="brandcore-pulses" aria-hidden="true">
              <circle cx="294" cy="176" r="3" />
              <circle cx="251" cy="230" r="2.5" />
              <circle cx="293" cy="286" r="2" />
            </g>
            <circle className="brandcore-halo" cx="480" cy="230" r="112" />
            <circle className="brandcore-core" cx="480" cy="230" r="68" />
            <circle className="brandcore-core-point" cx="480" cy="204" r="3" />
            <text className="brandcore-core-label" x="480" y="240" textAnchor="middle">
              UNAL LTD
            </text>
            {products.map((product, index) => (
              <g key={product} className="brandcore-product">
                <circle cx="144" cy={82 + index * 74} r="4" />
                <text x="126" y={87 + index * 74} textAnchor="end">
                  {product}
                </text>
              </g>
            ))}
          </svg>
          <figcaption id="brandcore-map-caption" className="sr-only">
            UNAL LTD; ServiNOTE, MirChat, Bisahibi, LezzetHattı ve PanelAdd
            ürünlerini ortak bir ekosistemde birleştirir.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
