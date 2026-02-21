import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Star } from "lucide-react";
import { BUSINESS, SERVICES, AREA_PAGES, getCurrentPromo } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryAreas = AREA_PAGES.filter((a) => a.primary);
  const promo = getCurrentPromo();

  return (
    <footer className="bg-[#0a2340] text-white">
      {/* Main Footer */}
      <div className="container-tx py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/vvORBwXUFKXegenK.png"
                alt="Texas Tows Inc. Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight">Texas Tows Inc.</div>
                <div className="text-blue-300 text-xs">Dallas Towing Service</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Dallas&apos;s most trusted towing company. Licensed, insured, and available 24/7 — 365 days a year. TDLR #{BUSINESS.tdlr}.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={16} className="text-[#fef15f] fill-[#fef15f]" />
                ))}
              </div>
              <span className="text-white font-bold">{BUSINESS.rating}</span>
              <span className="text-gray-400 text-sm">({BUSINESS.reviewCount} reviews)</span>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#045cb4] transition-colors">
                <Facebook size={16} />
              </a>
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#045cb4] transition-colors">
                <Instagram size={16} />
              </a>
              <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#045cb4] transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={s.slug} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2">
              {primaryAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-area/${a.slug}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-area" className="text-[#fef15f] hover:text-white text-sm font-semibold transition-colors">
                  View All 18 Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Review Column */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#045cb4] group-hover:text-[#fef15f]" />
                  <span className="text-sm font-semibold">{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#045cb4] group-hover:text-[#fef15f]" />
                  <span className="text-sm">{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#045cb4]" />
                  <span className="text-sm">{BUSINESS.address.full}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <Clock size={16} className="mt-0.5 flex-shrink-0 text-[#045cb4]" />
                  <span className="text-sm font-semibold text-green-400">{BUSINESS.hours}</span>
                </div>
              </li>
            </ul>

            {/* Google Review QR */}
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <p className="text-xs text-gray-400 mb-2 font-semibold">Leave Us a Review</p>
              <Image
                src={BUSINESS.googleReviewQr}
                alt="Scan to leave a Google review for Texas Tows Inc."
                width={80}
                height={80}
                className="mx-auto rounded-lg mb-2"
              />
              <a
                href={BUSINESS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#fef15f] hover:underline font-semibold"
              >
                Review on Google →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Discount Banner — auto-rotates monthly */}
      <div className="bg-[#045cb4] py-4">
        <div className="container-tx text-center">
          <p className="text-sm text-white">
            <span className="font-bold text-[#fef15f]">{promo.shortLabel}</span>
            {" — "}
            {promo.description}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container-tx flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} {BUSINESS.name}. All rights reserved. TDLR #{BUSINESS.tdlr}.</p>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
