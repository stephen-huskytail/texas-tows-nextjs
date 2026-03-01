#!/usr/bin/env node
/**
 * TexasTows.com — Scheduled Blog Runner
 * 
 * Runs on a schedule (Tue + Fri) and publishes the next due blog post
 * from the pipeline in publish-blog-post.mjs.
 * 
 * Called by Manus scheduler — no arguments needed.
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

// Import pipeline from publish script (inline for scheduler compatibility)
const BLOG_PIPELINE = [
  // March 2026
  { slug: "towing-after-car-accident-dallas",              date: "2026-03-03" },
  { slug: "how-long-can-car-sit-on-side-of-road-texas",    date: "2026-03-06" },
  { slug: "winch-out-service-dallas-stuck-vehicle",        date: "2026-03-10" },
  { slug: "towing-suv-truck-dallas",                       date: "2026-03-13" },
  { slug: "spring-car-maintenance-checklist-dallas",       date: "2026-03-17" },
  { slug: "lockout-service-dallas-locked-keys-in-car",     date: "2026-03-20" },
  { slug: "vehicle-transport-classic-car-dallas",          date: "2026-03-24" },
  { slug: "towing-laws-private-property-texas",            date: "2026-03-27" },
  // April 2026
  { slug: "roadside-assistance-north-dallas",              date: "2026-03-31" },
  { slug: "flat-tire-highway-dallas-what-to-do",           date: "2026-04-03" },
  { slug: "junk-car-removal-dallas-how-it-works",          date: "2026-04-07" },
  { slug: "towing-motorcycle-dallas",                      date: "2026-04-10" },
  { slug: "accident-recovery-dallas-i35-i635",             date: "2026-04-14" },
  { slug: "car-overheating-dallas-summer-what-to-do",      date: "2026-04-17" },
  { slug: "towing-electric-vehicle-dallas",                date: "2026-04-21" },
  { slug: "roadside-assistance-preston-hollow-dallas",     date: "2026-04-24" },
  // May 2026
  { slug: "towing-lowered-car-dallas",                     date: "2026-04-28" },
  { slug: "what-to-do-car-wont-start-dallas",              date: "2026-05-01" },
  { slug: "secondary-towing-dallas-what-is-it",            date: "2026-05-05" },
  { slug: "towing-rights-non-consent-tow-dallas",          date: "2026-05-08" },
  { slug: "roadside-assistance-lake-highlands-dallas",     date: "2026-05-12" },
  { slug: "summer-driving-tips-dallas-heat",               date: "2026-05-15" },
  { slug: "towing-luxury-vehicle-dallas",                  date: "2026-05-19" },
  { slug: "stuck-in-garage-towing-dallas",                 date: "2026-05-22" },
  // June 2026
  { slug: "towing-awd-4wd-vehicle-dallas",                 date: "2026-05-26" },
  { slug: "fuel-delivery-service-dallas",                  date: "2026-05-29" },
  { slug: "roadside-assistance-medical-district-dallas",   date: "2026-06-02" },
  { slug: "car-breakdown-dallas-tollway",                  date: "2026-06-05" },
  { slug: "towing-company-response-time-dallas",           date: "2026-06-09" },
  { slug: "vehicle-transport-dallas-to-houston",           date: "2026-06-12" },
  { slug: "unattended-vehicle-towing-dallas-property-managers", date: "2026-06-16" },
  { slug: "roadside-assistance-smu-university-park",       date: "2026-06-19" },
  // July 2026
  { slug: "towing-during-dallas-storm-flooding",           date: "2026-06-23" },
  { slug: "car-battery-heat-dallas-summer",                date: "2026-06-26" },
  { slug: "how-to-read-tow-truck-invoice-texas",           date: "2026-06-30" },
  { slug: "roadside-assistance-lower-greenville-dallas",   date: "2026-07-03" },
  { slug: "towing-rental-car-dallas",                      date: "2026-07-07" },
  { slug: "tire-blowout-highway-dallas-prevention",        date: "2026-07-10" },
  { slug: "towing-company-insurance-claim-dallas",         date: "2026-07-14" },
  { slug: "car-breakdown-dallas-i45-i20",                  date: "2026-07-17" },
  // August 2026
  { slug: "roadside-assistance-park-cities-dallas",        date: "2026-07-21" },
  { slug: "towing-boat-trailer-dallas",                    date: "2026-07-24" },
  { slug: "car-maintenance-before-road-trip-texas",        date: "2026-07-28" },
  { slug: "accident-scene-safety-dallas-what-to-do",       date: "2026-07-31" },
  { slug: "towing-commercial-vehicle-dallas",              date: "2026-08-04" },
  { slug: "roadside-assistance-northeast-dallas",          date: "2026-08-07" },
  { slug: "back-to-school-car-safety-dallas-students",     date: "2026-08-11" },
  { slug: "towing-company-reviews-what-to-look-for-dallas", date: "2026-08-14" },
];

function getTodayString() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function main() {
  const today = getTodayString();
  console.log(`\n📅 Scheduled blog runner — ${today}`);

  // Find posts due today or overdue (not yet published)
  const duePosts = BLOG_PIPELINE.filter(post => {
    if (post.date > today) return false; // future
    const postDir = join(PROJECT_ROOT, 'src/app/blog', post.slug);
    return !existsSync(postDir); // not yet published
  });

  if (duePosts.length === 0) {
    console.log('✅ No posts due today. All scheduled posts are published.');
    return;
  }

  // Publish the first due post (one at a time to avoid rate limits)
  const post = duePosts[0];
  console.log(`\n🚀 Publishing: ${post.slug} (scheduled: ${post.date})`);

  try {
    execSync(
      `node "${join(__dirname, 'publish-blog-post.mjs')}" --slug "${post.slug}"`,
      { stdio: 'inherit', cwd: PROJECT_ROOT }
    );
  } catch (e) {
    console.error(`❌ Failed to publish ${post.slug}:`, e.message);
    process.exit(1);
  }

  // Report remaining
  const remaining = duePosts.length - 1;
  if (remaining > 0) {
    console.log(`\n📋 ${remaining} more post(s) overdue — will publish on next run.`);
  }
}

main();
