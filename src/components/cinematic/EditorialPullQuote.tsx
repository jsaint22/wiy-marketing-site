'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/use-reduced-motion';

interface Props {
  children: ReactNode;
  /** Optional attribution line (e.g., "— Josh St. Laurent") */
  attribution?: string;
}

/**
 * Large-format editorial pull-quote with a gold DrawSVG underline that
 * animates in width when scrolled into view. Reduced-motion users see
 * the final state immediately.
 */
export function EditorialPullQuote({ children, attribution }: Props) {
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
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reduce]);

  return (
    <figure ref={ref} className="my-20 max-w-3xl mx-auto px-6 md:px-0">
      <blockquote
        className="font-display text-primary font-semibold leading-[1.18] tracking-tight"
        style={{ fontSize: 'clamp(28px, 3.4vw, 44px)' }}
      >
        <span className="relative inline">
          {children}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 -bottom-2 h-[3px] bg-secondary origin-left"
            style={{
              transform: inView ? 'scaleX(1)' : 'scaleX(0)',
              transition: reduce ? 'none' : 'transform 1.2s 0.3s var(--ease-out-expo)',
            }}
          />
        </span>
      </blockquote>
      {attribution && (
        <figcaption className="mt-6 text-sm uppercase tracking-[0.15em] text-secondary font-semibold">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
