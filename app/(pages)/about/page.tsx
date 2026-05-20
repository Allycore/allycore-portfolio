"use client";

import { MagnifyingGlass, Palette, Rocket, TrendUp } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import TextReveal from "@/components/ui/TextReveal";

type Step = { icon: Icon; title: string; desc: string };

const steps: Step[] = [
  {
    icon: MagnifyingGlass,
    title: "Diagnostic gratuit",
    desc: "On fait le point sur votre visibilité actuelle : ce que vos clients trouvent quand ils vous cherchent sur Google, et ce qui vous échappe. Sans engagement, en 15 minutes.",
  },
  {
    icon: Palette,
    title: "Conception sur mesure",
    desc: "Je conçois votre site aux couleurs de votre métier : vos services, votre zone d'intervention, vos réalisations. Vous validez, je peaufine.",
  },
  {
    icon: Rocket,
    title: "Mise en ligne",
    desc: "Site en ligne en 10 à 15 jours, fiche Google Business créée et optimisée. Vous êtes visible là où vos clients cherchent.",
  },
  {
    icon: TrendUp,
    title: "Suivi continu",
    desc: "Chaque mois, je surveille vos positions, j'ajuste, je vous envoie un rapport clair. Votre site reste rapide, sécurisé et bien placé.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 150, paddingBottom: 60 }}>
        <div className="container-ac">
          <AnimatedSection direction="none">
            <Eyebrow>Qui sommes-nous</Eyebrow>
            <h1 className="h-display" style={{ marginTop: 24, maxWidth: "14ch" }}>
              <TextReveal text="Notre histoire." highlight="histoire" />
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Allycore est née d&apos;un constat simple : les artisans sont des
              métiers d&apos;avenir, mais ils restent les grands oubliés du
              numérique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Histoire */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container-ac" style={{ maxWidth: 820 }}>
          <AnimatedSection>
            <div className="card card--cream flex flex-col gap-4">
              <p className="body-text">
                Dans un monde où les clients cherchent tout sur Google, un artisan
                sans présence en ligne perd des chantiers chaque jour — sans même
                le savoir. Pendant ce temps, des concurrents parfois moins
                compétents captent les appels, simplement parce qu&apos;ils
                apparaissent en premier.
              </p>
              <p className="body-text">
                Face à ce déséquilibre, j&apos;ai créé Allycore avec une mission
                claire : donner aux artisans du bâtiment la visibilité qu&apos;ils
                méritent — sans complexité, sans jargon, et sans qu&apos;ils aient
                à devenir des experts du numérique. Vous faites votre métier. Je
                fais le mien.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="h2-big"
              style={{ marginTop: 56, maxWidth: "20ch" }}
            >
              <TextReveal
                text="Ces métiers sont indispensables. Il est temps qu'ils soient trouvés."
                highlight="trouvés"
              />
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Méthode */}
      <section className="section section--cream">
        <div className="container-ac" style={{ maxWidth: 820 }}>
          <AnimatedSection style={{ marginBottom: 48 }}>
            <Eyebrow>Comment je travaille</Eyebrow>
            <h2 className="h2-big" style={{ marginTop: 20 }}>
              <TextReveal text="Une méthode simple, en 4 étapes." />
            </h2>
          </AnimatedSection>

          <div className="flex flex-col">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <AnimatedSection key={step.title} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="card-icon" style={{ background: "#fff", border: "1px solid var(--border-soft)" }}>
                        <Icon size={22} color="var(--ac-ink)" />
                      </div>
                      {!isLast && (
                        <div
                          style={{
                            width: 1,
                            flex: 1,
                            background: "var(--border-strong)",
                            margin: "8px 0",
                          }}
                        />
                      )}
                    </div>
                    <div style={{ paddingBottom: isLast ? 0 : 40 }}>
                      <div className="flex items-center gap-3" style={{ marginBottom: 6 }}>
                        <span
                          className="font-mono font-bold"
                          style={{ fontSize: 13, color: "var(--ac-yellow-deep)" }}
                        >
                          0{i + 1}
                        </span>
                        <h3
                          className="font-display font-bold text-ink"
                          style={{ fontSize: "1.25rem" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="body-text" style={{ fontSize: 14.5, maxWidth: "52ch" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="section section--paper">
        <div className="container-ac" style={{ maxWidth: 820 }}>
          <AnimatedSection>
            <div
              className="relative overflow-hidden"
              style={{
                background: "var(--ac-ink)",
                borderRadius: 28,
                padding: "48px 44px",
                color: "var(--fg-on-dark)",
              }}
            >
              <div
                aria-hidden="true"
                className="pattern-dots-bg--light"
                style={{ position: "absolute", inset: 0, opacity: 0.5 }}
              />
              <div className="relative flex flex-col gap-4">
                <Eyebrow light>Mon engagement</Eyebrow>
                <p
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "var(--fg-on-dark)",
                  }}
                >
                  Un seul interlocuteur, du premier appel au suivi mensuel.
                </p>
                <p style={{ fontSize: 16, color: "rgba(246,244,236,0.8)", lineHeight: 1.6, maxWidth: "58ch" }}>
                  Pas de service client anonyme, pas de jargon technique. Vous me
                  parlez directement, je vous réponds clairement et rapidement.
                  Mon objectif n&apos;est pas de vous livrer un site et de
                  disparaître — c&apos;est de faire sonner votre téléphone, mois
                  après mois.
                </p>
                <div style={{ marginTop: 12 }}>
                  <Button href="/contact" variant="primary" arrow>
                    Faisons connaissance
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
