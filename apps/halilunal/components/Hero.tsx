type Props = {
  brand: {
    name: string;
    heroTitle: string;
    heroDescription: string;
  };
};

export default function Hero({ brand }: Props) {
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

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-black px-6 py-3 text-white">
            Projeler
          </button>

          <button className="rounded-2xl border px-6 py-3">
            İletişim
          </button>
        </div>
      </div>
    </section>
  );
}