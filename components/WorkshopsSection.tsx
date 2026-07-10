"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Clock, Users, MapPin, Star, Camera, Wine, Scissors, Heart } from "lucide-react";

const delavnicaSteps = [
  {
    icon: <Wine className="w-5 h-5" />,
    title: "Dobrodošli & Aperol",
    desc: "Prispete v naš cvetlični studio, kjer vas pričaka kozarec Aperol Spriteza in topel sprejem. Spoznate ostale udeleženke in se sprostite v prijetnem vzdušju med cvetjem.",
  },
  {
    icon: <Scissors className="w-5 h-5" />,
    title: "Teorija & Izbira cvetja",
    desc: "Naša cvetličarka vam razloži osnove barvne teorije, tehnike vezave in kako izbrati stebla, ki se med seboj harmonično dopolnjujejo. Vsaka udeleženka izbere svoje najljubše cvetje iz bogate selekcije.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Ustvarjanje šopka",
    desc: "Pod vodstvom cvetličarke postopoma sestavljate svoj unikatni šopek. Vsak korak je razložen in prikazan – od priprave stebel, vezave do končnega pakiranja v elegantni papir Anaeve.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Fotografiranje & Odhod",
    desc: "Na koncu se fotografirate pred našo slavno rožno steno in odidete domov s svojim čudovitim šopkom – unikatno kreacijo, ki ste jo ustvarile z lastnimi rokami.",
  },
];

const galleryPhotos = [
  { src: "/images/delavnica1.jpg", alt: "Udeležene na delavnici vezanja šopkov" },
  { src: "/images/delavnica2.jpg", alt: "Skupinska fotografija z ustvarjenimi šopki" },
  { src: "/images/delavnica3.jpg", alt: "Delavnica v teku – skupinsko ustvarjanje" },
  { src: "/images/delavnica4.jpg", alt: "Individualno vodenje pri vezavi šopka" },
];

