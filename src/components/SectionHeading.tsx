interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold ${dark ? "text-white" : "text-primary"}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto ${dark ? "text-white/70" : "text-neutral-dark/70"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
