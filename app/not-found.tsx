import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-accent/30 font-black text-[120px] leading-none select-none">404</p>
      <h1 className="text-3xl font-black text-light mt-4 mb-3">Page introuvable</h1>
      <p className="text-muted mb-8 max-w-md">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-primary font-bold hover:bg-yellow-400 transition-colors"
      >
        <ArrowLeft size={16} />
        Retour à l'accueil
      </Link>
    </div>
  );
}
