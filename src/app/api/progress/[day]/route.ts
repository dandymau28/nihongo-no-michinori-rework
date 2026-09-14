import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { dayNumber, dayProgress } from "@/lib/server/schemas";

export async function PUT(req: Request, { params }: { params: Promise<{ day: string }> }) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();

  const day = dayNumber.safeParse((await params).day);
  const body = dayProgress.safeParse(await readJson(req));
  if (!day.success || !body.success) return badRequest();

  const fields = {
    status: body.data.status,
    reviewed: body.data.reviewed,
    notes: body.data.notes,
    exercises: body.data.exercises as unknown as Prisma.InputJsonValue,
  };
  await prisma.dayProgress.upsert({
    where: { userId_day: { userId, day: day.data } },
    create: { userId, day: day.data, ...fields },
    update: fields,
  });
  return json({ ok: true });
}
