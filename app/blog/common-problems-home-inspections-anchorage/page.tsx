import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Common Problems Found During Home Inspections in Anchorage | Signature Inspection",
  description:
    "Ice dam risk, permafrost settlement, aging electrical panels, freeze-thaw plumbing damage — the most common defects found in Anchorage homes during inspection. Written by ASHI Certified inspector Larry McBain.",
  alternates: {
    canonical:
      "https://signatureinspectionservice.com/blog/common-problems-home-inspections-anchorage",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the most common problem found in Anchorage home inspections?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ice dam risk — inadequate attic insulation and air sealing — is the most consistently found issue in Anchorage homes. It's present in the majority of older homes inspected and can result in $8,000–$18,000 in winter damage if not addressed.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if an Anchorage home has permafrost issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Signs include unlevel or bouncy floors, doors and windows that stick or won't close properly, diagonal cracks running from the corners of door and window frames, and visible foundation displacement or tilting. A professional inspection with a digital level is the definitive way to assess it.",
      },
    },
    {
      "@type": "Question",
      name: "Are Federal Pacific electrical panels common in Anchorage homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Federal Pacific Stab-Lok panels were widely installed in Anchorage homes from the 1950s through the 1980s and are still present in many older properties. These panels have a documented history of breaker failure and are considered a fire hazard by the electrical safety industry.",
      },
    },
    {
      "@type": "Question",
      name: "Do Anchorage homes need radon testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, radon testing is strongly recommended for any Anchorage home purchase. Alaska's geology and soil types create elevated radon potential in many areas. Radon is odorless, invisible, and the second leading cause of lung cancer in the US. Testing requires a separate 48-hour continuous monitor test.",
      },
    },
  ],
};

