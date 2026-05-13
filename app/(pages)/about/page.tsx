"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
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
            className="font-syne text-5xl md:text-6xl font-black mb-6"
          >
            Notre <span className="text-gradient">histoire.</span>
          </motion.h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-12">

          <AnimatedSection>
            <p className="text-muted text-lg leading-relaxed">
              Allycore est née d'un constat simple : les artisans sont les métiers d'avenir,
              mais ils restent les grands oubliés du numérique.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-8">
              <p className="text-muted text-base leading-relaxed">
                Dans un monde où les clients cherchent tout sur Google, un artisan sans présence
                en ligne perd des chantiers chaque jour — sans même le savoir. Face à cette réalité,
                j'ai créé Allycore avec une mission claire : donner aux artisans du bâtiment la
                visibilité qu'ils méritent, sans complexité et sans jargon.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-light text-xl font-bold leading-relaxed">
                Plombiers, électriciens, chauffagistes — et tous les artisans du bâtiment.
                Ces métiers sont indispensables.
              </p>
              <p className="text-accent font-black text-2xl mt-3">
                Il est temps qu'ils soient trouvés.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
