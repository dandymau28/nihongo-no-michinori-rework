import { notFound, permanentRedirect } from "next/navigation";
import { lessonForLegacyDay } from "@/data/lessons";

/** Links from the original 90-day plan (/day/N) now live at /lessons/<id>. */
export default async function LegacyDayPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const lesson = /^\d+$/.test(day) ? lessonForLegacyDay(Number(day)) : undefined;
  if (!lesson) notFound();
  permanentRedirect(`/lessons/${lesson.id}`);
}
