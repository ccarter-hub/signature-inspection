import Link from "next/link";
import { ArrowRight, Phone, Clock, Star, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#030912] py-16 md:py-28 border-t border-white/[0.04]">
      {/* Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[#2563EB]/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-10">
        {/* Urgency badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.07] px-4 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
          <span className="text-[11px] font-semibold tracking-wide text-red-300">
            Scheduling fills 5–7 days out · Check availability now
          </span>
        </div>

        <h2
          className="mb-5 font-display font-bold leading-tight text-white"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
        >
          Your Report.{" "}
          <span className="text-[#60A5FA]">Same Day.</span>
          <br />Book Before This Week Fills.
        </h2>

        <p className="mx-auto mb-10 max-w-lg text-[16px] leading-relaxed text-slate-400">
          One call or form. Larry responds within 1 hour. You get a 200+ point inspection
          and a written report the same day — before your contingency window closes.
        </p>

        <div className="mb-8 md:mb-12 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-9 py-4 text-[15px] font-bold text-white shadow-[0_0_48px_rgba(37,99,235,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_0_64px_rgba(37,99,235,0.60)]"
          >
            Book My Inspection Now <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+19072233725"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] px-9 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:border-white/[0.30] hover:bg-white/[0.05]"
          >
            <Phone className="h-4 w-4 text-[#60A5FA]" /> (907) 223-3725
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/[0.06] pt-8">
          {[
            { icon: <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />, text: "5.0 · 47 Reviews" },
            { icon: <ShieldCheck className="h-3.5 w-3.5 text-[#60A5FA]" />, text: "ASHI Certified" },
            { icon: <Clock className="h-3.5 w-3.5 text-[#60A5FA]" />, text: "1-Hour Response" },
            { icon: <Clock className="h-3.5 w-3.5 text-[#60A5FA]" />, text: "Same-Day Reports" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              {icon}
              <span className="text-[12px] font-medium text-slate-500">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
