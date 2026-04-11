// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";

// import { headers } from "next/headers";
// import { resolveBrand } from "@/lib/resolveBrand";

// export default async function HomePage() {
//   const headersList = await headers(); // 🔥 await şart
//   const host = headersList.get("host") || "";

//   const brand = resolveBrand(host);

//   return (
//     <main className="min-h-screen bg-white text-neutral-900">
//       <Hero brand={brand} />
//       <Projects />
//       <Contact brand={brand} />
//     </main>
//   );
// }

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { headers } from "next/headers";
import { resolveBrand } from "@/lib/resolveBrand";

export default async function HomePage() {
  const headersList = await headers();
  const host = headersList.get("host") || "";

  const brand = resolveBrand(host);

  return (
    <main className="min-h-screen">
      <Hero brand={brand} />
      <Projects />
      <Contact brand={brand} />
    </main>
  );
}