import { Not, Repository } from "typeorm";
import {
  TUserUpdatetREquest,
  TUsersResponse,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schema/user.schema";
import { appError } from "../../erros";

const updateUserService = async (
  userData: TUserUpdatetREquest,
  userId: number
): Promise<TUsersResponse> => {
  
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  let userWithSameEmail;
  if (userData.email !== undefined) {
    userWithSameEmail = await userRepository.findOne({
      where: { email: userData.email, id: Not(userId) },
    });
  }

  if (userWithSameEmail) {
    throw new appError("Email already exists", 409);
  }


  const oldUserData: any | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData: User[] = userRepository.create({
    ...oldUserData,
    ...userData,
  });
  await userRepository.save(newUserData);

  const returnUser: TUsersResponse = userSchemaResponse.parse(newUserData);

  return returnUser;
};

export default updateUserService;
