import { PLANNER } from "@/data/planner";
import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { loadPlan } from "@/lib/server/plan";
import { planSettings } from "@/lib/server/schemas";
import { buildSchedule } from "@/lib/schedule";

export async function GET() {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  return json(await loadPlan(userId));
}

/**
 * Save plan settings. With `rebuild` (always, on first setup) every non-skipped
 * lesson is laid out again from the start date; custom tasks are left alone.
 */
export async function PUT(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = planSettings.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid plan settings");
  const { rebuild, ...settings } = parsed.data;

  const existing = await prisma.planSettings.findUnique({ where: { userId } });
  const upsertSettings = prisma.planSettings.upsert({
    where: { userId },
    create: { userId, ...settings },
    update: settings,
  });

  if (!rebuild && existing) {
    await upsertSettings;
    return json(await loadPlan(userId));
  }

  const skippedRows = await prisma.planEntry.findMany({
    where: { userId, skipped: true, materialDay: { not: null } },
    select: { materialDay: true },
  });
  const skipped = new Set(skippedRows.map((r) => r.materialDay));
  const days = PLANNER.map((d) => d.day).filter((d) => !skipped.has(d));
  const schedule = buildSchedule(days, settings.startDate, settings.studyDays, settings.perDay);

  await prisma.$transaction([
    upsertSettings,
    prisma.planEntry.deleteMany({
      where: { userId, skipped: false, materialDay: { not: null } },
    }),
    prisma.planEntry.createMany({
      data: days.map((materialDay) => ({
        userId,
        materialDay,
        date: schedule.get(materialDay)!,
      })),
    }),
  ]);
  return json(await loadPlan(userId));
}
