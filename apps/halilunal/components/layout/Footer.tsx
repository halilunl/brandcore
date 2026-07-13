type Props = {
  brand: {
    name: string;
    email: string;
  };
};

export default function Footer({ brand }: Props) {
  if (brand.name === "Halil Ünal") {
    return (
      <footer className="landing-footer border-t border-white/[0.08] bg-[#050710] text-slate-500">
        <div className="landing-container flex flex-col gap-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Halil Ünal</p>
          <nav className="flex gap-6" aria-label="Alt navigasyon">
            <a className="footer-link" href="#brandcore">BrandCore</a>
            <a className="footer-link" href="#products">Ürünler</a>
            <a className="footer-link" href="#">Yukarı dön</a>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div>
            <p className="font-semibold">{brand.name}</p>
            <p className="text-sm text-neutral-500">
              Dijital projeler ve yazılım sistemleri
            </p>
          </div>

          <div className="text-sm text-neutral-500">
            <p>{brand.email}</p>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
