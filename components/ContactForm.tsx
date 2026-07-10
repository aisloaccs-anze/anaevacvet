"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  message: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "bouquets",
  date: "",
  message: "",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    serviceType: serviceParam || "bouquets",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Partial<FormState> = {};
    if (!form.name.trim()) tempErrors.name = "Ime in priimek sta obvezna";
    
    if (!form.email.trim()) {
      tempErrors.email = "E-poštni naslov je obvezen";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Vnesite veljaven e-poštni naslov";
    }

    if (!form.phone.trim()) tempErrors.phone = "Telefonska številka je obvezna";
    if (!form.message.trim()) tempErrors.message = "Vsebina sporočila je obvezna";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Mock API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setForm(initialFormState);
  };

  return (
    <div className="w-full max-w-xl bg-background-secondary border border-border-color p-8 md:p-12 rounded-2xl shadow-sm">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Pošljite povpraševanje
              </h3>
              <p className="font-sans text-xs text-muted-text">
                Izpolnite spodnje podatke in naš ustvarjalni studio vas bo kontaktiral v najkrajšem možnem času.
              </p>
            </div>

            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-sans text-[10px] tracking-widest uppercase text-muted-text font-semibold">
                Ime in priimek *
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border-color focus:border-foreground py-3.5 px-4 text-xs tracking-wider focus:outline-none rounded-lg transition-colors"
                placeholder="ANA HRAST"
              />
              {errors.name && <span className="text-[10px] text-accent-sage font-sans tracking-wide">{errors.name}</span>}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-sans text-[10px] tracking-widest uppercase text-muted-text font-semibold">
                  E-poštni naslov *
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-background border border-border-color focus:border-foreground py-3.5 px-4 text-xs tracking-wider focus:outline-none rounded-lg transition-colors"
                  placeholder="ANA.HRAST@GMAIL.COM"
                />
                {errors.email && <span className="text-[10px] text-accent-sage font-sans tracking-wide">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="font-sans text-[10px] tracking-widest uppercase text-muted-text font-semibold">
                  Telefonska številka *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-background border border-border-color focus:border-foreground py-3.5 px-4 text-xs tracking-wider focus:outline-none rounded-lg transition-colors"
                  placeholder="+386 40 123 456"
                />
                {errors.phone && <span className="text-[10px] text-accent-sage font-sans tracking-wide">{errors.phone}</span>}
              </div>
            </div>

            {/* Service & Date Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="serviceType" className="font-sans text-[10px] tracking-widest uppercase text-muted-text font-semibold">
                  Vrsta storitve
                </label>
                <select
                  id="serviceType"
                  value={form.serviceType}
                  onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                  className="w-full bg-background border border-border-color focus:border-foreground py-3.5 px-4 text-xs tracking-wider focus:outline-none rounded-lg transition-colors appearance-none cursor-pointer"
                >
                  <option value="bouquets">Unikatni šopki</option>
                  <option value="weddings">Poročna scenografija</option>
                  <option value="events">Dekoracija dogodkov</option>
                  <option value="corporate">Poslovni naročniški abonma</option>
                  <option value="workshop-aperol">Delavnica: Šopek & Aperol Spritz</option>
                  <option value="workshop-horses">Delavnica: Venci s konji</option>
                  <option value="custom">Naročilo po meri</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="date" className="font-sans text-[10px] tracking-widest uppercase text-muted-text font-semibold">
                  Datum dogodka / dostave
                </label>
                <input
                  type="date"
                  id="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-background border border-border-color focus:border-foreground py-3.5 px-4 text-xs tracking-wider focus:outline-none rounded-lg transition-colors cursor-pointer"
                />
              </div>
            </div>

            {/* Message Details */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-sans text-[10px] tracking-widest uppercase text-muted-text font-semibold">
                Zaupajte nam več o vaši viziji *
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-background border border-border-color focus:border-foreground py-3.5 px-4 text-xs tracking-wider focus:outline-none rounded-lg transition-colors resize-none"
                placeholder="OPIŠITE BARVE, TEMATIKO ALI VZDUŠJE CVETJA, KI GA ŽELITE..."
              />
              {errors.message && <span className="text-[10px] text-accent-sage font-sans tracking-wide">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent-sage hover:text-foreground transition-all duration-300 rounded-full disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Pošiljanje...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Pošlji povpraševanje
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12 flex flex-col items-center justify-center"
          >
            <CheckCircle className="w-16 h-16 text-accent-sage mb-6" />
            <h3 className="font-serif text-3xl text-foreground mb-4">
              Povpraševanje prejeto
            </h3>
            <p className="font-sans text-sm text-muted-text max-w-sm leading-relaxed mb-8">
              Hvala, ker ste z nami delili svojo vizijo. Pregledali bomo vaše želje in vas kontaktirali v najkrajšem možnem času.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-2.5 border border-foreground/10 hover:border-foreground/30 font-sans text-[10px] tracking-widest uppercase transition-colors rounded-full text-foreground"
            >
              Pošlji novo sporočilo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
