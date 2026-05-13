"use client";

import { motion } from "framer-motion";
import { Mail, CalendarDays } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Diagnostic gratuit
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-syne text-5xl md:text-6xl font-black mb-6"
          >
            Parlons de votre <span className="text-gradient">visibilité.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-muted text-lg"
          >
            15 minutes pour faire le point sur votre situation locale — sans engagement.
          </motion.p>
        </div>
      </section>

      {/* Options */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-6 grid sm:grid-cols-2 gap-6">

          {/* Calendly */}
          <AnimatedSection delay={0} direction="left">
            <a
              href="https://calendly.com/allycore-service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-5 rounded-2xl p-8 h-full glass glass-hover group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <CalendarDays size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-navy font-bold text-lg mb-1">Réserver un appel</p>
                <p className="text-muted text-sm leading-relaxed">
                  Choisissez un créneau directement dans mon agenda. Appel de 15 min, gratuit.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-navy font-bold text-sm group-hover:bg-yellow-400 transition-colors duration-200 w-fit">
                Choisir un créneau →
              </span>
            </a>
          </AnimatedSection>

          {/* Email */}
          <AnimatedSection delay={0.1} direction="right">
            <a
              href="mailto:allycore.service@gmail.com"
              className="flex flex-col gap-5 rounded-2xl p-8 h-full glass glass-hover group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Mail size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-navy font-bold text-lg mb-1">Envoyer un email</p>
                <p className="text-muted text-sm leading-relaxed">
                  Décrivez votre activité et ce que vous recherchez. Réponse sous 24 h ouvrées.
                </p>
              </div>
              <span className="mt-auto text-accent font-semibold text-sm group-hover:underline">
                allycore.service@gmail.com
              </span>
            </a>
          </AnimatedSection>
        </div>

        {/* Note bas de page */}
        <AnimatedSection delay={0.2} className="text-center mt-10">
          <p className="text-muted text-sm">
            Diagnostic toujours gratuit · Aucun engagement · Réponse garantie sous 24 h
          </p>
        </AnimatedSection>
      </section>
    </div>
  );
}
