import type { Metadata } from "next";
import { PlannerView } from "@/components/planner/PlannerView";
import { PageHeading } from "@/components/layout/PageHeading";
import { STR } from "@/lib/strings";

export const metadata: Metadata = { title: "Planner · Nihongo No Michinori" };

export default function PlannerPage() {
  return (
    <div className="space-y-6">
      <PageHeading
        title={STR.planner_title}
        subtitle={{
          en: "Your study schedule — started from a preset, or built lesson by lesson.",
          id: "Jadwal belajarmu — dimulai dari preset, atau disusun materi demi materi.",
        }}
      />
      <PlannerView />
    </div>
  );
}
