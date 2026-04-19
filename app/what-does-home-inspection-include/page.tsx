import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Phone } from "lucide-react";
import CTA from "@/components/CTA";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "What Does a Home Inspection Include in Anchorage, AK? Full Checklist",
  description:
    "Complete guide to what a home inspection covers in Anchorage, Alaska: 200+ point checklist, Alaska-specific hazards (ice dams, permafrost), what's excluded, and what your report looks like. ASHI Certified. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/what-does-home-inspection-include" },
};

const faqItems = [
  {
    "@type": "Question",
    name: "What does a home inspection include in Anchorage, AK?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A home inspection in Anchorage covers 200+ points across all major systems: roof, attic, insulation, foundation, structural framing, exterior, electrical panel and wiring, plumbing, HVAC/heating, windows, doors, and interior spaces. Alaska-specific checks include ice dam potential, permafrost movement, freeze/thaw damage, and seismic vulnerability.",
    },
  },
  {
    "@type": "Question",
    name: "What is NOT included in a home inspection?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A standard home inspection does not include: radon testing (separate add-on), mold testing, sewer scoping, pest inspection, oil tank sweeps, well/septic systems (separate service), or components that are inaccessible during the inspection (e.g., sealed crawl spaces, locked panels). Radon testing can be bundled with a home inspection for additional cost.",
    },
  },
  {
    "@type": "Question",
    name: "How many items does a home inspection cover?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A comprehensive Anchorage home inspection covers 200+ inspection points across 12 major systems. Each point is documented with field notes and, where relevant, color photos. The written report you receive the same day lists every finding by severity: Critical, Monitor, or Acceptable.",
    },
  },
  {
    "@type": "Question",
    name: "Do Alaska home inspections check for ice dams?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Ice dam assessment is a standard part of every Signature Inspection Service home inspection. Larry evaluates attic insulation levels, eave conditions, and roof ventilation — the combination that determines ice dam risk. He identifies existing ice dam damage and the conditions that will cause future damming.",
    },
  },
  {
    "@type": "Question",
    name: "Do home inspectors check for permafrost in Anchorage?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Larry evaluates foundation conditions and signs of differential settlement that indicate permafrost movement or freeze/thaw cycling. He identifies cracks, tilting, and structural shifts that suggest ongoing permafrost-related movement — and distinguishes settling from structural failure.",
    },
  },
  {
    "@type": "Question",
    name: "How long does an Anchorage home inspection take?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Most Anchorage home inspections take 2.5–4 hours depending on property size and age. Larger homes or properties with more systems (detached garages, ADUs, older construction) take longer. You are encouraged to attend and ask questions throughout.",
    },
  },
  {
    "@type": "Question",
    name: "When do I get my inspection report?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "You receive your written inspection report the same day as the inspection. It includes all findings documented with color photos, organized by severity (Critical, Monitor, Acceptable), written in plain English — no inspector jargon. The report is formatted to support negotiation before your contingency window closes.",
    },
  },
];

const systems = [
  {
    name: "Roof & Exterior",
    items: ["Roofing material condition", "Gutters, downspouts & drainage", "Flashing at chimneys & penetrations", "Fascia, soffits & eaves", "Exterior siding & trim", "Decks, porches & railings", "Foundation visible at grade", "Driveway, walkway & grading"],
  },
  {
    name: "Attic & Insulation",
    items: ["Attic access & ventilation", "Insulation type, depth & coverage", "Ice dam risk assessment", "Roof sheathing & rafters", "Exhaust fan discharge", "Moisture and condensation signs"],
  },
  {
    name: "Foundation & Structure",
    items: ["Foundation walls & footing", "Differential settlement indicators", "Permafrost movement signs", "Structural framing & beams", "Floor structure at crawl space", "Seismic fastener conditions"],
  },
  {
    name: "Electrical",
    items: ["Service panel & breaker condition", "Wiring types & connections", "GFCI outlets in wet areas", "Outlet polarity & grounding", "Visible junction boxes", "Smoke & CO detector locations"],
  },
  {
    name: "Plumbing",
    items: ["Supply line type & condition", "Drain, waste & vent system", "Water heater: age, condition, TPR valve", "Freeze-proof hose bibs", "Toilets, sinks, showers & tubs", "Visible signs of active leaks"],
  },
  {
    name: "HVAC & Heating",
    items: ["Heating system: type, age, operation", "Heat exchanger condition (furnace)", "Oil tank condition (if present)", "Thermostat operation", "Ductwork & distribution", "Combustion air & flue discharge"],
  },
  {
    name: "Interior",
    items: ["Windows: operation, seals & glazing", "Doors: operation & weatherstripping", "Floors, walls & ceilings (visible)", "Stairways & railings", "Garage fire door & auto-reverse", "Kitchen & bath fixtures"],
  },
];

