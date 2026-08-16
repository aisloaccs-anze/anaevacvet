"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import { ShoppingBag, Truck, Gift, Phone, Mail, Check, X, ArrowRight, Heart } from "lucide-react";

interface BouquetProduct {
  id: number;
  title: string;
  subtitle: string;
  category: "Sezonski" | "Romantični" | "Ekskluzivni" | "Šopki po meri";
  price: string;
  basePrice: number;
  image: string;
  description: string;
  badge?: string;
}

const products: BouquetProduct[] = [
  {
    id: 1,
    title: "Sezonski šopek Anaeva",
    subtitle: "Sveže sezonsko cvetje v mehkih pastelnih tonih",
    category: "Sezonski",
    price: "od 45 €",
    basePrice: 45,
    image: "/images/carousel1.jpg",
    description: "Naš najbolj priljubljen vsakodnevni šopek, sestavljen iz najboljše dnevne ponudbe svežega cvetja.",
    badge: "Priljubljeno",
  },
  {
    id: 2,
    title: "Romantična rožnata simfonija",
    subtitle: "Luksuzne vrtnice, potonike in dišeči evkaliptus",
    category: "Romantični",
    price: "od 65 €",
    basePrice: 65,
    image: "/images/carousel2.jpg",
    description: "Čudovit raskošen šopek, namenjen izkazovanju ljubezni, hvaležnosti in obletnicam.",
    badge: "Bestseller",
  },
  {
    id: 3,
    title: "Botanična bakrena kreacija",
    subtitle: "Skulpturalna kompozicija z eksotičnim cvetjem",
    category: "Ekskluzivni",
    price: "od 75 €",
    basePrice: 75,
    image: "/images/carousel3.jpg",
    description: "Unikatna umetniška kompozicija z bogatimi bakrenimi in zlatimi botaničnimi poudarki.",
  },
  {
    id: 4,
    title: "Vijolična anthurium simfonija",
    subtitle: "Pogumna barvna kombinacija z drznimi anthuriji",
    category: "Ekskluzivni",
    price: "od 85 €",
    basePrice: 85,
    image: "/images/carousel4.jpg",
    description: "Sodoben, arhitekturno zasnovan šopek za ljubitelje drznih, ekskluzivnih oblik.",
  },
  {
    id: 5,
    title: "Posebna Anaeva mojstrovina",
    subtitle: "Raskošen grand šopek za najpomembnejše trenutke",
    category: "Romantični",
    price: "od 110 €",
    basePrice: 110,
    image: "/images/carousel5.jpg",
    description: "Raskošen šopek velikih dimenzij, ki bo očaral vsakogar in ustvaril nepozaben vtis.",
    badge: "Ekskluzivno",
  },
  {
    id: 6,
    title: "Šopek po meri",
    subtitle: "Sestavljen povsem po vaših barvnih in cvetličnih željah",
    category: "Šopki po meri",
    price: "Po dogovoru",
    basePrice: 50,
    image: "/images/hero_floral.jpg",
    description: "Imate posebne želje glede barv, cvetja ali proračuna? Cvetličarka Anaeva sestavi šopek po vašem naročilu.",
  },
];

const categories = ["Vsi šopki", "Sezonski", "Romantični", "Ekskluzivni", "Šopki po meri"];

