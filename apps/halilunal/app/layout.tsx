import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { headers } from "next/headers";
import { resolveBrand } from "@/lib/resolveBrand";

export const metadata: Metadata = {
  title: "BrandCore",
  description: "Multi brand platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const host = headersList.get("host") || "";

  const brand = resolveBrand(host);

  return (
    <html lang="tr">
      <body className="bg-white text-neutral-900">
        <Header brand={brand} />

        {children}

        <Footer brand={brand} />
      </body>
    </html>
  );
}