"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useAuth } from "@/lib/useAuth";
import { useSettings } from "@/context/SettingsContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AuthShell, Field, authInputCls } from "./AuthShell";
import { CheckEmail } from "./CheckEmail";

type Pending = { email: string; reason: "signup" | "signin"; sendFailed: boolean };

export function AuthForm({
  mode,
  googleEnabled,
  resetEnabled = false,
  verificationRequired = false,
  next,
}: {
  mode: "login" | "register";
  googleEnabled: boolean;
  /** Show "Forgot password?" (only when reset emails can actually be delivered). */
  resetEnabled?: boolean;
  /** New email/password accounts must confirm their address before signing in. */
  verificationRequired?: boolean;
  next: string;
}) {
  const { t } = useSettings();
  const router = useRouter();
  const { user } = useAuth();
  const isRegister = mode === "register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<Pending | null>(null);

  // Already signed in (or just signed in): continue to where they were going.
  useEffect(() => {
    if (user) router.replace(next);
  }, [user, next, router]);

  const fallbackError = t({
    en: "Something went wrong — please try again.",
    id: "Terjadi kesalahan — silakan coba lagi.",
  });
  /** Where the confirmation link lands; it keeps `next` so the learner continues afterwards. */
  const verifyCallback =
    next !== "/" ? `/verify-email?next=${encodeURIComponent(next)}` : "/verify-email";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const cleanEmail = email.trim();

    if (isRegister) {
      const res = await authClient.signUp.email({
        name: name.trim(),
        email: cleanEmail,
        password,
        callbackURL: verifyCallback,
      });
      setBusy(false);
      if (res.error) {
        setError(res.error.message || fallbackError);
        return;
      }
      if (verificationRequired) {
        setPending({ email: cleanEmail, reason: "signup", sendFailed: false });
        return;
      }
      router.refresh();
      return;
    }

    const res = await authClient.signIn.email({ email: cleanEmail, password, rememberMe });
    if (res.error) {
      if (res.error.code === "EMAIL_NOT_VERIFIED") {
        const sent = await authClient.sendVerificationEmail({
          email: cleanEmail,
          callbackURL: verifyCallback,
        });
        setPending({ email: cleanEmail, reason: "signin", sendFailed: Boolean(sent.error) });
      } else {
        setError(res.error.message || fallbackError);
      }
      setBusy(false);
      return;
    }
    router.refresh();
  }

  async function withGoogle() {
    setBusy(true);
    setError(null);
    const res = await authClient.signIn.social({ provider: "google", callbackURL: next });
    if (res?.error) {
      setError(res.error.message || fallbackError);
      setBusy(false);
    }
  }

  if (pending) {
    return (
      <AuthShell title={t({ en: "Check your inbox", id: "Periksa kotak masukmu" })}>
        <CheckEmail
          email={pending.email}
          reason={pending.reason}
          sendFailed={pending.sendFailed}
          callbackURL={verifyCallback}
          onBack={() => {
            setPending(null);
            setPassword("");
          }}
        />
      </AuthShell>
    );
  }

  const nextQuery = next !== "/" ? `?next=${encodeURIComponent(next)}` : "";

  return (
    <AuthShell
      title={
        isRegister
          ? t({ en: "Create your account", id: "Buat akunmu" })
          : t({ en: "Welcome back", id: "Selamat datang kembali" })
      }
      subtitle={
        isRegister
          ? t({
              en: "Save your progress and build your own study plan.",
              id: "Simpan progres dan susun rencana belajarmu sendiri.",
            })
          : t({ en: "Sign in to continue your plan.", id: "Masuk untuk melanjutkan rencanamu." })
      }
    >
      <Card className="space-y-4">
        {googleEnabled && (
          <>
            <Button variant="secondary" className="w-full" onClick={withGoogle} disabled={busy}>
              <GoogleIcon />
              {t({ en: "Continue with Google", id: "Lanjutkan dengan Google" })}
            </Button>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span className="h-px flex-1 bg-border" />
              {t({ en: "or", id: "atau" })}
              <span className="h-px flex-1 bg-border" />
            </div>
          </>
        )}

        <form onSubmit={onSubmit} className="space-y-3">
          {isRegister && (
            <Field label={t({ en: "Name", id: "Nama" })}>
              <input
                id="auth-name"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={authInputCls}
              />
            </Field>
          )}
          <Field label={t({ en: "Email", id: "Email" })}>
            <input
              id="auth-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={authInputCls}
            />
          </Field>
          <Field label={t({ en: "Password", id: "Kata sandi" })}>
            <input
              id="auth-password"
              type="password"
              required
              minLength={8}
              autoComplete={isRegister ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={authInputCls}
            />
          </Field>

          {isRegister ? (
            <p className="text-xs text-muted">
              {verificationRequired
                ? t({
                    en: "At least 8 characters. We'll email you a link to confirm your address.",
                    id: "Minimal 8 karakter. Kami akan mengirim tautan untuk mengonfirmasi emailmu.",
                  })
                : t({ en: "At least 8 characters.", id: "Minimal 8 karakter." })}
            </p>
          ) : (
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label htmlFor="auth-remember" className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    id="auth-remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="size-4 accent-[var(--primary)]"
                  />
                  {t({ en: "Keep me signed in", id: "Biarkan tetap masuk" })}
                </label>
                {resetEnabled && (
                  <Link
                    href="/forgot-password"
                    className="text-xs text-muted hover:text-fg hover:underline"
                  >
                    {t({ en: "Forgot password?", id: "Lupa kata sandi?" })}
                  </Link>
                )}
              </div>
              {!rememberMe && (
                <p className="text-xs text-muted">
                  {t({
                    en: "You'll be signed out when you close the browser — good for shared computers.",
                    id: "Kamu akan keluar saat browser ditutup — cocok untuk komputer bersama.",
                  })}
                </p>
              )}
            </div>
          )}

          {error && (
            <p role="alert" className="text-sm text-danger">
              {error}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={busy}>
            {busy
              ? "…"
              : isRegister
                ? t({ en: "Create account", id: "Buat akun" })
                : t({ en: "Sign in", id: "Masuk" })}
          </Button>
        </form>
      </Card>

      <p className="text-center text-sm text-muted">
        {isRegister
          ? t({ en: "Already have an account?", id: "Sudah punya akun?" })
          : t({ en: "New here?", id: "Baru di sini?" })}{" "}
        <Link
          href={`${isRegister ? "/login" : "/register"}${nextQuery}`}
          className="font-medium text-primary hover:underline"
        >
          {isRegister
            ? t({ en: "Sign in", id: "Masuk" })
            : t({ en: "Create an account", id: "Buat akun" })}
        </Link>
      </p>
    </AuthShell>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
    </svg>
  );
}
