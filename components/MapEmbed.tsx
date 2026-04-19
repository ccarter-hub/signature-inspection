export default function MapEmbed() {
  return (
    <section className="bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3B82F6] mb-1">
            Service Area
          </p>
          <h2 className="text-[20px] font-bold text-[#0F172A]">
            Serving Anchorage &amp; Southcentral Alaska
          </h2>
          <p className="text-[14px] text-[#64748B] mt-1">
            Based in Anchorage — inspecting properties across the region.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-sm">
          <iframe
            title="Signature Inspection Service — Anchorage, AK"
            src="https://maps.google.com/maps?q=8541+Raintree+Circle+Anchorage+AK+99507&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing Signature Inspection Service location in Anchorage, AK"
          />
        </div>

        <p className="mt-3 text-center text-[12px] text-[#94A3B8]">
          8541 Raintree Circle · Anchorage, AK 99507 ·{" "}
          <a
            href="https://maps.google.com/maps?q=8541+Raintree+Circle+Anchorage+AK+99507"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3B82F6] hover:underline"
          >
            Open in Google Maps →
          </a>
        </p>
      </div>
    </section>
  );
}
