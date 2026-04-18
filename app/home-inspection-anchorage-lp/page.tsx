import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Home Inspection in Anchorage — Book Fast, Know What You're Buying",
  description:
    "Clear home inspections in Anchorage, AK with fast turnaround. ASHI Certified. 38+ years experience. Same-day reports. Call (907) 223-3725.",
  robots: { index: false, follow: false },
};

export default function LandingPage() {
  return (
    <>
      {/* MINIMAL HEADER */}
      <div className="bg-white border-b border-[#E5E7EB] py-4">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <div>
            <p className="font-bold text-[#0F172A] text-sm">Signature Inspection Service Inc.</p>
            <p className="text-[#64748B] text-xs">Anchorage, AK · ASHI Certified</p>
          </div>
          <a
            href="tel:+19072233725"
            className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            (907) 223-3725
          </a>
        </div>
      </div>

      {/* HERO WITH FORM ABOVE FOLD */}
      <section className="bg-[#0F172A] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Home Inspection in Anchorage — Book Fast, Know What You&apos;re Buying
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Clear inspections with fast turnaround. Don&apos;t close without knowing
              exactly what you&apos;re getting.
            </p>
            <div className="space-y-3">
              {[
                "38+ years Alaska construction experience",
                "Local Anchorage expert — knows Alaska-specific issues",
                "Clear same-day written reports",
                "ASHI Certified — gold standard credential",
                "Respond within 1 business hour",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="w-4 h-4 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-xs shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-2xl">
            <h2 className="text-[#0F172A] font-bold text-xl mb-1">Get Your Inspection</h2>
            <p className="text-[#64748B] text-sm mb-5">We respond within 1 business hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#0F172A] mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "1", title: "Book in minutes", body: "Call (907) 223-3725 or submit the form above. We confirm within 1 business hour." },
              { n: "2", title: "Thorough inspection", body: "Larry inspects every accessible area. You're welcome — and encouraged — to attend." },
              { n: "3", title: "Clear report same day", body: "Detailed, photo-rich written report with next steps delivered the same day." },
            ].map((step) => (
              <div key={step.n} className="card p-6 text-center">
                <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-sm">{step.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#0F172A] mb-8">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                quote: "Larry caught several issues the previous inspector missed. Saved us thousands in unexpected repairs. Best decision we made in the home-buying process.",
                name: "Jennifer M.",
                detail: "Home Buyer, Anchorage",
              },
              {
                quote: "Professional and thorough. The report was detailed with clear photos. Our agent says Larry is the most trusted inspector in Anchorage.",
                name: "David & Carla T.",
                detail: "Home Buyers, Eagle River",
              },
            ].map((t) => (
              <div key={t.name} className="card p-6">
                <p className="text-[#2563EB] text-lg mb-3">★★★★★</p>
                <p className="text-[#0F172A] text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-[#0F172A] text-sm">{t.name}</p>
                <p className="text-[#64748B] text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#2563EB] py-14 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Book?</h2>
          <p className="text-blue-100 mb-6">We respond within 1 business hour.</p>
          <a
            href="tel:+19072233725"
            className="inline-block bg-white text-[#2563EB] font-bold px-8 py-4 rounded-lg text-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150"
          >
            Call (907) 223-3725 Now
          </a>
        </div>
      </section>
    </>
  );
}
