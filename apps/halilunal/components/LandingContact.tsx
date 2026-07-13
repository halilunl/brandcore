const CONTACT_PHONE_E164 = "+905324867601";

const whatsappMessage = `Merhaba Halil Bey,

halilunal.com üzerinden size ulaşıyorum.

Bir proje hakkında görüşmek istiyorum.`;

type ContactOptionProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  external?: boolean;
};

function ContactOption({
  title,
  description,
  cta,
  href,
  external = false,
}: ContactOptionProps) {
  const content = (
    <>
      <span className="contact-option-title">{title}</span>
      <span className="contact-option-description">{description}</span>
      <span className="contact-option-cta">
        {cta}
        <span aria-hidden="true">↗</span>
      </span>
    </>
  );

  return (
    <a
      className="contact-option focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`${cta} — ${description}`}
    >
      {content}
    </a>
  );
}

export default function LandingContact() {
  const whatsappHref = `https://wa.me/${CONTACT_PHONE_E164.replace(
    "+",
    "",
  )}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneHref = `tel:${CONTACT_PHONE_E164}`;

  return (
    <section
      id="contact"
      className="contact-section landing-section scroll-mt-20"
      aria-labelledby="contact-title"
    >
      <div className="landing-container">
        <p className="section-kicker">İletişim</p>
        <h2 id="contact-title" className="mt-8 max-w-[12ch] text-[clamp(3.2rem,9vw,8.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-slate-100">
          İletişime geçelim.
        </h2>
        <p className="section-copy mt-8 max-w-2xl">
          Yeni bir ürün, mevcut bir yazılım veya iş birliği hakkında konuşmak
          için size uygun kanaldan ulaşabilirsiniz.
        </p>

        <div className="contact-options mt-12 sm:mt-16">
          <ContactOption
            title="WhatsApp"
            description="Hızlıca mesaj gönderin."
            cta="WhatsApp’tan yaz"
            href={whatsappHref}
            external
          />
          <ContactOption
            title="E-posta"
            description="Detaylı bilgi ve dosyalar için."
            cta="E-posta gönder"
            href="mailto:info@halilunal.com"
          />
          <ContactOption
            title="Telefon"
            description="Doğrudan görüşmek için."
            cta="Ara"
            href={phoneHref}
          />
        </div>
      </div>
    </section>
  );
}
