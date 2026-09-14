import type { Metadata } from "next";
import { AboutView } from "@/components/settings/AboutView";

export const metadata: Metadata = { title: "About · Nihongo No Michinori" };

export default function AboutPage() {
  return <AboutView />;
}
