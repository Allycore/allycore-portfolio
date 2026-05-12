import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic gratuit",
  description:
    "Réservez un diagnostic gratuit de 15 minutes. On analyse votre visibilité locale et ce qui bloque votre présence sur Google — sans engagement.",
  keywords: [
    "diagnostic site web artisan gratuit",
    "contact création site web artisan",
    "devis site internet artisan",
    "audit visibilité Google artisan",
  ],
  openGraph: {
    title: "Diagnostic gratuit | Allycore",
    description:
      "15 minutes pour analyser votre visibilité locale sur Google. Gratuit, sans engagement.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
