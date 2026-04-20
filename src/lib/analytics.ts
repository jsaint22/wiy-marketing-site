/**
 * GA4 event tracking helper.
 * Guards against SSR and ad blockers (window.gtag may not exist).
 */

type EventParams = Record<string, string | number | boolean>;

export function track(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

// Typed helpers for common events
export function trackBookingClick(location: string) {
  track("booking_link_click", { location });
}

export function trackLeadCapture(magnet: string) {
  track("lead_capture", { magnet });
}

export function trackCalculatorInteract(netWorth: number) {
  const bucket =
    netWorth < 1_000_000
      ? "under_1M"
      : netWorth < 3_000_000
      ? "1M_3M"
      : netWorth < 5_000_000
      ? "3M_5M"
      : netWorth < 10_000_000
      ? "5M_10M"
      : "10M_plus";
  track("calculator_interact", { net_worth_bucket: bucket });
}

export function trackExternalClick(destination: string) {
  track("external_click", { destination });
}

// Extend Window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
