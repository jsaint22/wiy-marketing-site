'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/lib/use-reduced-motion';
import { gsap, ScrollTrigger, registerPlugins } from '@/lib/gsap-utils';

export interface Chapter {
  number: string;
  title: string;
  body: string;
}

interface Props {
  chapters: Chapter[];
}

/**
 * Pinned scroll cinema. Each chapter pins for one viewport height of scroll.
 * As user scrolls within a chapter, that chapter's elements animate.
 * Reduced-motion users get a plain vertical stack (no pinning, no scroll-driven animation).
 *
 * Component is chapter-count-agnostic — pass 3, 4, or N chapters.
 */
export function ScrollPinnedCinema({ chapters }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !containerRef.current) return;
    registerPlugins();

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>('[data-cinema-slide]');
      slides.forEach((slide) => {
        gsap.from(slide.querySelectorAll('[data-cinema-anim]'), {
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: slide,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  if (reduce) {
    return (
      <div className="space-y-32 py-32 px-6 md:px-12 max-w-4xl mx-auto">
        {chapters.map((ch) => (
          <article key={ch.number}>
            <p className="font-display text-secondary text-xl font-bold mb-4">{ch.number}</p>
            <h2 className="font-display text-primary text-4xl md:text-5xl font-bold mb-6">{ch.title}</h2>
            <p className="text-lg leading-relaxed text-neutral-dark/85">{ch.body}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {chapters.map((ch) => (
        <section
          key={ch.number}
          data-cinema-slide
          className="min-h-[55vh] flex items-center px-6 md:px-12 py-16"
        >
          <div className="max-w-4xl mx-auto">
            <p data-cinema-anim className="font-display text-secondary font-bold mb-6" style={{ fontSize: 'clamp(48px, 9vw, 120px)', lineHeight: 1 }}>
              {ch.number}
            </p>
            <h2 data-cinema-anim className="font-display text-primary font-bold mb-8" style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.08 }}>
              {ch.title}
            </h2>
            <p data-cinema-anim className="leading-relaxed text-neutral-dark/85" style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}>
              {ch.body}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
