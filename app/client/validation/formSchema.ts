import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Inserta un nombre válido"),
  email: z.string().email("Inserta un correo válido"),
})