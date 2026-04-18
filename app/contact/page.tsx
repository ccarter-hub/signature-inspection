import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book an Inspection | Signature Inspection Service Anchorage, AK",
  description:
    "Schedule a home inspection in Anchorage, AK. Call (907) 223-3725 or submit a request online. ASHI Certified. We respond within 1 business hour.",
  alternates: { canonical: "https://signatureinspectionservice.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a3a5c] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact &amp; Book an Inspection</h1>
          <p className="text-slate-300 text-lg">
            We respond within 1 business hour. For immediate scheduling, call directly.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-5">Request Your Inspection Online</h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">Contact Information</h2>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="text-amber-500 text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-slate-800">Phone</p>
                    <a href="tel:+19072233725" className="text-[#1a3a5c] font-bold text-lg hover:underline">
                      (907) 223-3725
                    </a>
                    <p className="text-slate-500 text-xs mt-0.5">Call or text. Fastest response.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-500 text-xl">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <a
                      href="mailto:info@signatureinspectionservice.com"
                      className="text-[#1a3a5c] hover:underline"
                    >
                      info@signatureinspectionservice.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-500 text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-slate-800">Office</p>
                    <p className="text-slate-700">8541 Raintree Circle<br />Anchorage, AK 99507</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <h3 className="font-bold text-[#1a3a5c] mb-3">Business Hours</h3>
              <div className="space-y-1 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM – 3:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1a3a5c] text-white rounded-xl p-5">
              <h3 className="font-bold mb-2">Service Areas</h3>
              <p className="text-slate-300 text-sm mb-3">
                We serve Anchorage and all of southcentral Alaska.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Anchorage","Eagle River","Wasilla","Palmer","Girdwood","Seward","Homer","Kenai"].map((area) => (
                  <span key={area} className="bg-white/10 text-xs px-2 py-1 rounded-full">
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
