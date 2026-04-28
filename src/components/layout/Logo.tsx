type Size = "sm" | "md" | "lg";

const wordmarkSize: Record<Size, string> = {
  sm: "text-lg md:text-xl",
  md: "text-2xl",
  lg: "text-3xl md:text-4xl",
};

const monogramSize: Record<Size, string> = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-11 w-11",
};

const monogramLetterSize: Record<Size, string> = {
  sm: "text-[13px]",
  md: "text-base",
  lg: "text-xl",
};

/**
 * Premium brand logo — italic Fraunces "Kishwar." wordmark paired with
 * a circular monogram (italic "K" on ember inside a saffron→gold→pomegranate
 * gradient ring). The brand period is gradient-clipped to match the ring.
 *
 * Used in Navigation (sm) and Footer (lg).
 */
export function Logo({
  size = "md",
  className = "",
}: {
  size?: Size;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Monogram — gradient ring + ember disc + italic K */}
      <span
        aria-hidden
        className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${monogramSize[size]}`}
        style={{
          background:
            "conic-gradient(from 200deg, #E2761B, #C9A24A 35%, #7A1F2B 70%, #E2761B)",
          padding: "1.5px",
          boxShadow: "0 0 0 0.5px rgb(var(--kc-cream) / 0.06)",
        }}
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-ember">
          <span
            className={`relative font-display font-bold italic leading-none text-cream ${monogramLetterSize[size]}`}
            style={{ letterSpacing: "-0.03em", transform: "translateY(-0.04em)" }}
          >
            K
            {/* Tiny saffron tittle/accent above the K — small editorial mark */}
            <span
              aria-hidden
              className="absolute -right-1 -top-0.5 block rounded-full bg-saffron"
              style={{ width: "0.18em", height: "0.18em" }}
            />
          </span>
        </span>
      </span>

      {/* Wordmark */}
      <span
        className={`font-display font-semibold italic tracking-tight ${wordmarkSize[size]}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        <span className="text-cream">Kishwar</span>
        <span
          aria-hidden
          className="bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text text-transparent"
        >
          .
        </span>
      </span>
    </span>
  );
}
