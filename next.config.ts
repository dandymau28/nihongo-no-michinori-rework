import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Runs as a Node server (`next start`) — auth and progress live in PostgreSQL.
  images: { unoptimized: true },
};

export default nextConfig;
