"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { text } from "@/content/text";
import { cn } from "@/lib/utils/cn";
import { Logo } from "@/components/layout/Logo";

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("top");
  const [open, setOpen] = useState(false);

  const HIDDEN_FROM_HEADER = ["Story", "Videos", "Press", "Cookbook", "Newsletter"];
  const items = text.nav.items.filter(
    (item) => !HIDDEN_FROM_HEADER.includes(item.label),
  );
  const { channelCta } = text.nav;

  // Scroll-spy via IntersectionObserver (only meaningful on the home page)
  useEffect(() => {
    if (!isHome) return;
    const ids = items
      .filter((i) => i.href.startsWith("#"))
      .map((i) => i.href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [items, isHome]);

  // Solid bar after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const handleAnchor = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background,padding,border-color] duration-500 ease-cinematic",
          scrolled
            ? "bg-ember/85 backdrop-blur-md border-b border-cream/10 py-3"
            : "bg-transparent py-5 border-b border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
          {isHome ? (
            <a
              href="#top"
              onClick={handleAnchor("#top")}
              aria-label="Kishwar — back to top"
              className="inline-block"
            >
              <Logo size="sm" />
            </a>
          ) : (
            <Link href="/" aria-label="Kishwar — home" className="inline-block">
              <Logo size="sm" />
            </Link>
          )}

          {/* Desktop nav */}
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {items.map((item) => {
                const isHash = item.href.startsWith("#");
                const isActive = isHome
                  ? isHash && `#${active}` === item.href
                  : !isHash && pathname === item.href;
                const className = cn(
                  "relative inline-block px-4 py-2 text-[11px] tracking-[0.32em] uppercase transition-colors duration-300",
                  isActive ? "text-cream" : "text-cream/60 hover:text-cream",
                );
                const underline = (
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-4 right-4 -bottom-0.5 h-px origin-left transition-transform duration-500 ease-cinematic",
                      isActive ? "scale-x-100 bg-saffron" : "scale-x-0 bg-cream/40",
                    )}
                  />
                );
                return (
                  <li key={item.href}>
                    {isHash && isHome ? (
                      <a href={item.href} onClick={handleAnchor(item.href)} className={className}>
                        {item.label}
                        {underline}
                      </a>
                    ) : (
                      <Link href={isHash ? `/${item.href}` : item.href} className={className}>
                        {item.label}
                        {underline}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Channel CTA + mobile menu */}
          <div className="flex items-center gap-4">
            <a
              href={channelCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-cream/30 px-4 py-2 text-[11px] tracking-[0.28em] uppercase text-cream transition-colors duration-300 hover:border-saffron hover:bg-saffron hover:text-ember md:inline-flex"
            >
              <span>{channelCta.label}</span>
              <span aria-hidden>↗</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden"
            >
              <span
                className={cn(
                  "block h-px w-5 bg-cream transition-transform duration-300",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-cream transition-transform duration-300",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ember transition-[opacity,clip-path] duration-700 ease-cinematic lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        style={{
          clipPath: open
            ? "circle(150% at calc(100% - 40px) 40px)"
            : "circle(0% at calc(100% - 40px) 40px)",
        }}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pt-28">
          <nav aria-label="Primary mobile">
            <ul className="flex flex-col gap-2">
              {items.map((item, i) => {
                const isHash = item.href.startsWith("#");
                const isActive = isHome
                  ? isHash && `#${active}` === item.href
                  : !isHash && pathname === item.href;
                const className = "block py-3 font-display text-cream";
                const style = {
                  fontSize: "clamp(2rem, 9vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "0.6s, 0.6s",
                  transitionTimingFunction: "ease, ease",
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
                } as const;
                const inner = (
                  <>
                    {item.label}
                    {isActive && (
                      <span aria-hidden className="ml-3 text-saffron">·</span>
                    )}
                  </>
                );
                return (
                  <li key={item.href}>
                    {isHash && isHome ? (
                      <a
                        href={item.href}
                        onClick={handleAnchor(item.href)}
                        className={className}
                        style={style}
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link
                        href={isHash ? `/${item.href}` : item.href}
                        onClick={() => setOpen(false)}
                        className={className}
                        style={style}
                      >
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-auto pb-12">
            <a
              href={channelCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-3 text-[11px] tracking-[0.32em] uppercase text-cream"
            >
              {channelCta.label} <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
