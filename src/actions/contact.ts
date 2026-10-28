"use server";

import { contactSchema } from "@/lib/schemas/contact.schema";
import { getResend } from "@/lib/email/resend";
import { buildContactEmail, CONTACT_FROM } from "@/lib/email/contact-email";

export type ContactResult = { ok: true } | { ok: false; error: string };

const FALLBACK_ERROR =
  "Your message could not be sent. Please email me directly at ayoub.elbouuasri@gmail.com.";

export async function sendContactMessage(input: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? FALLBACK_ERROR };
  }

  // A filled hidden field means a bot: report success and send nothing
  if (parsed.data.hp_field) {
    console.warn("Contact form: hidden field was filled, message dropped", {
      email: parsed.data.email,
    });
    return { ok: true };
  }

  const resend = getResend();
  const to = process.env.CONTACT_TO_EMAIL;
  if (!resend || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return { ok: false, error: FALLBACK_ERROR };
  }

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to,
      ...buildContactEmail(parsed.data),
    });
    if (error) {
      console.error("Contact form: Resend rejected the email", error);
      return { ok: false, error: FALLBACK_ERROR };
    }
  } catch (err) {
    console.error("Contact form: could not reach Resend", err);
    return { ok: false, error: FALLBACK_ERROR };
  }

  return { ok: true };
}
