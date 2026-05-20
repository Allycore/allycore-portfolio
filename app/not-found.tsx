import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section style={{ paddingTop: 170, paddingBottom: 130 }}>
      <div className="container-ac">
        <div className="flex flex-col items-center text-center">
          <p
            className="font-display font-bold"
            style={{
              fontSize: "clamp(5rem, 14vw, 9rem)",
              color: "var(--ac-yellow)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            404
          </p>
          <h1 className="h2-big" style={{ marginTop: 8 }}>
            Page introuvable
          </h1>
          <p className="lede" style={{ margin: "16px auto 32px" }}>
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Button href="/" variant="primary" size="lg" arrow>
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </section>
  );
}
