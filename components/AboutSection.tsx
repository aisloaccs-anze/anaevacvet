"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-background-secondary border-t border-border-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Overlapping Images */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Background decorative square */}
            <div className="absolute inset-0 bg-[#A4B29D]/5 -m-6 rounded-3xl pointer-events-none hidden sm:block" />
            
            {/* Primary Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-[70%] aspect-[3/4] overflow-hidden rounded-2xl shadow-lg bg-background border border-border-color z-10"
            >
              <Image
                src="/images/brand_story.jpg"
                alt="Cvetličarna Anaeva - unikatna zelena dekoracija"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Secondary Image Overlap */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute right-0 bottom-[-40px] w-[45%] aspect-[1/1] overflow-hidden rounded-2xl shadow-xl bg-background border border-border-color z-20 hidden sm:block"
            >
              <Image
                src="/images/bouquet_luxury.jpg"
                alt="Anaeva šopek - breskova vrtnica z belo ovojnico"
                fill
                sizes="15vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Right Side: Philosophy Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center mt-10 lg:mt-0"
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-sage font-semibold mb-3 block">
              Naša filozofija
            </span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6 leading-tight">
              Ustvarjanje botanične poezije <br />
              <span className="italic font-light text-muted-text">z izbranim cvetjem</span>
            </h2>
            <p className="font-sans text-sm text-muted-text leading-relaxed mb-6">
              V Cvetličarni Anaeva cvetja ne le aranžiramo – preučujemo njegovo gibanje, 
              prazen prostor in organske teksture. Verjamemo, da ima vsako steblo svoj glas in 
              vsaka kreacija pripoveduje intimno zgodbo o praznovanju, prestižu in toplini.
            </p>
            <p className="font-sans text-sm text-muted-text leading-relaxed mb-8">
              Naše cvetje pridobivamo pri vrhunskih lokalnih pridelovalcih v Sloveniji in pri 
              izbranih evropskih gojiteljih, kar zagotavlja, da so kreacije v vašem prostoru vedno 
              sveže, obstojne in naravno izrazne.
            </p>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-foreground hover:text-accent-sage font-semibold transition-colors group"
              >
                Spoznajte našo obrt
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
