"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const carouselItems: CardStackItem[] = [
  {
    id: 1,
    title: "Sezonski šopek",
    description: "Sveže sezonsko cvetje, ki prinaša toplino v vsak dom",
    imageSrc: "/images/carousel1.jpg",
    tag: "Šopki po meri",
    href: "/checkout?item=sezonski",
  },
  {
    id: 2,
    title: "Romantična kreacija",
    description: "Luksuzni šopki za posebne priložnosti in praznovanja",
    imageSrc: "/images/carousel2.jpg",
    tag: "Premium",
    href: "/checkout?item=romanticni",
  },
  {
    id: 3,
    title: "Botanična kompozicija",
    description: "Unikatne cvetlične kreacije z eksotičnimi elementi",
    imageSrc: "/images/carousel3.jpg",
    tag: "Unikatno",
    href: "/checkout?item=botanicni",
  },
  {
    id: 4,
    title: "Barvna simfonija",
    description: "Pogumne kombinacije, ki navdušijo na prvi pogled",
    imageSrc: "/images/carousel4.jpg",
    tag: "Ekskluzivno",
    href: "/checkout?item=anthurium",
  },
  {
    id: 5,
    title: "Posebna kreacija",
    description: "Prava mojstrovina za tiste, ki iščejo nekaj posebnega",
    imageSrc: "/images/carousel5.jpg",
    tag: "Posebno",
    href: "/checkout?item=grand",
  },
];

export default function CarouselSection() {
  return (
    <section className="py-20 relative z-10 overflow-hidden bg-white/60 backdrop-blur-sm">
      {/* Soft background glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-accent-sage font-bold mb-3 block">
            Naše kreacije
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">
            Halo šopki
          </h2>
          <p className="font-sans text-sm text-muted-text max-w-xl mx-auto leading-relaxed">
            Vsaka kreacija je sestavljena z ljubeznijo in natančnostjo. Pomaknite kartice ali kliknite za hitro naročilo.
          </p>
        </motion.div>

        {/* Card Stack Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <CardStack
            items={carouselItems}
            initialIndex={0}
            autoAdvance
            intervalMs={3200}
            pauseOnHover
            showDots
            cardWidth={500}
            cardHeight={360}
            overlap={0.44}
            spreadDeg={44}
            maxVisible={5}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/halo-sopki"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-sans text-[10px] tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full font-bold shadow-md"
          >
            Naroči šopek v spletni cvetličarni
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
