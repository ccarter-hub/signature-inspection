import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Star, ShieldCheck, Clock } from "lucide-react";

import TrustStrip from "@/components/TrustStrip";
import ReportPreview from "@/components/ReportPreview";
import CTA from "@/components/CTA";
import FaqAccordion from "@/components/FaqAccordion";
import InstantQuote from "@/components/InstantQuote";
import ComparisonTable from "@/components/ComparisonTable";
import VideoSection from "@/components/VideoSection";
import RealWorldProof from "@/components/RealWorldProof";
import GuaranteeSection from "@/components/GuaranteeSection";

export const metadata: Metadata = {
  title: "Home Inspector Anchorage AK | ASHI Certified | Signature Inspection",
  description:
    "Anchorage's top-rated home inspector — ASHI Certified, 5.0 stars (47 reviews), same-day written reports. Larry McBain: 38+ years Alaska construction experience. Home, commercial & radon. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a home inspection cost in Anchorage, AK?",
      acceptedAnswer: { "@type": "Answer", text: "Home inspections in Anchorage start at $350 for residential properties. Commercial inspections start at $500 and radon testing starts at $125. Bundling a home inspection with radon testing saves money. Call (907) 223-3725 for a same-day quote." },
    },
    {
      "@type": "Question",
      name: "What does a home inspection in Anchorage cover?",
      acceptedAnswer: { "@type": "Answer", text: "A comprehensive Anchorage home inspection covers 200+ points including the roof, attic, insulation, foundation, electrical, plumbing, HVAC, and Alaska-specific hazards like ice dams, permafrost settlement, freeze/thaw damage, and seismic vulnerability." },
    },
    {
      "@type": "Question",
      name: "How quickly can I get a home inspection in Anchorage?",
      acceptedAnswer: { "@type": "Answer", text: "We typically schedule within 1–3 business days, but scheduling fills 5–7 days out during busy seasons. We respond to all requests within 1 business hour. Call (907) 223-3725 for urgent timelines." },
    },
    {
      "@type": "Question",
      name: "Do you provide same-day inspection reports in Anchorage?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Your written inspection report is delivered the same day as the inspection — complete with color photos, severity ratings (critical/monitor/acceptable), and plain-English findings ready for negotiation before your contingency window closes." },
    },
    {
      "@type": "Question",
      name: "Do you serve Eagle River, Wasilla, Palmer, and the Mat-Su Valley?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We serve all of Southcentral Alaska including Anchorage, Eagle River, Wasilla, Palmer, Mat-Su Valley, Girdwood, Seward, Homer, and the Kenai Peninsula. Call (907) 223-3725 to confirm availability for your area." },
    },
    {
      "@type": "Question",
      name: "What makes Signature Inspection Service different from other Anchorage home inspectors?",
      acceptedAnswer: { "@type": "Answer", text: "Larry McBain is ASHI Certified — a national exam plus 250 paid inspections — and brings 38+ years of Alaska general contracting experience. He knows ice dams, permafrost, and freeze/thaw damage from building Alaska homes. His same-day reports and 1-hour response guarantee set the standard in Anchorage." },
    },
    {
      "@type": "Question",
      name: "What happens if the home inspection finds serious problems?",
      acceptedAnswer: { "@type": "Answer", text: "Serious findings are a normal part of the inspection process and often lead to negotiation leverage, not deal-killers. Larry's report uses a severity-coding system (critical / monitor / acceptable) and plain-English explanations so you know exactly what to negotiate, what to repair after closing, and what's cosmetic. Many buyers use findings to negotiate thousands off the purchase price. Larry is available by phone to walk you through the report." },
    },
    {
      "@type": "Question",
      name: "How long does a home inspection take in Anchorage?",
      acceptedAnswer: { "@type": "Answer", text: "A typical Anchorage home inspection takes 2.5–4 hours depending on the size and age of the property. Larger homes, older construction, or properties with known issues may take longer. You're welcome to attend — most buyers find it valuable to walk through with Larry and ask questions in real time." },
    },
    {
      "@type": "Question",
      name: "Should I be present during the home inspection?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, highly recommended. Attending the inspection lets you ask questions in real time, see findings firsthand, and understand the context of each item in the report. Larry explains everything on-site in plain language so nothing in the report surprises you. Plan for 2.5–4 hours." },
    },
  ],
};

