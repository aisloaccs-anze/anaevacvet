import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Poročna floristika & Scenografija",
  description: "Bespoke poročni cvetlični aranžmaji, luksuzne instalacije na lokaciji obreda in stilsko oblikovanje ambienta. Ročno oblikuje studio Cvetličarna Anaeva v Sloveniji.",
};

const weddingServices = [
  {
    title: "Cvetje za nevesto in svate",
    desc: "Unikatni nevestini šopki, nežni aranžmaji za družice in naprsni šopki, prilagojeni vajini barvni paleti in poročni garderobi.",
    img: "/images/bouquet_luxury.jpg"
  },
  {
    title: "Scenografija obreda",
    desc: "Dramatični loki, lebdeče cvetlične kreacije in okrasitev cvetlične poti. Oblikujemo prehode, ki vajino zaobljubo spremenijo v čudovito kuliso.",
    img: "/images/wedding_floral.jpg"
  },
  {
    title: "Dekoracija slavja",
    desc: "Visoki namizni aranžmaji, usklajeni svečniki in cvetlični oblaki, oblikovani tako, da napolnijo prostor z izjemnimi vonjavami in teksturo.",
    img: "/images/event_floral.jpg"
  }
];

export default function WeddingsPage() {
  return (
    <div className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-sage font-bold mb-3 block">
            Ljubezen v cvetju
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground leading-[1.05] mb-6">
            Unikatna poročna scenografija in stilsko oblikovanje
          </h1>
          <p className="font-sans text-sm md:text-base text-muted-text leading-relaxed">
            Verjamemo, da bi moralo cvetje na vaši poroki delovati kot podaljšek vajine romantične zgodbe—mehko, 
            umetniško in polno tekstur. Oblikujemo izbrane ambiente in unikatne dekoracije za butične 
            ter destinacijske poroke po vsej Sloveniji.
          </p>
        </div>

        {/* Big Arch Image banner */}
        <div className="relative aspect-[16/9] w-full max-h-[600px] overflow-hidden rounded-2xl border border-border-color shadow-sm mb-24">
          <Image
            src="/images/wedding_floral.jpg"
            alt="Cvetlična torbica za poroko - Anaeva studio"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Wedding Services list */}
        <div className="space-y-16 mb-28">
          <div className="border-b border-border-color pb-6">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Poročne storitve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingServices.map((wService, idx) => (
              <div key={idx} className="group space-y-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-color shadow-sm bg-background-secondary">
                  <Image
                    src={wService.img}
                    alt={wService.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-accent-sage transition-colors duration-300">
                    {wService.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-text leading-relaxed">
                    {wService.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Process */}
        <div className="bg-white/70 backdrop-blur-sm p-12 md:p-16 rounded-3xl border border-border-color mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-sage font-semibold mb-2 block">
              Pot do poročnega dne
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Naš ustvarjalni proces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-accent-sage border border-border-color mx-auto md:mx-0 font-sans text-xs font-bold">
                1
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Povpraševanje & Pogovor
              </h3>
              <p className="font-sans text-xs text-muted-text leading-relaxed">
                Izpolnite naš obrazec za povpraševanje z datumom in predlogi vizije. Pripravimo kratek 
                sestanek, da uskladimo barvno paleto, obseg in specifične želje.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-accent-sage border border-border-color mx-auto md:mx-0 font-sans text-xs font-bold">
                2
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Oblikovalski predlog
              </h3>
              <p className="font-sans text-xs text-muted-text leading-relaxed">
                Sestavimo podroben oblikovalski predlog z barvno paleto cvetja, izborom vaz, 
                svečnikov in natančnim stroškovnikom dekoracije.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-accent-sage border border-border-color mx-auto md:mx-0 font-sans text-xs font-bold">
                3
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Dekoracija na lokaciji
              </h3>
              <p className="font-sans text-xs text-muted-text leading-relaxed">
                Naša ekipa pride na lokacijo na jutro dogodka, postavi lok in aranžira mize cvet po cvet. 
                Po zaključku dogodka poskrbimo za prevzem in pospravljanje.
              </p>
            </div>
          </div>
        </div>

        {/* Pre-wedding Workshops Section */}
        <div className="py-20 border-t border-border-color/80 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-sage font-bold block">
                Predporočna doživetja
              </span>
              <h2 className="font-serif text-4xl text-foreground leading-tight">
                Popestrite vajino <br />
                <span className="italic font-light text-muted-text">poročno zgodbo</span>
              </h2>
              <p className="font-sans text-sm text-muted-text leading-relaxed">
                Načrtovanje poroke je čudovito potovanje, ki si zasluži trenutke sprostitve in smeha. 
                Ustvarili smo dve edinstveni cvetlični doživetji, ki sta popolni za dekliščine ali miren oddih pred velikim dnem.
              </p>
              <div className="pt-2">
                <Link
                  href="/services#workshop-aperol"
                  className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-foreground hover:text-accent-sage font-semibold group/link"
                >
                  Raziščite vse delavnice
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Side: The 2 Promo Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Card 1: Aperol Spritz */}
              <div className="group bg-white/60 backdrop-blur-sm border border-pink-100/60 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                  <Image
                    src="/images/workshop_aperol.jpg"
                    alt="Dekliščina z Aperol Spritzom in šopki"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-accent-blush text-foreground font-sans text-[8px] tracking-wider uppercase font-bold rounded-full shadow-sm">
                      Zabavno & Družabno
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-accent-sage transition-colors duration-300">
                      Dekliščina: Šopek & Aperol Spritz
                    </h3>
                    <p className="font-sans text-xs text-muted-text leading-relaxed">
                      Nepozabno popoldne z neomejenim Aperol Spritzom, kjer se s prijateljicami naučite vezave luksuznih šopkov.
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/contact?service=workshop-aperol"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-foreground text-background font-sans text-[9px] tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full w-full justify-center"
                    >
                      Rezerviraj za dekliščino
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Horse Wreaths */}
              <div className="group bg-white/60 backdrop-blur-sm border border-pink-100/60 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                  <Image
                    src="/images/workshop_horses.jpg"
                    alt="Cvetlični venci s konji - predporočno doživetje"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-accent-sage text-white font-sans text-[8px] tracking-wider uppercase font-bold rounded-full shadow-sm">
                      Naravni Oddih
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-accent-sage transition-colors duration-300">
                      Cvetlični venci s konji
                    </h3>
                    <p className="font-sans text-xs text-muted-text leading-relaxed">
                      Sproščujoč umik v naravo z nevesto, kjer se v družbi konj naučite spletanja cvetličnih vencev in ustvarite čudovite spominske fotografije.
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/contact?service=workshop-horses"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-foreground text-background font-sans text-[9px] tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full w-full justify-center"
                    >
                      Rezerviraj sprostitev
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wedding CTA block */}
        <div className="text-center max-w-xl mx-auto py-12">
          <Heart className="w-10 h-10 text-accent-blush mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
            Oblikujmo vajin poročni dan
          </h2>
          <p className="font-sans text-sm text-muted-text leading-relaxed mb-8">
            Naš poročni koledar se hitro polni. Rezervirajte svoj datum in začnimo z načrtovanjem 
            vajinega botaničnega ambienta.
          </p>
          <Link
            href="/contact?service=weddings"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full"
          >
            Preveri razpoložljivost datuma
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
