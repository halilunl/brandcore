type Props = {
  brand: {
    email: string;
    location: string;
  };
};

export default function Contact({ brand }: Props) {
  return (
    <section id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">İletişim</h2>

        <div className="mt-6 space-y-2 text-neutral-600">
          <p>{brand.email}</p>
          <p>{brand.location}</p>
        </div>
      </div>
    </section>
  );
}