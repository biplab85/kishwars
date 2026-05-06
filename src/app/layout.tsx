import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { LenisProvider } from "@/lib/lenis/LenisProvider";
import { ThemeProvider, themeInitScript } from "@/lib/theme/ThemeProvider";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = [personJsonLd(), websiteJsonLd(), bookJsonLd()];

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Sets data-theme on <html> before React hydrates — prevents
            a flash of the wrong theme on first paint. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </body>
    </html>
  );
}
