import { text } from "@/content/text";
import { Reveal } from "@/components/motion/Reveal";

export function StatsStrip() {
  const { items } = text.stats;
  return (
    <section className="relative border-y border-cream/10 bg-ember py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={i} variant="rise" delay={i * 0.05}>
              <div>
                <p
                  className="font-display text-cream"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.figure}
                </p>
                <p className="mt-3 text-[11px] tracking-[0.32em] uppercase text-cream/50">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
