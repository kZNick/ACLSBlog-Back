import { z } from "zod";

const loginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { loginRequestSchema };
