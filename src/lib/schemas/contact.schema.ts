import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  subject: z.string().trim().min(1, "Please enter a subject").max(150),
  message: z.string().trim().min(1, "Please enter a message").max(5000),
  // Hidden field: people never see it, bots fill it in. The name must not look like
  // anything browser autofill recognises (website, url, company...)
  hp_field: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
