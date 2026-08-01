import { Metadata } from "next";
import WorkshopsSection from "@/components/WorkshopsSection";
import ContactSection from "@/components/ContactSection";
import { Sparkles } from "@/components/ui/sparkles";
import { HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cvetlične Delavnice & Doživetja | Cvetličarna Anaeva",
  description: "Združite umetnost floristike z nepozabnim druženjem. Delavnica šopkov z Aperol Spritzom in cvetlični venci s konji v naravi.",
};

const faqs = [
  {
    q: "Kaj če nimam nobenega predznanja iz floristike?",
    a: "Brez skrbi! Naše delavnice so zasnovane za vse ravni – od popolnih začetnikov do ljubiteljev cvetja. Naša cvetličarka vas vodi korak za korakom.",
  },
  {
    q: "Kje potekata delavnici?",
    a: "Delavnica 'Izdelaj svoj šopek + Aperol Spritz' poteka v našem prijetnem cvetličnem studiu v Ljubljani/Trzinu. Delavnica 'Cvetlični venci s konji' pa poteka na čudovitem posestvu v neokrnjeni naravi.",
  },
  {
    q: "Ali lahko delavnico podarim kot darilni bon?",
    a: "Seveda! Nudimo čudovito oblikovane fizične ali digitalne darilne bone za katero koli izmed naših delavnic. Pišite nam ali nas pokličite.",
  },
  {
    q: "Ali je možna skupinska rezervacija (dekliščina / team building)?",
    a: "Da, z veseljem organiziramo zasebne termine za zaključene družbe, dekliščine, rojstne dneve in poslovne team buildinge.",
  },
];

export default function DelavnicePage() {
  return (
    <div className="w-full pt-28 pb-20">
      {/* Top Hero Banner */}
      <div className="relative py-16 md:py-24 bg-white/60 backdrop-blur-sm overflow-hidden border-b border-pink-100/60">
        <Sparkles
          color="#E8B4C0"
          particleDensity={25}
          minSize={0.5}
          maxSize={2.0}
          className="opacity-40"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-accent-sage font-bold mb-3 block">
            Umetnost & Druženje
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground mb-6">
            Cvetlične delavnice <br />
            <span className="italic font-light text-muted-text">in nepozabna doživetja</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-text max-w-2xl mx-auto leading-relaxed mb-8">
            Ustvarite unikatno cvetlično kreacijo z lastnimi rokami v družbi odlične pijače,
            strokovnega vodenja in sproščenega vzdušja.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-text font-sans uppercase tracking-widest font-semibold">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-sage" /> Vsi materiali vključeni</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-sage" /> Šopek odnesete domov</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-sage" /> Majhne skupine</span>
          </div>
        </div>
      </div>

      {/* Main Workshops Section */}
      <WorkshopsSection />

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-sage font-bold mb-2 block">
            Pogosta vprašanja
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Vse, kar morate vedeti
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100/60 shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <HelpCircle className="w-5 h-5 text-accent-sage flex-shrink-0 mt-0.5" />
                <h3 className="font-serif text-xl text-foreground font-medium">{f.q}</h3>
              </div>
              <p className="font-sans text-sm text-muted-text pl-8 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section at bottom */}
      <ContactSection />
    </div>
  );
}
