import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Commercial Building Inspection in Anchorage, AK | Signature Inspection",
  description:
    "Commercial property inspection in Anchorage, AK. Office buildings, retail, warehouses, multi-family. ASHI Certified. 38 years Alaska construction experience. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/commercial-inspection-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Building Inspection in Anchorage, AK",
  provider: {
    "@type": "LocalBusiness",
    name: "Signature Inspection Service Inc.",
    telephone: "+1-907-223-3725",
  },
  description: "Professional commercial building inspection in Anchorage, AK. Office, retail, warehouse, and multi-family properties. ASHI Certified inspector with 38 years Alaska construction experience.",
};

export default function CommercialInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* HERO */}
      <section className="bg-[#1a3a5c] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Commercial · Anchorage, AK
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Commercial Building Inspection in Anchorage, AK
            </h1>
            <p className="text-slate-300 leading-relaxed mb-6">
              Protect your commercial real estate investment with a thorough inspection from Larry McBain.
              38 years of Alaska construction and real estate experience — ready for your due diligence deadline.
            </p>
            <a
              href="tel:+19072233725"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Call (907) 223-3725
            </a>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-bold text-lg mb-4">Request a Commercial Inspection</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-2">
            Commercial Property Types We Inspect
          </h2>
          <p className="text-slate-600 mb-8 text-sm">
            From small retail units to large industrial buildings, Signature Inspection Service
            handles commercial due diligence across Anchorage and southcentral Alaska.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
              <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-amber-500 font-bold">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">What the Inspection Covers</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Commercial inspections follow a systematic approach covering all building systems
              and structural components. The depth scales with property size and complexity.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                "Roof covering, drainage & penetrations",
                "Structural framing & foundation",
                "Exterior envelope: cladding, fenestration",
                "Electrical service & distribution",
                "Plumbing & mechanical systems",
                "HVAC/boiler/commercial equipment",
                "Life safety: egress, fire suppression indicators",
                "Parking, site drainage & accessibility",
                "Alaska climate concerns: settlement, moisture intrusion",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">Why Commercial Buyers Use Larry</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Due Diligence on Your Timeline",
                  body: "We understand commercial transactions move fast. We work within your due diligence window and deliver the report you need to close or renegotiate with confidence.",
                },
                {
                  title: "Construction Background Matters",
                  body: "Larry's 38 years of hands-on Alaska construction experience means he evaluates commercial buildings from a builder's perspective — not just a checklist.",
                },
                {
                  title: "Third-Party Credibility",
                  body: "An ASHI Certified inspector's report carries weight with lenders, attorneys, and sellers. Our reports are written to support negotiation and legal review.",
                },
              ].map((item) => (
                <div key={item.title} className="mb-4">
                  <p className="font-semibold text-[#1a3a5c] mb-1">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-8">Commercial Inspection FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does a commercial inspection take?",
                a: "Commercial inspections typically take 3–6 hours depending on building size and complexity. Larger multi-tenant buildings may require a full day.",
              },
              {
                q: "Do you provide a written report for commercial inspections?",
                a: "Yes. You receive a detailed written report with photographs, condition ratings, and recommended actions. Reports are typically delivered the same day or within 24 hours.",
              },
              {
                q: "Can you inspect multi-family residential buildings?",
                a: "Yes. We inspect multi-family properties from duplexes up to apartment complexes. Call to discuss scope and pricing for larger buildings.",
              },
              {
                q: "Do you work with commercial lenders or SBA loans?",
                a: "Yes. Our inspection reports meet the documentation needs for most commercial lenders. Contact us with specific lender requirements.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-slate-200 pb-6">
                <h3 className="font-bold text-[#1a3a5c] mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Schedule Your Commercial Inspection</h2>
          <p className="text-amber-100 mb-6">Call now or submit a request — we respond within 1 business hour.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+19072233725" className="bg-white text-amber-600 font-bold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors">
              Call (907) 223-3725
            </a>
            <Link href="/contact" className="bg-amber-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors">
              Book Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
