import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Does a Home Inspection Include in Alaska? | Signature Inspection",
  description:
    "A complete guide to home inspection coverage in Alaska — 200+ items, Alaska-specific hazards like ice dams, permafrost, and radon. Written by ASHI Certified inspector Larry McBain.",
  alternates: {
    canonical:
      "https://signatureinspectionservice.com/blog/what-does-a-home-inspection-include-in-alaska",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many items does a home inspection cover in Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A thorough Alaska home inspection covers 200+ items across structure, roofing, exterior, electrical, plumbing, HVAC, insulation, and interiors — plus Alaska-specific hazards like ice dams, permafrost settlement, and radon.",
      },
    },
    {
      "@type": "Question",
      name: "Does a home inspection include radon testing in Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard inspections do not include radon testing — it's typically an add-on. Alaska has elevated radon risk in many areas. Signature Inspection Service offers radon testing as a separate service.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a home inspection take in Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most single-family homes take 2.5–4 hours. Larger homes, older construction, or properties with complex systems (well/septic, radiant heat, generator) take longer.",
      },
    },
    {
      "@type": "Question",
      name: "What is NOT included in a standard home inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard inspections don't include radon testing, sewer scopes, mold testing, oil tank sweeps, or invasive opening of walls. These are available as add-on services.",
      },
    },
  ],
};

const sections = [
  {
    id: "structure",
    label: "Structural Systems",
    items: [
      "Foundation type (slab, crawlspace, basement, post-and-pier)",
      "Visible foundation cracks, settling, heaving",
      "Permafrost indicators: uneven floors, sticking doors, tilting walls",
      "Floor framing, beams, and joists",
      "Wall framing and load-bearing members",
      "Roof structure: rafters, trusses, ridge board",
      "Attic structure and diagonal bracing",
    ],
  },
  {
    id: "roofing",
    label: "Roofing",
    items: [
      "Roof covering material and age estimate",
      "Shingle condition: curling, missing, granule loss",
      "Ice dam risk: eave overhangs, attic temperature differential",
      "Flashing at chimneys, valleys, walls, and penetrations",
      "Gutters and downspouts: slope, attachment, discharge",
      "Skylights: seals, flashing, condensation between panes",
      "Roof vents and exhaust terminations",
      "Chimney cap, crown, and mortar condition",
    ],
  },
  {
    id: "exterior",
    label: "Exterior",
    items: [
      "Siding condition: lap, log, stucco, T1-11",
      "Paint or stain adhesion and exposure",
      "Window and door trim — caulk gaps, rot, moisture damage",
      "Grading: soil slope away from foundation",
      "Driveway, walkways, and steps",
      "Decks and porches: ledger attachment, posts, railing height",
      "Garage door operation and auto-reverse safety function",
      "Exterior electrical outlets, lighting, GFCI",
    ],
  },
  {
    id: "electrical",
    label: "Electrical",
    items: [
      "Service entry, meter, and main disconnect",
      "Panel brand (watch for Federal Pacific, Zinsco, and Pushmatic in older Alaska homes)",
      "Breaker sizing and double-tapping",
      "Grounding and bonding",
      "Outlet presence and GFCI protection in kitchens, baths, garages, and exterior",
      "AFCI protection in bedrooms (per current code)",
      "Switch and outlet cover plates, device condition",
      "Smoke and CO detector presence (CO is critical in Alaska with combustion appliances)",
    ],
  },
  {
    id: "plumbing",
    label: "Plumbing",
    items: [
      "Water supply piping material (copper, CPVC, PEX, galvanized — galvanized is common in older Anchorage homes)",
      "Drain, waste, and vent piping material",
      "Water pressure and flow",
      "Water heater: age, temperature-pressure relief valve, seismic strapping, venting",
      "Supply line shut-offs under sinks and behind toilets",
      "Freeze protection: pipe insulation in exterior walls and crawlspaces",
      "Exterior hose bibs: freeze-proof style required in Alaska",
      "Sump pumps where applicable",
    ],
  },
  {
    id: "hvac",
    label: "Heating, Ventilation & AC",
    items: [
      "Heating system type: forced air, boiler/radiant, electric baseboard",
      "Fuel type: natural gas, oil, propane, electric",
      "Furnace or boiler age and condition",
      "Heat exchanger visual inspection (cracked heat exchangers create CO risk)",
      "Distribution: duct condition, register placement, return air",
      "Combustion air supply",
      "Flue venting: material, slope, clearances",
      "Thermostat operation",
      "Air conditioning (less common in Anchorage but present in newer homes)",
      "Ventilation: bath fans, range hood exhaust, HRV/ERV operation",
    ],
  },
  {
    id: "insulation",
    label: "Insulation & Ventilation",
    items: [
      "Attic insulation depth and type",
      "Vapor barrier presence in crawlspace",
      "Insulation at rim joists and band boards",
      "Attic air sealing (missing air sealing causes ice dams and massive heat loss in Alaska)",
      "Attic ventilation: soffit and ridge vents, baffles",
      "Cathedral ceiling insulation where visible",
      "Whole-house ventilation system (HRV/ERV) — increasingly standard in tight Alaska builds",
    ],
  },
  {
    id: "interiors",
    label: "Interiors",
    items: [
      "Ceilings: water stains, cracking, sag",
      "Walls: moisture damage, cracks, impact damage",
      "Floors: soft spots, bounce, squeaks, levelness",
      "Windows: operation, lock function, glass seal failure (foggy panes)",
      "Doors: operation, latching, threshold seals",
      "Stairs: rise/run, handrail graspability, guardrail height",
      "Kitchen: cabinet condition, countertop, sink/faucet, dishwasher, range, hood",
      "Bathrooms: tile, caulk, exhaust, toilet stability, shower pan",
      "Fireplace and wood stove: firebox, damper, hearth extension",
      "Garage: fire separation wall, self-closing door, CO considerations",
    ],
  },
];

