/**
 * Analytics utility — wraps gtag so call sites don't need to check for
 * window.gtag or handle SSR themselves.
 *
 * Usage:
 *   import { trackEvent } from "@/lib/analytics";
 *   trackEvent("phone_call", { location: "hero" });
 */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

// Named helpers for the key conversion events on this site

export const track = {
  phoneCall: (location: string) =>
    trackEvent("phone_call", { event_category: "conversion", location }),

  formSubmit: () =>
    trackEvent("form_submit", { event_category: "conversion", form_id: "contact" }),

  ctaClick: (label: string, destination?: string) =>
    trackEvent("cta_click", { event_category: "engagement", label, ...(destination !== undefined && { destination }) }),

  quoteTab: (service: string) =>
    trackEvent("quote_tab_click", { event_category: "engagement", service }),
};
