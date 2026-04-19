import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Building2, Wind } from "lucide-react";

const services = [
  {
    eyebrow: "Most Popular",
    Icon: Home,
    title: "Home Inspection",
    headline: "Every System. Every Risk. One Report.",
    bullets: [
      "200+ inspection points documented",
      "Alaska-specific hazards: ice dams, permafrost, freeze/thaw",
      "Same-day report with color photos",
    ],
    href: "/home-inspection-anchorage",
    image: "/images/larry-inspecting-7.jpg",
    imageFocus: "center 30%",
    price: "From $350",
    accent: "text-[#60A5FA]",
  },
  {
    eyebrow: "Commercial",
    Icon: Building2,
    title: "Commercial Inspection",
    headline: "Builder-Level Scrutiny on Every System.",
    bullets: [
      "Mechanical, electrical & structural systems",
      "Investor-ready severity-coded report",
      "20+ years commercial property experience",
    ],
    href: "/commercial-inspection-anchorage",
    image: "/images/larry-inspecting-5.jpg",
    imageFocus: "center 40%",
    price: "From $500",
    accent: "text-[#60A5FA]",
  },
  {
    eyebrow: "Add-On Available",
    Icon: Wind,
    title: "Radon Testing",
    headline: "Invisible Risk. Measurable Peace of Mind.",
    bullets: [
      "EPA-method continuous monitoring",
      "Results within 48–72 hours",
      "Bundle with home inspection & save",
    ],
    href: "/radon-testing-anchorage",
    image: "/images/larry-inspecting-2.jpg",
    imageFocus: "center 35%",
    price: "From $125",
    accent: "text-[#60A5FA]",
  },
];

export default function Services() {
  return (
    <section className="bg-[#030912] py-16 md:py-28 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Header */}
        <div className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-5">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Services</p>
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              One Inspector.<br className="hidden sm:block" /> Every System.
            </h2>
          </div>
          <p className="max-w-[340px] text-[14px] leading-relaxed text-slate-500">
            Residential, commercial, and radon — all delivered with the same builder&rsquo;s eye
            and same-day turnaround.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040D1A] shadow-[0_8px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: s.imageFocus }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient fade to card bg */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A] via-[#040D1A]/30 to-transparent" />
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />
                {/* Eyebrow badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#030912]/80 px-3 py-1 text-[10px] font-semibold text-slate-300 backdrop-blur-sm">
                  {s.eyebrow}
                </div>
                {/* Price badge */}
                <div className="absolute bottom-4 right-4 rounded-lg border border-[#2563EB]/30 bg-[#030912]/90 px-3 py-1 text-[12px] font-bold text-[#60A5FA] backdrop-blur-sm">
                  {s.price}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-1 flex items-center gap-2">
                  <s.Icon className="h-4 w-4 text-[#3B82F6]" />
                  <h3 className="text-[17px] font-bold text-white">{s.title}</h3>
                </div>
                <p className="mb-5 text-[13px] font-medium text-slate-500">{s.headline}</p>
                <ul className="mb-6 flex-1 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#3B82F6] transition-all duration-200 group-hover:gap-2.5 group-hover:text-[#60A5FA]">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
