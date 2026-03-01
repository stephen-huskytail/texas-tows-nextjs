import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { BUSINESS, PHOTOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Towing Tips & Advice Blog | Dallas TX",
  description:
    "Towing tips, roadside advice, and consumer guides from Texas Tows Inc. Know your rights, stay safe, and make smart towing decisions in Dallas.",
  alternates: { canonical: "https://www.texastows.com/blog" },
  openGraph: {
    title: "Towing Tips & Advice Blog | Dallas TX | Texas Tows",
    description: "Towing tips, roadside advice, and consumer guides from Texas Tows Inc. Know your rights, stay safe, and make smart towing decisions in Dallas.",
    url: "https://www.texastows.com/blog",
    images: [{ url: PHOTOS.truckAction, alt: "Texas Tows Inc. blog — towing tips and advice" }],
  },
};

const blogPosts = [
  {
    slug: "emergency-roadside-assistance-texas",
    title: "Emergency Roadside Assistance in Texas: What Every Driver Needs to Know",
    excerpt:
      "Stranded on a Texas highway? Learn what to do during a roadside emergency, your rights under Texas law, how to choose a reliable provider, and how to prepare before it happens.",
    date: "2026-02-28",
    category: "Roadside Tips",
    readTime: "8 min read",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663302699278/Jgpf9ic4jjaFgb9BZVtjff/blog-emergency-roadside-assistance-texas-DDEko5SioTpe3EUefPq27o.webp",
  },
  {
    slug: "heavy-duty-vs-light-duty-towing-dallas",
    title: "Heavy-Duty vs. Light-Duty Towing in Dallas: What's the Difference?",
    excerpt:
      "Not all tow trucks are built the same. Learn the key differences between heavy-duty and light-duty towing, what each service covers, and how to pick the right one for your vehicle in Dallas.",
    date: "2026-02-28",
    category: "Towing Education",
    readTime: "7 min read",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663302699278/Jgpf9ic4jjaFgb9BZVtjff/blog-heavy-vs-light-duty-towing-75cq2tdUnvxdVD2EFGiSEG.webp",
  },
  {
    slug: "what-to-do-when-your-car-breaks-down-dallas",
    title: "What to Do When Your Car Breaks Down in Dallas",
    excerpt: "Breaking down on a Dallas highway is stressful. Here's a step-by-step guide to staying safe and getting help fast — from the moment your car stops to the moment you're back on the road.",
    date: "2025-12-10",
    category: "Safety Tips",
    readTime: "5 min read",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/vuXtOpWtHeHmIMjV.webp",
  },
  {
    slug: "flatbed-vs-wheel-lift-towing-dallas",
    title: "Flatbed vs. Wheel-Lift Towing: Which Is Right for Your Vehicle?",
    excerpt: "Not all towing is the same. Understanding the difference between flatbed and wheel-lift towing could save your vehicle from unnecessary damage. Here's what every Dallas driver should know.",
    date: "2025-11-22",
    category: "Towing Education",
    readTime: "4 min read",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/HThvZdTcPMaCtfyu.webp",
  },
  {
    slug: "how-to-choose-towing-company-dallas",
    title: "How to Choose a Towing Company in Dallas You Can Actually Trust",
    excerpt: "There are dozens of towing companies in Dallas — and not all of them play fair. Here are the questions to ask and the red flags to watch for before you hand over your keys.",
    date: "2025-11-05",
    category: "Consumer Advice",
    readTime: "6 min read",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/JDgXPnlWDSHFqZfl.webp",
  },
  {
    slug: "dead-battery-dallas-what-to-do",
    title: "Dead Battery in Dallas? Here's What to Do (and What Not to Do)",
    excerpt: "A dead battery is one of the most common roadside emergencies in Dallas. Here's how to handle it safely — including when a jump start is enough and when you need a full replacement.",
    date: "2025-10-18",
    category: "Roadside Tips",
    readTime: "4 min read",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/qwNQtjEWMqZdXYbM.webp",
  },
  {
    slug: "towing-rights-texas-what-you-need-to-know",
    title: "Your Towing Rights in Texas: What Every Driver Needs to Know",
    excerpt: "Texas has specific laws governing towing companies — including pricing, documentation, and your right to retrieve your vehicle. Every Dallas driver should know these rules.",
    date: "2025-10-02",
    category: "Know Your Rights",
    readTime: "7 min read",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/RoPxLvfdkIeiMLrg.webp",
  },
  {
    slug: "towing-discount-military-teachers-first-responders-dallas",
    title: "Texas Tows Offers 15% Off for Military, Teachers & First Responders in Dallas",
    excerpt: "Some people show up when things get hard. That's why we offer 15% off all towing and roadside assistance to active military, veterans, teachers, and first responders in the Dallas area.",
    date: "2025-09-15",
    category: "Community",
    readTime: "4 min read",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/hiJwwoRYdhbxcrPB.webp",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/tMroEVnOTPAzSpad.webp"
            alt="Texas Tows Inc. blog hero — towing tips and advice"
            fill
            className="object-cover object-[center_40%]"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0a2340]/80" />
        </div>
        <div className="container-tx text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Towing Tips &amp; Roadside Advice
          </h1>
          <p className="text-xl text-white/75 max-w-2xl mx-auto">
            Practical guides from Dallas&apos;s trusted towing company — so you&apos;re prepared before you need us.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-white py-20">
        <div className="container-tx">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card-service group overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#045cb4] bg-blue-50 px-2 py-1 rounded-full">
                      <Tag size={10} /> {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={10} />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-[#0a2340] text-base mb-2 leading-snug group-hover:text-[#045cb4] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#045cb4] hover:underline mt-auto"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2340] py-16">
        <div className="container-tx text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Need Help Right Now?</h2>
          <p className="text-white/70 text-lg mb-8">
            Reading can wait — if you need a tow, we&apos;re available 24/7.
          </p>
          <a href={BUSINESS.phoneHref} className="btn-yellow text-xl py-5 px-10 inline-flex">
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
