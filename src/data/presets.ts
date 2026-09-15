import type { Bi } from "@/lib/i18n";
import type { JlptLevel } from "@/lib/types";
import { N4_CORE_LESSONS, N4_EXAM_SPRINT_LESSONS, N5_REFRESHER_LESSONS } from "./lessons";

/**
 * Ready-made planners. A preset is an ordered list of catalog lessons, grouped into stages.
 * Starting one copies its lessons into the learner's planner, where they can reorder,
 * remove or add lessons freely.
 *
 * `id` is stored on learners' planners — never change or reuse it.
 */

export interface PresetStage {
  id: string;
  title: Bi;
  lessonIds: string[];
}

export interface PlannerPreset {
  id: string;
  title: Bi;
  summary: Bi;
  levels: JlptLevel[];
  stages: PresetStage[];
}

const ids = (lessons: { id: string }[]) => lessons.map((l) => l.id);

const N5_REFRESHER: PresetStage = {
  id: "n5-refresher",
  title: { en: "N5 Refresher", id: "Penyegaran N5" },
  lessonIds: ids(N5_REFRESHER_LESSONS),
};

const N4_CORE: PresetStage = {
  id: "n4-core",
  title: { en: "N4 Grammar Core", id: "Inti Tata Bahasa N4" },
  lessonIds: ids(N4_CORE_LESSONS),
};

const N4_EXAM_SPRINT: PresetStage = {
  id: "n4-exam-sprint",
  title: { en: "N4 Exam Sprint", id: "Sprint Ujian N4" },
  lessonIds: ids(N4_EXAM_SPRINT_LESSONS),
};

export const PRESETS: PlannerPreset[] = [
  {
    id: "n5-n4-90-day",
    title: { en: "90-day N5 → N4", id: "90 hari N5 → N4" },
    summary: {
      en: "Refresh N5, work through every N4 grammar point, then drill reading, listening and full mock tests.",
      id: "Segarkan N5, pelajari semua tata bahasa N4, lalu latih membaca, menyimak, dan tes tiruan lengkap.",
    },
    levels: ["N5", "N4"],
    stages: [N5_REFRESHER, N4_CORE, N4_EXAM_SPRINT],
  },
  {
    id: "n5-refresher",
    title: N5_REFRESHER.title,
    summary: {
      en: "Particles, verb and adjective forms, reading and listening — finishing with an N5 exit test.",
      id: "Partikel, bentuk kata kerja dan kata sifat, membaca dan menyimak — ditutup dengan tes akhir N5.",
    },
    levels: ["N5"],
    stages: [N5_REFRESHER],
  },
  {
    id: "n4-core",
    title: N4_CORE.title,
    summary: {
      en: "Every N4 grammar point, with weekly reviews and a core mock test.",
      id: "Semua tata bahasa N4, dengan ulasan mingguan dan tes tiruan inti.",
    },
    levels: ["N4"],
    stages: [N4_CORE],
  },
  {
    id: "n4-exam-sprint",
    title: N4_EXAM_SPRINT.title,
    summary: {
      en: "Reading and listening strategies, grammar remedials and two full N4 mock tests.",
      id: "Strategi membaca dan menyimak, remedial tata bahasa, dan dua tes tiruan N4 lengkap.",
    },
    levels: ["N4"],
    stages: [N4_EXAM_SPRINT],
  },
];

const BY_ID = new Map(PRESETS.map((p) => [p.id, p]));

export function getPreset(id: string | null | undefined): PlannerPreset | undefined {
  return id ? BY_ID.get(id) : undefined;
}

export function presetLessonIds(preset: PlannerPreset): string[] {
  return preset.stages.flatMap((s) => s.lessonIds);
}
