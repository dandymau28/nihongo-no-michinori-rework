import type { Metadata } from "next";
import { SettingsView } from "@/components/settings/SettingsView";

export const metadata: Metadata = { title: "Settings · Nihongo No Michinori" };

export default function SettingsPage() {
  return <SettingsView />;
}
