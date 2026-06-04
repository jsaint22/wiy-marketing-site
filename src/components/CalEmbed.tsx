"use client";

import { useEffect, useRef } from "react";

interface CalEmbedProps {
  /**
   * Cal.com booking link path, e.g. "josh-wealthinyourself/getting-acquainted".
   * The full URL is https://cal.com/{calLink}.
   */
  calLink: string;
  /** Inline embed namespace. Must be unique per page. */
  namespace?: string;
}

/**
 * Cal.com inline embed via the official snippet pattern. Loads the embed
 * loader script on mount, then queues an inline render against the target
 * div. Adapted from cal.com/docs/embed/inline-embed (vanilla JS variant)
 * to avoid pulling @calcom/embed-react (extra dep just for one page).
 *
 * Why this and not an iframe: iframe loses the prefill + native theming;
 * the official embed snippet handles both.
 */
export default function CalEmbed({
  calLink,
  namespace = "ga-embed",
}: CalEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Cal.com embed snippet if not already present.
    if (typeof window === "undefined") return;

    // The official snippet creates a global `Cal` function via this loader.
    // Source: https://app.cal.com/event-types -> Embed -> Inline Embed.
    /* eslint-disable */
    // @ts-ignore
    (function (C: any, A: string, L: string) {
      // @ts-ignore
      const p = function (a: any, ar: any) { a.q.push(ar); };
      // @ts-ignore
      const d = C.document;
      // @ts-ignore
      C.Cal = C.Cal || function () {
        // @ts-ignore
        const cal = C.Cal;
        // @ts-ignore
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          // @ts-ignore
          const api: any = function () { p(api, arguments); };
          // @ts-ignore
          const namespaceName = ar[1];
          // @ts-ignore
          api.q = api.q || [];
          // @ts-ignore
          if (typeof namespaceName === "string") {
            // @ts-ignore
            cal.ns[namespaceName] = cal.ns[namespaceName] || api;
            // @ts-ignore
            p(cal.ns[namespaceName], ar);
            p(cal, ["initNamespace", namespaceName]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    /* eslint-enable */

    // Initialize namespace + render inline.
    // Cal is injected onto window by the loader IIFE above.
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const cal = (window as unknown as { Cal: any }).Cal;
    cal("init", namespace, { origin: "https://cal.com" });
    cal.ns[namespace]("inline", {
      elementOrSelector: ref.current,
      config: { layout: "month_view" },
      calLink,
    });
    cal.ns[namespace]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#1B3A4B" },
        dark: { "cal-brand": "#C9A449" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, [calLink, namespace]);

  return (
    <div
      ref={ref}
      style={{ width: "100%", minHeight: 700, overflow: "scroll" }}
    />
  );
}
