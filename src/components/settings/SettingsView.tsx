"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { usePlan } from "@/context/PlanContext";
import { authClient } from "@/lib/auth-client";
import { useAuth } from "@/lib/useAuth";
import { STR } from "@/lib/strings";
import { Card, CardTitle } from "@/components/ui/Card";
import { Segmented } from "@/components/ui/Segmented";
import { Button } from "@/components/ui/Button";
import { PageHeading } from "@/components/layout/PageHeading";
import { SignInPrompt } from "@/components/auth/SignInPrompt";
import { PlanSettingsForm } from "@/components/planner/PlanSettingsForm";

export function SettingsView() {
  const {
    t,
    lang,
    setLang,
    theme,
    setTheme,
    furigana,
    setFurigana,
    romaji,
    setRomaji,
  } = useSettings();
  const { user } = useAuth();
  const router = useRouter();
  const { exportJSON, importJSON, resetAll, canSave } = useProgress();
  const plan = usePlan();
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  function doExport() {
    const blob = new Blob([exportJSON()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nihongo-no-michinori-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function doImport(file: File) {
    const ok = await importJSON(await file.text());
    setMsg({ ok, text: ok ? t(STR.imported_ok) : t(STR.import_failed) });
  }

  async function doReset() {
    if (!confirm(t(STR.reset_confirm))) return;
    try {
      await resetAll();
      setMsg(null);
    } catch {
      setMsg({ ok: false, text: t({ en: "Couldn't reset — please try again.", id: "Gagal mengatur ulang — coba lagi." }) });
    }
  }

  async function signOut() {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <PageHeading title={STR.settings_title} />

      <Card className="space-y-4">
        <CardTitle>{t({ en: "Display", id: "Tampilan" })}</CardTitle>

        <Row label={t(STR.aid_language)}>
          <Segmented
            value={lang}
            onChange={setLang}
            options={[
              { value: "en", label: "English" },
              { value: "id", label: "Indonesia" },
            ]}
          />
        </Row>

        <Row label={t(STR.aid_theme)}>
          <Segmented
            value={theme}
            onChange={setTheme}
            options={[
              { value: "light", label: t(STR.theme_light) },
              { value: "dark", label: t(STR.theme_dark) },
              { value: "system", label: t(STR.theme_system) },
            ]}
          />
        </Row>

        <Row label={t(STR.aid_furigana)}>
          <Toggle checked={furigana} onChange={setFurigana} />
        </Row>

        <Row label={t(STR.aid_romaji)}>
          <Toggle checked={romaji} onChange={setRomaji} />
        </Row>
      </Card>

      {plan.isPreview ? (
        <SignInPrompt
          message={{
            en: "Sign in to set up your own study plan and keep your progress on every device.",
            id: "Masuk untuk menyusun rencana belajarmu sendiri dan menyimpan progres di semua perangkat.",
          }}
        />
      ) : (
        <Card className="space-y-3">
          <CardTitle>{t({ en: "Your plan", id: "Rencanamu" })}</CardTitle>
          {!plan.hydrated ? (
            <p className="text-sm text-muted">…</p>
          ) : plan.settings ? (
            <PlanSettingsForm key={JSON.stringify(plan.settings)} mode="edit" />
          ) : (
            <p className="text-sm text-muted">
              {t({ en: "You haven't set up a plan yet.", id: "Kamu belum menyusun rencana." })}{" "}
              <Link href="/planner" className="font-medium text-primary hover:underline">
                {t({ en: "Set it up", id: "Susun sekarang" })} →
              </Link>
            </p>
          )}
        </Card>
      )}

      {canSave && (
        <Card className="space-y-3">
          <CardTitle>{t(STR.settings_data)}</CardTitle>
          <p className="text-xs text-muted">
            {t({
              en: "Your progress is saved to your account. Export a JSON backup, or import one — including a file exported from the old browser-only version of the site.",
              id: "Progresmu tersimpan di akun. Ekspor cadangan JSON, atau impor — termasuk file yang diekspor dari versi lama situs yang hanya tersimpan di browser.",
            })}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="secondary" onClick={doExport}>
              {t(STR.export_progress)}
            </Button>
            <Button size="sm" variant="secondary" onClick={() => fileRef.current?.click()}>
              {t(STR.import_progress)}
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void doImport(f);
                e.target.value = "";
              }}
            />
            <Button size="sm" variant="danger" onClick={doReset}>
              {t(STR.reset_progress)}
            </Button>
          </div>
          {msg && <p className={`text-xs ${msg.ok ? "text-success" : "text-danger"}`}>{msg.text}</p>}
        </Card>
      )}

      {user && (
        <Card className="space-y-3">
          <CardTitle>{t({ en: "Account", id: "Akun" })}</CardTitle>
          <div className="text-sm">
            <p className="font-medium">{user.name}</p>
            <p className="text-muted">{user.email}</p>
          </div>
          <Button size="sm" variant="secondary" onClick={signOut}>
            {t({ en: "Sign out", id: "Keluar" })}
          </Button>
        </Card>
      )}
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="text-sm">{label}</span>
      {children}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border px-0.5 transition-colors ${
        checked ? "border-primary bg-primary" : "border-border bg-surface-2"
      }`}
    >
      <span
        className={`inline-block size-4 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-[22px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}
