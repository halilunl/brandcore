type Props = {
  brand: {
    name: string;
  };
};

export default function Contact({ brand }: Props) {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">İletişim</h2>

        <p>{brand.name}</p>
      </div>
    </section>
  );
}