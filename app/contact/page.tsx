import { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const metadata: Metadata = {
  title: "Kontakt & Svetovanje",
  description: "Rezervirajte svetovanje ali pošljite povpraševanje za poročno cvetje, šopke in poslovne cvetlične naročnine s Cvetličarno Anaeva v Trzinu.",
};

const hours = [
  { day: "Ponedeljek — Petek", time: "9:00 – 18:00", open: true },
  { day: "Sobota", time: "9:00 – 13:00", open: true },
  { day: "Nedelja & Prazniki", time: "Zaprto", open: false },
];

export default function ContactPage() {
  return (
    <div className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Intro */}
        <div className="max-w-2xl mb-10 md:mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-sage font-bold mb-3 block">
            Stopite v stik
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground leading-[1.1] mb-6">
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

          {/* Left Side: Contact Details & Map */}
          <div className="lg:col-span-6 space-y-10">

            {/* Details Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* Address */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-accent-sage">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Lokacija</span>
                </div>
                <p className="font-sans text-sm text-muted-text leading-relaxed pl-6">
                  Ljubljanska cesta 12c<br />
                  1236 Trzin, Slovenija
                </p>
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-accent-sage">
                  <Phone className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Telefon</span>
                </div>
                <p className="font-sans text-sm text-muted-text leading-relaxed pl-6">
                  <a href="tel:+38651359266" className="hover:text-foreground transition-colors">
                    +386 51 359 266
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-accent-sage">
                  <Mail className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Splošna vprašanja</span>
                </div>
                <p className="font-sans text-sm text-muted-text leading-relaxed pl-6">
                  <a href="mailto:info.anaeva@gmail.com" className="hover:text-foreground transition-colors">
                    info.anaeva@gmail.com
                  </a>
                </p>
              </div>

              {/* Instagram */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-accent-sage">
                <InstagramIcon />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Instagram</span>
                </div>
                <p className="font-sans text-sm text-muted-text leading-relaxed pl-6">
                  <Link
                    href="https://www.instagram.com/cvetlicarnaanaeva/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    @cvetlicarnaanaeva
                  </Link>
                </p>
              </div>

            </div>

            {/* Working Hours */}
            <div className="rounded-2xl border border-pink-100 bg-white/70 backdrop-blur-sm p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-accent-sage mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-foreground">Delovni čas</span>
              </div>
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-2.5 border-b border-pink-50 last:border-0">
                  <span className="font-sans text-sm text-foreground">{h.day}</span>
                  <span className={`font-sans text-sm font-semibold ${h.open ? "text-accent-sage" : "text-rose-400"}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-[1px] bg-border-color w-full" />

            {/* Google Maps */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-foreground">
                Najdite nas v Trzinu
              </h3>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-pink-100">
                <iframe
                  title="Cvetličarna Anaeva lokacija"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.1234567890123!2d14.5645!3d46.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477acd3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sLjubljanská%20cesta%2012c%2C%201236%20Trzin!5e0!3m2!1ssl!2ssi!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="font-sans text-xs text-muted-text">
                📍 Ljubljanska cesta 12c, 1236 Trzin
              </p>
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
