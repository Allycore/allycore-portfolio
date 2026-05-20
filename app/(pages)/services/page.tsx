"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
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
    tag: "Recommandé · Formule 2 / 3",
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

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-16 overflow-hidden">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
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
            className="font-syne text-5xl md:text-6xl font-black mb-6 text-navy"
          >
            Choisissez votre <span className="text-gradient">formule.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-muted text-lg max-w-2xl"
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
                  <h2 className="font-syne text-2xl font-black text-navy mt-2 mb-2">{f.name}</h2>
                  <p className="text-muted text-sm leading-relaxed">{f.tagline}</p>
                </div>

                {/* Pricing */}
                <div className={`px-7 py-5 grid grid-cols-2 gap-4 border-b ${f.highlight ? "border-accent/20" : "border-black/5"}`}>
                  <div className="text-right">
                    <p className="text-muted text-xs uppercase tracking-wide mb-1">Création (une fois)</p>
                    <p className="text-navy font-black text-3xl tabular-nums">{f.price} <span className="text-base font-semibold text-muted">€ HT</span></p>
                    <p className="text-muted text-xs mt-1">Paiement en 2 fois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted text-xs uppercase tracking-wide mb-1">Abonnement</p>
                    <p className="text-accent font-black text-3xl tabular-nums">{f.monthly} <span className="text-base font-semibold text-muted">€ / mois</span></p>
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
                        ? "bg-accent text-navy hover:bg-yellow-400 hover:-translate-y-0.5 active:translate-y-0"
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

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Questions fréquentes</p>
            <h2 className="font-syne text-4xl md:text-5xl font-black text-navy">
              Vous vous demandez sûrement…
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-syne font-bold text-navy text-base md:text-lg">{faq.q}</span>
                      <ChevronDown
                        size={20}
                        className={`text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted text-sm leading-relaxed pb-5 pr-8">{faq.a}</p>
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
      <section className="py-24 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Pas sûr de la bonne formule ?</p>
            <h2 className="font-syne text-4xl md:text-5xl font-black mb-6 text-navy">
              Je vous aide à choisir.
            </h2>
            <p className="text-muted text-lg mb-8">
              Un échange de 15 minutes suffit pour identifier ce dont vous avez besoin.
              Diagnostic gratuit et sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-navy font-bold text-lg hover:bg-yellow-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
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
