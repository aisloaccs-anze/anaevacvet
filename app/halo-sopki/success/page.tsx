import { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "@/components/ui/sparkles";
import { CheckCircle2, ArrowRight, Phone, Home, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Plačilo uspešno | Cvetličarna Anaeva",
  description: "Hvala za vaše naročilo v spletni cvetličarni Anaeva.",
};

export default function OrderSuccessPage() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[140px] pointer-events-none" />

      <Sparkles
        color="#E8B4C0"
        particleDensity={30}
        minSize={0.6}
        maxSize={2.2}
        className="opacity-40"
      />

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        {/* Animated badge */}
        <div className="w-20 h-20 rounded-full bg-pink-100/80 border border-pink-200 flex items-center justify-center text-pink-500 mx-auto mb-8 shadow-xl shadow-pink-200/50">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-accent-sage font-bold mb-3 block">
          Plačilo potrjeno
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
          Hvala za vaše naročilo! <br />
          <span className="italic font-light text-muted-text">Cvetje je v pripravi</span>
        </h1>

        <p className="font-sans text-sm md:text-base text-muted-text leading-relaxed mb-10 max-w-xl mx-auto">
          Vaše plačilo je bilo uspešno obdelano preko **Stripe**. Naša cvetličarka v studiu že pripravlja
          vašo cvetlično kreacijo. Potrdilo naročila in račun sta bila poslana na vaš e-poštni naslov.
        </p>

        {/* Info Box */}
        <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100 text-left mb-10 space-y-3">
          <div className="flex items-center justify-between border-b border-pink-50 pb-3">
            <span className="font-sans text-xs text-muted-text uppercase tracking-wider">Status naročila</span>
            <span className="font-sans text-xs font-bold text-accent-sage uppercase tracking-wider">Plačano & Potrjeno</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs text-muted-text uppercase tracking-wider">Pomoč & Vprašanja</span>
            <span className="font-sans text-xs font-bold text-foreground">+386 51 359 266</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/halo-sopki"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-accent-sage hover:text-foreground transition-all duration-300 shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            Nazaj v cvetličarno
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/15 text-foreground font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-pink-50 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Domov
          </Link>
        </div>
      </div>
    </div>
  );
}
