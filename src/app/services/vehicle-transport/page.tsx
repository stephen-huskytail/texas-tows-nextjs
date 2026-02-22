import type { Metadata } from "next";
import { BUSINESS, PHOTOS } from "@/lib/constants";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Vehicle Transport Dallas TX | Private Car Hauling | Texas Tows",
  description: `Need a vehicle transported in Dallas? Texas Tows Inc. offers safe, professional vehicle transport for classic cars, luxury vehicles, and long-distance moves. Call ${BUSINESS.phone}.`,
  alternates: { canonical: "https://www.texastows.com/services/vehicle-transport" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vehicle Transport in Dallas, TX",
  description: "Safe, professional vehicle transport in Dallas for classic cars, luxury vehicles, and long-distance moves. Texas Tows Inc. available 24/7.",
  serviceType: "Vehicle Transport",
  provider: { "@type": "AutomotiveBusiness", name: "Texas Tows Inc.", telephone: BUSINESS.phoneTel },
  areaServed: { "@type": "City", name: "Dallas" },
};

export default function VehicleTransportPage() {
  return (
    <ServicePageClient
      serviceId="vehicle-transport"
      h1="Vehicle Transport Service in Dallas, TX"
      intro="When your vehicle needs to be moved safely over a long distance — or when it's too valuable to risk on a standard tow — Texas Tows Inc. provides professional vehicle transport service in Dallas, TX. We specialize in safe, damage-free transport for all vehicle types."
      whatToExpect={[
        `Call ${BUSINESS.phone} to discuss your transport needs. We'll gather details about your vehicle, pickup location, and destination.`,
        "We provide a transparent quote based on distance, vehicle type, and any special handling requirements.",
        "Our driver arrives with the appropriate flatbed equipment and performs a pre-transport inspection of your vehicle.",
        "Your vehicle is carefully loaded, secured, and transported to the destination with regular status updates.",
        "We complete a delivery inspection with you to confirm your vehicle arrived in the same condition it left.",
      ]}
      whyChooseUs={[
        { title: "Flatbed Transport — No Wheel Contact", body: "All vehicle transport is performed on our flatbed trucks. Your vehicle rides with all four wheels off the ground, eliminating any risk of drivetrain damage." },
        { title: "Ideal for Luxury and Classic Cars", body: "We handle high-value vehicles with extra care. Our drivers are trained in the specific requirements for luxury, classic, and low-clearance vehicles." },
        { title: "Long-Distance Capable", body: "Whether you're moving across Dallas or across Texas, we provide reliable transport with transparent pricing based on actual distance." },
        { title: "Pre and Post-Transport Inspection", body: "We document your vehicle's condition before and after transport. Your peace of mind is part of the service." },
      ]}
      image={PHOTOS.vehicleTransport}
      imageAlt="Texas Tows Inc. vehicle transport service — flatbed truck transporting a vehicle in Dallas, TX"
      relatedServiceIds={["flatbed-towing", "towing-service", "secondary-towing"]}
      schema={schema}
    />
  );
}
