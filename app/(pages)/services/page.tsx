"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CaretDown } from "@phosphor-icons/react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Badge from "@/components/ui/Badge";
import TextReveal from "@/components/ui/TextReveal";

const formules = [
  {
    tag: "Formule 1 / 3",
    name: "Présence",
    tagline:
      "Démarrer en ligne rapidement avec l'essentiel — idéal pour les artisans qui veulent être trouvés sur Google sans complexité.",
    price: "500",
    monthly: "49",
    highlight: false,
    sections: [
      {
        label: "Site web",
        items: [
          "3 pages (Accueil, Services, Contact)",
          "Template professionnel adapté à votre activité",
          "Formulaire de demande de devis en ligne",
          "Site 100 % adapté mobile et tablette",
          "Hébergement + nom de domaine inclus (1 an, puis couvert par l'abonnement)",
          "Certificat SSL (cadenas sécurisé)",
        ],
      },
      {
        label: "Visibilité locale",
        items: [
          "SEO on-page de base (titres, balises, mots-clés)",
          "Création de votre fiche Google Business",
        ],
      },
      {
        label: "Support",
        items: [
          "Support par email (réponse sous 48 h)",
          "1 round de modifications après livraison",
          "Rapport Google Search Console mensuel",
        ],
      },
    ],
  },
  {
    tag: "Recommandé · Formule 2 / 3",
    name: "Visibilité",
    tagline:
      "La formule la plus choisie. Un site sur mesure et un référencement local actif pour générer des appels réguliers.",
    price: "990",
    monthly: "89",
    highlight: true,
    sections: [
      {
        label: "Site web",
        items: [
          "5 pages sur mesure (Accueil, Services, Réalisations, Zone d'intervention, Contact)",
          "Design aux couleurs de votre entreprise (logo, charte)",
          "Formulaire de devis + galerie photos de réalisations",
          "Site 100 % adapté mobile et tablette",
          "Hébergement + nom de domaine inclus (1 an, puis couvert par l'abonnement)",
          "Certificat SSL (cadenas sécurisé)",
        ],
      },
      {
        label: "Visibilité locale",
        items: [
          "SEO on-page complet (mots-clés locaux, structure, vitesse)",
          "Fiche Google Business créée et optimisée",
          "Ciblage sur 2 à 3 villes de votre zone d'intervention",
          "Google Search Console configurée",
        ],
      },
      {
        label: "Support",
        items: [
          "Support par email (réponse sous 24 h)",
          "2 rounds de modifications après livraison",
          "Rapport mensuel de visibilité (positions, clics)",
        ],
      },
    ],
  },
  {
    tag: "Premium · Formule 3 / 3",
    name: "Domination locale",
    tagline:
      "Pour s'imposer comme la référence artisan de votre secteur. Un site haut de gamme et une stratégie SEO locale intensive.",
    price: "1 900",
    monthly: "149",
    highlight: false,
    sections: [
      {
        label: "Site web",
        items: [
          "8 pages sur mesure haut de gamme (pages villes + services dédiés)",
          "Design premium aux couleurs de votre entreprise",
          "Formulaire de devis + section témoignages clients",
          "Galerie réalisations + structure blog prête à l'emploi",
          "Site 100 % adapté mobile, vitesse optimisée",
          "Hébergement + nom de domaine inclus (1 an, puis couvert par l'abonnement)",
          "Certificat SSL (cadenas sécurisé)",
        ],
      },
      {
        label: "Visibilité locale intensive",
        items: [
          "SEO local multi-zones (jusqu'à 4 villes ciblées)",
          "Fiche Google Business créée et optimisée",
          "Google Search Console configurée et suivie",
        ],
      },
      {
        label: "Support prioritaire",
        items: [
          "Support prioritaire par email (réponse sous 12 h en jours ouvrés)",
          "3 rounds de modifications après livraison",
          "Rapport mensuel détaillé (positions, visites, formulaires)",
          "Maintenance technique incluse 12 mois (puis couverte par l'abonnement)",
        ],
      },
    ],
  },
];

