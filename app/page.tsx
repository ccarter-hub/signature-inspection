import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Home Inspector in Anchorage, AK | Signature Inspection Service Inc.",
  description:
    "ASHI Certified home inspector in Anchorage, AK. Residential & commercial inspections, radon testing. 38+ years construction experience. Same-day reports. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a home inspection cost in Anchorage, AK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home inspection prices in Anchorage typically range from $400–$600 depending on square footage and property type. Signature Inspection Service provides competitive pricing — call (907) 223-3725 for a same-day quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a home inspection take in Anchorage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential home inspections in Anchorage take 2.5–4 hours depending on the home's size and age. You receive a detailed written report the same day.",
      },
    },
    {
      "@type": "Question",
      name: "What does a home inspection include in Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard Alaska home inspection covers the roof, attic, insulation, foundation, structural components, electrical system, plumbing, HVAC, windows, doors, and crawl spaces. We also check for issues specific to Alaska's climate: ice damming, permafrost settlement, and freeze/thaw damage.",
      },
    },
    {
      "@type": "Question",
      name: "Is radon a concern in Anchorage, AK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alaska has elevated radon levels in many areas. The EPA recommends testing every home — especially before purchase. Signature Inspection Service provides professional radon testing in Anchorage and the Mat-Su Valley.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be present for my home inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We strongly encourage buyers to attend. Walking the property with the inspector gives you a deeper understanding of the home's condition and any repairs needed. Sellers and agents are welcome to schedule without the buyer present.",
      },
    },
    {
      "@type": "Question",
      name: "What is an ASHI Certified home inspector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ASHI (American Society of Home Inspectors) certification requires passing a rigorous exam, completing 250 paid inspections, and adhering to a strict code of ethics and standards of practice. It is the gold standard for home inspection credentials.",
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

      {/* HERO */}
      <section className="bg-[#1a3a5c] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              ASHI Certified · Anchorage, AK
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Anchorage&apos;s Most Trusted Home Inspector
            </h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              38 years of Alaska construction experience. Same-day written reports.
              5-star rated. Serving Anchorage, Eagle River, Wasilla, Palmer, and the Kenai Peninsula.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+19072233725"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg text-lg transition-colors"
              >
                Call (907) 223-3725
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
              >
                Request Inspection →
              </Link>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-white font-bold text-xl mb-5">Request Your Inspection</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-amber-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold">
          <div>⭐⭐⭐⭐⭐ 5.0 Stars</div>
          <div>🏅 ASHI Certified Inspector</div>
          <div>📋 Same-Day Reports</div>
          <div>🔨 38 Yrs Construction Experience</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a3a5c] mb-3">
            Inspection Services in Anchorage, AK
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re buying a home, purchasing commercial property, or need radon testing,
            Signature Inspection Service delivers thorough, accurate reports you can act on.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Home Inspection",
                desc: "Comprehensive residential inspection covering structure, roof, electrical, plumbing, HVAC, and Alaska-specific issues like ice damming and permafrost settlement.",
                href: "/home-inspection-anchorage",
                cta: "Learn More",
              },
              {
                icon: "🏢",
                title: "Commercial Inspection",
                desc: "Detailed commercial building inspections for office buildings, retail spaces, warehouses, and investment properties throughout Anchorage.",
                href: "/commercial-inspection-anchorage",
                cta: "Learn More",
              },
              {
                icon: "☢️",
                title: "Radon Testing",
                desc: "Professional radon measurement for homes and businesses. EPA-approved testing methods. Alaska has elevated radon risk — test before you buy.",
                href: "/radon-testing-anchorage",
                cta: "Learn More",
              },
            ].map((s) => (
              <div key={s.href} className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-[#1a3a5c] mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.href} className="text-amber-600 font-semibold hover:underline text-sm">
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a3a5c] mb-6">
              Why Anchorage Home Buyers Choose Larry McBain
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "38 Years of Alaska Construction",
                  body: "Larry has spent nearly four decades building, remodeling, and evaluating properties in Alaska. He knows exactly where problems hide.",
                },
                {
                  title: "ASHI Certified — The Gold Standard",
                  body: "ASHI certification requires 250+ paid inspections and a rigorous national exam. It's the credential top buyers and agents trust.",
                },
                {
                  title: "Same-Day Written Report",
                  body: "You receive a detailed, photo-rich written report the same day as your inspection — so you can negotiate with confidence immediately.",
                },
                {
                  title: "Alaska-Specific Expertise",
                  body: "Ice dams, permafrost movement, freeze/thaw damage, seismic concerns — Larry has seen it all and knows what to look for.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-amber-500 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-[#1a3a5c]">{item.title}</p>
                    <p className="text-slate-600 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1a3a5c] text-white rounded-2xl p-8">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-2">About Larry McBain</p>
            <h3 className="text-2xl font-bold mb-4">President & Lead Inspector</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Larry McBain has been in the Alaska construction and real estate industry for over three
              decades. As founder of Signature Inspection Service Inc., he brings unmatched local
              knowledge to every inspection — from small condos in Midtown to large commercial
              properties across the Mat-Su Valley.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              His background includes 20 years of real estate experience, giving him a unique perspective
              on what buyers, sellers, and agents need from an inspection report.
            </p>
            <Link href="/about" className="text-amber-400 font-semibold hover:underline">
              Read Larry&apos;s Full Bio →
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a3a5c] mb-3">
            How the Process Works
          </h2>
          <p className="text-center text-slate-600 mb-10">Simple, fast, and stress-free.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Schedule in Minutes",
                body: "Call (907) 223-3725 or submit the form above. We respond within 1 business hour to confirm your inspection time.",
              },
              {
                step: "2",
                title: "Walk the Property Together",
                body: "Larry inspects every accessible area of the property. Buyers are encouraged to attend and ask questions in real time.",
              },
              {
                step: "3",
                title: "Receive Your Report Same Day",
                body: "A detailed written report with photos arrives the same day. Use it to negotiate repairs, plan improvements, or proceed with confidence.",
              },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold text-[#1a3a5c] text-lg mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#1a3a5c] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What Anchorage Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Larry was incredibly thorough. He caught several issues the previous inspector had missed, which saved us thousands in unexpected repairs. Highly recommend.",
                name: "Jennifer M.",
                detail: "Home Buyer, Anchorage",
              },
              {
                quote: "Professional, punctual, and detailed. The report was easy to read and included clear photos of every issue. Our real estate agent says Larry is the best in Anchorage.",
                name: "David & Carla T.",
                detail: "Home Buyers, Eagle River",
              },
              {
                quote: "We used Signature Inspection for our commercial building purchase. Larry's knowledge of construction made the difference — he spotted structural concerns others overlooked.",
                name: "Ryan K.",
                detail: "Commercial Property Buyer, Anchorage",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/10 rounded-xl p-6">
                <p className="text-amber-400 text-xl mb-3">★★★★★</p>
                <p className="text-slate-200 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a3a5c] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-slate-500 mb-10 text-sm">
            Common questions about home inspections in Anchorage, AK
          </p>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="border-b border-slate-200 pb-6">
                <h3 className="font-bold text-[#1a3a5c] mb-2">{item.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-3">
            Home Inspection Service Areas in Alaska
          </h2>
          <p className="text-slate-600 mb-6 text-sm">
            Signature Inspection Service covers Anchorage and all surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Anchorage, AK",
              "Eagle River, AK",
              "Wasilla, AK",
              "Palmer, AK",
              "Girdwood, AK",
              "Seward, AK",
              "Homer, AK",
              "Soldotna, AK",
              "Kenai, AK",
            ].map((area) => (
              <span
                key={area}
                className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-700 font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">
            Not sure if we cover your area?{" "}
            <a href="tel:+19072233725" className="text-[#1a3a5c] font-medium underline">
              Call (907) 223-3725
            </a>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-amber-500 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Schedule Your Inspection?
          </h2>
          <p className="text-amber-100 mb-6 text-lg">
            We respond within 1 business hour. Same-day reports. ASHI Certified.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+19072233725"
              className="bg-white text-amber-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-50 transition-colors"
            >
              Call (907) 223-3725
            </a>
            <Link
              href="/contact"
              className="bg-amber-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-800 transition-colors"
            >
              Book Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
