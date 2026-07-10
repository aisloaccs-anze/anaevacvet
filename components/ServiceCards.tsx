"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/ui/magic-card";
import { servicesData } from "@/data/mockData";

export default function ServiceCards() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="py-28 bg-white/65 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-sage font-bold mb-3 block">
            Naše delovanje
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">
            Storitve cvetličnega oblikovanja
          </h2>
          <p className="font-sans text-sm text-muted-text leading-relaxed">
            Od unikatnih, ročno zavitih šopkov do celostne cvetlične scenografije za dogodke, 
            ustvarjamo botanične izkušnje, prilagojene vaši viziji.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group h-full flex"
            >
              <MagicCard
                className="bg-background-secondary border border-border-color rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-foreground/2 transition-shadow duration-500"
                glowColor="rgba(164, 178, 157, 0.16)"
                glowSize={300}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Image Frame */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-background">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Card Content */}
                    <div className="p-7">
                      <span className="font-sans text-[9px] tracking-widest uppercase text-accent-sage font-bold block mb-2">
                        {service.priceStart}
                      </span>
                      <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent-sage transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs text-muted-text leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom CTA bar */}
                  <div className="px-7 pb-7 pt-2 mt-auto">
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-widest uppercase text-foreground hover:text-accent-sage font-bold transition-colors group/link"
                    >
                      Več podrobnosti
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
