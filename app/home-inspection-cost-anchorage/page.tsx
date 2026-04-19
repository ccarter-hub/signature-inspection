import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, DollarSign } from "lucide-react";
import CTA from "@/components/CTA";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Home Inspection Cost Anchorage AK — Prices & What's Included (2026)",
  description:
    "How much does a home inspection cost in Anchorage, AK? Prices start at $350. Full breakdown: home inspection, commercial, radon testing, and bundle pricing. No surprises. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/home-inspection-cost-anchorage" },
};

const faqItems = [
  {
    "@type": "Question",
    name: "How much does a home inspection cost in Anchorage, AK?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Home inspections in Anchorage typically cost $350–$600 depending on the size and age of the property. Signature Inspection Service starts at $350 for standard residential homes. Commercial inspections start at $500 and radon testing starts at $125. Call (907) 223-3725 for an exact quote.",
    },
  },
  {
    "@type": "Question",
    name: "What does the inspection price include?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The price includes a 200+ point inspection of all accessible systems, the on-site inspection with the inspector, and a same-day written report with color photos and severity ratings. There are no hidden fees.",
    },
  },
  {
    "@type": "Question",
    name: "Is a home inspection worth the cost in Anchorage?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. The average cost of a home inspection in Anchorage is $350–$500. The average repair negotiation after an inspection is $2,000–$10,000 — or a price reduction of the same amount. Skipping an inspection to save $400 often costs buyers tens of thousands in missed repairs.",
    },
  },
  {
    "@type": "Question",
    name: "How much does radon testing cost in Anchorage?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Radon testing in Anchorage starts at $125 as a standalone service. Bundled with a home inspection, it's the most cost-effective option. Given Alaska's elevated radon levels, testing is recommended for every property.",
    },
  },
  {
    "@type": "Question",
    name: "Do you offer a Home + Radon bundle?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Our Home + Radon bundle is the most popular option for buyers. One call, one appointment, one report covering both. Call (907) 223-3725 to get exact bundle pricing for your property.",
    },
  },
  {
    "@type": "Question",
    name: "How does Anchorage home inspection pricing compare to other Alaska cities?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Anchorage home inspection prices are in line with the rest of Southcentral Alaska. Properties in more remote areas (Seward, Homer, Kenai) may have a travel surcharge. Eagle River, Wasilla, and Palmer properties are typically the same rate as Anchorage.",
    },
  },
  {
    "@type": "Question",
    name: "What factors affect the cost of a home inspection?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The main factors affecting home inspection costs in Anchorage are: (1) square footage — larger homes take longer; (2) age of property — older homes have more to evaluate; (3) property type — commercial inspections cost more than residential; (4) location — remote areas may add a travel fee; (5) add-on services like radon testing.",
    },
  },
];

const pricingRows = [
  { type: "Home Inspection", size: "Up to 1,500 sq ft", price: "From $350", note: "Most condos, townhomes" },
  { type: "Home Inspection", size: "1,500–2,500 sq ft", price: "From $400", note: "Typical single-family" },
  { type: "Home Inspection", size: "2,500–4,000 sq ft", price: "From $475", note: "Larger homes" },
  { type: "Home Inspection", size: "4,000+ sq ft", price: "Call for quote", note: "Custom/estate homes" },
  { type: "Radon Testing", size: "Any size", price: "From $125", note: "Stand-alone or bundle" },
  { type: "Commercial Inspection", size: "Small buildings", price: "From $500", note: "Office, retail, duplex" },
  { type: "Commercial Inspection", size: "Large buildings", price: "Call for quote", note: "Based on scope" },
  { type: "Home + Radon Bundle", size: "Any size", price: "Best value", note: "Most popular option" },
];

