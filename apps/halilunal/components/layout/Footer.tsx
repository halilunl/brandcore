type Props = {
  brand: {
    name: string;
    email: string;
  };
};

export default function Footer({ brand }: Props) {
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