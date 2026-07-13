type Props = {
  brand: {
    name: string;
  };
};

export default function Header({ brand }: Props) {
  const isHalilUnal = brand.name === "Halil Ünal";

  return (
    <header
      className={`site-header sticky top-0 z-50 border-b ${
        isHalilUnal
          ? "border-white/[0.08] bg-[#080a14]/95 text-white"
          : "border-neutral-200 bg-white/80 text-neutral-900"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-[0.9rem] sm:px-8 lg:px-14 xl:px-20">
        <a
          href="#"
          className="text-[0.95rem] font-semibold tracking-[-0.025em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          aria-label={`${brand.name} ana sayfa`}
        >
          {brand.name}
          {isHalilUnal && <span className="text-blue-400">.</span>}
        </a>

        <nav
          className={`hidden items-center gap-9 text-[0.82rem] md:flex ${
            isHalilUnal ? "text-slate-400" : "text-neutral-600"
          }`}
          aria-label="Ana navigasyon"
        >
          {isHalilUnal && (
            <a href="#brandcore" className="site-nav-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
              Ekosistem
            </a>
          )}
          <a href={isHalilUnal ? "#products" : "#projects"} className="site-nav-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
            {isHalilUnal ? "Ürünler" : "Projeler"}
          </a>
          <a href="#contact" className="site-nav-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
            İletişim
          </a>
        </nav>

        <a
          href="#contact"
          className={`header-cta rounded-full px-[1.05rem] py-[0.48rem] text-[0.8rem] font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 ${
            isHalilUnal
              ? "border border-white/15 text-slate-200 hover:bg-white/[0.06]"
              : "bg-black text-white hover:bg-neutral-800"
          }`}
        >
          İletişim
        </a>
      </div>
    </header>
  );
}
