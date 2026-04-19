"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { track } from "@/lib/analytics";

const services = [
  {
    id: "home",
    label: "Home Inspection",
    price: "$350",
    sub: "Most popular",
    color: "#2563EB",
    bullets: [
      "200+ point inspection",
      "Roof, attic, foundation, electrical, plumbing, HVAC",
      "Alaska-specific: ice dams, permafrost, freeze/thaw",
      "Same-day written report with photos",
      "Severity-coded findings (critical / monitor / acceptable)",
    ],
    badge: "Best for buyers",
  },
  {
    id: "commercial",
    label: "Commercial",
    price: "$500",
    sub: "Investor-ready",
    color: "#7C3AED",
    bullets: [
      "All accessible systems & components",
      "Structural framing, envelope, electrical, HVAC",
      "Life safety: egress, fire indicators",
      "Investor-grade severity-coded report",
      "Meets most commercial lender requirements",
    ],
    badge: "For investors",
  },
  {
    id: "radon",
    label: "Radon Testing",
    price: "$125",
    sub: "Add-on or standalone",
    color: "#059669",
    bullets: [
      "EPA-approved testing method",
      "Anchorage radon levels above national average",
      "48-hour test period",
      "Clear pass/fail result with recommendations",
      "Bundle with home inspection and save",
    ],
    badge: "Alaska health risk",
  },
  {
    id: "bundle",
    label: "Bundle & Save",
    price: "$449",
    sub: "Home + Radon",
    color: "#D97706",
    bullets: [
      "Home inspection + radon test together",
      "Save $26 vs. booking separately",
      "One visit, two reports",
      "Most complete pre-purchase package",
      "Recommended by Anchorage real estate agents",
    ],
    badge: "Best value",
  },
];

export default function InstantQuote() {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <section id="quote" className="border-t border-white/[0.04] bg-[#040D1A] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
            Book Your Inspection
          </p>
          <h2
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
          >
            Reserve Your Spot.{" "}
            <span className="text-[#60A5FA]">See the Price First.</span>
          </h2>
          <p className="mt-3 text-[14px] text-slate-500">Takes less than 30 seconds. Transparent pricing — no forms, no callbacks.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Tabs */}
          <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setActive(i); track.quoteTab(s.id); }}
                className={`relative rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                  active === i
                    ? "border-[#2563EB]/50 bg-[#2563EB]/10 shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] hover:bg-white/[0.04]"
                }`}
              >
                <p className={`text-[12px] font-bold ${active === i ? "text-white" : "text-slate-400"}`}>
                  {s.label}
                </p>
                <p className={`text-[15px] font-black ${active === i ? "text-[#60A5FA]" : "text-slate-500"}`}>
                  {s.price}
                </p>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#07111F] shadow-[0_40px_80px_rgba(0,0,0,0.60)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />

            <div className="p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{ background: `${svc.color}22`, color: svc.color }}
                    >
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="text-[22px] font-black text-white">
                    {svc.label}
                    <span className="ml-3 text-[28px]" style={{ color: svc.color }}>
                      {svc.price}
                    </span>
                  </h3>
                  <p className="text-[13px] text-slate-500">{svc.sub}</p>
                </div>

                {/* Availability signal */}
                <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.07] px-4 py-2.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                  <div>
                    <p className="text-[11px] font-bold text-red-300">Scheduling fills fast</p>
                    <p className="text-[10px] text-red-700">Slots fill 5–7 days out</p>
                  </div>
                </div>
              </div>

              <ul className="mb-7 space-y-2.5">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: svc.color }} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl py-4 text-[15px] font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: svc.color, boxShadow: `0 0 32px ${svc.color}40` }}
                >
                  Request Your Slot — {svc.price} <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+19072233725"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] px-6 py-4 text-[14px] font-semibold text-white transition-all duration-200 hover:border-white/[0.25] hover:bg-white/[0.05]"
                >
                  <Phone className="h-4 w-4 text-[#60A5FA]" /> Call (907) 223-3725
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-white/[0.06] px-8 py-4">
              <Zap className="h-3.5 w-3.5 shrink-0 text-yellow-400" />
              <p className="text-[12px] text-slate-600">
                Same-day written report · 1-hour response · ASHI Certified · Fee-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
