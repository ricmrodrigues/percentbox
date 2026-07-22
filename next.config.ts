import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/ads.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
        ],
      },
      {
        source: "/(.*)\\.(svg|png|jpg|jpeg|gif|webp|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Common alternate spellings / legacy paths → canonical tool pages
      {
        source: "/percent-calculator",
        destination: "/percentage-calculator",
        permanent: true,
      },
      {
        source: "/percent-of",
        destination: "/what-is-x-percent-of-y",
        permanent: true,
      },
      {
        source: "/percent-increase",
        destination: "/percentage-increase-calculator",
        permanent: true,
      },
      {
        source: "/percent-decrease",
        destination: "/percentage-decrease-calculator",
        permanent: true,
      },
      {
        source: "/percent-change",
        destination: "/percentage-change-calculator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
