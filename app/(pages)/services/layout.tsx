import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offres & Tarifs",
  description:
    "3 formules de site web pour artisans : Présence 500 €, Visibilité 990 €, Domination locale 1 900 €. SEO local inclus, livraison en 10 à 15 jours, maintenance assurée.",
  keywords: [
    "tarif site web artisan",
    "prix site internet plombier",
    "offre site web électricien",
    "formule site chauffagiste",
    "référencement local artisan prix",
  ],
  alternates: { canonical: "https://allycore-portfolio.vercel.app/services" },
  openGraph: {
    title: "Offres & Tarifs | Allycore",
    description:
      "3 formules de site web pour artisans : Présence 500 €, Visibilité 990 €, Domination locale 1 900 €. SEO local inclus.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
