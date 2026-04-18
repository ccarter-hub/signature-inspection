import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book an Inspection | Signature Inspection Service Anchorage, AK",
  description:
    "Schedule a home inspection in Anchorage, AK. Call (907) 223-3725 or book online. ASHI Certified. We respond within 1 business hour.",
  alternates: { canonical: "https://signatureinspectionservice.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[#0B1220] text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/larry-inspecting-8.jpg" alt="" fill className="object-cover object-center opacity-45" sizes="100vw" priority />
          <div className="absolute inset-0 bg-[#0B1220]/72" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Contact &amp; Book an Inspection</h1>
          <p className="text-slate-300 text-lg">
            We respond within 1 business hour. For immediate scheduling, call directly.
          </p>
          <div className="flex justify-center gap-2 mt-5">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-slate-300 text-sm">5.0 · 47 Google Reviews · ASHI Certified</span>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#E5E7EB]">
            <h2 className="text-xl font-bold text-[#0F172A] mb-1">Request Your Inspection</h2>
            <p className="text-[#64748B] text-sm mb-5">Fill out the form and we&apos;ll call you back within 1 business hour.</p>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-5">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-[#2563EB]">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Phone</p>
                    <a href="tel:+19072233725" className="text-[#2563EB] font-bold text-xl hover:underline">
                      (907) 223-3725
                    </a>
                    <p className="text-[#64748B] text-xs mt-0.5">Call or text. Fastest response.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-[#2563EB]">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Email</p>
                    <a href="mailto:info@signatureinspectionservice.com" className="text-[#2563EB] hover:underline text-sm">
                      info@signatureinspectionservice.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-[#2563EB]">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Office</p>
                    <p className="text-[#64748B] text-sm">8541 Raintree Circle<br />Anchorage, AK 99507</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-[#0F172A] mb-3">Business Hours</h3>
              <div className="space-y-1.5 text-sm">
                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
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
              <h3 className="font-bold mb-2">Service Areas</h3>
              <div className="flex flex-wrap gap-2 mt-2">
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
    </>
  );
}
