import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Unattended Towing Dallas TX | Private Property Towing | Texas Tows",
  description: `Need unattended or private property towing in Dallas? Texas Tows Inc. provides professional vehicle removal for property managers and private lots. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://www.texastows.com/services/unattended-towing" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Unattended Towing in Dallas, TX",
  description: "Professional unattended and private property towing in Dallas. Texas Tows Inc. provides vehicle removal for property managers and private lots.",
  serviceType: "Unattended Towing",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function UnattendedTowingPage() {
  return (
    <ServicePageClient
      serviceId="unattended-towing"
      h1="Unattended Towing in Dallas, TX"
      intro="Property managers, business owners, and private lot operators trust Texas Tows Inc. for professional unattended vehicle towing in Dallas, TX. We remove unauthorized, abandoned, or illegally parked vehicles from your property efficiently and in full compliance with Texas law."
      whatToExpect={[
        `Call us at ${BUSINESS.phone} or set up a property management account for ongoing service.`,
        "We dispatch a driver to your property to assess and document the vehicle before towing.",
        "All required notifications and documentation are completed in compliance with Texas TDLR regulations.",
        "The vehicle is safely removed from your property and transported to our storage facility.",
        "We handle all follow-up with the vehicle owner regarding retrieval.",
      ]}
      whyChooseUs={[
        { title: "TDLR Compliant", body: `We operate in full compliance with Texas TDLR towing regulations. License #${BUSINESS.tdlr}. No liability risk for your property.` },
        { title: "Proper Documentation", body: "We complete all required paperwork and notifications before and after each tow, protecting you from legal exposure." },
        { title: "Fast Response for Property Managers", body: "We understand that unauthorized vehicles need to be removed quickly. We prioritize property management calls." },
        { title: "Ongoing Service Agreements Available", body: "For properties with recurring needs, we offer ongoing service agreements for regular lot monitoring and removal." },
      ]}
      image={PHOTOS.truckService}
      imageAlt="Texas Tows Inc. unattended towing service for private properties in Dallas, TX"
      relatedServiceIds={["towing-service", "junk-car-removal", "secondary-towing"]}
      schema={schema}
    />
  );
}
