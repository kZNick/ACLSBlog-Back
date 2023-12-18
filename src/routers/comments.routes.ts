import { Router } from "express";
import tokenIsValidmiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createCommentSchema } from "../schema/comments.schemas";
import { commentCreatController, commentDeleteController } from "../controllers/comments.controllers";

const commentsRoutes: Router = Router();

commentsRoutes.post("/:id",ensureDataIsValidMiddleware(createCommentSchema),tokenIsValidmiddleware,commentCreatController);
commentsRoutes.delete("/:id",tokenIsValidmiddleware,commentDeleteController)

export default commentsRoutes;
