"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

const formules = [
  {
    tag: "Formule 1 / 3",
    name: "Présence",
    tagline: "Démarrer en ligne rapidement avec l'essentiel — idéal pour les artisans qui veulent être trouvés sur Google sans complexité.",
    price: "1 500",
    monthly: "99",
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
    tag: "⭐ Recommandé · Formule 2 / 3",
    name: "Visibilité",
    tagline: "La formule la plus choisie. Un site sur mesure et un référencement local actif pour générer des appels réguliers.",
    price: "2 500",
    monthly: "199",
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
    tagline: "Pour s'imposer comme la référence artisan de votre secteur. Un site haut de gamme et une stratégie SEO locale intensive.",
    price: "4 000",
    monthly: "399",
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

export default function ServicesPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Tarifs transparents
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Choisissez votre <span className="text-gradient">formule.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Création du site en une fois · Abonnement mensuel sans engagement · Résiliable à tout moment.
          </motion.p>
        </div>
      </section>

      {/* Formules */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
          {formules.map((f, i) => (
            <AnimatedSection key={f.name} delay={i * 0.12}>
              <div
                className={`rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  f.highlight
                    ? "ring-2 ring-accent shadow-xl shadow-accent/10 bg-gradient-to-b from-accent/10 to-secondary"
                    : "glass"
                }`}
              >
                {/* Header */}
                <div className={`p-7 border-b ${f.highlight ? "border-accent/20" : "border-black/5"}`}>
                  <span className={`text-xs font-bold uppercase tracking-widest ${f.highlight ? "text-accent" : "text-muted"}`}>
                    {f.tag}
                  </span>
                  <h2 className="text-2xl font-black text-navy mt-2 mb-2">{f.name}</h2>
                  <p className="text-muted text-sm leading-relaxed">{f.tagline}</p>
                </div>

                {/* Pricing */}
                <div className={`px-7 py-5 grid grid-cols-2 gap-4 border-b ${f.highlight ? "border-accent/20" : "border-black/5"}`}>
                  <div>
                    <p className="text-muted text-xs uppercase tracking-wide mb-1">Création (une fois)</p>
                    <p className="text-navy font-black text-3xl">{f.price} <span className="text-base font-semibold text-muted">€ HT</span></p>
                    <p className="text-muted text-xs mt-1">Paiement en 2 fois</p>
                  </div>
                  <div>
                    <p className="text-muted text-xs uppercase tracking-wide mb-1">Abonnement</p>
                    <p className="text-navy font-black text-3xl">{f.monthly} <span className="text-base font-semibold text-muted">€ / mois</span></p>
                    <p className="text-muted text-xs mt-1">Sans engagement</p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-7 flex flex-col gap-6 flex-1">
                  {f.sections.map((section) => (
                    <div key={section.label}>
                      <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${f.highlight ? "text-accent" : "text-muted"}`}>
                        {section.label}
                      </p>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted">
                            <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-7 pb-7">
                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 group ${
                      f.highlight
                        ? "bg-accent text-navy hover:bg-yellow-400 accent-glow"
                        : "glass text-navy hover:border-accent/30"
                    }`}
                  >
                    Choisir cette formule
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 border-y border-black/5 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10–15 j", label: "Délai de livraison" },
            { value: "Sans engagement", label: "Abonnement résiliable" },
            { value: "100 %", label: "Adapté mobile" },
            { value: "Gratuit", label: "Diagnostic initial" },
          ].map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <p className="text-2xl font-black text-gradient mb-1">{item.value}</p>
              <p className="text-muted text-sm">{item.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Pas sûr de la bonne formule ?</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Je vous aide à choisir.
            </h2>
            <p className="text-muted text-lg mb-8">
              Un échange de 15 minutes suffit pour identifier ce dont vous avez besoin.
              Diagnostic gratuit et sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-navy font-bold text-lg hover:bg-yellow-400 transition-all duration-200 accent-glow group"
            >
              Prendre rendez-vous gratuitement
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
