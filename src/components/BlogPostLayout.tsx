import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Phone, ExternalLink } from "lucide-react";
import { BUSINESS, PHOTOS, getCurrentPromo } from "@/lib/constants";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  description: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  slug?: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  readTime,
  category,
  description,
  featuredImage,
  featuredImageAlt,
  slug,
  children,
}: BlogPostLayoutProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const promo = getCurrentPromo();

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: "Texas Tows Inc.",
      url: BUSINESS.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Texas Tows Inc.",
      url: BUSINESS.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: PHOTOS.logo,
      },
    },
    ...(featuredImage ? { image: featuredImage } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": slug
        ? `${BUSINESS.siteUrl}/blog/${slug}`
        : `${BUSINESS.siteUrl}/blog`,
    },
  };

  return (
    <>
      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Hero — featured image as background with dark overlay */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background: featured image or solid fallback */}
        {featuredImage ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={featuredImage}
              alt={featuredImageAlt || title}
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2340]/90 via-[#0a2340]/80 to-[#0a2340]/60" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-[#0a2340]" />
        )}

        <div className="container-tx relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-sm text-white/60 mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              {" / "}
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              {" / "}
              <span className="text-white/80">{title}</span>
            </div>
            <div className="inline-block bg-[#045cb4]/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {category}
            </div>
            <h1
              className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4 max-w-3xl leading-tight"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
            >
              {title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mb-6">{description}</p>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <article className="lg:col-span-2 blog-prose">
              {children}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Emergency CTA */}
              <div className="rounded-xl p-6 text-white bg-[#0a2340]">
                <h3 className="font-heading font-bold text-lg mb-2">Need a Tow Right Now?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Don&apos;t wait. Call Texas Tows Inc. — available 24/7, 365 days a year.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-heading font-bold text-[#0a2340] text-sm bg-[#fef15f] hover:bg-yellow-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Monthly promo reminder — auto-rotates */}
              <div className="rounded-xl p-5 bg-blue-50 border border-blue-100">
                <div className="text-2xl mb-2">🎖️</div>
                <h4 className="font-heading font-bold text-[#0a2340] mb-1 text-sm">{promo.shortLabel}</h4>
                <p className="text-gray-600 text-sm">{promo.description}</p>
              </div>

              {/* Leave a Review */}
              <div className="rounded-xl p-5 bg-gray-50 border border-gray-200">
                <h4 className="font-heading font-bold text-[#0a2340] mb-2 text-sm">Had a Great Experience?</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Your Google review helps other Dallas drivers find us.
                </p>
                <a
                  href={BUSINESS.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#045cb4] hover:underline"
                >
                  Leave a Review
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Back to Blog */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#045cb4] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Posts
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
