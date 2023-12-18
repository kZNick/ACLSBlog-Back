import { Repository } from "typeorm";
import {
  TUser,
  TUserRequest,
  TUsersResponse,
} from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schema/user.schema";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

export const createUserService = async (
  payload: TUserRequest
): Promise<TUsersResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const newUser: TUser = userRepo.create(payload);

  await userRepo.save(newUser);

  const userValid: TUsersResponse = userSchemaResponse.parse(newUser);

  return userValid;
};

export default createUserService;
