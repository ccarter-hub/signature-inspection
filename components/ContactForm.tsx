"use client";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", address: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-green-800 mb-2">Request Received!</h3>
        <p className="text-green-700 text-sm">
          Thank you, {form.name}. We&apos;ll call you at {form.phone} within 1 business hour.
        </p>
        <p className="mt-3 text-xs text-green-600">
          Or call us directly:{" "}
          <a href="tel:+19072233725" className="font-semibold underline">(907) 223-3725</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-[#0F172A] mb-1 uppercase tracking-wide">
          Your Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="John Smith"
          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none bg-white placeholder:text-[#94a3b8]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-[#0F172A] mb-1 uppercase tracking-wide">
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          placeholder="(907) 555-0100"
          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none bg-white placeholder:text-[#94a3b8]"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-xs font-semibold text-[#0F172A] mb-1 uppercase tracking-wide">
          Property Address *
        </label>
        <input
          id="address"
          type="text"
          required
          value={form.address}
          onChange={e => setForm({ ...form, address: e.target.value })}
          placeholder="123 Main St, Anchorage, AK"
          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none bg-white placeholder:text-[#94a3b8]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[#0F172A] mb-1 uppercase tracking-wide">
          Anything else? (optional)
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="Type of inspection, preferred dates, etc."
          rows={3}
          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none bg-white resize-none placeholder:text-[#94a3b8]"
        />
      </div>

      {state === "error" && (
        <p className="text-red-600 text-xs">
          Something went wrong. Please call us at{" "}
          <a href="tel:+19072233725" className="underline font-medium">(907) 223-3725</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-60 hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold py-3.5 rounded-lg text-sm transition-all duration-150"
      >
        {state === "loading" ? "Sending…" : "Book Your Inspection →"}
      </button>

      <p className="text-xs text-[#64748B] text-center">
        We respond within 1 business hour.{" "}
        <a href="tel:+19072233725" className="font-medium text-[#2563EB] hover:underline">(907) 223-3725</a>
      </p>
    </form>
  );
}
