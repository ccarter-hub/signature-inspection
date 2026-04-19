import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Inspection Resources for Anchorage, AK | Signature Inspection Service",
  description:
    "Guides, cost breakdowns, and expert advice on home inspections in Anchorage, Alaska. Written by ASHI Certified inspector Larry McBain.",
  alternates: { canonical: "https://signatureinspectionservice.com/blog" },
};

const articles = [
  {
    slug: "what-does-a-home-inspection-include-in-alaska",
    title: "What Does a Home Inspection Include in Alaska?",
    description:
      "A complete guide to home inspection coverage in Alaska — 200+ items, Alaska-specific hazards like ice dams, permafrost, and radon.",
    readTime: "8 min read",
    category: "Inspection Guide",
  },
  {
    slug: "home-inspection-cost-anchorage-alaska",
    title: "How Much Does a Home Inspection Cost in Anchorage, Alaska?",
    description:
      "Typical home inspection costs in Anchorage range from $400–$600. Learn what affects the price and what add-ons are worth it.",
    readTime: "5 min read",
    category: "Pricing",
  },
  {
    slug: "common-problems-home-inspections-anchorage",
    title: "Common Problems Found During Home Inspections in Anchorage",
    description:
      "From ice dam risk to frost heave and aging electrical panels — the most common issues found in Anchorage homes during inspection.",
    readTime: "7 min read",
    category: "Alaska Expertise",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0B1220] text-white py-16 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">Inspection Resources</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Home Inspection Guides for Anchorage, AK
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            Written by ASHI Certified inspector Larry McBain — 38+ years Alaska construction experience. No fluff, no filler.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-5">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all duration-150 p-7 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#EFF6FF] text-[#2563EB] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {article.category}
                  </span>
                  <span className="text-[#94A3B8] text-xs">{article.readTime}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">{article.description}</p>
                <span className="text-[#2563EB] text-sm font-semibold">Read article &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563EB] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Schedule an Inspection?</h2>
          <p className="text-blue-100 mb-6">ASHI Certified. Same-day reports. 1-hour response guarantee.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+19072233725" className="bg-white text-[#2563EB] font-bold px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">
              Call (907) 223-3725
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-150">
              Book Online &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
