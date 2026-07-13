import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BrandCore from "@/components/BrandCore";
import ProductsSection from "@/components/ProductsSection";
import Manifesto from "@/components/Manifesto";
import LandingContact from "@/components/LandingContact";

import { headers } from "next/headers";
import { resolveBrand } from "@/lib/resolveBrand";

export default async function HomePage() {
  const headersList = await headers();
  const host = headersList.get("host") || "";

  const brand = resolveBrand(host);
  const isHalilUnal = brand.name === "Halil Ünal";

  return (
    <main className={`min-h-screen ${isHalilUnal ? "landing-main" : ""}`}>
      <Hero brand={brand} />
      {isHalilUnal ? (
        <>
          <BrandCore />
          <ProductsSection />
          <Manifesto />
          <LandingContact />
        </>
      ) : (
        <>
          <Projects />
          <Contact brand={brand} />
        </>
      )}
    </main>
  );
}
