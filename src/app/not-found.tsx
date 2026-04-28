import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ember px-6 text-cream">
      <div className="max-w-[44ch] text-center">
        <p className="text-[11px] tracking-[0.32em] uppercase text-saffron/80">404</p>
        <h1
          className="mt-6 font-display"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 1,
            letterSpacing: "-0.025em",
          }}
        >
          The dish you ordered isn&rsquo;t on tonight&rsquo;s menu.
        </h1>
        <p className="mt-8 text-cream/60">
          The page you&rsquo;re looking for has wandered off — perhaps it was never written, perhaps
          it has changed its mind.
        </p>
        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-cream hover:text-saffron transition-colors"
        >
          <span aria-hidden>←</span>
          Return to the front of house
        </Link>
      </div>
    </main>
  );
}
