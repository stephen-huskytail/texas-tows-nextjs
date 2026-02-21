import type { Metadata } from "next";
import Image from "next/image";
import { Phone, CheckCircle, Award, Users, Truck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BUSINESS, PHOTOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Texas Tows Inc. | Dallas Towing Company Since 2015",
  description:
    "Learn about Texas Tows Inc. — Dallas's trusted towing company since 2015. Licensed, insured, TDLR certified. Meet our team and discover our commitment to honest, professional service.",
  alternates: { canonical: "https://texastows.com/about" },
};

const values = [
  { icon: CheckCircle, title: "Honesty First", desc: "We quote the price before we start. What we say is what you pay." },
  { icon: Truck, title: "Professional Equipment", desc: "Modern flatbed trucks maintained to the highest standards." },
  { icon: Users, title: "Community Commitment", desc: "We serve Dallas — and we give back with discounts for those who serve us." },
  { icon: Award, title: "Proven Track Record", desc: `${BUSINESS.reviewCount} five-star reviews and over a decade of trusted service.` },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{
          backgroundImage: `url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/OmaTMlkCoUloWpoE.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-[#0a2340]/78" />
        <div className="container-tx text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            About Texas Tows Inc.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Built on Reliability, Driven by Trust
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Texas Tows Inc. was founded in 2015 by Israel Alderete with a simple mission: provide Dallas drivers with honest, professional towing service they could actually count on. After years of watching drivers get overcharged, misled, and left waiting by unreliable operators, Israel set out to build something different.
                </p>
                <p>
                  What started as a single truck and a commitment to doing things right has grown into one of Dallas&apos;s most trusted towing companies — with a fleet of modern flatbed trucks, a team of certified drivers, and a {BUSINESS.rating}-star rating built one honest job at a time.
                </p>
                <p>
                  Every driver on our team is trained to treat your vehicle with the same care they&apos;d give their own. Every quote is transparent. Every call is answered — 24 hours a day, 7 days a week, 365 days a year.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/SoWljyPzCGzFwusm.jpeg"
                alt="Texas Tows Inc. team — Israel and crew in front of the red and white tow trucks in Dallas, TX"
                width={1280}
                height={960}
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="container-tx">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These aren&apos;t just words on a wall. They&apos;re the standards every driver and dispatcher is held to on every single call.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-service text-center p-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-50">
                    <Icon className="w-7 h-7 text-[#045cb4]" />
                  </div>
                  <h3 className="font-heading font-bold text-[#0a2340] mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet & Credentials */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={PHOTOS.truckFlatbed}
                alt="Texas Tows Inc. flatbed tow truck fleet in Dallas, TX"
                width={1200}
                height={800}
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="section-heading mb-6">Our Fleet &amp; Credentials</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our fleet consists of modern, well-maintained flatbed tow trucks equipped to handle everything from compact cars to full-size SUVs and luxury vehicles. Every truck is GPS-tracked, regularly inspected, and stocked with the equipment needed for any roadside situation.
                </p>
                <div className="space-y-3">
                  {[
                    "Licensed & Insured in the State of Texas",
                    `TDLR Licensed Towing Company — #${BUSINESS.tdlr}`,
                    "Modern Flatbed Fleet — No Wheel-Lift Damage",
                    "GPS-Tracked Dispatch for Accurate ETAs",
                    "All Drivers Trained & Background Checked",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#045cb4] py-16">
        <div className="container-tx">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: `${BUSINESS.reviewCount}+`, label: "5-Star Reviews" },
              { num: BUSINESS.rating, label: "Average Rating" },
              { num: BUSINESS.founded, label: "Year Founded" },
              { num: "24/7", label: "Always Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-heading font-extrabold mb-2 text-[#fef15f]">
                  {stat.num}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container-tx">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="section-heading mb-4">Ready to Experience the Difference?</h2>
            <p className="text-gray-600 text-lg">
              Call us now or fill out the form below. We&apos;re available 24/7 and always ready to help.
            </p>
            <a href={BUSINESS.phoneHref} className="btn-primary mt-6 inline-flex">
              <Phone size={18} /> Call {BUSINESS.phone}
            </a>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
