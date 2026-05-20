"use client";

import {
  Globe,
  MapPin,
  Lightning,
  Star,
  CheckCircle,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Stat from "@/components/ui/Stat";
import BrowserMockup from "@/components/ui/BrowserMockup";
import TextReveal from "@/components/ui/TextReveal";

const heroChecks = [
  "Livraison en 10 à 15 jours",
  "Diagnostic gratuit, sans engagement",
  "Indépendant français",
];

const trust = [
  "Plomberie Mercier",
  "Électricité Bernard",
  "Toiture Arnaud",
  "Chauffage Vannier",
  "Maçonnerie Lemoine",
];

const stats = [
  { value: 87, suffix: " %", label: "Des recherches artisan se font sur Google" },
  { value: 3, suffix: "×", label: "Plus de devis avec un site optimisé" },
  { value: 15, suffix: " j", label: "Délai maximum de mise en ligne" },
  { value: 100, suffix: " %", label: "Adapté mobile et tablette" },
];

const highlights = [
  {
    icon: Globe,
    title: "Site web professionnel",
    desc: "3 à 8 pages sur mesure, aux couleurs de votre entreprise, livré en 10 à 15 jours. Conçu pour convertir, pas pour faire joli.",
  },
  {
    icon: MapPin,
    title: "Référencement local",
    desc: "Fiche Google Business créée et optimisée. Vos clients vous trouvent quand ils cherchent un artisan près de chez eux.",
  },
  {
    icon: Lightning,
    title: "Résultats rapides",
    desc: "Un chantier suffit pour rentabiliser. Votre téléphone sonne — sans que vous ayez à vous en occuper.",
  },
];

const reviews = [
  {
    name: "Karim B.",
    role: "Plombier indépendant — Lyon",
    text: "Avant je n'avais rien sur internet. Maintenant je reçois 3 à 4 demandes de devis par semaine depuis Google.",
  },
  {
    name: "David M.",
    role: "Électricien — Bordeaux",
    text: "Livré en 12 jours chrono. Le site est propre, ma fiche Google est en tête sur ma ville. Très pro.",
  },
  {
    name: "Sébastien R.",
    role: "Chauffagiste — Nantes",
    text: "J'avais peur que ce soit compliqué. C'est lui qui gère tout. Moi je travaille, les devis arrivent.",
  },
];

export default function HomePage() {
  const LeadIcon = highlights[0].icon;

  return (
    <>
      {/* Hero — Editorial */}
      <section className="overflow-hidden" style={{ paddingTop: 150, paddingBottom: 90 }}>
        <div className="container-ac">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
            {/* Texte */}
            <AnimatedSection direction="none">
              <Eyebrow>Sites web · SEO · pour artisans</Eyebrow>
              <h1 className="h-display" style={{ marginTop: 24 }}>
                <TextReveal
                  text="Votre site web, rentable dès le premier chantier."
                  highlight="rentable"
                />
              </h1>
              <p className="lede" style={{ margin: "24px 0" }}>
                Pour les plombiers, électriciens, chauffagistes et artisans du
                bâtiment qui veulent être trouvés sur Google — sans s&apos;en occuper.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginTop: 32 }}>
                <Button href="/contact" variant="primary" size="lg" arrow>
                  Diagnostic gratuit
                </Button>
                <Button href="/services" variant="ghost" size="lg">
                  Voir les formules
                </Button>
              </div>
              <div
                className="flex flex-wrap gap-x-7 gap-y-3"
                style={{ marginTop: 44, fontSize: 13, color: "var(--fg-3)" }}
              >
                {heroChecks.map((c) => (
                  <span key={c} className="inline-flex items-center gap-2">
                    <CheckCircle size={18} weight="fill" color="var(--ac-yellow-deep)" />
                    {c}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Visuel */}
            <AnimatedSection direction="none" delay={0.15}>
              <div className="relative hidden md:block">
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -26,
                    left: -26,
                    right: 30,
                    bottom: 30,
                    background: "var(--ac-yellow)",
                    borderRadius: 24,
                    transform: "rotate(-2deg)",
                    zIndex: 0,
                  }}
                />
                <BrowserMockup url="google.fr/search" className="relative" style={{ zIndex: 1 }}>
                  <div className="flex flex-col gap-3.5">
                    {/* Barre de recherche */}
                    <div className="flex items-center gap-2 rounded-full border border-line px-3.5 py-2">
                      <MagnifyingGlass size={14} color="var(--ac-muted)" />
                      <span className="text-xs text-ink">plombier yssingeaux</span>
                    </div>

                    {/* Résultat 1 — l'artisan, en tête */}
                    <div
                      className="rounded-xl p-3"
                      style={{
                        background: "var(--ac-cream)",
                        border: "1px solid var(--ac-cream-deep)",
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] text-muted font-mono">
                          plomberie-martin.fr
                        </span>
                        <span
                          className="badge badge--yellow"
                          style={{ fontSize: 9, padding: "3px 8px" }}
                        >
                          1ʳᵉ position
                        </span>
                      </div>
                      <p className="font-display font-bold text-ink text-sm mt-1 leading-snug">
                        Plomberie Martin — Dépannage 7j/7
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={10} weight="fill" color="var(--ac-yellow)" />
                          ))}
                        </div>
                        <span className="text-[10px] text-muted">4,9 · 47 avis</span>
                      </div>
                    </div>

                    {/* Concurrents — estompés */}
                    {["plomberie-dupont.fr", "sos-plomberie-43.fr"].map((u) => (
                      <div key={u} className="flex flex-col gap-1.5 opacity-40">
                        <span className="text-[9px] text-muted font-mono">{u}</span>
                        <span className="rounded bg-line" style={{ height: 8, width: "70%" }} />
                        <span className="rounded bg-line" style={{ height: 6, width: "90%" }} />
                      </div>
                    ))}
                  </div>
                </BrowserMockup>
                <div
                  style={{
                    position: "absolute",
                    bottom: -24,
                    left: -28,
                    zIndex: 2,
                    background: "var(--ac-ink)",
                    color: "var(--fg-on-dark)",
                    borderRadius: 16,
                    padding: "14px 18px",
                    boxShadow: "var(--shadow-lg)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <span
                    className="font-display font-bold"
                    style={{
                      fontSize: 28,
                      color: "var(--ac-yellow)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    +180 %
                  </span>
                  <span style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.3 }}>
                    visites Google
                    <br />
                    en 90 jours
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bande de confiance */}
      <section style={{ background: "var(--ac-ink)", color: "var(--fg-on-dark)", padding: "30px 0" }}>
        <div className="container-ac">
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
            <span
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                opacity: 0.55,
              }}
            >
              Ils nous font confiance
            </span>
            {trust.map((n) => (
              <span
                key={n}
                className="font-display font-bold"
                style={{ fontSize: 16, letterSpacing: "-0.02em", opacity: 0.65 }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights — bento */}
      <section className="section section--paper">
        <div className="container-ac">
          <AnimatedSection className="max-w-2xl" style={{ marginBottom: 56 }}>
            <Eyebrow>Ce que vous obtenez</Eyebrow>
            <h2 className="h2-big" style={{ marginTop: 20 }}>
              <TextReveal text="Tout ce qu'il faut pour être trouvé." />
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Un site clé en main et un référencement local continu — vous vous
              occupez de vos chantiers, je m&apos;occupe du reste.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Carte large */}
            <AnimatedSection className="md:col-span-2">
              <div className="card card--hover h-full flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="card-icon" style={{ flexShrink: 0 }}>
                  <LeadIcon size={26} />
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-ink"
                    style={{ fontSize: "1.35rem" }}
                  >
                    {highlights[0].title}
                  </h3>
                  <p className="body-text" style={{ marginTop: 8, maxWidth: "52ch" }}>
                    {highlights[0].desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 2 cartes */}
            {highlights.slice(1).map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={(i + 1) * 0.12}>
                  <div className="card card--hover h-full">
                    <div className="card-icon">
                      <Icon size={24} />
                    </div>
                    <h3
                      className="font-display font-bold text-ink"
                      style={{ fontSize: "1.35rem", marginTop: 16 }}
                    >
                      {item.title}
                    </h3>
                    <p className="body-text" style={{ marginTop: 10 }}>
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--cream">
        <div className="container-ac">
          <AnimatedSection>
            <div className="grid lg:grid-cols-[1.2fr_2fr] gap-12 items-center mb-12">
              <div>
                <Eyebrow>Quelques chiffres</Eyebrow>
                <h2 className="h2-big" style={{ marginTop: 20 }}>
                  <TextReveal text="Pas du marketing. Des résultats." highlight="résultats" />
                </h2>
              </div>
              <p className="lede">
                Un site d&apos;artisan bien conçu et bien référencé change
                concrètement le nombre d&apos;appels reçus. Voici les ordres de
                grandeur à viser.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08}>
                <Stat value={s.value} suffix={s.suffix} label={s.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section section--paper">
        <div className="container-ac">
          <AnimatedSection className="max-w-2xl" style={{ marginBottom: 56 }}>
            <Eyebrow>Ils nous font confiance</Eyebrow>
            <h2 className="h2-big" style={{ marginTop: 20 }}>
              <TextReveal text="Ce que disent les artisans." />
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 0.12}>
                <div className="card h-full flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={15} weight="fill" color="var(--ac-yellow)" />
                    ))}
                  </div>
                  <p className="body-text flex-1">&laquo;&nbsp;{r.text}&nbsp;&raquo;</p>
                  <div>
                    <p className="font-semibold text-ink text-sm">{r.name}</p>
                    <p className="text-muted text-xs">{r.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="section section--cream">
        <div className="container-ac">
          <AnimatedSection>
            <div
              className="relative overflow-hidden"
              style={{
                background: "var(--ac-ink)",
                borderRadius: 32,
                padding: "64px 48px",
                color: "var(--fg-on-dark)",
              }}
            >
              <div
                aria-hidden="true"
                className="pattern-dots-bg--light"
                style={{ position: "absolute", inset: 0, opacity: 0.6 }}
              />
              <div className="relative grid lg:grid-cols-[2fr_1fr] gap-10 items-center">
                <div>
                  <Eyebrow light>Diagnostic gratuit</Eyebrow>
                  <h2 className="h2-big" style={{ marginTop: 20, color: "var(--fg-on-dark)" }}>
                    Prêt à être visible sur Google ?
                  </h2>
                  <p
                    style={{
                      fontSize: 17,
                      color: "rgba(246,244,236,0.8)",
                      lineHeight: 1.6,
                      maxWidth: "52ch",
                      marginTop: 20,
                    }}
                  >
                    Je regarde votre situation locale et vous dis exactement ce
                    qui manque — sans engagement, en 15 minutes.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <Button href="/contact" variant="primary" size="lg" arrow>
                    Réserver un diagnostic
                  </Button>
                  <Button href="/about" variant="ghost-light" size="lg">
                    Faire connaissance
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
