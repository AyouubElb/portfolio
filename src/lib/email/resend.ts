import "server-only";
import { Resend } from "resend";

let client: Resend | null = null;

// Returns null when RESEND_API_KEY is missing so callers can report it instead of crashing
export const getResend = (): Resend | null => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  client ??= new Resend(apiKey);
  return client;
};
