"use client";

import { Wrench, Lightning, Fire } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Badge from "@/components/ui/Badge";
import TextReveal from "@/components/ui/TextReveal";

type CaseStudy = {
  num: string;
  title: string;
  icon: Icon;
  formule: string;
  description: string;
  brief: string;
  outils: string[];
  stats: { value: string; label: string }[];
};

const cases: CaseStudy[] = [
  {
    num: "Cas 01",
    title: "Marc — Plombier à Yssingeaux",
    icon: Wrench,
    formule: "Formule Visibilité",
    description:
      "Artisan reconnu localement mais totalement absent d'internet. Zéro devis entrant, que du bouche-à-oreille.",
    brief:
      "Marc n'avait aucune présence en ligne. Invisible sur Google, il ne recevait aucun devis entrant malgré la qualité de son travail.",
    outils: [
      "Site 5 pages sur mesure",
      "Google Business Profile",
      "SEO local (ville + communes)",
    ],
    stats: [
      { value: "×1.7", label: "ROI" },
      { value: "4 200 €", label: "CA en 30 j" },
      { value: "8", label: "devis reçus" },
    ],
  },
  {
    num: "Cas 02",
    title: "Sophie — Électricienne à Aubenas",
    icon: Lightning,
    formule: "Formule Visibilité",
    description:
      "Un site existait déjà, mais coincé en page 4. Personne ne la trouvait, les devis ne venaient pas.",
    brief:
      "Sophie avait un site mais restait en page 4 sur Google, sans fiche Google Business. Sa visibilité locale était quasi nulle.",
    outils: [
      "Refonte SEO on-page",
      "Google Business Profile créé",
      "Stratégie collecte d'avis",
    ],
    stats: [
      { value: "×2.7", label: "ROI" },
      { value: "6 800 €", label: "CA en 60 j" },
      { value: "24", label: "avis Google" },
    ],
  },
  {
    num: "Cas 03",
    title: "Thierry — Chauffagiste à Brioude",
    icon: Fire,
    formule: "Domination locale",
    description:
      "Marché pompe à chaleur porteur mais dominé par des concurrents mieux positionnés. Objectif : prendre la tête sur 5 villes.",
    brief:
      "Thierry visait le marché PAC en plein essor mais ses concurrents trustaient la 1ère page Google sur toutes les zones cibles.",
    outils: [
      "Site 8 pages spécialisé PAC",
      "SEO multi-zones (5 villes)",
      "4 publications/mois réseaux",
    ],
    stats: [
      { value: "×3.3", label: "ROI" },
      { value: "14 200 €", label: "CA en 90 j" },
      { value: "17", label: "devis reçus" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 150, paddingBottom: 60 }}>
        <div className="container-ac">
          <AnimatedSection direction="none">
            <Eyebrow>Réalisations</Eyebrow>
            <h1 className="h-display" style={{ marginTop: 24, maxWidth: "14ch" }}>
              <TextReveal text="Mes projets." highlight="projets" />
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Des artisans invisibles sur Google devenus les premiers de leur
              secteur. Voici comment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cas d'études */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container-ac">
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => {
              const Icon = c.icon;
              return (
                <AnimatedSection key={c.num} delay={i * 0.1}>
                  <div className="card card--hover h-full flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="card-icon">
                        <Icon size={24} />
                      </div>
                      <Badge variant="soft">{c.formule}</Badge>
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "var(--ac-yellow-deep)",
                          marginBottom: 4,
                        }}
                      >
                        {c.num}
                      </p>
                      <h2
                        className="font-display font-bold text-ink"
                        style={{ fontSize: "1.2rem", lineHeight: 1.25 }}
                      >
                        {c.title}
                      </h2>
                    </div>

                    <p className="body-text" style={{ fontSize: 14 }}>
                      {c.description}
                    </p>

                    <div
                      style={{
                        background: "var(--ac-cream)",
                        border: "1px solid var(--ac-cream-deep)",
                        borderRadius: "var(--radius-md)",
                        padding: 16,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "var(--ac-yellow-deep)",
                          marginBottom: 6,
                        }}
                      >
                        Brief client
                      </p>
                      <p className="body-text" style={{ fontSize: 13.5 }}>
                        {c.brief}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "var(--fg-3)",
                        }}
                      >
                        Outils utilisés
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.outils.map((o) => (
                          <span
                            key={o}
                            style={{
                              fontSize: 11.5,
                              fontWeight: 500,
                              padding: "5px 10px",
                              borderRadius: 999,
                              background: "var(--ac-paper)",
                              border: "1px solid var(--border-soft)",
                              color: "var(--fg-2)",
                            }}
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className="grid grid-cols-3 gap-2 text-center mt-auto"
                      style={{ borderTop: "1px solid var(--border-soft)", paddingTop: 18 }}
                    >
                      {c.stats.map((s) => (
                        <div key={s.label}>
                          <p
                            className="font-display font-bold"
                            style={{
                              fontSize: "1.05rem",
                              color: "var(--ac-yellow-deep)",
                              lineHeight: 1.1,
                            }}
                          >
                            {s.value}
                          </p>
                          <p className="text-muted" style={{ fontSize: 11, marginTop: 2 }}>
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--cream">
        <div className="container-ac text-center" style={{ maxWidth: 640 }}>
          <AnimatedSection>
            <p className="text-muted" style={{ marginBottom: 20 }}>
              Votre secteur n&apos;est pas encore représenté ?
            </p>
            <div className="flex justify-center">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Parlons de votre projet
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
