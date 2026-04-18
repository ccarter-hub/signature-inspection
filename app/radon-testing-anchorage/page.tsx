import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Radon Testing in Anchorage, AK | Signature Inspection Service",
  description:
    "Professional radon testing in Anchorage, AK. EPA-approved methods. Alaska has elevated radon risk — test before you buy. ASHI Certified. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/radon-testing-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Radon Testing in Anchorage, AK",
  provider: {
    "@type": "LocalBusiness",
    name: "Signature Inspection Service Inc.",
    telephone: "+1-907-223-3725",
  },
  description: "Professional EPA-approved radon testing for homes and commercial properties in Anchorage, AK and the Mat-Su Valley. Alaska has elevated radon levels — test before you buy or sell.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is radon a problem in Anchorage, Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alaska has elevated radon levels in many areas, including Anchorage, Eagle River, and the Mat-Su Valley. The EPA estimates radon causes 21,000 lung cancer deaths per year nationally. Testing is the only way to know your home's radon level.",
      },
    },
    {
      "@type": "Question",
      name: "What is a safe radon level?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The EPA recommends mitigating radon levels at or above 4 pCi/L. Levels between 2–4 pCi/L should also be reduced if possible. The national average indoor radon level is 1.3 pCi/L.",
      },
    },
    {
      "@type": "Question",
      name: "How long does radon testing take in Anchorage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Short-term radon tests take 48–96 hours. Long-term tests (90+ days) provide more accurate annual averages. For real estate transactions, 48-hour short-term tests are standard and accepted by most lenders and buyers.",
      },
    },
    {
      "@type": "Question",
      name: "How much does radon testing cost in Anchorage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Radon testing in Anchorage typically ranges from $150–$250. Testing can be combined with a home inspection for better pricing. Call (907) 223-3725 for a current quote.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my home has high radon levels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your home tests above 4 pCi/L, radon mitigation (a sub-slab depressurization system) can reduce levels by up to 99%. Mitigation systems typically cost $800–$2,500 and are highly effective. We can recommend licensed mitigation contractors in Anchorage.",
      },
    },
  ],
};

export default function RadonTestingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#1a3a5c] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Radon Testing · Anchorage, AK
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Radon Testing in Anchorage, AK
            </h1>
            <p className="text-slate-300 leading-relaxed mb-4">
              Alaska has elevated radon risk. Radon is the second leading cause of lung cancer in the U.S. —
              and it&apos;s colorless, odorless, and impossible to detect without a test.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Signature Inspection Service provides EPA-approved radon testing for homes and commercial
              properties throughout Anchorage and southcentral Alaska.
            </p>
            <a
              href="tel:+19072233725"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Call (907) 223-3725
            </a>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-bold text-lg mb-4">Schedule Radon Testing</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* WHAT IS RADON */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">What Is Radon?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil, rock,
              and water. It enters buildings through foundation cracks, sump pits, and gaps in floors and walls.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Radon has no smell, no color, and no taste. The only way to know if your home has dangerous
              levels is to test.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
              <strong>EPA Action Level:</strong> 4 pCi/L or higher requires mitigation.
              The national average indoor level is 1.3 pCi/L.
              <strong> Many Alaska homes test significantly higher.</strong>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">Why Alaska Has Higher Radon Risk</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Alaska&apos;s geology — particularly in Anchorage, Eagle River, and the Mat-Su Valley — contains
              elevated uranium concentrations in the soil and bedrock that lead to higher radon gas production.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Additionally, Alaska homes are tightly sealed for energy efficiency, which reduces natural
              ventilation and allows radon to accumulate indoors.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Alaska Section of Epidemiology recommends radon testing for all homes, especially
              below-grade spaces like basements and crawl spaces.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-8 text-center">How Radon Testing Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Schedule", body: "Call or submit a request. We confirm and place the test device at the lowest livable level of your home." },
              { step: "2", title: "Test Period", body: "Short-term tests take 48–96 hours with closed-house conditions. We manage placement to meet EPA protocol." },
              { step: "3", title: "Lab Analysis", body: "The test device is sent to an accredited laboratory for precise measurement." },
              { step: "4", title: "Written Report", body: "You receive a written report with your radon level and mitigation recommendations if needed." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {p.step}
                </div>
                <h3 className="font-bold text-[#1a3a5c] mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-8 text-center">
            Radon Testing FAQ — Anchorage, AK
          </h2>
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

      {/* CTA */}
      <section className="bg-amber-500 py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">
            Schedule Radon Testing in Anchorage
          </h2>
          <p className="text-amber-100 mb-6">
            Don&apos;t buy or sell a home without testing. Call now — we respond within 1 business hour.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+19072233725" className="bg-white text-amber-600 font-bold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors">
              Call (907) 223-3725
            </a>
            <Link href="/contact" className="bg-amber-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors">
              Book Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
