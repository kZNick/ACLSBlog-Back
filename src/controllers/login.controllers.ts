import { Request, Response } from "express";
import createTokenService from "../services/login/creatLogin.service";

const loginControlller = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await createTokenService(req.body);

  return res.json({
    token: token,
  });
};

export { loginControlller };
