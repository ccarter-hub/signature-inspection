"use client";
import Script from "next/script";

/**
 * Google Analytics 4 loader.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in your Vercel environment variables
 * (e.g. G-XXXXXXXXXX) to activate. No-ops gracefully when the variable is absent.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      `}</Script>
    </>
  );
}
