import type { Metadata } from "next";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { BUSINESS, getCurrentPromo, PHOTOS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import LazyGoogleMap from "@/components/LazyGoogleMap";

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Dallas Towing",
  description:
    "Contact Texas Tows Inc. for 24/7 towing and roadside assistance in Dallas, TX. Call (817) 512-1024 or send us a message. Fast response, upfront pricing.",
  alternates: { canonical: "https://www.texastows.com/contact" },
  openGraph: {
    title: "Contact Us | 24/7 Dallas Towing | Texas Tows",
    description: "Contact Texas Tows Inc. for 24/7 towing and roadside assistance in Dallas, TX. Call (817) 512-1024 or send us a message. Fast response, upfront pricing.",
    url: "https://www.texastows.com/contact",
    images: [{ url: PHOTOS.logo, alt: "Texas Tows Inc. — Contact us for 24/7 towing in Dallas" }],
  },
};

export default function ContactPage() {
  const promo = getCurrentPromo();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a2340] py-20 md:py-28">
        <div className="container-tx text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Contact Texas Tows Inc.
          </h1>
          <p className="text-xl text-white/75 max-w-2xl mx-auto mb-8">
            Need a tow right now? Call us. Have a question? Send a message. We&apos;re here 24/7.
          </p>
          <a href={BUSINESS.phoneHref} className="btn-yellow text-xl py-5 px-10 inline-flex">
            <Phone size={22} /> Call Now: {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="section-heading mb-8">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-[#045cb4] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#0a2340] mb-1">Phone (Fastest Response)</div>
                    <a href={BUSINESS.phoneHref} className="text-2xl font-heading font-extrabold text-[#045cb4] hover:text-[#0a2340] transition-colors">
                      {BUSINESS.phone}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Available 24/7 — 365 days a year</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-[#334155] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#0a2340] mb-1">Address</div>
                    <address className="not-italic text-gray-600 leading-relaxed">
                      {BUSINESS.address.street}<br />
                      {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-[#334155] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#0a2340] mb-1">Email</div>
                    <a href={`mailto:${BUSINESS.email}`} className="text-gray-600 hover:text-[#045cb4] transition-colors">
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#0a2340] mb-1">Hours of Operation</div>
                    <p className="text-gray-700 font-semibold">24 Hours a Day, 7 Days a Week</p>
                    <p className="text-gray-500 text-sm">365 Days a Year — Including All Holidays</p>
                  </div>
                </div>
              </div>
              {/* Monthly rotating promo reminder */}
              <div className="mt-6 p-4 rounded-xl font-semibold text-[#0a2340] text-sm bg-[#fef15f]">
                🎖️ {promo.shortLabel} — just mention it when you call!
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-heading mb-8">Send Us a Message</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map — lazy-loaded to avoid 350KB of third-party scripts on initial load */}
      <section className="bg-gray-50 py-20">
        <div className="container-tx">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <LazyGoogleMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8!2d-96.78370!3d32.83370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f3d6b2e4b5d%3A0x0!2s4245+N+Central+Expy+%23490%2C+Dallas%2C+TX+75205!5e0!3m2!1sen!2sus!4v1708000000000!5m2!1sen!2sus"
              title="Texas Tows Inc. location map"
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
}
