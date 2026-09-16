import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./auth";

/** The signed-in user's id, or null for guests. */
export async function currentUserId(): Promise<string | null> {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user.id ?? null;
}

export const json = (data: unknown, status = 200) => NextResponse.json(data, { status });
export const unauthorized = () => json({ error: "unauthorized" }, 401);
export const notFound = () => json({ error: "not found" }, 404);
export const badRequest = (error = "bad request") => json({ error }, 400);
export const conflict = (error = "conflict") => json({ error }, 409);

export async function readJson(req: Request): Promise<unknown> {
  try {
    return await req.json();
  } catch {
    return null;
  }
}
