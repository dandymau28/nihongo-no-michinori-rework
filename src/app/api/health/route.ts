import { NextResponse } from "next/server";
import { prisma } from "@/lib/server/db";

export const dynamic = "force-dynamic";

const noStore = { "cache-control": "no-store" };

/**
 * Used by scripts/deploy.sh before switching traffic, and by uptime monitors:
 * is this release running, which one is it, and can it reach the database?
 */
export async function GET() {
  // Next.js sets this from next.config's deploymentId (the release's commit).
  const release = process.env.NEXT_DEPLOYMENT_ID || null;
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: "ok", release }, { headers: noStore });
  } catch {
    return NextResponse.json(
      { status: "error", release, error: "database unreachable" },
      { status: 503, headers: noStore },
    );
  }
}
