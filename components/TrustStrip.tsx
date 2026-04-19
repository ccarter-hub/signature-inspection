import { Star, ShieldCheck, Clock, Wrench, FileCheck } from "lucide-react";

const stats = [
  {
    icon: <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />,
    value: "5.0 Stars",
    sub: "47 Google reviews",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-[#60A5FA]" />,
    value: "ASHI Certified",
    sub: "National standard",
  },
  {
    icon: <Clock className="h-4 w-4 text-[#60A5FA]" />,
    value: "1-Hr Response",
    sub: "Guaranteed callback",
  },
  {
    icon: <FileCheck className="h-4 w-4 text-[#60A5FA]" />,
    value: "Same-Day Report",
    sub: "Delivered by evening",
  },
  {
    icon: <Wrench className="h-4 w-4 text-[#60A5FA]" />,
    value: "38+ Years",
    sub: "Alaska construction",
  },
];

export default function TrustStrip() {
  return (
    <div className="border-y border-white/[0.05] bg-[#040D1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-10">
        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-px sm:hidden">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`flex items-center gap-3 px-4 py-4 ${
                i === stats.length - 1 && stats.length % 2 !== 0
                  ? "col-span-2 border-t border-white/[0.04]"
                  : i >= 2 ? "border-t border-white/[0.04]" : ""
              }`}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03]">
                {s.icon}
              </div>
              <div className="min-w-0">
                <p className="truncate text-[12px] font-bold leading-tight text-white">{s.value}</p>
                <p className="truncate text-[10px] text-slate-600">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal row */}
        <div className="hidden sm:flex items-stretch overflow-x-auto">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`flex flex-1 items-center gap-3 px-5 py-5 min-w-[150px] ${
                i < stats.length - 1 ? "border-r border-white/[0.05]" : ""
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03]">
                {s.icon}
              </div>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-bold leading-tight text-white">{s.value}</p>
                <p className="truncate text-[11px] text-slate-600">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
