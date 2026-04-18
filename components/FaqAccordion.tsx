"use client";
import { useState } from "react";

type FaqItem = {
  name: string;
  acceptedAnswer: { text: string };
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.name} className="card overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-[#F9FAFB] transition-colors"
          >
            <span className="font-semibold text-[#0F172A] text-sm">{item.name}</span>
            <svg
              className={`w-5 h-5 text-[#2563EB] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5 border-t border-[#E5E7EB]">
              <p className="text-[#64748B] text-sm leading-relaxed pt-4">{item.acceptedAnswer.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
