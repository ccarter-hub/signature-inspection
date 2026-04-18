import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Larry McBain | ASHI Certified Home Inspector Anchorage, AK",
  description:
    "Meet Larry McBain, ASHI Certified home inspector in Anchorage, AK. 38+ years Alaska construction experience and 20+ years real estate. Founder of Signature Inspection Service Inc.",
  alternates: { canonical: "https://signatureinspectionservice.com/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Larry McBain",
  jobTitle: "ASHI Certified Home Inspector",
  worksFor: { "@type": "Organization", name: "Signature Inspection Service Inc." },
  description: "ASHI Certified home inspector with 38+ years of Alaska construction experience and 20+ years in real estate.",
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section className="bg-[#0F172A] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3">About</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Larry McBain, President</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            ASHI Certified Home Inspector · 38+ Years Alaska Construction ·
            Founder of Signature Inspection Service Inc.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-5 text-[#64748B] leading-relaxed">
              <p>
                Larry McBain has spent nearly four decades working in Alaska&apos;s construction and real estate
                industries. As a general contractor with 38+ years of hands-on experience, he has built,
                remodeled, and evaluated hundreds of properties across Anchorage and southcentral Alaska.
              </p>
              <p>
                After 20+ years in Alaska real estate, Larry founded Signature Inspection Service Inc. to
                give buyers, sellers, and agents access to the kind of deep, construction-level property
                knowledge that generic inspection services simply can&apos;t provide.
              </p>
              <p>
                Larry holds ASHI (American Society of Home Inspectors) certification — the gold standard
                in the industry. ASHI requires passing a national exam, completing 250 paid inspections,
                and ongoing continuing education.
              </p>
              <p>
                His background in construction gives every Signature Inspection report a builder&apos;s
                perspective. He doesn&apos;t just note deficiencies — he explains what they mean, how serious
                they are, and what it will take to address them.
              </p>
              <p>
                Larry understands Alaska&apos;s unique challenges: ice dams, permafrost movement, seismic
                vulnerability, and freeze/thaw damage that inspectors from the Lower 48 routinely miss.
              </p>
            </div>

            <div className="space-y-4">
              <div className="card p-5">
                <h3 className="font-bold text-[#0F172A] mb-3">Credentials</h3>
                <ul className="space-y-2 text-sm text-[#64748B]">
                  {[
                    "ASHI Certified Home Inspector",
                    "38+ Years General Contracting",
                    "20+ Years Real Estate Experience",
                    "Licensed & Insured in Alaska",
                    "5.0 Stars — Google",
                  ].map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="text-[#2563EB]">✓</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0F172A] text-white rounded-xl p-5">
                <h3 className="font-bold mb-2">Call Larry Directly</h3>
                <p className="text-slate-400 text-sm mb-3">
                  Questions about your property? Larry takes calls personally.
                </p>
                <a
                  href="tel:+19072233725"
                  className="block text-center bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold py-3 rounded-lg transition-colors"
                >
                  (907) 223-3725
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Our Commitment to Every Client</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Honest Reporting", body: "We report what we find — good and bad. Every inspection gets the same thorough treatment regardless of property value." },
              { title: "Education, Not Just Findings", body: "We want you to understand your property. We explain each finding in plain language and what you should do about it." },
              { title: "Same-Day Reports", body: "Time matters in real estate. You receive your written report the same day — complete with photos and clear recommendations." },
            ].map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">{v.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2563EB] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Schedule with Larry Today</h2>
          <p className="text-blue-100 mb-6">ASHI Certified. Same-day reports. Response within 1 business hour.</p>
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
