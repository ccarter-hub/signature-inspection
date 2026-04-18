import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Home Inspection in Anchorage, AK | ASHI Certified Inspector",
  description:
    "Professional home inspection in Anchorage, AK by ASHI Certified inspector Larry McBain. 38 years construction experience. Same-day reports. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/home-inspection-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Inspection in Anchorage, AK",
  provider: {
    "@type": "LocalBusiness",
    name: "Signature Inspection Service Inc.",
    telephone: "+1-907-223-3725",
    address: { "@type": "PostalAddress", addressLocality: "Anchorage", addressRegion: "AK" },
  },
  areaServed: { "@type": "City", name: "Anchorage", containedInPlace: { "@type": "State", name: "Alaska" } },
  description: "Comprehensive residential home inspection in Anchorage, AK. ASHI Certified inspector. Covers structure, roof, electrical, plumbing, HVAC, and Alaska-specific concerns.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a home inspection cover in Anchorage, AK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A residential home inspection in Anchorage covers the roof, attic, insulation, foundation, framing, electrical system, plumbing, HVAC, windows, doors, and all accessible interior and exterior components. Alaska-specific checks include ice dams, permafrost-related settlement, and freeze/thaw damage to foundation and pipes.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a home inspection cost in Anchorage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home inspections in Anchorage, AK typically range from $400–$600 for a standard residential property. Pricing depends on square footage, age, and complexity. Call (907) 223-3725 for an exact quote.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can I get a home inspection in Anchorage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Signature Inspection Service typically schedules within 1–3 business days. For time-sensitive closings, call (907) 223-3725 directly to discuss availability.",
      },
    },
    {
      "@type": "Question",
      name: "Will the inspector check for radon during a home inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Radon testing is a separate service from the standard home inspection. It can be added to your inspection or scheduled independently. Given Alaska's elevated radon risk, we recommend testing every property.",
      },
    },
  ],
};

export default function HomeInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#1a3a5c] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Anchorage, AK · ASHI Certified
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Home Inspection in Anchorage, AK
            </h1>
            <p className="text-slate-300 leading-relaxed mb-6">
              Protect your investment with a thorough residential inspection from Larry McBain —
              38 years of Alaska construction experience, ASHI certified, same-day reports.
            </p>
            <a
              href="tel:+19072233725"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Call (907) 223-3725
            </a>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-bold text-lg mb-4">Schedule Your Inspection</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* WHAT WE INSPECT */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-2">
            What&apos;s Included in an Anchorage Home Inspection
          </h2>
          <p className="text-slate-600 mb-8 text-sm">
            We follow ASHI standards of practice and go further with Alaska-specific checks.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Roof, gutters & downspouts",
              "Attic, insulation & ventilation",
              "Foundation & structural components",
              "Exterior siding, trim & decks",
              "Electrical system & panel",
              "Plumbing & water heater",
              "HVAC system (heating, cooling, ventilation)",
              "Windows, doors & weatherstripping",
              "Crawl space (if accessible)",
              "Interior walls, ceilings & floors",
              "Ice dam potential & drainage",
              "Permafrost & frost heave indicators",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-amber-500 font-bold">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALASKA-SPECIFIC */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">
              Alaska-Specific Concerns We Check
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Alaska&apos;s climate creates unique hazards that inspectors from the Lower 48 often miss.
              Larry&apos;s 38 years of Alaska construction experience means he knows exactly where to look.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                { title: "Ice Damming", body: "Ice dams cause significant roof and ceiling damage. We assess attic insulation, ventilation, and eave conditions that lead to damming." },
                { title: "Permafrost Settlement", body: "In Anchorage and outlying areas, permafrost movement can cause foundation shifts. We look for signs of differential settlement." },
                { title: "Freeze/Thaw Damage", body: "Repeated freeze/thaw cycles crack foundations, degrade siding, and damage plumbing. We assess risk and existing damage." },
                { title: "Seismic Resilience", body: "Anchorage lies in one of the most seismically active regions in the world. We note structural vulnerabilities." },
              ].map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#1a3a5c]">{item.title}: </span>
                  {item.body}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">Your Same-Day Report</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You receive a detailed written report the same day your inspection is completed —
              typically within hours. Every report includes:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                "Color photographs of every deficiency",
                "Clear descriptions of findings with severity ratings",
                "Recommended repairs vs. monitor items",
                "Maintenance suggestions for Alaska's climate",
                "Summary page for quick review with your agent",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-8 text-center">
            Home Inspection FAQ — Anchorage, AK
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="border-b border-slate-200 pb-6">
                <h3 className="font-bold text-[#1a3a5c] mb-2">{item.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">
            Schedule Your Anchorage Home Inspection Today
          </h2>
          <p className="text-amber-100 mb-6">
            We respond within 1 business hour. ASHI Certified. Same-day reports.
          </p>
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
