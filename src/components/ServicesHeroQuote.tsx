"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";

interface ServicesHeroQuoteProps {
  variant?: "default" | "outline";
}

export default function ServicesHeroQuote({ variant = "default" }: ServicesHeroQuoteProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <button
        onClick={() => setQuoteOpen(true)}
        className={
          variant === "outline"
            ? "inline-flex items-center justify-center gap-2 text-white font-heading font-bold text-lg py-4 px-8 rounded-lg border-2 border-white/40 hover:border-white transition-colors"
            : "btn-yellow text-lg py-4 px-8"
        }
      >
        Get a Free Quote <ArrowRight size={20} />
      </button>
    </>
  );
}
