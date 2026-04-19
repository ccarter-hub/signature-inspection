import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const issues = [
  {
    severity: "CRITICAL",
    severityColor: "#EF4444",
    title: "Active Ice Dam Water Intrusion",
    found: "Found in 1 of 3 Anchorage inspections",
    detail:
      "Ice dams force meltwater under shingles, rotting sheathing and soaking insulation. Most sellers don't know it's there. Most inspectors don't look for the right signs.",
    impact: "Repair cost: $4,000 – $18,000",
  },
  {
    severity: "CRITICAL",
    severityColor: "#EF4444",
    title: "Permafrost-Driven Foundation Movement",
    found: "Regular finding in older Anchorage neighborhoods",
    detail:
      "Soil heave from freeze/thaw cycles cracks stem walls and piers. Larry reads settlement patterns the way a structural engineer does — because he built these foundations.",
    impact: "Repair cost: $8,000 – $40,000+",
  },
  {
    severity: "HIGH",
    severityColor: "#F97316",
    title: "Under-Insulated Attics (Below Alaska Code)",
    found: "Found in majority of pre-1990 homes",
    detail:
      "Alaska requires R-49 minimum. Most older attics run R-19 to R-30. The result: $200+/month in heating loss and ice dam risk every winter.",
    impact: "Energy cost: $2,400/year · Insulation fix: $3,500–$8,000",
  },
  {
    severity: "HIGH",
    severityColor: "#F97316",
    title: "Outdated Electrical Panel (60-Amp or Fused)",
    found: "Common in pre-1980 Anchorage homes",
    detail:
      "60-amp panels can't support modern loads and create fire risk. Many lenders and insurers require upgrade before closing.",
    impact: "Panel upgrade: $2,500 – $5,000",
  },
  {
    severity: "MODERATE",
    severityColor: "#EAB308",
    title: "Elevated Radon (Above EPA Action Level)",
    found: "Affects roughly 1 in 5 Anchorage homes tested",
    detail:
      "Radon is odorless and invisible. Anchorage levels run above the national average due to granite bedrock. A $125 test can protect your family permanently.",
    impact: "Mitigation system: $1,200 – $2,500",
  },
  {
    severity: "MODERATE",
    severityColor: "#EAB308",
    title: "Failing Water Heater (Corrosion + Improper Relief Valve)",
    found: "Found in homes 10+ years old",
    detail:
      "Corroded anode rods, inadequate pressure relief valve placement, and improper seismic strapping — all standard Alaska inspection catches that others miss.",
    impact: "Replacement: $1,200 – $2,800",
  },
];

export default function RealWorldProof() {
  return (
    <section className="border-t border-white/[0.04] bg-[#040D1A] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
            Real Inspection Findings
          </p>
          <h2
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
          >
            What Larry Finds That Others Miss
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[14px] leading-relaxed text-slate-500">
            These are real issue categories from Anchorage home inspections. Each one is a negotiating lever —
            or a disaster waiting to happen if the inspector doesn&rsquo;t know what to look for.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-[#07111F] p-5 transition-all duration-200 hover:border-white/[0.14]"
            >
              {/* Severity badge */}
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest"
                  style={{ background: `${issue.severityColor}18`, color: issue.severityColor }}
                >
                  {issue.severity}
                </span>
                <AlertTriangle className="h-3.5 w-3.5" style={{ color: issue.severityColor }} />
              </div>

              <h3 className="mb-1.5 text-[15px] font-bold text-white">{issue.title}</h3>
              <p className="mb-3 text-[11px] font-semibold text-[#3B82F6]">{issue.found}</p>
              <p className="mb-4 flex-1 text-[13px] leading-relaxed text-slate-400">{issue.detail}</p>

              {/* Impact */}
              <div className="rounded-lg border border-white/[0.06] bg-[#030912] px-3.5 py-2.5">
                <p className="text-[11px] text-slate-600">Typical impact</p>
                <p className="text-[12px] font-bold text-slate-300">{issue.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-[#2563EB]/20 bg-[#2563EB]/[0.05] p-7 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="mb-1 text-[16px] font-bold text-white">
              Every inspection covers 200+ points — including all of the above.
            </p>
            <p className="text-[13px] text-slate-500">
              You get a same-day written report with photos, severity ratings, and plain-English explanations.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_0_24px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              Book Your Inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/what-does-home-inspection-include"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.05]"
            >
              Full Checklist →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
