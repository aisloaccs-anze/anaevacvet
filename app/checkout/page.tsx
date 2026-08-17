"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import {
  ShoppingBag,
  Truck,
  Gift,
  Phone,
  Check,
  Lock,
  ArrowLeft,
  MapPin,
  CreditCard,
} from "lucide-react";

interface BouquetOption {
  id: string;
  title: string;
  subtitle: string;
  basePrice: number;
  image: string;
}

const bouquetList: BouquetOption[] = [
  {
    id: "sezonski",
    title: "Sezonski šopek Anaeva",
    subtitle: "Sveže sezonsko cvetje v pastelnih tonih",
    basePrice: 45,
    image: "/images/carousel1.jpg",
  },
  {
    id: "romanticni",
    title: "Romantična rožnata simfonija",
    subtitle: "Vrtnice, potonike in dišeči evkaliptus",
    basePrice: 65,
    image: "/images/carousel2.jpg",
  },
  {
    id: "botanicni",
    title: "Botanična bakrena kreacija",
    subtitle: "Skulpturalna kompozicija z eksotičnim cvetjem",
    basePrice: 75,
    image: "/images/carousel3.jpg",
  },
  {
    id: "anthurium",
    title: "Vijolična anthurium simfonija",
    subtitle: "Arhitekturno zasnovan šopek z anthuriji",
    basePrice: 85,
    image: "/images/carousel4.jpg",
  },
  {
    id: "grand",
    title: "Posebna Anaeva mojstrovina",
    subtitle: "Grand raskošen šopek za nepozabne trenutke",
    basePrice: 110,
    image: "/images/carousel5.jpg",
  },
  {
    id: "custom",
    title: "Šopek po meri",
    subtitle: "Sestavljen po vaših željah in proračunu",
    basePrice: 50,
    image: "/images/hero_floral.jpg",
  },
];

