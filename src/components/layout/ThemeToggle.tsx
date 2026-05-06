"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { cn } from "@/lib/utils/cn";

type Theme = "dark" | "light";

const STORAGE_KEY = "kc-theme";

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme");
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage may be blocked — non-fatal */
  }
}

type Props = {
  className?: string;
  /** When true, renders a slightly larger button (used in the mobile menu). */
  size?: "sm" | "md";
};

export function ThemeToggle({ className, size = "sm" }: Props) {
  // Start undefined so the first render matches whatever the no-FOUC
  // script set on <html data-theme>. Avoids hydration flicker.
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readInitialTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  const isLight = theme === "light";
  const iconSize = size === "md" ? "h-5 w-5" : "h-4 w-4";
  const boxSize = size === "md" ? "h-11 w-11" : "h-9 w-9";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-cream/30 text-cream transition-colors duration-300 hover:border-saffron hover:bg-saffron hover:text-ember",
        boxSize,
        className,
      )}
    >
      {/* Both icons rendered; visibility flips after mount so SSR markup
          stays stable. Before mount, we show the dark-mode icon (moon) which
          matches the default theme. */}
      {mounted && isLight ? (
        <MdDarkMode className={iconSize} aria-hidden />
      ) : (
        <MdLightMode className={iconSize} aria-hidden />
      )}
    </button>
  );
}
