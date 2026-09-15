import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LESSONS, getLesson } from "@/data/lessons";
import { pick } from "@/lib/i18n";
import { LessonDetail } from "@/components/lessons/LessonDetail";

export function generateStaticParams() {
  return LESSONS.map((l) => ({ id: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const lesson = getLesson((await params).id);
  if (!lesson) return { title: "Lesson · Nihongo No Michinori" };
  return { title: `${lesson.level} · ${pick(lesson.title, "en")} · Nihongo No Michinori` };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!getLesson(id)) notFound();
  return <LessonDetail lessonId={id} />;
}
