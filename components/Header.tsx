"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoMark from "@/components/LogoMark";

const navLinks = [
  { href: "/home-inspection-anchorage", label: "Home Inspection" },
  { href: "/commercial-inspection-anchorage", label: "Commercial" },
  { href: "/radon-testing-anchorage", label: "Radon Testing" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[#0B1220]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <LogoMark size={42} />
          <div className="flex flex-col leading-none gap-1">
            <span className="font-display text-white font-bold text-[15px] leading-tight tracking-[-0.01em]">
              Signature Inspection<span className="hidden md:inline"> Service</span>
            </span>
            <span className="hidden md:block text-slate-400 text-[10px] font-medium tracking-[0.14em] uppercase">
              Anchorage, AK &middot; ASHI Certified
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-[13px] font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-150 ${
                  isActive
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-[#3B82F6]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://www.facebook.com/SignatureInspectionService/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Signature Inspection Service on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:text-[#60A5FA] hover:bg-white/[0.06] transition-all duration-150"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-white border border-white/[0.20] hover:border-white/[0.40] font-semibold px-4 py-2.5 rounded-xl transition-all duration-150 text-[13px] whitespace-nowrap"
            >
              Schedule
            </Link>
            <a
              href="tel:+19072233725"
              className="flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-4 py-2.5 rounded-xl transition-all duration-150 whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              (907) 223-3725
            </a>
          </div>
        </nav>

        {/* Mobile: phone icon + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <a
            href="tel:+19072233725"
            aria-label="Call Signature Inspection Service"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#60A5FA] transition-colors hover:bg-white/[0.06]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-colors hover:bg-white/[0.06]"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0B1220] border-t border-white/[0.08] px-4 py-3 flex flex-col gap-1 text-sm">
          {[...navLinks, { href: "/contact", label: "Schedule Inspection" }].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 border-b border-white/[0.06] font-medium transition-colors ${
                  isActive ? "text-[#3B82F6]" : "text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://www.facebook.com/SignatureInspectionService/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2.5 py-2.5 text-slate-400 hover:text-[#60A5FA] font-medium transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow on Facebook
          </a>
        </nav>
      )}
    </header>
  );
}
