import Link from "next/link";
import LogoMark from "@/components/LogoMark";

const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark size={36} />
              <div>
                <h3 className="text-white font-bold text-[15px] leading-tight">Signature Inspection Service Inc.</h3>
                <p className="text-slate-500 text-[11px] tracking-wider uppercase mt-0.5">Anchorage, AK &middot; ASHI Certified</p>
              </div>
            </div>
            <p className="text-sm mb-5 leading-relaxed">
              ASHI Certified home inspectors serving Anchorage and southcentral Alaska. 38+ years of Alaska construction experience.
            </p>
            <div className="space-y-1.5 text-sm">
              <p>
                <a href="tel:+19072233725" className="hover:text-white transition-colors font-medium">(907) 223-3725</a>
              </p>
              <p>
                <a href="mailto:info@signatureinspectionservice.com" className="hover:text-white transition-colors text-xs break-all">
                  info@signatureinspectionservice.com
                </a>
              </p>
              <p className="text-xs text-slate-500">8541 Raintree Circle, Anchorage, AK 99507</p>
            </div>
          </div>

          {/* Col 2: Services + Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li><Link href="/home-inspection-anchorage" className="hover:text-white transition-colors">Home Inspection</Link></li>
              <li><Link href="/commercial-inspection-anchorage" className="hover:text-white transition-colors">Commercial Inspection</Link></li>
              <li><Link href="/radon-testing-anchorage" className="hover:text-white transition-colors">Radon Testing</Link></li>
            </ul>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Larry McBain</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact &amp; Book</Link></li>
            </ul>
          </div>

          {/* Col 3: Inspection Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Inspection Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/what-does-home-inspection-include" className="hover:text-white transition-colors leading-snug block">
                  What Does a Home Inspection Include?
                </Link>
              </li>
              <li>
                <Link href="/home-inspection-cost-anchorage" className="hover:text-white transition-colors leading-snug block">
                  Home Inspection Cost in Anchorage
                </Link>
              </li>
              <li>
                <Link href="/blog/common-problems-home-inspections-anchorage" className="hover:text-white transition-colors leading-snug block">
                  Common Problems in Anchorage Homes
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/blog" className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors font-medium">
                  All Resources &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Service Areas</h4>
            <ul className="space-y-1.5 text-sm">
              {[
                "Anchorage, AK",
                "Eagle River, AK",
                "Wasilla, AK",
                "Palmer, AK",
                "Mat-Su Valley, AK",
                "Girdwood, AK",
                "Seward, AK",
                "Homer, AK",
                "Kenai Peninsula, AK",
              ].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="text-[#2563EB] text-xs shrink-0">✓</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <p>&copy; {new Date().getFullYear()} Signature Inspection Service Inc. &middot; Anchorage, AK &middot; ASHI Certified &middot; Licensed &amp; Insured</p>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
              <span className="text-slate-700">&middot;</span>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/SignatureInspectionService/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-500 hover:text-[#3B82F6] transition-colors"
              aria-label="Signature Inspection Service on Facebook"
            >
              <FacebookIcon />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.google.com/search?q=Signature+Inspection+Service+Anchorage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-400 transition-colors"
            >
              <span className="text-yellow-400">★★★★★</span>
              <span>5.0 &middot; 47 Google Reviews</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
