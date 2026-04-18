import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

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
      name: "Do I need to attend the inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not required, but helpful if you want to ask questions directly. We encourage buyers to attend so they can understand the property's condition firsthand.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a home inspection take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most inspections take 2–4 hours depending on the property size and age. You receive a detailed written report the same day.",
      },
    },
    {
      "@type": "Question",
      name: "Can a home fail inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — inspections provide information, not pass/fail results. The report documents the current condition of the property so buyers can make informed decisions.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a home inspection cost in Anchorage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home inspections in Anchorage typically range from $400–$600 depending on property size and type. Call (907) 223-3725 for a same-day quote.",
      },
    },
    {
      "@type": "Question",
      name: "Is radon a concern in Anchorage, Alaska?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alaska has elevated radon levels in many areas. Radon is invisible and odorless — testing is the only way to know your level. We offer professional 48-hour radon testing.",
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
      <section className="bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              ASHI Certified · Anchorage, AK
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Home Inspection in Anchorage, AK You Can Trust — Before You Buy
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Get a clear, professional inspection so you know exactly what you&apos;re buying
              and avoid costly surprises after closing.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="bg-[#2563EB] hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-150 text-base">
                Book Your Inspection
              </Link>
              <a href="tel:+19072233725" className="border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-all duration-150 text-base">
                Call (907) 223-3725
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "38+ Years Construction Experience",
                "20+ Years Real Estate Experience",
                "Serving Anchorage & Surrounding Areas",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-[#2563EB] shrink-0">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-[#0F172A] font-bold text-xl mb-1">Book Your Inspection</h2>
            <p className="text-[#64748B] text-sm mb-5">We respond within 1 business hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* PHOTO STRIP — arriving + on the job */}
      <section className="bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
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

      {/* WHAT YOU GET */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
              Know Exactly What You&apos;re Buying
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              A thorough inspection gives you the information you need — before you&apos;re committed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "🔍", title: "Avoid Costly Surprises", body: "We uncover issues early so you don't inherit expensive problems after closing." },
              { icon: "🧭", title: "Make Confident Decisions", body: "Clear insights help you move forward — or walk away — with confidence." },
              { icon: "💼", title: "Negotiate with Leverage", body: "Use inspection findings to protect your investment and negotiate repairs." },
              { icon: "📋", title: "Get a Clear, Usable Report", body: "Straightforward findings you and your agent can act on immediately." },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
              Inspection Services in Anchorage, AK
            </h2>
            <p className="text-[#64748B] max-w-xl mx-auto">
              Residential, commercial, and radon testing — all from an ASHI Certified inspector with
              decades of Alaska construction experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/larry-inspecting-7.jpg",
                alt: "Home electrical panel inspection Anchorage AK",
                title: "Home Inspection",
                body: "Complete evaluation of major systems so you understand the true condition of the property before you buy.",
                href: "/home-inspection-anchorage",
              },
              {
                img: "/images/larry-inspecting-4.jpg",
                alt: "HVAC furnace inspection Anchorage commercial",
                title: "Commercial Inspection",
                body: "Detailed inspections to support smart investment decisions on office buildings, retail, warehouses, and more.",
                href: "/commercial-inspection-anchorage",
              },
              {
                img: "/images/larry-inspecting-6.jpg",
                alt: "Air quality and HVAC inspection",
                title: "Radon Testing",
                body: "48-hour testing to detect invisible radon gas and protect your health. Alaska has elevated radon risk.",
                href: "/radon-testing-anchorage",
              },
            ].map((s) => (
              <div key={s.href} className="card overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image src={s.img} alt={s.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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

      {/* PROCESS */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
              Simple, Straightforward, Done Right
            </h2>
            <p className="text-[#64748B]">Three steps from call to report.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                img: "/images/larry-inspecting-9.jpg",
                alt: "Larry McBain arriving at home for inspection",
                title: "Book your inspection",
                body: "Call (907) 223-3725 or submit the form. We confirm within 1 business hour.",
              },
              {
                n: "2",
                img: "/images/larry-inspecting-8.jpg",
                alt: "Larry walking through home with client",
                title: "We perform a thorough inspection",
                body: "Larry inspects every accessible area. Buyers are welcome and encouraged to attend.",
              },
              {
                n: "3",
                img: "/images/larry-inspecting-12.jpg",
                alt: "Larry writing inspection report on laptop",
                title: "You receive a clear report same day",
                body: "A detailed, photo-rich written report arrives the same day your inspection is completed.",
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
              Call to Book Now — (907) 223-3725
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
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
            {/* Floating credential badge */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-5">
              Experience You Can Actually Rely On
            </h2>
            <p className="text-[#64748B] leading-relaxed mb-7">
              With decades of construction and real estate experience, you&apos;re getting real insight —
              not just a checklist. Larry has spent nearly 40 years building and evaluating properties
              across Alaska, and he knows exactly where problems hide.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Deep construction knowledge",
                "Local Alaska expertise",
                "Clear communication",
                "Detailed reporting",
                "Reliable and thorough",
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

      {/* RADON */}
      <section className="bg-[#0F172A] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Radon Is Invisible — But It Matters
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Radon is a naturally occurring gas that can be harmful at high levels.
              You won&apos;t know it&apos;s there without testing.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              We provide professional 48-hour radon testing so you can move forward with confidence.
              Alaska has elevated radon risk — don&apos;t skip this step.
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
                { icon: "🧪", label: "48-hour EPA-approved test" },
                { icon: "📄", label: "Written report with mitigation guidance if needed" },
                { icon: "📍", label: "Alaska has elevated radon concentrations" },
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

      {/* SERVICE AREAS */}
      <section className="bg-[#F9FAFB] py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Service Areas</h2>
          <p className="text-[#64748B] mb-7 text-sm">Serving Anchorage and all of southcentral Alaska.</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Anchorage","Wasilla","Eagle River","Palmer","Girdwood","Seward","Homer","Kenai Peninsula"].map((area) => (
              <span key={area} className="bg-white border border-[#E5E7EB] rounded-full px-4 py-2 text-sm text-[#0F172A] font-medium shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-10">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Larry was incredibly thorough. He caught several issues the previous inspector missed, which saved us thousands. Highly recommend.", name: "Jennifer M.", detail: "Home Buyer, Anchorage" },
              { quote: "Professional, punctual, and detailed. The report was easy to read with clear photos of every issue. Our agent says Larry is the best in Anchorage.", name: "David & Carla T.", detail: "Home Buyers, Eagle River" },
              { quote: "We used Signature Inspection for our commercial building purchase. Larry's construction knowledge made the difference — he spotted structural concerns others overlooked.", name: "Ryan K.", detail: "Commercial Buyer, Anchorage" },
            ].map((t) => (
              <div key={t.name} className="card p-6">
                <p className="text-[#2563EB] text-lg mb-3">★★★★★</p>
                <p className="text-[#0F172A] text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-[#0F172A] text-sm">{t.name}</p>
                <p className="text-[#64748B] text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-2">Common Questions</h2>
          <p className="text-center text-[#64748B] mb-10 text-sm">Everything you need to know before booking.</p>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="card p-6">
                <h3 className="font-bold text-[#0F172A] mb-2 text-sm">{item.name}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#2563EB] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Book Your Inspection Today</h2>
          <p className="text-blue-100 text-lg mb-8">Get clarity before you commit.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#2563EB] font-bold px-8 py-4 rounded-lg text-base hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">
              Book Now
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
