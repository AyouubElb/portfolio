import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email, like name@example.com")
    .max(200, "Email must be 200 characters or fewer"),
  subject: z
    .string()
    .trim()
    .min(1, "Please enter a subject")
    .max(150, "Subject must be 150 characters or fewer"),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message")
    .max(5000, "Message must be 5000 characters or fewer"),
  // Hidden field: people never see it, bots fill it in. The name must not look like
  // anything browser autofill recognises (website, url, company...)
  hp_field: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
