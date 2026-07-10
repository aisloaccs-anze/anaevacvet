"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ShineBorder } from "@/components/ui/shine-border";
import { WorkshopDetail } from "@/data/mockData";

interface FeaturedWorkshopsProps {
  workshopsData: WorkshopDetail[];
}

export default function FeaturedWorkshops({ workshopsData }: FeaturedWorkshopsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      {workshopsData.map((workshop, idx) => (
        <motion.div
          key={workshop.id}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: idx * 0.1,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="group flex h-full"
        >
          <ShineBorder
            borderRadius="24px"
            duration={10}
            color={["#A4B29D", "#D9C4BE", "#EFE7DC"]}
          >
            <div className="bg-background flex flex-col justify-between h-full rounded-3xl overflow-hidden">
              <div>
                {/* Image with overlay badge */}
                <div className="relative aspect-[16/9] overflow-hidden bg-background-secondary">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  
                  {/* Unique badges */}
                  <div className="absolute top-5 left-5 flex flex-col gap-2 z-30">
                    <span className="px-4 py-2 bg-background/90 backdrop-blur-sm border border-border-color text-foreground font-sans text-[9px] tracking-wider uppercase font-bold rounded-full shadow-sm">
                      {workshop.priceStart}
                    </span>
                    {workshop.slug === "workshop-aperol" ? (
                      <span className="px-4 py-2 bg-accent-blush text-foreground font-sans text-[9px] tracking-wider uppercase font-bold rounded-full shadow-sm">
                        All You Can Drink Aperol
                      </span>
                    ) : (
                      <span className="px-4 py-2 bg-accent-sage text-white font-sans text-[9px] tracking-wider uppercase font-bold rounded-full shadow-sm">
                        Družba konj v naravi
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 md:p-12 space-y-8">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 leading-tight group-hover:text-accent-sage transition-colors duration-300">
                      {workshop.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-text leading-relaxed">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {workshop.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 font-sans text-xs text-foreground leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-sage mt-1.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA block */}
              <div className="px-8 pb-8 md:px-12 md:pb-12 pt-2 border-t border-border-color/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
                <span className="font-sans text-[10px] text-muted-text tracking-wider uppercase font-medium">
                  * Skupinske rezervacije po dogovoru
                </span>
                <Link
                  href={`/contact?service=${workshop.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background font-sans text-[10px] tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full font-bold shadow-sm shadow-foreground/5 z-20"
                >
                  Rezerviraj doživetje
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ShineBorder>
        </motion.div>
      ))}
    </div>
  );
}
