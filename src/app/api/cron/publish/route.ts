import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getPublishedPosts, ALL_BLOG_POSTS } from "@/lib/blogData";

/**
 * POST /api/cron/publish
 *
 * Vercel Cron Job endpoint — runs daily at midnight CST (6:00 AM UTC).
 * Revalidates the blog index and sitemap so that posts whose publish date
 * has arrived will appear in listings automatically.
 *
 * Security: Vercel automatically sends an Authorization header with the
 * CRON_SECRET env var for cron-invoked requests. We verify it here to
 * prevent unauthorized access.
 */
export async function GET(request: NextRequest) {
  // ── Auth check ──────────────────────────────────────────────────────────
  // Vercel cron jobs send: Authorization: Bearer <CRON_SECRET>
  // In production, CRON_SECRET should be set as a Vercel environment variable.
  // If not set, we skip the check (allows local testing / initial deploy).
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
  }

  try {
    // ── Revalidate paths ────────────────────────────────────────────────
    // These calls purge the ISR cache for the blog index and sitemap,
    // forcing Next.js to re-render them on the next request.
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");

    // ── Report what happened ────────────────────────────────────────────
    const published = getPublishedPosts();
    const total = ALL_BLOG_POSTS.length;
    const pending = total - published.length;

    return NextResponse.json({
      success: true,
      revalidated: ["/blog", "/sitemap.xml"],
      timestamp: new Date().toISOString(),
      stats: {
        totalPosts: total,
        publishedPosts: published.length,
        pendingPosts: pending,
        newestPublished: published[0]?.slug ?? null,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
