"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Phone, RefreshCw } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-[#0a2340] min-h-[70vh] flex items-center">
      <div className="container-tx text-center py-20">
        <div className="text-6xl font-heading font-extrabold text-[#fef15f] mb-4">Oops</div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
          We hit an unexpected error. If you need a tow right now, call us — we&apos;re available 24/7.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={BUSINESS.phoneHref} className="btn-yellow text-lg py-4 px-8 inline-flex">
            <Phone size={20} /> Call {BUSINESS.phone}
          </a>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-md transition-colors"
          >
            <RefreshCw size={20} /> Try Again
          </button>
        </div>
      </div>
    </section>
  );
}