const reviews = [
  {
    quote: "Larry found a foundation issue that helped us negotiate $18,000 off the purchase price. Best $350 we ever spent.",
    name: "Jennifer M.",
    detail: "Home Buyer · Anchorage",
    ago: "3 months ago",
  },
  {
    quote: "Professional, punctual, and detailed. The report was clear and easy to read — perfect photos, clear severity ratings. Our agent says Larry is the best in Anchorage.",
    name: "David & Carla T.",
    detail: "Home Buyers · Eagle River",
    ago: "5 months ago",
  },
  {
    quote: "Used Signature for a commercial purchase. Larry's construction background made all the difference — he spotted structural concerns others would have missed entirely.",
    name: "Ryan K.",
    detail: "Commercial Buyer · Anchorage",
    ago: "6 months ago",
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── 1. HERO — image-forward, no overlay card ─────────────────────── */}
      <section className="relative overflow-hidden bg-[#030912]" style={{ minHeight: "100svh" }}>
        <Image
          src="/images/larry-inspecting-9.jpg"
          alt="Larry McBain arriving at a home inspection — Signature Inspection Service Anchorage"
          fill
          priority
          className="object-cover hero-drift hero-img-pos"
          sizes="(max-width: 640px) 100vw, 100vw"
        />

        {/* Overlay stack — mobile / desktop split */}
        <div className="absolute inset-0 bg-[#030912]/15 sm:bg-[#030912]/20" />
        {/* Mobile: strong bottom-up gradient for text readability */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-[#030912] via-[#030912]/60 to-[#030912]/10" />
        {/* Desktop: left-to-right gradient — text column protection */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-[#030912]/92 via-[#030912]/35 to-transparent" />
        {/* Desktop: bottom grounding */}
        <div className="absolute inset-x-0 bottom-0 h-72 hidden sm:block bg-gradient-to-t from-[#030912] via-[#030912]/60 to-transparent" />
        {/* Mobile glow — smaller, supports CTA area */}
        <div className="pointer-events-none absolute bottom-[18%] -left-6 h-[300px] w-[300px] rounded-full bg-[#1d4ed8]/[0.20] blur-[70px] sm:hidden" />
        {/* Desktop glow — cinematic */}
        <div className="pointer-events-none absolute bottom-[5%] -left-16 h-[700px] w-[700px] rounded-full bg-[#1d4ed8]/[0.22] blur-[100px] hidden sm:block" />

        {/* Content — bottom-anchored, left-aligned */}
        <div
          className="relative z-10 flex w-full flex-col justify-end px-5 pb-6 pt-24 sm:pb-20 sm:pt-28 sm:px-10"
          style={{ minHeight: "100svh" }}
        >
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-[600px]">

              {/* Urgency chip */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.07] px-3.5 py-1.5 sm:px-4">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-red-300">
                  Scheduling fills 5–7 days out · Check availability now
                </span>
              </div>

              <h1
                className="hero-headline-size mb-5 sm:mb-4 font-display font-bold leading-[1.05] text-white"
                style={{ letterSpacing: "-0.020em", textShadow: "0 2px 20px rgba(0,0,0,0.80)" }}
              >
                Most Buyers Find
                <br className="hidden sm:block" /> Out Too Late.{" "}
                <span className="text-[#93C5FD]">You Won&rsquo;t.</span>
              </h1>

              <p className="mb-6 sm:mb-5 text-[15px] sm:text-[16px] leading-[1.65] text-slate-200 sm:text-slate-100 sm:max-w-[500px]">
                <span className="sm:hidden">ASHI Certified · 200+ point inspection · Same-day written report.</span>
                <span className="hidden sm:inline">Larry McBain delivers a 200+ point ASHI Certified inspection with a same-day written report — giving you real leverage before your contingency expires.</span>
              </p>

              {/* ── Mobile CTAs — call-dominant ── */}
              <div className="sm:hidden mb-3 flex flex-col gap-3">
                <a
                  href="tel:+19072233725"
                  className="cta-ring flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#2563EB] px-6 py-4 text-[17px] font-bold text-white shadow-[0_4px_24px_rgba(37,99,235,0.55)] transition-all duration-150 active:scale-[0.98]"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  Call Now — (907) 223-3725
                </a>
                <p className="text-center text-[11px] leading-snug text-slate-400">
                  Speak directly to your inspector · Same-day response
                </p>
                <Link
                  href="#quote"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.25] bg-white/[0.07] px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-150 active:scale-[0.98]"
                >
                  Book My Inspection <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* ── Desktop CTAs ── */}
              <div className="hidden sm:flex mb-4 gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white shadow-[0_0_32px_rgba(37,99,235,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                >
                  Book My Inspection <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+19072233725"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.20] bg-white/[0.05] px-7 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/[0.35] hover:bg-white/[0.10]"
                >
                  <Phone className="h-4 w-4 text-[#93C5FD]" /> (907) 223-3725
                </a>
              </div>

              {/* Micro-testimonial */}
              <p className="mb-5 text-[11px] italic leading-snug text-slate-500">
                &ldquo;Found a $18k foundation issue. Best $350 we ever spent.&rdquo; — Jennifer M., Anchorage
              </p>

              {/* Trust strip */}
              <p className="mb-4 text-[13px] sm:text-[12px] text-slate-300 sm:text-slate-400">
                Home inspections from{" "}<span className="font-semibold text-white sm:text-slate-200">$350</span>{" "}·{" "}Same-day written report{" "}·{" "}Fee-back guarantee
              </p>

              {/* Proof row — 2-col grid on mobile, flex row on desktop */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2 sm:border-t sm:border-white/[0.12] sm:pt-5">
                {[
                  { icon: <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />, text: "Same-Day Report" },
                  { icon: <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />, text: "5.0 · 47 Reviews" },
                  { icon: <ShieldCheck className="h-3.5 w-3.5 text-[#93C5FD]" />, text: "ASHI Certified" },
                  { icon: <Clock className="h-3.5 w-3.5 text-[#93C5FD]" />, text: "1-Hr Response" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5">
                    {icon}
                    <span className="text-[12px] font-medium text-slate-300">{text}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. FAST DECISION TRUST BAND ──────────────────────────────────── */}
      <section className="border-t border-white/[0.06] bg-[#07111F] py-5">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { stat: "Same Day", label: "Written report delivered", accent: "#34D399" },
              { stat: "1 Hour", label: "Response guaranteed", accent: "#60A5FA" },
              { stat: "5.0 ★", label: "47 verified reviews", accent: "#FBBF24" },
              { stat: "ASHI", label: "Certified inspector", accent: "#60A5FA" },
            ].map(({ stat, label, accent }) => (
              <div key={stat} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <p className="text-[18px] font-black" style={{ color: accent }}>{stat}</p>
                <p className="text-[11px] leading-tight text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. INSTANT QUOTE ─────────────────────────────────────────────── */}
      <InstantQuote />

      {/* ─── 5. TRUST STRIP ───────────────────────────────────────────────── */}
      <TrustStrip />

      {/* ─── 6. COMPARISON TABLE ──────────────────────────────────────────── */}
      <ComparisonTable />

      {/* ─── 7. VIDEO / TRUST BUILDER ─────────────────────────────────────── */}
      <VideoSection />

      {/* ─── 9. REAL-WORLD PROOF ──────────────────────────────────────────── */}
      <RealWorldProof />

      {/* ─── 10. GUARANTEE ────────────────────────────────────────────────── */}
      <GuaranteeSection />

      {/* ─── 10. REPORT PREVIEW ───────────────────────────────────────────── */}
      <ReportPreview />

      {/* ─── 11. REVIEWS — warm light section for contrast ─────────────────── */}
      <section className="bg-[#F5F3EE] py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mb-8 text-center">
            <div className="mb-5 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#E0DBCF] bg-white px-5 py-2.5 shadow-sm">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-[13px] font-semibold text-[#475569]">47 Google Reviews</span>
              <span className="h-4 w-px bg-[#E0DBCF]" />
              <svg className="h-4 w-4 shrink-0" fill="#1877F2" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] font-semibold text-[#475569]">Facebook Reviews</span>
              <span className="h-4 w-px bg-[#E0DBCF]" />
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm font-bold text-[#0F172A]">5.0</span>
            </div>
            <h2
              className="font-display font-bold text-[#0F172A] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              What Anchorage Buyers Say
            </h2>
            <p className="mt-3 text-[15px] text-[#64748B]">47+ five-star reviews across Google and Facebook.</p>
          </div>

          <div className="mb-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="flex flex-col rounded-2xl border border-[#EAE7DF] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="mb-4 text-[17px] text-yellow-400">★★★★★</span>
                <p className="mb-6 flex-1 text-[14px] leading-[1.7] text-[#334155]">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-[#F0EDE8] pt-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#3B82F6] text-sm font-bold text-white">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold leading-tight text-[#0F172A]">{r.name}</p>
                    <p className="text-[11px] text-[#94A3B8]">{r.detail} · {r.ago}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.google.com/maps/place/Signature+Inspection+Service+Inc/@61.1743,-149.2843,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E0DBCF] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0F172A] shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              47 Google Reviews <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.facebook.com/SignatureInspectionService/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E0DBCF] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1877F2] shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <svg className="h-4 w-4 shrink-0" fill="#1877F2" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              See Facebook Reviews <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 9. INSPECTOR + AGENT TRUST ───────────────────────────────────── */}
      <section className="border-t border-white/[0.04] bg-[#040D1A] py-8 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid items-center gap-10 md:gap-14 md:grid-cols-2">
            {/* Photo */}
            <div className="relative order-2 md:order-1">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[#2563EB]/[0.05] blur-2xl" />
              <div className="relative h-[440px] overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.60)]">
                <Image
                  src="/images/larry-inspecting-1.jpg"
                  alt="Larry McBain — ASHI Certified Home Inspector, Anchorage AK"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A]/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-4 max-w-[240px] rounded-2xl border border-white/[0.10] bg-[#0B1628] px-5 py-4 shadow-2xl">
                <div className="mb-1.5 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-1 text-[12px] font-semibold leading-snug text-white">
                  &ldquo;The only inspector I recommend.&rdquo;
                </p>
                <p className="text-[10px] text-slate-600">Anchorage Real Estate Agent</p>
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 md:order-2">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
                The Inspector
              </p>
              <h2
                className="mb-5 font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
              >
                38 Years Building Alaska Homes.{" "}
                <span className="text-[#60A5FA]">Now He Protects Buyers.</span>
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-slate-400">
                Larry McBain isn&rsquo;t reading from a checklist — he built these homes. That
                construction background catches ice dam risk, permafrost movement, and
                freeze/thaw damage that other inspectors don&rsquo;t even know to look for.
              </p>
              <ul className="mb-9 space-y-3.5">
                {[
                  "ASHI Certified — national exam + 250 paid inspections",
                  "38+ years Alaska general contracting background",
                  "Catches ice dams, permafrost, and freeze/thaw damage others miss",
                  "Same-day written report — before re-inspection windows close",
                  "1-hour response guarantee — every time, without exception",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3B82F6]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_0_44px_rgba(37,99,235,0.50)]"
                >
                  Book an Inspection <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+19072233725"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-7 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:border-white/[0.28] hover:bg-white/[0.05]"
                >
                  <Phone className="h-4 w-4 text-[#60A5FA]" /> Speak with Larry
                </a>
              </div>
            </div>
          </div>

          {/* Agent trust band */}
          <div className="mt-20 rounded-2xl border border-white/[0.07] bg-[#07111F] p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
                  For Real Estate Agents
                </p>
                <h3 className="mb-3 font-display text-[22px] font-bold leading-tight text-white">
                  The Inspector Your Clients Thank You For.
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-400">
                  Same-day reports. 1-hour response. Findings written for negotiation. We make deals close — not stall.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="tel:+19072233725"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" /> Schedule for a Client
                </a>
                <div className="flex flex-col justify-center">
                  <p className="text-[11px] text-slate-600">(907) 223-3725</p>
                  <p className="text-[11px] text-slate-600">Never goes to voicemail</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-white/[0.05] pt-6">
              {[
                "1-hr response guarantee",
                "Same-day reports",
                "Severity-coded for negotiation",
                "Buyers welcome on-site",
                "Direct line for urgent closings",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#3B82F6]" />
                  <span className="text-[13px] text-slate-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.04] bg-[#07111F] py-8 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">Service Area</p>
              <h2 className="mb-4 font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
                Home Inspections Across Southcentral Alaska
              </h2>
              <p className="mb-6 text-[14px] leading-relaxed text-slate-500">
                We serve Anchorage and all surrounding communities. Whether you're buying in Eagle River, closing on a Mat-Su property, or purchasing commercial space in downtown Anchorage — we cover your area.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Anchorage","Eagle River","Wasilla","Palmer","Mat-Su Valley","Girdwood","Seward","Homer","Kenai","Soldotna","Big Lake","Chugiak"].map((area) => (
                  <span key={area} className="rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-slate-400">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: "Home Inspection", href: "/home-inspection-anchorage", desc: "From $350 · Same-day report" },
                { label: "Commercial Inspection", href: "/commercial-inspection-anchorage", desc: "From $500 · Investor-ready" },
                { label: "Radon Testing", href: "/radon-testing-anchorage", desc: "From $125 · EPA method" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex flex-col rounded-xl border border-white/[0.08] bg-[#040D1A] p-4 transition-all duration-200 hover:border-[#2563EB]/40 hover:bg-[#040D1A]"
                >
                  <p className="mb-1 text-[13px] font-bold text-white">{s.label}</p>
                  <p className="text-[11px] text-slate-500">{s.desc}</p>
                  <span className="mt-3 text-[11px] font-semibold text-[#3B82F6]">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. FAQ ──────────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.04] bg-[#030912] py-8 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">FAQ</p>
            <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
              Home Inspection Questions — Anchorage, AK
            </h2>
            <p className="mt-3 text-[14px] text-slate-500">
              Quick answers for buyers, agents, and property investors.
            </p>
          </div>
          <FaqAccordion items={faqSchema.mainEntity} />
          <div className="mt-8 text-center">
            <p className="mb-3 text-[13px] text-slate-500">Have a question not listed here?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-[14px] font-bold text-white transition-all duration-200 hover:bg-[#1d4ed8]">
                Ask Us Directly
              </Link>
              <a href="tel:+19072233725" className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.05]">
                <Phone className="h-4 w-4 text-[#60A5FA]" /> (907) 223-3725
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 12. FINAL CTA ────────────────────────────────────────────────── */}
      <CTA />
    </>
  );
}
