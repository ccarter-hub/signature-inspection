import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2035] text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Signature Inspection Service Inc.</h3>
          <p className="text-sm mb-4 leading-relaxed">
            ASHI Certified home inspectors serving Anchorage, AK and the surrounding area.
            38+ years of construction experience. 5-star rated.
          </p>
          <div className="space-y-1 text-sm">
            <p>
              <a href="tel:+19072233725" className="hover:text-amber-400 transition-colors font-medium">
                (907) 223-3725
              </a>
            </p>
            <p>
              <a href="mailto:info@signatureinspectionservice.com" className="hover:text-amber-400 transition-colors">
                info@signatureinspectionservice.com
              </a>
            </p>
            <p>8541 Raintree Circle, Anchorage, AK 99507</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/home-inspection-anchorage" className="hover:text-amber-400 transition-colors">Home Inspection in Anchorage</Link></li>
            <li><Link href="/commercial-inspection-anchorage" className="hover:text-amber-400 transition-colors">Commercial Inspection in Anchorage</Link></li>
            <li><Link href="/radon-testing-anchorage" className="hover:text-amber-400 transition-colors">Radon Testing in Anchorage</Link></li>
          </ul>
          <h3 className="text-white font-semibold mt-5 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Larry McBain</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact & Book</Link></li>
          </ul>
        </div>

        {/* Service areas */}
        <div>
          <h3 className="text-white font-semibold mb-3">Service Areas</h3>
          <ul className="space-y-1 text-sm">
            {["Anchorage, AK","Eagle River, AK","Wasilla, AK","Palmer, AK","Girdwood, AK","Seward, AK","Homer, AK","Soldotna, AK","Kenai, AK"].map(area => (
              <li key={area} className="flex items-center gap-2">
                <span className="text-amber-500">✓</span> {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 px-4 py-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Signature Inspection Service Inc. · Anchorage, AK · ASHI Certified · Licensed &amp; Insured</p>
      </div>
    </footer>
  );
}
