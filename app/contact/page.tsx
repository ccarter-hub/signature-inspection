import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Book a Home Inspection in Anchorage, AK | Signature Inspection Service",
  description:
    "Schedule your Anchorage home inspection online or call (907) 223-3725. ASHI Certified, 1-hour response, same-day written reports. Serving Anchorage, Eagle River, Wasilla & all Southcentral Alaska.",
  alternates: { canonical: "https://signatureinspectionservice.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO: FULL-BLEED */}
      <section className="relative overflow-hidden min-h-[45vh] text-white flex items-center">
        <Image
          src="/images/larry-inspecting-8.jpg"
          alt="Schedule a home inspection in Anchorage AK"
          fill
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#030912]/60" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 py-16 text-center md:text-left">
          <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">Contact &amp; Scheduling</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Schedule Your Inspection
          </h1>
          <p className="text-slate-300 text-lg mb-5">
            We respond within 1 business hour. For same-day scheduling, call directly.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a
              href="tel:+19072233725"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(59,130,246,0.45)] text-white font-bold px-6 py-3.5 rounded-lg transition-all duration-150 flex items-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call (907) 223-3725
            </a>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <span className="text-yellow-400">★★★★★</span>
              <span>5.0 · 47 Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#64748B]">
            {[
              { icon: "✓", text: "ASHI Certified Inspector" },
              { icon: "⏱", text: "1-Hour Response Guarantee" },
              { icon: "📋", text: "Same-Day Written Reports" },
              { icon: "📍", text: "Serving All of Southcentral Alaska" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5">
                <span className="text-[#2563EB] font-bold">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#F9FAFB] py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-5 gap-10">

          {/* Form — wider col */}
          <div className="md:col-span-3 bg-white rounded-2xl p-7 shadow-sm border border-[#E5E7EB]">
            <h2 className="text-xl font-bold text-[#0F172A] mb-1">Request Your Inspection</h2>
            <p className="text-[#64748B] text-sm mb-6">
              Fill out the form below — we call you back within 1 business hour to confirm your booking.
            </p>
            <ContactForm />

            {/* Social proof under form */}
            <div className="mt-6 pt-5 border-t border-[#F1F5F9] flex flex-wrap gap-4">
              {[
                '"Larry was incredibly thorough. He caught issues the previous inspector missed."',
                '"Same-day report, easy to read, and Larry answered every question."',
              ].map((q) => (
                <div key={q} className="flex-1 min-w-[200px] bg-[#F9FAFB] rounded-xl p-3 border border-[#E8EEF4]">
                  <div className="text-yellow-400 text-xs mb-1">★★★★★</div>
                  <p className="text-[#64748B] text-xs leading-relaxed italic">{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — contact info */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-4">Contact Information</h2>
              <div className="space-y-4">
                <a href="tel:+19072233725" className="flex gap-4 items-start group">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#DBEAFE] transition-colors">
                    <svg className="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Phone</p>
                    <p className="text-[#2563EB] font-bold text-xl group-hover:underline">(907) 223-3725</p>
                    <p className="text-[#64748B] text-xs mt-0.5">Call or text · Fastest response</p>
                  </div>
                </a>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Email</p>
                    <a href="mailto:info@signatureinspectionservice.com" className="text-[#2563EB] hover:underline text-sm">
                      info@signatureinspectionservice.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Office</p>
                    <p className="text-[#64748B] text-sm">8541 Raintree Circle<br />Anchorage, AK 99507</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-[#0F172A] mb-3 text-sm">Business Hours</h3>
              <div className="space-y-1.5 text-sm">
                {[
                  { day: "Mon – Fri", hours: "8:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span className="text-[#64748B]">{item.day}</span>
                    <span className={item.hours === "Closed" ? "text-[#94a3b8]" : "text-[#0F172A] font-medium"}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0F172A] text-white rounded-xl p-5">
              <h3 className="font-bold mb-1 text-sm">Areas We Serve</h3>
              <p className="text-slate-400 text-xs mb-3">Anchorage and all of southcentral Alaska.</p>
              <div className="flex flex-wrap gap-1.5">
                {["Anchorage","Eagle River","Wasilla","Palmer","Girdwood","Seward","Homer","Kenai"].map((area) => (
                  <span key={area} className="bg-white/10 text-xs px-2.5 py-1 rounded-full text-slate-300">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <MapEmbed />
    </>
  );
}
