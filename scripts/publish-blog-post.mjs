#!/usr/bin/env node
/**
 * TexasTows.com — Automated Blog Post Publisher
 * 
 * Usage:
 *   node scripts/publish-blog-post.mjs --slug "towing-after-car-accident-dallas"
 *   node scripts/publish-blog-post.mjs --slug "..." --dry-run
 * 
 * What it does:
 *   1. Looks up the topic from BLOG_PIPELINE
 *   2. Generates full SEO-optimized blog post content via OpenAI GPT-4o
 *   3. Generates a featured image via Manus image generation API
 *   4. Uploads image to CDN
 *   5. Creates the Next.js page.tsx file with all metadata
 *   6. Updates blog/page.tsx index and sitemap.ts
 *   7. Commits and pushes to GitHub → triggers Vercel deploy
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const DRY_RUN = process.argv.includes('--dry-run');
const SLUG_ARG = process.argv.find((a, i) => process.argv[i - 1] === '--slug');

if (!SLUG_ARG) {
  console.error('Usage: node scripts/publish-blog-post.mjs --slug "your-post-slug"');
  process.exit(1);
}

// ─── GitHub Config ───────────────────────────────────────────────────────────
// Token loaded from environment — set GITHUB_PAT before running
// Source: SOPs dashboard → API Credentials → GitHub (entry 5)
const GITHUB_TOKEN = process.env.GITHUB_PAT;
const GITHUB_REPO  = 'stephen-huskytail/texas-tows-nextjs';
const GITHUB_REMOTE = `https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git`;

if (!GITHUB_TOKEN) {
  console.error('❌ GITHUB_PAT environment variable not set.');
  console.error('   Set it before running: GITHUB_PAT=ghp_... node scripts/publish-blog-post.mjs ...');
  process.exit(1);
}

// ─── OpenAI Config ───────────────────────────────────────────────────────────
// Uses the Manus built-in Forge API (OpenAI-compatible)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.BUILT_IN_FORGE_API_KEY;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || process.env.OPENAI_API_BASE || 'https://api.manus.im/api/llm-proxy/v1';

// ─── Blog Pipeline ───────────────────────────────────────────────────────────
const BLOG_PIPELINE = [
  // March 2026
  { slug: "towing-after-car-accident-dallas", title: "What Happens to Your Car After an Accident in Dallas?", keyword: "towing after car accident Dallas", category: "Towing Education", date: "2026-03-03", services: ["/services/towing-service", "/services/accident-recovery"], neighborhoods: ["Dallas", "I-35", "LBJ Freeway"] },
  { slug: "how-long-can-car-sit-on-side-of-road-texas", title: "How Long Can Your Car Sit on the Side of the Road in Texas?", keyword: "abandoned vehicle Texas law", category: "Legal & Rights", date: "2026-03-06", services: ["/services/towing-service"], neighborhoods: ["Dallas", "Texas highways"] },
  { slug: "winch-out-service-dallas-stuck-vehicle", title: "Stuck Vehicle in Dallas? What a Winch-Out Service Actually Does", keyword: "winch out service Dallas", category: "Towing Education", date: "2026-03-10", services: ["/services/winch-outs", "/services/roadside-assistance"], neighborhoods: ["Dallas", "North Dallas", "Garland"] },
  { slug: "towing-suv-truck-dallas", title: "Towing an SUV or Truck in Dallas: What You Need to Know", keyword: "towing SUV Dallas", category: "Towing Education", date: "2026-03-13", services: ["/services/towing-service", "/services/flatbed-towing"], neighborhoods: ["Dallas", "Plano", "Irving"] },
  { slug: "spring-car-maintenance-checklist-dallas", title: "Spring Car Maintenance Checklist for Dallas Drivers", keyword: "spring car maintenance Dallas", category: "Seasonal", date: "2026-03-17", services: ["/services/roadside-assistance"], neighborhoods: ["Dallas", "DFW"] },
  { slug: "lockout-service-dallas-locked-keys-in-car", title: "Locked Keys in Your Car in Dallas? Here's What to Do", keyword: "lockout service Dallas", category: "Roadside Tips", date: "2026-03-20", services: ["/services/roadside-assistance"], neighborhoods: ["Dallas", "Uptown", "Deep Ellum"] },
  { slug: "vehicle-transport-classic-car-dallas", title: "Moving a Classic Car in Dallas: Why Enclosed Transport Matters", keyword: "classic car transport Dallas", category: "Towing Education", date: "2026-03-24", services: ["/services/vehicle-transport", "/services/flatbed-towing"], neighborhoods: ["Dallas", "Park Cities"] },
  { slug: "towing-laws-private-property-texas", title: "Private Property Towing Laws in Texas: What Drivers Need to Know", keyword: "private property towing Texas", category: "Legal & Rights", date: "2026-03-27", services: ["/services/unattended-towing"], neighborhoods: ["Dallas", "Texas"] },
  // April 2026
  { slug: "roadside-assistance-north-dallas", title: "Roadside Assistance in North Dallas: Fast Response When It Counts", keyword: "roadside assistance North Dallas", category: "Local Guides", date: "2026-03-31", services: ["/services/roadside-assistance", "/services/towing-service"], neighborhoods: ["North Dallas", "Addison", "Richardson"] },
  { slug: "flat-tire-highway-dallas-what-to-do", title: "Got a Flat Tire on a Dallas Highway? Do This First", keyword: "flat tire highway Dallas", category: "Roadside Tips", date: "2026-04-03", services: ["/services/roadside-assistance"], neighborhoods: ["Dallas", "I-635", "I-30"] },
  { slug: "junk-car-removal-dallas-how-it-works", title: "How Junk Car Removal Works in Dallas (And What You Get for It)", keyword: "junk car removal Dallas", category: "Towing Education", date: "2026-04-07", services: ["/services/junk-car-removal"], neighborhoods: ["Dallas", "South Dallas", "Oak Cliff"] },
  { slug: "towing-motorcycle-dallas", title: "Towing a Motorcycle in Dallas: What's Different and Why It Matters", keyword: "motorcycle towing Dallas", category: "Towing Education", date: "2026-04-10", services: ["/services/towing-service", "/services/flatbed-towing"], neighborhoods: ["Dallas", "East Dallas", "Garland"] },
  { slug: "accident-recovery-dallas-i35-i635", title: "Accident Recovery on Dallas Highways: I-35, I-635, and Beyond", keyword: "accident recovery Dallas", category: "Local Guides", date: "2026-04-14", services: ["/services/accident-recovery", "/services/towing-service"], neighborhoods: ["Dallas", "I-35", "I-635", "LBJ Freeway"] },
  { slug: "car-overheating-dallas-summer-what-to-do", title: "Car Overheating in Dallas Summer Heat: What to Do Right Now", keyword: "car overheating Dallas", category: "Roadside Tips", date: "2026-04-17", services: ["/services/roadside-assistance", "/services/towing-service"], neighborhoods: ["Dallas", "DFW"] },
  { slug: "towing-electric-vehicle-dallas", title: "Towing an Electric Vehicle in Dallas: What's Different", keyword: "electric vehicle towing Dallas", category: "Towing Education", date: "2026-04-21", services: ["/services/flatbed-towing", "/services/towing-service"], neighborhoods: ["Dallas", "Plano", "Frisco"] },
  { slug: "roadside-assistance-preston-hollow-dallas", title: "Roadside Assistance in Preston Hollow: Fast, Local, 24/7", keyword: "roadside assistance Preston Hollow", category: "Local Guides", date: "2026-04-24", services: ["/services/roadside-assistance"], neighborhoods: ["Preston Hollow", "North Dallas", "Park Cities"] },
];

// ─── Service Internal Links ───────────────────────────────────────────────────
const SERVICE_LABELS = {
  "/services/towing-service": "professional towing service",
  "/services/roadside-assistance": "24/7 roadside assistance",
  "/services/flatbed-towing": "flatbed towing",
  "/services/accident-recovery": "accident recovery",
  "/services/winch-outs": "winch-out service",
  "/services/vehicle-transport": "vehicle transport",
  "/services/junk-car-removal": "junk car removal",
  "/services/unattended-towing": "unattended vehicle towing",
  "/services/stuck-in-garage-towing": "stuck-in-garage towing",
  "/services/secondary-towing": "secondary towing",
};

// ─── Helper: HTTP POST ────────────────────────────────────────────────────────
function httpPost(url, headers, body) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { resolve(data); }
      });
    });
    req.on('error', reject);
    req.write(JSON.stringify(body));
    req.end();
  });
}

// ─── Generate Blog Content via OpenAI ────────────────────────────────────────
async function generateBlogContent(topic) {
  console.log(`\n📝 Generating content for: "${topic.title}"...`);

  const serviceLinks = topic.services.map(s =>
    `<Link href="${s}" className="text-yellow-500 hover:text-yellow-400 underline">${SERVICE_LABELS[s]}</Link>`
  ).join(' and ');

  const systemPrompt = `You are a professional content writer for Texas Tows Inc., a TDLR-licensed towing company based in Dallas, TX, serving the DFW area since 2015. 

Write in a confident, helpful, and authoritative tone. You are writing for real Dallas drivers who need practical information.

STRICT RULES:
- NO pricing, rates, or cost comparisons
- NO fabricated testimonials or reviews  
- NO competitor mentions by name
- NO claims like "#1 in Dallas" unless verifiable
- DO mention: TDLR licensing, 24/7 availability, Dallas-specific roads/neighborhoods, Texas laws where relevant
- DO include: practical actionable advice, Texas-specific context, safety information
- Word count: 1,200–1,800 words
- Write in full paragraphs, not bullet lists (use bullets sparingly for lists of items only)
- Include an H2 for each major section
- The company phone is (214) 555-0147 — include it naturally in the conclusion`;

  const userPrompt = `Write a complete, SEO-optimized blog post for TexasTows.com.

Title: ${topic.title}
Primary keyword: "${topic.keyword}"
Category: ${topic.category}
Target neighborhoods/locations: ${topic.neighborhoods.join(', ')}

Requirements:
1. Open with a compelling intro paragraph that hooks a Dallas driver in a stressful situation
2. Cover the topic comprehensively with 4–6 H2 sections
3. Include at least 2 mentions of specific Dallas roads, neighborhoods, or landmarks: ${topic.neighborhoods.join(', ')}
4. Reference Texas law or regulations where relevant (Texas Transportation Code, TDLR)
5. Include a practical "what to do" section with actionable steps
6. Close with a strong CTA paragraph mentioning Texas Tows Inc. and the phone number (214) 555-0147
7. Do NOT include the title as H1 (the component handles that)
8. Do NOT include meta description or schema (handled separately)

Return ONLY the blog post body content as JSX-compatible HTML (use <p>, <h2>, <h3>, <ul>, <li>, <strong>, <table>, <thead>, <tbody>, <tr>, <th>, <td> tags). 
Do NOT include <html>, <body>, <head>, or any wrapper elements.
Do NOT include the title/H1.
Use className instead of class for any HTML attributes.`;

  const response = await httpPost(
    `${OPENAI_BASE_URL}/chat/completions`,
    { 'Authorization': `Bearer ${OPENAI_API_KEY}` },
    {
      model: 'gpt-4.1-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 3000,
    }
  );

  if (!response.choices?.[0]?.message?.content) {
    throw new Error(`OpenAI API error: ${JSON.stringify(response)}`);
  }

  return response.choices[0].message.content;
}

// ─── Generate Meta Description ────────────────────────────────────────────────
async function generateMeta(topic) {
  console.log(`\n🔍 Generating meta description...`);

  const response = await httpPost(
    `${OPENAI_BASE_URL}/chat/completions`,
    { 'Authorization': `Bearer ${OPENAI_API_KEY}` },
    {
      model: 'gpt-4.1-nano',
      messages: [{
        role: 'user',
        content: `Write a Google meta description for this blog post. 
Title: "${topic.title}"
Primary keyword: "${topic.keyword}"
Rules: 140–155 characters, include primary keyword, include "Dallas" or "Texas", end with a soft CTA like "Call 24/7" or "Learn more". 
Return ONLY the meta description text, nothing else.`
      }],
      temperature: 0.5,
      max_tokens: 60,
    }
  );

  return response.choices?.[0]?.message?.content?.trim() || 
    `${topic.title} — Expert advice from Texas Tows Inc., Dallas's trusted 24/7 towing and roadside assistance service.`;
}

// ─── Generate Image Prompt ────────────────────────────────────────────────────
async function generateImagePrompt(topic) {
  const response = await httpPost(
    `${OPENAI_BASE_URL}/chat/completions`,
    { 'Authorization': `Bearer ${OPENAI_API_KEY}` },
    {
      model: 'gpt-4.1-nano',
      messages: [{
        role: 'user',
        content: `Create a detailed image generation prompt for a professional blog post featured image.
Topic: "${topic.title}"
Category: ${topic.category}

The image should:
- Show a realistic towing or roadside scene in Dallas, Texas
- Be cinematic, professional photography style
- Show dramatic lighting (golden hour, nighttime with lights, or overcast dramatic sky)
- Include relevant vehicles, equipment, or road scenes
- Optionally include Dallas skyline or recognizable Texas highway elements in background
- NOT include text or logos

Return ONLY the image generation prompt (2-3 sentences), nothing else.`
      }],
      temperature: 0.8,
      max_tokens: 150,
    }
  );

  return response.choices?.[0]?.message?.content?.trim() || 
    `Professional tow truck operator assisting a stranded vehicle on a Dallas Texas highway at golden hour, dramatic sky, Dallas skyline visible in background, photorealistic.`;
}

// ─── Build Page TSX ───────────────────────────────────────────────────────────
function buildPageTSX(topic, metaDesc, content, imageUrl) {
  const serviceImports = topic.services.length > 0 ? `import Link from "next/link";\n` : '';
  
  // Build internal link JSX for conclusion
  const serviceLinksJSX = topic.services.map(s =>
    `<Link href="${s}" className="text-yellow-500 hover:text-yellow-400 underline">${SERVICE_LABELS[s]}</Link>`
  ).join(' and our ');

  // Format date for display
  const dateObj = new Date(topic.date);
  const readTime = "7 min read";

  return `import type { Metadata } from "next";
${serviceImports}import { BUSINESS } from "@/lib/constants";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "${topic.title} | Texas Tows",
  description:
    "${metaDesc.replace(/"/g, '\\"')}",
  alternates: {
    canonical: "https://texastows.com/blog/${topic.slug}",
  },
};

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="${topic.title}"
      date="${topic.date}"
      readTime="${readTime}"
      category="${topic.category}"
      description="${metaDesc.replace(/"/g, '\\"')}"
      featuredImage="${imageUrl}"
      featuredImageAlt="${topic.title} — Texas Tows Inc. Dallas"
    >
${content.split('\n').map(line => `      ${line}`).join('\n')}
    </BlogPostLayout>
  );
}
`;
}

// ─── Update Blog Index ────────────────────────────────────────────────────────
function updateBlogIndex(topic, metaDesc, imageUrl) {
  const indexPath = join(PROJECT_ROOT, 'src/app/blog/page.tsx');
  let content = readFileSync(indexPath, 'utf-8');

  const newEntry = `  {
    slug: "${topic.slug}",
    title: "${topic.title}",
    excerpt:
      "${metaDesc.replace(/"/g, '\\"')}",
    date: "${topic.date}",
    category: "${topic.category}",
    readTime: "7 min read",
    image:
      "${imageUrl}",
  },`;

  // Insert at top of blogPosts array
  content = content.replace(
    /const blogPosts = \[\n/,
    `const blogPosts = [\n${newEntry}\n`
  );

  writeFileSync(indexPath, content, 'utf-8');
  console.log('✅ Updated blog index');
}

// ─── Update Sitemap ───────────────────────────────────────────────────────────
function updateSitemap(slug) {
  const sitemapPath = join(PROJECT_ROOT, 'src/app/sitemap.ts');
  let content = readFileSync(sitemapPath, 'utf-8');

  // Insert at top of blogPosts array
  content = content.replace(
    /const blogPosts = \[\n/,
    `const blogPosts = [\n  "${slug}",\n`
  );

  writeFileSync(sitemapPath, content, 'utf-8');
  console.log('✅ Updated sitemap');
}

// ─── Git Push ─────────────────────────────────────────────────────────────────
function gitPush(slug) {
  console.log('\n🚀 Pushing to GitHub...');
  const cwd = PROJECT_ROOT;
  
  try {
    execSync(`git -C "${cwd}" pull "${GITHUB_REMOTE}" main --rebase 2>&1`, { stdio: 'pipe' });
  } catch (e) {
    console.log('  Pull warning (continuing):', e.message.slice(0, 100));
  }

  execSync(`git -C "${cwd}" add src/app/blog/${slug}/page.tsx src/app/blog/page.tsx src/app/sitemap.ts`, { stdio: 'inherit' });
  execSync(`git -C "${cwd}" commit -m "feat(blog): auto-publish — ${slug}"`, { stdio: 'inherit' });
  execSync(`git -C "${cwd}" push "${GITHUB_REMOTE}" main`, { stdio: 'inherit' });
  console.log('✅ Pushed to GitHub — Vercel deploying now');
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const topic = BLOG_PIPELINE.find(t => t.slug === SLUG_ARG);
  if (!topic) {
    console.error(`❌ Slug "${SLUG_ARG}" not found in BLOG_PIPELINE.`);
    console.log('\nAvailable slugs:');
    BLOG_PIPELINE.forEach(t => console.log(`  ${t.slug}`));
    process.exit(1);
  }

  console.log(`\n🎯 Publishing: ${topic.title}`);
  console.log(`   Date: ${topic.date} | Category: ${topic.category}`);
  if (DRY_RUN) console.log('   [DRY RUN — files will be created but not pushed]\n');

  // Check if post already exists
  const postDir = join(PROJECT_ROOT, 'src/app/blog', topic.slug);
  if (existsSync(postDir)) {
    console.error(`❌ Post already exists: ${postDir}`);
    process.exit(1);
  }

  // 1. Generate content
  const [content, metaDesc, imagePrompt] = await Promise.all([
    generateBlogContent(topic),
    generateMeta(topic),
    generateImagePrompt(topic),
  ]);

  console.log(`\n📐 Meta: "${metaDesc}"`);
  console.log(`🖼  Image prompt: "${imagePrompt.slice(0, 80)}..."`);

  // 2. Generate image using Manus image API
  console.log('\n🎨 Generating featured image...');
  let imageUrl = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80`; // fallback
  
  try {
    const imgResponse = await httpPost(
      `${OPENAI_BASE_URL}/images/generations`,
      { 'Authorization': `Bearer ${OPENAI_API_KEY}` },
      {
        model: 'dall-e-3', // will fall back to unsplash if unavailable
        prompt: imagePrompt,
        n: 1,
        size: '1792x1024',
        quality: 'standard',
      }
    );
    if (imgResponse.data?.[0]?.url) {
      imageUrl = imgResponse.data[0].url;
      console.log(`✅ Image generated: ${imageUrl.slice(0, 60)}...`);
    }
  } catch (e) {
    console.log(`⚠️  Image generation failed, using fallback: ${e.message}`);
  }

  // 3. Build page file
  const pageTSX = buildPageTSX(topic, metaDesc, content, imageUrl);

  if (DRY_RUN) {
    console.log('\n--- DRY RUN: page.tsx preview ---');
    console.log(pageTSX.slice(0, 500) + '...');
    console.log('\n✅ Dry run complete. No files written.');
    return;
  }

  // 4. Write files
  mkdirSync(postDir, { recursive: true });
  writeFileSync(join(postDir, 'page.tsx'), pageTSX, 'utf-8');
  console.log(`✅ Created: src/app/blog/${topic.slug}/page.tsx`);

  updateBlogIndex(topic, metaDesc, imageUrl);
  updateSitemap(topic.slug);

  // 5. TypeScript check
  console.log('\n🔍 Running TypeScript check...');
  try {
    execSync(`cd "${PROJECT_ROOT}" && npx tsc --noEmit 2>&1`, { stdio: 'pipe' });
    console.log('✅ TypeScript: no errors');
  } catch (e) {
    console.error('❌ TypeScript errors detected:');
    console.error(e.stdout?.toString().slice(0, 500));
    process.exit(1);
  }

  // 6. Push to GitHub
  gitPush(topic.slug);

  console.log(`\n🎉 Done! Post will be live at:`);
  console.log(`   https://texastows.com/blog/${topic.slug}`);
  console.log(`   (Vercel deploy takes ~60 seconds)`);
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
