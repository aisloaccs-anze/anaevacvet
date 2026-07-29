import Link from "next/link";
import { ArrowRight, Sparkles as SparklesIcon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { Marquee } from "@/components/ui/marquee";
import FeaturedBentoGrid from "@/components/FeaturedBentoGrid";
import WorkshopsSection from "@/components/WorkshopsSection";
import CarouselSection from "@/components/CarouselSection";
import { galleryItems } from "@/data/mockData";

export default function Home() {
  // Let's feature 3 stunning asymmetric works on the homepage
  const featuredWorks = galleryItems.slice(0, 3);

  // Luxury values for the marquee
  const brandPillars = [
    "LUKSUZNE POROČNE KREACIJE",
    "PREFINJENA CVETLIČNA ESTETIKA",
    "FINO ART OBLIKOVANJE",
    "TEDENSKI POSLOVNI ABONMA",
    "UNIKATNE SLOVENSKE ORGANSKE VRTNICE",
    "ARTIZANSKO ROČNO DELO",
    "BOTANIČNA SCENOGRAFIJA",
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 1b: Card Stack Carousel */}
      <CarouselSection />

      {/* Luxury Brand Marquee */}
      <section className="py-6 border-y border-pink-100/50 bg-white/60 backdrop-blur-sm relative z-20">
        <Marquee speed={25} pauseOnHover={true} className="py-1">
          {brandPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 font-sans text-[10px] md:text-xs tracking-[0.25em] font-semibold text-foreground mx-4"
            >
              <SparklesIcon className="w-3.5 h-3.5 text-accent-sage animate-spin-slow" />
              <span>{pillar}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Section 2: Workshops */}
      <WorkshopsSection />

      {/* Section 3: Featured Gallery (Bento Grid) */}
      <section className="py-28 bg-white/70 backdrop-blur-sm relative z-10">
        {/* Subtle grid line decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div className="max-w-xl">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-sage font-bold mb-3 block">
                Izbrana dela
              </span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground">
                Predstavljene kreacije
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-foreground hover:text-accent-sage mt-4 md:mt-0 transition-colors group font-semibold"
            >
              Celotna galerija
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Bento Grid (Client component for animations) */}
          <FeaturedBentoGrid featuredWorks={featuredWorks} />
        </div>
      </section>

      {/* Section 4: Services */}
      <ServiceCards />

      {/* Section 5: Brand Story */}
      <AboutSection />

      {/* Section 6: Testimonials */}
      <Testimonials />

      {/* Section 7: CTA */}
      <CTASection />
    </div>
  );
}
