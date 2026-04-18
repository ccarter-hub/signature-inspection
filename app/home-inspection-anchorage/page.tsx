import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      acceptedAnswer: { "@type": "Answer", text: "A home inspection in Anchorage covers the roof, attic, insulation, foundation, framing, electrical, plumbing, HVAC, windows, and doors. Alaska-specific checks include ice dams, permafrost settlement, and freeze/thaw damage." },
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://signatureinspectionservice.com" },
    { "@type": "ListItem", position: 2, name: "Home Inspection Anchorage", item: "https://signatureinspectionservice.com/home-inspection-anchorage" },
  ],
};

export default function HomeInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative bg-[#0B1220] text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/larry-inspecting-10.jpg" alt="" fill className="object-cover object-center opacity-65" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0B1220]/78 via-[#0B1220]/48 to-[#0B1220]/22" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">Home Inspection · Anchorage, AK</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-5">
              Home Inspection in Anchorage, AK
            </h1>
            <p className="text-slate-300 leading-relaxed mb-4">
              Know exactly what you&apos;re buying. Larry McBain delivers a thorough 200+ point inspection —
              ASHI Certified, 38+ years Alaska construction experience, same-day written reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+19072233725" className="bg-[#3B82F6] hover:bg-[#2563EB] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 inline-block text-center">
                Call (907) 223-3725
              </a>
              <Link href="/contact" className="border border-white/25 text-white hover:bg-white/[0.08] font-semibold px-6 py-3 rounded-lg transition-all duration-150 inline-block text-center">
                Book Online
              </Link>
            </div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <h2 className="text-[#0B1220] font-bold text-lg mb-1">Schedule Your Inspection</h2>
            <p className="text-[#64748B] text-sm mb-4">We respond within 1 business hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ACTION PHOTO STRIP */}
      <section className="bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-3 gap-3">
          {[
            { src: "/images/larry-inspecting-2.jpg", alt: "Inspecting electrical panel outside" },
            { src: "/images/larry-inspecting-10.jpg", alt: "Roof inspection Anchorage home" },
            { src: "/images/larry-inspecting-5.jpg", alt: "Photographing HVAC system overhead" },
          ].map((img) => (
            <div key={img.src} className="relative h-36 md:h-48 rounded-xl overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 33vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE INSPECT */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#0B1220] mb-2">
              What&apos;s Included in an Anchorage Home Inspection
            </h2>
            <p className="text-[#64748B] mb-6 text-sm">
              We follow ASHI standards of practice — plus Alaska-specific checks that inspectors from the Lower 48 routinely miss.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
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
                  <span className="text-[#2563EB] font-bold shrink-0">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Stacked inspection photos */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-52 rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/larry-inspecting-7.jpg" alt="Electrical panel inspection" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative h-52 rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/larry-inspecting-4.jpg" alt="Furnace HVAC inspection" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative h-52 rounded-xl overflow-hidden shadow-sm col-span-2">
              <Image src="/images/hero.jpg" alt="Plumbing inspection bathroom" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ALASKA-SPECIFIC + REPORT */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Alaska-Specific Issues We Check</h2>
            <p className="text-[#64748B] text-sm leading-relaxed mb-5">
              Alaska&apos;s climate creates hazards that inspectors from the Lower 48 often miss.
              Larry&apos;s 38+ years of Alaska construction experience means he knows exactly where to look.
            </p>
            <div className="space-y-3">
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
            <div className="relative h-48 rounded-xl overflow-hidden mb-5 shadow-sm">
              <Image src="/images/larry-inspecting-12.jpg" alt="Larry writing inspection report on laptop" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Home Inspection FAQ — Anchorage, AK</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="card p-5">
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{item.name}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
