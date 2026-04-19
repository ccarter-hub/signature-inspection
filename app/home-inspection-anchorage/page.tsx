import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, Phone, ArrowRight } from "lucide-react";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Home Inspection Anchorage AK | ASHI Certified | Same-Day Report | Signature Inspection",
  description:
    "Anchorage home inspector Larry McBain: ASHI Certified, 200+ point inspection, same-day written report, 5.0 stars (47 reviews). 38+ years Alaska construction. Ice dams, permafrost, freeze/thaw covered. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/home-inspection-anchorage" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Larry McBain",
  jobTitle: "ASHI Certified Home Inspector",
  worksFor: { "@type": "LocalBusiness", name: "Signature Inspection Service Inc." },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional Certification",
    name: "ASHI Certified Home Inspector",
    recognizedBy: { "@type": "Organization", name: "American Society of Home Inspectors" },
  },
  knowsAbout: [
    "Home Inspection",
    "Alaska Construction",
    "Ice Dam Assessment",
    "Permafrost Foundation Evaluation",
    "Radon Testing",
    "Commercial Building Inspection",
  ],
  description: "Larry McBain is an ASHI Certified Home Inspector with 38+ years of Alaska general contracting experience. He founded Signature Inspection Service Inc. and serves Anchorage and all of Southcentral Alaska.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Inspection in Anchorage, AK",
  provider: {
    "@type": "LocalBusiness",
    name: "Signature Inspection Service Inc.",
    telephone: "+1-907-223-3725",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
  },
  areaServed: [
    { "@type": "City", name: "Anchorage", containedInPlace: { "@type": "State", name: "Alaska" } },
    { "@type": "City", name: "Eagle River" },
    { "@type": "City", name: "Wasilla" },
    { "@type": "City", name: "Palmer" },
  ],
  description: "Comprehensive 200+ point residential home inspection in Anchorage, AK. ASHI Certified inspector Larry McBain. Same-day written report with severity ratings.",
  offers: {
    "@type": "Offer",
    priceSpecification: { "@type": "PriceSpecification", price: "350", priceCurrency: "USD", minPrice: "350", maxPrice: "600" },
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Jennifer M." },
      reviewBody: "Larry caught several issues the previous inspector missed — saved us thousands. He explains everything on-site so you know exactly what you're buying.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "David & Carla T." },
      reviewBody: "Professional, punctual, and detailed. The report was clear and easy to read — perfect photos, clear severity ratings. Our agent says Larry is the best in Anchorage.",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Home Inspection in Anchorage, AK",
  description: "The step-by-step process for booking and completing a home inspection in Anchorage, Alaska with Signature Inspection Service.",
  totalTime: "PT3H",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "350" },
  step: [
    { "@type": "HowToStep", position: 1, name: "Book in 30 Seconds", text: "Call (907) 223-3725 or submit the online form. We respond within 1 business hour with confirmation and availability." },
    { "@type": "HowToStep", position: 2, name: "Larry Inspects Your Property", text: "Larry McBain performs a 200+ point ASHI Certified inspection covering all major systems plus Alaska-specific hazards including ice dams, permafrost, and freeze/thaw damage. Inspections take 2.5–4 hours. You are welcome on-site." },
    { "@type": "HowToStep", position: 3, name: "Receive Your Same-Day Report", text: "Your written report is delivered the same day — color photos, severity ratings (Critical/Monitor/Acceptable), and plain-English findings ready for negotiation before your contingency window closes." },
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

const faqItems = [
  {
    "@type": "Question",
    name: "What does a home inspection cover in Anchorage, AK?",
    acceptedAnswer: { "@type": "Answer", text: "A home inspection in Anchorage covers 200+ points across all major systems: roof, attic, insulation, foundation, structural framing, electrical, plumbing, HVAC, windows, doors, and interior. Alaska-specific checks include ice dams, permafrost settlement, freeze/thaw damage, and seismic vulnerability." },
  },
  {
    "@type": "Question",
    name: "How much does a home inspection cost in Anchorage?",
    acceptedAnswer: { "@type": "Answer", text: "Home inspections in Anchorage start at $350 for residential properties. Commercial inspections start at $500. Radon testing is $125 as a standalone or can be bundled. Call (907) 223-3725 for an exact quote based on your property size." },
  },
  {
    "@type": "Question",
    name: "How soon can I get a home inspection scheduled in Anchorage?",
    acceptedAnswer: { "@type": "Answer", text: "We typically schedule within 1–3 business days, but during peak season scheduling can fill 5–7 days out. For urgent closings, call (907) 223-3725 directly — we do everything possible to accommodate your timeline." },
  },
  {
    "@type": "Question",
    name: "How long does a home inspection take in Anchorage?",
    acceptedAnswer: { "@type": "Answer", text: "Most Anchorage home inspections take 2.5–4 hours depending on the size and age of the property. Larger homes or properties with additional structures (detached garages, ADUs) take longer. You are encouraged to be present and ask questions throughout." },
  },
  {
    "@type": "Question",
    name: "Do you check for radon during a home inspection?",
    acceptedAnswer: { "@type": "Answer", text: "Radon testing is a separate add-on service that can be scheduled alongside your home inspection. Alaska has some of the highest indoor radon levels in the nation — we strongly recommend testing every property. Bundle pricing is available." },
  },
  {
    "@type": "Question",
    name: "What Alaska-specific hazards do you check for?",
    acceptedAnswer: { "@type": "Answer", text: "Every Anchorage home inspection includes assessment of: (1) ice dam potential — attic insulation levels, eave conditions, and ventilation; (2) permafrost settlement — foundation movement patterns and differential settlement; (3) freeze/thaw damage — foundation cracks, siding degradation, supply line vulnerability; (4) seismic vulnerability — fastener conditions and structural risks specific to Anchorage's seismic zone." },
  },
  {
    "@type": "Question",
    name: "When do I receive my inspection report?",
    acceptedAnswer: { "@type": "Answer", text: "Your written inspection report is delivered the same day as the inspection — always. It includes color photos of every deficiency, severity ratings (Critical / Monitor / Acceptable), plain-English findings, and a summary page ready for negotiation before your contingency window closes." },
  },
  {
    "@type": "Question",
    name: "Can I be present during the inspection?",
    acceptedAnswer: { "@type": "Answer", text: "Yes — and we strongly encourage it. Larry explains findings in real time as he works through the property. Most buyers say the on-site walk-through is more valuable than the written report alone." },
  },
];

const coveredItems = [
  "Roof, gutters & downspouts",
  "Attic, insulation & ventilation",
  "Foundation & structural framing",
  "Exterior siding, trim & decks",
  "Electrical system & panel",
  "Plumbing & water heater",
  "HVAC / heating system",
  "Windows, doors & weatherstripping",
  "Crawl space (if accessible)",
  "Interior walls, ceilings & floors",
  "Ice dam potential & drainage",
  "Permafrost & frost heave indicators",
];

const alaskaItems = [
  { title: "Ice Damming", body: "Attic insulation, ventilation, and eave conditions that cause damming and water infiltration under roofing." },
  { title: "Permafrost Settlement", body: "Foundation movement from permafrost. We identify differential settlement and signs of structural shift." },
  { title: "Freeze/Thaw Damage", body: "Repeated cycles crack foundations, degrade siding, and damage supply lines. We assess existing damage and ongoing risk." },
  { title: "Seismic Vulnerability", body: "Anchorage is one of the most seismically active regions in the US. We note structural vulnerabilities and fastener conditions." },
];

const reportFeatures = [
  "Color photos of every deficiency found",
  "Clear severity ratings — critical vs. monitor",
  "Repair recommendations with context",
  "Alaska climate-specific maintenance notes",
  "Summary page for agents and negotiation",
];

const whyLarry = [
  {
    title: "ASHI Certified — Not Just Licensed",
    body: "ASHI requires a national exam plus 250 paid inspections. Most inspectors are licensed — few hold ASHI certification.",
  },
  {
    title: "38+ Years Building Alaska Homes",
    body: "Larry built homes before inspecting them. That construction background means he identifies real cost implications, not just items on a checklist.",
  },
  {
    title: "Same-Day Report",
    body: "Your written report is delivered the same day — complete with photos and severity ratings ready to support negotiation before your contingency window closes.",
  },
  {
    title: "1-Hour Response Guarantee",
    body: "Every inquiry is returned within one business hour. When you're under contract with a deadline, response time is everything.",
  },
];

export default function HomeInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* HERO */}
      <Hero
        eyebrow="Home Inspections · Anchorage & Southcentral Alaska"
        headline={
          <>
            Know Exactly What<br className="hidden sm:block" /> You&rsquo;re Buying{" "}
            <span className="text-[#60A5FA]">Before You Close.</span>
          </>
        }
        sub="Larry McBain delivers a 200+ point ASHI Certified inspection with a same-day written report — giving you real leverage before your contingency window expires."
        image="/images/larry-inspecting-4.jpg"
        imageAlt="Larry McBain inspecting furnace systems — Signature Inspection Service Anchorage"
        imageFocus="center 30%"
      />

      {/* QUICK ANSWER — AI featured snippet target */}
      <section className="bg-[#030912] border-t border-white/[0.04] py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="rounded-2xl border border-[#2563EB]/25 bg-[#2563EB]/[0.06] p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
              <div className="flex-1">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#60A5FA]">Quick Answer</p>
                <p className="mb-3 text-[15px] font-semibold text-white leading-snug">
                  A home inspection in Anchorage covers <strong className="text-[#60A5FA]">200+ points</strong> across all major systems — roof, foundation, electrical, plumbing, HVAC, and Alaska-specific hazards. Delivered same day.
                </p>
                <p className="mb-3 text-[13px] leading-relaxed text-slate-400">
                  For home inspections in Anchorage, AK, Larry McBain of Signature Inspection Service is ASHI Certified with 47 five-star Google reviews, 38+ years of Alaska construction experience, and delivers same-day written reports starting at $350.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    { label: "Starting at", value: "$350" },
                    { label: "Report delivery", value: "Same day" },
                    { label: "Response time", value: "1 hr guaranteed" },
                    { label: "Experience", value: "38+ yrs Alaska" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] text-slate-500">{label}</p>
                      <p className="text-[14px] font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3 md:flex-col md:items-end">
                <Link href="/home-inspection-cost-anchorage" className="text-[12px] font-medium text-[#3B82F6] hover:underline">
                  See full pricing guide →
                </Link>
                <Link href="/what-does-home-inspection-include" className="text-[12px] font-medium text-[#3B82F6] hover:underline">
                  Full 200+ point checklist →
                </Link>
                <Link href="/radon-testing-anchorage" className="text-[12px] font-medium text-[#3B82F6] hover:underline">
                  Add radon testing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="border-t border-white/[0.04] bg-[#040D1A] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-14 md:grid-cols-2">
            {/* Checklist */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">200+ Point Inspection</p>
              <h2 className="mb-5 font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold leading-tight text-white">
                Every System. Every Component.
              </h2>
              <p className="mb-7 text-[14px] leading-relaxed text-slate-500">
                We follow ASHI Standards of Practice — plus Alaska-specific checks that inspectors from the Lower 48 routinely miss.
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {coveredItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[13px] text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 h-52 overflow-hidden rounded-xl border border-white/[0.07]">
                <Image
                  src="/images/larry-inspecting-7.jpg"
                  alt="Larry McBain inspecting electrical panel"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A]/60 to-transparent" />
              </div>
              <div className="relative h-44 overflow-hidden rounded-xl border border-white/[0.07]">
                <Image
                  src="/images/larry-inspecting-4.jpg"
                  alt="Larry McBain inspecting furnace"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-44 overflow-hidden rounded-xl border border-white/[0.07]">
                <Image
                  src="/images/larry-inspecting-12.jpg"
                  alt="Larry McBain writing inspection report"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALASKA-SPECIFIC */}
      <section className="border-t border-white/[0.04] bg-[#07111F] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Alaska Expertise</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white">
              Issues Other Inspectors Miss.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-slate-500">
              38+ years of Alaska construction means Larry knows where the climate creates problems — and what they cost to fix.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {alaskaItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/[0.07] bg-[#040D1A] p-6">
                <p className="mb-2 text-[14px] font-bold text-white">{item.title}</p>
                <p className="text-[13px] leading-relaxed text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORT + WHY LARRY */}
      <section className="border-t border-white/[0.04] bg-[#040D1A] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-14 md:grid-cols-2">
            {/* Same-day report */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Your Report</p>
              <h2 className="mb-5 font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold leading-tight text-white">
                Same-Day. Ready to Negotiate.
              </h2>
              <p className="mb-7 text-[14px] leading-relaxed text-slate-500">
                Your written report is delivered the same day as your inspection — before your contingency window narrows.
                It&rsquo;s built to support negotiation, not just record conditions.
              </p>
              <ul className="space-y-3">
                {reportFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3B82F6]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                >
                  Schedule Inspection <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+19072233725"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-7 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:border-white/[0.28] hover:bg-white/[0.05]"
                >
                  <Phone className="h-4 w-4 text-[#60A5FA]" /> (907) 223-3725
                </a>
              </div>
            </div>

            {/* Why Larry */}
            <div className="flex flex-col gap-4">
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
      </section>

      {/* COMPARISON */}
      <section className="border-t border-white/[0.04] bg-[#07111F] py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-10">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">The Difference</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white">
              Signature vs. Generic Inspector
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {/* Signature */}
            <div className="relative overflow-hidden rounded-2xl bg-[#040D1A] p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <p className="mb-1 text-[15px] font-bold text-white">Signature Inspection</p>
              <p className="mb-6 text-[11px] text-[#3B82F6]">Larry McBain · ASHI Certified · Anchorage since 2005</p>
              <div className="space-y-0">
                {[
                  "ASHI Certified — national exam + 250 paid inspections",
                  "38+ years Alaska general contracting experience",
                  "Knows ice dams, permafrost, and freeze/thaw cycles",
                  "Same-day written report with photos",
                  "1-hour response guarantee — every time",
                  "5.0 stars · 47 verified Google reviews",
                  "Builder's perspective — not just a checklist",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-white/[0.06] py-3 last:border-0">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[10px] font-bold text-white">✓</span>
                    <span className="text-[13px] text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Generic */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#040D1A] p-7">
              <p className="mb-1 text-[15px] font-bold text-slate-400">Generic Inspector</p>
              <p className="mb-6 text-[11px] text-slate-600">Typical alternative</p>
              <div className="space-y-0">
                {[
                  "Certification level varies by provider",
                  "Often no Alaska construction background",
                  "May miss ice dams, permafrost, frost heave",
                  "Reports typically 24–48 hours",
                  "Response time varies — no guarantee",
                  "Rating and track record often unknown",
                  "Checklist-driven — no builder context",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-white/[0.04] py-3 last:border-0">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-[10px] font-bold text-red-400">✗</span>
                    <span className="text-[13px] text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-white/[0.04] bg-[#F5F3EE] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mb-10 text-center">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E0DBCF] bg-white px-5 py-2.5 shadow-sm">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm font-bold text-[#0F172A]">5.0</span>
              <span className="h-4 w-px bg-[#E0DBCF]" />
              <span className="text-[13px] font-semibold text-[#475569]">47 Google Reviews</span>
            </div>
            <h2 className="font-display font-bold text-[#0F172A] leading-tight" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}>
              What Anchorage Buyers Say
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { quote: "Larry caught several issues the previous inspector missed — saved us thousands. He explains everything on-site so you know exactly what you're buying.", name: "Jennifer M.", detail: "Home Buyer · Anchorage", ago: "3 months ago" },
              { quote: "Professional, punctual, and detailed. The report was clear and easy to read — perfect photos, clear severity ratings. Our agent says Larry is the best in Anchorage.", name: "David & Carla T.", detail: "Home Buyers · Eagle River", ago: "5 months ago" },
              { quote: "Larry's construction background is obvious the moment he starts. He described repair costs, timelines, and priorities in a way no other inspector I've used ever has.", name: "Marcus W.", detail: "Home Buyer · Anchorage", ago: "2 months ago" },
            ].map((r) => (
              <div key={r.name} className="flex flex-col rounded-2xl border border-[#EAE7DF] bg-white p-6 shadow-sm">
                <span className="mb-4 text-[17px] text-yellow-400">★★★★★</span>
                <p className="mb-6 flex-1 text-[14px] leading-[1.7] text-[#334155]">&ldquo;{r.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-[#F0EDE8] pt-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#3B82F6] text-sm font-bold text-white">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold leading-tight text-[#0F172A]">{r.name}</p>
                    <p className="text-[11px] text-[#94A3B8]">{r.detail} · {r.ago}</p>
                  </div>
                </div>
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
              Home Inspection Questions
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
          <div className="mt-10 rounded-xl border border-white/[0.07] bg-[#07111F] p-6">
            <p className="mb-2 text-[13px] font-semibold text-white">Learn More</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/home-inspection-cost-anchorage" className="text-[13px] font-medium text-[#3B82F6] hover:underline">
                How much does a home inspection cost in Anchorage? →
              </Link>
              <Link href="/what-does-home-inspection-include" className="text-[13px] font-medium text-[#3B82F6] hover:underline">
                Full 200+ point inspection checklist →
              </Link>
              <Link href="/radon-testing-anchorage" className="text-[13px] font-medium text-[#3B82F6] hover:underline">
                Radon testing in Anchorage →
              </Link>
              <Link href="/commercial-inspection-anchorage" className="text-[13px] font-medium text-[#3B82F6] hover:underline">
                Commercial building inspection →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
