"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { track } from "@/lib/analytics";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Single source of truth for ribbon height.
  // Writes --ribbon-h to <html> as an inline style so the spacer and
  // toast always match the real rendered height — at every breakpoint,
  // zoom level, and font scale — without manual estimates.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sync = () =>
      document.documentElement.style.setProperty("--ribbon-h", `${el.offsetHeight}px`);
    // ResizeObserver catches element-level size changes (including media query layout shifts).
    // window resize is a belt-and-suspenders fallback for breakpoint transitions.
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    sync();
    window.addEventListener("resize", sync, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* ── Mobile: urgency bar + 2 CTAs ── */}
      <div className="md:hidden bg-[#0A1020]/[0.98] backdrop-blur-md border-t border-white/[0.12] shadow-[0_-8px_32px_rgba(0,0,0,0.50)]">
        {/* Urgency strip */}
        <div className="flex items-center justify-center gap-2 border-b border-white/[0.06] px-4 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[11px] font-semibold text-emerald-400">Available Today</span>
          <span className="mx-1 h-3 w-px bg-white/[0.15]" />
          <span className="text-[11px] text-slate-500">Slots filling fast</span>
        </div>
        {/* 2-button row */}
        <div
          className="grid grid-cols-2 gap-2 px-3 py-2"
          style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <a
            href="tel:+19072233725"
            onClick={() => track.phoneCall("sticky_cta")}
            className="flex flex-col items-center justify-center rounded-xl bg-[#2563EB] py-2.5 text-white transition-colors active:bg-[#1d4ed8]"
          >
            <span className="text-[13px] font-bold leading-tight">Call Now</span>
            <span className="text-[10px] text-blue-200">(907) 223-3725</span>
          </a>
          <a
            href="sms:+19072233725"
            className="flex flex-col items-center justify-center rounded-xl border border-white/[0.18] py-2.5 text-white transition-colors active:bg-white/[0.08]"
          >
            <span className="text-[13px] font-bold leading-tight">Text Us</span>
            <span className="text-[10px] text-slate-500">(907) 223-3725</span>
          </a>
        </div>
      </div>

      {/* ── Desktop: label + 2 buttons ── */}
      <div className="hidden md:block bg-[#0B1220]/[0.98] backdrop-blur-md border-t border-white/[0.10] shadow-[0_-8px_32px_rgba(0,0,0,0.35)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm truncate">Schedule Your Inspection Today</p>
            <p className="text-slate-400 text-xs">ASHI Certified · Same-Day Reports · 1-Hr Response</p>
          </div>
          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="border border-white/[0.20] text-white hover:bg-white/[0.08] font-semibold px-4 py-2.5 rounded-lg transition-all duration-150 text-sm whitespace-nowrap flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0 text-[#34D399]" />
              Schedule Now
            </Link>
            <a
              href="tel:+19072233725"
              className="border border-white/[0.20] text-white hover:bg-white/[0.08] font-semibold px-4 py-2.5 rounded-lg transition-all duration-150 text-sm whitespace-nowrap flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] hover:shadow-[0_4px_14px_rgba(59,130,246,0.45)] text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-150 text-sm whitespace-nowrap"
            >
              Schedule Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
