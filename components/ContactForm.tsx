"use client";
import { useState } from "react";
import { track } from "@/lib/analytics";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
    bot_field: "", // honeypot — must stay empty
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        track.formSubmit();
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        role="alert"
        className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"
      >
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-bold text-green-800">Request Received!</h3>
        <p className="text-sm text-green-700">
          Thank you, {form.name}. We&apos;ll call you at {form.phone} within 1 business hour.
        </p>
        <p className="mt-3 text-xs text-green-600">
          Or call us directly:{" "}
          <a href="tel:+19072233725" className="font-semibold underline">
            (907) 223-3725
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5" noValidate>
      {/* Honeypot — hidden from real users, filled only by bots */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="bot_field">Leave this blank</label>
        <input
          id="bot_field"
          name="bot_field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.bot_field}
          onChange={(e) => setForm({ ...form, bot_field: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="cf-name"
          className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#64748B]"
        >
          Your Name <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="cf-name"
          type="text"
          required
          autoComplete="name"
          maxLength={120}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="John Smith"
          className="w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-[15px] placeholder:text-[#94a3b8] outline-none focus:border-transparent focus:ring-2 focus:ring-[#3B82F6]"
        />
      </div>

      <div>
        <label
          htmlFor="cf-phone"
          className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#64748B]"
        >
          Phone Number <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="cf-phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          maxLength={30}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="(907) 555-0100"
          className="w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-[15px] placeholder:text-[#94a3b8] outline-none focus:border-transparent focus:ring-2 focus:ring-[#3B82F6]"
        />
      </div>

      <div>
        <label
          htmlFor="cf-address"
          className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#64748B]"
        >
          Property Address <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="cf-address"
          type="text"
          required
          autoComplete="street-address"
          maxLength={250}
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="123 Main St, Anchorage, AK"
          className="w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-[15px] placeholder:text-[#94a3b8] outline-none focus:border-transparent focus:ring-2 focus:ring-[#3B82F6]"
        />
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#64748B]"
        >
          Anything else? <span className="font-normal normal-case">(optional)</span>
        </label>
        <textarea
          id="cf-message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Type of inspection, preferred dates, etc."
          rows={2}
          maxLength={1500}
          className="w-full resize-none rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-sm placeholder:text-[#94a3b8] outline-none focus:border-transparent focus:ring-2 focus:ring-[#3B82F6]"
        />
      </div>

      {state === "error" && (
        <p role="alert" className="text-xs text-red-600">
          Something went wrong. Please call us at{" "}
          <a href="tel:+19072233725" className="font-medium underline">
            (907) 223-3725
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-lg bg-[#3B82F6] py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "loading" ? "Sending…" : "Book Your Inspection →"}
      </button>

      <p className="text-center text-xs text-[#64748B]">
        We respond within 1 business hour.{" "}
        <a href="tel:+19072233725" className="font-medium text-[#2563EB] hover:underline">
          (907) 223-3725
        </a>
      </p>
    </form>
  );
}
