"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/mockData";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Vsa dela" },
  { id: "bouquets", label: "Šopki" },
  { id: "weddings", label: "Poroke" },
  { id: "events", label: "Dogodki" },
  { id: "seasonal", label: "Sezonsko" },
  { id: "custom", label: "Po meri" },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    // Find index of this item in the filtered items array
    const idx = filteredItems.findIndex(i => i.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Handle keyboard arrow navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
      if (e.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-16">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                closeLightbox(); // Close if open to prevent context mismatch
              }}
              className={cn(
                "relative px-5 py-2.5 font-sans text-[10px] tracking-widest uppercase transition-all duration-300 rounded-full",
                isActive ? "text-background" : "text-muted-text hover:text-foreground"
              )}
            >
              <span className="relative z-10">{cat.label}</span>
              {isActive && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-foreground rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Responsive Fixed-Aspect Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => openLightbox(item)}
              className="relative overflow-hidden group bg-background-secondary border border-border-color rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-all duration-500 block"
            >
              {/* Image Frame with reserved aspect ratio */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-pink-50/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Micro-interaction Hover Cover */}
                <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-background/90 flex items-center justify-center text-foreground shadow-md transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-sans text-[9px] tracking-widest uppercase text-background/85 font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-background">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mobile Metadata Info */}
              <div className="p-4 bg-background-secondary border-t border-border-color md:hidden">
                <span className="font-sans text-[8px] tracking-widest uppercase text-accent-sage font-bold">
                  {item.category}
                </span>
                <h4 className="font-serif text-base text-foreground mt-0.5">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl bg-background border border-border-color rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 cursor-default"
            >
              {/* Left Side: Image container */}
              <div className="md:col-span-7 relative bg-background-secondary aspect-[4/5] md:aspect-auto md:h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Arrow Controls inside image frame */}
                <button
                  onClick={showPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center shadow-md transition-colors"
                  aria-label="Prejšnje delo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center shadow-md transition-colors"
                  aria-label="Naslednje delo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right Side: Meta Info details */}
              <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full bg-background">
                {/* Header Actions */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-accent-sage font-bold">
                      {activeLightboxItem.category}
                    </span>
                    <h3 className="font-serif text-3xl text-foreground mt-1">
                      {activeLightboxItem.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeLightbox}
                    className="p-1 text-muted-text hover:text-foreground transition-colors"
                    aria-label="Zapri galerijo"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Central Body details */}
                <div className="flex-1 space-y-6">
                  <p className="font-sans text-sm text-muted-text leading-relaxed">
                    {activeLightboxItem.description}
                  </p>
                  
                  <div className="border-t border-border-color pt-6 space-y-3 font-sans text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-text uppercase tracking-widest">Dimenzije</span>
                      <span className="font-semibold">{activeLightboxItem.dimensions}</span>
                    </div>
                    {activeLightboxItem.price && (
                      <div className="flex justify-between">
                        <span className="text-muted-text uppercase tracking-widest">Cena</span>
                        <span className="font-semibold text-accent-sage">{activeLightboxItem.price}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="mt-8 border-t border-border-color pt-6">
                  <a
                    href={`/contact?inquiry=${activeLightboxItem.id}`}
                    className="w-full text-center py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full block font-semibold"
                  >
                    Oddaj povpraševanje za ta aranžma
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
