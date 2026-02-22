"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone, Menu, X, ChevronDown,
  Truck, Wrench, Car, Trash2, AlertTriangle, Anchor, Layers, Home,
  RefreshCw, ParkingCircle, MapPin, Info, Star, BookOpen, Mail,
} from "lucide-react";
import { BUSINESS, SERVICES, AREA_PAGES } from "@/lib/constants";
import QuoteModal from "./QuoteModal";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Truck, Wrench, Car, Trash2, AlertTriangle, Anchor, Layers, Home, RefreshCw, ParkingCircle,
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const primaryAreas = AREA_PAGES.filter((a) => a.primary);
  const secondaryAreas = AREA_PAGES.filter((a) => !a.primary);

  const navLinkClass = (active: boolean) =>
    `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
      active ? "text-[#045cb4]" : "text-gray-700 hover:text-[#045cb4]"
    }`;

  return (
    <>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />

      <header
        className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <div className="container-tx">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/vvORBwXUFKXegenK.png"
                alt="Texas Tows Inc. Logo"
                width={48}
                height={48}
                className="w-11 h-11 object-contain"
                priority
                fetchPriority="high"
              />
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-[#045cb4] text-lg leading-tight">Texas Tows Inc.</div>
                <div className="text-xs text-gray-500 leading-tight">Dallas Towing Service</div>
              </div>
            </Link>

            {/* Desktop Nav — with icons matching original */}
            <nav className="hidden lg:flex items-center gap-0.5">

              <Link href="/" className={`${navLinkClass(pathname === "/")} flex items-center gap-1.5`}>
                <Home size={14} className="flex-shrink-0" />Home
              </Link>
              <Link href="/about" className={`${navLinkClass(pathname === "/about")} flex items-center gap-1.5`}>
                <Info size={14} className="flex-shrink-0" />About
              </Link>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    pathname.startsWith("/services") ? "text-[#045cb4]" : "text-gray-700 hover:text-[#045cb4]"
                  }`}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      href="/services"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#045cb4] hover:bg-blue-50 transition-colors border-b border-gray-100 mb-1"
                    >
                      <Truck size={14} />
                      All Services
                    </Link>
                    {SERVICES.map((s) => {
                      const Icon = SERVICE_ICONS[s.icon] || Truck;
                      return (
                        <Link
                          key={s.id}
                          href={s.slug}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#045cb4] hover:bg-blue-50 transition-colors"
                        >
                          <Icon size={13} className="text-[#045cb4] flex-shrink-0" />
                          {s.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Service Area Mega Menu */}
              <div ref={areasRef} className="relative">
                <button
                  onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    pathname.startsWith("/service-area") ? "text-[#045cb4]" : "text-gray-700 hover:text-[#045cb4]"
                  }`}
                >
                  Service Area
                  <ChevronDown size={14} className={`transition-transform ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full right-0 mt-1 w-[520px] bg-white rounded-xl shadow-xl border border-gray-100 p-5 z-50">
                    <Link
                      href="/service-area"
                      className="flex items-center gap-2 text-sm font-bold text-[#045cb4] hover:underline mb-4"
                    >
                      <MapPin size={14} />
                      View Full Service Area Map →
                    </Link>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Primary Areas</p>
                        {primaryAreas.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/service-area/${a.slug}`}
                            className="flex items-center gap-1.5 py-1 text-sm text-gray-700 hover:text-[#045cb4] transition-colors"
                          >
                            <MapPin size={11} className="text-[#045cb4] flex-shrink-0" />
                            {a.name}
                          </Link>
                        ))}
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">All Neighborhoods</p>
                        <div className="grid grid-cols-2 gap-x-2">
                          {secondaryAreas.map((a) => (
                            <Link
                              key={a.slug}
                              href={`/service-area/${a.slug}`}
                              className="flex items-center gap-1.5 py-1 text-sm text-gray-700 hover:text-[#045cb4] transition-colors"
                            >
                              <MapPin size={11} className="text-gray-400 flex-shrink-0" />
                              {a.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/reviews" className={`${navLinkClass(pathname === "/reviews")} flex items-center gap-1.5`}>
                <Star size={14} className="flex-shrink-0" />Reviews
              </Link>
              <Link href="/blog" className={`${navLinkClass(pathname.startsWith("/blog"))} flex items-center gap-1.5`}>
                <BookOpen size={14} className="flex-shrink-0" />Blog
              </Link>
              <Link href="/contact" className={`${navLinkClass(pathname === "/contact")} flex items-center gap-1.5`}>
                <Mail size={14} className="flex-shrink-0" />Contact
              </Link>
            </nav>

            {/* Desktop CTA — phone button only, no Free Quote */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 bg-[#045cb4] text-white px-4 py-2.5 rounded-lg font-heading font-semibold text-sm hover:bg-[#0a2340] transition-colors shadow-md whitespace-nowrap"
              >
                <Phone size={15} />
                {BUSINESS.phone}
              </a>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-1.5 bg-[#045cb4] text-white px-3 py-2 rounded-lg text-sm font-semibold"
              >
                <Phone size={15} />
                <span className="hidden sm:inline">{BUSINESS.phone}</span>
                <span className="sm:hidden">Call</span>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-700 hover:text-[#045cb4] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 top-[108px] bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <div className="fixed top-[108px] left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto lg:hidden">
              <nav className="p-4 space-y-1">
                <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-blue-50 hover:text-[#045cb4] transition-colors">
                  Home
                </Link>
                <Link href="/about" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-blue-50 hover:text-[#045cb4] transition-colors">
                  About
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-blue-50 hover:text-[#045cb4] transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="faq-answer pl-4"
                    style={{ maxHeight: mobileServicesOpen ? "600px" : "0" }}
                  >
                    <Link href="/services" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#045cb4] hover:bg-blue-50 rounded-lg transition-colors">
                      All Services →
                    </Link>
                    {SERVICES.map((s) => {
                      const Icon = SERVICE_ICONS[s.icon] || Truck;
                      return (
                        <Link key={s.id} href={s.slug} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#045cb4] hover:bg-blue-50 rounded-lg transition-colors">
                          <Icon size={13} className="text-[#045cb4]" /> {s.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Areas Accordion */}
                <div>
                  <button
                    onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-blue-50 hover:text-[#045cb4] transition-colors"
                  >
                    <span>Service Area</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="faq-answer pl-4"
                    style={{ maxHeight: mobileAreasOpen ? "800px" : "0" }}
                  >
                    <Link href="/service-area" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#045cb4] hover:bg-blue-50 rounded-lg transition-colors">
                      Full Service Area Map →
                    </Link>
                    {AREA_PAGES.map((a) => (
                      <Link key={a.slug} href={`/service-area/${a.slug}`} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#045cb4] hover:bg-blue-50 rounded-lg transition-colors">
                        <MapPin size={11} className="text-[#045cb4]" /> {a.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/reviews" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-blue-50 hover:text-[#045cb4] transition-colors">
                  Reviews
                </Link>
                <Link href="/blog" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-blue-50 hover:text-[#045cb4] transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-blue-50 hover:text-[#045cb4] transition-colors">
                  Contact
                </Link>

                <div className="pt-4 space-y-3 border-t border-gray-100">
                  <a href={BUSINESS.phoneHref} className="btn-primary w-full justify-center">
                    <Phone size={18} /> Call {BUSINESS.phone}
                  </a>
                  <button onClick={() => { setMobileOpen(false); setQuoteOpen(true); }} className="btn-yellow w-full justify-center">
                    Get a Free Quote →
                  </button>
                </div>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}
