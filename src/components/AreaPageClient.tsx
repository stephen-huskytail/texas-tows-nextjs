"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";
import QuoteModal from "./QuoteModal";
import FAQItem from "./FAQItem";

interface AreaPageClientProps {
  slug: string;
  name: string;
  cityState: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  whyUs: string;
  landmarks: string[];
  services: string[];
  faqs: { q: string; a: string }[];
  nearbyAreas: { name: string; slug: string }[];
  faqSchema: object;
}

export default function AreaPageClient({
  slug,
  name,
  cityState,
  heroImage,
  heroImageAlt,
  intro,
  whyUs,
  landmarks,
  services,
  faqs,
  nearbyAreas,
  faqSchema,
}: AreaPageClientProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const highlightedServices = SERVICES.filter((s) => services.includes(s.id));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2340]/90 via-[#0a2340]/75 to-[#0a2340]/40" />
        </div>
        <div className="container-tx relative z-10">
          <div className="max-w-2xl">
            <div className="text-sm text-white/60 mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              {" / "}
              <Link href="/service-area" className="hover:text-white transition-colors">Service Area</Link>
              {" / "}
              <span className="text-white/80">{name}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5">
              <MapPin className="w-4 h-4 text-[#fef15f]" />
              <span className="text-white text-sm font-medium">{name}, {cityState}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 leading-tight">
              Towing Service in{" "}<br />
              <span className="text-[#fef15f]">{name}</span>
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary text-lg py-4 px-8">
                <Phone size={20} /> Call 24/7: {BUSINESS.phone}
              </a>
              <button onClick={() => setQuoteOpen(true)} className="btn-outline text-lg py-4 px-8">
                Get a Free Quote <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Texas Tows in [Neighborhood] */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-5">Your Local Towing Company in {name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{whyUs}</p>
              <ul className="space-y-3 mb-8">
                {[
                  `Serving ${name} and surrounding streets 24/7`,
                  "Average 20–30 minute response time",
                  "Transparent, upfront pricing — no hidden fees",
                  "Certified, background-checked drivers",
                  `4.9-star rated · ${BUSINESS.reviewCount} Google Reviews`,
                  "15% discount for military, teachers & first responders",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={BUSINESS.phoneHref} className="btn-primary inline-flex">
                <Phone size={18} /> Call Now: {BUSINESS.phone}
              </a>
            </div>
            <div className="rounded-2xl p-8 bg-blue-50 border border-blue-100">
              <h3 className="text-xl font-heading font-bold text-[#0a2340] mb-4">We Know {name}</h3>
              <p className="text-gray-600 text-sm mb-5">
                Our drivers navigate these streets every day. Whether you&apos;re on a side street or a main corridor, we know how to reach you fast.
              </p>
              <div className="space-y-2">
                {landmarks.map((lm) => (
                  <div key={lm} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-[#045cb4]" />
                    <span className="text-gray-700 text-sm">{lm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="container-tx">
          <h2 className="section-heading mb-3 text-center">Services We Offer in {name}</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Every service is available 24/7. Call us or request a quote — we dispatch immediately.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlightedServices.map((s) => (
              <Link
                key={s.id}
                href={s.slug}
                className="card-service flex items-center justify-between gap-4 p-5 group"
              >
                <span className="font-heading font-semibold text-[#0a2340] group-hover:text-[#045cb4] transition-colors">
                  {s.name}
                </span>
                <ArrowRight className="w-4 h-4 text-[#045cb4] flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setQuoteOpen(true)} className="btn-primary inline-flex">
              Get a Free Quote for {name} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-8">Frequently Asked Questions — {name} Towing</h2>
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden px-6">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyAreas.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container-tx">
            <h2 className="text-2xl font-heading font-bold text-[#0a2340] mb-6">
              We Also Serve Nearby Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-area/${area.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:text-[#045cb4] hover:border-[#045cb4] transition-colors"
                >
                  <MapPin size={14} className="text-[#045cb4]" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-[#0a2340] py-16">
        <div className="container-tx text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Need a Tow in {name}?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            We&apos;re available 24/7. Call now and we&apos;ll dispatch immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.phoneHref} className="btn-yellow text-xl py-5 px-10">
              <Phone size={24} /> Call {BUSINESS.phone}
            </a>
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center justify-center gap-3 text-white font-heading font-bold text-xl py-5 px-10 rounded-lg border-2 border-white/30 hover:border-white/60 transition-colors"
            >
              Get a Free Quote <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
