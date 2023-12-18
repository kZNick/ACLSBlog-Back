import { NextFunction, Request, Response } from "express";
import User from "../entities/users.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { appError } from "../erros";

const emailIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const email: string = req.body.email;

  let users: User[] | undefined;

  users = await userRepo.findBy({
    email: email,
  });

  if (users.length > 0) {
    throw new appError("Email already exists", 409);
  }

  return next();
};

export default emailIsValidMiddleware;
