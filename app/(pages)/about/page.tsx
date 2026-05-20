"use client";

import { motion } from "framer-motion";
import { Search, Palette, Rocket, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    icon: Search,
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
    icon: TrendingUp,
    title: "Suivi continu",
    desc: "Chaque mois, je surveille vos positions, j'ajuste, je vous envoie un rapport clair. Votre site reste rapide, sécurisé et bien placé.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Qui sommes-nous
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-syne text-5xl md:text-6xl font-black mb-6 text-navy"
          >
            Notre <span className="text-gradient">histoire.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-muted text-lg max-w-xl"
          >
            Allycore est née d'un constat simple : les artisans sont des métiers
            d'avenir, mais ils restent les grands oubliés du numérique.
          </motion.p>
        </div>
      </section>

      {/* Histoire */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-12">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 flex flex-col gap-4">
              <p className="text-muted text-base leading-relaxed">
                Dans un monde où les clients cherchent tout sur Google, un artisan sans
                présence en ligne perd des chantiers chaque jour — sans même le savoir.
                Pendant ce temps, des concurrents parfois moins compétents captent les
                appels, simplement parce qu'ils apparaissent en premier.
              </p>
              <p className="text-muted text-base leading-relaxed">
                Face à ce déséquilibre, j'ai créé Allycore avec une mission claire :
                donner aux artisans du bâtiment la visibilité qu'ils méritent — sans
                complexité, sans jargon, et sans qu'ils aient à devenir des experts du
                numérique. Vous faites votre métier. Je fais le mien.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-navy text-xl font-bold leading-relaxed">
                Plombiers, électriciens, chauffagistes — et tous les artisans du
                bâtiment. Ces métiers sont indispensables.
              </p>
              <p className="text-accent font-black text-2xl mt-3">
                Il est temps qu'ils soient trouvés.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-24 bg-secondary/40 border-y border-black/5">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Comment je travaille
            </p>
            <h2 className="font-syne text-4xl md:text-5xl font-black text-navy">
              Une méthode simple, en 4 étapes.
            </h2>
          </AnimatedSection>

          <div className="flex flex-col">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <AnimatedSection key={step.title} delay={i * 0.1}>
                  <div className="flex gap-5">
                    {/* Colonne icône + ligne */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-accent" />
                      </div>
                      {!isLast && <div className="w-px flex-1 bg-black/10 my-2" />}
                    </div>
                    {/* Contenu */}
                    <div className={isLast ? "pb-0" : "pb-10"}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent font-black text-sm tabular-nums">
                          0{i + 1}
                        </span>
                        <h3 className="font-syne text-navy font-bold text-xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm leading-relaxed max-w-lg">
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
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-10 flex flex-col gap-4">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest">
                Mon engagement
              </p>
              <p className="text-navy font-syne font-bold text-2xl leading-snug">
                Un seul interlocuteur, du premier appel au suivi mensuel.
              </p>
              <p className="text-muted text-base leading-relaxed">
                Pas de service client anonyme, pas de jargon technique. Vous me
                parlez directement, je vous réponds clairement et rapidement.
                Mon objectif n'est pas de vous livrer un site et de disparaître —
                c'est de faire sonner votre téléphone, mois après mois.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
