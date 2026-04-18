import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Commercial Building Inspection in Anchorage, AK | Signature Inspection",
  description:
    "Commercial property inspection in Anchorage, AK. Office, retail, warehouses, multi-family. ASHI Certified. 38+ years Alaska construction experience. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/commercial-inspection-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Building Inspection in Anchorage, AK",
  provider: { "@type": "LocalBusiness", name: "Signature Inspection Service Inc.", telephone: "+1-907-223-3725" },
  description: "Professional commercial building inspection in Anchorage, AK. ASHI Certified inspector with 38+ years Alaska construction experience.",
};

export default function CommercialInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-[#0F172A] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3">Commercial · Anchorage, AK</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              Commercial Building Inspection in Anchorage, AK
            </h1>
            <p className="text-slate-300 leading-relaxed mb-6">
              Protect your commercial investment with a detailed inspection from Larry McBain —
              38+ years of Alaska construction and real estate experience, ready for your due diligence deadline.
            </p>
            <a href="tel:+19072233725" className="bg-[#2563EB] hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 inline-block">
              Call (907) 223-3725
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-[#0F172A] font-bold text-lg mb-1">Request a Commercial Inspection</h2>
            <p className="text-[#64748B] text-sm mb-4">We respond within 1 business hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Commercial Property Types We Inspect</h2>
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
              <div key={item} className="flex items-center gap-2 text-sm text-[#0F172A] py-1">
                <span className="text-[#2563EB] font-bold">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">What the Inspection Covers</h2>
            <div className="space-y-3">
              {[
                "Roof covering, drainage & penetrations",
                "Structural framing & foundation",
                "Exterior envelope: cladding, fenestration",
                "Electrical service & distribution",
                "Plumbing & mechanical systems",
                "HVAC/boiler/commercial equipment",
                "Life safety: egress indicators",
                "Parking, site drainage & accessibility",
                "Alaska climate concerns: settlement, moisture intrusion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#0F172A]">
                  <span className="w-5 h-5 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#2563EB] text-xs shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Why Commercial Buyers Use Larry</h2>
            <div className="space-y-4">
              {[
                { title: "Due Diligence on Your Timeline", body: "We understand commercial transactions move fast. We work within your due diligence window and deliver the report you need to close or renegotiate." },
                { title: "Construction Background Matters", body: "Larry's 38+ years of hands-on Alaska construction experience means he evaluates commercial buildings from a builder's perspective — not just a checklist." },
                { title: "Third-Party Credibility", body: "An ASHI Certified inspector's report carries weight with lenders, attorneys, and sellers. Our reports are written to support negotiation and legal review." },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <p className="font-semibold text-[#0F172A] text-sm mb-1">{item.title}</p>
                  <p className="text-[#64748B] text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Commercial Inspection FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How long does a commercial inspection take?", a: "Commercial inspections take 3–6 hours depending on building size. Larger multi-tenant buildings may require a full day." },
              { q: "Do you provide a written report?", a: "Yes. You receive a detailed report with photos, condition ratings, and recommended actions — typically same day or within 24 hours." },
              { q: "Can you inspect multi-family buildings?", a: "Yes. We inspect multi-family properties from duplexes up to apartment complexes. Call to discuss scope for larger buildings." },
              { q: "Do you work with commercial lenders or SBA loans?", a: "Yes. Our reports meet documentation needs for most commercial lenders. Contact us with specific lender requirements." },
            ].map((item) => (
              <div key={item.q} className="card p-5">
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{item.q}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2563EB] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Schedule Your Commercial Inspection</h2>
          <p className="text-blue-100 mb-6">Call or submit a request — we respond within 1 business hour.</p>
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
