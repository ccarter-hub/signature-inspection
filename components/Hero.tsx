"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Star, ShieldCheck, Clock } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  headline: React.ReactNode;
  sub: string;
  image: string;
  imageAlt: string;
  imageFocus?: string;
  showForm?: boolean;
  rightCard?: React.ReactNode;
}

export default function Hero({
  eyebrow = "Scheduling fills 5–7 days out · Check availability now",
  headline,
  sub,
  image,
  imageAlt,
  imageFocus = "center center",
  showForm = true,
  rightCard,
}: HeroProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-[#030912] min-h-[70vh] md:min-h-[100svh]">
      {/* ── Background photo ── */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        style={{ objectPosition: imageFocus }}
        sizes="100vw"
      />

      {/* ── Overlay stack ── */}
      {/* 1. Base dark wash — light enough for photo to breathe */}
      <div className="absolute inset-0 bg-[#030912]/32" />
      {/* 2. Left-to-right gradient — text side readable, right side lets photo show */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030912]/80 via-[#030912]/38 to-transparent" />
      {/* 3. Bottom fade — blends into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030912] to-transparent" />
      {/* 4. Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* 5. Ambient blue glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-[#2563EB]/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[400px] w-[500px] rounded-full bg-[#2563EB]/[0.04] blur-[100px]" />

      {/* ── Content ── */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 sm:py-24 sm:px-10 md:flex-row md:items-center md:gap-14 min-h-[70vh] md:min-h-[100svh]"
      >
        {/* LEFT: Copy */}
        <div className={`flex-1 ${(showForm || rightCard) ? "max-w-[560px]" : "max-w-[680px]"}`}>
          {/* Urgency chip */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.07] px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
            <span className="text-[11px] font-semibold tracking-wide text-red-300">{eyebrow}</span>
          </div>

          <h1
            className="mb-5 font-display font-bold leading-[1.03] tracking-tight text-white"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 3.8rem)" }}
          >
            {headline}
          </h1>

          <p className="mb-9 max-w-[460px] text-[16px] leading-[1.7] text-slate-300">{sub}</p>

          {/* CTAs */}
          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.50)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_0_56px_rgba(37,99,235,0.65)]"
            >
              Check Availability <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+19072233725"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.18] bg-white/[0.05] px-7 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/[0.35] hover:bg-white/[0.10]"
            >
              <Phone className="h-4 w-4 text-[#60A5FA]" /> (907) 223-3725
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-white/[0.10] pt-7">
            {[
              { icon: <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />, text: "5.0 · 47 Reviews" },
              { icon: <ShieldCheck className="h-3.5 w-3.5 text-[#60A5FA]" />, text: "ASHI Certified" },
              { icon: <Clock className="h-3.5 w-3.5 text-[#60A5FA]" />, text: "Same-Day Reports" },
              { icon: <Clock className="h-3.5 w-3.5 text-[#60A5FA]" />, text: "38+ Yrs Alaska" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                {icon}
                <span className="text-[12px] font-medium text-slate-300">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Form card or custom content — omit entirely when neither is needed */}
        {(showForm || rightCard) && <div className="w-full shrink-0 md:w-[420px]">
          {showForm ? (
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] shadow-[0_40px_80px_rgba(0,0,0,0.75)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent" />
              <div className="absolute inset-0 bg-[#030912]/80 backdrop-blur-xl" />
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-6 py-4">
                  <div>
                    <h2 className="text-[16px] font-bold text-white leading-tight">Book Your Inspection</h2>
                    <p className="text-[11px] text-slate-500 mt-0.5">30 seconds · No commitment</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> 1-Hr Response
                  </span>
                </div>
                {/* Body */}
                <div className="px-6 py-5">
                  {submitted ? (
                    <div className="py-5 text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10">
                        <ShieldCheck className="h-6 w-6 text-emerald-400" />
                      </div>
                      <p className="mb-1 text-[17px] font-bold text-white">Request Received</p>
                      <p className="text-[13px] text-slate-400">We&rsquo;ll call within 1 business hour to confirm.</p>
                      <a href="tel:+19072233725" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#60A5FA] hover:underline">
                        <Phone className="h-3.5 w-3.5" /> (907) 223-3725
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      {[
                        { type: "text", placeholder: "Your full name", name: "name" },
                        { type: "tel", placeholder: "Phone number", name: "phone" },
                        { type: "text", placeholder: "Property address", name: "address" },
                      ].map((f) => (
                        <input
                          key={f.name}
                          type={f.type}
                          name={f.name}
                          placeholder={f.placeholder}
                          required
                          className="w-full rounded-xl border border-white/[0.10] bg-white/[0.07] px-4 py-3 text-[13px] text-white placeholder-slate-600 outline-none ring-0 transition-all duration-200 focus:border-[#3B82F6]/50 focus:bg-white/[0.12] focus:ring-0"
                        />
                      ))}
                      <select
                        name="service"
                        className="w-full rounded-xl border border-white/[0.10] bg-white/[0.07] px-4 py-3 text-[13px] text-slate-400 outline-none transition-all duration-200 focus:border-[#3B82F6]/50"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="">Service type (optional)</option>
                        <option>Home Inspection</option>
                        <option>Commercial Inspection</option>
                        <option>Radon Testing</option>
                        <option>Home + Radon Bundle</option>
                      </select>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] py-3.5 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.45)] transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-[0_0_40px_rgba(37,99,235,0.60)] disabled:opacity-60"
                      >
                        {loading ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>Check Availability <ArrowRight className="h-4 w-4" /></>
                        )}
                      </button>
                      <p className="text-center text-[11px] text-slate-600">
                        Or call:{" "}
                        <a href="tel:+19072233725" className="font-semibold text-[#60A5FA] hover:underline">(907) 223-3725</a>
                      </p>
                    </form>
                  )}
                </div>
                {/* Footer */}
                <div className="flex items-center gap-2.5 border-t border-white/[0.06] px-6 py-4">
                  <div className="flex shrink-0 -space-x-1.5">
                    {["J", "D", "R", "S"].map((l, i) => (
                      <div key={i} className="flex h-6 w-6 items-center justify-center rounded-full border border-[#030912] bg-gradient-to-br from-[#1d4ed8] to-[#3B82F6] text-[8px] font-bold text-white">
                        {l}
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-600">
                    47 Anchorage buyers protected ·{" "}
                    <span className="font-semibold text-emerald-400">★ 5.0</span>
                  </p>
                </div>
              </div>
            </div>
          ) : rightCard}
        </div>}
      </div>
    </section>
  );
}
