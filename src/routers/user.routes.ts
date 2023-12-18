import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createUserPatchSchema, createUserSchema } from "../schema/user.schema";
import { UserController, allUsersController, createUserController, userDeleteController, userUpdateeController } from "../controllers/users.controllers";
import emailIsValidMiddleware from "../middlewares/ensureEmailIsValid";
import tokenIsValidmiddleware from "../middlewares/ensureTokenIsValid.middleware";


const usersRoutes: Router = Router();

usersRoutes.post("",ensureDataIsValidMiddleware(createUserSchema),emailIsValidMiddleware , createUserController);
usersRoutes.get("/all", tokenIsValidmiddleware, allUsersController);
usersRoutes.get("", tokenIsValidmiddleware, UserController);
usersRoutes.patch("",ensureDataIsValidMiddleware(createUserPatchSchema), tokenIsValidmiddleware,userUpdateeController)
usersRoutes.delete("",tokenIsValidmiddleware,userDeleteController)


export default usersRoutes;
