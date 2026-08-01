"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import { TextReveal } from "@/components/ui/text-reveal";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  // Create a subtle parallax effect on scroll
  const imageY = useTransform(scrollY, [0, 800], [0, 80]);
  const textY = useTransform(scrollY, [0, 800], [0, -40]);

  // Motion variants for stagger reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom elegant ease-out
      },
    },
  };

  // Interactive mouse tilt for the hero image
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Convert to rotation values (e.g. max 10 degrees)
    rotateX.set((mouseY / (height / 2)) * -8);
    rotateY.set((mouseX / (width / 2)) * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden flex items-center pt-28 md:pt-0"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      {/* Sparkles Particle Layer */}
      <Sparkles
        color="#E8B4C0"
        particleDensity={28}
        minSize={0.5}
        maxSize={2.0}
        className="opacity-50"
      />

      {/* Background soft ambient glow */}
      <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-pink-200/20 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-teal-200/15 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 relative z-10">
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: textY }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <motion.span
            variants={itemVariants}
            className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent-sage font-bold mb-4 block"
          >
            Studio za umetniško oblikovanje cvetja
          </motion.span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.08] text-foreground mb-6 sm:mb-8">
            <TextReveal text="Cvetje, oblikovano" delay={0.1} /> <br />
            <TextReveal text="da ostane v spominu" delay={0.4} className="italic font-light text-muted-text" />
          </h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-sm sm:text-base md:text-lg text-muted-text max-w-xl leading-relaxed mb-8 sm:mb-10"
          >
            Elegantne cvetlične kreacije in botanična scenografija, ročno ustvarjena
            z umetniškim pridihom v našem slovenskem studiu za najpomembnejše življenjske trenutke.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full group font-semibold shadow-sm shadow-foreground/5"
            >
              Raziščite galerijo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+38651359266"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/10 hover:border-foreground/40 hover:bg-background-secondary/20 text-foreground font-sans text-xs tracking-widest uppercase transition-all duration-300 rounded-full font-semibold"
            >
              <Phone className="w-4 h-4 text-accent-sage" />
              Pokliči: 051 359 266
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Luxury Imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ y: imageY, rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: "preserve-3d" }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Asymmetrical Frame */}
          <div className="relative w-[85vw] sm:w-[50vw] lg:w-[100%] aspect-[4/5] max-w-[420px] lg:max-w-none overflow-hidden rounded-2xl shadow-2xl shadow-foreground/5 bg-background-secondary border border-border-color transition-shadow duration-300 hover:shadow-foreground/10">
            <Image
              src="/images/hero_floral.jpg"
              alt="Unikatna cvetlična kreacija Anaeva - oljka v betonski krogli"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              priority
              loading="eager"
              className="object-cover transition-transform duration-[1200ms] hover:scale-105 ease-out"
            />
          </div>
          
          {/* Layered Accent Badge */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-background-secondary/90 backdrop-blur-md border border-border-color px-6 py-6 hidden sm:block rounded-xl shadow-lg max-w-[200px]"
          >
            <p className="font-serif text-lg leading-tight text-foreground">
              Unikatno & organsko
            </p>
            <p className="font-sans text-[10px] tracking-wider text-muted-text mt-2 uppercase font-semibold">
              Zasnovano za vaš prostor
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
