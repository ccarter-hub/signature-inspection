import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Commercial Building Inspection Anchorage AK | ASHI Certified | Signature Inspection",
  description:
    "Commercial property inspections in Anchorage, AK. Office, retail, warehouse, multi-family. ASHI Certified inspector with 38+ years Alaska construction experience. Investor-ready severity-coded reports. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/commercial-inspection-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Building Inspection in Anchorage, AK",
  provider: { "@type": "LocalBusiness", name: "Signature Inspection Service Inc.", telephone: "+1-907-223-3725" },
  areaServed: { "@type": "City", name: "Anchorage", containedInPlace: { "@type": "State", name: "Alaska" } },
  description: "Professional commercial building inspection in Anchorage, AK. ASHI Certified inspector with 38+ years Alaska construction experience.",
  offers: {
    "@type": "Offer",
    priceSpecification: { "@type": "PriceSpecification", price: "500", priceCurrency: "USD" },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://signatureinspectionservice.com" },
    { "@type": "ListItem", position: 2, name: "Commercial Inspection Anchorage", item: "https://signatureinspectionservice.com/commercial-inspection-anchorage" },
  ],
};

const faqItems = [
  {
    "@type": "Question",
    name: "How long does a commercial inspection take in Anchorage?",
    acceptedAnswer: { "@type": "Answer", text: "Commercial inspections typically take 3–6 hours depending on building size and complexity. Larger multi-tenant buildings may require a full day. We work within your due diligence timeline." },
  },
  {
    "@type": "Question",
    name: "Do you provide a written report for commercial inspections?",
    acceptedAnswer: { "@type": "Answer", text: "Yes. You receive a detailed written report with photos, condition ratings, and recommended actions — typically the same day or within 24 hours of the inspection." },
  },
  {
    "@type": "Question",
    name: "Can you inspect multi-family buildings in Anchorage?",
    acceptedAnswer: { "@type": "Answer", text: "Yes. We inspect multi-family properties from duplexes up to larger apartment complexes. Call (907) 223-3725 to discuss scope for your building." },
  },
  {
    "@type": "Question",
    name: "Do your commercial inspection reports meet lender requirements?",
    acceptedAnswer: { "@type": "Answer", text: "Yes. Our ASHI Certified inspection reports meet documentation standards for most commercial lenders including SBA loans. Contact us with any specific lender requirements before scheduling." },
  },
];

const coveredItems = [
  "Roof covering, drainage & penetrations",
  "Structural framing & foundation",
  "Exterior envelope: cladding, fenestration",
  "Electrical service & distribution",
  "Plumbing & mechanical systems",
  "HVAC, boiler & commercial equipment",
  "Life safety: egress & fire indicators",
  "Parking, site drainage & accessibility",
  "Alaska climate: settlement, moisture intrusion",
];

const propertyTypes = [
  "Office buildings",
  "Retail & strip centers",
  "Warehouses & industrial",
  "Multi-family (2–20 units)",
  "Mixed-use buildings",
  "Medical & dental offices",
  "Restaurants & food service",
  "Church & assembly buildings",
  "Light manufacturing",
];

const whyLarry = [
  {
    title: "Due Diligence on Your Timeline",
    body: "Commercial transactions move fast. We deliver the report you need to close or renegotiate — typically the same day.",
  },
  {
    title: "A Builder's Perspective",
    body: "38+ years of hands-on Alaska construction means Larry evaluates buildings the way a contractor would — identifying real cost implications, not just checkboxes.",
  },
  {
    title: "Third-Party Credibility",
    body: "An ASHI Certified report carries weight with lenders, attorneys, and sellers. Written to support negotiation and legal review.",
  },
];

export default function CommercialInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems }) }} />

      {/* HERO */}
      <Hero
        eyebrow="Commercial Inspections · Anchorage & Southcentral Alaska"
        headline={
          <>
            Protect Your Investment<br className="hidden sm:block" /> Before You{" "}
            <span className="text-[#60A5FA]">Close.</span>
          </>
        }
        sub="Larry McBain brings 38+ years of Alaska construction experience to every commercial inspection — ASHI Certified, same-day reports, built for your due diligence deadline."
        image="/images/larry-inspecting-5.jpg"
        imageAlt="Larry McBain inspecting commercial HVAC systems — Signature Inspection Service"
        imageFocus="center 52%"
      />

      {/* WHAT'S COVERED + PROPERTY TYPES */}
      <section className="border-t border-white/[0.04] bg-[#040D1A] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-14 md:grid-cols-2">
            {/* Covered */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">What We Inspect</p>
              <h2 className="mb-5 font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold leading-tight text-white">
                Every System, Documented.
              </h2>
              <p className="mb-7 text-[14px] leading-relaxed text-slate-500">
                Every accessible system and component documented with photos and condition ratings.
              </p>
              <ul className="space-y-2.5">
                {coveredItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Property types + Why Larry */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Property Types</p>
                <h2 className="mb-5 font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold leading-tight text-white">
                  Any Commercial Building.
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {propertyTypes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[13px] text-slate-400">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Why Larry</p>
                {whyLarry.map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/[0.07] bg-[#07111F] p-5">
                    <p className="mb-1.5 text-[14px] font-bold text-white">{item.title}</p>
                    <p className="text-[13px] leading-relaxed text-slate-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.04] bg-[#07111F] py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">FAQ</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white">
              Commercial Inspection Questions
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CTA />
    </>
  );
}
