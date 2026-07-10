"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m1",
      sender: "bot",
      text: "Pozdravljeni! Sem Anaevin botanični pomočnik. Kako vam lahko danes pomagam pri izbiri unikatnega cvetja, naročilu šopka ali načrtovanju poročne dekoracije?",
      time: "Danes"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showTeaser, setShowTeaser] = useState(true);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate bot response after a brief delay
    setTimeout(() => {
      const newBotMessage: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: "Hvala za vaše vprašanje. Za več podrobnosti in rezervacije prosimo izpolnite naš uradni obrazec na strani 'Kontakt' ali nam pišite na studio@anaeva.si.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, newBotMessage]);
    }, 1000);
  };

  const handleSuggestion = (suggestionText: string) => {
    setInputValue(suggestionText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Teaser Message */}
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="mb-3 bg-background border border-border-color rounded-xl p-4 shadow-lg w-[280px] relative cursor-pointer hover:border-foreground/10 transition-all select-none"
            onClick={() => setIsOpen(true)}
          >
            {/* Small close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTeaser(false);
              }}
              className="absolute top-2 right-2 p-1 text-muted-text hover:text-foreground transition-colors rounded-full"
              aria-label="Zapri namig"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Teaser Content */}
            <div className="pr-4">
              <span className="font-sans text-[8px] tracking-widest uppercase text-accent-sage font-bold block mb-1">
                Spletni asistent
              </span>
              <p className="font-sans text-xs text-foreground leading-normal">
                Potrebujete pomoč pri izbiri cvetja ali načrtovanju poroke? Poklepetajmo.
              </p>
            </div>

            {/* Little pointer bubble arrow at bottom right */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-background border-r border-b border-border-color transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbox Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-[90vw] sm:w-[380px] h-[500px] bg-background border border-border-color rounded-2xl shadow-2xl overflow-hidden flex flex-col mb-4 bg-background/98 backdrop-blur-md"
          >
            {/* Header */}
            <div className="bg-background-secondary border-b border-border-color px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border-color flex-shrink-0">
                  <img
                    src="/images/chat_avatar.png"
                    alt="Cvetlična asistentka"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-accent-sage border-2 border-background rounded-full animate-pulse z-10" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground leading-tight">
                    Botanični pomočnik
                  </h3>
                  <span className="font-sans text-[9px] tracking-wider text-muted-text uppercase">
                    Anaeva Assistant
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-text hover:text-foreground p-1 transition-colors"
                aria-label="Zapri klepet"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[80%] rounded-2xl p-4 text-xs leading-relaxed",
                    msg.sender === "bot"
                      ? "bg-background-secondary text-foreground self-start rounded-tl-none border border-border-color"
                      : "bg-foreground text-background self-end rounded-tr-none"
                  )}
                >
                  <p className="font-sans">{msg.text}</p>
                  <span className={cn(
                    "text-[8px] mt-1.5 self-end tracking-wider uppercase",
                    msg.sender === "bot" ? "text-muted-text" : "text-background/60"
                  )}>
                    {msg.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && (
              <div className="px-6 py-2 flex flex-wrap gap-2 border-t border-border-color/40 bg-background-secondary/10">
                <button
                  onClick={() => handleSuggestion("Želim naročiti unikatni šopek.")}
                  className="font-sans text-[9px] tracking-wider uppercase px-3 py-1.5 border border-border-color rounded-full text-muted-text hover:text-foreground hover:border-foreground transition-all duration-300"
                >
                  Naročilo šopka
                </button>
                <button
                  onClick={() => handleSuggestion("Zanimajo me poročni aranžmaji.")}
                  className="font-sans text-[9px] tracking-wider uppercase px-3 py-1.5 border border-border-color rounded-full text-muted-text hover:text-foreground hover:border-foreground transition-all duration-300"
                >
                  Poroke & Dekoracija
                </button>
                <button
                  onClick={() => handleSuggestion("Želim ponudbo za poslovni abonma.")}
                  className="font-sans text-[9px] tracking-wider uppercase px-3 py-1.5 border border-border-color rounded-full text-muted-text hover:text-foreground hover:border-foreground transition-all duration-300"
                >
                  Poslovni abonma
                </button>
              </div>
            )}

            {/* Input Footer */}
            <form
              onSubmit={handleSend}
              className="p-4 bg-background border-t border-border-color flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="VPIŠITE SPOROČILO..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-background-secondary border border-border-color focus:border-foreground/20 rounded-full py-3 px-5 text-xs tracking-wider uppercase focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-accent-sage hover:text-foreground transition-colors flex-shrink-0"
                aria-label="Pošlji sporočilo"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl hover:bg-accent-sage hover:text-foreground transition-colors cursor-pointer border border-border-color"
        aria-label="Odpri klepet"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
