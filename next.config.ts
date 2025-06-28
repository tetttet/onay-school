import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.discordapp.com" },
      { protocol: "https", hostname: "gippity.ai" },
      { protocol: "https", hostname: "gippity.com" },
      { protocol: "https", hostname: "gippity.dev" },
      { protocol: "https", hostname: "gippity.co" },
      { protocol: "https", hostname: "aceternity.com" },
      { protocol: "https", hostname: "assets.aceternity.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
