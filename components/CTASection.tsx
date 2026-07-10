"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";

export default function CTASection() {
  return (
    <section className="py-32 bg-white/65 backdrop-blur-sm relative overflow-hidden border-t border-border-color">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      {/* Sparkles Particle Layer */}
      <Sparkles
        color="#D9C4BE"
        particleDensity={25}
        minSize={0.5}
        maxSize={2.2}
        className="opacity-30"
      />

      {/* Background soft glowing accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[35vw] bg-[#A4B29D]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col items-center"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-sage font-bold mb-4 block animate-pulse">
            Začetek sodelovanja
          </span>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground max-w-3xl leading-[1.1] mb-8">
            Ustvarimo nekaj lepega <br />
            <span className="italic font-light text-muted-text">skupaj</span>
          </h2>
          
          <p className="font-sans text-sm text-muted-text max-w-lg leading-relaxed mb-10">
            Najsi načrtujete intimno poročno slavje, naročate unikatno cvetje ali želite osvežiti 
            poslovni prostor, naš ustvarjalni studio je pripravljen prenesti vaše sanje v resničnost.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full group font-bold shadow-sm shadow-foreground/5"
          >
            Rezervacija svetovanja
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
