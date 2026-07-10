import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "O našem studiu",
  description: "Spoznajte našo obrt, filozofijo organskega pridobivanja cvetja in vizijo Cvetličarne Anaeva, vrhunskega umetniškega cvetličnega studia v Sloveniji.",
};

export default function AboutPage() {
  return (
    <div className="w-full pt-32 pb-24">
      {/* Hero Intro */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-sage font-bold mb-4 block">
              Obrt Anaeva
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground leading-[1.05] mb-8">
              Upočasnitev ritma za opazovanje <br />
              <span className="italic font-light text-muted-text">lepote cvetenja</span>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="font-sans text-base text-muted-text leading-relaxed mb-6">
              Cvetličarna Anaeva je bila ustanovljena na preprosti, a edinstveni premisi: 
              da je cvetlično oblikovanje visoka umetnost, vredna potrpežljivosti, prefinjene 
              kompozicije in subtilnega pripovedovanja zgodb.
            </p>
            <p className="font-sans text-base text-muted-text leading-relaxed">
              Oblikujemo s prostorom, teksturo in naravnimi linijami. Namesto da bi cvetove silili 
              v toge tradicionalne oblike, jih vodimo in pustimo, da njihovi naravni zavoji in 
              organske forme spregovorijo sami zase.
            </p>
          </div>
        </div>
      </div>

      {/* Asymmetric Wide Image Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="relative aspect-[16/9] w-full max-h-[600px] overflow-hidden rounded-2xl border border-border-color shadow-sm">
          <Image
            src="/images/brand_story.jpg"
            alt="Cvetlična delavnica Anaeva - unikatna zelena dekoracija"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Mission & Philosophy Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#A4B29D]/10 flex items-center justify-center text-accent-sage">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-foreground">
              Naš izbor
            </h3>
            <p className="font-sans text-sm text-muted-text leading-relaxed">
              Gojimo globoke odnose z lokalnimi slovenskimi mikro-kmetijami in izbiramo 
              etične uvoznike v Evropi. Vsak šop izberemo ročno, da zagotovimo najvišji 
              standard svežine, redkosti in integritete.
            </p>
          </div>

          {/* Artistry */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#D9C4BE]/15 flex items-center justify-center text-accent-blush">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-foreground">
              Skulpturalna umetnost
            </h3>
            <p className="font-sans text-sm text-muted-text leading-relaxed">
              Naš prepoznaven slog uporablja asimetrijo, različne višine in prazen prostor za 
              ustvarjanje dramatičnih senc in globin. Vsak kos obravnavamo kot začasno 
              živo skulpturo.
            </p>
          </div>

          {/* Craftsmanship */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-foreground">
              Človeški dotik
            </h3>
            <p className="font-sans text-sm text-muted-text leading-relaxed">
              Vsako posvetilo je ročno napisano na težkem, teksturiranem kartonu. Vsak trak je 
              ročno strgana svila. Verjamemo, da se luksuz skriva v teh drobnih, namernih 
              trenutkih človeške pozornosti.
            </p>
          </div>
        </div>
      </div>

      {/* Storytelling Split section */}
      <div className="bg-white/70 backdrop-blur-sm py-24 border-y border-pink-100/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-border-color shadow-md bg-background">
              <Image
                src="/images/bouquet_purple.jpg"
                alt="Šopek s potonikam in zelenim evkaliptusom - Anaeva studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-sage font-bold block">
                Ustanoviteljica studia
              </span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
                &ldquo;Cvetje je kratkotrajna romanca, <br />
                <span className="italic font-light text-muted-text">oblikovana tako, da pusti trajen pečat.&rdquo;</span>
              </h2>
              <p className="font-sans text-sm text-muted-text leading-relaxed">
                Anaevo je ustanovila Ana, vizualna umetnica, ki je postala cvetlična scenografinja. 
                Po desetletju dela v zasebnih umetniških galerijah v Ljubljani je spoznala, da medij 
                svežih, živih rastlinskih stebel ponuja neprimerljivo čustveno globino in skulpturalni izraz.
              </p>
              <p className="font-sans text-sm text-muted-text leading-relaxed">
                Danes Ana vodi majhno, strastno ekipo oblikovalcev. Skupaj oblikujejo luksuzne poroke 
                po Sloveniji in ustvarjajo tedenske botanične instalacije za prostore, ki cenijo lepoto, 
                prestiž in umetniško pripovedovanje zgodb.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full"
                >
                  Sodelujte z Ano & ekipo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
