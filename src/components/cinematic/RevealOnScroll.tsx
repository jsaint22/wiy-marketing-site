'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/use-reduced-motion';

interface Props {
  children: ReactNode;
  /** CSS transition delay before content reveals */
  delay?: number;
  /** Threshold (0–1) for IntersectionObserver fire */
  threshold?: number;
  /** Tailwind className overrides for the wrapper */
  className?: string;
}

/**
 * Reveals children with a fade-up animation when scrolled into view.
 * Skips animation for prefers-reduced-motion users (renders inline immediately).
 * Uses IntersectionObserver (zero-dep). For GSAP-choreographed reveals,
 * use a dedicated ScrollTrigger component.
 */
export function RevealOnScroll({
  children,
  delay = 0,
  threshold = 0.2,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setInView(true);
      return;
    }
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reduce, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: reduce
          ? 'none'
          : `opacity 0.7s ${delay}s var(--ease-out-quart), transform 0.7s ${delay}s var(--ease-out-quart)`,
      }}
    >
      {children}
    </div>
  );
}
