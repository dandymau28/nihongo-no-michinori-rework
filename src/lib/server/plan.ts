import type { Plan, PlanEntry } from "@/lib/planTypes";
import { prisma } from "./db";

type EntryRow = {
  id: string;
  materialDay: number | null;
  title: string | null;
  note: string | null;
  date: string | null;
  skipped: boolean;
  done: boolean;
};

export function toEntry(r: EntryRow): PlanEntry {
  return {
    id: r.id,
    materialDay: r.materialDay,
    title: r.title,
    note: r.note,
    date: r.date,
    skipped: r.skipped,
    done: r.done,
  };
}

export async function loadPlan(userId: string): Promise<Plan> {
  const [settings, rows] = await Promise.all([
    prisma.planSettings.findUnique({ where: { userId } }),
    prisma.planEntry.findMany({
      where: { userId },
      orderBy: [{ date: "asc" }, { materialDay: "asc" }, { createdAt: "asc" }],
    }),
  ]);
  return {
    settings: settings && {
      startDate: settings.startDate,
      studyDays: settings.studyDays,
      perDay: settings.perDay,
    },
    entries: rows.map(toEntry),
  };
}
