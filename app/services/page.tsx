import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { servicesData, workshopsData } from "@/data/mockData";

export const metadata: Metadata = {
  title: "Cvetlične storitve",
  description: "Raziščite našo ponudbo vrhunskih cvetličnih storitev v Sloveniji: unikatni ročno vezani šopki, luksuzna poročna dekoracija, poslovni abonmaji in scenografija dogodkov.",
};

export default function ServicesPage() {
  return (
    <div className="w-full pt-32 pb-24">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-sage font-bold mb-4 block">
          Naše specializacije
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground mb-6 leading-tight">
          Botanične storitve
        </h1>
        <p className="font-sans text-sm md:text-base text-muted-text max-w-xl mx-auto leading-relaxed">
          Od skulpturalnih tedenskih osvežitev pisarniških vaz do celotne prostorske poročne dekoracije, 
          prinašamo vrhunsko, prilagojeno floristiko v zasebne in poslovne prostore.
        </p>
      </div>

      {/* Services Breakdown List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {servicesData.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
            >
              {/* Image Frame */}
              <div
                className={`lg:col-span-6 relative aspect-[4/3] sm:aspect-[1.5/1] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border-color shadow-sm bg-background-secondary ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Text Meta Info */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-accent-sage font-bold block mb-1">
                    {service.priceStart}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                    {service.title}
                  </h2>
                </div>

                <p className="font-sans text-sm text-muted-text leading-relaxed">
                  {service.description}
                </p>

                {/* Additional descriptive notes */}
                <div className="space-y-2 text-sans text-xs text-muted-text italic">
                  {service.details.map((detail, dIdx) => (
                    <p key={dIdx}>{detail}</p>
                  ))}
                </div>

                {/* Benefits List */}
                <ul className="space-y-2.5 pt-2">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 font-sans text-xs text-foreground">
                      <span className="w-5 h-5 rounded-full bg-[#A4B29D]/10 flex items-center justify-center text-accent-sage flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Service CTA */}
                <div className="pt-4">
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full"
                  >
                    Pošlji povpraševanje za to storitev
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Workshops Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-36 pt-24 border-t border-border-color">
        {/* Workshops Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-sage font-bold mb-4 block">
            Cvetlične izkušnje
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
            Ustvarjalne Delavnice & Doživetja
          </h2>
          <p className="font-sans text-sm text-muted-text leading-relaxed">
            Popestrite svoje praznovanje ali si privoščite sproščujoč dan ustvarjanja. 
            Naše delavnice so zasnovane kot celostna doživetja z vrhunskim cvetjem, kulinariko in pijačo.
          </p>
        </div>

        {/* Workshops Breakdown */}
        <div className="space-y-32">
          {workshopsData.map((workshop, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={workshop.id}
                id={workshop.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
              >
                {/* Image Frame with custom badge overlay */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] sm:aspect-[1.5/1] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border-color shadow-sm bg-background-secondary ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {workshop.slug === "workshop-aperol" ? (
                      <span className="px-3.5 py-1.5 bg-accent-blush text-foreground font-sans text-[9px] tracking-wider uppercase font-semibold rounded-full shadow-md">
                        All You Can Drink Aperol Spritz
                      </span>
                    ) : (
                      <span className="px-3.5 py-1.5 bg-accent-sage text-white font-sans text-[9px] tracking-wider uppercase font-semibold rounded-full shadow-md">
                        Izkušnja s Konji v Naravi
                      </span>
                    )}
                  </div>
                </div>

                {/* Text Meta Info */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-accent-sage font-bold block mb-1">
                      Cena: {workshop.priceStart}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-foreground">
                      {workshop.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-muted-text leading-relaxed">
                    {workshop.description}
                  </p>

                  {/* Additional descriptive notes */}
                  <div className="space-y-2 text-sans text-xs text-muted-text italic">
                    {workshop.details.map((detail, dIdx) => (
                      <p key={dIdx}>{detail}</p>
                    ))}
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-2.5 pt-2">
                    {workshop.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 font-sans text-xs text-foreground">
                        <span className="w-5 h-5 rounded-full bg-[#A4B29D]/10 flex items-center justify-center text-accent-sage flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Service CTA */}
                  <div className="pt-4">
                    <Link
                      href={`/contact?service=${workshop.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full"
                    >
                      Prijavi se na delavnico
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
