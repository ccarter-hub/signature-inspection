import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does a Home Inspection Cost in Anchorage, Alaska? | Signature Inspection",
  description:
    "Typical home inspection costs in Anchorage range from $400–$600. Learn what affects the price, what add-ons are worth it, and why cheap inspections cost more in the long run.",
  alternates: {
    canonical:
      "https://signatureinspectionservice.com/blog/home-inspection-cost-anchorage-alaska",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a home inspection cost in Anchorage, Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most single-family home inspections in Anchorage cost between $400 and $600. Price varies based on square footage, age of home, and add-on services. Larger or older homes typically run $550–$700+.",
      },
    },
    {
      "@type": "Question",
      name: "How much does radon testing cost in Anchorage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Radon testing in Anchorage typically adds $150–$200 to an inspection. It requires a 48-hour continuous monitor placement and a separate report.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use the cheapest inspector I can find?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A home inspection costs 0.1% of the purchase price but protects 100% of your investment. An inspector who misses a $15,000 ice dam problem or a cracked heat exchanger has cost you far more than the few hundred dollars you saved on price.",
      },
    },
    {
      "@type": "Question",
      name: "What does ASHI certification mean for a home inspector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ASHI (American Society of Home Inspectors) Certified Inspector status requires passing a rigorous exam, completing a minimum number of paid inspections, adhering to the ASHI Standards of Practice, and maintaining continuing education. It's the most widely recognized professional credential for home inspectors.",
      },
    },
  ],
};

