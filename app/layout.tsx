import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Développeur créatif",
  description: "Portfolio professionnel — design, développement et créativité au service de vos projets.",
  keywords: ["portfolio", "développeur", "design", "next.js", "react"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="bg-primary text-light font-inter antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
