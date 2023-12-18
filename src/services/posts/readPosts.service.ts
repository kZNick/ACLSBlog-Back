import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {Post } from "../../entities";
import { TPost } from "../../interfaces/post.interfaces";

const allPostsService = async (): Promise<Array<any>> => {
  const  postsRepository: Repository<Post> = AppDataSource.getRepository(Post);
  const posts = await   postsRepository.find({ relations: ["user", "comments","comments.user"], });

  const postsWithoutPassword = posts.map(post => {
    if (post.user) {
      const { password, ...userWithoutPassword } = post.user;
      return { ...post, user: userWithoutPassword };
    }

    
    return post;
  });

  return postsWithoutPassword;
};

export default allPostsService;
