import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Signature Inspection Service Inc.",
  description: "Terms of service for Signature Inspection Service Inc. — inspection scope, scheduling, fees, report delivery, and limitations of liability.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://signatureinspectionservice.com/terms" },
};

const LAST_UPDATED = "April 2025";

export default function TermsPage() {
  return (
    <div className="bg-[#030912] min-h-screen">
      <div className="mx-auto max-w-3xl px-5 sm:px-10 py-16 md:py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
            Legal
          </p>
          <h1 className="mb-4 font-display text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-white">
            Terms of Service
          </h1>
          <p className="text-[14px] text-slate-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="space-y-10 text-[15px] leading-[1.75] text-slate-400">

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">1. Agreement</h2>
            <p>
              By scheduling or receiving inspection services from{" "}
              <strong className="text-slate-200">Signature Inspection Service Inc.</strong>{" "}
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;), you (&ldquo;Client&rdquo;)
              agree to these terms. These terms govern all residential home inspections,
              commercial building inspections, and radon testing services we provide.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">2. Inspection Services</h2>
            <p>
              All inspections are performed in accordance with the{" "}
              <strong className="text-slate-200">American Society of Home Inspectors (ASHI)
              Standards of Practice</strong>. Our inspections are visual in nature — we examine
              accessible systems and components of the property and report on their condition at
              the time of inspection.
            </p>
            <p className="mt-3">
              An inspection is not a guarantee or warranty of the property. It does not identify
              all deficiencies. Systems or components that are concealed, inaccessible, or outside
              the ASHI scope of inspection are not covered unless specifically agreed in writing.
            </p>
            <p className="mt-3">
              We offer the following services:
            </p>
            <ul className="mt-3 ml-5 space-y-1.5 list-disc marker:text-[#2563EB]">
              <li>Residential home inspection — starting at $350</li>
              <li>Commercial building inspection — starting at $500</li>
              <li>Radon testing — $125 as standalone or bundled with home inspection</li>
            </ul>
            <p className="mt-3 text-slate-500 text-[13px]">
              Prices are subject to change. You will be provided a confirmed fee before scheduling.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">3. Scheduling and Fees</h2>
            <p>
              Inspection fees are due at the time of the inspection unless other arrangements
              have been made in advance. We accept cash, check, and major credit cards.
            </p>
            <p className="mt-3">
              Submitting a request through our website does not constitute a confirmed appointment.
              Your appointment is confirmed when you receive a direct confirmation from us by phone
              or email.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">4. Cancellation Policy</h2>
            <p>
              If you need to cancel or reschedule your inspection, please notify us as soon as
              possible by calling{" "}
              <a href="tel:+19072233725" className="text-[#3B82F6] hover:underline">
                (907) 223-3725
              </a>.
            </p>
            <p className="mt-3">
              Cancellations made with less than 24 hours&rsquo; notice may be subject to a
              cancellation fee. We will discuss this with you directly if it applies to your
              situation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">5. Inspection Report</h2>
            <p>
              A written inspection report will be delivered to the Client the same day as the
              inspection. The report documents the inspector&rsquo;s observations at the time of
              the inspection.
            </p>
            <p className="mt-3">
              The report is prepared for the exclusive use of the Client named at the time of
              booking. Signature Inspection Service Inc. accepts no responsibility for any
              reliance on the report by any third party.
            </p>
            <p className="mt-3">
              Radon test results require a 48-hour test period and are reported separately after
              the test is complete.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">6. Limitation of Liability</h2>
            <p>
              Signature Inspection Service Inc. is not liable for any defect, condition, or issue
              that was not visible, accessible, or within the scope of the ASHI Standards of
              Practice at the time of the inspection.
            </p>
            <p className="mt-3">
              If we miss a defect that falls within ASHI inspection standards and that a reasonable
              inspector would have documented, our liability is limited to a refund of the
              inspection fee paid. This is our fee-back guarantee and represents our maximum
              liability to the Client.
            </p>
            <p className="mt-3">
              We are not responsible for consequential, incidental, or indirect damages arising
              from the inspection, the report, or any reliance on them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">7. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul className="mt-3 ml-5 space-y-1.5 list-disc marker:text-[#2563EB]">
              <li>Ensuring access to the property at the scheduled time</li>
              <li>Ensuring utilities (electricity, water, gas) are active at the property</li>
              <li>
                Notifying us in advance of any known hazards or conditions at the property
              </li>
            </ul>
            <p className="mt-3">
              If access or utilities are not available at the time of the inspection and the
              inspection cannot be completed, a re-inspection fee may apply.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">8. Website Disclaimer</h2>
            <p>
              Information published on this website is provided for general informational purposes
              only. It does not constitute professional inspection advice for any specific property.
              Prices and availability are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Alaska. Any disputes arising
              from our services shall be resolved in the courts of Anchorage, Alaska.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">10. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Updated terms will be posted on this
              page with a revised date. Continued use of our services following any changes
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[18px] font-bold text-white">11. Contact</h2>
            <div className="mt-3 rounded-xl border border-white/[0.07] bg-[#07111F] p-5 space-y-2">
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
          <Link href="/privacy" className="text-[#3B82F6] hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="text-[#3B82F6] hover:underline">Contact Us</Link>
        </div>

      </div>
    </div>
  );
}
