/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 80, 85, 90],
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "yt3.googleusercontent.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap"],
  },
};

export default nextConfig;
