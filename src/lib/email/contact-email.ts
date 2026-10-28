import "server-only";
import type { ContactInput } from "@/lib/schemas/contact.schema";

export const CONTACT_FROM = "Portfolio Contact Form <onboarding@resend.dev>";

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const buildContactEmail = ({ name, email, subject, message }: ContactInput) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return {
    subject: `[Portfolio] ${subject}`,
    replyTo: email,
    text: [
      "New message from your portfolio contact form",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
      "",
      "Reply to this email to answer the sender directly.",
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;font-size:15px;color:#111827;max-width:600px">
        <p style="margin:0 0 16px;padding:10px 14px;background:#ecfccb;border-left:4px solid #65a30d;font-weight:bold">
          New message from your portfolio contact form
        </p>
        <p style="margin:0 0 4px"><strong>Name:</strong> ${safeName}</p>
        <p style="margin:0 0 4px"><strong>Email:</strong> ${safeEmail}</p>
        <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <div style="padding:14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;line-height:1.5">
          ${safeMessage}
        </div>
        <p style="margin:16px 0 0;color:#6b7280;font-size:13px">
          Reply to this email to answer the sender directly.
        </p>
      </div>
    `,
  };
};
