"use client";

import { Shield, Clock, Star, Award, Phone, GraduationCap, HeartHandshake } from "lucide-react";
import { BUSINESS, getCurrentPromo } from "@/lib/constants";

// Icon map — keyed by promo group name so TrustBar can render the right icon
const PROMO_ICONS: Record<string, React.ElementType> = {
  Military: Award,
  Teachers: GraduationCap,
  "First Responders": HeartHandshake,
};

export default function TrustBar() {
  const promo = getCurrentPromo();
  const PromoIcon = PROMO_ICONS[promo.group] ?? Award;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0a2340] border-b border-white/10">
      <div className="container-tx">
        <div className="flex items-center justify-between py-2 overflow-x-auto gap-4 text-xs text-gray-300 whitespace-nowrap">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#fef15f]" />
            <span>24/7 Emergency Response</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star size={13} className="text-[#fef15f] fill-[#fef15f]" />
            <span>{BUSINESS.rating} Stars · {BUSINESS.reviewCount}+ Reviews</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield size={13} className="text-[#fef15f]" />
            <span>Licensed &amp; Insured · TDLR #{BUSINESS.tdlr}</span>
          </div>
          {/* Monthly rotating promo — source of truth: lib/constants.ts getCurrentPromo() */}
          <div className="flex items-center gap-1.5 text-[#fef15f] font-semibold">
            <PromoIcon size={13} className="flex-shrink-0" />
            <span>{promo.label} — Ask when you call!</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone size={13} className="text-[#fef15f]" />
            <a href={BUSINESS.phoneHref} className="hover:text-white transition-colors font-semibold">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
