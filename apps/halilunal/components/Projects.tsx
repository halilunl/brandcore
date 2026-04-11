export default function Projects() {
  return (
    <section id="projects" className="border-t bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Projeler</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {["BrandCore", "DemandCore", "PanelAdd"].map((item) => (
            <div
              key={item}
              className="w-full rounded-3xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item}</h3>

              <p className="mt-3 text-sm text-neutral-600">
                Ölçeklenebilir sistem ve modern mimari yaklaşımı.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}