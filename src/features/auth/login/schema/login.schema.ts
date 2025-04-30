import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Please enter your username" })
    .min(3, { message: "Username must be at least 3 characters." }),
  password: z
    .string()
    .min(1, { message: "Please enter your password" })
    .min(5, { message: "Password must be at least 5 characters." }),
  id_kelompok: z.number().min(1, { message: "Please enter id_kelompok" }),
  id_daerah: z.number().min(0, { message: "Please enter id_daerah" }),
  tahun: z.number().min(2000, { message: "Please enter tahun" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