export default function ArticleCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="bg-[#0B1220] text-white py-16 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-[#3B82F6] text-xs font-semibold hover:text-blue-300 transition-colors">
              ← Inspection Resources
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#EFF6FF]/10 text-[#93C5FD] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide border border-blue-400/20">
              Pricing
            </span>
            <span className="text-slate-400 text-xs">5 min read</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
            How Much Does a Home Inspection Cost in Anchorage, Alaska?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            The honest breakdown — what you should expect to pay, what moves the price, and why this is not where to cut corners.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/[0.08]">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm">L</div>
            <div>
              <p className="text-white text-sm font-semibold">Larry McBain</p>
              <p className="text-slate-400 text-xs">ASHI Certified Inspector · 38+ years Alaska construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12">

          {/* Price summary box */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-6 mb-10">
            <p className="text-[#15803D] text-xs font-bold uppercase tracking-widest mb-3">Quick Answer</p>
            <p className="text-[#0F172A] text-2xl font-bold mb-1">$400 – $600</p>
            <p className="text-[#374151] text-sm">Typical range for a single-family home in Anchorage. Condo/townhouse: $350–$450. Larger or older homes: $550–$750+.</p>
          </div>

          <p className="text-[#374151] text-lg leading-relaxed mb-6">
            Home inspection pricing in Anchorage is fairly predictable once you understand the two main factors: square footage and the inspector's credentials. Here's a transparent breakdown of what you'll pay and what you get.
          </p>

          {/* Table of Contents */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
            <p className="text-[#0F172A] font-bold text-sm mb-3 uppercase tracking-wider">In This Article</p>
            <ol className="space-y-1.5">
              {[
                ["#typical-costs", "Typical Inspection Costs in Anchorage"],
                ["#what-affects-price", "What Affects the Price"],
                ["#add-ons", "Worth-It Add-Ons"],
                ["#cheap-inspector", "Why Cheap Inspections Cost More"],
                ["#ashi", "What ASHI Certification Means"],
                ["#faq", "Frequently Asked Questions"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[#2563EB] text-sm hover:underline">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          {/* Typical Costs */}
          <section id="typical-costs" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Typical Inspection Costs in Anchorage</h2>
            <p className="text-[#374151] leading-relaxed mb-5">
              Based on current market rates from ASHI-certified and licensed inspectors in the Anchorage bowl and surrounding areas:
            </p>
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <th className="text-left px-5 py-3 font-semibold text-[#0F172A]">Property Type</th>
                    <th className="text-left px-5 py-3 font-semibold text-[#0F172A]">Sq. Footage</th>
                    <th className="text-left px-5 py-3 font-semibold text-[#0F172A]">Typical Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {[
                    ["Condo / Townhouse", "Under 1,200 sq ft", "$350 – $450"],
                    ["Small SFR", "1,200 – 1,800 sq ft", "$400 – $500"],
                    ["Mid-size SFR", "1,800 – 2,800 sq ft", "$450 – $575"],
                    ["Large SFR", "2,800 – 4,000 sq ft", "$550 – $650"],
                    ["Larger / Complex", "4,000+ sq ft", "$650 – $800+"],
                    ["New Construction", "Any size", "$400 – $600"],
                  ].map(([type, sqft, cost]) => (
                    <tr key={type} className="bg-white hover:bg-[#F8FAFC] transition-colors">
                      <td className="px-5 py-3 text-[#0F172A] font-medium">{type}</td>
                      <td className="px-5 py-3 text-[#64748B]">{sqft}</td>
                      <td className="px-5 py-3 text-[#0F172A] font-semibold">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#94A3B8] text-xs mt-3">Add $20–$50 for properties in Eagle River, Wasilla, Palmer, or further outlying areas.</p>
          </section>

          {/* What Affects Price */}
          <section id="what-affects-price" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">What Affects the Price</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Square footage",
                  body: "The primary driver. More square footage = more systems, more components, more time. A 4,000 sq ft home takes twice as long to inspect as a 1,500 sq ft home.",
                },
                {
                  title: "Age of the home",
                  body: "Older homes (pre-1980) often have more deferred maintenance, outdated electrical panels, galvanized plumbing, and original roofing materials. These take more time to document thoroughly.",
                },
                {
                  title: "Complexity of systems",
                  body: "Radiant heat, multiple HVAC systems, generator hookups, well and septic, detached structures, and complex rooflines all add time and therefore cost.",
                },
                {
                  title: "Inspector credentials",
                  body: "An ASHI Certified Inspector with 20+ years of Alaska-specific construction experience is not going to price at the bottom of the market. That expertise is what you're paying for.",
                },
                {
                  title: "Geographic location",
                  body: "Travel time outside Anchorage proper — Eagle River, Chugiak, Wasilla, Palmer, Girdwood — typically adds a modest travel surcharge.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-1.5 flex-shrink-0 rounded-full bg-[#2563EB] mt-1.5 self-stretch" />
                  <div>
                    <p className="font-semibold text-[#0F172A] mb-1">{title}</p>
                    <p className="text-[#64748B] text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons */}
          <section id="add-ons" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Worth-It Add-Ons</h2>
            <p className="text-[#374151] leading-relaxed mb-5">
              These services aren't included in a standard inspection but can be worth adding — especially for Alaska buyers.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Radon Testing",
                  cost: "+ $150–$200",
                  rec: "Strongly recommended",
                  recCls: "text-emerald-700 bg-emerald-50",
                  body: "Radon is the #2 cause of lung cancer after smoking. Alaska has elevated radon geology in many areas. 48-hour continuous monitor test. Worth every dollar.",
                },
                {
                  name: "Sewer Scope",
                  cost: "+ $175–$250",
                  rec: "Recommended 15+ yrs old",
                  recCls: "text-blue-700 bg-blue-50",
                  body: "Camera inspection of the underground drain line from house to city sewer. Catches root intrusion, cracks, and pitch problems before they become $8,000–$20,000 replacements.",
                },
                {
                  name: "Mold Testing",
                  cost: "+ $200–$400",
                  rec: "Situational",
                  recCls: "text-slate-600 bg-slate-100",
                  body: "If visible moisture damage or musty odors are present. Air sampling sent to a lab. Not needed on every inspection but valuable when red flags exist.",
                },
                {
                  name: "Oil Tank Sweep",
                  cost: "+ $150–$300",
                  rec: "Older homes",
                  recCls: "text-amber-700 bg-amber-50",
                  body: "Homes heated by oil before natural gas expansion may have abandoned underground storage tanks. A buried leaking tank is a serious liability — environmental cleanup runs $10,000–$50,000+.",
                },
              ].map(({ name, cost, rec, recCls, body }) => (
                <div key={name} className="border border-[#E2E8F0] rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-bold text-[#0F172A]">{name}</p>
                    <p className="text-[#2563EB] font-semibold text-sm flex-shrink-0">{cost}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${recCls}`}>{rec}</span>
                  <p className="text-[#64748B] text-sm leading-relaxed mt-3">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cheap inspector */}
          <section id="cheap-inspector" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Why Cheap Inspections Cost More</h2>
            <p className="text-[#374151] leading-relaxed mb-4">
              A home inspection is 0.1% of the purchase price. On a $500,000 home, that's $500. Here's the math on cutting that cost:
            </p>
            <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-6 mb-5">
              <p className="text-[#92400E] font-bold mb-3">Real scenarios from Alaska homes:</p>
              <ul className="space-y-3">
                {[
                  ["Missed ice dam risk", "$8,000–$18,000 in roof/ceiling/insulation repairs the first winter"],
                  ["Cracked heat exchanger", "$2,500–$4,500 furnace replacement — plus CO exposure risk"],
                  ["Permafrost settlement", "$25,000–$80,000 foundation remediation if caught late"],
                  ["Failed sewer line", "$8,000–$22,000 replacement — not caught without a scope"],
                  ["Buried oil tank", "$15,000–$50,000 environmental cleanup liability"],
                ].map(([issue, cost]) => (
                  <li key={issue} className="flex gap-3 text-sm">
                    <span className="text-amber-600 flex-shrink-0 mt-0.5">⚠</span>
                    <span><span className="font-semibold text-[#0F172A]">{issue}:</span> <span className="text-[#374151]">{cost}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[#374151] leading-relaxed">
              An inspector who charges $50 less than the market rate and misses one of the above items has cost you orders of magnitude more than you saved. The inspection fee is the cheapest insurance you can buy in a real estate transaction.
            </p>
          </section>

          {/* ASHI */}
          <section id="ashi" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">What ASHI Certification Actually Means</h2>
            <p className="text-[#374151] leading-relaxed mb-5">
              Alaska requires home inspectors to be licensed — but licensing is a minimum floor. ASHI certification is a significantly higher standard.
            </p>
            <div className="bg-[#0B1220] rounded-2xl p-6">
              <p className="text-slate-300 text-sm font-bold uppercase tracking-widest mb-4">ASHI Certified Inspector requires:</p>
              <ul className="space-y-3">
                {[
                  "Passing the National Home Inspector Examination (NHIE)",
                  "Completing 250+ paid fee inspections under supervision",
                  "Adherence to ASHI Standards of Practice and Code of Ethics",
                  "Annual continuing education to maintain certification",
                  "Peer review and professional accountability",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-[#60A5FA] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-400 text-xs mt-4 pt-4 border-t border-white/10">
                Larry McBain — ASHI Certified Inspector, 38+ years Alaska construction experience. Ask to see the certificate.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-6">Frequently Asked Questions</h2>
            <div className="divide-y divide-[#E2E8F0] border border-[#E2E8F0] rounded-2xl overflow-hidden">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="p-5">
                  <p className="font-semibold text-[#0F172A] mb-2">{item.name}</p>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-bold text-[#1E40AF] mb-2">Get Your Inspection Scheduled</h3>
            <p className="text-[#3B82F6] text-sm mb-5">ASHI Certified. Same-day reports. 1-hour response guarantee.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+19072233725"
                className="bg-[#2563EB] text-white font-bold px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150"
              >
                Call (907) 223-3725
              </a>
              <Link
                href="/contact"
                className="border-2 border-[#2563EB] text-[#2563EB] font-bold px-6 py-3 rounded-xl hover:bg-[#2563EB] hover:text-white transition-all duration-150"
              >
                Book Online →
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
