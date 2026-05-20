import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/next";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const baseUrl = "https://allycore-portfolio.vercel.app";
const description =
  "Allycore crée des sites web professionnels pour les artisans du bâtiment. Plombiers, électriciens, chauffagistes — livré en 10 à 15 jours, optimisé Google, 1 à 2 chantiers pour rentabiliser.";

export const metadata: Metadata = {
  title: {
    default: "Allycore | Sites web pour artisans",
    template: "%s | Allycore",
  },
  description,
  keywords: [
    "site web artisan",
    "création site plombier",
    "site internet électricien",
    "site web chauffagiste",
    "référencement local artisan",
    "SEO artisan bâtiment",
    "visibilité Google artisan",
    "site internet artisan bâtiment",
  ],
  authors: [{ name: "Allycore", url: baseUrl }],
  metadataBase: new URL(baseUrl),
  alternates: { canonical: baseUrl },
  verification: {
    google: "lMIPbvTqx6B1X2_qT7PfD_gnUtRk87c9YhDwAFsD8Kk",
  },
  openGraph: {
    title: "Allycore | Sites web pour artisans",
    description,
    url: baseUrl,
    siteName: "Allycore",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allycore | Sites web pour artisans",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Allycore",
  description,
  url: baseUrl,
  email: "allycore.service@gmail.com",
  areaServed: "France",
  serviceType: [
    "Création de site web",
    "Référencement local",
    "SEO",
    "Google Business Profile",
    "Maintenance de site web",
  ],
  knowsAbout: ["Artisans du bâtiment", "Plombiers", "Électriciens", "Chauffagistes"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
