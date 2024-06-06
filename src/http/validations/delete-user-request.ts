import { z } from "zod";

export const deleteParamsRequestSchema = z.object({
  id: z.string().uuid(),
})