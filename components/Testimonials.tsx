"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/mockData";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  const current = testimonials[index];

  return (
    <section className="py-24 bg-background-secondary border-y border-border-color overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative flex flex-col items-center">
        {/* Quote Icon decorative */}
        <Quote className="w-12 h-12 text-accent-blush/30 mb-8" />

        <div className="w-full relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent-sage fill-accent-sage" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-foreground leading-relaxed max-w-2xl mb-8">
                &ldquo;{current.text}&rdquo;
              </p>

              {/* Reviewer Details */}
              <h4 className="font-sans text-xs tracking-widest uppercase font-semibold text-foreground">
                {current.name}
              </h4>
              <span className="font-sans text-[10px] tracking-wider text-muted-text uppercase mt-1">
                {current.role}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Navigation */}
        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            aria-label="Prejšnje pričevanje"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > index ? 1 : -1);
                  setIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === index ? "bg-foreground w-4" : "bg-foreground/20"
                }`}
                aria-label={`Pojdi na pričevanje ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            aria-label="Naslednje pričevanje"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
