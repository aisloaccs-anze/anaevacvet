"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "@/data/mockData";

interface FeaturedBentoGridProps {
  featuredWorks: GalleryItem[];
}

export default function FeaturedBentoGrid({ featuredWorks }: FeaturedBentoGridProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
    >
      {/* Primary Large Bento Card (Col span 7) */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-7 group cursor-pointer flex flex-col justify-between"
      >
        <Link href="/gallery" className="flex flex-col h-full">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:flex-1 overflow-hidden rounded-3xl border border-border-color shadow-md bg-background-secondary transition-all duration-500 hover:shadow-xl hover:shadow-foreground/3">
            <Image
              src={featuredWorks[0].image}
              alt={featuredWorks[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="mt-6 flex justify-between items-start px-2">
            <div>
              <span className="font-sans text-[9px] tracking-widest uppercase text-accent-sage font-bold">
                {featuredWorks[0].category}
              </span>
              <h3 className="font-serif text-2xl text-foreground mt-1 group-hover:text-accent-sage transition-colors duration-300">
                {featuredWorks[0].title}
              </h3>
            </div>
            <span className="font-sans text-xs text-muted-text mt-2 font-medium">{featuredWorks[0].price}</span>
          </div>
        </Link>
      </motion.div>

      {/* Right Column Bento Cards Stack (Col span 5) */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        {featuredWorks.slice(1, 3).map((work) => (
          <motion.div
            key={work.id}
            variants={itemVariants}
            className="group cursor-pointer"
          >
            <Link href="/gallery">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border-color shadow-md bg-background-secondary transition-all duration-500 hover:shadow-xl hover:shadow-foreground/3">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-5 flex justify-between items-start px-2">
                <div>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-accent-sage font-bold">
                    {work.category}
                  </span>
                  <h3 className="font-serif text-xl text-foreground mt-1 group-hover:text-accent-sage transition-colors duration-300">
                    {work.title}
                  </h3>
                </div>
                <span className="font-sans text-xs text-muted-text mt-2 font-medium">{work.price}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
