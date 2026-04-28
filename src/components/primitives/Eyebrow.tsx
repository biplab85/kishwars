import { cn } from "@/lib/utils/cn";

export function Eyebrow({
  children,
  className,
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={cn(
        "text-[11px] tracking-[0.32em] uppercase text-cream/60",
        "flex items-center gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-cream/40" />
      <span>{children}</span>
    </p>
  );
}
