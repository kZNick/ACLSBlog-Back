import { Repository } from "typeorm";
import { TPostRequest, TPostResponse } from "../../interfaces/post.interfaces";
import { AppDataSource } from "../../data-source";
import { Post } from "../../entities";


export const createPostsService = async (
    data: TPostRequest,
    userId: number
  ): Promise<TPostResponse> => {
    const postRepo: Repository<any> = AppDataSource.getRepository(Post);
  
    data.user = userId
  
    const postUser = postRepo.create(data);
  
    await postRepo.save(postUser);
  
  
    return postUser;
  };
  
  export default createPostsService  ;