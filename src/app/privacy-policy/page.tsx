import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Texas Tows Inc. privacy policy — how we collect, use, and protect your personal information. TDLR-licensed towing company serving Dallas, TX.",
  alternates: { canonical: "https://www.texastows.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a2340] py-16 md:py-20">
        <div className="container-tx">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/60 text-sm">
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: February 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="container-tx">
          <div className="max-w-3xl mx-auto prose prose-slate
            prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#0a2340]
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-li:text-gray-600
            prose-a:text-[#045cb4]">
            <p className="lead text-gray-700 text-base font-medium not-prose mb-8 p-4 bg-blue-50 border-l-4 border-[#045cb4] rounded-r-lg">
              This Privacy Policy explains how Texas Tows Inc. collects, uses, and protects your personal information when you use our services or visit our website. Questions? Call us at <a href={BUSINESS.phoneHref} className="text-[#045cb4] font-semibold">{BUSINESS.phone}</a>.
            </p>
            <h2>1. Who We Are</h2>
            <p>
              Texas Tows Inc. is a licensed towing and roadside assistance company operating in Dallas, Texas and surrounding areas. We are regulated by the <strong>Texas Department of Licensing and Regulation (TDLR)</strong>. Our principal place of business is {BUSINESS.address.full}.
            </p>
            <h2>2. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <h3>2.1 Information You Provide Directly</h3>
            <p>When you contact us to request towing or roadside assistance services, we may collect:</p>
            <ul>
              <li>Full name</li>
              <li>Phone number and email address</li>
              <li>Service location (address, cross streets, GPS coordinates)</li>
              <li>Vehicle information (year, make, model, color, license plate, VIN)</li>
              <li>Destination address for towing</li>
              <li>Insurance information, if you choose to provide it</li>
              <li>Payment information (processed securely; we do not store full card numbers)</li>
              <li>Any other information you voluntarily share when describing your situation</li>
            </ul>
            <h3>2.2 Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and general geographic location</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or search query</li>
              <li>Device type and operating system</li>
            </ul>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Dispatch tow trucks and roadside assistance to your location</li>
              <li>Process payments for services rendered</li>
              <li>Communicate with you about your service request</li>
              <li>Comply with TDLR record-keeping requirements</li>
              <li>Improve our services and website</li>
              <li>Send service-related follow-up communications (with your consent)</li>
              <li>Respond to inquiries and complaints</li>
            </ul>
            <h2>4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information only in the following limited circumstances:</p>
            <ul>
              <li><strong>Service providers:</strong> We may share information with third-party vendors who assist us in operating our business (e.g., payment processors, dispatch software providers). These vendors are contractually obligated to protect your information.</li>
              <li><strong>Legal requirements:</strong> We may disclose information when required by law, court order, or to comply with TDLR regulations, including mandatory reporting of towed vehicles to law enforcement.</li>
              <li><strong>Safety:</strong> We may share information when necessary to protect the safety of our customers, employees, or the public.</li>
            </ul>
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. We use Google Analytics to understand how visitors use our site. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>
            <h2>6. Data Retention</h2>
            <p>
              We retain customer information for as long as necessary to fulfill the purposes described in this policy and to comply with our legal obligations. Under TDLR regulations, towing companies are required to maintain certain service records. We retain service records for a minimum of <strong>two (2) years</strong> from the date of service. Payment records are retained for a minimum of <strong>seven (7) years</strong> for tax and accounting purposes.
            </p>
            <h2>7. Data Security</h2>
            <p>
              We implement commercially reasonable technical, administrative, and physical safeguards to protect your personal information. These measures include encrypted transmission via HTTPS/TLS, restricted access to customer data, and secure PCI-compliant payment processing.
            </p>
            <h2>8. Your Rights as a Texas Resident</h2>
            <p>As a Texas resident, you have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Right to know:</strong> You may request information about the personal data we hold about you.</li>
              <li><strong>Right to correct:</strong> You may request correction of inaccurate personal information.</li>
              <li><strong>Right to delete:</strong> You may request deletion of your personal information, subject to our legal retention obligations.</li>
              <li><strong>Right to opt out of marketing:</strong> You may opt out of receiving marketing communications from us at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
            </p>
            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our services and website are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page.
            </p>
            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="not-prose mt-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
              <address className="not-italic text-gray-700 space-y-1 text-sm">
                <div className="font-heading font-bold text-[#0a2340] text-base mb-2">Texas Tows Inc.</div>
                <div>{BUSINESS.address.full}</div>
                <div>Phone: <a href={BUSINESS.phoneHref} className="text-[#045cb4] font-semibold">{BUSINESS.phone}</a></div>
                <div>Email: <a href={`mailto:${BUSINESS.email}`} className="text-[#045cb4]">{BUSINESS.email}</a></div>
                <div className="pt-2 text-gray-400 text-xs">
                  Licensed by the Texas Department of Licensing and Regulation (TDLR) · Open 24/7 · Dallas, Texas
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
