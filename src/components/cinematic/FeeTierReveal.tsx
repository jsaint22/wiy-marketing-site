'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/use-reduced-motion';

export interface FeeTier {
  netWorth: string;
  monthly: number;
  effectiveRate: string;
}

interface Props {
  tiers: FeeTier[];
}

/**
 * Animated fee tier reveal. Dollar amounts count up from 0 to final value
 * when scrolled into view. Each tier staggers 0.15s after the previous.
 * Reduced-motion users see static values immediately.
 */
export function FeeTierReveal({ tiers }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [reveal, setReveal] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setReveal(true);
      return;
    }
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setReveal(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [reduce]);

  return (
    <div ref={containerRef} className="space-y-2">
      {tiers.map((tier, i) => (
        <TierRow
          key={tier.netWorth}
          tier={tier}
          delay={reveal ? i * 0.15 : 0}
          play={reveal}
          reduce={reduce}
        />
      ))}
    </div>
  );
}

function TierRow({
  tier,
  delay,
  play,
  reduce,
}: {
  tier: FeeTier;
  delay: number;
  play: boolean;
  reduce: boolean;
}) {
  const [val, setVal] = useState(reduce || !play ? tier.monthly : 0);

  useEffect(() => {
    if (!play || reduce) {
      setVal(tier.monthly);
      return;
    }
    let cancelled = false;
    const start = performance.now() + delay * 1000;
    const duration = 1200;

    function tick(now: number) {
      if (cancelled) return;
      const elapsed = now - start;
      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(tier.monthly * eased));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [play, delay, tier.monthly, reduce]);

  return (
    <div className="flex justify-between items-center bg-neutral-bg rounded-lg px-5 py-4 transition-all hover:translate-x-1 hover:bg-cream-deep">
      <span className="text-sm text-neutral-dark font-medium">{tier.netWorth} net worth</span>
      <span>
        <span className="font-bold text-primary text-base">
          ~${val.toLocaleString()}/mo
        </span>
        <span className="text-xs text-neutral-dark/60 ml-2">({tier.effectiveRate})</span>
      </span>
    </div>
  );
}
