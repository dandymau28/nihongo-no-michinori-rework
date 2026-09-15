import type { Metadata } from "next";
import { LessonLibrary } from "@/components/lessons/LessonLibrary";
import { PageHeading } from "@/components/layout/PageHeading";

export const metadata: Metadata = { title: "Lessons · Nihongo No Michinori" };

export default function LessonsPage() {
  return (
    <div className="space-y-6">
      <PageHeading
        title={{ en: "Lessons", id: "Materi" }}
        subtitle={{
          en: "Every lesson stands on its own — open one any time, or add it to your planner.",
          id: "Setiap materi berdiri sendiri — buka kapan saja, atau tambahkan ke planner-mu.",
        }}
      />
      <LessonLibrary />
    </div>
  );
}
