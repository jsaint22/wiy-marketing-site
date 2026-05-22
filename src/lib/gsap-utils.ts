'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

let registered = false;

/**
 * Register GSAP plugins. Safe to call multiple times — guards via module-level flag.
 * GSAP plugins are free as of April 2025 (Webflow acquisition).
 */
export function registerPlugins(): void {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
  registered = true;
}

/**
 * Sync a Lenis instance to gsap.ticker so scroll-driven GSAP animations
 * are driven by Lenis' RAF loop. Per canonical Lenis + GSAP integration.
 * Caller is responsible for `lenis.destroy()` on unmount.
 */
export function syncLenisToGsap(lenis: { raf: (time: number) => void }): void {
  if (typeof window === 'undefined') return;
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger };
