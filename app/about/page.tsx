import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Star, ArrowRight } from "lucide-react";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Larry McBain | ASHI Certified Home Inspector Anchorage, AK",
  description:
    "Meet Larry McBain, ASHI Certified home inspector in Anchorage, AK. 38+ years Alaska construction experience. Founder of Signature Inspection Service Inc. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Larry McBain",
  jobTitle: "ASHI Certified Home Inspector",
  worksFor: { "@type": "Organization", name: "Signature Inspection Service Inc." },
  description: "ASHI Certified home inspector with 38+ years of Alaska construction experience. Founder of Signature Inspection Service Inc.",
};

const credentials = [
  "ASHI Certified Home Inspector",
  "38+ Years General Contracting",
  "20+ Years Real Estate Experience",
  "Licensed & Insured in Alaska",
  "5.0 Stars — 47 Google Reviews",
];

const values = [
  {
    title: "Honest Reporting",
    body: "We report what we find — good and bad. Every inspection gets the same thorough treatment regardless of property value or your agent's relationship with the seller.",
  },
  {
    title: "Education, Not Just Findings",
    body: "Larry explains each finding in plain language: what it is, how serious it is, and what you should do about it. You leave the inspection understanding your property.",
  },
  {
    title: "Same-Day Reports",
    body: "Time matters in real estate. You receive your written report the same day — complete with photos, severity ratings, and clear recommendations ready for negotiation.",
  },
];


export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* HERO */}
      <Hero
        eyebrow="About the Inspector · Anchorage, AK"
        headline={
          <>
            38 Years Building Alaska.<br className="hidden sm:block" />{" "}
            <span className="text-[#60A5FA]">Now He Protects Buyers.</span>
          </>
        }
        sub="Larry McBain isn't reading from a checklist — he built these homes. His construction background catches ice dam risk, permafrost movement, and freeze/thaw damage that other inspectors don't even know to look for."
        image="/images/larry-inspecting-1.jpg"
        imageAlt="Larry McBain — Signature Inspection Service, Anchorage AK"
        imageFocus="72% center"
        showForm={false}
      />

      {/* BIO */}
      <section className="border-t border-white/[0.04] bg-[#040D1A] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-14 md:grid-cols-[1fr_340px]">
            {/* Bio copy */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Background</p>
              <h2 className="mb-7 font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold leading-tight text-white">
                A Builder's Perspective<br />on Every Inspection.
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed text-slate-400">
                <p>
                  Larry McBain has spent nearly four decades working in Alaska's construction and real estate industries.
                  As a general contractor with 38+ years of hands-on experience, he has built, remodeled, and evaluated
                  hundreds of properties across Anchorage and southcentral Alaska.
                </p>
                <p>
                  After 20+ years in Alaska real estate, Larry founded Signature Inspection Service Inc. to give buyers,
                  sellers, and agents access to the kind of deep, construction-level property knowledge that generic
                  inspection services simply can't provide.
                </p>
                <p>
                  Larry holds ASHI (American Society of Home Inspectors) certification — the gold standard in the industry.
                  ASHI requires passing a national exam, completing 250 paid inspections, and ongoing continuing education.
                </p>
                <p>
                  His background in construction gives every Signature Inspection report a builder's perspective. He doesn't
                  just note deficiencies — he explains what they mean, how serious they are, and what it will cost to address them.
                </p>
                <p>
                  Larry understands Alaska's unique challenges: ice dams, permafrost movement, seismic vulnerability, and
                  freeze/thaw damage that inspectors from the Lower 48 routinely miss.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                >
                  Book an Inspection <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+19072233725"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-7 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:border-white/[0.28] hover:bg-white/[0.05]"
                >
                  <Phone className="h-4 w-4 text-[#60A5FA]" /> (907) 223-3725
                </a>
              </div>
            </div>

            {/* Credential sidebar */}
            <div className="space-y-4">
              <div className="rounded-xl border border-white/[0.07] bg-[#07111F] p-6">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Credentials</p>
                <ul className="space-y-3">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[13px] text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3B82F6]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-[#07111F] p-6">
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-1 text-[14px] font-semibold text-white">&ldquo;The only inspector I recommend.&rdquo;</p>
                <p className="text-[11px] text-slate-600">Anchorage Real Estate Agent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ON THE JOB PHOTOS */}
      <section className="border-t border-white/[0.04] bg-[#07111F] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">On the Job</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white">
              Every Inspection Gets the Same Treatment.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { src: "/images/larry-inspecting-2.jpg", alt: "Larry inspecting exterior systems" },
              { src: "/images/larry-inspecting-4.jpg", alt: "Larry inspecting furnace with tablet" },
              { src: "/images/larry-inspecting-10.jpg", alt: "Roof inspection from ladder" },
              { src: "/images/larry-inspecting-11.jpg", alt: "Attic inspection access" },
            ].map((img) => (
              <div key={img.src} className="relative h-52 overflow-hidden rounded-xl border border-white/[0.07]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/[0.04] bg-[#040D1A] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Our Commitment</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white">
              What Every Client Can Expect.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-white/[0.07] bg-[#07111F] p-6">
                <p className="mb-2 text-[15px] font-bold text-white">{v.title}</p>
                <p className="text-[13px] leading-relaxed text-slate-500">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
