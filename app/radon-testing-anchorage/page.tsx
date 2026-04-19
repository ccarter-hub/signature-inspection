import type { Metadata } from "next";
import { CheckCircle2, AlertTriangle, Phone } from "lucide-react";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Radon Testing Anchorage AK | EPA-Approved | Signature Inspection Service",
  description:
    "Professional radon testing in Anchorage, AK. Alaska has elevated radon levels — testing is the only way to know. EPA-approved 48-hour test. Bundle with home inspection and save. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/radon-testing-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Radon Testing in Anchorage, AK",
  provider: { "@type": "LocalBusiness", name: "Signature Inspection Service Inc.", telephone: "+1-907-223-3725" },
  areaServed: { "@type": "City", name: "Anchorage", containedInPlace: { "@type": "State", name: "Alaska" } },
  description: "Professional EPA-approved radon testing in Anchorage, AK. 48-hour testing for homes and commercial properties.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://signatureinspectionservice.com" },
    { "@type": "ListItem", position: 2, name: "Radon Testing Anchorage", item: "https://signatureinspectionservice.com/radon-testing-anchorage" },
  ],
};

const faqItems = [
  {
    "@type": "Question",
    name: "Is radon a problem in Anchorage, Alaska?",
    acceptedAnswer: { "@type": "Answer", text: "Yes. Alaska has elevated radon levels in many areas including Anchorage, Eagle River, and the Mat-Su Valley. Testing is the only way to know your home's radon level." },
  },
  {
    "@type": "Question",
    name: "What is a safe radon level?",
    acceptedAnswer: { "@type": "Answer", text: "The EPA recommends mitigating levels at or above 4 pCi/L. Levels between 2–4 pCi/L should also be reduced if possible. The national average indoor level is 1.3 pCi/L." },
  },
  {
    "@type": "Question",
    name: "How long does radon testing take in Anchorage?",
    acceptedAnswer: { "@type": "Answer", text: "Short-term radon tests take 48–96 hours. For real estate transactions, 48-hour short-term tests are standard and accepted by most lenders and buyers." },
  },
  {
    "@type": "Question",
    name: "What happens if my home has high radon levels?",
    acceptedAnswer: { "@type": "Answer", text: "If your home tests above 4 pCi/L, a sub-slab depressurization system can reduce levels by up to 99%. Systems typically cost $800–$2,500. We can recommend licensed mitigation contractors in Anchorage." },
  },
  {
    "@type": "Question",
    name: "Can I bundle radon testing with a home inspection?",
    acceptedAnswer: { "@type": "Answer", text: "Yes. We offer a Home + Radon bundle — the most popular option for buyers. The radon device is placed at the start of the home inspection and picked up 48 hours later. Call (907) 223-3725 to schedule." },
  },
];

const whoShouldTest = [
  { title: "Home Buyers", body: "Test before closing. Elevated radon is negotiable — but only if you know about it." },
  { title: "Home Sellers", body: "Testing before listing avoids last-minute surprises and builds buyer confidence." },
  { title: "Homeowners", body: "Radon levels change. Renovations, new occupants, or shifting soil can all affect your reading." },
  { title: "Commercial Tenants", body: "Ground-level offices and below-grade workspaces face the highest risk. Test before signing." },
];

const steps = [
  { n: "1", title: "Schedule", body: "Call or book online. We place the EPA-approved test device at the lowest livable level of your home." },
  { n: "2", title: "48-Hour Test", body: "Short-term testing under closed-house conditions — the standard for real estate transactions." },
  { n: "3", title: "Lab Analysis", body: "Device is sent to an accredited laboratory for precise pCi/L measurement." },
  { n: "4", title: "Written Report", body: "You receive your radon level with context and mitigation guidance if the result is elevated." },
];

export default function RadonTestingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems }) }} />

      {/* HERO */}
      <Hero
        eyebrow="Radon Testing · Anchorage & Southcentral Alaska"
        headline={
          <>
            Alaska Has Some of the<br className="hidden sm:block" /> Highest Radon Levels{" "}
            <span className="text-[#60A5FA]">in the US.</span>
          </>
        }
        sub="Radon is the #2 cause of lung cancer in America — colorless, odorless, and only detectable by testing. Larry provides EPA-approved 48-hour testing with a written report included."
        image="/images/larry-inspecting-7.jpg"
        imageAlt="Larry McBain inspecting electrical panel — Signature Inspection Service Anchorage"
        imageFocus="45% center"
      />

      {/* WHY IT MATTERS + WHO SHOULD TEST */}
      <section className="border-t border-white/[0.04] bg-[#040D1A] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-14 md:grid-cols-2">
            {/* Why it matters */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">The Risk</p>
              <h2 className="mb-5 font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold leading-tight text-white">
                You Can't See It.<br />You Can't Smell It.
              </h2>
              <p className="mb-5 text-[14px] leading-relaxed text-slate-400">
                Radon is a radioactive gas that forms naturally from uranium decay in Alaska's soil and rock. It seeps
                into homes through foundation cracks, sump pits, and floor gaps — then accumulates silently.
              </p>
              <div className="mb-7 rounded-xl border border-red-500/20 bg-red-500/[0.07] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                  <p className="text-[13px] font-bold text-red-300">EPA Action Level: 4 pCi/L</p>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-400">
                  Many Alaska homes test significantly higher. The national average is 1.3 pCi/L —
                  Anchorage-area geology puts homes at elevated risk.
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "EPA-approved 48-hour short-term test",
                  "Accredited laboratory analysis",
                  "Written report with your pCi/L level",
                  "Mitigation contractor referrals if elevated",
                  "Bundle with home inspection — most popular option",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who should test */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Who Should Test</p>
                <h2 className="mb-5 font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold leading-tight text-white">
                  Every Anchorage Home.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whoShouldTest.map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/[0.07] bg-[#07111F] p-5">
                    <p className="mb-1.5 text-[14px] font-bold text-white">{item.title}</p>
                    <p className="text-[13px] leading-relaxed text-slate-500">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-[#2563EB]/25 bg-[#2563EB]/[0.07] p-5">
                <p className="mb-1 text-[13px] font-bold text-white">Home + Radon Bundle</p>
                <p className="mb-3 text-[12px] leading-relaxed text-slate-400">
                  Most buyers add radon testing to their home inspection. One call, one appointment.
                  Larry places the device at inspection start and picks it up 48 hours later.
                </p>
                <a
                  href="tel:+19072233725"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-[#1d4ed8]"
                >
                  <Phone className="h-3.5 w-3.5" /> Call to Bundle — (907) 223-3725
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-white/[0.04] bg-[#07111F] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Process</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white">
              How Radon Testing Works
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.n} className="relative rounded-xl border border-white/[0.07] bg-[#040D1A] p-6">
                {i < steps.length - 1 && (
                  <div className="absolute -right-2.5 top-8 z-10 hidden h-px w-5 bg-gradient-to-r from-[#2563EB]/60 to-transparent md:block" />
                )}
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[14px] font-bold text-[#60A5FA]">
                  {step.n}
                </div>
                <p className="mb-1.5 text-[14px] font-bold text-white">{step.title}</p>
                <p className="text-[13px] leading-relaxed text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.04] bg-[#040D1A] py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">FAQ</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white">
              Radon Testing Questions
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CTA />
    </>
  );
}
