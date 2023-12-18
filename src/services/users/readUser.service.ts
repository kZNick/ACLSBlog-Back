import { Repository } from "typeorm";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entity";
import { userSchemaResponse } from "../../schema/user.schema";
import { AppDataSource } from "../../data-source";

const allUserService = async (userId: number): Promise<any> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  let users: User[] | undefined;

  users = await userRepo.find({
    where: {
      id: userId,
    },
  });

  const userValid = userSchemaResponse.parse(users[0]);

  return userValid;
};

export default allUserService;
