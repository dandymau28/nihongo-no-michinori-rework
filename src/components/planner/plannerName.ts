import { getPreset } from "@/data/presets";
import type { Bi } from "@/lib/i18n";
import type { PlanSettings } from "@/lib/planTypes";

/** The planner's display name: its own name, else the preset's title, else "My planner". */
export function plannerName(
  settings: Pick<PlanSettings, "name" | "presetId">,
  t: (value: Bi | string) => string,
): string {
  if (settings.name) return settings.name;
  const preset = getPreset(settings.presetId);
  return preset ? t(preset.title) : t({ en: "My planner", id: "Planner saya" });
}
