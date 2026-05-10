"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
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
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Mes <span className="text-gradient">projets</span>
          </motion.h1>
        </div>
      </section>

      {/* Placeholder */}
      <section className="flex-1 flex items-center justify-center pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-14 md:p-20 text-center max-w-xl mx-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
            <Clock size={28} className="text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-3">
            Cas d'études à venir cette semaine.
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-8">
            Je prépare des études de cas détaillées sur les premiers sites artisans livrés.
            Revenez très vite.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-navy font-bold hover:bg-yellow-400 transition-all duration-200 accent-glow group text-sm"
          >
            Me contacter en attendant
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
