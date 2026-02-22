import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Flatbed Towing Dallas TX | AWD & Luxury",
  description: `Need flatbed towing in Dallas? Texas Tows Inc. provides safe flatbed towing for luxury, lowered, and AWD vehicles. Zero wheel contact. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://www.texastows.com/services/flatbed-towing" },
  openGraph: {
    title: "Flatbed Towing Dallas TX | AWD & Luxury | Texas Tows",
    description: `Need flatbed towing in Dallas? Texas Tows Inc. provides safe flatbed towing for luxury, lowered, and AWD vehicles. Zero wheel contact. Call ${BUSINESS.phone}.`,
    url: "https://www.texastows.com/services/flatbed-towing",
    images: [{ url: PHOTOS.truckFlatbed, alt: "Texas Tows Inc. flatbed towing service in Dallas, TX" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flatbed Towing in Dallas, TX",
  description: "Safe flatbed towing in Dallas for luxury, low-clearance, and AWD vehicles. Zero wheel contact, 24/7 availability from Texas Tows Inc.",
  serviceType: "Flatbed Towing",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function FlatbedTowingPage() {
  return (
    <ServicePageClient
      serviceId="flatbed-towing"
      h1="Flatbed Towing in Dallas, TX"
      intro="When your vehicle requires the safest possible towing method — flatbed is the answer. Texas Tows Inc. provides professional flatbed towing in Dallas, TX for luxury cars, AWD vehicles, low-clearance vehicles, and any situation where wheel-lift towing could cause damage."
      whatToExpect={[
        `Call us at ${BUSINESS.phone} and let us know you need flatbed towing. Tell us your vehicle type and location.`,
        "We dispatch a flatbed truck immediately. Our average response time in Dallas is 20–30 minutes.",
        "Our driver arrives and performs a pre-tow inspection, confirming your vehicle's condition before loading.",
        "Your vehicle is carefully loaded onto the flatbed with all four wheels off the ground — zero drivetrain contact.",
        "We transport your vehicle safely to your chosen destination and perform a delivery inspection.",
      ]}
      whyChooseUs={[
        { title: "Zero Wheel Contact", body: "On a flatbed, your vehicle rides on the truck bed with all four wheels off the ground. This eliminates any risk of drivetrain, transmission, or AWD system damage." },
        { title: "Required for AWD & 4WD Vehicles", body: "All-wheel-drive and four-wheel-drive vehicles should never be towed with a wheel-lift. Flatbed is the only safe option for these vehicles." },
        { title: "Ideal for Luxury & Low-Clearance Cars", body: "Sports cars, luxury vehicles, and lowered cars require flatbed towing to avoid scraping or damage during loading." },
        { title: "Modern, Well-Maintained Fleet", body: "Our flatbed trucks are regularly inspected and maintained. Your vehicle is in safe hands from pickup to delivery." },
      ]}
      image={PHOTOS.truckFlatbed}
      imageAlt="Texas Tows Inc. flatbed towing service in Dallas, TX"
      relatedServiceIds={["towing-service", "vehicle-transport", "accident-recovery"]}
      schema={schema}
    />
  );
}
