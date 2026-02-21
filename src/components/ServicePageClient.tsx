"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";
import ContactForm from "./ContactForm";
import QuoteModal from "./QuoteModal";

interface ServicePageClientProps {
  serviceId: string;
  h1: string;
  intro: string;
  whatToExpect: string[];
  whyChooseUs: { title: string; body: string }[];
  image: string;
  imageAlt: string;
  relatedServiceIds: string[];
  schema: object;
}

export default function ServicePageClient({
  serviceId,
  h1,
  intro,
  whatToExpect,
  whyChooseUs,
  image,
  imageAlt,
  relatedServiceIds,
  schema,
}: ServicePageClientProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const relatedServices = SERVICES.filter((s) => relatedServiceIds.includes(s.id));

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2340]/90 via-[#0a2340]/75 to-[#0a2340]/50" />
        </div>
        <div className="container-tx relative z-10">
          <div className="max-w-2xl">
            <div className="text-sm text-white/60 mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              {" / "}
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              {" / "}
              <span className="text-white/80">{h1}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-5">{h1}</h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary text-lg py-4 px-8">
                <Phone size={20} /> Call 24/7: {BUSINESS.phone}
              </a>
              <button
                onClick={() => setQuoteOpen(true)}
                className="btn-outline text-lg py-4 px-8"
              >
                Get a Free Quote <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-8">What to Expect When You Call</h2>
            <ol className="space-y-5">
              {whatToExpect.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#045cb4] text-white font-heading font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why Choose Texas Tows */}
      <section className="bg-gray-50 py-20">
        <div className="container-tx">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-8">Why Choose Texas Tows for This Service</h2>
            <div className="space-y-6">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-[#0a2340] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20" id="request-service">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-4">Request This Service</h2>
              <p className="text-gray-600 text-lg mb-6">
                Fill out the form and we&apos;ll respond quickly. For immediate help, call us directly.
              </p>
              <a href={BUSINESS.phoneHref} className="btn-primary mb-4 inline-flex">
                <Phone size={18} /> Call Now: {BUSINESS.phone}
              </a>
              <div className="mb-6">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#045cb4] hover:underline transition-colors"
                >
                  Or get a quick quote →
                </button>
              </div>
              <p className="text-sm text-gray-500">Available 24/7 · {BUSINESS.hours}</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container-tx">
            <h2 className="text-2xl font-heading font-bold text-[#0a2340] mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
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
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-[#0a2340] py-16">
        <div className="container-tx text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Need Help Right Now?</h2>
          <p className="text-white/70 text-lg mb-8">We&apos;re available 24/7. One call and we&apos;re on our way.</p>
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
