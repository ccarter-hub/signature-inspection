"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[#0F172A] font-bold text-base leading-tight">
            Signature Inspection Service
          </span>
          <span className="text-[#64748B] text-xs font-medium tracking-wide">
            Anchorage, AK · ASHI Certified
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#64748B]">
          <Link href="/home-inspection-anchorage" className="hover:text-[#0F172A] transition-colors">
            Home Inspection
          </Link>
          <Link href="/commercial-inspection-anchorage" className="hover:text-[#0F172A] transition-colors">
            Commercial
          </Link>
          <Link href="/radon-testing-anchorage" className="hover:text-[#0F172A] transition-colors">
            Radon Testing
          </Link>
          <Link href="/about" className="hover:text-[#0F172A] transition-colors">
            About
          </Link>
          <a
            href="tel:+19072233725"
            className="bg-[#2563EB] hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-md text-white font-semibold px-4 py-2 rounded-lg transition-all duration-150 ml-2"
          >
            (907) 223-3725
          </a>
        </nav>

        {/* Mobile: phone + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a href="tel:+19072233725" className="text-[#2563EB] font-semibold text-sm">
            (907) 223-3725
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-[#0F172A] p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <nav className="md:hidden bg-white border-t border-[#E5E7EB] px-4 py-3 flex flex-col gap-1 text-sm">
          {[
            { href: "/home-inspection-anchorage", label: "Home Inspection" },
            { href: "/commercial-inspection-anchorage", label: "Commercial Inspection" },
            { href: "/radon-testing-anchorage", label: "Radon Testing" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[#0F172A] py-2.5 border-b border-[#E5E7EB] last:border-0 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