const costFactors = [
  { title: "Square Footage", body: "Larger homes have more systems to inspect. A 1,200 sq ft condo and a 3,500 sq ft house take very different amounts of time." },
  { title: "Property Age", body: "Older homes — especially pre-1980 construction — have more deferred maintenance and code changes to evaluate. They require more detailed attention." },
  { title: "Property Type", body: "Commercial buildings involve different mechanical, electrical, and structural systems. Commercial inspections are priced higher than residential." },
  { title: "Add-On Services", body: "Radon testing ($125+) is the most common add-on. It can be bundled with a home inspection for maximum value." },
  { title: "Location", body: "Anchorage, Eagle River, Wasilla, and Palmer are all standard rate. Properties outside the Southcentral metro may include a travel fee — call to confirm." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://signatureinspectionservice.com" },
    { "@type": "ListItem", position: 2, name: "Home Inspection Cost Anchorage", item: "https://signatureinspectionservice.com/home-inspection-cost-anchorage" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Inspection Anchorage AK",
  provider: { "@type": "LocalBusiness", name: "Signature Inspection Service Inc.", telephone: "+1-907-223-3725" },
  areaServed: { "@type": "City", name: "Anchorage", containedInPlace: { "@type": "State", name: "Alaska" } },
  offers: {
    "@type": "Offer",
    priceSpecification: { "@type": "PriceSpecification", price: "350", priceCurrency: "USD", description: "Residential home inspection — starting price" },
  },
};

export default function HomeInspectionCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems }) }} />

      {/* PAGE HEADER */}
      <section className="bg-[#030912] pt-28 pb-14 border-b border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
            Pricing Guide · Anchorage, AK
          </p>
          <h1
            className="mb-5 font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Home Inspection Cost in<br className="hidden sm:block" /> Anchorage, AK — 2026 Pricing
          </h1>
          <p className="mb-8 max-w-[600px] text-[16px] leading-[1.7] text-slate-400">
            Transparent pricing — no games. Here's exactly what a home inspection costs in Anchorage, what's included, and what affects the final price.
          </p>

          {/* QUICK ANSWER — AI featured snippet target */}
          <div className="rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/[0.07] p-6">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-[#60A5FA]">Quick Answer</p>
            <p className="text-[15px] font-semibold text-white leading-snug mb-3">
              A home inspection in Anchorage, AK costs <span className="text-[#60A5FA]">$350–$600</span> for most residential properties.
            </p>
            <ul className="space-y-1.5 text-[13px] text-slate-300">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" /> Home inspection: from $350</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" /> Radon testing: from $125 (standalone or bundle)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" /> Commercial inspection: from $500</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" /> Same-day written report included in all prices</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+19072233725"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-[14px] font-bold text-white transition-all duration-200 hover:bg-[#1d4ed8]"
              >
                <Phone className="h-4 w-4" /> Get Your Quote — (907) 223-3725
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.05]"
              >
                Book Online <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="bg-[#040D1A] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Pricing</p>
          <h2 className="mb-8 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
            Anchorage Inspection Prices at a Glance
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
            <div className="grid grid-cols-4 bg-[#07111F] px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
              <span>Service</span>
              <span>Size</span>
              <span>Starting Price</span>
              <span className="hidden sm:block">Notes</span>
            </div>
            {pricingRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 px-5 py-4 text-[13px] border-t border-white/[0.05] ${i % 2 === 0 ? "bg-[#040D1A]" : "bg-[#050E1C]"}`}
              >
                <span className="font-semibold text-white">{row.type}</span>
                <span className="text-slate-400">{row.size}</span>
                <span className="font-bold text-[#60A5FA]">{row.price}</span>
                <span className="hidden sm:block text-slate-500">{row.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] text-slate-600">
            Call <a href="tel:+19072233725" className="text-[#3B82F6] hover:underline">(907) 223-3725</a> for an exact quote on your specific property. We respond within 1 business hour.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-[#07111F] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">What You Get</p>
          <h2 className="mb-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
            Every Dollar Covers This
          </h2>
          <p className="mb-8 text-[14px] leading-relaxed text-slate-500">
            Unlike some inspectors who charge extra for the report, our price includes everything. One price, no surprises.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "200+ Point Inspection", body: "Every accessible system documented — roof to foundation, electrical to plumbing, HVAC to insulation." },
              { title: "Same-Day Written Report", body: "Delivered the same day as the inspection. Color photos, severity ratings, and plain-English findings." },
              { title: "On-Site Walk-Through", body: "Larry explains findings in real time. You leave understanding what you're buying — not just with a PDF." },
              { title: "Alaska-Specific Checks", body: "Ice dam risk, permafrost settlement, freeze/thaw damage, and seismic vulnerability — built into every inspection." },
              { title: "1-Hour Response Guarantee", body: "Every quote request and booking confirmed within 1 business hour. No waiting, no guessing." },
              { title: "Negotiation-Ready Format", body: "Findings severity-coded: Critical, Monitor, Acceptable — ready to support your negotiation before contingency expires." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/[0.07] bg-[#040D1A] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-[#3B82F6]" />
                  <p className="text-[14px] font-bold text-white">{item.title}</p>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/what-does-home-inspection-include"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#3B82F6] hover:gap-3 hover:text-[#60A5FA] transition-all duration-200"
            >
              See the full 200+ point inspection checklist <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section className="bg-[#040D1A] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Price Factors</p>
          <h2 className="mb-8 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
            What Affects the Final Cost
          </h2>
          <div className="space-y-4">
            {costFactors.map((f, i) => (
              <div key={f.title} className="flex gap-5 rounded-xl border border-white/[0.07] bg-[#07111F] p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[12px] font-bold text-[#60A5FA]">
                  {i + 1}
                </div>
                <div>
                  <p className="mb-1 text-[14px] font-bold text-white">{f.title}</p>
                  <p className="text-[13px] leading-relaxed text-slate-500">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI SECTION — Cost vs. Not Inspecting */}
      <section className="bg-[#07111F] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">The Real Question</p>
          <h2 className="mb-5 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
            Is a $400 Inspection Worth It?
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-slate-400">
            A home inspection costs $350–$500. In Alaska, where permafrost movement, ice dam damage, and aging heating systems are common, the average repair negotiation or credit after an inspection is <strong className="text-white">$2,000–$15,000</strong>.
          </p>
          <div className="grid gap-5 sm:grid-cols-3 mb-8">
            {[
              { label: "Average inspection cost", value: "$350–$500", sub: "One-time fee" },
              { label: "Average repair negotiation", value: "$3,000–$10K", sub: "After inspection findings" },
              { label: "Cost of missing a major issue", value: "$10K–$50K+", sub: "Foundation, HVAC, roof" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/[0.07] bg-[#040D1A] p-5 text-center">
                <p className="text-[22px] font-bold text-[#60A5FA] mb-1">{stat.value}</p>
                <p className="text-[12px] font-semibold text-white mb-1">{stat.label}</p>
                <p className="text-[11px] text-slate-600">{stat.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] leading-relaxed text-slate-500">
            Alaska-specific hazards — permafrost movement, ice dam water infiltration, aging boilers, and freeze/thaw foundation damage — are often invisible to buyers. Larry McBain built Alaska homes for 38+ years before inspecting them. He knows where to look.
          </p>
        </div>
      </section>

      {/* CTA CARD */}
      <section className="bg-[#030912] py-14 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <div className="rounded-2xl border border-[#2563EB]/25 bg-[#2563EB]/[0.06] p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="mb-2 font-display text-[22px] font-bold text-white">Get Your Exact Price</h2>
                <p className="text-[14px] text-slate-400">Call or book online — we respond within 1 business hour with your quote and availability.</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                <a
                  href="tel:+19072233725"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-[#1d4ed8] whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" /> (907) 223-3725
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-7 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.05] whitespace-nowrap"
                >
                  Book Online <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#040D1A] py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">FAQ</p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
              Anchorage Home Inspection Pricing Questions
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
          <div className="mt-10 rounded-xl border border-white/[0.07] bg-[#07111F] p-6">
            <p className="mb-2 text-[13px] font-semibold text-white">Related Pages</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Home Inspection Anchorage", href: "/home-inspection-anchorage" },
                { label: "What's Included in an Inspection", href: "/what-does-home-inspection-include" },
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
