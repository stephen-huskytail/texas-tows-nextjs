import { Shield, Clock, Star, Award, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="bg-[#0a2340] border-b border-white/10">
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
          <div className="flex items-center gap-1.5">
            <Award size={13} className="text-[#fef15f]" />
            <span>15% Military &amp; First Responder Discount</span>
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
