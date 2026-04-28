import { cn } from "@/lib/utils/cn";

type Variant = "solid" | "ghost" | "underline";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  variant = "solid",
  className,
  children,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 text-sm tracking-[0.18em] uppercase transition-colors duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<Variant, string> = {
    solid:
      "bg-cream text-ember px-7 py-4 hover:bg-saffron hover:text-ember rounded-full",
    ghost:
      "border border-cream/30 text-cream px-7 py-4 hover:border-cream hover:bg-cream hover:text-ember rounded-full",
    underline:
      "text-cream pb-1 border-b border-cream/40 hover:border-saffron hover:text-saffron",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
