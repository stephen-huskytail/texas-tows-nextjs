import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Junk Car Removal Dallas TX | Free Tow-Away Service | Texas Tows",
  description: `Need junk car removal in Dallas? Texas Tows Inc. provides free tow-away service for junk, salvage, or non-running vehicles. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://www.texastows.com/services/junk-car-removal" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Junk Car Removal in Dallas, TX",
  description: "Free junk car removal and tow-away service in Dallas. Texas Tows Inc. removes junk, salvage, and non-running vehicles at no cost.",
  serviceType: "Junk Car Removal",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function JunkCarRemovalPage() {
  return (
    <ServicePageClient
      serviceId="junk-car-removal"
      h1="Junk Car Removal in Dallas, TX"
      intro="Got a junk car, salvage vehicle, or non-running vehicle taking up space? Texas Tows Inc. provides professional junk car removal service in Dallas, TX. We'll tow it away and handle the details — fast, easy, and hassle-free."
      whatToExpect={[
        `Call us at ${BUSINESS.phone} and describe your vehicle — make, model, year, and condition.`,
        "We provide a quote and schedule a pickup time that works for you.",
        "Our driver arrives with the right equipment to safely remove your vehicle, regardless of its condition.",
        "We load the vehicle and take it away. You don't need to do anything except hand over the keys.",
        "The vehicle is removed from your property and taken to the appropriate facility.",
      ]}
      whyChooseUs={[
        { title: "Fast, Hassle-Free Removal", body: "We handle all the heavy lifting. You just need to be there when we arrive. No paperwork headaches, no runaround." },
        { title: "Any Condition Accepted", body: "Running or not, damaged or totaled — we remove vehicles in any condition. No judgment, no problem." },
        { title: "Professional Equipment", body: "Our flatbed trucks can safely remove vehicles that can't be driven or rolled, including those with flat tires or seized brakes." },
        { title: "Reliable & On-Time", body: "We show up when we say we will. Your time matters and we respect it." },
      ]}
      image={PHOTOS.truck4}
      imageAlt="Texas Tows Inc. junk car removal service in Dallas, TX"
      relatedServiceIds={["towing-service", "flatbed-towing", "unattended-towing"]}
      schema={schema}
    />
  );
}
