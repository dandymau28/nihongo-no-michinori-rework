import { notFound, permanentRedirect } from "next/navigation";
import { LESSONS } from "@/data/lessons";

/** The old content-only view (/lesson/<content slug>) now lives at /lessons/<id>. */
export default async function LegacyContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = LESSONS.find((l) => l.contentSlug === slug);
  if (!lesson) notFound();
  permanentRedirect(`/lessons/${lesson.id}`);
}
