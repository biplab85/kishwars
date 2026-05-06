import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { LenisProvider } from "@/lib/lenis/LenisProvider";
import { rootMetadata, personJsonLd, websiteJsonLd, bookJsonLd } from "@/lib/seo/metadata";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = rootMetadata();

export const viewport: Viewport = {
  themeColor: "#0E0B09",
  width: "device-width",
  initialScale: 1,
};

// Runs synchronously before first paint to set `data-theme` on <html>,
// preventing a flash of the wrong theme. Reads localStorage("kc-theme")
// then falls back to the default (dark).
const themeInitScript = `(()=>{try{var t=localStorage.getItem("kc-theme");if(t==="light"){document.documentElement.setAttribute("data-theme","light");}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = [personJsonLd(), websiteJsonLd(), bookJsonLd()];

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </body>
    </html>
  );
}