function CheckoutFormContent() {
  const searchParams = useSearchParams();
  const itemParam = searchParams.get("item") || "sezonski";

  const [selectedBouquet, setSelectedBouquet] = useState<BouquetOption>(() => {
    return bouquetList.find((b) => b.id === itemParam) || bouquetList[0];
  });

  const [sizeOption, setSizeOption] = useState<"Standard" | "Medium" | "Grand">("Standard");
  const [deliveryType, setDeliveryType] = useState<"Dostava" | "Prevzem">("Dostava");
  const [recipientName, setRecipientName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Ljubljana / Trzin");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Price calculations
  const calculateBasePrice = () => {
    let mult = 1;
    if (sizeOption === "Medium") mult = 1.4;
    if (sizeOption === "Grand") mult = 1.9;
    return Math.round(selectedBouquet.basePrice * mult);
  };

  const subtotal = calculateBasePrice();
  const deliveryFee = deliveryType === "Dostava" ? (subtotal >= 60 ? 0 : 5) : 0;
  const totalPrice = subtotal + deliveryFee;

  const handleStripeCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: selectedBouquet.title,
          amountInEuros: totalPrice,
          image: selectedBouquet.image,
          sizeOption,
          deliveryOption: deliveryType,
          note: note ? `Za: ${recipientName || "Prejemnika"} (${phone || "brez štev"}) - "${note}"` : "",
          type: "bouquet",
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Napaka pri povezovanju s Stripe");
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Napaka pri povezovanju s Stripe plačilnim sistemom");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Delivery & Personal Details Form */}
      <div className="lg:col-span-7 space-y-8">
        <form onSubmit={handleStripeCheckout} className="space-y-8">
          
          {/* Section 1: Choose Bouquet */}
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-pink-100/70 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-pink-100 pb-4">
              <div className="flex items-center gap-2.5 text-pink-500">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="font-serif text-xl text-foreground font-bold">1. Izberite šopek in velikost</h2>
              </div>
              <span className="font-sans text-[9px] uppercase tracking-widest text-accent-sage font-bold">
                Cvetličarna Anaeva
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {bouquetList.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBouquet(b)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                    selectedBouquet.id === b.id
                      ? "border-pink-400 bg-pink-50/70 font-semibold shadow-sm"
                      : "border-pink-100 hover:border-pink-200 bg-white"
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-pink-100">
                    <Image src={b.image} alt={b.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-sm text-foreground truncate font-bold">{b.title}</h4>
                    <p className="font-sans text-[10px] text-muted-text truncate">{b.subtitle}</p>
                    <span className="font-sans text-xs text-pink-600 font-bold">od {b.basePrice} €</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Size Options */}
            <div className="pt-4 border-t border-pink-100">
              <label className="font-sans text-xs uppercase tracking-wider font-bold text-foreground block mb-2">
                Velikost šopka
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(["Standard", "Medium", "Grand"] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSizeOption(sz)}
                    className={`py-3 px-3 rounded-xl border text-center font-sans text-xs tracking-wider uppercase transition-all ${
                      sizeOption === sz
                        ? "border-pink-500 bg-pink-50 font-bold text-pink-600 shadow-sm"
                        : "border-pink-100 text-muted-text hover:border-pink-200 bg-white"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Delivery & Address */}
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-pink-100/70 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-pink-500 border-b border-pink-100 pb-4">
              <Truck className="w-5 h-5" />
              <h2 className="font-serif text-xl text-foreground font-bold">2. Način prevzema in podatki dostave</h2>
            </div>

            {/* Delivery vs Pickup Toggle */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDeliveryType("Dostava")}
                className={`py-3.5 px-4 rounded-xl border flex items-center justify-center gap-2 font-sans text-xs tracking-wider uppercase font-bold transition-all ${
                  deliveryType === "Dostava"
                    ? "border-pink-500 bg-pink-50 text-pink-600 shadow-sm"
                    : "border-pink-100 text-muted-text hover:border-pink-200 bg-white"
                }`}
              >
                <Truck className="w-4 h-4" />
                Dostava na dom
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType("Prevzem")}
                className={`py-3.5 px-4 rounded-xl border flex items-center justify-center gap-2 font-sans text-xs tracking-wider uppercase font-bold transition-all ${
                  deliveryType === "Prevzem"
                    ? "border-pink-500 bg-pink-50 text-pink-600 shadow-sm"
                    : "border-pink-100 text-muted-text hover:border-pink-200 bg-white"
                }`}
              >
                <MapPin className="w-4 h-4" />
                Osebni prevzem (Trzin)
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-xs uppercase tracking-wider font-bold text-foreground block mb-1.5">
                  Ime in priimek prejemnika *
                </label>
                <input
                  type="text"
                  required
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="npr. Maja Novak"
                  className="w-full bg-pink-50/30 border border-pink-100 focus:border-pink-400 rounded-xl p-3.5 font-sans text-xs text-foreground focus:outline-none"
                />
              </div>

              <div>
                <label className="font-sans text-xs uppercase tracking-wider font-bold text-foreground block mb-1.5">
                  Telefonska številka prejemnika *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="npr. 041 123 456"
                  className="w-full bg-pink-50/30 border border-pink-100 focus:border-pink-400 rounded-xl p-3.5 font-sans text-xs text-foreground focus:outline-none"
                />
              </div>
            </div>

            {deliveryType === "Dostava" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="font-sans text-xs uppercase tracking-wider font-bold text-foreground block mb-1.5">
                    Naslov za dostavo (Ulica in hišna št.) *
                  </label>
                  <input
                    type="text"
                    required={deliveryType === "Dostava"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="npr. Dunajska cesta 45"
                    className="w-full bg-pink-50/30 border border-pink-100 focus:border-pink-400 rounded-xl p-3.5 font-sans text-xs text-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-wider font-bold text-foreground block mb-1.5">
                    Kraj / Pošta
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="1000 Ljubljana"
                    className="w-full bg-pink-50/30 border border-pink-100 focus:border-pink-400 rounded-xl p-3.5 font-sans text-xs text-foreground focus:outline-none"
                  />
                </div>
              </div>
            )}

          </div>

          {/* Submit Button to Stripe */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-5 bg-foreground text-background font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-accent-sage hover:text-foreground transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-foreground/10 disabled:opacity-50"
          >
            {isLoading ? (
              <span>Preusmerjanje na Stripe varno plačilo...</span>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                Varno plačilo s kartico (Stripe) — {totalPrice} €
              </>
            )}
          </button>
        </form>
      </div>

      {/* Right Column: Order Summary Sidebar */}
      <div className="lg:col-span-5 sticky top-28 space-y-6">
        <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-pink-100/80 shadow-lg space-y-6">
          <h3 className="font-serif text-2xl text-foreground border-b border-pink-100 pb-4">
            Povzetek naročila
          </h3>

          {/* Selected Item Preview */}
          <div className="flex gap-4 items-center p-4 rounded-2xl bg-pink-50/50 border border-pink-100">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-pink-100">
              <Image src={selectedBouquet.image} alt={selectedBouquet.title} fill className="object-cover" />
            </div>
            <div>
              <span className="font-sans text-[9px] tracking-widest uppercase text-accent-sage font-bold">
                Halo šopek
              </span>
              <h4 className="font-serif text-lg text-foreground font-bold">{selectedBouquet.title}</h4>
              <p className="font-sans text-xs text-muted-text">Velikost: {sizeOption}</p>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3 pt-2 font-sans text-xs">
            <div className="flex justify-between text-muted-text">
              <span>Šopek ({sizeOption})</span>
              <span className="font-semibold text-foreground">{subtotal} €</span>
            </div>
            <div className="flex justify-between text-muted-text">
              <span>Dostava ({deliveryType})</span>
              <span className="font-semibold text-foreground">
                {deliveryFee === 0 ? "Brezplačno" : `${deliveryFee} €`}
              </span>
            </div>
            <div className="flex justify-between text-muted-text">
              <span>Osebno posvetilo</span>
              <span className="font-semibold text-accent-sage">Brezplačno</span>
            </div>
            <div className="border-t border-pink-100 pt-4 flex justify-between items-center text-sm font-bold text-foreground">
              <span className="font-serif text-lg">Skupaj za plačilo</span>
              <span className="font-serif text-2xl text-pink-600">{totalPrice} €</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="pt-4 border-t border-pink-100 space-y-2 text-[11px] font-sans text-muted-text">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-accent-sage flex-shrink-0" />
              <span>Varno 256-bitno Stripe šifrirano plačilo</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-accent-sage flex-shrink-0" />
              <span>Sveže cvetje ročno sestavljeno na dan dostave</span>
            </div>
          </div>
        </div>

        {/* Greeting Card Note — below price box */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl border border-pink-100/70 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5 text-pink-500">
            <Gift className="w-5 h-5 flex-shrink-0" />
            <h3 className="font-serif text-lg text-foreground font-bold">Brezplačno osebno posvetilo</h3>
          </div>
          <p className="font-sans text-xs text-muted-text">
            K vsakemu šopku priložimo ročno napisano posvetilo na teksturirani kartici Anaeva.
          </p>
          <textarea
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Vnesite besedilo posvetila (npr. Draga Maja, vse najboljše za tvoj 30. rojstni dan!)..."
            className="w-full bg-pink-50/30 border border-pink-100 focus:border-pink-400 rounded-xl p-3.5 font-sans text-xs text-foreground focus:outline-none resize-none"
          />
        </div>

        {/* Quick Phone Call Assistance */}
        <div className="p-6 rounded-3xl bg-pink-50/60 border border-pink-100 text-center space-y-3">
          <p className="font-sans text-xs text-muted-text">
            Potrebujete pomoč pri naročilu ali imate posebne želje?
          </p>
          <a
            href="tel:+38651359266"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-400 text-white font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-pink-300 transition-colors w-full"
          >
            <Phone className="w-4 h-4" />
            Pokličite: +386 51 359 266
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="w-full pt-28 pb-24 bg-background min-h-screen">
      {/* Top Banner */}
      <div className="relative py-12 bg-white/60 backdrop-blur-sm overflow-hidden border-b border-pink-100/60 mb-12">
        <Sparkles
          color="#E8B4C0"
          particleDensity={20}
          minSize={0.5}
          maxSize={2.0}
          className="opacity-30"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link
              href="/halo-sopki"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-muted-text hover:text-foreground mb-3 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Nazaj na Halo šopke
            </Link>
            <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground">
              Blagajna & Plačilo
            </h1>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-pink-50 border border-pink-100 rounded-full text-xs font-sans font-bold text-accent-sage">
            <Lock className="w-4 h-4" />
            <span>Varno Stripe Plačilo (SSL)</span>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-20 font-sans text-sm text-muted-text">Nalaganje blagajne...</div>}>
        <CheckoutFormContent />
      </Suspense>
    </div>
  );
}
