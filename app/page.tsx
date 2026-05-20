"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Zap, Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "10–15", label: "jours pour être en ligne" },
  { value: "87 %", label: "des recherches artisan se font sur Google" },
  { value: "3×", label: "plus de devis reçus avec un site optimisé" },
  { value: "1–2", label: "chantiers pour rentabiliser l'offre" },
];

const highlights = [
  {
    icon: Globe,
    title: "Site web professionnel",
    desc: "3 à 8 pages sur mesure, adapté à votre activité, livré en 10 à 15 jours. Design aux couleurs de votre entreprise.",
  },
  {
    icon: MapPin,
    title: "Référencement local",
    desc: "Fiche Google Business créée et optimisée. Vos clients vous trouvent quand ils cherchent un artisan près de chez eux.",
  },
  {
    icon: Zap,
    title: "Résultats rapides",
    desc: "Un chantier suffit pour rentabiliser. Votre téléphone sonne — sans que vous ayez à vous en occuper.",
  },
];

const reviews = [
  {
    name: "Karim B.",
    role: "Plombier indépendant — Lyon",
    text: "Avant je n'avais rien sur internet. Maintenant je reçois 3 à 4 demandes de devis par semaine depuis Google.",
    stars: 5,
  },
  {
    name: "David M.",
    role: "Électricien — Bordeaux",
    text: "Livré en 12 jours chrono. Le site est propre, ma fiche Google est en tête sur ma ville. Très pro.",
    stars: 5,
  },
  {
    name: "Sébastien R.",
    role: "Chauffagiste — Nantes",
    text: "J'avais peur que ce soit compliqué. C'est lui qui gère tout. Moi je travaille, les devis arrivent.",
    stars: 5,
  },
];

export default function HomePage() {
  const LeadIcon = highlights[0].icon;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Disponible — livraison en 10 à 15 jours
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-syne text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-navy"
            >
              Votre site web,
              <br />
              <span className="text-gradient">rentable</span> dès le
              <br />
              premier chantier.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-muted text-lg leading-relaxed mb-6 max-w-md"
            >
              Pour les plombiers, électriciens, chauffagistes et artisans du bâtiment
              qui veulent être trouvés sur Google — sans s'en occuper.
            </motion.p>

            {/* Target tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["Plombiers", "Électriciens", "Chauffagistes", "Artisans du bâtiment"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg glass text-muted text-xs font-medium">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-navy font-bold hover:bg-yellow-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                Diagnostic gratuit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-navy font-semibold hover:border-accent/30 transition-all duration-200"
              >
                Voir les formules
              </Link>
            </motion.div>
          </div>

          {/* Visual — maquette navigateur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block relative"
          >
            <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden glass">
              {/* Barre navigateur */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-black/5 bg-white/60">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]/70" />
                </div>
                <div className="flex-1 px-3 py-1 rounded-md bg-black/5 text-[11px] text-muted">
                  plomberie-martin.fr
                </div>
              </div>
              {/* Contenu mini-site */}
              <div className="p-6 bg-gradient-to-b from-white to-secondary/50 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-syne font-bold text-navy text-sm">Plomberie Martin</span>
                  <span className="text-[10px] text-muted">Accueil · Services · Contact</span>
                </div>
                <div>
                  <p className="font-syne font-black text-navy text-2xl leading-tight">
                    Dépannage plomberie <span className="text-gradient">7j/7</span>
                  </p>
                  <p className="text-muted text-xs mt-1.5 leading-relaxed">
                    Intervention rapide à Yssingeaux et alentours. Devis gratuit sous 24 h.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-lg bg-accent text-navy text-xs font-bold">
                    Demander un devis
                  </span>
                  <span className="text-[11px] text-muted">06 12 34 56 78</span>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-black/5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="text-[11px] text-muted">4,9 · 47 avis Google</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-black/5 bg-secondary/60">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-4xl font-black text-gradient mb-1">{stat.value}</p>
              <p className="text-muted text-sm">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Highlights — bento asymétrique */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-14 max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Ce que vous obtenez</p>
            <h2 className="font-syne text-4xl md:text-5xl font-black mb-4 text-navy">
              Tout ce qu'il faut pour être trouvé.
            </h2>
            <p className="text-muted">
              Un site clé en main et un référencement local continu — vous vous occupez de vos chantiers,
              je m'occupe du reste.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Carte large */}
            <AnimatedSection className="md:col-span-2">
              <div className="glass glass-hover rounded-2xl p-8 h-full flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                  <LeadIcon size={26} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-syne text-navy font-bold text-xl mb-2">{highlights[0].title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xl">{highlights[0].desc}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* 2 cartes */}
            {highlights.slice(1).map((item, i) => (
              <AnimatedSection key={item.title} delay={(i + 1) * 0.12}>
                <div className="glass glass-hover rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-5">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-syne text-navy font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-14 max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Ils nous font confiance</p>
            <h2 className="font-syne text-4xl md:text-5xl font-black text-navy">
              Ce que disent les artisans.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 0.15} className={i === 1 ? "md:mt-8" : ""}>
                <div className="glass glass-hover rounded-2xl p-7 h-full flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed flex-1">&laquo;&nbsp;{r.text}&nbsp;&raquo;</p>
                  <div>
                    <p className="text-navy font-semibold text-sm">{r.name}</p>
                    <p className="text-muted text-xs">{r.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden glass border border-accent/15 p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/60 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Diagnostic gratuit</p>
                <h2 className="font-syne text-4xl md:text-5xl font-black mb-6 text-navy">
                  Prêt à être visible sur Google ?
                </h2>
                <p className="text-muted max-w-xl mx-auto mb-8">
                  Je regarde votre situation locale et vous dis exactement ce qui manque —
                  sans engagement, en 15 minutes.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-navy font-bold text-lg hover:bg-yellow-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  Réserver un diagnostic gratuit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