export default function ArticleIncludesPage() {
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
              Inspection Guide
            </span>
            <span className="text-slate-400 text-xs">8 min read</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
            What Does a Home Inspection Include in Alaska?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            A complete breakdown of the 200+ items covered — plus the Alaska-specific hazards most inspectors overlook.
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

          {/* Intro */}
          <p className="text-[#374151] text-lg leading-relaxed mb-6">
            A home inspection is a systematic visual examination of a home's accessible systems and components. In Alaska, that means everything a standard inspection covers — plus a set of cold-climate hazards that are unique to our environment.
          </p>
          <p className="text-[#374151] leading-relaxed mb-8">
            This guide covers what's included in a Signature Inspection Service inspection, organized by system, with Alaska-specific callouts throughout. If you're preparing for an inspection — whether as a buyer, seller, or agent — this is what we're looking at.
          </p>

          {/* Table of Contents */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
            <p className="text-[#0F172A] font-bold text-sm mb-3 uppercase tracking-wider">In This Article</p>
            <ol className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-[#2563EB] text-sm hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
              <li><a href="#alaska-hazards" className="text-[#2563EB] text-sm hover:underline">Alaska-Specific Hazards</a></li>
              <li><a href="#not-included" className="text-[#2563EB] text-sm hover:underline">What's NOT Included</a></li>
              <li><a href="#report" className="text-[#2563EB] text-sm hover:underline">The Report</a></li>
              <li><a href="#faq" className="text-[#2563EB] text-sm hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-10">
              <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">{section.label}</h2>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#374151] leading-snug">
                    <span className="text-[#2563EB] mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Alaska Hazards */}
          <section id="alaska-hazards" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Alaska-Specific Hazards</h2>
            <p className="text-[#374151] leading-relaxed mb-6">
              These are the defects I see most often in Anchorage-area homes that a general inspector — especially one without Alaska construction background — will miss or underweight.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-[#2563EB] pl-5">
                <h3 className="font-bold text-[#0F172A] mb-1">Ice Dam Risk</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Ice dams form when attic heat warms the roof deck, melts snow, which refreezes at the cold eave. The result: water backs up under shingles and into the structure. I assess attic insulation depth, air sealing quality, eave overhang geometry, and whether existing ice-and-water shield is present. A house can look fine from outside in July and be a guaranteed ice dam every winter.
                </p>
              </div>

              <div className="border-l-4 border-[#2563EB] pl-5">
                <h3 className="font-bold text-[#0F172A] mb-1">Permafrost Settlement</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Parts of Southcentral Alaska — particularly areas near wetlands, lower elevations, and north-facing lots — can have permafrost or frost-susceptible soils. Differential settlement shows up as unlevel floors (I use a digital level), sticking doors, diagonal cracks above door corners, and visible foundation displacement. This isn't something to gloss over — it can be a six-figure remediation.
                </p>
              </div>

              <div className="border-l-4 border-[#2563EB] pl-5">
                <h3 className="font-bold text-[#0F172A] mb-1">Freeze-Thaw Plumbing Damage</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Supply lines in exterior walls, uninsulated crawlspaces, and cold garage walls are at risk in Anchorage winters. I check for insulation coverage, frost-proof hose bibs (knucklehead hose bibs that weren't replaced still show up), and evidence of prior freeze damage (corroded fittings, water staining, patched pipes).
                </p>
              </div>

              <div className="border-l-4 border-[#2563EB] pl-5">
                <h3 className="font-bold text-[#0F172A] mb-1">Radon</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Alaska has elevated radon potential in many geology types. Radon is odorless, invisible, and the second leading cause of lung cancer in the US after smoking. A standard inspection doesn't include radon testing — it requires a separate 48-hour continuous monitor test. I strongly recommend it for any home purchase, especially those with crawlspaces or basements.
                </p>
              </div>

              <div className="border-l-4 border-[#2563EB] pl-5">
                <h3 className="font-bold text-[#0F172A] mb-1">Seismic Considerations</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Anchorage is one of the most seismically active cities in North America. I note water heater seismic strapping (required by code but often missing on older units), foundation type relative to earthquake risk, and chimney condition.
                </p>
              </div>

              <div className="border-l-4 border-[#2563EB] pl-5">
                <h3 className="font-bold text-[#0F172A] mb-1">Carbon Monoxide Risk</h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Tightly sealed Alaska homes with combustion appliances (gas furnaces, boilers, gas ranges, fireplaces, wood stoves) are at CO risk, especially when exhaust venting is improper, combustion air is inadequate, or the heat exchanger is cracked. I verify CO detectors are present, operational, and within 10 feet of each sleeping room.
                </p>
              </div>
            </div>
          </section>

          {/* Not Included */}
          <section id="not-included" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">What's NOT Included in a Standard Inspection</h2>
            <p className="text-[#374151] leading-relaxed mb-5">
              Home inspections are visual and non-invasive. We don't open walls, move stored belongings, or perform laboratory tests. Here's what falls outside a standard inspection:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Radon testing", "48-hour continuous monitor test — available as add-on"],
                ["Sewer scope", "Camera inspection of underground drain line to street"],
                ["Mold testing", "Requires air sampling and lab analysis"],
                ["Oil storage tank sweep", "Underground or buried tanks require specialist"],
                ["Asbestos testing", "Lab analysis of suspect material samples"],
                ["Well & septic", "Separate specialists for water quality and septic function"],
                ["Pest/wood-destroying insects", "WDO inspection is a separate service"],
                ["Hidden/inaccessible areas", "Sealed crawlspaces, insulated areas, behind storage"],
              ].map(([title, note]) => (
                <div key={title} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                  <p className="font-semibold text-[#0F172A] text-sm mb-1">{title}</p>
                  <p className="text-[#64748B] text-xs leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Report */}
          <section id="report" className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">The Inspection Report</h2>
            <p className="text-[#374151] leading-relaxed mb-4">
              You receive your report the same day as the inspection — typically within 2 hours of completion. It's a photo-rich HTML/PDF report with findings organized by system and severity.
            </p>
            <div className="bg-[#0B1220] rounded-2xl p-6 space-y-3">
              <p className="text-slate-300 text-sm font-semibold mb-4">Report severity levels:</p>
              {[
                { sev: "CRITICAL", cls: "bg-red-500/20 text-red-300 border border-red-500/30", note: "Safety hazard or major defect — address before closing or immediately" },
                { sev: "MONITOR", cls: "bg-amber-500/20 text-amber-300 border border-amber-500/30", note: "Not urgent, but needs attention within 1–2 seasons" },
                { sev: "ACCEPTABLE", cls: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30", note: "Normal wear or minor maintenance item" },
              ].map(({ sev, cls, note }) => (
                <div key={sev} className="flex items-start gap-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5 ${cls}`}>{sev}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{note}</p>
                </div>
              ))}
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
            <h3 className="font-display text-xl font-bold text-[#1E40AF] mb-2">Ready to Schedule an Inspection?</h3>
            <p className="text-[#3B82F6] text-sm mb-5">Same-day reports. 1-hour response. ASHI Certified.</p>
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
