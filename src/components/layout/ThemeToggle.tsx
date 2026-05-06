"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { cn } from "@/lib/utils/cn";

type Props = {
  className?: string;
};

/**
 * Round icon button that toggles between dark and light mode.
 * Designed to sit beside the "Watch on YouTube" CTA — its border / hover
 * styles mirror that button so the pair reads as one control group.
 *
 * The icon shown is the *target* mode (i.e. clicking the sun switches you
 * to dark), which is the standard convention.
 */
export function ThemeToggle({ className }: Props) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors duration-300 hover:border-saffron hover:bg-saffron hover:text-ember",
        className,
      )}
    >
      {isDark ? <MdLightMode size={18} aria-hidden /> : <MdDarkMode size={18} aria-hidden />}
    </button>
  );
}
