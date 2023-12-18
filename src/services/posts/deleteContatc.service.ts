import { Repository } from "typeorm";
import { Post } from "../../entities";
import { AppDataSource } from "../../data-source";
import { appError } from "../../erros";

const deletePostsService = async (
  postId: number,
  userId: number
): Promise<void> => {
  const postRepository: Repository<Post> = AppDataSource.getRepository(Post);

  const postToDelete: any = await postRepository
    .createQueryBuilder("post")
    .leftJoinAndSelect("post.user", "user")
    .where("post.id = :id", { id: postId })
    .getOne();

  if (!postToDelete) {
    throw new appError("Post not found", 404);
  }

  if (postToDelete.user.id !== userId) {
    throw new appError(
      "You are not allowed to delete a post other than your own.",
      403
    );
  }

  await postRepository.remove(postToDelete);
};

export default deletePostsService;
