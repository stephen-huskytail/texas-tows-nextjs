// ─── Blog Post Data & Date Filtering ─────────────────────────────────────────
// Single source of truth for all blog posts. Used by:
//   - /blog (index page) — shows only published posts
//   - /sitemap.ts — includes only published posts
//   - /api/cron/publish — triggers revalidation so new posts appear on their date

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD format (publish date)
  category: string;
  readTime: string;
  image: string;
}

/**
 * All blog posts, ordered newest-first.
 * Posts with future dates are stored here but filtered out at render time.
 */
export const ALL_BLOG_POSTS: BlogPost[] = [
  {
    slug: "vehicle-transport-classic-car-dallas",
    title: "Moving a Classic Car in Dallas: Why Enclosed Transport Matters",
    excerpt:
      "Transporting a classic car in Dallas? Learn why enclosed vehicle transport is the gold standard, how it works, and what to expect. Call Texas Tows 24/7.",
    date: "2026-03-24",
    category: "Towing Education",
    readTime: "8 min read",
    image: "/images/blog-vehicle-transport-classic-car-dallas.webp",
  },
  {
    slug: "lockout-service-dallas-locked-keys-in-car",
    title: "Locked Keys in Your Car in Dallas? Here's What to Do",
    excerpt:
      "Locked keys in your car in Dallas? Our expert lockout service Dallas teams are ready to help. Call 24/7 for fast assistance in Texas. Learn more today!",
    date: "2026-03-20",
    category: "Roadside Tips",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },
  {
    slug: "spring-car-maintenance-checklist-dallas",
    title: "Spring Car Maintenance Checklist for Dallas Drivers",
    excerpt:
      "Prepare your vehicle for Dallas spring and summer heat with this seasonal maintenance checklist. Prevent breakdowns before they happen. Call Texas Tows 24/7.",
    date: "2026-03-17",
    category: "Seasonal",
    readTime: "8 min read",
    image:
      "/images/blog-spring-car-maintenance-checklist-dallas.webp",
  },
  {
    slug: "towing-suv-truck-dallas",
    title: "Towing an SUV or Truck in Dallas: What You Need to Know",
    excerpt:
      "SUVs and trucks need special towing considerations in Dallas. Learn which equipment is right for your vehicle, why AWD matters, and how to avoid drivetrain damage. Call 24/7.",
    date: "2026-03-16",
    category: "Towing Education",
    readTime: "7 min read",
    image:
      "/images/blog-towing-suv-truck-dallas.webp",
  },
  {
    slug: "junk-car-removal-dallas",
    title: "Junk Car Removal in Dallas: What to Expect and How It Works",
    excerpt:
      "Ready to get rid of an old, wrecked, or non-running vehicle in Dallas? Learn how junk car removal works, what you need to have ready, and how Texas Tows makes the process simple.",
    date: "2026-03-16",
    category: "Consumer Advice",
    readTime: "7 min read",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663302699278/Jgpf9ic4jjaFgb9BZVtjff/blog-junk-car-removal-dallas-6W6wJxQm47fwbTm3niTwDY.webp",
  },
  {
    slug: "stuck-in-ditch-dallas-winch-out-service",
    title: "Car Stuck in a Ditch in Dallas? Here\u2019s What to Do",
    excerpt:
      "Car stuck in a ditch, mud, or off-road in Dallas? Learn when to call a winch-out service, what the process looks like, and why DIY recovery often makes it worse. Texas Tows responds 24/7.",
    date: "2026-03-16",
    category: "Roadside Tips",
    readTime: "7 min read",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663302699278/Jgpf9ic4jjaFgb9BZVtjff/blog-winch-out-stuck-car-dallas-jCbiDrMQ8i97Mpf3GWbNDg.webp",
  },
  {
    slug: "towing-after-accident-dallas",
    title: "Towing in Dallas After an Accident: What to Do in the First 30 Minutes",
    excerpt:
      "Been in a car accident in Dallas? Here's exactly what to do in the first 30 minutes — from the scene to the tow — including your right to choose your own towing company.",
    date: "2026-03-09",
    category: "Know Your Rights",
    readTime: "8 min read",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663302699278/Jgpf9ic4jjaFgb9BZVtjff/blog-towing-after-accident-dallas-P87g6fLC5BiZzqJeBXGpqN.webp",
  },
  {
    slug: "how-long-does-a-tow-take-dallas",
    title: "How Long Does a Tow Take in Dallas? What to Expect From Call to Drop-Off",
    excerpt:
      "Wondering how long a tow truck takes in Dallas? Learn average response times, what affects your wait, and exactly what happens from your first call to final drop-off.",
    date: "2026-03-09",
    category: "Towing Education",
    readTime: "6 min read",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663302699278/Jgpf9ic4jjaFgb9BZVtjff/blog-how-long-does-tow-take-dallas-v2-HY2UULjiZYvhWo5z6AG64b.webp",
  },
  {
    slug: "how-long-can-car-sit-on-side-of-road-texas",
    title: "How Long Can Your Car Sit on the Side of the Road in Texas?",
    excerpt:
      "Abandoned vehicle Texas law explained — learn how long your car can sit on a Texas highway before it gets towed, fees, and how to avoid impound. Call 24/7.",
    date: "2026-03-06",
    category: "Legal & Rights",
    readTime: "7 min read",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030307747/bBvFOTxJGEFTAjuE.jpg",
  },
  {
    slug: "towing-after-car-accident-dallas",
    title: "What Happens to Your Car After an Accident in Dallas?",
    excerpt:
      "Towing after a car accident in Dallas — learn what happens to your vehicle, your rights under Texas law, and how to choose a TDLR-licensed towing company. Call 24/7.",
    date: "2026-03-03",
    category: "Towing Education",
    readTime: "7 min read",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030307747/MDgTOPXPNxZRSmrB.jpg",
  },
  {
    slug: "emergency-roadside-assistance-texas",
    title:
      "Emergency Roadside Assistance in Texas: What Every Driver Needs to Know",
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
    title:
      "Heavy-Duty vs. Light-Duty Towing in Dallas: What's the Difference?",
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
    excerpt:
      "Breaking down on a Dallas highway is stressful. Here's a step-by-step guide to staying safe and getting help fast — from the moment your car stops to the moment you're back on the road.",
    date: "2025-12-10",
    category: "Safety Tips",
    readTime: "5 min read",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/vuXtOpWtHeHmIMjV.webp",
  },
  {
    slug: "flatbed-vs-wheel-lift-towing-dallas",
    title:
      "Flatbed vs. Wheel-Lift Towing: Which Is Right for Your Vehicle?",
    excerpt:
      "Not all towing is the same. Understanding the difference between flatbed and wheel-lift towing could save your vehicle from unnecessary damage. Here's what every Dallas driver should know.",
    date: "2025-11-22",
    category: "Towing Education",
    readTime: "4 min read",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/HThvZdTcPMaCtfyu.webp",
  },
  {
    slug: "how-to-choose-towing-company-dallas",
    title:
      "How to Choose a Towing Company in Dallas You Can Actually Trust",
    excerpt:
      "There are dozens of towing companies in Dallas — and not all of them play fair. Here are the questions to ask and the red flags to watch for before you hand over your keys.",
    date: "2025-11-05",
    category: "Consumer Advice",
    readTime: "6 min read",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/JDgXPnlWDSHFqZfl.webp",
  },
  {
    slug: "dead-battery-dallas-what-to-do",
    title:
      "Dead Battery in Dallas? Here's What to Do (and What Not to Do)",
    excerpt:
      "A dead battery is one of the most common roadside emergencies in Dallas. Here's how to handle it safely — including when a jump start is enough and when you need a full replacement.",
    date: "2025-10-18",
    category: "Roadside Tips",
    readTime: "4 min read",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/qwNQtjEWMqZdXYbM.webp",
  },
  {
    slug: "towing-rights-texas-what-you-need-to-know",
    title:
      "Your Towing Rights in Texas: What Every Driver Needs to Know",
    excerpt:
      "Texas has specific laws governing towing companies — including pricing, documentation, and your right to retrieve your vehicle. Every Dallas driver should know these rules.",
    date: "2025-10-02",
    category: "Know Your Rights",
    readTime: "7 min read",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/RoPxLvfdkIeiMLrg.webp",
  },
  {
    slug: "towing-discount-military-teachers-first-responders-dallas",
    title:
      "Texas Tows Offers 15% Off for Military, Teachers & First Responders in Dallas",
    excerpt:
      "Some people show up when things get hard. That's why we offer 15% off all towing and roadside assistance to active military, veterans, teachers, and first responders in the Dallas area.",
    date: "2025-09-15",
    category: "Community",
    readTime: "4 min read",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/hiJwwoRYdhbxcrPB.webp",
  },
];

/**
 * Get today's date string in CST (America/Chicago) as YYYY-MM-DD.
 * Dallas is in the Central Time Zone, so all publish-date comparisons
 * use CST/CDT to ensure posts go live at midnight local time.
 */
export function getTodayCST(): string {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Chicago",
  }); // "en-CA" locale gives YYYY-MM-DD format
}

/**
 * Returns only blog posts whose publish date is today or in the past (CST).
 * Future-dated posts are excluded from listings and sitemap.
 */
export function getPublishedPosts(): BlogPost[] {
  const today = getTodayCST();
  return ALL_BLOG_POSTS.filter((post) => post.date <= today);
}
