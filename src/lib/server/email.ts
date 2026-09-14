import nodemailer, { type Transporter } from "nodemailer";

type Mail = { to: string; subject: string; text: string; html?: string };

let transporter: Transporter | null | undefined;

/** Any SMTP provider works (Gmail app password, Brevo, Resend, …). */
export function emailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST);
}

function getTransporter(): Transporter | null {
  if (transporter !== undefined) return transporter;
  const port = Number(process.env.SMTP_PORT || 587);
  transporter = emailConfigured()
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: port === 465,
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
      })
    : null;
  return transporter;
}

/**
 * Send an email over SMTP. Without SMTP configured (local dev, or before a
 * provider is set up) the message is printed to the server log instead.
 */
export async function sendEmail(mail: Mail): Promise<void> {
  const t = getTransporter();
  if (!t) {
    console.info(
      `\n[email] SMTP not configured — not sent.\nTo: ${mail.to}\nSubject: ${mail.subject}\n\n${mail.text}\n`,
    );
    return;
  }
  await t.sendMail({ from: process.env.EMAIL_FROM || process.env.SMTP_USER, ...mail });
}
