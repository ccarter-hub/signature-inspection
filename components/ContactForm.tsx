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
      if (res.ok) {
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
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Request Received!</h3>
        <p className="text-green-700">
          Thank you, {form.name}. We'll call you at {form.phone} within 1 business hour to confirm your inspection.
        </p>
        <p className="mt-4 text-sm text-green-600">
          Or call us directly:{" "}
          <a href="tel:+19072233725" className="font-semibold underline">
            (907) 223-3725
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Your Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="John Smith"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-base"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          placeholder="(907) 555-0100"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-base"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
          Property Address *
        </label>
        <input
          id="address"
          type="text"
          required
          value={form.address}
          onChange={e => setForm({ ...form, address: e.target.value })}
          placeholder="123 Main St, Anchorage, AK"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-base"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Anything else? (optional)
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="Type of inspection needed, preferred dates, etc."
          rows={3}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-base resize-none"
        />
      </div>

      {state === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please call us directly at{" "}
          <a href="tel:+19072233725" className="underline font-medium">(907) 223-3725</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-lg transition-colors"
      >
        {state === "loading" ? "Sending…" : "Request My Inspection →"}
      </button>

      <p className="text-xs text-slate-500 text-center">
        We respond within 1 business hour. Or call{" "}
        <a href="tel:+19072233725" className="font-medium text-[#1a3a5c]">(907) 223-3725</a> for immediate scheduling.
      </p>
    </form>
  );
}
