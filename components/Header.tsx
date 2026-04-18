"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#1a3a5c] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-white font-bold text-lg leading-tight">
            Signature Inspection Service
          </span>
          <span className="text-amber-400 text-xs font-medium tracking-wide">
            ANCHORAGE, AK · ASHI CERTIFIED
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/home-inspection-anchorage" className="text-slate-200 hover:text-amber-400 transition-colors">
            Home Inspection
          </Link>
          <Link href="/commercial-inspection-anchorage" className="text-slate-200 hover:text-amber-400 transition-colors">
            Commercial
          </Link>
          <Link href="/radon-testing-anchorage" className="text-slate-200 hover:text-amber-400 transition-colors">
            Radon Testing
          </Link>
          <Link href="/about" className="text-slate-200 hover:text-amber-400 transition-colors">
            About
          </Link>
          <a
            href="tel:+19072233725"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            (907) 223-3725
          </a>
        </nav>

        {/* Mobile: phone + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+19072233725"
            className="text-amber-400 font-semibold text-sm"
          >
            (907) 223-3725
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#122a42] border-t border-slate-700 px-4 py-3 flex flex-col gap-3 text-sm">
          <Link href="/home-inspection-anchorage" onClick={() => setMenuOpen(false)} className="text-slate-200 py-2 border-b border-slate-700">
            Home Inspection
          </Link>
          <Link href="/commercial-inspection-anchorage" onClick={() => setMenuOpen(false)} className="text-slate-200 py-2 border-b border-slate-700">
            Commercial Inspection
          </Link>
          <Link href="/radon-testing-anchorage" onClick={() => setMenuOpen(false)} className="text-slate-200 py-2 border-b border-slate-700">
            Radon Testing
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-slate-200 py-2 border-b border-slate-700">
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-slate-200 py-2">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
