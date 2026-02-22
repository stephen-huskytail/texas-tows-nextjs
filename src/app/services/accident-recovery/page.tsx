import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Accident Recovery Towing Dallas TX | 24/7 Emergency Scene Towing | Texas Tows",
  description: `Involved in an accident in Dallas? Texas Tows Inc. provides 24/7 accident recovery towing and emergency scene towing. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://www.texastows.com/services/accident-recovery" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Accident Recovery Towing",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function AccidentRecoveryPage() {
  return (
    <ServicePageClient
      serviceId="accident-recovery"
      h1="Accident Recovery Towing in Dallas, TX"
      intro="When you've been in an accident, the last thing you need is to worry about your vehicle. Texas Tows Inc. provides professional accident recovery towing in Dallas, TX — available 24/7, with experienced drivers who handle post-accident scenes with care and efficiency."
      whatToExpect={[
        "Call us immediately after ensuring your safety and contacting emergency services if needed.",
        `Reach us at ${BUSINESS.phone} — we're available 24/7, including nights, weekends, and holidays.`,
        "We dispatch immediately and coordinate with law enforcement on scene if required.",
        "Our driver carefully assesses the vehicle's condition and uses the appropriate equipment for safe removal.",
        "Your vehicle is transported to your chosen repair facility, insurance-designated shop, or storage location.",
      ]}
      whyChooseUs={[
        { title: "24/7 Accident Scene Response", body: "Accidents happen at all hours. We're available around the clock and respond quickly to accident scenes throughout Dallas." },
        { title: "Experienced with Damaged Vehicles", body: "Post-accident vehicles require special handling. Our drivers are trained to safely load and transport vehicles with structural damage, deployed airbags, or fluid leaks." },
        { title: "Insurance-Friendly Service", body: "We work with all major insurance companies and can provide the documentation your insurer needs." },
        { title: "Compassionate, Professional Service", body: "We understand accidents are stressful. Our drivers are trained to be calm, professional, and efficient when you need it most." },
      ]}
      image={PHOTOS.truck5}
      imageAlt="Texas Tows Inc. accident recovery towing service in Dallas, TX"
      relatedServiceIds={["towing-service", "flatbed-towing", "winch-outs"]}
      schema={schema}
    />
  );
}
