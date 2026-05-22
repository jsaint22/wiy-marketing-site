/**
 * CSS-only fallback for HeroMeshGradient.
 * Used during SSR + for users with prefers-reduced-motion: reduce.
 * Replicates the visual feel of the R3F mesh-gradient using radial gradients.
 */
export function HeroMeshGradientFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{
        background: [
          'radial-gradient(ellipse 50% 45% at 75% 22%, rgba(201, 164, 73, 0.28) 0%, transparent 60%)',
          'radial-gradient(ellipse 65% 50% at 22% 78%, rgba(27, 58, 75, 0.14) 0%, transparent 60%)',
          'radial-gradient(ellipse 40% 32% at 55% 60%, rgba(201, 164, 73, 0.08) 0%, transparent 60%)',
          'linear-gradient(160deg, #F7F3ED 0%, #ffffff 100%)',
        ].join(', '),
      }}
    />
  );
}
