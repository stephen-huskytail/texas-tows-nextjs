import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Towing Service Dallas TX | 24/7 Tow Truck | Texas Tows",
  description: `Need a tow in Dallas? Texas Tows Inc. provides 24/7 towing service with fast response times, transparent pricing, and professional drivers. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://www.texastows.com/services/towing-service" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Towing Service in Dallas, TX",
  description: "Fast, reliable 24/7 towing service in Dallas. Texas Tows Inc. provides professional towing for all vehicle types with transparent pricing.",
  serviceType: "Towing Service",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function TowingServicePage() {
  return (
    <ServicePageClient
      serviceId="towing-service"
      h1="Towing Service in Dallas, TX"
      intro="Whether your car broke down on Central Expressway or you need a vehicle moved across town, Texas Tows Inc. provides fast, professional towing service for all vehicle types across Dallas, TX — 24 hours a day, 7 days a week."
      whatToExpect={[
        `Call us at ${BUSINESS.phone} and describe your situation and location. Our dispatcher will confirm your address and provide an ETA.`,
        "We dispatch the nearest available truck immediately. Our average response time in Dallas is 20–30 minutes.",
        "Our driver arrives, assesses your vehicle, and confirms the tow destination and pricing before touching your car.",
        "Your vehicle is safely loaded and transported to your chosen destination — a repair shop, your home, or anywhere else in the area.",
        "We complete the job and you pay the agreed price. No surprises, no hidden fees.",
      ]}
      whyChooseUs={[
        { title: "Modern Flatbed Fleet", body: "Our flatbed tow trucks are safer for your vehicle than wheel-lift towing. Your car rides on the bed with all four wheels off the ground — no drivetrain stress, no damage risk." },
        { title: "Transparent, Upfront Pricing", body: "We quote the price before we start. What we tell you on the phone is what you pay when the job is done. No bait-and-switch, no add-ons at the end." },
        { title: "Certified, Professional Drivers", body: "Every driver is trained, licensed, and background-checked. They treat your vehicle with the same care they'd give their own." },
        { title: "4.9-Star Rated Service", body: `${BUSINESS.reviewCount} Dallas customers have given us their honest review. That track record is the best proof we can offer.` },
      ]}
      image={PHOTOS.truckAction}
      imageAlt="Texas Tows Inc. tow truck providing towing service in Dallas, TX"
      relatedServiceIds={["flatbed-towing", "roadside-assistance", "accident-recovery"]}
      schema={schema}
    />
  );
}
