type Props = {
  brand: {
    name: string;
  };
};

export default function Header({ brand }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="font-semibold tracking-wide text-neutral-900">
          {brand.name}
        </div>

        {/* NAV */}
        <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
          <a href="#projects" className="hover:text-black">
            Projeler
          </a>
          <a href="#contact" className="hover:text-black">
            İletişim
          </a>
        </nav>

        {/* CTA */}
        <button className="rounded-xl bg-black px-4 py-2 text-sm text-white">
          İletişim
        </button>
      </div>
    </header>
  );
}