export default function WorkshopsSection() {
  const [expanded, setExpanded] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <section className="py-32 bg-pink-50/50 backdrop-blur-sm border-b border-pink-100/50 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.2] pointer-events-none" />

      {/* Decorative glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-teal-200/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-accent-sage font-bold mb-4 block">
            Izkustvena doživetja
          </span>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-foreground mb-6">
            Cvetlične delavnice Anaeva
          </h2>
          <p className="font-sans text-base text-muted-text leading-relaxed">
            Združite umetnost floristike z nepozabnim druženjem. Odidete domov z lastnoročno ustvarjenim šopkom – in spominom, ki ostane.
          </p>
        </motion.div>

        {/* Main Workshop Card — Aperol */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-pink-200/30"
        >
          {/* Hero image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/delavnica1.jpg"
              alt="Cvetlična delavnica Anaeva"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground font-sans text-[9px] tracking-widest uppercase font-bold rounded-full">
                  85 € / osebo
                </span>
                <span className="px-4 py-2 bg-pink-400 text-white font-sans text-[9px] tracking-widest uppercase font-bold rounded-full">
                  All You Can Drink Aperol
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-sans text-[9px] tracking-widest uppercase font-bold rounded-full border border-white/30">
                  ★ Najbolj priljubljena
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-3 leading-tight">
                Izdelaj svoj šopek + Aperol Spritz
              </h3>
              <div className="flex flex-wrap gap-6 text-white/80 font-sans text-xs tracking-wide">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Cca. 2 uri</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 4–14 oseb</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Studio Ljubljana</span>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <p className="font-sans text-sm text-muted-text leading-relaxed mb-6">
                  Na naši najbolj priljubljeni cvetlični delavnici vas naučimo teorije barv, pravilne izbire cvetja in tehnike vezave šopkov, medtem ko uživate v neomejenem osvežilnem Aperol Spritzu. Kot nalašč za dekliščine, rojstne dneve in spontana druženja.
                </p>
                <ul className="space-y-3">
                  {["Teorija kompozicije in tehnike vezave šopkov","Vsa sveža sezonska stebla in profesionalno orodje","Neomejen Aperol Spritz ter butični prigrizki","Elegantno pakiran šopek odnesete domov"].map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-foreground leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sage mt-1.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-3 h-full">
                  {[galleryPhotos[1], galleryPhotos[3]].map((photo, i) => (
                    <div
                      key={i}
                      className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer group"
                      onClick={() => setActivePhoto(i === 0 ? 1 : 3)}
                    >
                      <Image src={photo.src} alt={photo.alt} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preberi več button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-bold text-accent-sage hover:text-foreground transition-colors duration-200 group mb-6"
            >
              <span>{expanded ? "Zapri" : "Preberi več o poteku delavnice"}</span>
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            {/* Expandable section */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pb-8 border-t border-pink-100">
                    <h4 className="font-serif text-2xl text-foreground mb-8 mt-6">Kako poteka delavnica?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {delavnicaSteps.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="flex gap-4 p-6 rounded-2xl bg-pink-50/80 border border-pink-100"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-accent-sage shadow-sm">
                            <span className="text-xs font-bold text-muted-text mr-0.5">{i+1}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-accent-sage">{step.icon}</span>
                              <h5 className="font-sans font-bold text-sm text-foreground">{step.title}</h5>
                            </div>
                            <p className="font-sans text-xs text-muted-text leading-relaxed">{step.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Photo gallery */}
                    <h4 className="font-serif text-2xl text-foreground mb-6">Utrinki iz naših delavnic</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {galleryPhotos.map((photo, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.08, duration: 0.4 }}
                          className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer group"
                          onClick={() => setActivePhoto(i)}
                        >
                          <Image src={photo.src} alt={photo.alt} fill sizes="350px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <p className="font-sans text-xs text-muted-text mt-6 italic">
                      * Delavnice potekajo ob petkih in sobotah v našem cvetličnem studiu v Ljubljani. Skupinske rezervacije za dekliščine in team building po dogovoru.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-pink-100">
              <Link
                href="/contact?service=workshop-aperol"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-sans text-[10px] tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full font-bold shadow-lg shadow-foreground/10"
              >
                Rezerviraj doživetje
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="font-sans text-[10px] text-muted-text tracking-wider">
                * Skupinske rezervacije po dogovoru
              </span>
            </div>
          </div>
        </motion.div>

        {/* Second workshop — Horses (compact card) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-xl shadow-pink-100/30 bg-white/90 backdrop-blur-sm flex flex-col md:flex-row"
        >
          <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
            <Image
              src="/images/workshop_horses.jpg"
              alt="Delavnica z konji v naravi"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 md:bg-gradient-to-r" />
            <div className="absolute top-5 left-5 flex flex-col gap-2">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground font-sans text-[9px] tracking-widest uppercase font-bold rounded-full">
                120 € / osebo
              </span>
              <span className="px-4 py-2 bg-accent-sage text-white font-sans text-[9px] tracking-widest uppercase font-bold rounded-full">
                Narava & konji
              </span>
            </div>
          </div>
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-4 text-muted-text font-sans text-xs tracking-wide mb-4">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Cca. 3–4 ure</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 4–12 oseb</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Posestvo v naravi</span>
              </div>
              <h3 className="font-serif text-3xl text-foreground mb-4 leading-tight">
                Cvetlični venci s konji v naravi
              </h3>
              <p className="font-sans text-sm text-muted-text leading-relaxed mb-6">
                Popoln botanični umik v naravo. Na čudovitem posestvu se naučite spletanja lasnih in stenskih cvetličnih vencev v pomirjujoči družbi plemenitih konj. Vključuje domačo kulinariko, profesionalne fotografije in vse materiale.
              </p>
              <ul className="space-y-2 mb-8">
                {["Tehnika spletanja trpežnih stenskih in lasnih vencev","Srečanje in sproščanje ob prisotnosti konj","Profesionalno fotografiranje z vašimi kreacijami","Domača kulinarika in osvežilni lokalni napitki"].map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-foreground leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-sage mt-1.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact?service=workshop-horses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-sans text-[10px] tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full font-bold shadow-md w-fit"
            >
              Rezerviraj doživetje
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Full-screen photo lightbox */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh] aspect-auto rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={galleryPhotos[activePhoto].src}
                alt={galleryPhotos[activePhoto].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white font-sans text-xs tracking-widest uppercase"
              onClick={() => setActivePhoto(null)}
            >
              Zapri ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
