import { Repository } from "typeorm";
import User from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { appError } from "../../erros";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schema/user.schema";

const createTokenService = async (
  loginData: TLoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new appError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new appError("Invalid credentials", 401);
  }

  const userResponse: TUsersResponse = userSchemaResponse.parse(user);

  const token = jwt.sign(
    {
      user: userResponse,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

export default createTokenService;