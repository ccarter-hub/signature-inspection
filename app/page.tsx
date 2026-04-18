import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Home Inspector in Anchorage, AK | Signature Inspection Service Inc.",
  description:
    "ASHI Certified home inspector in Anchorage, AK. Get a clear, professional inspection before you buy. 38+ years construction experience. Same-day reports. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a home inspection include in Anchorage, AK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A home inspection in Anchorage covers 200+ items across all major systems: roof, attic, insulation, foundation, framing, electrical, plumbing, HVAC, windows, doors, and exterior. Alaska-specific checks include ice dam potential, permafrost settlement indicators, freeze/thaw damage, and seismic resilience — hazards that inspectors from the Lower 48 often miss.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a home inspection cost in Anchorage, Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home inspections in Anchorage typically cost $400–$600, depending on property size and age. Radon testing is available as an add-on. Call (907) 223-3725 for a same-day quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a home inspection take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most home inspections take 2–4 hours depending on the size and age of the property. You receive a complete written report with photos the same day.",
      },
    },
    {
      "@type": "Question",
      name: "Can a home fail a home inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — a home inspection does not pass or fail a property. It documents the current condition so buyers can make informed decisions, negotiate repairs, or walk away with confidence.",
      },
    },
    {
      "@type": "Question",
      name: "Is radon testing necessary in Anchorage, Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alaska has elevated radon concentrations in many areas, including Anchorage, Eagle River, and the Mat-Su Valley. The EPA recommends mitigation at 4 pCi/L or above. Testing is the only way to know your home's level. We offer 48-hour EPA-approved radon testing that can be bundled with any inspection.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose a local Anchorage home inspector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A local Anchorage inspector understands Alaska-specific risks that out-of-state inspectors routinely miss: ice damming, permafrost movement, freeze/thaw damage, and seismic vulnerability. Signature Inspection Service is led by Larry McBain, who has 38+ years of Alaska construction experience and is ASHI Certified.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="relative bg-[#0B1220] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/larry-inspecting-3.jpg"
            alt=""
            fill
            className="object-cover object-top opacity-50"
            sizes="100vw"
            priority
          />
          {/* Gradient flows right→left: right dark (covers nothing, form has own bg), left lighter so Larry shows through */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#0B1220]/90 via-[#0B1220]/65 to-[#0B1220]/42" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            {/* Social proof eyebrow */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <div className="flex items-center gap-1.5 bg-white/[0.08] border border-white/[0.15] px-3 py-1.5 rounded-full">
                <span className="text-yellow-400 text-xs">★★★★★</span>
                <span className="text-white text-xs font-semibold">5.0</span>
                <span className="text-slate-300 text-xs">· 47 Google Reviews</span>
              </div>
              <div className="bg-white/[0.08] border border-white/[0.15] px-3 py-1.5 rounded-full">
                <span className="text-slate-200 text-xs font-semibold tracking-wide">ASHI Certified</span>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-5">
              Anchorage Home Inspector You Can Trust — Before You Buy
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Know exactly what you&apos;re buying. Larry McBain delivers a clear, thorough inspection
              and a same-day report — so you can close with confidence or negotiate with leverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/contact" className="bg-[#3B82F6] hover:bg-[#2563EB] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-150 text-base text-center">
                Schedule an Inspection
              </Link>
              <a href="tel:+19072233725" className="border border-white/25 text-white hover:bg-white/[0.08] font-semibold px-7 py-3.5 rounded-lg transition-all duration-150 text-base text-center">
                Call (907) 223-3725
              </a>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                "38+ Years Alaska Construction",
                "Same-Day Written Reports",
                "ASHI Certified · Licensed & Insured",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-[#3B82F6] shrink-0">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Form card — premium soft surface, not stark white */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-[#64748B] text-xs">5.0 · 47 reviews</span>
            </div>
            <h2 className="text-[#0B1220] font-bold text-xl mb-1">Schedule Your Inspection</h2>
            <p className="text-[#64748B] text-sm mb-5">We respond within 1 business hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { stat: "★ 5.0", label: "47 Verified Google Reviews" },
              { stat: "ASHI", label: "Certified Home Inspector" },
              { stat: "38+", label: "Years Alaska Construction" },
              { stat: "Same Day", label: "Written Report Delivered" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center py-2">
                <span className="text-[#2563EB] font-bold text-lg leading-none mb-1">{item.stat}</span>
                <span className="text-[#64748B] text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO STRIP ─── */}
      <section className="bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { src: "/images/larry-inspecting-9.jpg", alt: "Larry McBain arriving at home inspection" },
            { src: "/images/larry-inspecting-2.jpg", alt: "Inspecting electrical panel" },
            { src: "/images/larry-inspecting-10.jpg", alt: "Roof inspection in Anchorage" },
            { src: "/images/larry-inspecting-8.jpg", alt: "Walking through home with client" },
          ].map((img) => (
            <div key={img.src} className="relative h-40 md:h-48 rounded-xl overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#2563EB] font-semibold text-xs uppercase tracking-widest mb-3">Complete Top-to-Bottom</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
              200+ Inspection Points. Nothing Missed.
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Every accessible system and component — documented with photos, rated by severity, and delivered in a clear same-day report.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              {
                icon: "🏠",
                title: "Structure & Foundation",
                items: ["Foundation & footings", "Framing & load-bearing", "Frost heave indicators", "Permafrost settlement"],
              },
              {
                icon: "🔌",
                title: "Electrical",
                items: ["Main panel & breakers", "Wiring & connections", "GFCI protection", "Outlets & fixtures"],
              },
              {
                icon: "🚿",
                title: "Plumbing",
                items: ["Supply & drain lines", "Water heater", "Fixtures & valves", "Freeze/thaw damage"],
              },
              {
                icon: "🌡️",
                title: "HVAC",
                items: ["Furnace & heat system", "Air distribution", "Thermostats", "Ventilation"],
              },
              {
                icon: "🏔️",
                title: "Roof & Attic",
                items: ["Shingles & flashing", "Ice dam potential", "Attic insulation", "Ventilation"],
              },
              {
                icon: "🪟",
                title: "Exterior",
                items: ["Siding & trim", "Windows & doors", "Decks & railings", "Grading & drainage"],
              },
              {
                icon: "🛋️",
                title: "Interior",
                items: ["Walls, ceilings, floors", "Stairs & railings", "Smoke detectors", "Garage door & opener"],
              },
              {
                icon: "🧪",
                title: "Alaska-Specific",
                items: ["Ice dam assessment", "Seismic resilience", "Freeze/thaw damage", "Crawl space moisture"],
              },
            ].map((cat) => (
              <div key={cat.title} className="card p-5">
                <div className="text-2xl mb-2">{cat.icon}</div>
                <h3 className="font-bold text-[#0F172A] text-sm mb-3">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#64748B]">
                      <span className="text-[#2563EB] mt-0.5 shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="tel:+19072233725" className="btn-primary text-base px-8 py-4">
              Schedule an Inspection — (907) 223-3725
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
              Inspection Services in Anchorage, AK
            </h2>
            <p className="text-[#64748B] max-w-xl mx-auto">
              Bundle services for complete coverage — home inspection, commercial, and radon testing
              from one ASHI Certified inspector.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/larry-inspecting-7.jpg",
                alt: "Home electrical panel inspection Anchorage AK",
                title: "Home Inspection",
                tag: "Most Popular",
                body: "Complete evaluation of 200+ items — roof to foundation. ASHI standards plus Alaska-specific checks.",
                href: "/home-inspection-anchorage",
              },
              {
                img: "/images/larry-inspecting-4.jpg",
                alt: "HVAC furnace inspection Anchorage commercial",
                title: "Commercial Inspection",
                tag: null,
                body: "Detailed inspections for offices, retail, and warehouses. Protect your investment with a builder's perspective.",
                href: "/commercial-inspection-anchorage",
              },
              {
                img: "/images/larry-inspecting-6.jpg",
                alt: "Radon testing Alaska",
                title: "Radon Testing",
                tag: "Add-On Available",
                body: "48-hour EPA-approved testing. Bundle with any inspection for a complete picture — Alaska has elevated radon risk.",
                href: "/radon-testing-anchorage",
              },
            ].map((s) => (
              <div key={s.href} className="card overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image src={s.img} alt={s.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  {s.tag && (
                    <div className="absolute top-3 left-3 bg-[#2563EB] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {s.tag}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{s.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-1">{s.body}</p>
                  <Link href={s.href} className="btn-primary text-center text-sm">
                    Schedule Inspection →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
              Simple, Straightforward, Done Right
            </h2>
            <p className="text-[#64748B]">Book to report in three steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                img: "/images/larry-inspecting-9.jpg",
                alt: "Larry McBain arriving at home for inspection",
                title: "Call or book online",
                body: "Call (907) 223-3725 or submit the form. We confirm within 1 business hour and are typically available within 1–3 days.",
              },
              {
                n: "2",
                img: "/images/larry-inspecting-8.jpg",
                alt: "Larry walking through home with client",
                title: "We perform a thorough inspection",
                body: "Larry inspects 200+ items across every accessible system. Buyers are welcome and encouraged to attend.",
              },
              {
                n: "3",
                img: "/images/larry-inspecting-12.jpg",
                alt: "Larry writing inspection report on laptop",
                title: "Report delivered same day",
                body: "A detailed, photo-rich written report with severity ratings arrives the same day your inspection is completed.",
              },
            ].map((step) => (
              <div key={step.n} className="card overflow-hidden">
                <div className="relative h-44">
                  <Image src={step.img} alt={step.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.n}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0F172A] mb-2">{step.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="tel:+19072233725" className="btn-primary text-base px-8 py-4">
              Call to Book — (907) 223-3725
            </a>
          </div>
        </div>
      </section>

      {/* ─── THE SIGNATURE PROMISE ─── */}
      <section className="bg-[#0F172A] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#2563EB] font-semibold text-xs uppercase tracking-widest mb-3">Our Commitment to You</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">The Signature Promise</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-12">
            Every inspection Larry completes comes with the same unconditional commitment — no exceptions.
          </p>
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {[
              {
                icon: "📋",
                title: "Same-Day Written Report",
                body: "You receive your full written report — with photos and severity ratings — the same day as your inspection. No waiting.",
              },
              {
                icon: "⏱️",
                title: "1-Hour Response Guarantee",
                body: "When you call or submit the form, we respond within 1 business hour. Your time matters.",
              },
              {
                icon: "✅",
                title: "ASHI Standards, Every Time",
                body: "Every inspection follows ASHI standards of practice — the most rigorous in the industry — backed by 38+ years of Alaska construction experience.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-white/[0.06] border border-white/[0.10] rounded-xl p-6">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/larry-inspecting-1.jpg"
                alt="Larry McBain ASHI Certified Home Inspector Anchorage AK"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0F172A] text-white rounded-xl px-5 py-4 shadow-xl">
              <p className="text-[#2563EB] text-xs font-bold uppercase tracking-wide mb-0.5">ASHI Certified</p>
              <p className="font-bold text-sm">Larry McBain</p>
              <p className="text-slate-400 text-xs">38+ Years Experience</p>
            </div>
          </div>

          <div>
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">
              About Larry McBain
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-5">
              Experience You Can Actually Rely On
            </h2>
            <p className="text-[#64748B] leading-relaxed mb-7">
              With decades of construction and real estate experience, you&apos;re getting real insight —
              not just a checklist. Larry has spent nearly 40 years building and evaluating properties
              across Alaska, and he knows exactly where problems hide.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "ASHI Certified — national exam + 250 paid inspections",
                "38+ years Alaska general contracting",
                "20+ years Alaska real estate",
                "Knows the hazards inspectors from the Lower 48 miss",
                "5.0 stars across 47 verified Google reviews",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#0F172A]">
                  <span className="w-5 h-5 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#2563EB] text-xs shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-outline text-sm">
              Read Larry&apos;s Full Bio →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── RADON ─── */}
      <section className="bg-[#0F172A] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#2563EB] font-semibold text-xs uppercase tracking-widest mb-3">Add-On Service</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Radon Is Invisible — But It Matters
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Alaska has elevated radon concentrations in many areas including Anchorage, Eagle River, and the Mat-Su Valley.
              You won&apos;t know it&apos;s there without testing.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Bundle 48-hour EPA-approved radon testing with any inspection.
              Most clients add it for complete peace of mind.
            </p>
            <Link href="/radon-testing-anchorage" className="bg-[#2563EB] hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 inline-block">
              Add Radon Testing →
            </Link>
          </div>
          <div className="card bg-white/5 border-white/10 p-8">
            <div className="space-y-5">
              {[
                { icon: "🚫", label: "No color, no smell, no taste" },
                { icon: "⚠️", label: "Second leading cause of lung cancer in the U.S." },
                { icon: "🧪", label: "48-hour EPA-approved short-term test" },
                { icon: "📄", label: "Written report with mitigation guidance if needed" },
                { icon: "📍", label: "Many Alaska homes test significantly above EPA action level" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 text-sm text-slate-300">
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="font-bold text-[#0F172A]">5.0</span>
              <span className="text-[#64748B] text-sm">· 47 Verified Google Reviews</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-[#0F172A]">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Larry was incredibly thorough. He caught several issues the previous inspector missed, which saved us thousands. Highly recommend.", name: "Jennifer M.", detail: "Home Buyer, Anchorage" },
              { quote: "Professional, punctual, and detailed. The report was easy to read with clear photos of every issue. Our agent says Larry is the best in Anchorage.", name: "David & Carla T.", detail: "Home Buyers, Eagle River" },
              { quote: "We used Signature Inspection for our commercial building purchase. Larry's construction knowledge made the difference — he spotted structural concerns others overlooked.", name: "Ryan K.", detail: "Commercial Buyer, Anchorage" },
            ].map((t) => (
              <div key={t.name} className="card p-6">
                <p className="text-yellow-400 text-lg mb-3">★★★★★</p>
                <p className="text-[#0F172A] text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-[#0F172A] text-sm">{t.name}</p>
                <p className="text-[#64748B] text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=Signature+Inspection+Service+Anchorage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] text-sm font-semibold hover:underline"
            >
              Read all 47 reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-2">Service Areas</h2>
          <p className="text-[#64748B] mb-7 text-sm">Serving Anchorage and all of southcentral Alaska.</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Anchorage", "Wasilla", "Eagle River", "Palmer", "Girdwood", "Seward", "Homer", "Kenai Peninsula"].map((area) => (
              <span key={area} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-full px-4 py-2 text-sm text-[#0F172A] font-medium shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center text-[#0F172A] mb-2">Common Questions</h2>
          <p className="text-center text-[#64748B] mb-10 text-sm">Everything you need to know before booking.</p>
          <FaqAccordion items={faqSchema.mainEntity} />
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#2563EB] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Schedule Your Inspection Today
          </h2>
          <p className="text-blue-100 text-lg mb-2">Get clarity before you commit.</p>
          <p className="text-blue-200 text-sm mb-8">ASHI Certified · Same-Day Reports · 1-Hour Response Guarantee</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#2563EB] font-bold px-8 py-4 rounded-lg text-base hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">
              Book Online
            </Link>
            <a href="tel:+19072233725" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-base hover:-translate-y-0.5 hover:bg-white/10 transition-all duration-150">
              Call (907) 223-3725
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
