"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/gallery", label: "Galerija" },
  { href: "/services", label: "Storitve" },
  { href: "/weddings", label: "Poroke" },
  { href: "/about", label: "O nas" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Wrapper header to handle the floating placement */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out",
          isScrolled ? "pt-4 px-4" : "pt-0 px-0"
        )}
      >
        <div
          className={cn(
            "w-full transition-all duration-500 ease-out flex items-center justify-between border",
            isScrolled
              ? "max-w-5xl bg-white/80 backdrop-blur-xl border-pink-100/60 shadow-lg shadow-pink-200/20 px-6 md:px-8 py-3.5 rounded-full"
              : "max-w-7xl border-transparent bg-transparent shadow-none px-6 md:px-12 py-6 rounded-full"
          )}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center z-50">
            <div
              className={cn(
                "relative transition-all duration-500 overflow-hidden",
                isScrolled ? "w-[130px] h-[65px]" : "w-[180px] h-[90px]"
              )}
            >
              <Image
                src="/images/logo.png"
                alt="Cvetličarna Anaeva"
                fill
                sizes="180px"
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-sans text-[10px] tracking-widest uppercase transition-all duration-300 relative px-4 py-2 hover:text-foreground/70 rounded-full",
                    isActive ? "text-foreground font-semibold" : "text-muted-text"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-accent-sage/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 bg-foreground text-background font-sans text-[10px] tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-500 rounded-full font-semibold",
                isScrolled ? "px-5 py-2.5" : "px-6 py-3.5"
              )}
            >
              Svetovanje
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 -mr-2 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/98 flex flex-col justify-between pt-32 pb-16 px-8 md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-serif text-3xl tracking-wide block transition-colors",
                        isActive ? "text-accent-sage" : "text-foreground hover:text-accent-sage"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div className="h-[1px] bg-border-color w-full" />
              <Link
                href="/contact"
                className="w-full text-center py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full inline-flex items-center justify-center gap-2"
              >
                Rezervacija svetovanja
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center font-sans text-[10px] tracking-wider text-muted-text">
                Cvetličarna Anaeva © 2026
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