const problems = [
  {
    id: "ice-dams",
    title: "Ice Dam Risk",
    severity: "HIGH",
    sevCls: "bg-red-100 text-red-700",
    frequency: "Found in majority of pre-2000 homes",
    summary:
      "The single most common major defect in Anchorage homes. Ice dams form when attic heat warms the roof deck, melts snow, and the meltwater refreezes at the cold eave — backing up under shingles and leaking into the structure.",
    howWeFind:
      "I check attic insulation depth, air sealing quality (bypasses at top plates, light fixtures, and wall cavities), eave overhang geometry, and the presence or absence of ice-and-water shield membrane at eaves.",
    signs: [
      "Insulation depth under 10 inches in attic (R-30 minimum for Alaska)",
      "Uninsulated or poorly insulated attic hatch",
      "Open top plates allowing warm air into attic space",
      "Staining at exterior eaves or interior ceilings near exterior walls",
      "Lack of ice-and-water shield on lower 3–6 feet of roof",
    ],
    cost: "$8,000–$18,000 in roof, fascia, and interior ceiling repairs if ignored",
  },
  {
    id: "permafrost",
    title: "Permafrost Settlement & Frost Heave",
    severity: "HIGH",
    sevCls: "bg-red-100 text-red-700",
    frequency: "Present in specific Anchorage neighborhoods and lot types",
    summary:
      "Permafrost — permanently frozen ground — underlies some parts of the Anchorage area, particularly near wetlands, low-elevation lots, and north-facing hillsides. As climate warms and structures generate heat, permafrost thaws and the ground settles unevenly. Frost-susceptible soils can also heave seasonally.",
    howWeFind:
      "I walk all floors with a digital level, check for differential foundation movement, inspect for diagonal cracking patterns at door/window corners (classic settlement indicator), and evaluate slope of the structure.",
    signs: [
      "Floors that slope more than 1 inch over 8 feet",
      "Doors or windows that stick, won't latch, or show uneven gaps",
      "Diagonal cracks radiating from corners of window and door frames",
      "Visible foundation displacement, tilting, or separation",
      "Gaps between structure and exterior grade on one side",
    ],
    cost: "$25,000–$80,000+ for foundation remediation or mudjacking",
  },
  {
    id: "electrical",
    title: "Aging Electrical Panels (Federal Pacific, Zinsco)",
    severity: "HIGH",
    sevCls: "bg-red-100 text-red-700",
    frequency: "Common in homes built 1950–1985",
    summary:
      "Federal Pacific Stab-Lok and Zinsco panels were widely installed in Anchorage during the post-war building boom and are still present in a significant share of the housing stock. Both brands have documented histories of breaker failure — the breaker doesn't trip during an overcurrent event, which is a fire hazard.",
    howWeFind:
      "I identify panel brand at the service panel, check for double-tapping, aluminum branch wiring (also common in 1960s–70s Anchorage homes), proper grounding, and GFCI/AFCI protection at required locations.",
    signs: [
      "Panel labeled 'Federal Pacific', 'Stab-Lok', or 'Zinsco'/'Sylvania'",
      "Breakers that don't feel positive when tested",
      "Signs of overheating: discoloration, burning smell, tripped breakers",
      "Double-tapped breakers (two wires on one terminal)",
      "No GFCI protection at kitchen, bath, garage, and exterior outlets",
    ],
    cost: "$3,500–$8,000 for full panel replacement by a licensed electrician",
  },
  {
    id: "plumbing-freeze",
    title: "Freeze-Thaw Plumbing Damage",
    severity: "MEDIUM",
    sevCls: "bg-amber-100 text-amber-700",
    frequency: "Common in homes with exterior wall plumbing or uninsulated crawlspaces",
    summary:
      "Alaska's winters freeze supply lines in exterior walls, uninsulated crawlspaces, and cold garages. Some damage is visible (corroded fittings, water staining at repairs). Other issues — like lines that have frozen and cracked but haven't yet failed under summer pressure — are harder to find and require experience to flag.",
    howWeFind:
      "I check pipe routing in exterior walls, assess crawlspace insulation and vapor barrier, look for freeze-proof hose bibs, and note any evidence of prior freeze damage: staining, corroded fittings, mismatched patch sections.",
    signs: [
      "Supply lines routed through exterior walls without insulation",
      "Standard (non-freeze-proof) hose bibs on exterior walls",
      "Uninsulated or unheated crawlspace with water supply pipes",
      "Water staining or corroded fittings at any pipe joint",
      "Galvanized supply lines (common pre-1970, prone to interior corrosion)",
    ],
    cost: "$500–$5,000+ depending on pipe access and extent of damage",
  },
  {
    id: "hvac",
    title: "Aging Heating Systems",
    severity: "MEDIUM",
    sevCls: "bg-amber-100 text-amber-700",
    frequency: "Common in homes 15+ years old",
    summary:
      "Anchorage's heating season runs roughly October through April — 6–7 months of sustained daily use. Systems age faster here than in milder climates. The most concerning issue isn't age alone but cracked heat exchangers in gas furnaces, which allow combustion gases including CO to mix with supply air.",
    howWeFind:
      "I operate the heating system, check age plates on furnaces and water heaters, inspect flue venting for proper slope and clearances, look for evidence of flame rollout at the burner, and test CO detectors.",
    signs: [
      "Furnace or boiler over 15–20 years old",
      "Visible rust, corrosion, or soot around the burner or heat exchanger",
      "Improper flue venting: wrong slope, wrong material, inadequate clearances",
      "Absence of combustion air supply to furnace room",
      "Missing, dead-battery, or expired CO detectors",
    ],
    cost: "$2,500–$6,000 for furnace replacement; $1,500–$3,500 for boiler",
  },
  {
    id: "insulation",
    title: "Inadequate Insulation & Air Sealing",
    severity: "MEDIUM",
    sevCls: "bg-amber-100 text-amber-700",
    frequency: "Very common in pre-1990 construction",
    summary:
      "Older Anchorage homes were built to insulation standards that were inadequate even then, and many haven't been upgraded. The result is extreme heat loss, high energy bills, and — most critically — the attic air sealing failures that cause ice dams. Rim joists (the band board at the top of the foundation) are also commonly uninsulated, which is a major heat loss and freeze risk.",
    howWeFind:
      "I access the attic and inspect with a flashlight and depth gauge. I check rim joists in the basement or crawlspace and document any visible bypasses — top-plate gaps, dropped ceiling cavities, and plumbing chase penetrations.",
    signs: [
      "Attic insulation under 10 inches (R-30 minimum; R-49 recommended for Alaska)",
      "Bare rim joists — no foam or batt insulation at band board",
      "Open top plates where wall framing meets attic",
      "Can light fixtures (recessed lights) with no airtight covers",
      "Attic hatch with no insulation or weatherstripping",
    ],
    cost: "Energy upgrade: $3,000–$8,000. Ice dam repair if ignored: $8,000–$18,000",
  },
  {
    id: "radon",
    title: "Radon",
    severity: "MEDIUM",
    sevCls: "bg-amber-100 text-amber-700",
    frequency: "Cannot be detected without testing",
    summary:
      "Radon is a naturally occurring radioactive gas produced by uranium decay in soil and rock. It seeps into homes through foundation cracks, crawlspaces, and soil contact. Alaska's geology creates elevated radon potential in many areas. It's colorless, odorless, and the second leading cause of lung cancer after smoking. It cannot be detected during a visual inspection.",
    howWeFind:
      "It can't be found visually. Radon testing requires a separate 48-hour continuous monitor test (add-on service). The EPA action level is 4 pCi/L. Mitigation via sub-slab depressurization typically runs $1,200–$2,500.",
    signs: [
      "Radon cannot be detected without testing",
      "Higher risk: homes with basement or crawlspace, granite geology nearby, older construction with more cracks",
      "Only way to know: test",
    ],
    cost: "Testing: $150–$200 add-on. Mitigation if needed: $1,200–$2,500",
  },
  {
    id: "windows",
    title: "Failed Window Seals & Moisture Intrusion",
    severity: "LOW",
    sevCls: "bg-blue-100 text-blue-700",
    frequency: "Very common — especially in double-pane windows 10+ years old",
    summary:
      "Double- and triple-pane windows lose their inert gas fill over time as the edge seal fails. The result is foggy or hazy glass — a visual defect that also indicates lost insulating value. In Alaska's climate, failed window seals are common and represent real energy loss. Separately, window and door frame caulking fails regularly and allows water intrusion.",
    howWeFind:
      "I inspect all windows for seal failure (fogging between panes), proper operation (all sashes open and lock), hardware condition, and caulk at exterior frames.",
    signs: [
      "Fogged, hazy, or condensation-streaked glass between panes",
      "Cracked or missing caulk at exterior window frames and sills",
      "Staining at interior sills (water intrusion past failed exterior seal)",
      "Non-operational sashes, broken balances, or failed locks",
    ],
    cost: "$200–$500 per window for sealed unit replacement; full window: $600–$1,500+",
  },
  {
    id: "crawlspace",
    title: "Crawlspace Moisture & Vapor Barrier Failure",
    severity: "MEDIUM",
    sevCls: "bg-amber-100 text-amber-700",
    frequency: "Common in homes with crawlspaces",
    summary:
      "Crawlspaces without proper vapor barriers or adequate ventilation accumulate moisture from ground evaporation. In Alaska, this leads to wood rot, mold, and insulation damage. Crawlspaces that have been used for storage often have damaged or missing vapor barriers — and supply plumbing running through a cold, damp crawlspace is at freeze risk.",
    howWeFind:
      "I enter and fully walk all accessible crawlspace areas. I check vapor barrier coverage and condition, standing water or staining, insulation condition, pier and post condition, visible mold or efflorescence, and pipe insulation.",
    signs: [
      "Missing, torn, or incomplete vapor barrier",
      "Standing water, mud, or efflorescence (white mineral deposits) on concrete",
      "Visible mold on floor joists or subfloor",
      "Deteriorated insulation — wet, compressed, or falling",
      "Uninsulated water supply lines",
    ],
    cost: "$1,500–$6,000 for vapor barrier and drainage correction; mold remediation extra",
  },
];

