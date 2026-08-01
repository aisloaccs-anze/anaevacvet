"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const instaImages = [
  { src: "/images/bouquet_luxury.jpg", alt: "Breskova vrtnica z belo ovojnico" },
  { src: "/images/bouquet_pink.jpg", alt: "Rožnati šopek s pakiranjem" },
  { src: "/images/event_floral.jpg", alt: "Ekskluzivna torbica z vanda orhidejami" },
  { src: "/images/corporate_floral.jpg", alt: "Botanika v poslovnih prostorih" },
  { src: "/images/hero_floral.jpg", alt: "Skulpturalna oljka v betonski krogli" },
  { src: "/images/wedding_floral.jpg", alt: "Cvetlična torbica za posebne prilike" },
];

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-pink-100/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Instagram Showcase */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-text">
                Spremljajte našo zgodbo
              </span>
              <h3 className="font-serif text-3xl md:text-4xl mt-1">
                Ujeti utrinki
              </h3>
            </div>
            <a
              href="https://www.instagram.com/cvetlicarnaanaeva/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-foreground hover:text-accent-sage mt-4 md:mt-0 transition-colors group"
            >
              @cvetlicarnaanaeva
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {instaImages.map((img, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/cvetlicarnaanaeva/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group block bg-[#171717]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-background-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-foreground" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Top Links & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-border-color">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center mb-6">
                <div className="relative w-[160px] h-[80px]">
                  <Image
                    src="/images/logo.png"
                    alt="Cvetličarna Anaeva"
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="font-sans text-sm text-muted-text max-w-sm leading-relaxed">
                Butični cvetlični studio, specializiran za vrhunske aranžmaje, 
                visoko poročna oblikovanja in prostorske skulpturalne instalacije, ki ostanejo v trajnem spominu.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/cvetlicarnaanaeva/"
                className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans text-[11px] tracking-widest uppercase text-foreground font-semibold mb-5">
                Butik
              </h4>
              <ul className="space-y-3 font-sans text-xs tracking-wider uppercase text-muted-text">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">Domov</Link>
                </li>
                <li>
                  <Link href="/halo-sopki" className="hover:text-foreground transition-colors">Halo šopki</Link>
                </li>
                <li>
                  <Link href="/delavnice" className="hover:text-foreground transition-colors">Delavnice</Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-foreground transition-colors">Galerija</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">Storitve</Link>
                </li>
                <li>
                  <Link href="/weddings" className="hover:text-foreground transition-colors">Poroke</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">O nas</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[11px] tracking-widest uppercase text-foreground font-semibold mb-5">
                Storitve
              </h4>
              <ul className="space-y-3 font-sans text-xs tracking-wider uppercase text-muted-text">
                <li>
                  <Link href="/services#bouquets" className="hover:text-foreground transition-colors">Šopki</Link>
                </li>
                <li>
                  <Link href="/services#weddings" className="hover:text-foreground transition-colors">Poroke</Link>
                </li>
                <li>
                  <Link href="/services#events" className="hover:text-foreground transition-colors">Dogodki</Link>
                </li>
                <li>
                  <Link href="/services#corporate" className="hover:text-foreground transition-colors">Abonmaji</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-[11px] tracking-widest uppercase text-foreground font-semibold mb-4">
              Botanična pisma
            </h4>
            <p className="font-sans text-sm text-muted-text mb-6 leading-relaxed">
              Prijavite se na naša pisma za sezonske navdihe, nasvete o negi in ekskluzivne novice.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="VAŠ E-NASLOV"
                className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground py-3 text-xs tracking-widest uppercase focus:outline-none pr-10 transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-accent-sage transition-colors text-xs font-sans tracking-widest uppercase font-semibold"
                aria-label="Subscribe"
              >
                PRIJAVA
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 font-sans text-[10px] tracking-widest uppercase text-muted-text gap-4">
          <div>
            © 2026 CVETLIČARNA ANAEVA. VSE PRAVICE PRIDRŽANE.
          </div>
          <div className="flex items-center gap-1.5">
            ROČNO IN Z LJUBEZNIJO USTVARJENO V SLOVENIJI <Heart className="w-3 h-3 text-accent-sage fill-accent-sage" />
          </div>
        </div>
      </div>
    </footer>
  );
}
