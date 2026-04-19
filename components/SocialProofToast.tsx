"use client";
import { useEffect, useState } from "react";

const toasts = [
  { name: "Jennifer M.", location: "Anchorage", ago: "2 days ago" },
  { name: "David T.", location: "Eagle River", ago: "5 days ago" },
  { name: "Ryan K.", location: "Anchorage", ago: "1 week ago" },
  { name: "Sarah P.", location: "Wasilla", ago: "1 week ago" },
  { name: "Mark L.", location: "Anchorage", ago: "2 weeks ago" },
];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const hide = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(hide);
  }, [visible, index]);

  useEffect(() => {
    if (visible) return;
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % toasts.length);
      setVisible(true);
    }, 30000);
    return () => clearTimeout(next);
  }, [visible]);

  const t = toasts[index];

  return (
    <div
      aria-live="polite"
      className={`fixed left-4 z-40 max-w-[260px] rounded-xl border border-white/[0.12] bg-[#0B1628]/[0.97] px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ bottom: "calc(var(--ribbon-h) + 0.75rem)" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#3B82F6] text-[11px] font-bold text-white">
          {t.name[0]}
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-white leading-tight">
            {t.name} · {t.location}
          </p>
          <p className="mt-0.5 text-[10px] text-yellow-400">★★★★★</p>
          <p className="mt-0.5 text-[10px] text-slate-500">Booked an inspection · {t.ago}</p>
        </div>
      </div>
    </div>
  );
}
