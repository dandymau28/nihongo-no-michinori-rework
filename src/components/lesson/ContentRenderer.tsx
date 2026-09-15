"use client";

import type { ContentModule } from "@/lib/types";
import { LessonView } from "./LessonView";
import { TestRunner } from "./TestRunner";
import { ReadingRunner } from "./ReadingRunner";
import { ListeningRunner } from "./ListeningRunner";
import { DeckRunner } from "./DeckRunner";
import { SkillView } from "./SkillView";

export function ContentRenderer({
  module,
  lessonId,
}: {
  module: ContentModule;
  /** Catalog lesson whose progress the exercises record into. */
  lessonId: string;
}) {
  switch (module.type) {
    case "lesson":
      return <LessonView lesson={module} lessonId={lessonId} />;
    case "test":
      return <TestRunner module={module} lessonId={lessonId} />;
    case "reading":
      return <ReadingRunner module={module} lessonId={lessonId} />;
    case "listening":
      return <ListeningRunner module={module} lessonId={lessonId} />;
    case "deck":
      return <DeckRunner module={module} lessonId={lessonId} />;
    case "skill":
      return <SkillView module={module} lessonId={lessonId} />;
    default:
      return null;
  }
}