const alaskaItems = [
  {
    name: "Ice Dam Assessment",
    severity: "HIGH",
    description: "Attic insulation (R-value), eave conditions, and roof ventilation evaluated for ice dam potential. Ice dams cause serious water infiltration — often invisible until damage is extensive.",
  },
  {
    name: "Permafrost & Settlement",
    severity: "HIGH",
    description: "Foundation movement patterns evaluated for permafrost-driven differential settlement. Distinguishes cosmetic settling from active structural movement.",
  },
  {
    name: "Freeze/Thaw Damage",
    severity: "MEDIUM",
    description: "Repeated freeze/thaw cycles crack foundations, degrade exterior materials, and damage supply lines. We document existing damage and identify ongoing risk.",
  },
  {
    name: "Seismic Vulnerability",
    severity: "MEDIUM",
    description: "Anchorage is among the most seismically active regions in the US. We evaluate fastener conditions, cripple walls, and structural vulnerabilities.",
  },
  {
    name: "Heating System Depth",
    severity: "HIGH",
    description: "Alaska's heating systems bear extreme load. We evaluate oil tanks, heat exchangers, boilers, and combustion air — not just whether the furnace turns on.",
  },
];

const notIncluded = [
  "Radon testing (available as add-on — highly recommended for Alaska)",
  "Mold testing (requires separate lab sampling)",
  "Sewer scoping (separate video inspection)",
  "Well & septic inspection (separate service)",
  "Pest or wood-destroying organism inspection",
  "Oil tank sweep or decommissioning",
  "Components inaccessible at time of inspection",
  "Swimming pools, hot tubs (separate inspection scope)",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://signatureinspectionservice.com" },
    { "@type": "ListItem", position: 2, name: "What Does a Home Inspection Include", item: "https://signatureinspectionservice.com/what-does-home-inspection-include" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What a Home Inspection Covers in Anchorage, AK",
  description: "A comprehensive overview of the systems and components covered in a professional home inspection in Anchorage, Alaska.",
  step: systems.map((s) => ({
    "@type": "HowToStep",
    name: s.name,
    text: s.items.join(", "),
  })),
};

export default function WhatDoesHomeInspectionIncludePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems }) }} />

      {/* PAGE HEADER */}
      <section className="bg-[#030912] pt-28 pb-14 border-b border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
            Inspection Guide · Anchorage, AK
          </p>
          <h1
            className="mb-5 font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            What Does a Home Inspection<br className="hidden sm:block" /> Include in Anchorage, AK?
          </h1>
          <p className="mb-8 max-w-[600px] text-[16px] leading-[1.7] text-slate-400">
            A complete breakdown of the 200+ inspection points, Alaska-specific checks, and what your same-day report looks like — so you know exactly what you're getting.
          </p>

          {/* QUICK ANSWER */}
          <div className="rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/[0.07] p-6">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-[#60A5FA]">Quick Answer</p>
            <p className="mb-3 text-[15px] font-semibold text-white leading-snug">
              A home inspection in Anchorage covers <span className="text-[#60A5FA]">200+ points across 7 major systems</span>, plus Alaska-specific hazards including ice dams, permafrost, and freeze/thaw damage.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 mb-4">
              {["Roof & Exterior","Electrical","Plumbing","HVAC","Foundation","Attic & Insulation","Interior","Alaska-Specific"].map((s) => (
                <div key={s} className="flex items-center gap-1.5 text-[12px] text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#3B82F6]" />
                  {s}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-2.5 text-[13px] font-bold text-white hover:bg-[#1d4ed8] transition-colors">
                Book Inspection <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a href="tel:+19072233725" className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white/[0.05] transition-colors">
                <Phone className="h-3.5 w-3.5 text-[#60A5FA]" /> (907) 223-3725
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM-BY-SYSTEM CHECKLIST */}
      <section className="bg-[#040D1A] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">200+ Point Checklist</p>
          <h2 className="mb-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
            System-by-System: What Gets Inspected
          </h2>
          <p className="mb-10 text-[14px] leading-relaxed text-slate-500">
            Every inspection follows ASHI Standards of Practice — the national benchmark — plus Alaska-specific checks that inspectors from the Lower 48 routinely miss.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {systems.map((system) => (
              <div key={system.name} className="rounded-xl border border-white/[0.07] bg-[#07111F] p-6">
                <p className="mb-4 text-[15px] font-bold text-white">{system.name}</p>
                <ul className="space-y-2">
                  {system.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-slate-400">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3B82F6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALASKA-SPECIFIC SECTION */}
      <section className="bg-[#07111F] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Alaska-Specific</p>
          <h2 className="mb-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
            What Other Inspectors Miss in Alaska
          </h2>
          <p className="mb-8 text-[14px] leading-relaxed text-slate-500">
            38 years building Anchorage homes — before inspecting them — means Larry knows exactly where Alaska's climate creates hidden problems. These checks are built into every inspection at no extra charge.
          </p>
          <div className="space-y-4">
            {alaskaItems.map((item) => (
              <div key={item.name} className="flex gap-5 rounded-xl border border-white/[0.07] bg-[#040D1A] p-5">
                <span className={`mt-0.5 shrink-0 rounded-md px-2 py-1 text-[10px] font-bold h-fit ${
                  item.severity === "HIGH"
                    ? "bg-red-500/15 text-red-300 border border-red-500/25"
                    : "bg-amber-500/15 text-amber-300 border border-amber-500/25"
                }`}>
                  {item.severity}
                </span>
                <div>
                  <p className="mb-1 text-[14px] font-bold text-white">{item.name}</p>
                  <p className="text-[13px] leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/[0.05] p-5">
            <p className="mb-1 text-[13px] font-bold text-amber-300">Add Radon Testing</p>
            <p className="mb-3 text-[13px] text-slate-400 leading-relaxed">
              Radon is not included in a standard home inspection — but Alaska has some of the highest indoor radon levels in the nation. We strongly recommend testing every Anchorage property. Bundle it with your home inspection for maximum value.
            </p>
            <Link href="/radon-testing-anchorage" className="text-[13px] font-semibold text-[#3B82F6] hover:underline">
              Learn about radon testing in Anchorage →
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S NOT INCLUDED */}
      <section className="bg-[#040D1A] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Exclusions</p>
          <h2 className="mb-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
            What a Home Inspection Does NOT Cover
          </h2>
          <p className="mb-6 text-[14px] leading-relaxed text-slate-500">
            Setting the right expectations protects you from surprises. Here's what's outside the standard inspection scope:
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {notIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-white/[0.05] bg-[#07111F] px-4 py-3 text-[13px] text-slate-400">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] text-slate-600">
            Questions about a specific system or add-on? Call <a href="tel:+19072233725" className="text-[#3B82F6] hover:underline">(907) 223-3725</a> — we'll tell you exactly what we can cover.
          </p>
        </div>
      </section>

      {/* YOUR REPORT */}
      <section className="bg-[#07111F] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Your Deliverable</p>
          <h2 className="mb-5 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
            What Your Same-Day Report Looks Like
          </h2>
          <p className="mb-8 text-[14px] leading-relaxed text-slate-500">
            You won't receive a 60-page PDF that your agent has to interpret. Your report is built for buyers — organized by severity, written in plain English, with photos of every finding.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            {[
              { color: "bg-red-400", label: "Critical", desc: "Immediate repair needed. Safety risk or major cost. Use for negotiation." },
              { color: "bg-amber-400", label: "Monitor", desc: "Not urgent but needs attention within 1–3 seasons. Budget accordingly." },
              { color: "bg-emerald-400", label: "Acceptable", desc: "No action needed. Documented for your records." },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/[0.07] bg-[#040D1A] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${s.color}`} />
                  <span className="text-[14px] font-bold text-white">{s.label}</span>
                </div>
                <p className="text-[12px] leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white hover:bg-[#1d4ed8] transition-colors">
              Schedule Your Inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/home-inspection-cost-anchorage" className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-7 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.05] transition-colors">
              See Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#030912] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">FAQ</p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
              Home Inspection Checklist Questions
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
          <div className="mt-10 rounded-xl border border-white/[0.07] bg-[#07111F] p-6">
            <p className="mb-2 text-[13px] font-semibold text-white">Related Pages</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Home Inspection Anchorage", href: "/home-inspection-anchorage" },
                { label: "Inspection Cost Guide", href: "/home-inspection-cost-anchorage" },
                { label: "Radon Testing", href: "/radon-testing-anchorage" },
                { label: "Commercial Inspection", href: "/commercial-inspection-anchorage" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[13px] font-medium text-[#3B82F6] hover:underline">
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
