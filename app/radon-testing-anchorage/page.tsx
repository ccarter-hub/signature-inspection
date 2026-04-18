import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Radon Testing in Anchorage, AK | Signature Inspection Service",
  description:
    "Professional radon testing in Anchorage, AK. EPA-approved 48-hour testing. Alaska has elevated radon risk. ASHI Certified. Call (907) 223-3725.",
  alternates: { canonical: "https://signatureinspectionservice.com/radon-testing-anchorage" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Radon Testing in Anchorage, AK",
  provider: { "@type": "LocalBusiness", name: "Signature Inspection Service Inc.", telephone: "+1-907-223-3725" },
  description: "Professional EPA-approved radon testing in Anchorage, AK. 48-hour testing for homes and commercial properties. Alaska has elevated radon risk.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is radon a problem in Anchorage, Alaska?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Alaska has elevated radon levels in many areas including Anchorage, Eagle River, and the Mat-Su Valley. Testing is the only way to know your home's radon level." },
    },
    {
      "@type": "Question",
      name: "What is a safe radon level?",
      acceptedAnswer: { "@type": "Answer", text: "The EPA recommends mitigating levels at or above 4 pCi/L. Levels between 2–4 pCi/L should also be reduced if possible. The national average indoor level is 1.3 pCi/L." },
    },
    {
      "@type": "Question",
      name: "How long does radon testing take in Anchorage?",
      acceptedAnswer: { "@type": "Answer", text: "Short-term radon tests take 48–96 hours. For real estate transactions, 48-hour short-term tests are standard and accepted by most lenders and buyers." },
    },
    {
      "@type": "Question",
      name: "What happens if my home has high radon levels?",
      acceptedAnswer: { "@type": "Answer", text: "If your home tests above 4 pCi/L, a sub-slab depressurization system can reduce levels by up to 99%. Systems typically cost $800–$2,500. We can recommend licensed mitigation contractors in Anchorage." },
    },
  ],
};

export default function RadonTestingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#0F172A] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3">Radon Testing · Anchorage, AK</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              Radon Testing in Anchorage, AK
            </h1>
            <p className="text-slate-300 leading-relaxed mb-4">
              Radon is invisible, odorless, and the second leading cause of lung cancer in the U.S.
              Alaska has elevated radon risk — the only way to know your level is to test.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              We provide EPA-approved 48-hour radon testing for homes and commercial properties
              throughout Anchorage and southcentral Alaska.
            </p>
            <a href="tel:+19072233725" className="bg-[#2563EB] hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 inline-block">
              Call (907) 223-3725
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-[#0F172A] font-bold text-lg mb-1">Schedule Radon Testing</h2>
            <p className="text-[#64748B] text-sm mb-4">We respond within 1 business hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">What Is Radon?</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil and rock.
              It enters buildings through foundation cracks, sump pits, and gaps in floors and walls.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-4">
              You can&apos;t see it, smell it, or taste it. The only way to know your home&apos;s level is to test.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
              <strong>EPA Action Level:</strong> 4 pCi/L or above requires mitigation.
              The national average is 1.3 pCi/L. <strong>Many Alaska homes test significantly higher.</strong>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Why Alaska Has Higher Risk</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Alaska&apos;s geology — particularly around Anchorage, Eagle River, and the Mat-Su Valley — contains
              elevated uranium concentrations that lead to higher radon gas production.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Alaska homes are also tightly sealed for energy efficiency, which reduces ventilation
              and allows radon to accumulate.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              The Alaska Section of Epidemiology recommends testing all homes — especially below-grade spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">How Radon Testing Works</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { n: "1", title: "Schedule", body: "Call or request online. We place the test device at the lowest livable level." },
              { n: "2", title: "48-Hour Test", body: "Short-term testing under closed-house conditions per EPA protocol." },
              { n: "3", title: "Lab Analysis", body: "Device sent to accredited laboratory for precise measurement." },
              { n: "4", title: "Written Report", body: "You receive your radon level with mitigation guidance if needed." },
            ].map((p) => (
              <div key={p.n} className="card p-5 text-center">
                <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {p.n}
                </div>
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{p.title}</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 text-center">Radon Testing FAQ — Anchorage, AK</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="card p-5">
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{item.name}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2563EB] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Schedule Radon Testing in Anchorage</h2>
          <p className="text-blue-100 mb-6">Don&apos;t buy or sell without testing. Call now — we respond within 1 business hour.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+19072233725" className="bg-white text-[#2563EB] font-bold px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">
              Call (907) 223-3725
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-150">
              Book Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
