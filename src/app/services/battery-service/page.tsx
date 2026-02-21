import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Battery Jump Start & Replacement Dallas TX | Texas Tows",
  description: `Dead battery in Dallas? Texas Tows Inc. provides 24/7 battery jump start and replacement service. Fast response, we come to you. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://texastows.com/services/battery-service" },
  openGraph: {
    title: "Battery Jump Start & Replacement Dallas TX | Texas Tows",
    description: `Dead battery in Dallas? Texas Tows Inc. provides 24/7 battery jump start and replacement service. Fast response. Call ${BUSINESS.phone}.`,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Battery Jump Start & Replacement",
  name: "Battery Jump Start & Replacement Service",
  description:
    "On-site battery jump start and replacement service in Dallas, TX. Available 24/7 with commercial-grade equipment and on-site battery testing.",
  provider: {
    "@type": "AutomotiveBusiness",
    name: "Texas Tows Inc.",
    telephone: BUSINESS.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "Dallas" },
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: { "@type": "ContactPoint", telephone: BUSINESS.phoneTel, contactType: "customer service" },
  },
};

export default function BatteryServicePage() {
  return (
    <ServicePageClient
      serviceId="battery-service"
      h1="Battery Jump Start & Replacement in Dallas, TX"
      intro="Dead battery leaving you stranded in a Dallas parking lot or on the side of the road? Texas Tows Inc. provides fast, on-site battery jump start and replacement service across Dallas, TX — 24 hours a day."
      whatToExpect={[
        `Call ${BUSINESS.phone} and tell us your location. We'll confirm whether you need a jump start or a full battery replacement.`,
        "We dispatch immediately. For battery calls, we typically arrive within 20–30 minutes.",
        "Our technician arrives with professional jump start equipment and tests your battery to determine if a jump will hold or if replacement is needed.",
        "If a jump start is sufficient, we get you started and verify the charging system is working before we leave.",
        "If your battery needs replacement, we can handle that on-site with the right battery for your vehicle.",
      ]}
      whyChooseUs={[
        {
          title: "Professional Jump Start Equipment",
          body: "We use commercial-grade jump starters — not consumer jumper cables. Your vehicle's electronics are protected from voltage spikes.",
        },
        {
          title: "Battery Testing Included",
          body: "We test your battery and charging system on-site so you know whether the jump will hold or if you need a replacement.",
        },
        {
          title: "On-Site Replacement Available",
          body: "If your battery is dead beyond a jump, we can often replace it on the spot — getting you back on the road without a tow.",
        },
        {
          title: "Available Around the Clock",
          body: "Dead batteries don't wait for business hours. We're available 24/7, including nights, weekends, and holidays.",
        },
      ]}
      image={PHOTOS.truck6}
      imageAlt="Texas Tows Inc. battery jump start service in Dallas, TX"
      relatedServiceIds={["roadside-assistance", "towing-service", "winch-outs"]}
      schema={schema}
    />
  );
}
