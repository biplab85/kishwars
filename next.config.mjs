/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Serve images directly from /public without going through the
    // /_next/image optimizer — guarantees they load even when ad blockers
    // or privacy extensions strip query-string image requests.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap"],
  },
};

export default nextConfig;
