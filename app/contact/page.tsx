import { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt & Svetovanje",
  description: "Rezervirajte svetovanje ali pošljite povpraševanje za poročno cvetje, šopke in poslovne cvetlične naročnine s Cvetličarno Anaeva v Ljubljani.",
};

export default function ContactPage() {
  return (
    <div className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <div className="max-w-2xl mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-sage font-bold mb-3 block">
            Stopite v stik
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl tracking-tight text-foreground leading-[1.1] mb-6">
            Oblikujmo vašo <br />
            <span className="italic font-light text-muted-text">cvetlično zgodbo</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-muted-text leading-relaxed">
            Najsi naročate unikatne ročno vezane šopke, se dogovarjate za poslovni abonma ali 
            načrtujete nepozabno poročno scenografijo, veselimo se vašega sporočila.
          </p>
        </div>

        {/* Grid layout: Form & Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Details & Mock Map */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Details Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-accent-sage">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Studio Ljubljana</span>
                </div>
                <p className="font-sans text-sm text-muted-text leading-relaxed pl-6.5">
                  Stari trg 12 <br />
                  1000 Ljubljana, Slovenija
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-accent-sage">
                  <Clock className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Delovni čas</span>
                </div>
                <p className="font-sans text-sm text-muted-text leading-relaxed pl-6.5">
                  Samo po dogovoru. <br />
                  Ponedeljek — Sobota
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-accent-sage">
                  <Phone className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Telefon</span>
                </div>
                <p className="font-sans text-sm text-muted-text leading-relaxed pl-6.5">
                  <a href="tel:+38640123456" className="hover:text-foreground transition-colors">
                    +386 40 123 456
                  </a>
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-accent-sage">
                  <Mail className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Splošna vprašanja</span>
                </div>
                <p className="font-sans text-sm text-muted-text leading-relaxed pl-6.5">
                  <a href="mailto:studio@anaeva.si" className="hover:text-foreground transition-colors">
                    studio@anaeva.si
                  </a>
                </p>
              </div>

            </div>

            {/* Fine line */}
            <div className="h-[1px] bg-border-color w-full" />

            {/* Map Mockup container */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-foreground">
                Lokacija v starem mestnem jedru
              </h3>
              <div className="relative w-full aspect-[16/10] bg-white/60 backdrop-blur-sm border border-pink-100/60 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-6 text-center">
                {/* Styled elegant architectural mockup map */}
                <div className="absolute inset-0 bg-[#EFE7DC] opacity-50 bg-[radial-gradient(#171717_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                <div className="relative z-10 space-y-2 max-w-xs">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-accent-sage font-bold">
                    Zemljevid lokacije
                  </p>
                  <p className="font-serif text-lg text-foreground italic">
                    Stari trg v zgodovinskem delu Ljubljane
                  </p>
                  <p className="font-sans text-xs text-muted-text leading-relaxed">
                    Naš cvetlični studio se nahaja tik ob vznožju Grajskega griča. Vsa svetovanja in obiski potekajo po predhodnem dogovoru.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: The Contact Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <Suspense fallback={
              <div className="w-full max-w-xl bg-background-secondary border border-border-color p-8 md:p-12 rounded-2xl shadow-sm animate-pulse min-h-[500px] flex items-center justify-center">
                <p className="font-sans text-xs text-muted-text uppercase tracking-widest">Nalaganje obrazca...</p>
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>

        </div>

      </div>
    </div>
  );
}
