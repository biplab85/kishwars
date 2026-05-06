"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
  url: string;
};

export function ShareBar({ title, url }: Props) {
  const [copied, setCopied] = useState(false);
  // Read the current page URL on the client so dev / staging share their own
  // domain rather than the canonical production URL hard-coded server-side.
  const [shareUrl, setShareUrl] = useState(url);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const enc = encodeURIComponent;
  const links = {
    twitter: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(shareUrl)}`,
    email: `mailto:?subject=${enc(title)}&body=${enc(`${title}\n\n${shareUrl}`)}`,
  };

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  }

  return (
    <div className="flex items-center gap-2.5">
      <span className="hidden text-[10px] tracking-[0.32em] uppercase text-cream/45 md:inline">
        Share
      </span>

      <ShareLink href={links.twitter} label="Share on X / Twitter">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-3.5 w-3.5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </ShareLink>

      <ShareLink href={links.facebook} label="Share on Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-3.5 w-3.5">
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12H16l-.4 3h-2.2v7A10 10 0 0 0 22 12Z" />
        </svg>
      </ShareLink>

      <ShareLink href={links.linkedin} label="Share on LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-3.5 w-3.5">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
        </svg>
      </ShareLink>

      <ShareLink href={links.email} label="Share via email" target={undefined}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5">
          <path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5Z" />
          <path d="m4.5 7 7.5 5.5L19.5 7" />
        </svg>
      </ShareLink>

      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Link copied" : "Copy link"}
        className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 bg-cream/[0.04] text-cream/70 backdrop-blur-md transition-colors hover:border-saffron/40 hover:text-saffron"
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5 text-saffron">
            <path d="M5 12l5 5L20 7" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
        )}
        <span
          className={`pointer-events-none absolute -top-9 right-0 whitespace-nowrap rounded-md bg-ember px-2.5 py-1 text-[9.5px] tracking-[0.28em] uppercase text-cream ring-1 ring-saffron/40 transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          Copied
        </span>
      </button>
    </div>
  );
}

function ShareLink({
  href,
  label,
  children,
  target = "_blank",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 bg-cream/[0.04] text-cream/70 backdrop-blur-md transition-colors hover:border-saffron/40 hover:text-saffron"
    >
      {children}
    </a>
  );
}
