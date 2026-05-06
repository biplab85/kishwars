import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Force the Node.js runtime — nodemailer needs Node APIs (net, tls, etc.).
export const runtime = "nodejs";
// Don't pre-render or cache this route.
export const dynamic = "force-dynamic";

const ALLOWED_TYPES = new Set([
  "Speaking",
  "Brand Partnership",
  "Media",
  "Events",
  "Cookbook",
  "General",
]);

const MAX = {
  name: 120,
  email: 200,
  message: 5000,
};

type Payload = {
  name?: string;
  email?: string;
  type?: string;
  message?: string;
  // Honeypot — must be empty. Bots that fill every field will trip on this.
  website?: string;
};

function isEmail(s: string): boolean {
  // Pragmatic, not RFC-perfect — good enough to reject obvious garbage.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  // Honeypot — silently accept and discard. Don't reveal the trap.
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const type = (body.type ?? "General").trim();
  const message = (body.message ?? "").trim();

  // Validation
  if (!name || name.length > MAX.name) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 400 },
    );
  }
  if (!email || email.length > MAX.email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (!message || message.length > MAX.message) {
    return NextResponse.json(
      { ok: false, error: "Please write a message." },
      { status: 400 },
    );
  }
  const safeType = ALLOWED_TYPES.has(type) ? type : "General";

  const {
    MAILTRAP_HOST,
    MAILTRAP_PORT,
    MAILTRAP_USER,
    MAILTRAP_PASS,
    MAIL_FROM,
    MAIL_TO,
  } = process.env;

  if (
    !MAILTRAP_HOST ||
    !MAILTRAP_PORT ||
    !MAILTRAP_USER ||
    !MAILTRAP_PASS ||
    !MAIL_FROM ||
    !MAIL_TO
  ) {
    // eslint-disable-next-line no-console
    console.error("[contact] Missing SMTP env vars");
    return NextResponse.json(
      { ok: false, error: "Server is not configured for email yet." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: MAILTRAP_HOST,
    port: Number(MAILTRAP_PORT),
    auth: { user: MAILTRAP_USER, pass: MAILTRAP_PASS },
  });

  const subject = `Contact — ${safeType} — ${name}`;

  const text = [
    `New message from kishwar.com.au contact form`,
    ``,
    `Name:         ${name}`,
    `Email:        ${email}`,
    `Inquiry type: ${safeType}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
<!doctype html>
<html>
  <body style="font-family: Georgia, 'Times New Roman', serif; background:#0f0905; color:#f4e8d8; padding:32px;">
    <div style="max-width:560px; margin:0 auto; background:#1a0f08; border:1px solid rgba(201,162,74,0.25); border-radius:12px; padding:32px;">
      <p style="font-size:11px; letter-spacing:0.4em; text-transform:uppercase; color:#c9a24a; margin:0 0 12px;">
        Kishwar · Contact Form
      </p>
      <h1 style="font-size:22px; margin:0 0 20px; color:#f4e8d8;">
        ${escapeHtml(safeType)} inquiry from ${escapeHtml(name)}
      </h1>
      <table style="width:100%; border-collapse:collapse; margin-bottom:24px; font-size:14px;">
        <tr>
          <td style="padding:6px 0; color:#c9a24a; width:120px;">Name</td>
          <td style="padding:6px 0; color:#f4e8d8;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; color:#c9a24a;">Email</td>
          <td style="padding:6px 0; color:#f4e8d8;">
            <a href="mailto:${escapeHtml(email)}" style="color:#e2761b; text-decoration:none;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0; color:#c9a24a;">Type</td>
          <td style="padding:6px 0; color:#f4e8d8;">${escapeHtml(safeType)}</td>
        </tr>
      </table>
      <p style="font-size:11px; letter-spacing:0.32em; text-transform:uppercase; color:#c9a24a; margin:0 0 8px;">Message</p>
      <div style="font-size:15px; line-height:1.7; color:#f4e8d8; white-space:pre-wrap;">${escapeHtml(message)}</div>
    </div>
  </body>
</html>`.trim();

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] sendMail failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not send right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
