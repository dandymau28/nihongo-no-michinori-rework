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
            ? "Nihongo No Michinori is a JLPT study site where every lesson — grammar, vocabulary, reading, listening or a mock test — is built in, so there's no jumping between a dozen other websites. Follow a ready-made preset such as the 90-day N5 → N4 plan, or arrange single lessons into a planner of your own."
            : "Nihongo No Michinori adalah situs belajar JLPT dengan semua materi — tata bahasa, kosakata, bacaan, menyimak, atau tes tiruan — tersedia di dalamnya, tanpa harus berpindah-pindah ke belasan situs lain. Ikuti preset siap pakai seperti rencana 90 hari N5 → N4, atau susun materi satuan menjadi planner-mu sendiri."}
        </p>
        <p>
          {en
            ? `The site grows level by level. N5 and N4 lessons are available now — ${AUTHORED_SLUGS.size} of them with full built-in content and exercises, the rest with reference links until their content lands. N3, N2 and N1 come next.`
            : `Situs ini berkembang level demi level. Materi N5 dan N4 sudah tersedia — ${AUTHORED_SLUGS.size} di antaranya lengkap dengan konten dan latihan bawaan, sisanya dengan tautan referensi sampai kontennya siap. N3, N2, dan N1 menyusul.`}
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
      <Card className="space-y-2 text-sm leading-relaxed text-fg/90">
        <h2 className="font-semibold">
          {en ? "Kanji data and credits" : "Data kanji dan kredit"}
        </h2>
        <p>
          {en
            ? "The kanji you pick from when building a flashcard deck — the characters, their on'yomi and kun'yomi readings, their meanings and stroke counts — come from KANJIDIC, which is the property of the Electronic Dictionary Research and Development Group and is used in conformance with the Group's licence."
            : "Kanji yang bisa kamu pilih saat menyusun dek flashcard — karakternya, cara baca on'yomi dan kun'yomi, arti, serta jumlah coretannya — berasal dari KANJIDIC, milik Electronic Dictionary Research and Development Group dan dipakai sesuai lisensi mereka."}
        </p>
        <p>
          {en
            ? "Which JLPT level each kanji belongs to follows Jonathan Waller's JLPT Resources lists. The English meanings are KANJIDIC's own; the Indonesian ones are this site's translation of them, and are covered by the same licence."
            : "Pembagian level JLPT tiap kanji mengikuti daftar JLPT Resources dari Jonathan Waller. Arti bahasa Inggrisnya berasal dari KANJIDIC; arti bahasa Indonesianya adalah terjemahan yang dibuat situs ini, dan tercakup lisensi yang sama."}
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          <a className="underline hover:text-fg" href="https://www.edrdg.org/" target="_blank" rel="noopener noreferrer">
            edrdg.org
          </a>
          <a
            className="underline hover:text-fg"
            href="https://www.edrdg.org/edrdg/licence.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {en ? "EDRDG licence (CC BY-SA 4.0)" : "Lisensi EDRDG (CC BY-SA 4.0)"}
          </a>
          <a
            className="underline hover:text-fg"
            href="https://www.tanos.co.uk/jlpt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JLPT Resources
          </a>
        </p>
      </Card>
    </div>
  );
}
