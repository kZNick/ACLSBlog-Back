import { z } from "zod";

import {
  createUserPatchSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schema/user.schema";
import { User } from "../entities";


type TUser = User;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUsersResponse = z.infer<typeof userSchemaResponse>;
type TUserUpdatetREquest = z.infer<typeof createUserPatchSchema>;

export { TUser, TUserRequest, TUsersResponse, TUserUpdatetREquest };
