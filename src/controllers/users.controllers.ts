import { Request, Response } from "express";
import createUserService from "../services/users/createUsers.service";
import allUsersService from "../services/users/readUsers.service";
import updateUserService from "../services/users/updanteUsers.service";
import deleteUserService from "../services/users/deleteUser.service";
import allUserService from "../services/users/readUser.service";

const createUserController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const userData = req.body;

  const newUser = await createUserService(userData);

  return resp.status(201).json(newUser);
};

const allUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users = await allUsersService();

  return response.json(users);
};

const UserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId = response.locals.user.id
  const user = await allUserService(userId);
  return response.json(user);
};

const userUpdateeController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId = response.locals.user.id

  const user = await updateUserService(request.body, userId);
  return response.json(user);
};
const userDeleteController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId = response.locals.user.id

  await deleteUserService(userId);

  return response.status(204).send();
};

export { createUserController, allUsersController,userUpdateeController,userDeleteController,UserController };
