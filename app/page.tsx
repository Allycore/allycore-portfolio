"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Zap, Star, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "10–15", label: "jours pour être en ligne" },
  { value: "87 %", label: "des recherches artisan se font sur Google" },
  { value: "3×", label: "plus de devis reçus avec un site optimisé" },
  { value: "1", label: "chantier pour rentabiliser l'offre" },
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
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
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
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-navy"
            >
              Votre site web,
              <br />
              <span className="text-gradient">rentable dès le</span>
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-navy font-bold hover:bg-yellow-400 transition-all duration-200 accent-glow group"
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

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/15 via-secondary to-primary border border-accent/20 shadow-lg shadow-accent/10" />
              <div className="absolute inset-6 rounded-2xl glass flex flex-col items-center justify-center gap-6 p-8">
                <div className="w-20 h-20 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center">
                  <Phone size={36} className="text-accent" />
                </div>
                <div className="text-center">
                  <p className="text-navy font-bold text-xl">Site web artisan</p>
                  <p className="text-muted text-sm mt-1">Plombiers · Électriciens · Chauffagistes</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {["Livré en 15 jours", "SEO local", "Google Maps", "Mobile", "Devis en ligne"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent/15 text-[#B07D06] text-xs font-medium border border-accent/25">
                      {tag}
                    </span>
                  ))}
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

      {/* Highlights */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Ce que vous obtenez</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-navy">Tout ce qu'il faut<br />pour être trouvé.</h2>
            <p className="text-muted max-w-xl mx-auto">
              Un site clé en main et un référencement local continu — vous vous occupez de vos chantiers,
              je m'occupe du reste.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="glass glass-hover rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-5">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-navy font-bold text-xl mb-3">{item.title}</h3>
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
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Ils nous font confiance</p>
            <h2 className="text-4xl md:text-5xl font-black text-navy">Ce que disent<br />les artisans.</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 0.15}>
                <div className="glass glass-hover rounded-2xl p-7 h-full flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed flex-1">"{r.text}"</p>
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
            <div className="relative rounded-3xl overflow-hidden glass border border-accent/15 p-12 md:p-16 text-center shadow-lg shadow-accent/5">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/60 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Diagnostic gratuit</p>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-navy">
                  Prêt à être visible<br />sur Google ?
                </h2>
                <p className="text-muted max-w-xl mx-auto mb-8">
                  Je regarde votre situation locale et vous dis exactement ce qui manque —
                  sans engagement, en 15 minutes.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-navy font-bold text-lg hover:bg-yellow-400 transition-all duration-200 accent-glow group"
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
