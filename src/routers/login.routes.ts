import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { loginRequestSchema } from "../schema/login.schemas";
import { loginControlller } from "../controllers/login.controllers";

const loginRoutes: Router = Router();

loginRoutes.post("",ensureDataIsValidMiddleware(loginRequestSchema),loginControlller);

export default loginRoutes;
