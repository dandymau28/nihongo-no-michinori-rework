"use client";

import { useEffect, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { usePlan } from "@/context/PlanContext";
import { isISODate } from "@/lib/schedule";
import type { PlanEntry } from "@/lib/planTypes";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

const inputCls =
  "w-full rounded-xl border border-border bg-surface px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]";

/** Add a custom task, or edit one when `task` is given. */
export function TaskModal({
  open,
  onClose,
  task,
}: {
  open: boolean;
  onClose: () => void;
  task: PlanEntry | null;
}) {
  const { t } = useSettings();
  const { today, addTask, updateEntry } = usePlan();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setTitle(task?.title ?? "");
    setNote(task?.note ?? "");
    setDate(task?.date ?? today ?? "");
    setError(null);
  }, [open, task, today]);

  const valid = title.trim().length > 0 && isISODate(date);

  async function save() {
    if (!valid) return;
    setBusy(true);
    setError(null);
    try {
      if (task) {
        await updateEntry(task.id, { title: title.trim(), note: note.trim() || null, date });
      } else {
        await addTask({ title: title.trim(), note: note.trim() || undefined, date });
      }
      onClose();
    } catch {
      setError(t({ en: "Couldn't save — please try again.", id: "Gagal menyimpan — coba lagi." }));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={task ? t({ en: "Edit task", id: "Ubah tugas" }) : t({ en: "Add a task", id: "Tambah tugas" })}
      footer={
        <div className="flex justify-end gap-2">
          <Button size="sm" variant="secondary" onClick={onClose}>
            {t({ en: "Cancel", id: "Batal" })}
          </Button>
          <Button size="sm" onClick={save} disabled={busy || !valid}>
            {t({ en: "Save", id: "Simpan" })}
          </Button>
        </div>
      }
    >
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          void save();
        }}
      >
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">
            {t({ en: "Task", id: "Tugas" })}
          </span>
          <input
            autoFocus
            value={title}
            maxLength={200}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t({ en: "e.g. Watch an anime episode with JP subs", id: "mis. Nonton satu episode anime dengan subtitle Jepang" })}
            className={`${inputCls} h-10`}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">
            {t({ en: "Date", id: "Tanggal" })}
          </span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`${inputCls} h-10`}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">
            {t({ en: "Note (optional)", id: "Catatan (opsional)" })}
          </span>
          <textarea
            value={note}
            maxLength={2000}
            rows={3}
            onChange={(e) => setNote(e.target.value)}
            className={`${inputCls} resize-y py-2`}
          />
        </label>
        {error && <p className="text-xs text-danger">{error}</p>}
      </form>
    </Modal>
  );
}
