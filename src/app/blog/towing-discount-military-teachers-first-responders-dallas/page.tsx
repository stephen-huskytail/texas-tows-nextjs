import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "15% Off Towing for Military, Teachers & First Responders in Dallas | Texas Tows",
  description: "Texas Tows Inc. offers 15% off all towing and roadside assistance for active military, veterans, teachers, and first responders in Dallas, TX. Call (817) 512-1024.",
  alternates: { canonical: "https://texastows.com/blog/towing-discount-military-teachers-first-responders-dallas" },
};

export default function MilitaryDiscountTowing() {
  return (
    <BlogPostLayout
      title="Texas Tows Offers 15% Off for Military, Teachers & First Responders in Dallas"
      date="2025-09-15"
      readTime="4 min read"
      category="Community"
      description="Texas Tows Inc. is proud to offer a 15% discount on all towing and roadside assistance services for active-duty military, veterans, teachers, and first responders in the Dallas area."
      featuredImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/hiJwwoRYdhbxcrPB.webp"
      featuredImageAlt="Texas Tows Inc. serving Dallas military and first responders"
    >
      <p>
        Some people show up when things get hard. Military personnel, veterans, teachers, firefighters, law enforcement officers, and EMTs do it every single day — often without recognition, and rarely for the money. At Texas Tows Inc., we believe that kind of commitment deserves to be acknowledged in a tangible way.
      </p>
      <p>
        That&apos;s why we offer a <strong>15% discount on all towing and roadside assistance services</strong> for the people who serve our community and our country.
      </p>
      <h2>Who Qualifies for the 15% Discount?</h2>
      <p>The discount is available to the following groups:</p>
      <ul>
        <li><strong>Active-duty U.S. military personnel</strong> — Army, Navy, Air Force, Marine Corps, Coast Guard, Space Force, and National Guard members on active duty</li>
        <li><strong>U.S. military veterans</strong> — honorably discharged veterans with a valid military ID or DD-214</li>
        <li><strong>Licensed K–12 teachers and school administrators</strong> — with a valid school-issued ID or teaching license</li>
        <li><strong>Law enforcement officers</strong> — active-duty police officers, sheriff&apos;s deputies, and federal agents with valid department ID</li>
        <li><strong>Firefighters</strong> — career and volunteer firefighters with valid department ID</li>
        <li><strong>Licensed EMTs and paramedics</strong> — with valid state licensure or department ID</li>
      </ul>
      <h2>How to Get the Discount</h2>
      <p>
        Getting the discount is simple. When you call Texas Tows Inc. at <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> to request service, just mention your eligibility — that you&apos;re military, a veteran, a teacher, or a first responder. We&apos;ll apply the 15% discount to your service total.
      </p>
      <p>The discount applies to:</p>
      <ul>
        <li>All consent towing services (flatbed, wheel-lift, long-distance)</li>
        <li>Roadside assistance (jump starts, tire changes, fuel delivery, lockout service)</li>
        <li>Winch-outs and off-road recovery</li>
        <li>Vehicle transport</li>
      </ul>
      <p>
        The discount must be mentioned at the time of the service request. It cannot be applied retroactively after the service has been completed and payment has been processed.
      </p>
      <h2>Why We Do This</h2>
      <p>
        Texas Tows Inc. was built on the idea that a towing company should be more than just a truck that shows up when you&apos;re stuck. We want to be a company that genuinely serves the Dallas community — and that means giving back to the people who give the most.
      </p>
      <p>
        Teachers shape the next generation. First responders run toward danger so the rest of us can run away from it. Veterans and active-duty military put their lives on the line for freedoms most of us take for granted. The least we can do is make sure that when their car breaks down on the side of a Dallas highway at 2 a.m., they get a fair deal from a company that respects what they do.
      </p>
      <h2>Available 24/7 — Including Nights, Weekends, and Holidays</h2>
      <p>
        We know that breakdowns don&apos;t respect work schedules. That&apos;s why Texas Tows Inc. operates 24 hours a day, 7 days a week, 365 days a year — including holidays. Whether you&apos;re coming off a night shift, heading to an early morning class, or driving home from a deployment ceremony, we&apos;re available when you need us.
      </p>
      <p>
        Our service area covers Dallas and the surrounding communities, including Irving, Garland, Mesquite, Grand Prairie, Carrollton, Plano, Richardson, Duncanville, DeSoto, Lancaster, Cedar Hill, and more.
      </p>
      <h2>Call Now and Mention Your Discount</h2>
      <p>
        If you&apos;re military, a veteran, a teacher, or a first responder in the Dallas area, save our number in your phone right now: <a href={BUSINESS.phoneHref}><strong>{BUSINESS.phone}</strong></a>. When you need us, we&apos;ll be there — and we&apos;ll make sure you&apos;re taken care of.
      </p>
      <p>Thank you for everything you do. It&apos;s our honor to serve you.</p>
    </BlogPostLayout>
  );
}
