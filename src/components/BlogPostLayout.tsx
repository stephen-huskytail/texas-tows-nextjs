import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Phone, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  description: string;
  featuredImage?: string;
  featuredImageAlt?: string;
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
  children,
}: BlogPostLayoutProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a2340] py-20 md:py-28">
        <div className="container-tx">
          <div className="max-w-3xl">
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
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4 max-w-3xl leading-tight">
              {title}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mb-6">{description}</p>
            <div className="flex items-center gap-4 text-sm text-white/50">
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

      {/* Featured Image */}
      {featuredImage && (
        <div className="w-full bg-gray-100 overflow-hidden" style={{ maxHeight: 480 }}>
          <div className="relative w-full" style={{ height: 480 }}>
            <Image
              src={featuredImage}
              alt={featuredImageAlt || title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* Content + Sidebar */}
      <section className="bg-white py-16">
        <div className="container-tx">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 prose prose-slate max-w-none
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#0a2340]
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
              prose-ul:text-gray-600 prose-li:mb-1
              prose-strong:text-[#0a2340]
              prose-a:text-[#045cb4] prose-a:no-underline hover:prose-a:underline
            ">
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

              {/* Discount reminder */}
              <div className="rounded-xl p-5 bg-blue-50 border border-blue-100">
                <div className="text-2xl mb-2">🎖️</div>
                <h4 className="font-heading font-bold text-[#0a2340] mb-1 text-sm">15% Off for Heroes</h4>
                <p className="text-gray-600 text-sm">
                  Military, veterans, teachers, and first responders receive 15% off all services. Just mention it when you call.
                </p>
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
