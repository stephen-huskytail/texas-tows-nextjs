import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { AREA_DATA } from "@/lib/areaData";

export const metadata: Metadata = {
  title: "Dallas Towing Service Areas | Texas Tows Inc.",
  description:
    "Texas Tows Inc. provides 24/7 towing and roadside assistance throughout Dallas, TX. See all neighborhoods and service areas we cover.",
  alternates: { canonical: "https://www.texastows.com/service-area" },
};

// Neighborhood images — curated Unsplash photos for each Dallas area
const AREA_IMAGES: Record<string, string> = {
  "preston-hollow":    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format&fit=crop",
  "lake-highlands":    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format&fit=crop",
  "north-dallas":      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop",
  "lower-greenville":  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop",
  "medical-district":  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&auto=format&fit=crop",
  "smu-university-park": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop",
  "park-cities":       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop",
  "northeast-dallas":  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
  "old-east-dallas":   "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format&fit=crop",
  "casa-linda":        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
  "forest-hills":      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80&auto=format&fit=crop",
  "white-rock":        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80&auto=format&fit=crop",
  "casa-view":         "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80&auto=format&fit=crop",
  "highland-meadows":  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop",
  "melshire-estates":  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format&fit=crop",
  "russwood-acres":    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80&auto=format&fit=crop",
  "bluffview":         "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80&auto=format&fit=crop",
  "perry-heights":     "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80&auto=format&fit=crop",
};

const DEFAULT_IMG = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format&fit=crop";

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.phoneHref} className="btn-yellow text-lg py-4 px-8 inline-flex">
              <Phone size={20} /> Call 24/7: {BUSINESS.phone}
            </a>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock size={16} className="text-[#fef15f]" />
              <span>Average 20–30 min response across Dallas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid with Images */}
      <section className="bg-gray-50 py-20">
        <div className="container-tx">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-3">Neighborhoods We Serve</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Click any neighborhood to see local service details, response times, and frequently asked questions specific to your area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {AREA_DATA.map((area) => {
              const img = AREA_IMAGES[area.slug] ?? DEFAULT_IMG;
              return (
                <Link
                  key={area.slug}
                  href={`/service-area/${area.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Photo */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={img}
                      alt={`${area.name} neighborhood in Dallas, TX — Texas Tows Inc. service area`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2340]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#fef15f]" />
                      <span className="text-white text-xs font-semibold">{area.cityState}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-[#0a2340] group-hover:text-[#045cb4] transition-colors text-base leading-tight">
                        {area.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">24/7 Towing Available</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#045cb4] transition-colors">
                      <ArrowRight className="w-4 h-4 text-[#045cb4] group-hover:text-white transition-colors group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage note */}
      <section className="bg-white py-16">
        <div className="container-tx">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: MapPin, title: "18 Neighborhoods", desc: "Covering all major Dallas neighborhoods and surrounding areas." },
              { icon: Clock, title: "20–30 Min Response", desc: "Average dispatch-to-arrival time across the Dallas metro." },
              { icon: Phone, title: "24/7 Availability", desc: "We answer every call — nights, weekends, and holidays." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#045cb4]" />
                </div>
                <h3 className="font-heading font-bold text-[#0a2340] text-lg">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
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
