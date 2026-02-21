"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import QuoteModal from "./QuoteModal";

export default function StickyMobileCTA() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-2">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 py-4 bg-[#045cb4] text-white font-heading font-bold text-sm"
          >
            <Phone size={18} />
            Call Now
          </a>
          <button
            onClick={() => setQuoteOpen(true)}
            className="flex items-center justify-center gap-2 py-4 bg-[#fef15f] text-[#0a2340] font-heading font-bold text-sm"
          >
            Free Quote →
          </button>
        </div>
      </div>
    </>
  );
}
