type ProductVisual = "operations" | "communication" | "marketplace" | "restaurant" | "document";

type Product = {
  name: string;
  category: string;
  description: string;
  features: string[];
  visual: ProductVisual;
};

const products: Product[] = [
  {
    name: "ServiNOTE",
    category: "Operasyon platformu",
    description:
      "Teknik servis işletmelerinin müşterilerini, işlerini, parça ve işçilik süreçlerini tek bir modern operasyon akışında yönetmesini sağlar.",
    features: ["Servis kayıtları", "İş takibi", "Müşteri yönetimi", "Parça ve işçilik", "İş akışı otomasyonu"],
    visual: "operations",
  },
  {
    name: "MirChat",
    category: "İletişim platformu",
    description:
      "Ekiplerin ve toplulukların konuşmaları, kanalları ve paylaşılan bağlamı sade bir iletişim deneyiminde bir araya getirmesine yardımcı olur.",
    features: ["Odaklı konuşmalar", "Kanal düzeni", "Ekip iletişimi", "Paylaşılan bağlam", "Akıcı deneyim"],
    visual: "communication",
  },
  {
    name: "Bisahibi",
    category: "Marketplace platformu",
    description:
      "İhtiyaç sahipleriyle doğru ürün ve hizmet sahiplerini keşif, değerlendirme ve bağlantı adımlarında buluşturan pazar yeri deneyimi.",
    features: ["Akıllı keşif", "Net kategoriler", "Kolay karşılaştırma", "Güvenli bağlantı", "Sade ilan akışı"],
    visual: "marketplace",
  },
  {
    name: "LezzetHattı",
    category: "Restoran platformu",
    description:
      "Restoranlar ile lezzet arayanları menü, keşif ve doğrudan bağlantı etrafında buluşturan odaklı bir yemek deneyimi.",
    features: ["Restoran keşfi", "Menü deneyimi", "Lezzet kategorileri", "Doğrudan bağlantı", "Yerel görünürlük"],
    visual: "restaurant",
  },
  {
    name: "PanelAdd",
    category: "Doküman platformu",
    description:
      "Dokümanları oluşturma, düzenleme ve paylaşma süreçlerini tek bir sakin çalışma alanında birleştiren üretkenlik ürünü.",
    features: ["Doküman düzeni", "İçerik organizasyonu", "Ortak çalışma", "Sürüm akışı", "Kolay paylaşım"],
    visual: "document",
  },
];

function OperationsMockup() {
  return (
    <div className="product-ui product-ui-operations">
      <div className="ui-topbar"><b>S</b><span /><span /><span /></div>
      <div className="operations-layout">
        <div className="ui-sidebar"><i /><i /><i /><i /><i /></div>
        <div className="operations-flow">
          <div className="ui-heading"><span /><i /></div>
          {[0, 1, 2, 3].map((item) => (
            <div className="operations-row" key={item}>
              <i /><span><b /><b /></span><em />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CommunicationMockup() {
  return (
    <div className="product-ui product-ui-communication">
      <div className="chat-rail"><b>M</b><i /><i /><i /><i /></div>
      <div className="chat-list">
        <div className="ui-heading"><span /><i /></div>
        {[0, 1, 2, 3, 4].map((item) => <div className="chat-person" key={item}><i /><span><b /><b /></span></div>)}
      </div>
      <div className="chat-room">
        <div className="chat-room-head"><i /><span /></div>
        <div className="chat-messages"><i /><i /><i /><i /></div>
        <div className="chat-composer"><span /><i /></div>
      </div>
    </div>
  );
}

function MarketplaceMockup() {
  return (
    <div className="product-ui product-ui-marketplace">
      <div className="market-head"><b>B</b><span /><i /></div>
      <div className="market-search"><i /><span /></div>
      <div className="market-categories"><span /><span /><span /><span /></div>
      <div className="market-grid">
        {[0, 1, 2, 3].map((item) => <div key={item}><i /><span /><b /></div>)}
      </div>
    </div>
  );
}

function RestaurantMockup() {
  return (
    <div className="product-ui product-ui-restaurant">
      <div className="restaurant-copy"><b>LezzetHattı</b><span /><span /><i /></div>
      <div className="restaurant-plate"><span /><i /><b /></div>
      <div className="restaurant-menu">
        {[0, 1, 2].map((item) => <div key={item}><i /><span><b /><b /></span></div>)}
      </div>
    </div>
  );
}

function DocumentMockup() {
  return (
    <div className="product-ui product-ui-document">
      <div className="document-rail"><b>P</b><i /><i /><i /><i /></div>
      <div className="document-stack" aria-hidden="true"><i /><i /></div>
      <div className="document-page">
        <div className="document-tools"><i /><i /><i /><span /></div>
        <b />
        <span /><span /><span /><span />
        <div><i /><i /><i /></div>
      </div>
    </div>
  );
}

function ProductMockup({ visual, name }: { visual: ProductVisual; name: string }) {
  const mockups = {
    operations: <OperationsMockup />,
    communication: <CommunicationMockup />,
    marketplace: <MarketplaceMockup />,
    restaurant: <RestaurantMockup />,
    document: <DocumentMockup />,
  };

  return (
    <figure className={`product-render product-render-${visual}`} aria-label={`${name} için kavramsal ürün arayüzü`}>
      <div className="product-render-glow" aria-hidden="true" />
      <div aria-hidden="true">{mockups[visual]}</div>
    </figure>
  );
}

function ProductStage({ product, index }: { product: Product; index: number }) {
  return (
    <article className={`product-stage product-stage-${product.visual}`}>
      <div className="product-stage-inner landing-container">
        <div className="product-stage-copy">
          <p className="product-meta"><span>{String(index + 1).padStart(2, "0")}</span>{product.category}</p>
          <h3>{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <ul className="product-features" aria-label={`${product.name} özellikleri`}>
            {product.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <a className="product-cta focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-blue-300" href="#contact">
            {product.name} hakkında konuşalım <span aria-hidden="true">→</span>
          </a>
        </div>
        <ProductMockup visual={product.visual} name={product.name} />
      </div>
    </article>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="products-section-v2 scroll-mt-20" aria-labelledby="products-title">
      <div className="products-intro landing-container">
        <p className="section-kicker">Ürünler</p>
        <h2 id="products-title" className="section-title mt-6 max-w-4xl">
          Farklı sektörler.
          <span className="block text-slate-400">Ortak ürün kültürü.</span>
        </h2>
        <p className="section-copy mt-8 max-w-2xl">
          Her ürün kendi problemini çözer; tamamı aynı sadelik, güven ve kalite yaklaşımını taşır.
        </p>
      </div>
      {products.map((product, index) => <ProductStage product={product} index={index} key={product.name} />)}
    </section>
  );
}
