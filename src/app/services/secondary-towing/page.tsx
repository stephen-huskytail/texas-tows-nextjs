import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Secondary Towing Dallas TX | Vehicle Relocation After Initial Tow | Texas Tows",
  description: `Need secondary towing in Dallas? Texas Tows Inc. provides reliable vehicle relocation after an initial tow — to a repair shop, storage, or home. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://texastows.com/services/secondary-towing" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Secondary Towing",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function SecondaryTowingPage() {
  return (
    <ServicePageClient
      serviceId="secondary-towing"
      h1="Secondary Towing in Dallas, TX"
      intro="Sometimes a vehicle needs to be moved a second time — from an impound lot, a repair shop, or a storage facility to its final destination. Texas Tows Inc. provides reliable secondary towing service in Dallas, TX for exactly these situations."
      whatToExpect={[
        `Call us at ${BUSINESS.phone} and explain your secondary tow needs — current location, destination, and any special requirements.`,
        "We provide a transparent quote based on distance and vehicle type.",
        "We dispatch a truck and coordinate pickup from the current location.",
        "Your vehicle is safely loaded and transported to the new destination.",
        "Delivery is confirmed and you pay the agreed price.",
      ]}
      whyChooseUs={[
        { title: "Flexible Pickup Locations", body: "We pick up from impound lots, repair shops, storage facilities, or anywhere else your vehicle currently sits." },
        { title: "Transparent Pricing", body: "Secondary tows are priced clearly based on distance. No hidden fees, no surprises." },
        { title: "Flatbed Available", body: "If your vehicle requires flatbed transport for the secondary move, we have the equipment ready." },
        { title: "Reliable & On-Time", body: "We coordinate with impound lots and repair shops regularly. We know how to navigate these pickups efficiently." },
      ]}
      image={PHOTOS.truck8}
      imageAlt="Texas Tows Inc. secondary towing service in Dallas, TX"
      relatedServiceIds={["towing-service", "flatbed-towing", "vehicle-transport"]}
      schema={schema}
    />
  );
}
