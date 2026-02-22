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
      faqSchema={faqSchema}
    />
  );
}
