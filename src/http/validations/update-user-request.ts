import { z } from "zod";


export const updateBodyRequestSchema = z.object({
  name: z.optional(z.string()),
  email: z.optional(z.string().email()),
  role: z.optional(z.enum(['Desenvolvedor', 'Engenheiro', 'Arquiteto'])),
  description: z.optional(z.string())
})
export const updateParamsRequestSchema = z.object({
  id: z.string().uuid(),
})