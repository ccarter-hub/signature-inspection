"use client";

import { useState } from "react";
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10">
          <ShieldCheck className="h-7 w-7 text-emerald-400" />
        </div>
        <p className="mb-2 text-[18px] font-bold text-white">Request Received!</p>
        <p className="mb-1 text-[14px] text-slate-400">We&rsquo;ll call within 1 business hour to confirm.</p>
        <div className="mt-5 flex flex-col items-center gap-2">
          <a href="tel:+19072233725" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#60A5FA] hover:underline">
            <Phone className="h-4 w-4" /> (907) 223-3725
          </a>
          <a href="sms:+19072233725" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#34D399] hover:underline">
            <MessageSquare className="h-4 w-4" /> Text us instead
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Your full name"
        required
        autoComplete="name"
        className="w-full rounded-xl border border-white/[0.10] bg-white/[0.07] px-4 py-4 text-[15px] text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-[#3B82F6]/50 focus:bg-white/[0.10]"
        style={{ minHeight: "52px" }}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        required
        autoComplete="tel"
        inputMode="tel"
        className="w-full rounded-xl border border-white/[0.10] bg-white/[0.07] px-4 py-4 text-[15px] text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-[#3B82F6]/50 focus:bg-white/[0.10]"
        style={{ minHeight: "52px" }}
      />
      <input
        type="text"
        name="address"
        placeholder="Property address"
        required
        autoComplete="street-address"
        className="w-full rounded-xl border border-white/[0.10] bg-white/[0.07] px-4 py-4 text-[15px] text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-[#3B82F6]/50 focus:bg-white/[0.10]"
        style={{ minHeight: "52px" }}
      />
      <select
        name="service"
        className="w-full rounded-xl border border-white/[0.10] bg-white/[0.07] px-4 py-4 text-[15px] text-slate-400 outline-none transition-all duration-200 focus:border-[#3B82F6]/50"
        style={{ colorScheme: "dark", minHeight: "52px" }}
      >
        <option value="">Service type (optional)</option>
        <option>Home Inspection — From $350</option>
        <option>Commercial Inspection — From $500</option>
        <option>Radon Testing — From $125</option>
        <option>Home + Radon Bundle — Best Value</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] py-4 text-[16px] font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.40)] transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-[0_0_44px_rgba(37,99,235,0.55)] disabled:opacity-60 active:scale-[0.98]"
        style={{ minHeight: "56px" }}
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
      <div className="flex items-center justify-center gap-4 pt-1">
        <a href="tel:+19072233725" className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-[#60A5FA] transition-colors">
          <Phone className="h-3.5 w-3.5" /> Call
        </a>
        <span className="text-slate-700">·</span>
        <a href="sms:+19072233725" className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-[#34D399] transition-colors">
          <MessageSquare className="h-3.5 w-3.5" /> Text Us
        </a>
        <span className="text-slate-700">·</span>
        <span className="text-[13px] text-slate-600">1-hr response</span>
      </div>
    </form>
  );
}
