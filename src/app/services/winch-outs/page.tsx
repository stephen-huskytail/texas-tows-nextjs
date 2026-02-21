import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Winch Out Service Dallas TX | Off-Road Recovery | Texas Tows",
  description: `Vehicle stuck in a ditch or off-road in Dallas? Texas Tows Inc. provides professional winch out and vehicle recovery service 24/7. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://texastows.com/services/winch-outs" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Winch Out & Vehicle Recovery",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function WinchOutsPage() {
  return (
    <ServicePageClient
      serviceId="winch-outs"
      h1="Winch Out & Vehicle Recovery in Dallas, TX"
      intro="Got your vehicle stuck in a ditch, mud, sand, or an off-road situation? Texas Tows Inc. provides professional winch-out and vehicle recovery service in Dallas, TX — with the heavy-duty equipment needed to get you unstuck safely."
      whatToExpect={[
        `Call ${BUSINESS.phone} and describe your situation — where you're stuck, what type of vehicle, and the terrain.`,
        "We dispatch a truck with the appropriate winch and recovery equipment for your specific situation.",
        "Our driver arrives and assesses the best recovery approach to extract your vehicle without additional damage.",
        "We perform the winch-out carefully, protecting your vehicle's frame and undercarriage throughout the recovery.",
        "Once recovered, we inspect your vehicle and confirm it's safe to drive or arrange a tow if needed.",
      ]}
      whyChooseUs={[
        { title: "Heavy-Duty Winch Equipment", body: "Our trucks are equipped with professional-grade winches capable of recovering vehicles from ditches, mud, sand, and other challenging terrain." },
        { title: "Damage-Conscious Recovery", body: "We use proper rigging techniques and recovery points to extract your vehicle without causing additional damage to the frame or undercarriage." },
        { title: "Experienced Recovery Operators", body: "Winch-outs require skill and judgment. Our drivers are trained in vehicle recovery techniques and know how to read terrain." },
        { title: "Available 24/7", body: "Getting stuck doesn't follow a schedule. We're available around the clock to get you unstuck and back on the road." },
      ]}
      image={PHOTOS.truck7}
      imageAlt="Texas Tows Inc. winch out and vehicle recovery service in Dallas, TX"
      relatedServiceIds={["towing-service", "roadside-assistance", "accident-recovery"]}
      schema={schema}
    />
  );
}
