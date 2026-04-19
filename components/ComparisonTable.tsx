import { CheckCircle2, XCircle, Minus } from "lucide-react";

const rows = [
  {
    feature: "Google Rating",
    us: "5.0 ★ (47 reviews)",
    them: "3.8 – 4.5 ★",
    usGood: true,
  },
  {
    feature: "ASHI Certified",
    us: "Yes — national exam + 250 inspections",
    them: "Often uncertified or self-certified",
    usGood: true,
  },
  {
    feature: "Report Delivery",
    us: "Same day — before contingency closes",
    them: "24 – 72 hours (some longer)",
    usGood: true,
  },
  {
    feature: "Response Guarantee",
    us: "1-hour response, every request",
    them: "No guarantee — often next day",
    usGood: true,
  },
  {
    feature: "Pricing Transparency",
    us: "Published online — no surprises",
    them: "Most don't publish prices",
    usGood: true,
  },
  {
    feature: "Alaska Construction Background",
    us: "38+ years general contracting",
    them: "Typically inspection-only training",
    usGood: true,
  },
  {
    feature: "Ice Dam & Permafrost Checks",
    us: "Standard — every inspection",
    them: "Often overlooked or extra cost",
    usGood: true,
  },
  {
    feature: "On-Site Walk-Through Explanation",
    us: "Always included",
    them: "Rare — report only",
    usGood: true,
  },
];

export default function ComparisonTable() {
  return (
    <section className="border-t border-white/[0.04] bg-[#030912] py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
            Why Signature
          </p>
          <h2
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
          >
            Us vs. The Rest
          </h2>
          <p className="mt-3 text-[14px] text-slate-500">
            Not all inspectors are the same. Here&rsquo;s what actually differs.
          </p>
        </div>

        {/* Mobile — 2 stacked cards */}
        <div className="md:hidden space-y-4">
          {[
            {
              label: "Signature Inspection",
              sub: "ASHI Certified · Anchorage",
              items: [
                "Same day — before contingency closes",
                "5.0 ★ (47 reviews)",
                "Yes — national exam + 250 inspections",
                "38+ years general contracting",
              ],
              good: true,
            },
            {
              label: "Typical Inspectors",
              sub: "Anchorage area average",
              items: [
                "24 – 72 hours (some longer)",
                "3.8 – 4.5 ★",
                "Often uncertified or self-certified",
                "Typically inspection-only training",
              ],
              good: false,
            },
          ].map((col) => (
            <div
              key={col.label}
              className={`overflow-hidden rounded-2xl border ${col.good ? "border-[#2563EB]/30 bg-[#2563EB]/[0.05]" : "border-white/[0.08] bg-[#040D1A]"}`}
            >
              <div className={`px-5 py-4 ${col.good ? "bg-[#2563EB]/[0.10]" : ""}`}>
                <p className={`text-[13px] font-bold ${col.good ? "text-[#60A5FA]" : "text-slate-400"}`}>{col.label}</p>
                <p className={`text-[11px] ${col.good ? "text-[#3B82F6]" : "text-slate-600"}`}>{col.sub}</p>
              </div>
              {[
                "Report Delivery",
                "Google Rating",
                "ASHI Certified",
                "Alaska Background",
              ].map((feature, i) => (
                <div key={feature} className="flex items-start gap-3 border-t border-white/[0.05] px-5 py-3.5">
                  {col.good ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500/60" />
                  )}
                  <div>
                    <p className="text-[11px] text-slate-600">{feature}</p>
                    <p className={`text-[13px] ${col.good ? "text-slate-200" : "text-slate-500"}`}>{col.items[i]}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop — 3-column table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-white/[0.08]">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#07111F]">
            <div className="px-5 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-600">
              Feature
            </div>
            <div className="border-l border-white/[0.06] bg-[#2563EB]/[0.08] px-5 py-4">
              <p className="text-[12px] font-bold text-[#60A5FA]">Signature Inspection</p>
              <p className="text-[10px] text-[#3B82F6]">ASHI Certified · Anchorage</p>
            </div>
            <div className="border-l border-white/[0.06] px-5 py-4">
              <p className="text-[12px] font-semibold text-slate-500">Other Inspectors</p>
              <p className="text-[10px] text-slate-700">Anchorage area average</p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_1fr_1fr] border-t border-white/[0.05] ${
                i % 2 === 0 ? "bg-[#040D1A]" : "bg-[#030912]"
              }`}
            >
              <div className="flex items-center px-5 py-4 text-[13px] font-semibold text-slate-300">
                {row.feature}
              </div>
              <div className="flex items-start gap-2.5 border-l border-white/[0.05] bg-[#2563EB]/[0.04] px-5 py-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-[13px] text-slate-200">{row.us}</span>
              </div>
              <div className="flex items-start gap-2.5 border-l border-white/[0.05] px-5 py-4">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500/60" />
                <span className="text-[13px] text-slate-500">{row.them}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[12px] text-slate-700">
          Based on publicly available information about Anchorage-area inspection services.
        </p>
      </div>
    </section>
  );
}
