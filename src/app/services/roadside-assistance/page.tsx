import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Roadside Assistance Dallas TX | Jumpstart, Tire Change, Lockout | Texas Tows",
  description: `Stranded in Dallas? Texas Tows Inc. provides 24/7 roadside assistance including jumpstarts, tire changes, fuel delivery, and lockout service. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://www.texastows.com/services/roadside-assistance" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Roadside Assistance",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function RoadsideAssistancePage() {
  return (
    <ServicePageClient
      serviceId="roadside-assistance"
      h1="Roadside Assistance in Dallas, TX"
      intro="When your car won't start, you've got a flat tire, you're locked out, or you've run out of gas, Texas Tows Inc. is your roadside assistance team in Dallas. Fast response, professional service, and transparent pricing — 24/7."
      whatToExpect={[
        `Call us at ${BUSINESS.phone} and describe your situation. Tell us if it's a jumpstart, flat tire, lockout, or fuel delivery.`,
        "We dispatch the nearest available technician. Our average response time in Dallas is 20–30 minutes.",
        "Our technician arrives with the right equipment for your specific situation.",
        "We resolve your roadside issue on the spot — jumpstart your battery, change your tire, unlock your car, or deliver fuel.",
        "You're back on the road. If we can't resolve it roadside, we'll arrange a tow to the nearest shop.",
      ]}
      whyChooseUs={[
        { title: "Full Roadside Service Menu", body: "We handle jumpstarts, tire changes, fuel delivery, and lockout service — all from one call. No need to find multiple providers." },
        { title: "Fast Response, Every Time", body: "Our average response time in Dallas is 20–30 minutes. We know you're stranded and we move quickly." },
        { title: "Professional Equipment", body: "We carry the right tools for every roadside situation — professional jump packs, tire change equipment, and slim jim tools for lockouts." },
        { title: "Transparent Pricing", body: "We quote the price before we start. No surprises when the job is done." },
      ]}
      image={PHOTOS.truck3}
      imageAlt="Texas Tows Inc. roadside assistance technician helping a stranded driver in Dallas, TX"
      relatedServiceIds={["towing-service", "flatbed-towing", "accident-recovery"]}
      schema={schema}
    />
  );
}