export default function HaloSopkiPage() {
  const [selectedCategory, setSelectedCategory] = useState("Vsi šopki");
  const [selectedProduct, setSelectedProduct] = useState<BouquetProduct | null>(null);
  const [sizeOption, setSizeOption] = useState<"Standard" | "Medium" | "Grand">("Standard");
  const [deliveryOption, setDeliveryOption] = useState<"Dostava" | "Prevzem">("Dostava");
  const [note, setNote] = useState("");
  const [orderSent, setOrderSent] = useState(false);

  const filteredProducts = selectedCategory === "Vsi šopki"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const calculatePrice = (product: BouquetProduct) => {
    if (product.price === "Po dogovoru") return "Po dogovoru";
    let multiplier = 1;
    if (sizeOption === "Medium") multiplier = 1.4;
    if (sizeOption === "Grand") multiplier = 1.9;
    return `${Math.round(product.basePrice * multiplier)} €`;
  };

  const handleQuickOrderSubmit = (e: React.FormEvent) => {
  const [isRedirectingToStripe, setIsRedirectingToStripe] = useState(false);

  const calculateNumericPrice = (product: BouquetProduct) => {
    if (product.price === "Po dogovoru") return 50;
    let multiplier = 1;
    if (sizeOption === "Medium") multiplier = 1.4;
    if (sizeOption === "Grand") multiplier = 1.9;
    return Math.round(product.basePrice * multiplier);
  };

  const handleStripeCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    try {
      setIsRedirectingToStripe(true);
      const numericPrice = calculateNumericPrice(selectedProduct);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: selectedProduct.title,
          amountInEuros: numericPrice,
          image: selectedProduct.image,
          sizeOption,
          deliveryOption,
          note,
          type: "bouquet",
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Napaka pri povezovanju s Stripe");
        setIsRedirectingToStripe(false);
      }
    } catch (err) {
      console.error("Stripe error:", err);
      alert("Napaka pri povezovanju s Stripe strežnikom");
      setIsRedirectingToStripe(false);
    }
  };

  return (
    <div className="w-full pt-28 pb-24">
      {/* Top Banner */}
      <div className="relative py-16 md:py-24 bg-white/60 backdrop-blur-sm overflow-hidden border-b border-pink-100/60">
        <Sparkles
          color="#E8B4C0"
          particleDensity={28}
          minSize={0.5}
          maxSize={2.0}
          className="opacity-40"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-pink-400 font-bold mb-3 block">
            Online Cvetlični Butik
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground mb-6">
            Halo šopki <br />
            <span className="italic font-light text-muted-text">sveže cvetje na vašem pragu</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-text max-w-2xl mx-auto leading-relaxed mb-10">
            Izberite unikatno cvetlično kreacijo in jo naročite preko spleta ali po telefonu.
            Z ljubeznijo dostavimo v Trzinu, Ljubljani in okolici.
          </p>

          {/* Key Advantages Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 border-t border-pink-100">
            <div className="flex items-center justify-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-pink-100/80 flex items-center justify-center text-pink-500 flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-foreground font-bold">Hitra dostava</h4>
                <p className="font-sans text-xs text-muted-text">Trzin, Ljubljana z okolico</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-pink-100/80 flex items-center justify-center text-pink-500 flex-shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-foreground font-bold">Brezplačno posvetilo</h4>
                <p className="font-sans text-xs text-muted-text">Priloženo k vsakemu šopku</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-pink-100/80 flex items-center justify-center text-pink-500 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-foreground font-bold">Naročilo po telefonu</h4>
                <p className="font-sans text-xs text-muted-text">+386 51 359 266</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-foreground text-background font-bold shadow-md shadow-foreground/10"
                  : "bg-white/80 text-muted-text hover:text-foreground hover:bg-pink-50 border border-pink-100/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-pink-100/70 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-pink-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-foreground text-background font-sans text-[8px] tracking-widest uppercase font-bold shadow-md">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-foreground font-sans text-xs font-bold shadow-sm">
                    {product.price}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-accent-sage font-bold block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-pink-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-text leading-relaxed mb-4">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-col gap-2">
                <Link
                  href={`/checkout?item=${product.id === 1 ? "sezonski" : product.id === 2 ? "romanticni" : product.id === 3 ? "botanicni" : product.id === 4 ? "anthurium" : product.id === 5 ? "grand" : "custom"}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-foreground text-background font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-accent-sage hover:text-foreground transition-all duration-300 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Blagajna & Plačilo ({product.price})
                </Link>
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setSizeOption("Standard");
                    setIsRedirectingToStripe(false);
                    setOrderSent(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 border border-pink-100 text-muted-text hover:text-foreground font-sans text-[10px] tracking-widest uppercase rounded-full hover:bg-pink-50 transition-colors"
                >
                  Hitri predogled / Posvetilo
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-foreground text-background relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-pink-300 font-bold block">
              Posebne želje
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-background">
              Želite nekaj povsem unikatnega?
            </h3>
            <p className="font-sans text-sm text-background/70 leading-relaxed">
              Pokličite nas ali nam pišite. Z veseljem sestavimo šopek po vaših točnih željah glede barv, cvetja in proračuna.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="tel:+38651359266"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pink-400 text-white font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-pink-300 transition-all duration-300 text-center"
            >
              <Phone className="w-4 h-4" />
              Pokličite: 051 359 266
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-background font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-center"
            >
              Pišite nam
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Product Order Modal / Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-pink-100 bg-pink-50/50">
                <div>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-accent-sage font-bold block">
                    Naročilo šopka
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">{selectedProduct.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-9 h-9 rounded-full bg-white border border-pink-100 flex items-center justify-center text-foreground hover:bg-pink-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                {orderSent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-3xl mx-auto mb-4">
                      🌸
                    </div>
                    <h4 className="font-serif text-3xl text-foreground mb-2">Hvala za naročilo!</h4>
                    <p className="font-sans text-sm text-muted-text max-w-md mx-auto leading-relaxed mb-6">
                      Prejeli smo vaše povpraševanje za šopek <strong>{selectedProduct.title}</strong>.
                      V kratkem vas pokličemo ali vam pišemo za potrditev dostave.
                    </p>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="px-8 py-3 bg-foreground text-background font-sans text-xs tracking-widest uppercase font-bold rounded-full"
                    >
                      Zapri okno
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Product Quick Info */}
                    <div className="flex gap-4 items-center p-4 rounded-2xl bg-pink-50/40 border border-pink-100">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-pink-100">
                        <Image src={selectedProduct.image} alt={selectedProduct.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-foreground font-bold">{selectedProduct.title}</h4>
                        <p className="font-sans text-xs text-muted-text leading-tight mb-1">{selectedProduct.subtitle}</p>
                        <span className="font-serif text-xl text-pink-600 font-bold">
                          {calculatePrice(selectedProduct)}
                        </span>
                      </div>
                    </div>

                    <form onSubmit={handleStripeCheckout} className="space-y-5">
                      {/* Size Selector */}
                      {selectedProduct.price !== "Po dogovoru" && (
                        <div>
                          <label className="font-sans text-xs tracking-wider uppercase font-bold text-foreground block mb-2">
                            Izberite velikost šopka
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
                                    : "border-pink-100 text-muted-text hover:border-pink-200"
                                }`}
                              >
                                {sz}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Delivery Option */}
                      <div>
                        <label className="font-sans text-xs tracking-wider uppercase font-bold text-foreground block mb-2">
                          Način prevzema / dostave
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setDeliveryOption("Dostava")}
                            className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 font-sans text-xs tracking-wider uppercase transition-all ${
                              deliveryOption === "Dostava"
                                ? "border-pink-500 bg-pink-50 font-bold text-pink-600 shadow-sm"
                                : "border-pink-100 text-muted-text hover:border-pink-200"
                            }`}
                          >
                            <Truck className="w-4 h-4" />
                            Dostava na dom
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeliveryOption("Prevzem")}
                            className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 font-sans text-xs tracking-wider uppercase transition-all ${
                              deliveryOption === "Prevzem"
                                ? "border-pink-500 bg-pink-50 font-bold text-pink-600 shadow-sm"
                                : "border-pink-100 text-muted-text hover:border-pink-200"
                            }`}
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Osebni prevzem (Trzin)
                          </button>
                        </div>
                      </div>

                      {/* Personal Note */}
                      <div>
                        <label className="font-sans text-xs tracking-wider uppercase font-bold text-foreground block mb-2">
                          Brezplačno posvetilo (opcijsko)
                        </label>
                        <textarea
                          rows={3}
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          placeholder="Zapis posvetila na kartici (npr. Vse najboljše za rojstni dan!)..."
                          className="w-full bg-pink-50/30 border border-pink-100 focus:border-pink-400 rounded-xl p-3.5 font-sans text-xs text-foreground placeholder:text-muted-text/50 focus:outline-none resize-none"
                        />
                      </div>

                      {/* Quick Contact Options */}
                      <div className="pt-4 border-t border-pink-100 flex flex-col gap-3">
                        <button
                          type="submit"
                          disabled={isRedirectingToStripe}
                          className="w-full py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-accent-sage hover:text-foreground transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                        >
                          {isRedirectingToStripe ? (
                            <span>Nalaganje Stripe plačila...</span>
                          ) : (
                            <>
                              <Check className="w-4 h-4" />
                              Plačaj s kartico (Stripe) — {calculatePrice(selectedProduct)}
                            </>
                          )}
                        </button>

                        <div className="text-center font-sans text-xs text-muted-text">ali pokličite za takojšnjo potrditev:</div>

                        <a
                          href="tel:+38651359266"
                          className="w-full py-3.5 bg-pink-400 text-white font-sans text-xs tracking-widest uppercase font-bold rounded-full hover:bg-pink-300 transition-colors flex items-center justify-center gap-2 text-center"
                        >
                          <Phone className="w-4 h-4" />
                          Pokliči: +386 51 359 266
                        </a>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
