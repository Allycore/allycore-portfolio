"use client";

import {
  CalendarBlank,
  EnvelopeSimple,
  FacebookLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Eyebrow from "@/components/ui/Eyebrow";
import TextReveal from "@/components/ui/TextReveal";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 150, paddingBottom: 60 }}>
        <div className="container-ac">
          <AnimatedSection direction="none">
            <Eyebrow>Diagnostic gratuit</Eyebrow>
            <h1 className="h-display" style={{ marginTop: 24, maxWidth: "16ch" }}>
              <TextReveal text="Parlons de votre visibilité." highlight="visibilité" />
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              15 minutes pour faire le point sur votre situation locale — sans
              engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Options */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container-ac" style={{ maxWidth: 1080 }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Calendly */}
            <AnimatedSection delay={0}>
              <a
                href="https://calendly.com/allycore-service"
                target="_blank"
                rel="noopener noreferrer"
                className="card card--hover h-full flex flex-col gap-5"
              >
                <div className="card-icon">
                  <CalendarBlank size={24} />
                </div>
                <div>
                  <p
                    className="font-display font-bold text-ink"
                    style={{ fontSize: "1.2rem", marginBottom: 6 }}
                  >
                    Réserver un appel
                  </p>
                  <p className="body-text" style={{ fontSize: 14 }}>
                    Choisissez un créneau directement dans mon agenda. Appel de
                    15 min, gratuit.
                  </p>
                </div>
                <span
                  className="btn btn--primary"
                  style={{ marginTop: "auto", alignSelf: "flex-start" }}
                >
                  Choisir un créneau
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </AnimatedSection>

            {/* Email */}
            <AnimatedSection delay={0.1}>
              <a
                href="mailto:allycore.service@gmail.com"
                className="card card--hover h-full flex flex-col gap-5"
              >
                <div className="card-icon">
                  <EnvelopeSimple size={24} />
                </div>
                <div>
                  <p
                    className="font-display font-bold text-ink"
                    style={{ fontSize: "1.2rem", marginBottom: 6 }}
                  >
                    Envoyer un email
                  </p>
                  <p className="body-text" style={{ fontSize: 14 }}>
                    Décrivez votre activité et ce que vous recherchez. Réponse
                    sous 24 h ouvrées.
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 font-semibold"
                  style={{ marginTop: "auto", color: "var(--ac-yellow-deep)", fontSize: 14 }}
                >
                  allycore.service@gmail.com
                  <ArrowRight size={15} weight="bold" />
                </span>
              </a>
            </AnimatedSection>

            {/* Facebook */}
            <AnimatedSection delay={0.2}>
              <a
                href="https://www.facebook.com/profile.php?id=61590192987262"
                target="_blank"
                rel="noopener noreferrer"
                className="card card--hover h-full flex flex-col gap-5"
              >
                <div className="card-icon">
                  <FacebookLogo size={24} />
                </div>
                <div>
                  <p
                    className="font-display font-bold text-ink"
                    style={{ fontSize: "1.2rem", marginBottom: 6 }}
                  >
                    Sur Facebook
                  </p>
                  <p className="body-text" style={{ fontSize: 14 }}>
                    Écrivez-moi sur Messenger ou suivez l&apos;actualité
                    d&apos;Allycore.
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 font-semibold"
                  style={{ marginTop: "auto", color: "var(--ac-yellow-deep)", fontSize: 14 }}
                >
                  Voir la page
                  <ArrowRight size={15} weight="bold" />
                </span>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.25}>
            <p
              className="text-muted text-center text-sm"
              style={{ marginTop: 32 }}
            >
              Diagnostic toujours gratuit · Aucun engagement · Réponse garantie
              sous 24 h
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
