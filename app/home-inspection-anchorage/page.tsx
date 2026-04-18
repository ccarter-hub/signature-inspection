import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Home Inspection in Anchorage, AK | ASHI Certified Inspector",
  description:
    "Professional home inspection in Anchorage, AK by ASHI Certified inspector Larry McBain. 38+ years Alaska construction experience. Same-day reports. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/home-inspection-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Inspection in Anchorage, AK",
  provider: { "@type": "LocalBusiness", name: "Signature Inspection Service Inc.", telephone: "+1-907-223-3725" },
  areaServed: { "@type": "City", name: "Anchorage", containedInPlace: { "@type": "State", name: "Alaska" } },
  description: "Comprehensive residential home inspection in Anchorage, AK. ASHI Certified. Covers structure, roof, electrical, plumbing, HVAC, and Alaska-specific concerns.",
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
        text: "A home inspection in Anchorage covers the roof, attic, insulation, foundation, framing, electrical, plumbing, HVAC, windows, and doors. Alaska-specific checks include ice dams, permafrost settlement, and freeze/thaw damage.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a home inspection cost in Anchorage?",
      acceptedAnswer: { "@type": "Answer", text: "Home inspections in Anchorage typically range from $400–$600 depending on property size. Call (907) 223-3725 for a same-day quote." },
    },
    {
      "@type": "Question",
      name: "How soon can I get a home inspection scheduled in Anchorage?",
      acceptedAnswer: { "@type": "Answer", text: "We typically schedule within 1–3 business days. For urgent closings, call (907) 223-3725 directly to discuss availability." },
    },
    {
      "@type": "Question",
      name: "Do you check for radon during a home inspection?",
      acceptedAnswer: { "@type": "Answer", text: "Radon testing is a separate add-on service. It can be scheduled alongside your inspection. Given Alaska's elevated radon risk, we recommend it for every property." },
    },
  ],
};

export default function HomeInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#0F172A] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3">Home Inspection · Anchorage, AK</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              Home Inspection in Anchorage, AK
            </h1>
            <p className="text-slate-300 leading-relaxed mb-6">
              Protect your investment with a thorough inspection from Larry McBain — ASHI Certified,
              38+ years Alaska construction experience, same-day written reports.
            </p>
            <a href="tel:+19072233725" className="bg-[#2563EB] hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 inline-block">
              Call (907) 223-3725
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-[#0F172A] font-bold text-lg mb-1">Schedule Your Inspection</h2>
            <p className="text-[#64748B] text-sm mb-4">We respond within 1 business hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
            What&apos;s Included in a Anchorage Home Inspection
          </h2>
          <p className="text-[#64748B] mb-8 text-sm">
            We follow ASHI standards of practice — plus Alaska-specific checks that inspectors from the Lower 48 routinely miss.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Roof, gutters & downspouts",
              "Attic, insulation & ventilation",
              "Foundation & structural components",
              "Exterior siding, trim & decks",
              "Electrical system & panel",
              "Plumbing & water heater",
              "HVAC system",
              "Windows, doors & weatherstripping",
              "Crawl space (if accessible)",
              "Interior walls, ceilings & floors",
              "Ice dam potential & drainage",
              "Permafrost & frost heave indicators",
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
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Alaska-Specific Issues We Check</h2>
            <p className="text-[#64748B] text-sm leading-relaxed mb-5">
              Alaska&apos;s climate creates hazards that inspectors from the Lower 48 often miss.
              Larry&apos;s 38+ years of Alaska construction experience means he knows exactly where to look.
            </p>
            <div className="space-y-4">
              {[
                { title: "Ice Damming", body: "We assess attic insulation, ventilation, and eave conditions that lead to damming and roof damage." },
                { title: "Permafrost Settlement", body: "Foundation shifts from permafrost movement. We look for signs of differential settlement." },
                { title: "Freeze/Thaw Damage", body: "Repeated cycles crack foundations, degrade siding, and damage plumbing. We assess risk and existing damage." },
                { title: "Seismic Resilience", body: "Anchorage is in one of the most seismically active regions in the world. We note structural vulnerabilities." },
              ].map((item) => (
                <div key={item.title} className="card p-4">
                  <p className="font-semibold text-[#0F172A] text-sm mb-1">{item.title}</p>
                  <p className="text-[#64748B] text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Your Same-Day Report</h2>
            <p className="text-[#64748B] text-sm leading-relaxed mb-5">
              You receive a detailed written report the same day — typically within hours of inspection. Every report includes:
            </p>
            <ul className="space-y-3">
              {[
                "Color photographs of every deficiency",
                "Clear descriptions with severity ratings",
                "Recommended repairs vs. monitor items",
                "Maintenance suggestions for Alaska's climate",
                "Summary page for quick agent review",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#0F172A]">
                  <span className="w-5 h-5 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#2563EB] text-xs shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 card p-5 bg-[#EFF6FF] border-[#BFDBFE]">
              <p className="text-sm text-[#1e40af] font-medium">
                Ready to schedule? We respond within 1 business hour.
              </p>
              <div className="mt-3 flex gap-3 flex-wrap">
                <a href="tel:+19072233725" className="bg-[#2563EB] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1d4ed8] transition-colors">
                  Call Now
                </a>
                <Link href="/contact" className="border border-[#2563EB] text-[#2563EB] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors">
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Home Inspection FAQ — Anchorage, AK</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="card p-5">
                <h3 className="font-bold text-[#0F172A] mb-2 text-sm">{item.name}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2563EB] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Schedule Your Anchorage Home Inspection</h2>
          <p className="text-blue-100 mb-6">ASHI Certified. Same-day reports. 1-hour response guarantee.</p>
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
