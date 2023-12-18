import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TPost } from "../../interfaces/post.interfaces";
import { Post } from "../../entities";

const  allPostsUserService = async (
  userId: number
): Promise<Array<TPost>> => {
  const postRepository: Repository<Post> =
    AppDataSource.getRepository(Post);
  const posts = await postRepository.find({
    where: {
      user: { id: userId },
    },
  });

  return posts;
};

export default allPostsUserService;
