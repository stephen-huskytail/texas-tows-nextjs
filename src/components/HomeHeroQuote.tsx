"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function HomeHeroQuote() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setQuoteOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-white text-white font-heading font-semibold rounded-lg hover:bg-white hover:text-[#0a2340] transition-all duration-200 text-base"
        >
          Get a Free Quote <ArrowRight size={18} />
        </button>
      </div>
    </>
  );
}
