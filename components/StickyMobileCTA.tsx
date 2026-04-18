import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-2xl">
      <a
        href="tel:+19072233725"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#1a3a5c] text-white font-semibold text-sm active:bg-[#122a42]"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-amber-500 text-white font-semibold text-sm active:bg-amber-600"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Book Inspection
      </Link>
    </div>
  );
}
