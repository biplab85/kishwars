import Link from "next/link";
import { text } from "@/content/text";
import { Logo } from "@/components/layout/Logo";

const resources = [
  { label: "Press", href: "#press" },
  { label: "Inquiries", href: "mailto:hello@kishwar.com.au" },
  { label: "Newsletter", href: "#newsletter" },
];

type IconProps = { className?: string };

const navIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  Home: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  ),
  Story: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 1-2-2Z" />
      <path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2Z" />
    </svg>
  ),
  Videos: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="6" width="14" height="12" rx="2" />
      <path d="m17 10 4-2v8l-4-2Z" />
    </svg>
  ),
  Press: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 5h13a2 2 0 0 1 2 2v11a2 2 0 0 0 2-2V8" />
      <path d="M4 5v13a2 2 0 0 0 2 2h13" />
      <path d="M8 9h7M8 13h7M8 17h4" />
    </svg>
  ),
  Cookbook: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 4h11a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2Z" />
      <path d="M6 18a2 2 0 0 1 2-2h11" />
      <path d="M10 4v6l2-1.5L14 10V4" />
    </svg>
  ),
  Newsletter: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

const socialIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  Instagram: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id="kc-ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FEDA77" />
          <stop offset="25%" stopColor="#F58529" />
          <stop offset="55%" stopColor="#DD2A7B" />
          <stop offset="80%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#kc-ig-grad)" strokeWidth={1.8} />
      <circle cx="12" cy="12" r="4" stroke="url(#kc-ig-grad)" strokeWidth={1.8} />
      <circle cx="17.5" cy="6.5" r="0.9" fill="url(#kc-ig-grad)" />
    </svg>
  ),
  YouTube: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#FF0033" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8Z" />
      <path d="M9.5 15.6V8.4L15.8 12l-6.3 3.6Z" fill="#fff" />
    </svg>
  ),
  Facebook: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#1877F2" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12H16l-.4 3h-2.2v7A10 10 0 0 0 22 12Z" />
    </svg>
  ),
  "X / Twitter": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const resourceIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  Press: navIcons.Press,
  Inquiries: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5Z" />
      <path d="m4.5 7 7.5 5.5L19.5 7" />
    </svg>
  ),
  Newsletter: navIcons.Newsletter,
};

// Footer navigation hides the same items as the header, plus "Home"
// (the cookbook/site logo above already links home, no need to repeat it).
const HIDDEN_FROM_NAV = ["Home", "Story", "Videos", "Press", "Cookbook", "Newsletter"];

export function Footer() {
  const { socials, legal } = text.footer;
  const navItems = text.nav.items.filter(
    (item) => !HIDDEN_FROM_NAV.includes(item.label),
  );
  const channel = text.nav.channelCta;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-cream/5 bg-ember">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-16 md:px-10">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand + CTA */}
          <div className="lg:pr-8">
            <Link href="/" aria-label="Kishwar — home" className="mb-4 inline-block">
              <Logo size="lg" />
            </Link>
            <p className="mb-6 max-w-sm text-sm text-cream/60">
              Chef, writer, and food creator. MasterChef Australia finalist —
              telling the story of heritage Bengali cuisine, one plate at a time.
            </p>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-pomegranate px-5 py-2.5 font-display text-sm font-semibold text-ember transition-transform duration-300 hover:scale-[1.02]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-cream">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((item) => {
                const Icon = navIcons[item.label];
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2.5 text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                    >
                      {Icon && <Icon className="h-4 w-4 text-cream/40 transition-colors group-hover:text-saffron" />}
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-cream">Social</h4>
            <ul className="space-y-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                    >
                      {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />}
                      <span>{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-cream">Resources</h4>
            <ul className="space-y-3">
              {resources.map((r) => {
                const Icon = resourceIcons[r.label];
                return (
                  <li key={r.label}>
                    <a
                      href={r.href}
                      className="group inline-flex items-center gap-2.5 text-sm text-cream/60 transition-colors duration-300 hover:text-gold"
                    >
                      {Icon && <Icon className="h-4 w-4 text-cream/40 transition-colors group-hover:text-gold" />}
                      <span>{r.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-cream/60">
            © {year} Kishwar Chowdhury. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-cream/60 transition-colors hover:text-cream">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-cream/60 transition-colors hover:text-cream">
              Terms of Service
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://sklentr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors hover:text-cream"
            >
              <span>Made by</span>
              <svg
                className="h-4 w-4 fill-pomegranate transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 21s-7.5-4.6-9.5-9.2C1 8.6 2.6 5 6.2 5c2 0 3.5 1.1 4.4 2.6h2.8C14.3 6.1 15.8 5 17.8 5c3.6 0 5.2 3.6 3.7 6.8C19.5 16.4 12 21 12 21z" />
              </svg>
              <span className="font-display font-semibold">Sklentr.</span>
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-cream/60 backdrop-blur transition-colors hover:text-saffron"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hidden but kept for SEO/accessibility */}
        <p className="sr-only">{legal}</p>
      </div>

      {/* Giant background wordmark */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden">
        <div
          className="-mb-[5vw] whitespace-nowrap text-center font-display font-bold leading-none text-cream/[0.04]"
          style={{ fontSize: "20vw" }}
        >
          KISHWAR
        </div>
      </div>
    </footer>
  );
}
