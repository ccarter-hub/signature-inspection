import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  FileText,
  Download,
  Camera,
} from "lucide-react";

const findings = [
  {
    sev: "CRITICAL",
    icon: <XCircle className="h-3 w-3" />,
    cls: "bg-red-500/15 text-red-300 border border-red-500/25",
    label: "Attic: Ice dam risk — eave insulation R-12 vs. R-38 required",
    note: "Repair before next heating season · Contractor quotes recommended",
    pulse: true,
  },
  {
    sev: "CRITICAL",
    icon: <XCircle className="h-3 w-3" />,
    cls: "bg-red-500/15 text-red-300 border border-red-500/25",
    label: "Electrical: Federal Pacific Stab-Lok panel — documented fire risk",
    note: "Replace panel — recommend licensed electrician quote",
    pulse: true,
  },
  {
    sev: "MONITOR",
    icon: <AlertTriangle className="h-3 w-3" />,
    cls: "bg-amber-500/15 text-amber-300 border border-amber-500/25",
    label: "Foundation NE corner: 0.75\" differential settlement noted",
    note: "Monitor annually — escalate if change exceeds 0.25\"",
    pulse: false,
  },
  {
    sev: "MONITOR",
    icon: <AlertTriangle className="h-3 w-3" />,
    cls: "bg-amber-500/15 text-amber-300 border border-amber-500/25",
    label: "Furnace: Unit 17 yrs old, heat exchanger shows early wear",
    note: "Budget replacement within 2–3 seasons",
    pulse: false,
  },
  {
    sev: "ACCEPTABLE",
    icon: <CheckCircle2 className="h-3 w-3" />,
    cls: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25",
    label: "Plumbing: No active leaks, freeze-proof hose bibs installed",
    note: "",
    pulse: false,
  },
];

export default function ReportPreview() {
  return (
    <section className="bg-[#040D1A] py-16 md:py-28 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid items-center gap-10 md:gap-16 md:grid-cols-2">

          {/* LEFT: Copy */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
              Deliverable
            </p>
            <h2
              className="mb-5 font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              Your Negotiating<br className="hidden md:block" /> Weapon —{" "}
              <span className="text-[#60A5FA]">Delivered Same Day.</span>
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-slate-400">
              Most reports are dense PDFs that agents dread reading. Ours are built
              for buyers — organized by severity, packed with photos, written in plain
              English. Delivered hours after the inspection, before your re-inspection
              window closes.
            </p>

            <ul className="mb-9 space-y-4">
              {[
                { icon: <FileText className="h-4 w-4 text-[#60A5FA]" />, text: "200+ items documented with color photos" },
                { icon: <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />, text: "Color-coded severity: Critical / Monitor / Acceptable" },
                { icon: <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />, text: "Plain-language findings — zero inspector jargon" },
                { icon: <Camera className="h-4 w-4 text-[#60A5FA]" />, text: "Photo evidence attached to every finding" },
                { icon: <Clock className="h-4 w-4 text-[#60A5FA]" />, text: "Delivered same day — ready for re-inspection windows" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[14px] text-slate-300">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#2563EB]/20 bg-[#2563EB]/10">
                    {icon}
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            <Link
              href="/blog/what-does-a-home-inspection-include-in-alaska"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#3B82F6] transition-all duration-200 hover:gap-3 hover:text-[#60A5FA]"
            >
              See what a full inspection covers <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* RIGHT: Report mockup */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-3xl bg-[#2563EB]/[0.06] blur-3xl pointer-events-none" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] shadow-[0_40px_80px_rgba(0,0,0,0.65)]">
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent" />

              {/* App header */}
              <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#07111F] px-5 py-4">
                <div>
                  <p className="text-[13px] font-bold text-white">Inspection Report</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">1842 Birch Ave · Anchorage, AK 99503</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 rounded-lg border border-white/[0.10] bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-slate-400 transition-colors duration-150 hover:border-white/[0.18] hover:text-white">
                    <Download className="h-3 w-3" /> PDF
                  </button>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      <p className="text-[10px] font-semibold text-emerald-300">Delivered same day</p>
                    </div>
                    <p className="text-[10px] text-slate-600">ASHI · Larry McBain</p>
                  </div>
                </div>
              </div>

              {/* Severity summary */}
              <div className="flex items-center gap-5 border-b border-white/[0.05] bg-[#040D1A] px-5 py-3">
                {[
                  { dot: "bg-red-400", label: "2 Critical", cls: "text-red-300", ring: "ring-1 ring-red-500/30" },
                  { dot: "bg-amber-400", label: "3 Monitor", cls: "text-amber-300", ring: "" },
                  { dot: "bg-emerald-400", label: "46 Acceptable", cls: "text-emerald-300", ring: "" },
                ].map(({ dot, label, cls, ring }) => (
                  <div key={label} className={`flex items-center gap-1.5 rounded-md px-2 py-1 ${ring}`}>
                    <span className={`h-2 w-2 rounded-full ${dot}`} />
                    <span className={`text-[11px] font-bold ${cls}`}>{label}</span>
                  </div>
                ))}
                <span className="ml-auto text-[10px] text-slate-600">51 items</span>
              </div>

              {/* Findings list */}
              <div className="space-y-1.5 bg-[#030912] p-4">
                {findings.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 transition-colors duration-150 hover:bg-white/[0.04] ${
                      item.pulse ? "ring-1 ring-red-500/10" : ""
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-0.5 text-[9px] font-bold whitespace-nowrap ${item.cls}`}
                    >
                      {item.pulse && (
                        <span className="mr-0.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                      )}
                      {item.icon}
                      {item.sev}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium leading-snug text-slate-200">{item.label}</p>
                      {item.note && (
                        <p className="mt-0.5 text-[10px] leading-relaxed text-slate-600">{item.note}</p>
                      )}
                    </div>
                  </div>
                ))}
                <p className="pt-1 text-center text-[11px] text-slate-700">
                  + 46 more items documented with photos
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#07111F] px-5 py-3">
                <span className="text-[11px] text-slate-600">51 items inspected</span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" /> Delivered same day
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
