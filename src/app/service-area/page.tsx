import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { AREA_DATA } from "@/lib/areaData";

export const metadata: Metadata = {
  title: "Dallas Towing Service Areas | Texas Tows Inc.",
  description:
    "Texas Tows Inc. provides 24/7 towing and roadside assistance throughout Dallas, TX. See all neighborhoods and service areas we cover.",
  alternates: { canonical: "https://texastows.com/service-area" },
};

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a2340] py-20 md:py-28">
        <div className="container-tx text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-[#fef15f]" />
            <span className="text-white text-sm font-medium">Dallas, TX &amp; Surrounding Neighborhoods</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Our Dallas Towing Service Areas
          </h1>
          <p className="text-xl text-white/75 max-w-3xl mx-auto mb-8">
            Texas Tows Inc. serves all of Dallas and its neighborhoods with 24/7 towing and roadside assistance. Find your area below.
          </p>
          <a href={BUSINESS.phoneHref} className="btn-yellow text-lg py-4 px-8 inline-flex">
            <Phone size={20} /> Call 24/7: {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <h2 className="section-heading mb-3 text-center">Neighborhoods We Serve</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Click any neighborhood to see local service details, response times, and frequently asked questions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AREA_DATA.map((area) => (
              <Link
                key={area.slug}
                href={`/service-area/${area.slug}`}
                className="card-service flex items-center justify-between gap-4 p-5 group"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#045cb4] flex-shrink-0" />
                  <div>
                    <div className="font-heading font-semibold text-[#0a2340] group-hover:text-[#045cb4] transition-colors">
                      {area.name}
                    </div>
                    <div className="text-xs text-gray-500">{area.cityState}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#045cb4] flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#045cb4] py-16">
        <div className="container-tx text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Don&apos;t See Your Neighborhood?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            We serve all of Dallas and many surrounding areas. Call us and we&apos;ll let you know if we can reach you.
          </p>
          <a href={BUSINESS.phoneHref} className="btn-yellow text-lg py-4 px-8 inline-flex">
            <Phone size={20} /> Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
