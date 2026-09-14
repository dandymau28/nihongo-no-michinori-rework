"use client";

import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { AUTHORED_SLUGS } from "@/content/registry";
import { Card } from "@/components/ui/Card";
import { PageHeading } from "@/components/layout/PageHeading";

export function AboutView() {
  const { t, lang } = useSettings();
  const en = lang === "en";

  return (
    <div className="space-y-6">
      <PageHeading title={STR.about_title} />

      <Card className="space-y-3 text-sm leading-relaxed text-fg/90">
        <p>
          {en
            ? "Nihongo No Michinori turns a 90-day JLPT study spreadsheet into a site you can actually work through. Each day has its lesson, drills, reading, listening, or mock test built in — no jumping between a dozen other websites."
            : "Nihongo No Michinori mengubah spreadsheet belajar JLPT 90 hari menjadi situs yang benar-benar bisa kamu kerjakan. Setiap hari punya materi, latihan, bacaan, menyimak, atau tes tiruannya sendiri — tanpa harus berpindah-pindah ke belasan situs lain."}
        </p>
        <p>
          {en
            ? `Content is being built day by day. Right now days 1–${AUTHORED_SLUGS.size >= 14 ? 14 : AUTHORED_SLUGS.size} are fully authored; later days show their original reference links until their native lesson lands.`
            : `Konten dibangun hari demi hari. Saat ini hari 1–${AUTHORED_SLUGS.size >= 14 ? 14 : AUTHORED_SLUGS.size} sudah lengkap; hari-hari berikutnya menampilkan tautan referensi aslinya sampai materinya siap.`}
        </p>
      </Card>

      <Card className="space-y-2 text-sm leading-relaxed text-fg/90">
        <h2 className="font-semibold">
          {en ? "Your plan and progress live in your account" : "Rencana dan progresmu tersimpan di akunmu"}
        </h2>
        <p>
          {en
            ? "Sign in with email or Google and your personal schedule, checklists, scores, notes, and trainer stats are saved to your account, on every device. Without an account you can still browse every lesson and try the drills — nothing is saved until you sign in."
            : "Masuk dengan email atau Google, dan jadwal pribadi, checklist, skor, catatan, serta statistik latihanmu tersimpan di akun, di semua perangkat. Tanpa akun kamu tetap bisa membuka semua materi dan mencoba latihannya — tidak ada yang tersimpan sebelum kamu masuk."}
        </p>
      </Card>

      <Card className="space-y-2 text-sm leading-relaxed text-fg/90">
        <h2 className="font-semibold">
          {en ? "About the content" : "Tentang kontennya"}
        </h2>
        <p>
          {en
            ? "Explanations, example sentences, passages, and exercise items are written for this site. They cover the same grammar points as the referenced resources (Tofugu, Bunpro, MLC, LTL, Genki and others) but are not copied from them. External links are provided so you can compare explanations."
            : "Penjelasan, contoh kalimat, bacaan, dan butir latihan ditulis khusus untuk situs ini. Semuanya mencakup poin tata bahasa yang sama dengan sumber yang dirujuk (Tofugu, Bunpro, MLC, LTL, Genki, dan lainnya) tetapi bukan salinan darinya. Tautan eksternal disediakan agar kamu bisa membandingkan penjelasan."}
        </p>
        <p className="text-xs text-muted">
          {en
            ? "The plan itself is from the \"Dandy Recipe N4\" study planner."
            : "Rencananya sendiri berasal dari planner belajar \"Dandy Recipe N4\"."}
        </p>
      </Card>
    </div>
  );
}
