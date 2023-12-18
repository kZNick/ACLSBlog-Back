import { NextFunction, Request, Response } from "express";
import { appError } from "../erros";
import jwt from "jsonwebtoken";
import "dotenv/config";
const tokenIsValidmiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token = req.headers.authorization;

  if (!token) {
    throw new appError("Missing bearer token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new appError(error.message, 401);
    }

    res.locals.user = {
      id: parseInt(decoded.sub),
      user: decoded.user,
    };

    return next();
  });
};

export default tokenIsValidmiddleware;
