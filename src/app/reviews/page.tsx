import type { Metadata } from "next";
import Image from "next/image";
import { Phone, ExternalLink, Star } from "lucide-react";
import { BUSINESS, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews | 4.9-Star Dallas Towing",
  description: `${BUSINESS.rating} stars across ${BUSINESS.reviewCount}+ Google reviews. See what Dallas customers say about Texas Tows Inc. — 24/7 towing and roadside assistance.`,
  alternates: { canonical: "https://www.texastows.com/reviews" },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Texas Tows Inc.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: "5",
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
    reviewBody: t.text,
    datePublished: t.date,
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Hero */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{
          backgroundImage: `url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/LLUaWDdXkLJuLUNt.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 45%",
        }}
      >
        <div className="absolute inset-0 bg-[#0a2340]/80" />
        <div className="container-tx text-center relative z-10">
          <div className="flex justify-center gap-1 mb-5">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-9 h-9 fill-[#fef15f] text-[#fef15f]" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            What Dallas Customers Say About Texas Tows Inc.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {BUSINESS.rating} stars across {BUSINESS.reviewCount}+ Google reviews. Real customers, real experiences.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card-service p-6 flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fef15f] text-[#fef15f]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#0a2340] flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-[#0a2340] text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">Dallas, TX · {t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a Review CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 max-w-lg flex-1">
              <h2 className="text-2xl font-heading font-bold text-[#0a2340] mb-3">Had a Great Experience?</h2>
              <p className="text-gray-600 mb-6">
                Your review helps other Dallas drivers find a towing company they can trust. It takes less than 2 minutes — and it means the world to our team.
              </p>
              <a
                href={BUSINESS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Leave Us a Review on Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            {/* QR Code */}
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Scan to Review</p>
              <a href={BUSINESS.googleReviewUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src={BUSINESS.googleReviewQr}
                  alt="QR code to leave a Google review for Texas Tows Inc."
                  width={144}
                  height={144}
                  className="w-36 h-36 object-contain"
                />
              </a>
              <p className="text-xs text-gray-400 text-center">Point your phone camera<br/>at this code</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2340] py-16">
        <div className="container-tx text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-white/70 text-lg mb-8">Join hundreds of satisfied Dallas customers. Call us now.</p>
          <a href={BUSINESS.phoneHref} className="btn-yellow text-xl py-5 px-10 inline-flex">
            <Phone className="w-6 h-6" /> Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
