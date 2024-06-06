import { z } from "zod";

export const getParamsRequestSchema = z.object({
  id: z.string().uuid(),
})