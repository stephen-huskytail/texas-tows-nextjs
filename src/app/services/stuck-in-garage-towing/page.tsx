import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Stuck in Garage Towing Dallas TX | Tight Space Vehicle Removal | Texas Tows",
  description: `Vehicle stuck in a garage or tight space in Dallas? Texas Tows Inc. specializes in garage towing and tight-space vehicle removal. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://texastows.com/services/stuck-in-garage-towing" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Stuck in Garage Towing",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function StuckInGarageTowingPage() {
  return (
    <ServicePageClient
      serviceId="stuck-in-garage-towing"
      h1="Stuck in Garage Towing in Dallas, TX"
      intro="Got a vehicle stuck in a garage, underground parking structure, or tight space? Texas Tows Inc. specializes in removing vehicles from confined areas where standard tow trucks can't operate — safely and without damage to your vehicle or the structure."
      whatToExpect={[
        `Call us at ${BUSINESS.phone} and describe the situation — type of garage, vehicle condition, and any access restrictions.`,
        "We assess the situation and dispatch the appropriate equipment for your specific scenario.",
        "Our driver arrives and evaluates the space, clearance, and the best extraction approach.",
        "We carefully extract your vehicle using specialized equipment designed for tight spaces.",
        "Your vehicle is safely removed and transported to your chosen destination.",
      ]}
      whyChooseUs={[
        { title: "Specialized Tight-Space Equipment", body: "We carry equipment specifically designed for garage and underground parking extractions where standard trucks can't fit." },
        { title: "No Damage to Structure or Vehicle", body: "Our drivers are trained to work carefully in confined spaces, protecting both your vehicle and the surrounding structure." },
        { title: "Experienced with Complex Situations", body: "Garage extractions require problem-solving and patience. Our team has handled hundreds of these situations across Dallas." },
        { title: "Available 24/7", body: "Whether it's a weekend or 3am, we're available to help you get your vehicle out of any stuck situation." },
      ]}
      image={PHOTOS.truck7}
      imageAlt="Texas Tows Inc. stuck in garage towing service in Dallas, TX"
      relatedServiceIds={["towing-service", "flatbed-towing", "secondary-towing"]}
      schema={schema}
    />
  );
}
