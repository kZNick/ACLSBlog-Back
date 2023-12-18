import { Repository } from "typeorm";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entity";

import { userSchemaResponse } from "../../schema/user.schema";
import { AppDataSource } from "../../data-source";

const allUsersService = async (): Promise<Array<TUsersResponse>> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  let users: User[] | undefined;

  users = await userRepo.find();

  const newUsers: Array<TUsersResponse> = [];

  users.forEach((element) => {
    const userValid: TUsersResponse = userSchemaResponse.parse(element);
    newUsers.push(userValid);
  });

  return newUsers;
};

export default allUsersService;
