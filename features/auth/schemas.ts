import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8, "Minimum 8 characters"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Minimum 1 characters required"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum of 8 required"),
});
