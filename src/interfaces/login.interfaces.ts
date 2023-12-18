import { z } from "zod";
import { loginRequestSchema } from "../schema/login.schemas";

type TLoginRequest = z.infer<typeof loginRequestSchema>;

export { TLoginRequest };
