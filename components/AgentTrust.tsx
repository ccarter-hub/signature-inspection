import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    num: "01",
    title: "Same-Day Reports Keep Deals Moving",
    body: "Contingency windows are tight. Larry delivers the report the same day — before your client needs to make a decision. No waiting. No re-negotiation delays.",
  },
  {
    num: "02",
    title: "Severity-Coded Findings Support Negotiation",
    body: "Every finding is rated Critical, Monitor, or Acceptable. That structure gives you and your client a clear negotiating framework — not a list of panic-inducing items.",
  },
  {
    num: "03",
    title: "He Answers His Phone",
    body: "Larry doesn't route through a call center. Your clients get a real person who can walk them through findings on the spot. That's rare. Agents notice.",
  },
  {
    num: "04",
    title: "Findings Are Written for Real People",
    body: "No jargon. No liability-speak. Plain English with photos. First-time buyers understand it. Experienced investors trust it.",
  },
];

const agentQuotes = [
  {
    id: "kw",
    quote: "Larry is the only inspector I recommend to every client. Same-day reports and he actually picks up the phone.",
    name: "Real Estate Agent",
    detail: "Keller Williams · Anchorage",
  },
  {
    id: "remax",
    quote: "His construction background means he catches structural issues that other inspectors write off as cosmetic. My clients trust him.",
    name: "Real Estate Agent",
    detail: "RE/MAX · Eagle River",
  },
];

export default function AgentTrust() {
  return (
    <section className="border-t border-white/[0.04] bg-[#030912] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Header */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
              For Real Estate Agents
            </p>
            <h2
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
            >
              Why Anchorage Agents{" "}
              <span className="text-[#60A5FA]">Keep Calling Larry.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="tel:+19072233725"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              <Phone className="h-4 w-4" /> Schedule for a Client
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.05]"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Reasons */}
          <div className="space-y-5">
            {reasons.map((r) => (
              <div key={r.num} className="flex gap-4">
                <span className="mt-0.5 text-[11px] font-black text-[#2563EB] opacity-60 shrink-0 w-6">{r.num}</span>
                <div>
                  <p className="mb-1 text-[14px] font-bold text-white">{r.title}</p>
                  <p className="text-[13px] leading-relaxed text-slate-500">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Agent quotes */}
          <div className="space-y-4">
            {agentQuotes.map((q) => (
              <div
                key={q.id}
                className="rounded-2xl border border-white/[0.07] bg-[#07111F] p-6"
              >
                <div className="mb-3 text-yellow-400 text-sm">★★★★★</div>
                <p className="mb-4 text-[14px] italic leading-relaxed text-slate-300">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#3B82F6] text-[11px] font-bold text-white">
                    RE
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-white">{q.name}</p>
                    <p className="text-[11px] text-slate-600">{q.detail}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Agent stat strip */}
            <div className="rounded-xl border border-white/[0.06] bg-[#07111F] p-5">
              <div className="grid grid-cols-3 divide-x divide-white/[0.06] text-center">
                {[
                  { num: "1 hr", label: "Response SLA" },
                  { num: "Same day", label: "Report delivery" },
                  { num: "47", label: "Five-star reviews" },
                ].map((s) => (
                  <div key={s.label} className="px-3">
                    <p className="text-[18px] font-black text-white">{s.num}</p>
                    <p className="text-[10px] text-slate-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
