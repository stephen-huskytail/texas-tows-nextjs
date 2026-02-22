import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";
import ServicesHeroQuote from "@/components/ServicesHeroQuote";

export const metadata: Metadata = {
  title: "Towing & Roadside Services | Dallas TX",
  description:
    "Texas Tows Inc. offers emergency towing, flatbed towing, roadside assistance, lockout service, fuel delivery, winch-out recovery, and junk car removal in Dallas, TX. Available 24/7.",
  alternates: { canonical: "https://www.texastows.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a2340] py-20 md:py-28">
        <div className="container-tx text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Our Dallas Towing &amp; Roadside Assistance Services
          </h1>
          <p className="text-xl text-white/75 max-w-3xl mx-auto mb-8">
            From emergency towing to junk car removal — we handle every situation with professional equipment, certified drivers, and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.phoneHref} className="btn-primary text-lg py-4 px-8">
              <Phone size={20} /> Call 24/7: {BUSINESS.phone}
            </a>
            <ServicesHeroQuote />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="card-service group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} in Dallas, TX — Texas Tows Inc.`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2340]/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="font-heading font-bold text-[#0a2340] text-lg mb-2">{service.name}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-3">
                    <Link href={service.slug} className="btn-outline-blue text-sm py-2 px-4">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#045cb4] py-16">
        <div className="container-tx text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Just call us or request a quote. Our dispatchers will ask the right questions and send the right truck for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.phoneHref} className="btn-yellow text-lg py-4 px-8">
              <Phone size={20} /> Call {BUSINESS.phone}
            </a>
            <ServicesHeroQuote variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}
