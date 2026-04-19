import Link from "next/link";
import { ArrowRight, CalendarCheck, ClipboardList, FileCheck } from "lucide-react";

const steps = [
  {
    n: "01",
    Icon: CalendarCheck,
    title: "Book in 30 Seconds",
    body: "Fill out the form or call. Most weeks fill 5–7 days out — the sooner you book, the sooner we can protect you.",
    cta: { label: "Check Availability", href: "/contact" },
  },
  {
    n: "02",
    Icon: ClipboardList,
    title: "Larry Inspects",
    body: "200+ inspection points, documented with field notes and color photos. You're welcome on-site — most buyers learn a lot.",
    cta: null,
  },
  {
    n: "03",
    Icon: FileCheck,
    title: "Get Your Report",
    body: "Same day. Severity-coded findings in plain English — ready to negotiate with before your contingency window closes.",
    cta: null,
  },
];

export default function Process() {
  return (
    <section className="border-t border-white/[0.04] bg-[#07111F] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Header */}
        <div className="mb-10 md:mb-16 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
            How It Works
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            From Booking to Report,<br className="hidden sm:block" /> in One Day.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid gap-4 md:gap-6 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-px md:block">
            <div className="mx-auto h-full max-w-[66%] bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
          </div>

          {steps.map((step, i) => (
            <div key={step.n} className="relative flex flex-col">
              {/* Step number + icon */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/10 shadow-[0_0_24px_rgba(37,99,235,0.20)]">
                  <step.Icon className="h-5 w-5 text-[#60A5FA]" />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB] text-[9px] font-bold text-white shadow-[0_0_10px_rgba(37,99,235,0.60)]">
                    {i + 1}
                  </span>
                </div>
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px bg-gradient-to-r from-[#2563EB]/30 to-transparent md:hidden" />
                )}
              </div>

              {/* Content card */}
              <div className="flex flex-1 flex-col rounded-2xl border border-white/[0.06] bg-[#040D1A] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-[#3B82F6]/60">
                  Step {step.n}
                </p>
                <h3 className="mb-3 text-[17px] font-bold text-white">{step.title}</h3>
                <p className="flex-1 text-[14px] leading-relaxed text-slate-500">{step.body}</p>
                {step.cta && (
                  <Link
                    href={step.cta.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#3B82F6] transition-all duration-200 hover:gap-2.5 hover:text-[#60A5FA]"
                  >
                    {step.cta.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
