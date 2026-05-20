import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-accent/30 font-black text-[120px] leading-none select-none">404</p>
      <h1 className="font-syne text-3xl font-black text-navy mt-4 mb-3">Page introuvable</h1>
      <p className="text-muted mb-8 max-w-md">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-navy font-bold hover:bg-yellow-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
      >
        <ArrowLeft size={16} />
        Retour à l'accueil
      </Link>
    </div>
  );
}
