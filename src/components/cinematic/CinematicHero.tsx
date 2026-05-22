'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HeroMeshGradientFallback } from './HeroMeshGradient.fallback';

// SSR-disabled R3F component (canvas + WebGL require window)
// Per Next 16: ssr: false requires the importing file to be 'use client'
const HeroMeshGradient = dynamic(
  () => import('./HeroMeshGradient').then((m) => m.HeroMeshGradient),
  { ssr: false, loading: () => <HeroMeshGradientFallback /> }
);

interface CtaProps {
  label: string;
  href: string;
  external?: boolean;
}

interface Props {
  eyebrow: string;
  /** Headline accepts string OR ReactNode (use ReactNode to force line breaks via <br />) */
  headline: ReactNode;
  subhead: string;
  primaryCta: CtaProps;
  secondaryCta?: CtaProps;
  /** Optional right-column content — typically a portrait or illustration */
  rightColumn?: ReactNode;
  /** Total minimum hero height (default 92vh) */
  minHeight?: string;
}

/**
 * Shared hero shell for the 4 redesigned pages.
 * - Mesh-gradient backdrop (R3F if available; CSS fallback otherwise)
 * - Grid: text-left (1.35fr) / right-column (0.85fr)
 * - Editorial Playfair headline, Inter body
 * - All copy passed as props — page files own copy verbatim
 */
export function CinematicHero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  rightColumn,
  minHeight = '92vh',
}: Props) {
  return (
    <section
      className="relative overflow-hidden bg-neutral-bg flex flex-col"
      style={{ minHeight }}
    >
      <HeroMeshGradient />

      <div className="relative z-[5] mx-auto w-full max-w-[1380px] grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)] gap-8 lg:gap-12 items-center px-6 md:px-12 pt-16 pb-16">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.18em] font-bold text-secondary mb-6">
            {eyebrow}
          </p>
          <h1
            className="font-display text-primary font-bold leading-[1.04] tracking-tight mb-7"
            style={{ fontSize: 'clamp(40px, 5.2vw, 76px)' }}
          >
            {headline}
          </h1>
          <p
            className="text-neutral-dark leading-[1.65] max-w-[520px] mb-9"
            style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
          >
            {subhead}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {primaryCta.external ? (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-7 py-3.5 rounded-md font-semibold text-sm tracking-wide shadow-md transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </a>
            ) : (
              <Link
                href={primaryCta.href}
                className="bg-primary text-white px-7 py-3.5 rounded-md font-semibold text-sm tracking-wide shadow-md transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="text-primary font-semibold text-sm border-b-2 border-secondary py-1 transition-colors hover:text-secondary"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {rightColumn && <div className="relative">{rightColumn}</div>}
      </div>
    </section>
  );
}
