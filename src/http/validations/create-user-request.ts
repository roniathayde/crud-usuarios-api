import { z } from "zod";


export const createBodyRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.enum(['Desenvolvedor', 'Engenheiro', 'Arquiteto']),
  description: z.string()
})