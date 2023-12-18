import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createPostSchema, createPosttPatchSchema } from "../schema/posts.schemas";
import tokenIsValidmiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { allPostsController, allPostsUserController, createPostsController, postsDeleteController } from "../controllers/posts.controle";

const postRoutes: Router = Router();

postRoutes.post("",ensureDataIsValidMiddleware(createPostSchema),tokenIsValidmiddleware,createPostsController)
postRoutes.get("",tokenIsValidmiddleware, allPostsController)
postRoutes.get("/user", tokenIsValidmiddleware,allPostsUserController)
postRoutes.delete("/:id",tokenIsValidmiddleware, postsDeleteController)

export default postRoutes