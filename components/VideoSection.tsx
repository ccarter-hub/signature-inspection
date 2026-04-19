"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Star, ArrowRight } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="border-t border-white/[0.04] bg-[#07111F] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Video/image left */}
          <div className="relative">
            {playing ? (
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.10] shadow-[0_40px_80px_rgba(0,0,0,0.60)]">
                <iframe
                  className="h-full w-full"
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSignatureInspectionService%2F&autoplay=1"
                  title="Signature Inspection Service"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/[0.10] shadow-[0_40px_80px_rgba(0,0,0,0.60)]"
                aria-label="Play video"
              >
                <div className="aspect-video relative">
                  <Image
                    src="/images/larry-inspecting-3.jpg"
                    alt="Larry McBain performing a home inspection in Anchorage AK"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#030912]/40 transition-opacity duration-300 group-hover:bg-[#030912]/30" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-white/20 shadow-[0_0_40px_rgba(255,255,255,0.20)]">
                      <Play className="ml-1 h-6 w-6 fill-white text-white" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-[#030912]/70 px-3 py-2 backdrop-blur-sm">
                    <p className="text-[12px] font-semibold text-white">See Larry in Action</p>
                    <p className="text-[10px] text-slate-400">Real inspection · Anchorage home</p>
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Copy right */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
              See the Difference
            </p>
            <h2
              className="mb-5 font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}
            >
              A Real Inspection — Not a Checklist.
            </h2>
            <p className="mb-7 text-[15px] leading-relaxed text-slate-400">
              Larry doesn&rsquo;t just check boxes. He reads the building — the way only someone who
              built Alaska homes for 38 years can. Watch him find what others walk past.
            </p>

            {/* Quotes */}
            <div className="mb-8 space-y-4">
              {[
                {
                  q: "Larry caught a permafrost issue the listing agent didn't even know existed. Saved us from a $40k problem.",
                  name: "Mike & Sarah D.",
                  detail: "Eagle River buyers",
                },
                {
                  q: "He walked us through every finding on-site. We knew exactly what we were dealing with before we left.",
                  name: "Priya T.",
                  detail: "Anchorage first-time buyer",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-white/[0.07] bg-[#040D1A] p-4"
                >
                  <div className="mb-2 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-2 text-[13px] italic leading-relaxed text-slate-300">
                    &ldquo;{item.q}&rdquo;
                  </p>
                  <p className="text-[11px] font-semibold text-slate-600">
                    {item.name} · {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              Get My Same-Day Report <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
