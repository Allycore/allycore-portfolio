import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas d'études & Réalisations",
  description:
    "Découvrez comment Marc (plombier), Sophie (électricienne) et Thierry (chauffagiste) ont multiplié leurs devis grâce à Allycore. Résultats réels : ROI ×1.7 à ×3.3 en moins de 90 jours.",
  keywords: [
    "cas d'études site web artisan",
    "résultats SEO artisan",
    "site web plombier résultats",
    "référencement local électricien",
    "visibilité Google chauffagiste",
  ],
  alternates: { canonical: "https://allycore-portfolio.vercel.app/projects" },
  openGraph: {
    title: "Cas d'études & Réalisations | Allycore",
    description:
      "ROI ×1.7 à ×3.3 en moins de 90 jours. Découvrez les résultats concrets de nos clients artisans.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
