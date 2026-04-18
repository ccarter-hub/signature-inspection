import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Commercial Building Inspection in Anchorage, AK | Signature Inspection",
  description:
    "Commercial property inspection in Anchorage, AK. ASHI Certified inspector with 38+ years Alaska construction experience. Office, retail, warehouse, multi-family. Same-day reports. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/commercial-inspection-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Building Inspection in Anchorage, AK",
  provider: { "@type": "LocalBusiness", name: "Signature Inspection Service Inc.", telephone: "+1-907-223-3725" },
  areaServed: { "@type": "City", name: "Anchorage", containedInPlace: { "@type": "State", name: "Alaska" } },
  description: "Professional commercial building inspection in Anchorage, AK. ASHI Certified inspector with 38+ years Alaska construction experience. Office, retail, warehouse, multi-family.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
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
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://signatureinspectionservice.com" },
    { "@type": "ListItem", position: 2, name: "Commercial Inspection Anchorage", item: "https://signatureinspectionservice.com/commercial-inspection-anchorage" },
  ],
};

export default function CommercialInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-[#0B1220] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">Commercial Inspection · Anchorage, AK</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-5">
              Commercial Building Inspection in Anchorage, AK
            </h1>
            <p className="text-slate-300 leading-relaxed mb-6">
              Protect your commercial investment with a detailed inspection from Larry McBain —
              ASHI Certified, 38+ years of Alaska construction experience, ready for your due diligence deadline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+19072233725" className="bg-[#3B82F6] hover:bg-[#2563EB] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 inline-block text-center">
                Call (907) 223-3725
              </a>
              <Link href="/contact" className="border border-white/25 text-white hover:bg-white/[0.08] font-semibold px-6 py-3 rounded-lg transition-all duration-150 inline-block text-center">
                Request Online
              </Link>
            </div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <h2 className="text-[#0B1220] font-bold text-lg mb-1">Request a Commercial Inspection</h2>
            <p className="text-[#64748B] text-sm mb-4">We respond within 1 business hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-[#0B1220] mb-2">Commercial Property Types We Inspect</h2>
          <p className="text-[#64748B] mb-8 text-sm">
            From small retail units to large industrial buildings — commercial due diligence across Anchorage and southcentral Alaska.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Office buildings",
              "Retail & strip centers",
              "Warehouses & industrial",
              "Multi-family (2–20 units)",
              "Mixed-use buildings",
              "Medical & dental offices",
              "Restaurants & food service",
              "Church & assembly buildings",
              "Light manufacturing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#0B1220] py-1">
                <span className="text-[#3B82F6] font-bold shrink-0">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED + WHY LARRY */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#0B1220] mb-4">What a Commercial Inspection Covers</h2>
            <p className="text-[#64748B] text-sm mb-5">Every accessible system and component is documented with photos and condition ratings.</p>
            <div className="space-y-2">
              {[
                "Roof covering, drainage & penetrations",
                "Structural framing & foundation",
                "Exterior envelope: cladding, fenestration",
                "Electrical service & distribution",
                "Plumbing & mechanical systems",
                "HVAC, boiler & commercial equipment",
                "Life safety: egress & fire indicators",
                "Parking, site drainage & accessibility",
                "Alaska climate: settlement, moisture intrusion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#0B1220]">
                  <span className="w-5 h-5 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#3B82F6] text-xs shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-[#0B1220] mb-4">Why Commercial Buyers Choose Larry</h2>
            <div className="space-y-4">
              {[
                { title: "Due Diligence on Your Timeline", body: "Commercial transactions move fast. We work within your due diligence window and deliver the report you need to close or renegotiate — typically same day." },
                { title: "A Builder's Perspective", body: "Larry's 38+ years of hands-on Alaska construction experience means he evaluates commercial buildings the way a contractor would — identifying real cost implications, not just checkboxes." },
                { title: "Third-Party Credibility", body: "An ASHI Certified inspector's report carries weight with lenders, attorneys, and sellers. Our reports are written to support negotiation and legal review." },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <p className="font-semibold text-[#0B1220] text-sm mb-1">{item.title}</p>
                  <p className="text-[#64748B] text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-[#0B1220] mb-2 text-center">Commercial Inspection FAQ</h2>
          <p className="text-[#64748B] text-sm text-center mb-8">Common questions about commercial property inspections in Anchorage.</p>
          <FaqAccordion items={faqSchema.mainEntity} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563EB] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Schedule Your Commercial Inspection</h2>
          <p className="text-blue-100 mb-2">ASHI Certified. Same-day reports. 1-hour response guarantee.</p>
          <p className="text-blue-200 text-sm mb-6">Serving Anchorage, Eagle River, Wasilla, and all of southcentral Alaska.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+19072233725" className="bg-white text-[#2563EB] font-bold px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">
              Call (907) 223-3725
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-150">
              Book Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