const garanties = [
  { value: "10–15 j", label: "Délai de livraison" },
  { value: "Sans engagement", label: "Abonnement résiliable" },
  { value: "100 %", label: "Adapté mobile" },
  { value: "Gratuit", label: "Diagnostic initial" },
];

const faqs = [
  {
    q: "J'ai déjà des clients par bouche-à-oreille, pourquoi un site ?",
    a: "Le bouche-à-oreille est précieux, mais il a une limite : il ne travaille que quand on parle de vous. Un site vous rend visible 24h/24 auprès des gens qui cherchent un artisan maintenant, sur Google. Les deux se complètent — le site capte les clients que le bouche-à-oreille ne touche pas.",
  },
  {
    q: "Combien de temps faut-il pour avoir mon site ?",
    a: "Entre 10 et 15 jours ouvrés une fois que j'ai vos informations et vos photos. Vous n'avez rien à gérer techniquement : je m'occupe de la conception, de la mise en ligne et du référencement.",
  },
  {
    q: "Je n'y connais rien en informatique, c'est compliqué pour moi ?",
    a: "Non, et c'est justement le principe. Vous n'avez pas une ligne de code à toucher. Je vous demande simplement de me parler de votre métier et de m'envoyer quelques photos. Tout le reste, c'est mon travail.",
  },
  {
    q: "Et si je veux modifier mon site après la livraison ?",
    a: "C'est prévu dans l'abonnement mensuel. Un changement d'horaires, une nouvelle photo, un service à ajouter : vous m'envoyez un message, je m'en occupe. Aucun logiciel à apprendre.",
  },
  {
    q: "Pourquoi un abonnement mensuel en plus de la création ?",
    a: "L'abonnement couvre l'hébergement, le nom de domaine, la sécurité, les sauvegardes et le suivi de votre référencement local. Un site a besoin d'être entretenu pour rester rapide, sécurisé et bien positionné. L'abonnement est sans engagement, résiliable à tout moment.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section style={{ paddingTop: 150, paddingBottom: 60 }}>
        <div className="container-ac">
          <AnimatedSection direction="none">
            <Eyebrow>Tarifs transparents</Eyebrow>
            <h1 className="h-display" style={{ marginTop: 24, maxWidth: "16ch" }}>
              <TextReveal text="Choisissez votre formule." highlight="formule" />
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Création du site en une fois · Abonnement mensuel sans engagement ·
              Résiliable à tout moment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Formules */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container-ac">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {formules.map((f, i) => (
              <AnimatedSection key={f.name} delay={i * 0.1}>
                <div
                  className={`card h-full flex flex-col ${f.highlight ? "card--cream" : ""}`}
                  style={
                    f.highlight
                      ? { border: "1.5px solid var(--ac-yellow)", boxShadow: "var(--shadow-md)" }
                      : undefined
                  }
                >
                  {/* En-tête */}
                  <div>
                    {f.highlight ? (
                      <Badge variant="yellow">{f.tag}</Badge>
                    ) : (
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "var(--fg-3)",
                        }}
                      >
                        {f.tag}
                      </span>
                    )}
                    <h2
                      className="font-display font-bold text-ink"
                      style={{ fontSize: "1.75rem", margin: "12px 0 8px", letterSpacing: "-0.02em" }}
                    >
                      {f.name}
                    </h2>
                    <p className="body-text" style={{ fontSize: 14 }}>
                      {f.tagline}
                    </p>
                  </div>

                  {/* Tarifs */}
                  <div
                    className="grid grid-cols-2 gap-4"
                    style={{
                      margin: "20px 0",
                      paddingTop: 18,
                      borderTop: "1px solid var(--border-soft)",
                    }}
                  >
                    <div>
                      <p className="text-muted" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Création
                      </p>
                      <p
                        className="font-display font-bold text-ink"
                        style={{ fontSize: "1.9rem", lineHeight: 1.1 }}
                      >
                        {f.price}
                        <span className="text-muted" style={{ fontSize: 14, fontWeight: 600 }}>
                          {" "}€
                        </span>
                      </p>
                      <p className="text-muted" style={{ fontSize: 11 }}>
                        en 2 fois
                      </p>
                    </div>
                    <div>
                      <p className="text-muted" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Abonnement
                      </p>
                      <p
                        className="font-display font-bold"
                        style={{ fontSize: "1.9rem", lineHeight: 1.1, color: "var(--ac-yellow-deep)" }}
                      >
                        {f.monthly}
                        <span className="text-muted" style={{ fontSize: 14, fontWeight: 600 }}>
                          {" "}€/mois
                        </span>
                      </p>
                      <p className="text-muted" style={{ fontSize: 11 }}>
                        sans engagement
                      </p>
                    </div>
                  </div>

                  {/* Détail */}
                  <div className="flex flex-col gap-5 flex-1">
                    {f.sections.map((section) => (
                      <div key={section.label}>
                        <p
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "var(--fg-3)",
                            marginBottom: 10,
                          }}
                        >
                          {section.label}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-muted"
                              style={{ fontSize: 13.5, lineHeight: 1.5 }}
                            >
                              <Check
                                size={15}
                                weight="bold"
                                color="var(--ac-yellow-deep)"
                                style={{ flexShrink: 0, marginTop: 2 }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: 24 }}>
                    <Button
                      href="/contact"
                      variant={f.highlight ? "primary" : "ghost"}
                      arrow
                      className="w-full justify-center"
                    >
                      Choisir cette formule
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="section--cream" style={{ padding: "56px 0", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <div className="container-ac">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {garanties.map((g, i) => (
              <AnimatedSection key={g.label} delay={i * 0.08}>
                <p
                  className="font-display font-bold text-ink"
                  style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}
                >
                  {g.value}
                </p>
                <p className="text-muted text-sm mt-1">{g.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--paper">
        <div className="container-ac" style={{ maxWidth: 820 }}>
          <AnimatedSection style={{ marginBottom: 40 }}>
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="h2-big" style={{ marginTop: 20 }}>
              <TextReveal text="Vous vous demandez sûrement…" />
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div
              className="flex flex-col"
              style={{
                borderTop: "1px solid var(--border-soft)",
                borderBottom: "1px solid var(--border-soft)",
              }}
            >
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    style={i > 0 ? { borderTop: "1px solid var(--border-soft)" } : undefined}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left"
                      style={{ padding: "20px 0" }}
                      aria-expanded={isOpen}
                    >
                      <span
                        className="font-display font-bold text-ink"
                        style={{ fontSize: "1.05rem" }}
                      >
                        {faq.q}
                      </span>
                      <CaretDown
                        size={20}
                        weight="bold"
                        color="var(--ac-yellow-deep)"
                        style={{
                          flexShrink: 0,
                          transition: "transform 0.3s var(--ease-out)",
                          transform: isOpen ? "rotate(180deg)" : "none",
                        }}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <p
                            className="body-text"
                            style={{ paddingBottom: 20, paddingRight: 32, fontSize: 14.5 }}
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--cream">
        <div className="container-ac text-center" style={{ maxWidth: 720 }}>
          <AnimatedSection>
            <Eyebrow>Pas sûr de la bonne formule ?</Eyebrow>
            <h2 className="h2-big" style={{ marginTop: 20 }}>
              <TextReveal text="Je vous aide à choisir." />
            </h2>
            <p className="lede" style={{ margin: "20px auto 32px" }}>
              Un échange de 15 minutes suffit pour identifier ce dont vous avez
              besoin. Diagnostic gratuit et sans engagement.
            </p>
            <div className="flex justify-center">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Prendre rendez-vous
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
