// Texas Tows Inc. — Homepage
// SEO: Towing Service Dallas TX | 24/7 Tow Truck | Texas Tows Inc.
// Design: Emergency Services / Trust-First — every section drives toward a phone call

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, MapPin, Star } from "lucide-react";
import { BUSINESS, SERVICES, TESTIMONIALS, SERVICE_AREAS, PHOTOS } from "@/lib/constants";
import FAQItem from "@/components/FAQItem";
import ContactForm from "@/components/ContactForm";
import HomeHeroQuote from "@/components/HomeHeroQuote";

export const metadata: Metadata = {
  title: "Towing Service Dallas TX | 24/7 Tow Truck | Texas Tows Inc.",
  description:
    "Texas Tows Inc. — Dallas's best-rated 24/7 towing service. Fast response, transparent pricing, licensed & insured. Call (817) 512-1024 for immediate help.",
  alternates: { canonical: "https://texastows.com" },
  openGraph: {
    title: "Texas Tows Inc. | 24/7 Towing Service Dallas, TX",
    description: "Fast, reliable 24/7 towing and roadside assistance in Dallas, TX. Call (817) 512-1024.",
    url: "https://texastows.com",
    images: [{ url: PHOTOS.hero, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "How fast can you get to me?",
    a: "Our average response time in Dallas is 20–30 minutes. We dispatch immediately upon your call and keep you updated with our ETA. Response times may vary based on traffic and your exact location.",
  },
  {
    q: "How much does towing cost in Dallas?",
    a: `Towing rates vary based on distance, vehicle type, and service needed. We provide transparent, upfront pricing before we begin — no hidden fees, no surprises. Call us at ${BUSINESS.phone} for an immediate quote.`,
  },
  {
    q: "Do you offer flatbed towing?",
    a: "Yes. Our flatbed towing service is ideal for luxury vehicles, low-clearance cars, all-wheel-drive vehicles, and any situation where wheel-lift towing could cause damage. Your vehicle rides safely on the flatbed with zero wheel contact.",
  },
  {
    q: "Are you available on holidays?",
    a: "Absolutely. We operate 24/7, 365 days a year — including all holidays. Breakdowns don't take holidays, and neither do we.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Dallas and surrounding neighborhoods including Preston Hollow, Highland Park, Uptown, Deep Ellum, Oak Lawn, Lake Highlands, North Dallas, and more. View our full service area page for complete coverage details.",
  },
  {
    q: "Do you offer discounts?",
    a: "Yes! We're proud to offer a 15% discount to active military, veterans, teachers, and first responders. Just mention your status when you call. It's our way of giving back to those who serve our community.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center" aria-label="Hero section">
        <div className="absolute inset-0 z-0">
          <Image
            src={PHOTOS.hero}
            alt="Texas Tows Inc. flatbed tow truck loading a vehicle in Dallas, TX"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay matching original — strong left coverage, fades right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>

        <div className="container-tx relative z-10 py-20">
          <div className="max-w-2xl">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">
                {BUSINESS.rating} Stars · {BUSINESS.reviewCount} Google Reviews
              </span>
            </div>

            {/* H1 — 3 lines matching original exactly */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
              style={{ fontFamily: "Poppins, sans-serif", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
            >
              Dallas&apos;s Best-Rated<br />
              <span style={{ color: "#fef15f" }}>Towing Service</span><br />
              — Available 24/7
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
              Your search for a reliable towing company is over. Fast response, transparent pricing, and a team that treats your vehicle like our own.
            </p>

            {/* Phone CTA — full width, no right badge, matching original */}
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-3 mb-4 rounded-2xl px-5 py-4 text-slate-900 font-bold shadow-2xl transition-all hover:scale-[1.02] active:scale-100 w-full"
              style={{
                background: "linear-gradient(135deg, #fef15f 0%, #f5c800 100%)",
                fontFamily: "Poppins, sans-serif",
                boxShadow: "0 0 0 4px rgba(254,241,95,0.4), 0 12px 40px rgba(0,0,0,0.45)",
                maxWidth: "480px",
              }}
              aria-label="Emergency Towing — Call Texas Tows Inc. now"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 flex-shrink-0">
                <Phone className="w-5 h-5 text-yellow-300" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-600 leading-none mb-1">Emergency Towing — 24/7</span>
                <span className="block text-xl sm:text-2xl font-extrabold leading-tight">{BUSINESS.phone}</span>
              </span>
            </a>

            {/* Quote button — below phone CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <HomeHeroQuote />
            </div>

            {/* Serving line — matches original text exactly */}
            <div className="flex items-center gap-2 mt-6 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
              <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0" />
              <span>Serving Dallas &amp; Surrounding Areas · 24/7 — 365 Days a Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. SERVICES OVERVIEW ===== */}
      <section className="bg-white py-20" aria-labelledby="services-heading">
        <div className="container-tx">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="section-heading mb-4">
              Our Towing &amp; Roadside Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From emergency towing to junk car removal, we handle every situation with professional equipment and certified drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {SERVICES.map((service) => (
              <Link key={service.id} href={service.slug} className="card-service group">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} in Dallas, TX — Texas Tows Inc.`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2340]/80 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-[#0a2340] text-base mb-1">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#045cb4] text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-outline-blue">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 3. WHY CHOOSE TEXAS TOWS ===== */}
      <section className="bg-gray-50 py-20" aria-labelledby="why-heading">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={PHOTOS.truckService}
                alt="Texas Tows Inc. professional flatbed tow truck in Dallas, TX"
                width={800}
                height={600}
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg p-4 bg-[#fef15f] text-[#0a2340] font-heading font-semibold text-sm">
                🏆 Dallas&apos;s Most Trusted Towing Company Since {BUSINESS.founded}
              </div>
            </div>

            <div>
              <h2 id="why-heading" className="section-heading mb-6">
                Why Dallas Trusts<br />Texas Tows Inc.
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We built our reputation one tow at a time. Every driver is trained, every quote is transparent, and every customer gets the same level of care — whether it&apos;s 2pm or 2am.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Transparent Pricing", desc: "Upfront quotes before we start. No hidden fees, no surprises on your bill." },
                  { title: "Fast Response Times", desc: "Average 20–30 minute response across Dallas. We track our times and hold ourselves accountable." },
                  { title: "Professional & Certified Drivers", desc: "Every driver is trained, licensed, and committed to handling your vehicle with care." },
                  { title: "4.9-Star Rated Service", desc: `${BUSINESS.reviewCount} real customers gave us their honest review. That track record speaks for itself.` },
                  { title: "We Treat Your Vehicle Like Our Own", desc: "Whether it's a 10-year-old commuter or a luxury sports car, it gets the same careful attention." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-heading font-semibold text-gray-800">{item.title}: </span>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href={BUSINESS.phoneHref} className="btn-primary">
                  <Phone size={18} /> Call {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. DISCOUNT CALLOUT ===== */}
      <section className="py-16 bg-[#fef15f]" aria-labelledby="discount-heading">
        <div className="container-tx text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl mb-4">🎖️</div>
            <h2 id="discount-heading" className="text-3xl md:text-4xl font-heading font-extrabold text-[#0a2340] mb-4">
              15% Discount for Teachers, First Responders &amp; Military
            </h2>
            <p className="text-[#0a2340]/80 text-lg mb-8 leading-relaxed">
              We&apos;re proud to serve those who serve our community. Mention your status when you call and we&apos;ll apply your discount automatically — no paperwork, no hassle.
            </p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-[#0a2340] text-white font-heading font-bold text-lg py-4 px-8 rounded-lg hover:bg-[#045cb4] transition-colors">
              <Phone size={20} /> Call to Claim Your Discount
            </a>
          </div>
        </div>
      </section>

      {/* ===== 5. TESTIMONIALS ===== */}
      <section className="bg-white py-20" aria-labelledby="reviews-heading">
        <div className="container-tx">
          <div className="text-center mb-12">
            <h2 id="reviews-heading" className="section-heading mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-gray-600 text-lg">
              {BUSINESS.rating} stars across {BUSINESS.reviewCount} Google reviews. Here&apos;s what real Dallas customers say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="card-testimonial">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} className="text-[#fef15f] fill-[#fef15f]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-[#0a2340] text-sm">{t.name}</span>
                  <span className="text-xs text-gray-400">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/reviews" className="btn-outline-blue">
              Read All {BUSINESS.reviewCount} Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6. SERVICE AREA TEASER ===== */}
      <section className="bg-gray-50 py-20" aria-labelledby="area-heading">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="area-heading" className="section-heading mb-4">
                Serving Dallas and Surrounding Areas
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                From Preston Hollow to Deep Ellum, we cover all of Dallas and its surrounding neighborhoods. If you&apos;re in the DFW area, we&apos;re your towing company.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-8">
                {[...SERVICE_AREAS.core, ...SERVICE_AREAS.additional].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-3.5 h-3.5 text-[#045cb4] flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>

              <Link href="/service-area" className="btn-primary">
                View Full Service Area <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={PHOTOS.truckNight}
                alt="Texas Tows Inc. tow truck operating at night in downtown Dallas, TX"
                width={800}
                height={600}
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2340]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-heading font-bold text-lg">Available 24/7</div>
                <div className="text-sm text-white/80">Day or night, we&apos;re on our way</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. FAQ ===== */}
      <section className="bg-white py-20" aria-labelledby="faq-heading">
        <div className="container-tx">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="section-heading mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Quick answers to the questions we hear most from Dallas drivers.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 px-6 md:px-8">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. CONTACT FORM ===== */}
      <section id="contact-form" className="bg-gray-50 py-20" aria-labelledby="contact-heading">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="contact-heading" className="section-heading mb-4">
                Request Service or Get a Quote
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Fill out the form and we&apos;ll get back to you fast. For immediate assistance, call us directly — we&apos;re available around the clock.
              </p>
              <a href={BUSINESS.phoneHref} className="btn-primary mb-8 inline-flex">
                <Phone size={18} /> Call Now: {BUSINESS.phone}
              </a>
              <div className="space-y-3 text-sm text-gray-600">
                {[
                  "Average 20–30 minute response time",
                  "Transparent, upfront pricing",
                  "Licensed & insured in Texas",
                  "15% discount for military, teachers & first responders",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. FINAL CTA ===== */}
      <section className="py-20 bg-[#0a2340]" aria-labelledby="final-cta-heading">
        <div className="container-tx text-center">
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            Stranded? We&apos;re On Our Way.
          </h2>
          <p className="text-white/70 text-xl mb-8 max-w-xl mx-auto">
            One call is all it takes. Available 24/7, 365 days a year across all of Dallas.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-[#fef15f] text-[#0a2340] font-heading font-extrabold text-xl py-5 px-10 rounded-lg transition-all hover:scale-105"
          >
            <Phone size={24} /> Call {BUSINESS.phone} Now
          </a>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
