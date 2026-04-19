import Link from "next/link";
import { Phone, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#030912] px-5">
      <div className="w-full max-w-lg text-center">
        <p className="mb-4 font-display text-[100px] font-black leading-none text-[#0f2340]">
          404
        </p>
        <h1 className="mb-3 text-2xl font-bold text-white">Page not found</h1>
        <p className="mb-8 text-[15px] leading-relaxed text-slate-400">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Let&rsquo;s get you back on track.
        </p>

        <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
          >
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <a
            href="tel:+19072233725"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.05]"
          >
            <Phone className="h-4 w-4 text-[#60A5FA]" /> (907) 223-3725
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px]">
          {[
            { href: "/home-inspection-anchorage", label: "Home Inspections" },
            { href: "/commercial-inspection-anchorage", label: "Commercial" },
            { href: "/radon-testing-anchorage", label: "Radon Testing" },
            { href: "/contact", label: "Book an Inspection" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="text-[#3B82F6] hover:underline">
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
