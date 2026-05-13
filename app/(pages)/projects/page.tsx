"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Flame, ArrowRight } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    num: "CAS #01",
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
    delay: 0,
  },
  {
    num: "CAS #02",
    title: "Sophie — Électricienne à Aubenas",
    icon: Zap,
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
    delay: 0.1,
  },
  {
    num: "CAS #03",
    title: "Thierry — Chauffagiste à Brioude",
    icon: Flame,
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
    delay: 0.2,
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Réalisations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-syne text-5xl md:text-6xl font-black mb-6 text-navy"
          >
            Mes <span className="text-gradient">projets</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            Des artisans invisibles sur Google devenus les premiers de leur secteur.
            Voici comment.
          </motion.p>
        </div>
      </section>

      {/* Cartes cas d'études */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ num, title, icon: Icon, formule, description, brief, outils, stats, delay }) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-8 border border-black/5 flex flex-col gap-6"
            >
              {/* En-tête carte */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-accent" />
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold whitespace-nowrap">
                  {formule}
                </span>
              </div>

              {/* Titre */}
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  {num}
                </p>
                <h2 className="font-syne text-navy font-black text-xl leading-tight">{title}</h2>
              </div>

              {/* Description courte */}
              <p className="text-muted text-sm leading-relaxed">{description}</p>

              {/* Brief client */}
              <div className="bg-secondary rounded-2xl p-4 flex flex-col gap-2">
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                  Brief client
                </span>
                <p className="text-muted text-sm leading-relaxed">{brief}</p>
              </div>

              {/* Outils utilisés */}
              <div className="flex flex-col gap-2">
                <span className="text-navy text-xs font-semibold uppercase tracking-widest">
                  Outils utilisés
                </span>
                <div className="flex flex-wrap gap-2">
                  {outils.map((outil) => (
                    <span
                      key={outil}
                      className="px-3 py-1 rounded-lg glass text-navy text-xs font-medium border border-black/5"
                    >
                      {outil}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bande résultats */}
              <div className="border-t border-black/5 pt-5 mt-auto grid grid-cols-3 gap-2 text-center">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-accent font-black text-lg leading-tight">{value}</p>
                    <p className="text-muted text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA finale */}
      <section className="pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto px-6 text-center"
        >
          <p className="text-muted text-sm mb-4">
            Votre secteur n'est pas encore représenté ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-navy font-bold hover:bg-yellow-400 transition-all duration-200 accent-glow group text-sm"
          >
            Parlons de votre projet
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
