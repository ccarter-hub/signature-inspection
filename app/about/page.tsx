import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Larry McBain | ASHI Certified Home Inspector Anchorage, AK",
  description:
    "Meet Larry McBain, ASHI Certified home inspector and founder of Signature Inspection Service Inc. in Anchorage, AK. 38 years Alaska construction & 20 years real estate experience.",
  alternates: { canonical: "https://signatureinspectionservice.com/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Larry McBain",
  jobTitle: "ASHI Certified Home Inspector",
  worksFor: { "@type": "Organization", name: "Signature Inspection Service Inc." },
  description: "ASHI Certified home inspector with 38 years of Alaska construction experience and 20 years in real estate. Founder of Signature Inspection Service Inc. in Anchorage, AK.",
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* HERO */}
      <section className="bg-[#1a3a5c] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">About</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Larry McBain, President</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            ASHI Certified Home Inspector · 38 Years Alaska Construction Experience ·
            Founder of Signature Inspection Service Inc.
          </p>
        </div>
      </section>

      {/* BIO */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-5 text-slate-700 leading-relaxed">
              <p>
                Larry McBain has spent nearly four decades working in Alaska&apos;s construction and real
                estate industries. As a general contractor with over 38 years of hands-on experience,
                he has built, remodeled, and evaluated hundreds of properties across Anchorage and
                southcentral Alaska.
              </p>
              <p>
                After 20 years in Alaska real estate, Larry founded Signature Inspection Service Inc.
                to give buyers, sellers, and agents access to the kind of deep, construction-level
                property knowledge that generic inspection services simply can&apos;t provide.
              </p>
              <p>
                Larry holds ASHI (American Society of Home Inspectors) certification — the gold standard
                in the industry. ASHI requires passing a national examination, completing 250 paid
                inspections under supervision, and ongoing continuing education.
              </p>
              <p>
                His background in construction gives every Signature Inspection report a builder&apos;s
                perspective. He doesn&apos;t just note deficiencies — he explains what they mean, how
                serious they are, and what it will take to address them.
              </p>
              <p>
                Larry understands Alaska&apos;s unique climate challenges: ice dams, permafrost movement,
                seismic vulnerability, and freeze/thaw damage that inspectors from the Lower 48 routinely
                miss. When you hire Signature Inspection Service, you&apos;re getting 38 years of on-the-ground
                Alaska knowledge.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-[#1a3a5c] mb-3">Credentials</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {[
                    "ASHI Certified Home Inspector",
                    "38 Years General Contracting",
                    "20 Years Real Estate Experience",
                    "Licensed & Insured in Alaska",
                    "5-Star Rated (Google)",
                  ].map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="text-amber-500">✓</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1a3a5c] text-white rounded-xl p-5">
                <h3 className="font-bold mb-3">Contact Larry Directly</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Questions about your property? Larry takes calls personally.
                </p>
                <a
                  href="tel:+19072233725"
                  className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  (907) 223-3725
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-8 text-center">Our Commitment to Every Client</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Honest Reporting",
                body: "We report what we find — good and bad. Every inspection gets the same thorough treatment whether it&apos;s a $100,000 starter home or a $2 million commercial property.",
              },
              {
                title: "Education, Not Just Findings",
                body: "We want you to understand your property. We explain what each finding means in plain language and what you should do about it.",
              },
              {
                title: "Same-Day Reports",
                body: "Time matters in real estate transactions. You receive your written report the same day — complete with photos and clear recommendations.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-[#1a3a5c] mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-3">Serving All of Southcentral Alaska</h2>
          <p className="text-slate-600 mb-6 text-sm">
            From Anchorage to the Kenai Peninsula — if you need an inspection in southcentral Alaska, call us.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Anchorage","Eagle River","Wasilla","Palmer","Girdwood","Seward","Homer","Soldotna","Kenai"].map((area) => (
              <span key={area} className="bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-700">
                {area}, AK
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Schedule with Larry Today</h2>
          <p className="text-amber-100 mb-6">
            We respond within 1 business hour. ASHI Certified. Same-day written reports.
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
