import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Shared hosting limits child processes during static generation.
    cpus: 1,
  },
};

export default nextConfig;