export default function ArticleCommonProblemsPage() {
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
              Alaska Expertise
            </span>
            <span className="text-slate-400 text-xs">7 min read</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Common Problems Found During Home Inspections in Anchorage
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            From ice dam risk to permafrost settlement — the issues that show up again and again in Anchorage homes, with what to look for and what it costs to fix.
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

          <p className="text-[#374151] text-lg leading-relaxed mb-6">
            After 38+ years in Alaska construction and thousands of inspections, certain problems show up with remarkable consistency. Some are unique to our climate. Others are common everywhere but have Alaska-specific consequences. Here's what I find, how I find it, and what it costs when it's ignored.
          </p>

          {/* Table of Contents */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
            <p className="text-[#0F172A] font-bold text-sm mb-3 uppercase tracking-wider">Problems Covered</p>
            <div className="grid sm:grid-cols-2 gap-1.5">
              {problems.map((p) => (
                <a key={p.id} href={`#${p.id}`} className="text-[#2563EB] text-sm hover:underline flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${p.sevCls}`}>{p.severity}</span>
                  {p.title}
                </a>
              ))}
            </div>
          </div>

          {/* Problem cards */}
          <div className="space-y-12">
            {problems.map((problem, i) => (
              <section key={problem.id} id={problem.id}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-slate-400 text-sm font-mono mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="font-display text-xl font-bold text-[#0F172A]">{problem.title}</h2>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${problem.sevCls}`}>{problem.severity} FREQUENCY</span>
                    </div>
                    <p className="text-[#94A3B8] text-xs italic mb-3">{problem.frequency}</p>
                    <p className="text-[#374151] leading-relaxed mb-4">{problem.summary}</p>

                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 mb-4">
                      <p className="text-[#0F172A] font-semibold text-sm mb-2">How I find it:</p>
                      <p className="text-[#64748B] text-sm leading-relaxed">{problem.howWeFind}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-[#0F172A] font-semibold text-sm mb-2">Signs to watch for:</p>
                      <ul className="space-y-1.5">
                        {problem.signs.map((sign) => (
                          <li key={sign} className="flex gap-2.5 text-sm text-[#374151]">
                            <span className="text-[#2563EB] flex-shrink-0 mt-0.5">→</span>
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-xl px-4 py-3 flex items-start gap-2">
                      <span className="text-amber-500 flex-shrink-0 mt-0.5 text-sm">$</span>
                      <p className="text-[#92400E] text-sm"><span className="font-semibold">If ignored: </span>{problem.cost}</p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* FAQ */}
          <section className="mt-14 mb-10">
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

          {/* Related articles */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
            <p className="text-[#0F172A] font-bold text-sm mb-4 uppercase tracking-wider">More Inspection Guides</p>
            <div className="space-y-3">
              <Link href="/blog/what-does-a-home-inspection-include-in-alaska" className="flex items-center gap-3 group">
                <span className="text-[#2563EB] text-lg">→</span>
                <span className="text-[#2563EB] text-sm group-hover:underline">What Does a Home Inspection Include in Alaska?</span>
              </Link>
              <Link href="/blog/home-inspection-cost-anchorage-alaska" className="flex items-center gap-3 group">
                <span className="text-[#2563EB] text-lg">→</span>
                <span className="text-[#2563EB] text-sm group-hover:underline">How Much Does a Home Inspection Cost in Anchorage?</span>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-bold text-[#1E40AF] mb-2">Schedule an Inspection Before You Buy</h3>
            <p className="text-[#3B82F6] text-sm mb-5">ASHI Certified. Same-day reports. 38+ years Alaska construction experience.</p>
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
