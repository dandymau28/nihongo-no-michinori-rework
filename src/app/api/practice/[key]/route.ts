import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/server/db";
import {
  badRequest,
  currentUserId,
  json,
  notFound,
  readJson,
  unauthorized,
} from "@/lib/server/http";
import { PRACTICE_KEYS, practiceBody } from "@/lib/server/schemas";

type Ctx = { params: Promise<{ key: string }> };

const MAX_BYTES = 200_000;

function validKey(key: string): boolean {
  return (PRACTICE_KEYS as readonly string[]).includes(key);
}

export async function GET(_req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { key } = await params;
  if (!validKey(key)) return notFound();

  const row = await prisma.practiceStats.findUnique({ where: { userId_key: { userId, key } } });
  return json({ data: row?.data ?? null });
}

export async function PUT(req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { key } = await params;
  if (!validKey(key)) return notFound();

  const parsed = practiceBody.safeParse(await readJson(req));
  if (!parsed.success || JSON.stringify(parsed.data.data).length > MAX_BYTES) {
    return badRequest();
  }
  const data = parsed.data.data as Prisma.InputJsonValue;
  await prisma.practiceStats.upsert({
    where: { userId_key: { userId, key } },
    create: { userId, key, data },
    update: { data },
  });
  return json({ ok: true });
}
