import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Texas Tows Inc. Dallas TX",
  description: "Texas Tows Inc. terms of service — governing towing, roadside assistance, and vehicle transport services in Dallas, TX. TDLR-licensed and fully compliant.",
  alternates: { canonical: "https://www.texastows.com/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a2340] py-16 md:py-20">
        <div className="container-tx">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Terms of Service</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3">Terms of Service</h1>
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
              Please read these Terms of Service carefully before requesting or using any service from Texas Tows Inc. By calling us, submitting a service request, or allowing us to tow or assist your vehicle, you agree to be bound by these terms. Questions? Call us at <a href={BUSINESS.phoneHref} className="text-[#045cb4] font-semibold">{BUSINESS.phone}</a>.
            </p>
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) and <strong>Texas Tows Inc.</strong>, a Texas corporation with its principal place of business at {BUSINESS.address.full} (&quot;Texas Tows Inc.,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms govern your use of our towing, roadside assistance, vehicle transport, and related services (collectively, &quot;Services&quot;), as well as your use of our website at <strong>www.texastows.com</strong>.
            </p>
            <p>
              By requesting our Services or using our website, you confirm that you are at least 18 years of age, have the legal authority to authorize service on the subject vehicle, and agree to these Terms in full.
            </p>
            <h2>2. Our Licensing and Regulatory Compliance</h2>
            <p>
              Texas Tows Inc. is licensed and regulated by the <strong>Texas Department of Licensing and Regulation (TDLR)</strong> under Texas Occupations Code Chapter 2308 (Vehicle Towing and Booting). All of our tow truck operators hold valid TDLR operator licenses. Our operations comply with applicable provisions of the Texas Occupations Code, the Texas Transportation Code, and 16 Tex. Admin. Code Chapter 86.
            </p>
            <p>
              You may verify our license status at any time through the TDLR license verification portal at <a href="https://www.tdlr.texas.gov" target="_blank" rel="noopener noreferrer">tdlr.texas.gov</a>.
            </p>
            <h2>3. Services Provided</h2>
            <p>Texas Tows Inc. provides the following services in the Dallas, Texas metropolitan area and surrounding regions:</p>
            <ul>
              <li>Emergency and non-emergency towing (flatbed and wheel-lift)</li>
              <li>24/7 roadside assistance (jump starts, tire changes, fuel delivery, lockout service)</li>
              <li>Vehicle transport (local and long-distance)</li>
              <li>Junk car removal and purchase</li>
              <li>Accident recovery and winch-outs</li>
              <li>Unattended and secondary towing (for property owners and managers)</li>
            </ul>
            <h2>4. Consent Tows — Authorization and Pricing</h2>
            <p>
              For consent tows (where you contact us directly to request service), you authorize Texas Tows Inc. to tow or assist your vehicle by calling us, submitting a web form, or otherwise requesting service. Before dispatching a driver, we will provide you with a price quote that includes all applicable fees. By accepting the quote and allowing service to proceed, you agree to pay the quoted amount upon completion of service.
            </p>
            <p>
              <strong>Upfront pricing commitment:</strong> We provide clear, all-inclusive quotes before dispatching. We do not add surprise fees after service is complete. If circumstances change during service (e.g., additional winching required due to vehicle position), we will communicate any additional charges before proceeding.
            </p>
            <h2>5. Payment Terms</h2>
            <p>Payment is due upon completion of service. We accept:</p>
            <ul>
              <li>Major credit and debit cards (Visa, Mastercard, American Express, Discover)</li>
              <li>Cash</li>
              <li>Digital payment methods (Apple Pay, Google Pay, Zelle — availability may vary)</li>
            </ul>
            <p>
              We do not store full credit card numbers. Payment processing is handled through PCI-compliant third-party processors.
            </p>
            <h2>6. Cancellation Policy</h2>
            <p>
              You may cancel a service request at any time before our driver arrives at your location at no charge. If you cancel after our driver has arrived and begun setup (e.g., connected to your vehicle), a cancellation fee may apply to cover the driver&apos;s time and fuel. We will inform you of any applicable cancellation fee before it is charged.
            </p>
            <h2>7. Liability and Vehicle Condition</h2>
            <p>
              Texas Tows Inc. carries full commercial liability insurance as required by TDLR. We take reasonable care in handling your vehicle. However, our liability is limited to direct damage caused by our negligence during the towing or service process.
            </p>
            <p>We are not liable for:</p>
            <ul>
              <li>Pre-existing damage to your vehicle</li>
              <li>Mechanical failures or issues unrelated to our service</li>
              <li>Personal property left in your vehicle</li>
              <li>Damage resulting from inaccurate information you provided (e.g., incorrect vehicle type, drivetrain, or location)</li>
              <li>Delays caused by traffic, weather, or circumstances beyond our control</li>
            </ul>
            <p>
              Before service begins, our driver will conduct a brief visual inspection of your vehicle and note any pre-existing damage. You will have the opportunity to review and acknowledge this inspection.
            </p>
            <h2>8. Your Responsibilities</h2>
            <p>When requesting our services, you agree to:</p>
            <ul>
              <li>Provide accurate information about your vehicle (year, make, model, drivetrain, condition)</li>
              <li>Have legal authority to authorize towing of the vehicle</li>
              <li>Provide accurate location information</li>
              <li>Be present or have an authorized representative present at the time of service, unless other arrangements are made in advance</li>
              <li>Remove personal valuables from your vehicle before towing</li>
              <li>Treat our drivers with respect and courtesy</li>
            </ul>
            <h2>9. Non-Consent Tows</h2>
            <p>
              For non-consent tows (where we are called by a property owner, law enforcement, or other authorized party), all services are governed by Texas Occupations Code Chapter 2308 and applicable TDLR regulations. Fee caps set by TDLR and the City of Dallas apply to all non-consent tows.
            </p>
            <h2>10. Dispute Resolution</h2>
            <h3>10.1 Informal Resolution</h3>
            <p>
              Before initiating any formal dispute process, we encourage you to contact us directly at <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> or <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. Most concerns can be resolved quickly and informally.
            </p>
            <h3>10.2 TDLR Complaints</h3>
            <p>
              If you believe Texas Tows Inc. has violated Texas towing laws or regulations, you have the right to file a complaint with the <strong>Texas Department of Licensing and Regulation (TDLR)</strong>. Complaints may be submitted online at <a href="https://www.tdlr.texas.gov/complaints" target="_blank" rel="noopener noreferrer">tdlr.texas.gov/complaints</a> or by calling TDLR at (800) 803-9202.
            </p>
            <h3>10.3 Tow Hearings</h3>
            <p>
              Under Texas Occupations Code § 2308.456, if you believe your vehicle was wrongfully towed or that you were charged fees in excess of the allowable amounts, you have the right to request a <strong>tow hearing</strong> at any Justice of the Peace Court in the county where your vehicle was towed. You must request the hearing within <strong>14 days</strong> of the tow.
            </p>
            <h3>10.4 Governing Law and Venue</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of the <strong>State of Texas</strong>. Any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in <strong>Dallas County, Texas</strong>.
            </p>
            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Texas Tows Inc. and its officers, employees, agents, and contractors from and against any claims, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your breach of these Terms; (b) your misrepresentation of your authority to authorize service on a vehicle; (c) inaccurate information you provided at the time of your service request; or (d) your violation of any applicable law.
            </p>
            <h2>12. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Material changes will be reflected by an updated &quot;Last Updated&quot; date at the top of this page. Your continued use of our Services after any changes constitutes your acceptance of the revised Terms.
            </p>
            <h2>13. Contact Us</h2>
            <p>For questions about these Terms, please contact us:</p>
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
