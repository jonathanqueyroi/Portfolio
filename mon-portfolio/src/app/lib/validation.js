// src/lib/validation.js
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
  phone: z.string().optional(),
  company: z.string().optional()
})