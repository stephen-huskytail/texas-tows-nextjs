import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AREA_DATA, getAreaData } from "@/lib/areaData";
import { BUSINESS } from "@/lib/constants";
import AreaPageClient from "@/components/AreaPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AREA_DATA.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaData(slug);
  if (!area) return {};
  return {
    title: area.seoTitle,
    description: area.metaDescription,
    alternates: { canonical: `https://www.texastows.com/service-area/${slug}` },
    openGraph: {
      title: area.seoTitle,
      description: area.metaDescription,
      images: [{ url: area.heroImage, alt: area.heroImageAlt }],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaData(slug);
  if (!area) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.texastows.com/service-area/${slug}/`,
    name: "Texas Tows Inc.",
    description: `24/7 towing and roadside assistance serving ${area.name}, ${area.cityState}. Fast response, transparent pricing, certified drivers.`,
    url: `https://www.texastows.com/service-area/${slug}/`,
    telephone: BUSINESS.phoneTel,
    priceRange: "$$",
    image: area.heroImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    areaServed: { "@type": "Place", name: `${area.name}, ${area.cityState}` },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: "5",
    },
    sameAs: [
      "https://www.facebook.com/texastowsinc",
      "https://www.instagram.com/texas_tows/",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <AreaPageClient
      {...area}
      schema={schema}
      faqSchema={faqSchema}
    />
  );
}
