import Link from "next/link";
import { ShieldCheck, Clock, FileText, Phone } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-[#2563EB]" />,
    title: "ASHI Standards — or Your Fee Back",
    body: "If Larry misses a defect that falls within ASHI inspection standards and a reasonable inspector would have documented it, we'll refund your inspection fee. No argument.",
  },
  {
    icon: <Clock className="h-5 w-5 text-[#2563EB]" />,
    title: "1-Hour Response — Every Time",
    body: "Every inspection request gets a personal response from Larry within 1 business hour. If we miss that window, your inspection is discounted. Not a promise — a policy.",
  },
  {
    icon: <FileText className="h-5 w-5 text-[#2563EB]" />,
    title: "Same-Day Written Report",
    body: "Your report is delivered the same day as the inspection, complete with photos and severity ratings. If it's not, we'll expedite and discount your next service.",
  },
  {
    icon: <Phone className="h-5 w-5 text-[#2563EB]" />,
    title: "Questions After? Larry Answers.",
    body: "Your report isn't the end of the service. Larry personally answers questions after delivery — by phone or text. No gatekeeping, no support queue.",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="border-t border-white/[0.04] bg-[#07111F] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
              Risk-Free Guarantee
            </p>
            <h2
              className="mb-5 font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
            >
              If We Miss It —{" "}
              <span className="text-[#60A5FA]">We Refund It.</span>
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-slate-400">
              If Larry misses a defect covered by ASHI standards that a reasonable inspector would
              have found, we refund your fee. No argument, no process. That&rsquo;s how confident
              we are in the work.
            </p>

            {/* Trust stat row */}
            <div className="mb-8 grid grid-cols-3 gap-4">
              {[
                { num: "47", label: "5-Star Reviews" },
                { num: "0", label: "Missed Deadlines" },
                { num: "38+", label: "Years in Alaska" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-white/[0.07] bg-[#040D1A] p-4 text-center">
                  <p className="text-[26px] font-black text-white">{s.num}</p>
                  <p className="text-[10px] text-slate-600">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              Book with Confidence
            </Link>
          </div>

          {/* Right — 4 guarantee pillars */}
          <div className="space-y-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 rounded-xl border border-white/[0.07] bg-[#040D1A] p-5 transition-all duration-200 hover:border-white/[0.14]"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#2563EB]/25 bg-[#2563EB]/10">
                  {p.icon}
                </div>
                <div>
                  <p className="mb-1.5 text-[14px] font-bold text-white">{p.title}</p>
                  <p className="text-[13px] leading-relaxed text-slate-400">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
