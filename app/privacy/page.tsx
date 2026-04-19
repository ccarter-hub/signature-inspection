import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Signature Inspection Service Inc.",
  description: "Privacy policy for Signature Inspection Service Inc. — how we collect, use, and protect information submitted through our website.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://signatureinspectionservice.com/privacy" },
};

const LAST_UPDATED = "April 2025";

export default function PrivacyPage() {
  return (
    <div className="bg-[#030912] min-h-screen">
      <div className="mx-auto max-w-3xl px-5 sm:px-10 py-16 md:py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
            Legal
          </p>
          <h1 className="mb-4 font-display text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-slate-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-custom space-y-10 text-[15px] leading-[1.75] text-slate-400">

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">1. Who We Are</h2>
            <p>
              This privacy policy applies to the website of{" "}
              <strong className="text-slate-200">Signature Inspection Service Inc.</strong>,
              an ASHI Certified home inspection company based in Anchorage, Alaska. Our website
              address is <span className="text-slate-300">signatureinspectionservice.com</span>.
            </p>
            <p className="mt-3">
              Questions about this policy can be directed to:{" "}
              <a
                href="mailto:info@signatureinspectionservice.com"
                className="text-[#3B82F6] hover:underline"
              >
                info@signatureinspectionservice.com
              </a>{" "}
              or by calling{" "}
              <a href="tel:+19072233725" className="text-[#3B82F6] hover:underline">
                (907) 223-3725
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">2. Information We Collect</h2>
            <p>
              We only collect information you voluntarily provide through our contact and booking
              form. This includes:
            </p>
            <ul className="mt-3 ml-5 space-y-1.5 list-disc marker:text-[#2563EB]">
              <li>Your name</li>
              <li>Your phone number</li>
              <li>The property address to be inspected</li>
              <li>Any optional message or notes you choose to include</li>
            </ul>
            <p className="mt-4">
              We do not collect payment information, Social Security numbers, or any other
              sensitive personal or financial data through this website.
            </p>
            <p className="mt-3">
              We do not create user accounts or require registration to use this website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">3. How We Use Your Information</h2>
            <p>Information submitted through our contact form is used solely to:</p>
            <ul className="mt-3 ml-5 space-y-1.5 list-disc marker:text-[#2563EB]">
              <li>Respond to your inspection request</li>
              <li>Schedule and confirm your inspection appointment</li>
              <li>Contact you about your booking by phone or email</li>
            </ul>
            <p className="mt-4">
              We do not use your information for marketing purposes, sell it to third parties,
              or share it with anyone outside of our business and the service providers described below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">4. Third-Party Service Providers</h2>
            <p>
              We use the following third-party services in connection with this website:
            </p>

            <div className="mt-4 space-y-5">
              <div className="rounded-xl border border-white/[0.07] bg-[#07111F] p-5">
                <p className="font-semibold text-white mb-1">Resend (Email Delivery)</p>
                <p>
                  Contact form submissions are delivered to us via Resend, an email delivery
                  service. Your submitted information is transmitted to Resend&rsquo;s servers
                  to send us a notification email. Resend does not use your data for any
                  other purpose. See{" "}
                  <a
                    href="https://resend.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:underline"
                  >
                    Resend&rsquo;s Privacy Policy
                  </a>.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-[#07111F] p-5">
                <p className="font-semibold text-white mb-1">Vercel (Website Hosting)</p>
                <p>
                  This website is hosted on Vercel. Vercel may collect standard server log data
                  such as IP addresses and request metadata as part of normal hosting operations.
                  See{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:underline"
                  >
                    Vercel&rsquo;s Privacy Policy
                  </a>.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-[#07111F] p-5">
                <p className="font-semibold text-white mb-1">Facebook (Video Embed)</p>
                <p>
                  Our homepage includes an optional embedded Facebook video. If you click the
                  play button, Facebook&rsquo;s content is loaded in your browser, which may
                  result in Facebook setting cookies or collecting usage data under their own
                  privacy policy. See{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:underline"
                  >
                    Facebook&rsquo;s Privacy Policy
                  </a>.
                  The video is not loaded unless you choose to play it.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">5. Cookies</h2>
            <p>
              This website does not set any cookies directly. We do not use tracking cookies,
              advertising cookies, or analytics cookies.
            </p>
            <p className="mt-3">
              If you click the Facebook video embed on our homepage, Facebook may set cookies
              according to their own cookie policy. No cookies are set unless you interact with
              that embed.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">6. Analytics</h2>
            <p>
              This website does not currently use analytics software (such as Google Analytics).
              If that changes, this policy will be updated to reflect what data is collected and how.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">7. Data Retention</h2>
            <p>
              Contact form submissions are delivered to us via email and retained in our business
              email account. We retain this information for as long as necessary to fulfill your
              inspection request and for reasonable business record-keeping.
            </p>
            <p className="mt-3">
              If you would like your information removed from our records, contact us at{" "}
              <a
                href="mailto:info@signatureinspectionservice.com"
                className="text-[#3B82F6] hover:underline"
              >
                info@signatureinspectionservice.com
              </a>{" "}
              and we will accommodate that request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">8. Children&rsquo;s Privacy</h2>
            <p>
              This website is not directed at children under 13. We do not knowingly collect
              personal information from children.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">9. External Links</h2>
            <p>
              This website contains links to external websites (such as Google, Facebook, and
              third-party providers). We are not responsible for the privacy practices of those
              sites and encourage you to review their policies directly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this
              page with an updated date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">11. Contact</h2>
            <p>
              For any questions about this privacy policy or how we handle your information:
            </p>
            <div className="mt-4 rounded-xl border border-white/[0.07] bg-[#07111F] p-5 space-y-2">
              <p className="font-semibold text-white">Signature Inspection Service Inc.</p>
              <p>8541 Raintree Circle, Anchorage, AK 99507</p>
              <p>
                <a href="tel:+19072233725" className="text-[#3B82F6] hover:underline">
                  (907) 223-3725
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@signatureinspectionservice.com"
                  className="text-[#3B82F6] hover:underline"
                >
                  info@signatureinspectionservice.com
                </a>
              </p>
            </div>
          </section>

        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 flex flex-wrap gap-4 text-[13px]">
          <Link href="/" className="text-[#3B82F6] hover:underline">← Home</Link>
          <Link href="/terms" className="text-[#3B82F6] hover:underline">Terms of Service</Link>
          <Link href="/contact" className="text-[#3B82F6] hover:underline">Contact Us</Link>
        </div>

      </div>
    </div>
  );
}
