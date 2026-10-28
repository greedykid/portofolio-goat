import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama minimal harus 2 karakter")
    .max(80, "Nama maksimal 80 karakter"),
  email: z
    .string()
    .trim()
    .email("Format email tidak valid")
    .max(254, "Email maksimal 254 karakter"),
  subject: z
    .string()
    .trim()
    .min(3, "Subjek minimal harus 3 karakter")
    .max(120, "Subjek maksimal 120 karakter"),
  message: z
    .string()
    .trim()
    .min(10, "Pesan minimal harus 10 karakter")
    .max(5000, "Pesan maksimal 5.000 karakter"),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
