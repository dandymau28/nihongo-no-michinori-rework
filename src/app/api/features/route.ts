import { NextResponse } from "next/server";
import { emailLinksEnabled } from "@/lib/server/emailFeatures";

// Read from the environment on every request, so changing SMTP settings only needs a restart.
export const dynamic = "force-dynamic";

/** Public switches the client needs to decide what to offer. */
export function GET() {
  return NextResponse.json({ emailLinks: emailLinksEnabled() });
}
