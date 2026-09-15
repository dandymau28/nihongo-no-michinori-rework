import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

/**
 * scripts/deploy.sh writes the commit into each release folder. Next.js uses it as the
 * deploymentId, so a tab opened on an older release reloads cleanly into the new one
 * instead of requesting files that no longer exist.
 */
function releaseId(): string | undefined {
  const file = path.join(process.cwd(), ".release-id");
  return existsSync(file) ? readFileSync(file, "utf8").trim() || undefined : undefined;
}

const nextConfig: NextConfig = {
  // Runs as a Node server (`next start`) — auth and progress live in PostgreSQL.
  images: { unoptimized: true },
  deploymentId: releaseId(),
};

export default nextConfig;
