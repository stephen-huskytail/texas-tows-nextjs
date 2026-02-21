import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Home, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found | Texas Tows Inc.",
  description: "The page you're looking for doesn't exist. Texas Tows Inc. is available 24/7 for towing and roadside assistance in Dallas, TX.",
};

export default function NotFound() {
  return (
    <section className="bg-[#0a2340] min-h-[70vh] flex items-center">
      <div className="container-tx text-center py-20">
        <div className="text-8xl font-heading font-extrabold text-[#fef15f] mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. If you need a tow right now, call us — we&apos;re available 24/7.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={BUSINESS.phoneHref} className="btn-yellow text-lg py-4 px-8 inline-flex">
            <Phone size={20} /> Call {BUSINESS.phone}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-md transition-colors"
          >
            <Home size={20} /> Go Home <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
