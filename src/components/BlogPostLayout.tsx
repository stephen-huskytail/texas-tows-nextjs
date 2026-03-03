import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Phone, Star, Quote } from "lucide-react";
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

              {/* Leave a Review — Enhanced */}
              <div className="rounded-xl overflow-hidden border border-amber-200/60 shadow-sm">
                {/* Header with warm gradient */}
                <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 px-5 pt-5 pb-4">
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm"
                      />
                    ))}
                    <span className="ml-2 text-sm font-bold text-[#0a2340]">{BUSINESS.rating}</span>
                    <span className="text-xs text-gray-500 ml-0.5">/ 5</span>
                  </div>
                  <h4 className="font-heading font-bold text-[#0a2340] text-base leading-snug">
                    Had a Great Experience?
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    Join {BUSINESS.reviewCount}+ Dallas drivers who&apos;ve shared their story on Google.
                  </p>
                </div>

                {/* Testimonial snippet */}
                <div className="bg-white px-5 py-4 border-t border-amber-100">
                  <div className="relative">
                    <Quote className="w-4 h-4 text-amber-300 absolute -top-0.5 -left-0.5" />
                    <p className="text-gray-700 text-sm italic leading-relaxed pl-4">
                      Fast, reliable service when I needed it most. The driver was professional and got me off the highway safely. Highly recommend!
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 pl-4">— Recent Google Review</p>
                </div>

                {/* CTA Button */}
                <div className="bg-white px-5 pb-5 pt-2">
                  <a
                    href={BUSINESS.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3 rounded-lg font-heading font-bold text-sm text-white bg-[#0a2340] hover:bg-[#0d2d52] transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {/* Google "G" icon — inline SVG */}
                    <svg
                      className="w-4.5 h-4.5"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Leave a Google Review
                  </a>
                </div>
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
