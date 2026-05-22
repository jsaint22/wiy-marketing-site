'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import { registerPlugins, syncLenisToGsap } from '@/lib/gsap-utils';
import { useReducedMotion } from '@/lib/use-reduced-motion';

interface Props {
  children: ReactNode;
}

/**
 * Wraps the app in a Lenis smooth-scroll context.
 * Disables smooth scroll for users with prefers-reduced-motion: reduce.
 * Syncs Lenis RAF to gsap.ticker so GSAP ScrollTrigger animations are
 * driven by Lenis (canonical pattern per Lenis docs).
 */
export function LenisProvider({ children }: Props) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    registerPlugins();
    const lenis = new Lenis({ autoRaf: false, lerp: 0.1 });
    syncLenisToGsap(lenis);
    return () => {
      lenis.destroy();
    };
  }, [reduce]);

  return <>{children}</>;
}
