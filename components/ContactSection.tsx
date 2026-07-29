"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const hours = [
  { day: "Ponedeljek — Petek", time: "9:00 – 18:00", open: true },
  { day: "Sobota", time: "9:00 – 13:00", open: true },
  { day: "Nedelja & Prazniki", time: "Zaprto", open: false },
];

const contactInfo = [
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Lokacija",
    content: <>Ljubljanska cesta 12c<br />1236 Trzin, Slovenija</>,
    href: "https://maps.google.com/?q=Ljubljanska+cesta+12c,+Trzin",
  },
  {
    icon: <Phone className="w-4 h-4" />,
    label: "Telefon",
    content: "+386 51 359 266",
    href: "tel:+38651359266",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    label: "E-pošta",
    content: "info.anaeva@gmail.com",
    href: "mailto:info.anaeva@gmail.com",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    content: "@cvetlicarnaanaeva",
    href: "https://www.instagram.com/cvetlicarnaanaeva/",
    external: true,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-teal-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-pink-300 font-bold mb-4 block">
            Stopite v stik
          </span>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-background mb-6">
            Oblikujmo vašo<br />
            <span className="italic font-light text-background/60">cvetlično zgodbo</span>
          </h2>
          <p className="font-sans text-sm text-background/60 leading-relaxed">
            Veselimo se vašega sporočila — najsi gre za šopek, poroko ali pa samo za pozdrav.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Info + Hours + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-pink-400/20 flex items-center justify-center text-pink-300 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-sans text-[9px] tracking-widest uppercase text-background/40 font-semibold mb-1">{item.label}</p>
                    <p className="font-sans text-sm text-background/80 group-hover:text-background transition-colors leading-snug">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2.5 text-pink-300 mb-5">
                <Clock className="w-4 h-4" />
                <span className="font-sans text-[9px] tracking-widest uppercase font-semibold text-background/60">Delovni čas</span>
              </div>
              {hours.map((h, i) => (
                <div key={i} className={`flex justify-between items-center py-3 ${i < hours.length - 1 ? "border-b border-white/8" : ""}`}>
                  <span className="font-sans text-sm text-background/70">{h.day}</span>
                  <span className={`font-sans text-sm font-semibold ${h.open ? "text-teal-300" : "text-rose-400"}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] relative">
              <iframe
                title="Cvetličarna Anaeva lokacija"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.1234567890123!2d14.5645!3d46.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477acd3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sLjubljanská%20cesta%2012c%2C%201236%20Trzin!5e0!3m2!1ssl!2ssi!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0, filter: "grayscale(20%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* RIGHT — Quick contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-5xl mb-6">🌸</div>
                  <h3 className="font-serif text-3xl text-background mb-3">Hvala za sporočilo!</h3>
                  <p className="font-sans text-sm text-background/60">Odgovorili vam bomo v najkrajšem možnem času.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-serif text-3xl text-background mb-2">Pišite nam</h3>
                  <p className="font-sans text-sm text-background/50 mb-10 leading-relaxed">
                    Za rezervacije, vprašanja ali pa samo za klepet — tukaj smo.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-background/40 font-semibold">
                        Ime in priimek
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        placeholder="Ana Novak"
                        className="w-full bg-white/5 border border-white/15 focus:border-pink-300 rounded-xl px-4 py-3.5 font-sans text-sm text-background placeholder:text-background/25 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-background/40 font-semibold">
                        E-pošta
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        placeholder="ana@email.com"
                        className="w-full bg-white/5 border border-white/15 focus:border-pink-300 rounded-xl px-4 py-3.5 font-sans text-sm text-background placeholder:text-background/25 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-background/40 font-semibold">
                        Sporočilo
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                        placeholder="Pozdravljeni, zanima me..."
                        className="w-full bg-white/5 border border-white/15 focus:border-pink-300 rounded-xl px-4 py-3.5 font-sans text-sm text-background placeholder:text-background/25 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-sans text-[10px] tracking-widest uppercase font-bold rounded-full hover:bg-pink-100 transition-all duration-300 shadow-lg"
                    >
                      Pošlji sporočilo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <p className="font-sans text-[10px] text-background/30 text-center tracking-wide">
                      Odgovorimo v roku 24 ur · info.anaeva@gmail.com
                    </p>
                  </form>

                  {/* Or call us */}
                  <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-sans text-xs text-background/40 tracking-wide">Ali nas pokličite direktno</span>
                    <a
                      href="tel:+38651359266"
                      className="inline-flex items-center gap-2 font-sans text-sm font-bold text-background hover:text-pink-300 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +386 51 359 266
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Full contact page link */}
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-background/40 hover:text-background transition-colors"
              >
                Odpri celotno kontaktno stran
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
